/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CHECKBOX_ALIGN, UIA_THEME } from './../../../models';
export class CheckboxComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTzlFLE1BQU0sT0FBTyxpQkFBaUI7SUFTNUI7UUFMQSxxQkFBZ0IsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQVE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUUxQixtRUFBbUU7UUFDbkUsUUFBUSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ25ELE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO2dCQUNqRCxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztnQkFDaEQsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ2pELE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztnQkFDOUMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQy9DLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztnQkFDOUMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7U0FDcEQ7UUFFRCxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxjQUFjLENBQUMsVUFBVTtnQkFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztnQkFDaEQsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qixnb0JBQXdDOzthQUV6Qzs7Ozs7dUJBR0UsS0FBSzs7OztJQUFOLHFDQUFrQzs7SUFFbEMsNkNBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrYm94Q29uZmlnLCBDSEVDS0JPWF9BTElHTiwgVUlBX1RIRU1FIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdWlhLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2V0dGluZ3M6IENoZWNrYm94Q29uZmlnO1xuXG4gIGNoZWNrYm94U2V0dGluZ3MgPSB7XG4gICAgY29sb3I6ICcnLFxuICAgIGFsaWduOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBseVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBGb3Igc2V0dGluZyB0aGUgY29sb3Igb2YgY2hlY2tib3ggYmFzZWQgb24gdGhlIHNldHRpbmdzIHJlY2lldmVkXG4gICAgc3dpdGNoIChzZXR0aW5ncy5jb2xvcikge1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU0VDT05EQVJZOlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuY29sb3IgPSAnY2hlY2tib3gtc2Vjb25kYXJ5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TVUNDRVNTOlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuY29sb3IgPSAnY2hlY2tib3gtc3VjY2Vzcyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFOR0VSOlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuY29sb3IgPSAnY2hlY2tib3gtZGFuZ2VyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5XQVJOSU5HOlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuY29sb3IgPSAnY2hlY2tib3gtd2FybmluZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuSU5GTzpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmNvbG9yID0gJ2NoZWNrYm94LWluZm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkxJR0hUOlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuY29sb3IgPSAnY2hlY2tib3gtbGlnaHQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBUks6XG4gICAgICAgIHRoaXMuY2hlY2tib3hTZXR0aW5ncy5jb2xvciA9ICdjaGVja2JveC1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuY29sb3IgPSAnY2hlY2tib3gtcHJpbWFyeSc7XG4gICAgfVxuXG4gICAgc3dpdGNoIChzZXR0aW5ncy5hbGlnbikge1xuICAgICAgY2FzZSBDSEVDS0JPWF9BTElHTi5IT1JJWk9OVEFMOlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuYWxpZ24gPSAnY2hlY2tib3gtaW5saW5lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuYWxpZ24gPSAnJztcbiAgICB9XG4gIH1cblxufVxuIl19