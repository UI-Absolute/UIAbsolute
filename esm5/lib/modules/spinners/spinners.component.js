/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UIA_THEME, SPINNERS_SIZE, SPINNERS_SPEED } from './../../../models';
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
        { type: Component, args: [{
                    selector: 'lib-uia-spinner',
                    template: "<div class=\"text-center d-inline-block\">\n  <div class=\"spinner-border\" [ngClass]=\"[spinnerSettings.color, spinnerSettings.size]\" [ngStyle]=\"{'animation-duration' : spinnerSettings.speed ? spinnerSettings.speed : '0.75s'}\" role=\"status\"></div>\n  <span class=\"d-block\" *ngIf=\"loadingText\">{{loadingText}}</span>\n</div>\n",
                    styles: [".spinner-border-lg{width:3rem;height:3rem}"]
                }] }
    ];
    /** @nocollapse */
    SpinnersComponent.ctorParameters = function () { return []; };
    SpinnersComponent.propDecorators = {
        settings: [{ type: Input }],
        loadingText: [{ type: Input }]
    };
    return SpinnersComponent;
}());
export { SpinnersComponent };
if (false) {
    /** @type {?} */
    SpinnersComponent.prototype.settings;
    /** @type {?} */
    SpinnersComponent.prototype.loadingText;
    /** @type {?} */
    SpinnersComponent.prototype.spinnerSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zcGlubmVycy9zcGlubmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsU0FBUyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3RjtJQWdCRTtRQU5BLG9CQUFlLEdBQUc7WUFDaEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7SUFFYyxDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQseUNBQWE7Ozs7SUFBYixVQUFjLFFBQVE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUUxQiwyRUFBMkU7UUFDM0UsUUFBUSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO2dCQUMzQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUMxQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1NBQy9DO1FBQ0QsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3JCLEtBQUssYUFBYSxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO2dCQUNoRCxNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsS0FBSztnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ2hELE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEM7UUFDRCxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxNQUFNO1lBQ1IsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNyQyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwyVkFBd0M7O2lCQUV6Qzs7Ozs7MkJBR0UsS0FBSzs4QkFDTCxLQUFLOztJQWlFUix3QkFBQztDQUFBLEFBekVELElBeUVDO1NBcEVZLGlCQUFpQjs7O0lBRTVCLHFDQUFrQzs7SUFDbEMsd0NBQTZCOztJQUU3Qiw0Q0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lcnNDb25maWcsIFVJQV9USEVNRSwgU1BJTk5FUlNfU0laRSwgU1BJTk5FUlNfU1BFRUQgfSBmcm9tICcuLy4uLy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11aWEtc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGlubmVycy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwaW5uZXJzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBTcGlubmVyc0NvbmZpZztcbiAgQElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcblxuICBzcGlubmVyU2V0dGluZ3MgPSB7XG4gICAgY29sb3I6ICd0ZXh0LXN1Y2Nlc3MnLFxuICAgIHNpemU6ICcnLFxuICAgIHNwZWVkOiAnMC43NXMnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U2V0dGluZ3ModGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBhcHBseVNldHRpbmdzKHNldHRpbmdzKSB7XG4gICAgaWYgKCFzZXR0aW5ncykgeyByZXR1cm47IH1cblxuICAgIC8vIEZvciBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJhZGdlIGJhc2VkIG9uIHRoZSBzZXR0aW5ncyByZWNpZXZlZFxuICAgIHN3aXRjaCAoc2V0dGluZ3MuY29sb3IpIHtcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNFQ09OREFSWTpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3MuY29sb3IgPSAndGV4dC1zZWNvbmRhcnknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNVQ0NFU1M6XG4gICAgICAgIHRoaXMuc3Bpbm5lclNldHRpbmdzLmNvbG9yID0gJ3RleHQtc3VjY2Vzcyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFOR0VSOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5jb2xvciA9ICd0ZXh0LWRhbmdlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuV0FSTklORzpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3MuY29sb3IgPSAndGV4dC13YXJuaW5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5JTkZPOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5jb2xvciA9ICd0ZXh0LWluZm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkxJR0hUOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5jb2xvciA9ICd0ZXh0LWxpZ2h0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQVJLOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5jb2xvciA9ICd0ZXh0LWRhcmsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3Bpbm5lclNldHRpbmdzLmNvbG9yID0gJ3RleHQtcHJpbWFyeSc7XG4gICAgfVxuICAgIHN3aXRjaCAoc2V0dGluZ3Muc2l6ZSkge1xuICAgICAgY2FzZSBTUElOTkVSU19TSVpFLlNNQUxMOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5zaXplID0gJ3NwaW5uZXItYm9yZGVyLXNtJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNQSU5ORVJTX1NJWkUuTEFSR0U6XG4gICAgICAgIHRoaXMuc3Bpbm5lclNldHRpbmdzLnNpemUgPSAnc3Bpbm5lci1ib3JkZXItbGcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3Bpbm5lclNldHRpbmdzLnNpemUgPSAnJztcbiAgICB9XG4gICAgc3dpdGNoIChzZXR0aW5ncy5zcGVlZCkge1xuICAgICAgY2FzZSBTUElOTkVSU19TUEVFRC5TTE9XOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5zcGVlZCA9ICcycyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTUElOTkVSU19TUEVFRC5GQVNUOlxuICAgICAgICB0aGlzLnNwaW5uZXJTZXR0aW5ncy5zcGVlZCA9ICcwLjI1cyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zcGlubmVyU2V0dGluZ3Muc3BlZWQgPSAnMC43NXMnO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=