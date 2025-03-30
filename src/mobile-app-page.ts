// @ts-ignore
import { configureLocalization, LocaleModule, msg } from "@lit/localize";
import resetStyles from "@unocss/reset/tailwind.css?inline";
import { css, html, LitElement, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";
import QRCode from "qrcode";
import { register } from "swiper/element/bundle";
import Viewer from "viewerjs";
import viewerStyles from "viewerjs/dist/viewer.css?inline";
import { sourceLocale, targetLocales } from "./generated/locale-codes";
import * as templates_zh_CN from "./generated/locales/zh-CN";

register();

interface Config {
  name: string;
  description: string;
  logo: string;
  screenshots: string[];
  downloads: Download[];
}

interface Download {
  name: string;
  url: string;
  icon: string;
  color: string;
}

const localizedTemplates = new Map([["zh-CN", templates_zh_CN]]);

const { setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async (locale) => localizedTemplates.get(locale) as LocaleModule,
});

export class MobileAppPage extends LitElement {
  // config

  @property({ type: String, attribute: "config", reflect: true })
  config: string = "{}";

  @property({ type: String, attribute: "language" })
  language: string = "en";

  @state()
  configObject: Config;

  @state()
  private viewerInstance: Viewer | null = null;

  constructor() {
    super();
    this.configObject = JSON.parse(this.config) as Config;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === "language" && oldValue !== newValue) {
      setLocale(newValue);
    }

