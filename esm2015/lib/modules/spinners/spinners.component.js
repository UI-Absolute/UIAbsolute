/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UIA_THEME, SPINNERS_SIZE, SPINNERS_SPEED } from './../../../models';
export class SpinnersComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zcGlubmVycy9zcGlubmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsU0FBUyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU83RixNQUFNLE9BQU8saUJBQWlCO0lBVzVCO1FBTkEsb0JBQWUsR0FBRztZQUNoQixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQVE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUUxQiwyRUFBMkU7UUFDM0UsUUFBUSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO2dCQUMzQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUMxQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1NBQy9DO1FBQ0QsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3JCLEtBQUssYUFBYSxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO2dCQUNoRCxNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsS0FBSztnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ2hELE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEM7UUFDRCxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxNQUFNO1lBQ1IsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNyQyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwyVkFBd0M7O2FBRXpDOzs7Ozt1QkFHRSxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFETixxQ0FBa0M7O0lBQ2xDLHdDQUE2Qjs7SUFFN0IsNENBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJzQ29uZmlnLCBVSUFfVEhFTUUsIFNQSU5ORVJTX1NJWkUsIFNQSU5ORVJTX1NQRUVEIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdWlhLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lcnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcGlubmVycy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzZXR0aW5nczogU3Bpbm5lcnNDb25maWc7XG4gIEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XG5cbiAgc3Bpbm5lclNldHRpbmdzID0ge1xuICAgIGNvbG9yOiAndGV4dC1zdWNjZXNzJyxcbiAgICBzaXplOiAnJyxcbiAgICBzcGVlZDogJzAuNzVzJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBseVNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgYXBwbHlTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBGb3Igc2V0dGluZyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBiYWRnZSBiYXNlZCBvbiB0aGUgc2V0dGluZ3MgcmVjaWV2ZWRcbiAgICBzd2l0Y2ggKHNldHRpbmdzLmNvbG9yKSB7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TRUNPTkRBUlk6XG4gICAgICAgIHRoaXMuc3Bpbm5lclNldHRpbmdzLmNvbG9yID0gJ3RleHQtc2Vjb25kYXJ5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TVUNDRVNTOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5jb2xvciA9ICd0ZXh0LXN1Y2Nlc3MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBTkdFUjpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3MuY29sb3IgPSAndGV4dC1kYW5nZXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLldBUk5JTkc6XG4gICAgICAgIHRoaXMuc3Bpbm5lclNldHRpbmdzLmNvbG9yID0gJ3RleHQtd2FybmluZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuSU5GTzpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3MuY29sb3IgPSAndGV4dC1pbmZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5MSUdIVDpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3MuY29sb3IgPSAndGV4dC1saWdodCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFSSzpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3MuY29sb3IgPSAndGV4dC1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5jb2xvciA9ICd0ZXh0LXByaW1hcnknO1xuICAgIH1cbiAgICBzd2l0Y2ggKHNldHRpbmdzLnNpemUpIHtcbiAgICAgIGNhc2UgU1BJTk5FUlNfU0laRS5TTUFMTDpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3Muc2l6ZSA9ICdzcGlubmVyLWJvcmRlci1zbSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTUElOTkVSU19TSVpFLkxBUkdFOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5zaXplID0gJ3NwaW5uZXItYm9yZGVyLWxnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5zaXplID0gJyc7XG4gICAgfVxuICAgIHN3aXRjaCAoc2V0dGluZ3Muc3BlZWQpIHtcbiAgICAgIGNhc2UgU1BJTk5FUlNfU1BFRUQuU0xPVzpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3Muc3BlZWQgPSAnMnMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1BJTk5FUlNfU1BFRUQuRkFTVDpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3Muc3BlZWQgPSAnMC4yNXMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3Bpbm5lclNldHRpbmdzLnNwZWVkID0gJzAuNzVzJztcbiAgICB9XG4gIH1cblxufVxuIl19