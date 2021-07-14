/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UIA_THEME, BADGES_SHAPE } from './../../../models';
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
        { type: Component, args: [{
                    selector: 'lib-uia-badge',
                    template: "<span class=\"badge\" [ngClass]=\"[badgeSettings.bg_color, badgeSettings.text_color, badgeSettings.shape]\">{{value}}</span>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BadgesComponent.ctorParameters = function () { return []; };
    BadgesComponent.propDecorators = {
        settings: [{ type: Input }],
        value: [{ type: Input }]
    };
    return BadgesComponent;
}());
export { BadgesComponent };
if (false) {
    /** @type {?} */
    BadgesComponent.prototype.settings;
    /** @type {?} */
    BadgesComponent.prototype.value;
    /** @type {?} */
    BadgesComponent.prototype.badgeSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWFic29sdXRlLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTFFO0lBZ0JFO1FBTkEsa0JBQWEsR0FBRztZQUNkLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBYTs7OztJQUFiLFVBQWMsUUFBUTtRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTFCLDJFQUEyRTtRQUMzRSxRQUFRLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDekIsS0FBSyxTQUFTLENBQUMsU0FBUztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUMzQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQ3hDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztnQkFDNUMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztnQkFDeEMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztTQUM5QztRQUVELDREQUE0RDtRQUM1RCxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxZQUFZLENBQUMsT0FBTztnQkFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsMElBQXNDOztpQkFFdkM7Ozs7OzJCQUdFLEtBQUs7d0JBQ0wsS0FBSzs7SUF3RFIsc0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQTNEWSxlQUFlOzs7SUFFMUIsbUNBQWdDOztJQUNoQyxnQ0FBb0I7O0lBRXBCLHdDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWRnZXNDb25maWcsIFVJQV9USEVNRSwgQkFER0VTX1NIQVBFIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdWlhLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhZGdlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhZGdlcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2V0dGluZ3M6IEJhZGdlc0NvbmZpZztcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcblxuICBiYWRnZVNldHRpbmdzID0ge1xuICAgIGJnX2NvbG9yOiAnYmctcHJpbWFyeScsXG4gICAgdGV4dF9jb2xvcjogJ3RleHQtd2hpdGUnLFxuICAgIHNoYXBlOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBseVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBGb3Igc2V0dGluZyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBiYWRnZSBiYXNlZCBvbiB0aGUgc2V0dGluZ3MgcmVjaWV2ZWRcbiAgICBzd2l0Y2ggKHNldHRpbmdzLmJnX2NvbG9yKSB7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TRUNPTkRBUlk6XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy5iZ19jb2xvciA9ICdiZy1zZWNvbmRhcnknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNVQ0NFU1M6XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy5iZ19jb2xvciA9ICdiZy1zdWNjZXNzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQU5HRVI6XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy5iZ19jb2xvciA9ICdiZy1kYW5nZXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLldBUk5JTkc6XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy5iZ19jb2xvciA9ICdiZy13YXJuaW5nJztcbiAgICAgICAgdGhpcy5iYWRnZVNldHRpbmdzLnRleHRfY29sb3IgPSAndGV4dC1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5JTkZPOlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MuYmdfY29sb3IgPSAnYmctaW5mbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuTElHSFQ6XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy5iZ19jb2xvciA9ICdiZy1saWdodCc7XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy50ZXh0X2NvbG9yID0gJ3RleHQtZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFSSzpcbiAgICAgICAgdGhpcy5iYWRnZVNldHRpbmdzLmJnX2NvbG9yID0gJ2JnLWRhcmsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy5iZ19jb2xvciA9ICdiZy1wcmltYXJ5JztcbiAgICB9XG5cbiAgICAvLyBGb3Igc2V0dGluZyB0aGUgc2hhcGUgb2YgYmFkZ2UgYmFzZWQgb24gc2V0dGluZ3MgcmVjaWV2ZWRcbiAgICBzd2l0Y2ggKHNldHRpbmdzLnNoYXBlKSB7XG4gICAgICBjYXNlIEJBREdFU19TSEFQRS5ST1VOREVEOlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3Muc2hhcGUgPSAncm91bmRlZC1waWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3Muc2hhcGUgPSAnJztcbiAgICB9XG4gIH1cblxufVxuIl19