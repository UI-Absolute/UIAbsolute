/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BUTTON_SIZE, UIA_THEME } from './../../../models';
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
        { type: Component, args: [{
                    selector: 'lib-uia-button',
                    template: "<button type=\"button\" class=\"btn\" [ngClass]=\"[buttonSettings.bg_color, buttonSettings.text_color, buttonSettings.size]\">{{value}}</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ButtonsComponent.ctorParameters = function () { return []; };
    ButtonsComponent.propDecorators = {
        settings: [{ type: Input }],
        value: [{ type: Input }]
    };
    return ButtonsComponent;
}());
export { ButtonsComponent };
if (false) {
    /** @type {?} */
    ButtonsComponent.prototype.settings;
    /** @type {?} */
    ButtonsComponent.prototype.value;
    /** @type {?} */
    ButtonsComponent.prototype.buttonSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS1hYnNvbHV0ZS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBaUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTFFO0lBaUJFO1FBUEEsbUJBQWMsR0FBRztZQUNmLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDO0lBRWMsQ0FBQzs7OztJQUVqQixtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHdDQUFhOzs7O0lBQWIsVUFBYyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFMUIsUUFBUSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3pCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUN4RSxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFD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Ozs7OzJCQUdFLEtBQUs7d0JBQ0wsS0FBSzs7SUF5RFIsdUJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTVEWSxnQkFBZ0I7OztJQUUzQixvQ0FBaUM7O0lBQ2pDLGlDQUFvQjs7SUFFcEIsMENBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbnNDb25maWcsIEJVVFRPTl9TSVpFLCBVSUFfVEhFTUUgfSBmcm9tICcuLy4uLy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11aWEtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2V0dGluZ3M6IEJ1dHRvbnNDb25maWc7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgYnV0dG9uU2V0dGluZ3MgPSB7XG4gICAgYmdfY29sb3I6ICdidG4tcHJpbWFyeScsXG4gICAgdGV4dF9jb2xvcjogJycsXG4gICAgc2l6ZTogJycsXG4gICAgaXNPdXRsaW5lOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBseVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICBzd2l0Y2ggKHNldHRpbmdzLmJnX2NvbG9yKSB7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TRUNPTkRBUlk6XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JyA6ICdidG4tc2Vjb25kYXJ5JztcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU1VDQ0VTUzpcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1zdWNjZXNzJyA6ICdidG4tc3VjY2Vzcyc7XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBTkdFUjpcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1kYW5nZXInIDogJ2J0bi1kYW5nZXInO1xuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5XQVJOSU5HOlxuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLXdhcm5pbmcnIDogJ2J0bi13YXJuaW5nJztcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5JTkZPOlxuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLmJnX2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJ2J0bi1vdXRsaW5lLWluZm8nIDogJ2J0bi1pbmZvJztcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy50ZXh0X2NvbG9yID0gc2V0dGluZ3MuaXNPdXRsaW5lID8gJycgOiAndGV4dC13aGl0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuTElHSFQ6XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtbGlnaHQnIDogJ2J0bi1saWdodCc7XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFSSzpcbiAgICAgICAgdGhpcy5idXR0b25TZXR0aW5ncy5iZ19jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICdidG4tb3V0bGluZS1kYXJrJyA6ICdidG4tZGFyayc7XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MudGV4dF9jb2xvciA9IHNldHRpbmdzLmlzT3V0bGluZSA/ICcnIDogJ3RleHQtd2hpdGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYnV0dG9uU2V0dGluZ3MuYmdfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnYnRuLW91dGxpbmUtcHJpbWFyeScgOiAnYnRuLXByaW1hcnknO1xuICAgICAgICB0aGlzLmJ1dHRvblNldHRpbmdzLnRleHRfY29sb3IgPSBzZXR0aW5ncy5pc091dGxpbmUgPyAnJyA6ICd0ZXh0LXdoaXRlJztcbiAgICB9XG5cbiAgICB0aGlzLmJ1dHRvblNldHRpbmdzLnNpemUgPSAoc2V0dGluZ3Muc2l6ZSA9PT0gQlVUVE9OX1NJWkUuTEFSR0UpID8gJ2J0bi1sZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoc2V0dGluZ3Muc2l6ZSA9PT0gQlVUVE9OX1NJWkUuU01BTEwpID8gJ2J0bi1zbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgfVxuXG59XG4iXX0=