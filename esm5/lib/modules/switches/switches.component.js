/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SWITCHES_SIZE, UIA_THEME } from './../../../models';
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
        { type: Component, args: [{
                    selector: 'lib-uia-switch',
                    template: "<div class=d-inline-block>\n  <div class=\"switch-checkbox\" [ngClass]=\"[switchSettings.color, switchSettings.size]\">\n    <input type=\"checkbox\" name=\"switch1\" id=\"switch1\" [checked]=\"checked\" [disabled]=\"disabled\">\n    <label for=\"switch1\"></label>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SwitchesComponent.ctorParameters = function () { return []; };
    SwitchesComponent.propDecorators = {
        settings: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return SwitchesComponent;
}());
export { SwitchesComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zd2l0Y2hlcy9zd2l0Y2hlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdFO0lBZ0JFO1FBTEEsbUJBQWMsR0FBRztZQUNmLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBRWMsQ0FBQzs7OztJQUVqQixvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHlDQUFhOzs7O0lBQWIsVUFBYyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFMUIsUUFBUSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzdDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxNQUFNO2dCQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDM0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztnQkFDMUMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1NBQ2hEO1FBQ0QsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3JCLEtBQUssYUFBYSxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsTUFBTTtZQUNOO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUM1QztJQUNILENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIseVNBQXdDOztpQkFFekM7Ozs7OzJCQUdFLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQWtEUix3QkFBQztDQUFBLEFBM0RELElBMkRDO1NBdERZLGlCQUFpQjs7O0lBRTVCLHFDQUFrQzs7SUFDbEMsb0NBQTBCOztJQUMxQixxQ0FBMkI7O0lBRTNCLDJDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTd2l0Y2hlc0NvbmZpZywgU1dJVENIRVNfU0laRSwgVUlBX1RIRU1FIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdWlhLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2hlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXRjaGVzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBTd2l0Y2hlc0NvbmZpZztcbiAgQElucHV0KCkgY2hlY2tlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgc3dpdGNoU2V0dGluZ3MgPSB7XG4gICAgY29sb3I6ICdzd2l0Y2gtc3VjY2VzcycsXG4gICAgc2l6ZTogJydcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbHlTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIGFwcGx5U2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7IHJldHVybjsgfVxuXG4gICAgc3dpdGNoIChzZXR0aW5ncy5jb2xvcikge1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU0VDT05EQVJZOlxuICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzLmNvbG9yID0gJ3N3aXRjaC1zZWNvbmRhcnknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNVQ0NFU1M6XG4gICAgICAgIHRoaXMuc3dpdGNoU2V0dGluZ3MuY29sb3IgPSAnc3dpdGNoLXN1Y2Nlc3MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBTkdFUjpcbiAgICAgICAgdGhpcy5zd2l0Y2hTZXR0aW5ncy5jb2xvciA9ICdzd2l0Y2gtZGFuZ2VyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5XQVJOSU5HOlxuICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzLmNvbG9yID0gJ3N3aXRjaC13YXJuaW5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5JTkZPOlxuICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzLmNvbG9yID0gJ3N3aXRjaC1pbmZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5MSUdIVDpcbiAgICAgICAgdGhpcy5zd2l0Y2hTZXR0aW5ncy5jb2xvciA9ICdzd2l0Y2gtbGlnaHQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBUks6XG4gICAgICAgIHRoaXMuc3dpdGNoU2V0dGluZ3MuY29sb3IgPSAnc3dpdGNoLWRhcmsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3dpdGNoU2V0dGluZ3MuY29sb3IgPSAnc3dpdGNoLXByaW1hcnknO1xuICAgIH1cbiAgICBzd2l0Y2ggKHNldHRpbmdzLnNpemUpIHtcbiAgICAgIGNhc2UgU1dJVENIRVNfU0laRS5MQVJHRTpcbiAgICAgICAgdGhpcy5zd2l0Y2hTZXR0aW5ncy5zaXplID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc3dpdGNoU2V0dGluZ3Muc2l6ZSA9ICdzd2l0Y2gtc20nO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=