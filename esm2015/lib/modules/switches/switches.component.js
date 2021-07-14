/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SWITCHES_SIZE, UIA_THEME } from './../../../models';
export class SwitchesComponent {
    constructor() {
        this.switchSettings = {
            color: 'switch-success',
            size: ''
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
    }
}
SwitchesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-switch',
                template: "<div class=d-inline-block>\n  <div class=\"switch-checkbox\" [ngClass]=\"[switchSettings.color, switchSettings.size]\">\n    <input type=\"checkbox\" name=\"switch1\" id=\"switch1\" [checked]=\"checked\" [disabled]=\"disabled\">\n    <label for=\"switch1\"></label>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SwitchesComponent.ctorParameters = () => [];
SwitchesComponent.propDecorators = {
    settings: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zd2l0Y2hlcy9zd2l0Y2hlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTzdFLE1BQU0sT0FBTyxpQkFBaUI7SUFXNUI7UUFMQSxtQkFBYyxHQUFHO1lBQ2YsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7SUFFYyxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFMUIsUUFBUSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzdDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxNQUFNO2dCQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDM0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztnQkFDMUMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1NBQ2hEO1FBQ0QsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3JCLEtBQUssYUFBYSxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsTUFBTTtZQUNOO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUM1QztJQUNILENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIseVNBQXdDOzthQUV6Qzs7Ozs7dUJBR0UsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFGTixxQ0FBa0M7O0lBQ2xDLG9DQUEwQjs7SUFDMUIscUNBQTJCOztJQUUzQiwyQ0FHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3dpdGNoZXNDb25maWcsIFNXSVRDSEVTX1NJWkUsIFVJQV9USEVNRSB9IGZyb20gJy4vLi4vLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXVpYS1zd2l0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpdGNoZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2hlcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzZXR0aW5nczogU3dpdGNoZXNDb25maWc7XG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIHN3aXRjaFNldHRpbmdzID0ge1xuICAgIGNvbG9yOiAnc3dpdGNoLXN1Y2Nlc3MnLFxuICAgIHNpemU6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U2V0dGluZ3ModGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBhcHBseVNldHRpbmdzKHNldHRpbmdzKSB7XG4gICAgaWYgKCFzZXR0aW5ncykgeyByZXR1cm47IH1cblxuICAgIHN3aXRjaCAoc2V0dGluZ3MuY29sb3IpIHtcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNFQ09OREFSWTpcbiAgICAgICAgdGhpcy5zd2l0Y2hTZXR0aW5ncy5jb2xvciA9ICdzd2l0Y2gtc2Vjb25kYXJ5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TVUNDRVNTOlxuICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzLmNvbG9yID0gJ3N3aXRjaC1zdWNjZXNzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQU5HRVI6XG4gICAgICAgIHRoaXMuc3dpdGNoU2V0dGluZ3MuY29sb3IgPSAnc3dpdGNoLWRhbmdlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuV0FSTklORzpcbiAgICAgICAgdGhpcy5zd2l0Y2hTZXR0aW5ncy5jb2xvciA9ICdzd2l0Y2gtd2FybmluZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuSU5GTzpcbiAgICAgICAgdGhpcy5zd2l0Y2hTZXR0aW5ncy5jb2xvciA9ICdzd2l0Y2gtaW5mbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuTElHSFQ6XG4gICAgICAgIHRoaXMuc3dpdGNoU2V0dGluZ3MuY29sb3IgPSAnc3dpdGNoLWxpZ2h0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQVJLOlxuICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzLmNvbG9yID0gJ3N3aXRjaC1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzLmNvbG9yID0gJ3N3aXRjaC1wcmltYXJ5JztcbiAgICB9XG4gICAgc3dpdGNoIChzZXR0aW5ncy5zaXplKSB7XG4gICAgICBjYXNlIFNXSVRDSEVTX1NJWkUuTEFSR0U6XG4gICAgICAgIHRoaXMuc3dpdGNoU2V0dGluZ3Muc2l6ZSA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLnN3aXRjaFNldHRpbmdzLnNpemUgPSAnc3dpdGNoLXNtJztcbiAgICB9XG4gIH1cblxufVxuIl19