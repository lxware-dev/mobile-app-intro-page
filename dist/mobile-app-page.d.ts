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
    language: string;
    configObject: Config;
    private viewerInstance;
    constructor();
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    static styles: import('lit').CSSResult[];
    qrModalVisible: boolean;
    currentQR: string;
    showQRCode(download: Download): Promise<void>;
    closeQRModal(): void;
    handleModalClick(event: MouseEvent): void;
    firstUpdated(): void;
    private initializeViewer;
    render(): import('lit').TemplateResult<1>;
}
export {};
