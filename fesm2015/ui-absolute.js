import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiAbsoluteService {
    constructor() { }
}
UiAbsoluteService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UiAbsoluteService.ctorParameters = () => [];
/** @nocollapse */ UiAbsoluteService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UiAbsoluteService_Factory() { return new UiAbsoluteService(); }, token: UiAbsoluteService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiAbsoluteComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiAbsoluteComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ui-absolute',
                template: `
    <p>
      ui-absolute works!
    </p>
  `
            }] }
];
/** @nocollapse */
UiAbsoluteComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function BadgesConfig() { }
if (false) {
    /** @type {?|undefined} */
    BadgesConfig.prototype.bg_color;
    /** @type {?|undefined} */
    BadgesConfig.prototype.shape;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SpinnersConfig() { }
if (false) {
    /** @type {?|undefined} */
    SpinnersConfig.prototype.color;
    /** @type {?|undefined} */
    SpinnersConfig.prototype.size;
    /** @type {?|undefined} */
    SpinnersConfig.prototype.speed;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SwitchesConfig() { }
if (false) {
    /** @type {?|undefined} */
    SwitchesConfig.prototype.color;
    /** @type {?|undefined} */
    SwitchesConfig.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ButtonsConfig() { }
if (false) {
    /** @type {?|undefined} */
    ButtonsConfig.prototype.bg_color;
    /** @type {?|undefined} */
    ButtonsConfig.prototype.isOutline;
    /** @type {?|undefined} */
    ButtonsConfig.prototype.size;
}
/**
 * @record
 */
function ButtonsToggleConfig() { }
if (false) {
    /** @type {?|undefined} */
    ButtonsToggleConfig.prototype.group;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CheckboxConfig() { }
if (false) {
    /** @type {?|undefined} */
    CheckboxConfig.prototype.color;
    /** @type {?|undefined} */
    CheckboxConfig.prototype.align;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RadioConfig() { }
if (false) {
    /** @type {?|undefined} */
    RadioConfig.prototype.color;
    /** @type {?|undefined} */
    RadioConfig.prototype.align;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const UIA_THEME = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    WARNING: 'warning',
    SUCCESS: 'success',
    DANGER: 'danger',
    INFO: 'info',
    LIGHT: 'light',
    DARK: 'dark',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const BADGES_SHAPE = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SPINNERS_SIZE = {
    SMALL: 'small',
    DEFAULT: 'default',
    LARGE: 'large',
};
/** @enum {string} */
const SPINNERS_SPEED = {
    SLOW: 'slow',
    DEFAULT: 'default',
    FAST: 'fast',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SWITCHES_SIZE = {
    DEFAULT: 'default',
    LARGE: 'large',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const BUTTON_SIZE = {
    DEFAULT: 'default',
    SMALL: 'small',
    LARGE: 'large',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CHECKBOX_ALIGN = {
    DEFAULT: 'default',
    HORIZONTAL: 'horizontal',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const RADIO_ALIGN = {
    DEFAULT: 'default',
    HORIZONTAL: 'horizontal',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BadgesComponent {
    constructor() {
        this.badgeSettings = {
            bg_color: 'bg-primary',
            text_color: 'text-white',
            shape: ''
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applySettings(this.settings);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    applySettings(settings) {
        if (!settings) {
            return;
        }
        // For setting the background color of badge based on the settings recieved
        switch (settings.bg_color) {
            case UIA_THEME.SECONDARY:
                this.badgeSettings.bg_color = 'bg-secondary';
                break;
            case UIA_THEME.SUCCESS:
                this.badgeSettings.bg_color = 'bg-success';
                break;
            case UIA_THEME.DANGER:
                this.badgeSettings.bg_color = 'bg-danger';
                break;
            case UIA_THEME.WARNING:
                this.badgeSettings.bg_color = 'bg-warning';
                this.badgeSettings.text_color = 'text-dark';
                break;
            case UIA_THEME.INFO:
                this.badgeSettings.bg_color = 'bg-info';
                break;
            case UIA_THEME.LIGHT:
                this.badgeSettings.bg_color = 'bg-light';
                this.badgeSettings.text_color = 'text-dark';
                break;
            case UIA_THEME.DARK:
                this.badgeSettings.bg_color = 'bg-dark';
                break;
            default:
                this.badgeSettings.bg_color = 'bg-primary';
        }
        // For setting the shape of badge based on settings recieved
        switch (settings.shape) {
            case BADGES_SHAPE.ROUNDED:
                this.badgeSettings.shape = 'rounded-pill';
                break;
            default:
                this.badgeSettings.shape = '';
        }
    }
}
BadgesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-badge',
                template: "<span class=\"badge\" [ngClass]=\"[badgeSettings.bg_color, badgeSettings.text_color, badgeSettings.shape]\">{{value}}</span>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BadgesComponent.ctorParameters = () => [];
BadgesComponent.propDecorators = {
    settings: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BadgesComponent.prototype.settings;
    /** @type {?} */
    BadgesComponent.prototype.value;
    /** @type {?} */
    BadgesComponent.prototype.badgeSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIABadgesModule {
}
UIABadgesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BadgesComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    BadgesComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiAbsoluteModule {
}
UiAbsoluteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UiAbsoluteComponent],
                imports: [
                    UIABadgesModule
                ],
                exports: [UiAbsoluteComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnersComponent {
    constructor() {
        this.spinnerSettings = {
            color: 'text-success',
            size: '',
            speed: '0.75s'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applySettings(this.settings);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    applySettings(settings) {
        if (!settings) {
            return;
        }
        // For setting the background color of badge based on the settings recieved
        switch (settings.color) {
            case UIA_THEME.SECONDARY:
                this.spinnerSettings.color = 'text-secondary';
                break;
            case UIA_THEME.SUCCESS:
                this.spinnerSettings.color = 'text-success';
                break;
            case UIA_THEME.DANGER:
                this.spinnerSettings.color = 'text-danger';
                break;
            case UIA_THEME.WARNING:
                this.spinnerSettings.color = 'text-warning';
                break;
            case UIA_THEME.INFO:
                this.spinnerSettings.color = 'text-info';
                break;
            case UIA_THEME.LIGHT:
                this.spinnerSettings.color = 'text-light';
                break;
            case UIA_THEME.DARK:
                this.spinnerSettings.color = 'text-dark';
                break;
            default:
                this.spinnerSettings.color = 'text-primary';
        }
        switch (settings.size) {
            case SPINNERS_SIZE.SMALL:
                this.spinnerSettings.size = 'spinner-border-sm';
                break;
            case SPINNERS_SIZE.LARGE:
                this.spinnerSettings.size = 'spinner-border-lg';
                break;
            default:
                this.spinnerSettings.size = '';
        }
        switch (settings.speed) {
            case SPINNERS_SPEED.SLOW:
                this.spinnerSettings.speed = '2s';
                break;
            case SPINNERS_SPEED.FAST:
                this.spinnerSettings.speed = '0.25s';
                break;
            default:
                this.spinnerSettings.speed = '0.75s';
        }
    }
}
SpinnersComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-spinner',
                template: "<div class=\"text-center d-inline-block\">\n  <div class=\"spinner-border\" [ngClass]=\"[spinnerSettings.color, spinnerSettings.size]\" [ngStyle]=\"{'animation-duration' : spinnerSettings.speed ? spinnerSettings.speed : '0.75s'}\" role=\"status\"></div>\n  <span class=\"d-block\" *ngIf=\"loadingText\">{{loadingText}}</span>\n</div>\n",
                styles: [".spinner-border-lg{width:3rem;height:3rem}"]
            }] }
];
/** @nocollapse */
SpinnersComponent.ctorParameters = () => [];
SpinnersComponent.propDecorators = {
    settings: [{ type: Input }],
    loadingText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SpinnersComponent.prototype.settings;
    /** @type {?} */
    SpinnersComponent.prototype.loadingText;
    /** @type {?} */
    SpinnersComponent.prototype.spinnerSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIASpinnersModule {
}
UIASpinnersModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SpinnersComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    SpinnersComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwitchesComponent {
    constructor() {
        this.switchSettings = {
            color: 'switch-success',
            size: ''
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applySettings(this.settings);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    applySettings(settings) {
        if (!settings) {
            return;
        }
        switch (settings.color) {
            case UIA_THEME.SECONDARY:
                this.switchSettings.color = 'switch-secondary';
                break;
            case UIA_THEME.SUCCESS:
                this.switchSettings.color = 'switch-success';
                break;
            case UIA_THEME.DANGER:
                this.switchSettings.color = 'switch-danger';
                break;
            case UIA_THEME.WARNING:
                this.switchSettings.color = 'switch-warning';
                break;
            case UIA_THEME.INFO:
                this.switchSettings.color = 'switch-info';
                break;
            case UIA_THEME.LIGHT:
                this.switchSettings.color = 'switch-light';
                break;
            case UIA_THEME.DARK:
                this.switchSettings.color = 'switch-dark';
                break;
            default:
                this.switchSettings.color = 'switch-primary';
        }
        switch (settings.size) {
            case SWITCHES_SIZE.LARGE:
                this.switchSettings.size = '';
                break;
            default:
                this.switchSettings.size = 'switch-sm';
        }
    }
}
SwitchesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-switch',
                template: "<div class=d-inline-block>\n  <div class=\"switch-checkbox\" [ngClass]=\"[switchSettings.color, switchSettings.size]\">\n    <input type=\"checkbox\" name=\"switch1\" id=\"switch1\" [checked]=\"checked\" [disabled]=\"disabled\">\n    <label for=\"switch1\"></label>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SwitchesComponent.ctorParameters = () => [];
SwitchesComponent.propDecorators = {
    settings: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SwitchesComponent.prototype.settings;
    /** @type {?} */
    SwitchesComponent.prototype.checked;
    /** @type {?} */
    SwitchesComponent.prototype.disabled;
    /** @type {?} */
    SwitchesComponent.prototype.switchSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIASwitchesModule {
}
UIASwitchesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SwitchesComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    SwitchesComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonsComponent {
    constructor() {
        this.buttonSettings = {
            bg_color: 'btn-primary',
            text_color: '',
            size: '',
            isOutline: false
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applySettings(this.settings);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    applySettings(settings) {
        if (!settings) {
            return;
        }
        switch (settings.bg_color) {
            case UIA_THEME.SECONDARY:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-secondary' : 'btn-secondary';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.SUCCESS:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-success' : 'btn-success';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.DANGER:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-danger' : 'btn-danger';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.WARNING:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-warning' : 'btn-warning';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-dark';
                break;
            case UIA_THEME.INFO:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-info' : 'btn-info';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.LIGHT:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-light' : 'btn-light';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-dark';
                break;
            case UIA_THEME.DARK:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-dark' : 'btn-dark';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            default:
                this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-primary' : 'btn-primary';
                this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
        }
        this.buttonSettings.size = (settings.size === BUTTON_SIZE.LARGE) ? 'btn-lg'
            : (settings.size === BUTTON_SIZE.SMALL) ? 'btn-sm'
                : '';
    }
}
ButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-button',
                template: "<button type=\"button\" class=\"btn\" [ngClass]=\"[buttonSettings.bg_color, buttonSettings.text_color, buttonSettings.size]\">{{value}}</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ButtonsComponent.ctorParameters = () => [];
ButtonsComponent.propDecorators = {
    settings: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ButtonsComponent.prototype.settings;
    /** @type {?} */
    ButtonsComponent.prototype.value;
    /** @type {?} */
    ButtonsComponent.prototype.buttonSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonToggleComponent {
    constructor() {
        this.buttonToggleSettings = {
            bg_color: 'btn-primary',
            text_color: '',
            size: '',
            isOutline: false
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applySettings(this.settings);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    applySettings(settings) {
        if (!settings) {
            return;
        }
        switch (settings.bg_color) {
            case UIA_THEME.SECONDARY:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-secondary' : 'btn-secondary';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.SUCCESS:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-success' : 'btn-success';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.DANGER:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-danger' : 'btn-danger';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.WARNING:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-warning' : 'btn-warning';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-dark';
                break;
            case UIA_THEME.INFO:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-info' : 'btn-info';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            case UIA_THEME.LIGHT:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-light' : 'btn-light';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-dark';
                break;
            case UIA_THEME.DARK:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-dark' : 'btn-dark';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
                break;
            default:
                this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-primary' : 'btn-primary';
                this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
        }
        this.buttonToggleSettings.size = (settings.size === BUTTON_SIZE.LARGE) ? 'btn-lg'
            : (settings.size === BUTTON_SIZE.SMALL) ? 'btn-sm'
                : '';
    }
}
ButtonToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-button-toggle',
                template: "<div class=\"btn-group-toggle\" data-toggle=\"buttons\">\n  <label class=\"btn\" [ngClass]=\"[buttonToggleSettings.bg_color, buttonToggleSettings.text_color, buttonToggleSettings.size]\">\n    <input type=\"checkbox\" [checked]=\"checked\" autocomplete=\"off\"> {{value}}\n  </label>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ButtonToggleComponent.ctorParameters = () => [];
ButtonToggleComponent.propDecorators = {
    settings: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ButtonToggleComponent.prototype.settings;
    /** @type {?} */
    ButtonToggleComponent.prototype.value;
    /** @type {?} */
    ButtonToggleComponent.prototype.checked;
    /** @type {?} */
    ButtonToggleComponent.prototype.buttonToggleSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIAButtonsModule {
}
UIAButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonsComponent,
                    ButtonToggleComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ButtonsComponent,
                    ButtonToggleComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-tooltip',
                template: "\n<div class=\"tooltip-uia\">Hover over me\n  <span class=\"tooltiptext-uia\">Tooltip on right</span>\n</div>\n",
                styles: [".tooltip-uia{position:relative;display:inline-block;border-bottom:1px dotted #000}.tooltip-uia .tooltiptext-uia{visibility:hidden;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;display:inline-block}.tooltip-uia:hover .tooltiptext-uia{visibility:visible}"]
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIATooltipModule {
}
UIATooltipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TooltipComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    TooltipComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() {
        this.checkboxSettings = {
            color: '',
            align: ''
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applySettings(this.settings);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    applySettings(settings) {
        if (!settings) {
            return;
        }
        // For setting the color of checkbox based on the settings recieved
        switch (settings.color) {
            case UIA_THEME.SECONDARY:
                this.checkboxSettings.color = 'checkbox-secondary';
                break;
            case UIA_THEME.SUCCESS:
                this.checkboxSettings.color = 'checkbox-success';
                break;
            case UIA_THEME.DANGER:
                this.checkboxSettings.color = 'checkbox-danger';
                break;
            case UIA_THEME.WARNING:
                this.checkboxSettings.color = 'checkbox-warning';
                break;
            case UIA_THEME.INFO:
                this.checkboxSettings.color = 'checkbox-info';
                break;
            case UIA_THEME.LIGHT:
                this.checkboxSettings.color = 'checkbox-light';
                break;
            case UIA_THEME.DARK:
                this.checkboxSettings.color = 'checkbox-dark';
                break;
            default:
                this.checkboxSettings.color = 'checkbox-primary';
        }
        switch (settings.align) {
            case CHECKBOX_ALIGN.HORIZONTAL:
                this.checkboxSettings.align = 'checkbox-inline';
                break;
            default:
                this.checkboxSettings.align = '';
        }
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-checkbox',
                template: "<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-1\" name=\"form-1-1\" type =\"checkbox\" checked=\"\">\n  <label for=\"form-1-1\">option 1</label>\n</div>\n<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-2\" name=\"form-1-2\" type =\"checkbox\">\n  <label for=\"form-1-2\">option 2</label>\n</div>\n<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-3\" name=\"form-1-3\" type =\"checkbox\">\n  <label for=\"form-1-3\">option 3</label>\n</div>\n",
                styles: [".checkbox-inline{display:inline-block}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    settings: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.settings;
    /** @type {?} */
    CheckboxComponent.prototype.checkboxSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIACheckboxModule {
}
UIACheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CheckboxComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    CheckboxComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioComponent {
    constructor() {
        this.radioSettings = {
            color: '',
            align: ''
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applySettings(this.settings);
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    applySettings(settings) {
        if (!settings) {
            return;
        }
        // For setting the color of radio based on the settings recieved
        switch (settings.color) {
            case UIA_THEME.SECONDARY:
                this.radioSettings.color = 'radio-secondary';
                break;
            case UIA_THEME.SUCCESS:
                this.radioSettings.color = 'radio-success';
                break;
            case UIA_THEME.DANGER:
                this.radioSettings.color = 'radio-danger';
                break;
            case UIA_THEME.WARNING:
                this.radioSettings.color = 'radio-warning';
                break;
            case UIA_THEME.INFO:
                this.radioSettings.color = 'radio-info';
                break;
            case UIA_THEME.LIGHT:
                this.radioSettings.color = 'radio-light';
                break;
            case UIA_THEME.DARK:
                this.radioSettings.color = 'radio-dark';
                break;
            default:
                this.radioSettings.color = 'radio-primary';
        }
        switch (settings.align) {
            case RADIO_ALIGN.HORIZONTAL:
                this.radioSettings.align = 'radio-inline';
                break;
            default:
                this.radioSettings.align = '';
        }
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-radio',
                template: "<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-1\">\n  <label for=\"form-3-1\">Option 1</label>\n</div>\n<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-2\" checked=\"\">\n  <label for=\"form-3-2\">Option 2</label>\n</div>\n<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-3\">\n  <label for=\"form-3-3\">Option 3</label>\n</div>\n",
                styles: [".radio-inline{display:inline-block}"]
            }] }
];
/** @nocollapse */
RadioComponent.ctorParameters = () => [];
RadioComponent.propDecorators = {
    settings: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.settings;
    /** @type {?} */
    RadioComponent.prototype.radioSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIARadioModule {
}
UIARadioModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    RadioComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    RadioComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BADGES_SHAPE, BUTTON_SIZE, CHECKBOX_ALIGN, RADIO_ALIGN, SPINNERS_SIZE, SPINNERS_SPEED, SWITCHES_SIZE, UIABadgesModule, UIAButtonsModule, UIACheckboxModule, UIARadioModule, UIASpinnersModule, UIASwitchesModule, UIATooltipModule, UIA_THEME, UiAbsoluteComponent, UiAbsoluteModule, UiAbsoluteService, BadgesComponent as ɵa, SpinnersComponent as ɵb, SwitchesComponent as ɵc, ButtonsComponent as ɵd, ButtonToggleComponent as ɵe, TooltipComponent as ɵf, CheckboxComponent as ɵg, RadioComponent as ɵh };
//# sourceMappingURL=ui-absolute.js.map
