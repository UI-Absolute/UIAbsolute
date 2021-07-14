/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CHECKBOX_ALIGN, UIA_THEME } from './../../../models';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checkboxSettings = {
            color: '',
            align: ''
        };
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.applySettings(this.settings);
    };
    /**
     * @param {?} settings
     * @return {?}
     */
    CheckboxComponent.prototype.applySettings = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
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
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-uia-checkbox',
                    template: "<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-1\" name=\"form-1-1\" type =\"checkbox\" checked=\"\">\n  <label for=\"form-1-1\">option 1</label>\n</div>\n<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-2\" name=\"form-1-2\" type =\"checkbox\">\n  <label for=\"form-1-2\">option 2</label>\n</div>\n<div class=\"checkbox\" [ngClass]=\"[checkboxSettings.color, checkboxSettings.align]\">\n  <input id=\"form-1-3\" name=\"form-1-3\" type =\"checkbox\">\n  <label for=\"form-1-3\">option 3</label>\n</div>\n",
                    styles: [".checkbox-inline{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        settings: [{ type: Input }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.settings;
    /** @type {?} */
    CheckboxComponent.prototype.checkboxSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBa0IsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlFO0lBY0U7UUFMQSxxQkFBZ0IsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsUUFBUTtRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTFCLG1FQUFtRTtRQUNuRSxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxTQUFTLENBQUMsU0FBUztnQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztnQkFDbkQsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ2pELE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxNQUFNO2dCQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO2dCQUNoRCxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztnQkFDakQsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztnQkFDL0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO2dCQUM5QyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztTQUNwRDtRQUVELFFBQVEsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN0QixLQUFLLGNBQWMsQ0FBQyxVQUFVO2dCQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO2dCQUNoRCxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGdvQkFBd0M7O2lCQUV6Qzs7Ozs7MkJBR0UsS0FBSzs7SUFvRFIsd0JBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXREWSxpQkFBaUI7OztJQUU1QixxQ0FBa0M7O0lBRWxDLDZDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja2JveENvbmZpZywgQ0hFQ0tCT1hfQUxJR04sIFVJQV9USEVNRSB9IGZyb20gJy4vLi4vLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXVpYS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBDaGVja2JveENvbmZpZztcblxuICBjaGVja2JveFNldHRpbmdzID0ge1xuICAgIGNvbG9yOiAnJyxcbiAgICBhbGlnbjogJydcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbHlTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIGFwcGx5U2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7IHJldHVybjsgfVxuXG4gICAgLy8gRm9yIHNldHRpbmcgdGhlIGNvbG9yIG9mIGNoZWNrYm94IGJhc2VkIG9uIHRoZSBzZXR0aW5ncyByZWNpZXZlZFxuICAgIHN3aXRjaCAoc2V0dGluZ3MuY29sb3IpIHtcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNFQ09OREFSWTpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmNvbG9yID0gJ2NoZWNrYm94LXNlY29uZGFyeSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU1VDQ0VTUzpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmNvbG9yID0gJ2NoZWNrYm94LXN1Y2Nlc3MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBTkdFUjpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmNvbG9yID0gJ2NoZWNrYm94LWRhbmdlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuV0FSTklORzpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmNvbG9yID0gJ2NoZWNrYm94LXdhcm5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLklORk86XG4gICAgICAgIHRoaXMuY2hlY2tib3hTZXR0aW5ncy5jb2xvciA9ICdjaGVja2JveC1pbmZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5MSUdIVDpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmNvbG9yID0gJ2NoZWNrYm94LWxpZ2h0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQVJLOlxuICAgICAgICB0aGlzLmNoZWNrYm94U2V0dGluZ3MuY29sb3IgPSAnY2hlY2tib3gtZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmNvbG9yID0gJ2NoZWNrYm94LXByaW1hcnknO1xuICAgIH1cblxuICAgIHN3aXRjaCAoc2V0dGluZ3MuYWxpZ24pIHtcbiAgICAgIGNhc2UgQ0hFQ0tCT1hfQUxJR04uSE9SSVpPTlRBTDpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmFsaWduID0gJ2NoZWNrYm94LWlubGluZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5jaGVja2JveFNldHRpbmdzLmFsaWduID0gJyc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==