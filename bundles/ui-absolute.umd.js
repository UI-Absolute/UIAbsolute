(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-absolute', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ui-absolute'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiAbsoluteService = /** @class */ (function () {
        function UiAbsoluteService() {
        }
        UiAbsoluteService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UiAbsoluteService.ctorParameters = function () { return []; };
        /** @nocollapse */ UiAbsoluteService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UiAbsoluteService_Factory() { return new UiAbsoluteService(); }, token: UiAbsoluteService, providedIn: "root" });
        return UiAbsoluteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiAbsoluteComponent = /** @class */ (function () {
        function UiAbsoluteComponent() {
        }
        /**
         * @return {?}
         */
        UiAbsoluteComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        UiAbsoluteComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-ui-absolute',
                        template: "\n    <p>\n      ui-absolute works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        UiAbsoluteComponent.ctorParameters = function () { return []; };
        return UiAbsoluteComponent;
    }());

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
    var UIA_THEME = {
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
    var BADGES_SHAPE = {
        DEFAULT: 'default',
        ROUNDED: 'rounded',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SPINNERS_SIZE = {
        SMALL: 'small',
        DEFAULT: 'default',
        LARGE: 'large',
    };
    /** @enum {string} */
    var SPINNERS_SPEED = {
        SLOW: 'slow',
        DEFAULT: 'default',
        FAST: 'fast',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SWITCHES_SIZE = {
        DEFAULT: 'default',
        LARGE: 'large',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var BUTTON_SIZE = {
        DEFAULT: 'default',
        SMALL: 'small',
        LARGE: 'large',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var CHECKBOX_ALIGN = {
        DEFAULT: 'default',
        HORIZONTAL: 'horizontal',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var RADIO_ALIGN = {
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
    var BadgesComponent = /** @class */ (function () {
        function BadgesComponent() {
            this.badgeSettings = {
                bg_color: 'bg-primary',
                text_color: 'text-white',
                shape: ''
            };
        }
        /**
         * @return {?}
         */
        BadgesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.applySettings(this.settings);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        BadgesComponent.prototype.applySettings = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
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
        };
        BadgesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-badge',
                        template: "<span class=\"badge\" [ngClass]=\"[badgeSettings.bg_color, badgeSettings.text_color, badgeSettings.shape]\">{{value}}</span>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BadgesComponent.ctorParameters = function () { return []; };
        BadgesComponent.propDecorators = {
            settings: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return BadgesComponent;
    }());
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
    var UIABadgesModule = /** @class */ (function () {
        function UIABadgesModule() {
        }
        UIABadgesModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BadgesComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            BadgesComponent
                        ]
                    },] }
        ];
        return UIABadgesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiAbsoluteModule = /** @class */ (function () {
        function UiAbsoluteModule() {
        }
        UiAbsoluteModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [UiAbsoluteComponent],
                        imports: [
                            UIABadgesModule
                        ],
                        exports: [UiAbsoluteComponent]
                    },] }
        ];
        return UiAbsoluteModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SpinnersComponent = /** @class */ (function () {
        function SpinnersComponent() {
            this.spinnerSettings = {
                color: 'text-success',
                size: '',
                speed: '0.75s'
            };
        }
        /**
         * @return {?}
         */
        SpinnersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.applySettings(this.settings);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        SpinnersComponent.prototype.applySettings = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
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
        };
        SpinnersComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-spinner',
                        template: "<div class=\"text-center d-inline-block\">\n  <div class=\"spinner-border\" [ngClass]=\"[spinnerSettings.color, spinnerSettings.size]\" [ngStyle]=\"{'animation-duration' : spinnerSettings.speed ? spinnerSettings.speed : '0.75s'}\" role=\"status\"></div>\n  <span class=\"d-block\" *ngIf=\"loadingText\">{{loadingText}}</span>\n</div>\n",
                        styles: [".spinner-border-lg{width:3rem;height:3rem}"]
                    }] }
        ];
        /** @nocollapse */
        SpinnersComponent.ctorParameters = function () { return []; };
        SpinnersComponent.propDecorators = {
            settings: [{ type: core.Input }],
            loadingText: [{ type: core.Input }]
        };
        return SpinnersComponent;
    }());
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
    var UIASpinnersModule = /** @class */ (function () {
        function UIASpinnersModule() {
        }
        UIASpinnersModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            SpinnersComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            SpinnersComponent
                        ]
                    },] }
        ];
        return UIASpinnersModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SwitchesComponent = /** @class */ (function () {
        function SwitchesComponent() {
            this.switchSettings = {
                color: 'switch-success',
                size: ''
            };
        }
        /**
         * @return {?}
         */
        SwitchesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.applySettings(this.settings);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        SwitchesComponent.prototype.applySettings = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
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
        };
        SwitchesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-switch',
                        template: "<div class=d-inline-block>\n  <div class=\"switch-checkbox\" [ngClass]=\"[switchSettings.color, switchSettings.size]\">\n    <input type=\"checkbox\" name=\"switch1\" id=\"switch1\" [checked]=\"checked\" [disabled]=\"disabled\">\n    <label for=\"switch1\"></label>\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SwitchesComponent.ctorParameters = function () { return []; };
        SwitchesComponent.propDecorators = {
            settings: [{ type: core.Input }],
            checked: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        return SwitchesComponent;
    }());
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
    var UIASwitchesModule = /** @class */ (function () {
        function UIASwitchesModule() {
        }
        UIASwitchesModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            SwitchesComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            SwitchesComponent
                        ]
                    },] }
        ];
        return UIASwitchesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonsComponent = /** @class */ (function () {
        function ButtonsComponent() {
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
        ButtonsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.applySettings(this.settings);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        ButtonsComponent.prototype.applySettings = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
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
        };
        ButtonsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-button',
                        template: "<button type=\"button\" class=\"btn\" [ngClass]=\"[buttonSettings.bg_color, buttonSettings.text_color, buttonSettings.size]\">{{value}}</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ButtonsComponent.ctorParameters = function () { return []; };
        ButtonsComponent.propDecorators = {
            settings: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return ButtonsComponent;
    }());
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
    var ButtonToggleComponent = /** @class */ (function () {
        function ButtonToggleComponent() {
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
        ButtonToggleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.applySettings(this.settings);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        ButtonToggleComponent.prototype.applySettings = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
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
        };
        ButtonToggleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-button-toggle',
                        template: "<div class=\"btn-group-toggle\" data-toggle=\"buttons\">\n  <label class=\"btn\" [ngClass]=\"[buttonToggleSettings.bg_color, buttonToggleSettings.text_color, buttonToggleSettings.size]\">\n    <input type=\"checkbox\" [checked]=\"checked\" autocomplete=\"off\"> {{value}}\n  </label>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ButtonToggleComponent.ctorParameters = function () { return []; };
        ButtonToggleComponent.propDecorators = {
            settings: [{ type: core.Input }],
            value: [{ type: core.Input }],
            checked: [{ type: core.Input }]
        };
        return ButtonToggleComponent;
    }());
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
    var UIAButtonsModule = /** @class */ (function () {
        function UIAButtonsModule() {
        }
        UIAButtonsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ButtonsComponent,
                            ButtonToggleComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            ButtonsComponent,
                            ButtonToggleComponent
                        ]
                    },] }
        ];
        return UIAButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipComponent = /** @class */ (function () {
        function TooltipComponent() {
        }
        /**
         * @return {?}
         */
        TooltipComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        TooltipComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () { };
        TooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-tooltip',
                        template: "\n<div class=\"tooltip-uia\">Hover over me\n  <span class=\"tooltiptext-uia\">Tooltip on right</span>\n</div>\n",
                        styles: [".tooltip-uia{position:relative;display:inline-block;border-bottom:1px dotted #000}.tooltip-uia .tooltiptext-uia{visibility:hidden;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1;display:inline-block}.tooltip-uia:hover .tooltiptext-uia{visibility:visible}"]
                    }] }
        ];
        /** @nocollapse */
        TooltipComponent.ctorParameters = function () { return []; };
        return TooltipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UIATooltipModule = /** @class */ (function () {
        function UIATooltipModule() {
        }
        UIATooltipModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            TooltipComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            TooltipComponent
                        ]
                    },] }
        ];
        return UIATooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            this.checkboxSettings = {
                color: '',
                align: ''
            };
        }
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.applySettings(this.settings);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        CheckboxComponent.prototype.applySettings = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
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
        };
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-checkbox',
                        template: "<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-1\" name=\"form-1-1\" type =\"checkbox\" checked=\"\">\n  <label for=\"form-1-1\">option 1</label>\n</div>\n<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-2\" name=\"form-1-2\" type =\"checkbox\">\n  <label for=\"form-1-2\">option 2</label>\n</div>\n<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-3\" name=\"form-1-3\" type =\"checkbox\">\n  <label for=\"form-1-3\">option 3</label>\n</div>\n",
                        styles: [".checkbox-inline{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        CheckboxComponent.propDecorators = {
            settings: [{ type: core.Input }]
        };
        return CheckboxComponent;
    }());
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
    var UIACheckboxModule = /** @class */ (function () {
        function UIACheckboxModule() {
        }
        UIACheckboxModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            CheckboxComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            CheckboxComponent
                        ]
                    },] }
        ];
        return UIACheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RadioComponent = /** @class */ (function () {
        function RadioComponent() {
            this.radioSettings = {
                color: '',
                align: ''
            };
        }
        /**
         * @return {?}
         */
        RadioComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.applySettings(this.settings);
        };
        /**
         * @param {?} settings
         * @return {?}
         */
        RadioComponent.prototype.applySettings = /**
         * @param {?} settings
         * @return {?}
         */
        function (settings) {
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
        };
        RadioComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-uia-radio',
                        template: "<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-1\">\n  <label for=\"form-3-1\">Option 1</label>\n</div>\n<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-2\" checked=\"\">\n  <label for=\"form-3-2\">Option 2</label>\n</div>\n<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-3\">\n  <label for=\"form-3-3\">Option 3</label>\n</div>\n",
                        styles: [".radio-inline{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        RadioComponent.ctorParameters = function () { return []; };
        RadioComponent.propDecorators = {
            settings: [{ type: core.Input }]
        };
        return RadioComponent;
    }());
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
    var UIARadioModule = /** @class */ (function () {
        function UIARadioModule() {
        }
        UIARadioModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            RadioComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            RadioComponent
                        ]
                    },] }
        ];
        return UIARadioModule;
    }());

    exports.BADGES_SHAPE = BADGES_SHAPE;
    exports.BUTTON_SIZE = BUTTON_SIZE;
    exports.CHECKBOX_ALIGN = CHECKBOX_ALIGN;
    exports.RADIO_ALIGN = RADIO_ALIGN;
    exports.SPINNERS_SIZE = SPINNERS_SIZE;
    exports.SPINNERS_SPEED = SPINNERS_SPEED;
    exports.SWITCHES_SIZE = SWITCHES_SIZE;
    exports.UIABadgesModule = UIABadgesModule;
    exports.UIAButtonsModule = UIAButtonsModule;
    exports.UIACheckboxModule = UIACheckboxModule;
    exports.UIARadioModule = UIARadioModule;
    exports.UIASpinnersModule = UIASpinnersModule;
    exports.UIASwitchesModule = UIASwitchesModule;
    exports.UIATooltipModule = UIATooltipModule;
    exports.UIA_THEME = UIA_THEME;
    exports.UiAbsoluteComponent = UiAbsoluteComponent;
    exports.UiAbsoluteModule = UiAbsoluteModule;
    exports.UiAbsoluteService = UiAbsoluteService;
    exports.ɵa = BadgesComponent;
    exports.ɵb = SpinnersComponent;
    exports.ɵc = SwitchesComponent;
    exports.ɵd = ButtonsComponent;
    exports.ɵe = ButtonToggleComponent;
    exports.ɵf = TooltipComponent;
    exports.ɵg = CheckboxComponent;
    exports.ɵh = RadioComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-absolute.umd.js.map