    if (name === "config" && oldValue !== newValue) {
      try {
        this.configObject = JSON.parse(newValue) as Config;
        this.requestUpdate();
      } catch (e) {
        console.error("解析config JSON时出错:", e);
      }
    }
  }

  static override styles = [
    unsafeCSS(resetStyles),
    unsafeCSS(viewerStyles),
    css`
      :host {
        overflow-x: hidden;
      }
      .app-screenshot {
        border-radius: 12px;
      }
      .top-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 3rem 1rem;
        background-color: #f5f7fa;
        background-image: url(data:image/webp;base64,UklGRkwBAABXRUJQVlA4TEABAAAvP0uAAQ9w+//L/ytI24Dxb7ndmf/4Adg2kqRow3jv8s/wvPUe7p6pIvqvxm3biJ7c6e4j4gZKzQYpO2XYl6mtxVr2gP/4j//4j//4j//4j//4j//4j//4j//4j//4j//4j//4j//471spb+eMlH35Iw5oahH8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/vZ3k7p205c1OL4D/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+ez/L2znneZj/+I//+I//+I//+I//+I//+I//+I//+I//+I//+I//+I//+O/9LG/nHFmpLZQtDfMf//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef/72f5e2ctuXMTS2C//iP//iP//iP//iP//iP/+QhAA==);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      /* Swiper custom styles */
      swiper-container {
        width: 100%;
        padding: 20px 0 40px 0;
      }

      swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      swiper-container::part(bullet) {
        background-color: #d1d5db;
        opacity: 0.5;
        width: 12px;
        height: 12px;
      }

      swiper-container::part(bullet-active) {
        background-color: #3b82f6;
        opacity: 1;
        width: 12px;
        height: 12px;
      }

      swiper-container::part(pagination) {
        position: relative !important;
        bottom: 0 !important;
        margin-top: 20px;
      }

      @unocss-placeholder;
    `,
  ];

  @state()
  qrModalVisible = false;

  @state()
  currentQR = "";

  async showQRCode(download: Download) {
    const dataUrl = await QRCode.toDataURL(download.url, {
      width: 200,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    });

    this.currentQR = dataUrl;

    this.qrModalVisible = true;
    this.requestUpdate();
  }

  closeQRModal() {
    this.qrModalVisible = false;
    this.requestUpdate();
  }

  handleModalClick(event: MouseEvent) {
    const modal = this.shadowRoot?.getElementById("qrModal");
    if (event.target === modal) {
      this.closeQRModal();
    }
  }

  firstUpdated() {
    const swiperEl = this.shadowRoot?.querySelector("swiper-container");
    if (swiperEl) {
      Object.assign(swiperEl, {
        slidesPerView: 2.5,
        spaceBetween: 20,
        pagination: {
          clickable: true,
          type: "bullets",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        },
      });

      // Initialize Swiper
      swiperEl.initialize();
    }

    this.initializeViewer();
  }

  private initializeViewer() {
    if (this.viewerInstance) {
      return;
    }

    const gallery = this.shadowRoot?.getElementById("screenshot-gallery");
    const root = this.shadowRoot as unknown as HTMLElement;

    if (gallery && gallery.querySelector("img")) {
      this.viewerInstance = new Viewer(gallery as HTMLElement, {
        container: root,
        navbar: true,
        toolbar: {
          zoomIn: true,
          zoomOut: true,
          oneToOne: false,
          reset: true,
          prev: true,
          next: true,
          play: false,
          rotateLeft: false,
          rotateRight: false,
          flipHorizontal: false,
          flipVertical: false,
        },
        title: false,
        transition: true,
        zIndex: 999999,
      });
    } else {
      setTimeout(() => this.initializeViewer(), 100);
    }
  }

  render() {
    return html`
      <div class="overflow-x-hidden bg-gray-50 text-gray-800">
        <div class="w-full">
          <div class="top-content">
            <img
              src="${this.configObject.logo}"
              class="mb-6 size-24 shadow-md rounded-lg"
            />
            <h1 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              ${this.configObject.name} <span class="text-blue-600">App</span>
            </h1>
            <p class="mb-6 text-lg text-gray-600">
              ${this.configObject.description}
            </p>

            <div class="mt-4 flex flex-wrap justify-center gap-4 max-w-56rem">
              ${this.configObject.downloads?.map(
                (download) => html`
                  <a
                    href="${download.url}"
                    target="_blank"
                    class="flex w-full items-center justify-center rounded-lg px-3 py-2.5 text-white shadow-sm transition-opacity hover:opacity-80 lg:w-auto"
                    style="background-color: ${download.color};"
                  >
                    <img src="${download.icon}" class="size-4 mr-2" />
                    <div class="font-semibold text-sm">${download.name}</div>
                    <div class="ml-2">
                      <div
                        class="i-tabler-qrcode cursor-pointer text-lg hover:opacity-80"
                        @click=${(e: MouseEvent) => {
                          e.preventDefault();
                          this.showQRCode(download);
                        }}
                      ></div>
                    </div>
                  </a>
                `
              )}
            </div>
          </div>

          <div class="container mx-auto px-4 py-16">
            <h2 class="mb-8 text-center text-2xl font-bold text-gray-800">
              ${msg("App Preview")}
            </h2>

            <div
              class="max-w-100% lg:max-w-80% mx-auto"
              id="screenshot-gallery"
            >
              <swiper-container init="false" pagination="true">
                ${this.configObject.screenshots?.map(
                  (screenshot) => html`
                    <swiper-slide>
                      <img
                        src="${screenshot}"
                        class="app-screenshot cursor-pointer"
                        alt="App Screenshot"
                      />
                    </swiper-slide>
                  `
                )}
              </swiper-container>
            </div>
          </div>
        </div>

        <div
          id="qrModal"
          class="fixed inset-0 z-999999 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300"
          style="${this.qrModalVisible
            ? "opacity: 1; visibility: visible;"
            : "opacity: 0; visibility: hidden; pointer-events: none;"}"
          @click=${this.handleModalClick}
        >
          <div
            class="max-w-90% relative flex w-80 transform flex-col items-center rounded-xl bg-white px-6 py-8 shadow-xl transition-transform duration-300"
          >
            <h3 class="mb-4 text-center text-xl font-bold text-gray-800">
              ${msg("Scan to Download")}
            </h3>
            <div
              class="h-50 w-50 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gray-50 p-2"
            >
              ${this.currentQR
                ? html`<img src="${this.currentQR}" class="h-full w-full" />`
                : html`<div class="flex items-center justify-center">
                    <div
                      class="i-tabler-loader animate-spin text-2xl text-gray-400"
                    ></div>
                  </div>`}
            </div>
            <p class="mb-6 text-center text-sm text-gray-600">
              ${msg("Scan the QR code with your phone to download the app")}
            </p>

            <button
              class="group mt-2 flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-5 py-2 text-gray-700 transition-colors hover:bg-gray-200"
              @click=${this.closeQRModal}
            >
              <div
                class="i-tabler-x text-sm text-gray-600 group-hover:text-gray-800"
              ></div>
              <span class="text-sm text-gray-600 group-hover:text-gray-800"
                >${msg("Close")}</span
              >
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("mobile-app-page", MobileAppPage);
