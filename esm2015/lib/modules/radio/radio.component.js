/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { RADIO_ALIGN, UIA_THEME } from './../../../models';
export class RadioComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBZSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPeEUsTUFBTSxPQUFPLGNBQWM7SUFTekI7UUFMQSxrQkFBYSxHQUFHO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7SUFFYyxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFMUIsZ0VBQWdFO1FBQ2hFLFFBQVEsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN0QixLQUFLLFNBQVMsQ0FBQyxTQUFTO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztnQkFDM0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE1BQU07Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztnQkFDM0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztnQkFDeEMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztnQkFDeEMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztTQUM5QztRQUVELFFBQVEsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN0QixLQUFLLFdBQVcsQ0FBQyxVQUFVO2dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7Z0JBQzFDLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtbEJBQXFDOzthQUV0Qzs7Ozs7dUJBR0UsS0FBSzs7OztJQUFOLGtDQUErQjs7SUFFL0IsdUNBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZGlvQ29uZmlnLCBSQURJT19BTElHTiwgVUlBX1RIRU1FIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdWlhLXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2V0dGluZ3M6IFJhZGlvQ29uZmlnO1xuXG4gIHJhZGlvU2V0dGluZ3MgPSB7XG4gICAgY29sb3I6ICcnLFxuICAgIGFsaWduOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBseVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBGb3Igc2V0dGluZyB0aGUgY29sb3Igb2YgcmFkaW8gYmFzZWQgb24gdGhlIHNldHRpbmdzIHJlY2lldmVkXG4gICAgc3dpdGNoIChzZXR0aW5ncy5jb2xvcikge1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU0VDT05EQVJZOlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuY29sb3IgPSAncmFkaW8tc2Vjb25kYXJ5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TVUNDRVNTOlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuY29sb3IgPSAncmFkaW8tc3VjY2Vzcyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFOR0VSOlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuY29sb3IgPSAncmFkaW8tZGFuZ2VyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5XQVJOSU5HOlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuY29sb3IgPSAncmFkaW8td2FybmluZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuSU5GTzpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmNvbG9yID0gJ3JhZGlvLWluZm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkxJR0hUOlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuY29sb3IgPSAncmFkaW8tbGlnaHQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBUks6XG4gICAgICAgIHRoaXMucmFkaW9TZXR0aW5ncy5jb2xvciA9ICdyYWRpby1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuY29sb3IgPSAncmFkaW8tcHJpbWFyeSc7XG4gICAgfVxuXG4gICAgc3dpdGNoIChzZXR0aW5ncy5hbGlnbikge1xuICAgICAgY2FzZSBSQURJT19BTElHTi5IT1JJWk9OVEFMOlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuYWxpZ24gPSAncmFkaW8taW5saW5lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuYWxpZ24gPSAnJztcbiAgICB9XG4gIH1cblxufVxuIl19