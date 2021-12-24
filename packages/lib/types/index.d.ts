/**
 * vue-final-modal v3.5.0-beta.22
 * (c) 2021
 * 
 * @license MIT
 */

declare class ModalInstance {
    modals: any[];
    openedModals: any[];
    VueFinalModal: any;
    dynamicModals: never[];
    ModalsContainer: any;
    show(modal: any, ...args: any[]): Promise<any> | undefined;
    hide(...names: any[]): Promise<PromiseSettledResult<any>[]>;
    hideAll(): Promise<PromiseSettledResult<any>[]>;
    toggle(name: any, ...args: any[]): Promise<PromiseSettledResult<any>[]>;
    get(...names: any[]): any[];
    existModal(options: any): boolean;
    useModal(_options: any): {
        show: () => Promise<any>;
        hide: () => Promise<any>;
        options: any;
    };
}
declare function createModalInstance(): {
    $vfm: ModalInstance;
    VueFinalModal: any;
    ModalsContainer: any;
    useModal: (_options: any) => {
        show: () => Promise<any>;
        hide: () => Promise<any>;
        options: any;
    };
};
declare const $vfm: ModalInstance;
declare const VueFinalModal: any;
declare const ModalsContainer: any;
declare function useModal(_options: any): {
    show: () => Promise<any>;
    hide: () => Promise<any>;
    options: any;
};

export { $vfm, ModalInstance, ModalsContainer, VueFinalModal, createModalInstance, useModal };
