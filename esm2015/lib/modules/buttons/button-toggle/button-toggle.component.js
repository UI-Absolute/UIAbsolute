/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BUTTON_SIZE, UIA_THEME } from './../../../../models';
export class ButtonToggleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS1hYnNvbHV0ZS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbnMvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUF1QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPbkYsTUFBTSxPQUFPLHFCQUFxQjtJQWFoQztRQVBBLHlCQUFvQixHQUFHO1lBQ3JCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDO0lBRWMsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBUTtRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTFCLFFBQVEsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUN6QixLQUFLLFNBQVMsQ0FBQyxTQUFTO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQ3BHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQzlFLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMs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O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxpVEFBNkM7O2FBRTlDOzs7Ozt1QkFHRSxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUZOLHlDQUF1Qzs7SUFDdkMsc0NBQW9COztJQUNwQix3Q0FBMEI7O0lBRTFCLHFEQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25zVG9nZ2xlQ29uZmlnLCBCVVRUT05fU0laRSwgVUlBX1RIRU1FIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdWlhLWJ1dHRvbi10b2dnbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi10b2dnbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBCdXR0b25zVG9nZ2xlQ29uZmlnO1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuO1xuXG4gIGJ1dHRvblRvZ2dsZVNldHRpbmdzID0ge1xuICAgIGJnX2NvbG9yOiAnYnRuLXByaW1hcnknLFxuICAgIHRleHRfY29sb3I6ICcnLFxuICAgIHNpemU6ICcnLFxuICAgIGlzT3V0bGluZTogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbHlTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIGFwcGx5U2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7IHJldHVybjsgfVxuXG4gICAgc3dpdGNoIChzZXR0aW5ncy5iZ19jb2xvcikge1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU0VDT05EQVJZOlxuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScgOiAnYnRuLXNlY29uZGFyeSc7XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNVQ0NFU1M6XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtc3VjY2VzcycgOiAnYnRuLXN1Y2Nlc3MnO1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQU5HRVI6XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtZGFuZ2VyJyA6ICdidG4tZGFuZ2VyJztcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuV0FSTklORzpcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS13YXJuaW5nJyA6ICdidG4td2FybmluZyc7XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuSU5GTzpcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1pbmZvJyA6ICdidG4taW5mbyc7XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkxJR0hUOlxuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLWxpZ2h0JyA6ICdidG4tbGlnaHQnO1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LWRhcmsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBUks6XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtZGFyaycgOiAnYnRuLWRhcmsnO1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLXByaW1hcnknIDogJ2J0bi1wcmltYXJ5JztcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy5zaXplID0gKHNldHRpbmdzLnNpemUgPT09IEJVVFRPTl9TSVpFLkxBUkdFKSA/ICdidG4tbGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHNldHRpbmdzLnNpemUgPT09IEJVVFRPTl9TSVpFLlNNQUxMKSA/ICdidG4tc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gIH1cblxufVxuIl19