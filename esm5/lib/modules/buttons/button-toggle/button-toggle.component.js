/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BUTTON_SIZE, UIA_THEME } from './../../../../models';
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
        { type: Component, args: [{
                    selector: 'lib-uia-button-toggle',
                    template: "<div class=\"btn-group-toggle\" data-toggle=\"buttons\">\n  <label class=\"btn\" [ngClass]=\"[buttonToggleSettings.bg_color, buttonToggleSettings.text_color, buttonToggleSettings.size]\">\n    <input type=\"checkbox\" [checked]=\"checked\" autocomplete=\"off\"> {{value}}\n  </label>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ButtonToggleComponent.ctorParameters = function () { return []; };
    ButtonToggleComponent.propDecorators = {
        settings: [{ type: Input }],
        value: [{ type: Input }],
        checked: [{ type: Input }]
    };
    return ButtonToggleComponent;
}());
export { ButtonToggleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS1hYnNvbHV0ZS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbnMvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUF1QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkY7SUFrQkU7UUFQQSx5QkFBb0IsR0FBRztZQUNyQixRQUFRLEVBQUUsYUFBYTtZQUN2QixVQUFVLEVBQUUsRUFBRTtZQUNkLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCw2Q0FBYTs7OztJQUFiLFVBQWMsUUFBUTtRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTFCLFFBQVEsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUN6QixLQUFLLFNBQVMsQ0FBQyxTQUFTO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQ3BHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQzlFLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMs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Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxpVEFBNkM7O2lCQUU5Qzs7Ozs7MkJBR0UsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBeURSLDRCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E3RFkscUJBQXFCOzs7SUFFaEMseUNBQXVDOztJQUN2QyxzQ0FBb0I7O0lBQ3BCLHdDQUEwQjs7SUFFMUIscURBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbnNUb2dnbGVDb25maWcsIEJVVFRPTl9TSVpFLCBVSUFfVEhFTUUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11aWEtYnV0dG9uLXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2V0dGluZ3M6IEJ1dHRvbnNUb2dnbGVDb25maWc7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgYnV0dG9uVG9nZ2xlU2V0dGluZ3MgPSB7XG4gICAgYmdfY29sb3I6ICdidG4tcHJpbWFyeScsXG4gICAgdGV4dF9jb2xvcjogJycsXG4gICAgc2l6ZTogJycsXG4gICAgaXNPdXRsaW5lOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBseVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICBzd2l0Y2ggKHNldHRpbmdzLmJnX2NvbG9yKSB7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TRUNPTkRBUlk6XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JyA6ICdidG4tc2Vjb25kYXJ5JztcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU1VDQ0VTUzpcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1zdWNjZXNzJyA6ICdidG4tc3VjY2Vzcyc7XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBTkdFUjpcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1kYW5nZXInIDogJ2J0bi1kYW5nZXInO1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5XQVJOSU5HOlxuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLXdhcm5pbmcnIDogJ2J0bi13YXJuaW5nJztcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5JTkZPOlxuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLWluZm8nIDogJ2J0bi1pbmZvJztcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuTElHSFQ6XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtbGlnaHQnIDogJ2J0bi1saWdodCc7XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFSSzpcbiAgICAgICAgdGhpcy5idXR0b25Ub2dnbGVTZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1kYXJrJyA6ICdidG4tZGFyayc7XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYnV0dG9uVG9nZ2xlU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtcHJpbWFyeScgOiAnYnRuLXByaW1hcnknO1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICB9XG5cbiAgICB0aGlzLmJ1dHRvblRvZ2dsZVNldHRpbmdzLnNpemUgPSAoc2V0dGluZ3Muc2l6ZSA9PT0gQlVUVE9OX1NJWkUuTEFSR0UpID8gJ2J0bi1sZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoc2V0dGluZ3Muc2l6ZSA9PT0gQlVUVE9OX1NJWkUuU01BTEwpID8gJ2J0bi1zbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgfVxuXG59XG4iXX0=