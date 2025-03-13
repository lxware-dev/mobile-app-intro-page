import { LitElement } from 'lit';
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
export declare class MobileAppPage extends LitElement {
    config: string;
    configObject: Config;
    constructor();
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    static styles: import('lit').CSSResult[];
    qrModalVisible: boolean;
    currentQR: {
        title: string;
        url: string;
        description: string;
        dataUrl: string;
    };
    showQRCode(download: Download): Promise<void>;
    closeQRModal(): void;
    handleModalClick(event: MouseEvent): void;
    firstUpdated(): void;
    render(): import('lit').TemplateResult<1>;
}
export {};
