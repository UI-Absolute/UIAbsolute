/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BUTTON_SIZE, UIA_THEME } from './../../../models';
export class ButtonsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS1hYnNvbHV0ZS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBaUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTzFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFZM0I7UUFQQSxtQkFBYyxHQUFHO1lBQ2YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsVUFBVSxFQUFFLEVBQUU7WUFDZCxJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7SUFFYyxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFMUIsUUFBUSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3pCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUN4RSxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFD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Ozs7dUJBR0UsS0FBSztvQkFDTCxLQUFLOzs7O0lBRE4sb0NBQWlDOztJQUNqQyxpQ0FBb0I7O0lBRXBCLDBDQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25zQ29uZmlnLCBCVVRUT05fU0laRSwgVUlBX1RIRU1FIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdWlhLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBCdXR0b25zQ29uZmlnO1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuXG4gIGJ1dHRvblNldHRpbmdzID0ge1xuICAgIGJnX2NvbG9yOiAnYnRuLXByaW1hcnknLFxuICAgIHRleHRfY29sb3I6ICcnLFxuICAgIHNpemU6ICcnLFxuICAgIGlzT3V0bGluZTogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbHlTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIGFwcGx5U2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7IHJldHVybjsgfVxuXG4gICAgc3dpdGNoIChzZXR0aW5ncy5iZ19jb2xvcikge1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU0VDT05EQVJZOlxuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScgOiAnYnRuLXNlY29uZGFyeSc7XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNVQ0NFU1M6XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtc3VjY2VzcycgOiAnYnRuLXN1Y2Nlc3MnO1xuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQU5HRVI6XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtZGFuZ2VyJyA6ICdidG4tZGFuZ2VyJztcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuV0FSTklORzpcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS13YXJuaW5nJyA6ICdidG4td2FybmluZyc7XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuSU5GTzpcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1pbmZvJyA6ICdidG4taW5mbyc7XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkxJR0hUOlxuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLWxpZ2h0JyA6ICdidG4tbGlnaHQnO1xuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LWRhcmsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBUks6XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtZGFyaycgOiAnYnRuLWRhcmsnO1xuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLXByaW1hcnknIDogJ2J0bi1wcmltYXJ5JztcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5idXR0b25TZXR0aW5ncy5zaXplID0gKHNldHRpbmdzLnNpemUgPT09IEJVVFRPTl9TSVpFLkxBUkdFKSA/ICdidG4tbGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHNldHRpbmdzLnNpemUgPT09IEJVVFRPTl9TSVpFLlNNQUxMKSA/ICdidG4tc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gIH1cblxufVxuIl19