/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { RADIO_ALIGN, UIA_THEME } from './../../../models';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.radioSettings = {
            color: '',
            align: ''
        };
    }
    /**
     * @return {?}
     */
    RadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.applySettings(this.settings);
    };
    /**
     * @param {?} settings
     * @return {?}
     */
    RadioComponent.prototype.applySettings = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
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
    };
    RadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-uia-radio',
                    template: "<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-1\">\n  <label for=\"form-3-1\">Option 1</label>\n</div>\n<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-2\" checked=\"\">\n  <label for=\"form-3-2\">Option 2</label>\n</div>\n<div class=\"radio\" [ngClass]=\"[radioSettings.color, radioSettings.align]\">\n  <input type=\"radio\" name=\"form-3\" id=\"form-3-3\">\n  <label for=\"form-3-3\">Option 3</label>\n</div>\n",
                    styles: [".radio-inline{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    RadioComponent.ctorParameters = function () { return []; };
    RadioComponent.propDecorators = {
        settings: [{ type: Input }]
    };
    return RadioComponent;
}());
export { RadioComponent };
if (false) {
    /** @type {?} */
    RadioComponent.prototype.settings;
    /** @type {?} */
    RadioComponent.prototype.radioSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdWktYWJzb2x1dGUvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBZSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFeEU7SUFjRTtRQUxBLGtCQUFhLEdBQUc7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBYTs7OztJQUFiLFVBQWMsUUFBUTtRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTFCLGdFQUFnRTtRQUNoRSxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxTQUFTLENBQUMsU0FBUztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzdDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxNQUFNO2dCQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7Z0JBQzFDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3hDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3hDLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7U0FDOUM7UUFFRCxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsS0FBSyxXQUFXLENBQUMsVUFBVTtnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsbWxCQUFxQzs7aUJBRXRDOzs7OzsyQkFHRSxLQUFLOztJQW9EUixxQkFBQztDQUFBLEFBM0RELElBMkRDO1NBdERZLGNBQWM7OztJQUV6QixrQ0FBK0I7O0lBRS9CLHVDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYWRpb0NvbmZpZywgUkFESU9fQUxJR04sIFVJQV9USEVNRSB9IGZyb20gJy4vLi4vLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXVpYS1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBSYWRpb0NvbmZpZztcblxuICByYWRpb1NldHRpbmdzID0ge1xuICAgIGNvbG9yOiAnJyxcbiAgICBhbGlnbjogJydcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbHlTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIGFwcGx5U2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7IHJldHVybjsgfVxuXG4gICAgLy8gRm9yIHNldHRpbmcgdGhlIGNvbG9yIG9mIHJhZGlvIGJhc2VkIG9uIHRoZSBzZXR0aW5ncyByZWNpZXZlZFxuICAgIHN3aXRjaCAoc2V0dGluZ3MuY29sb3IpIHtcbiAgICAgIGNhc2UgVUlBX1RIRU1FLlNFQ09OREFSWTpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmNvbG9yID0gJ3JhZGlvLXNlY29uZGFyeSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU1VDQ0VTUzpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmNvbG9yID0gJ3JhZGlvLXN1Y2Nlc3MnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBTkdFUjpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmNvbG9yID0gJ3JhZGlvLWRhbmdlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuV0FSTklORzpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmNvbG9yID0gJ3JhZGlvLXdhcm5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLklORk86XG4gICAgICAgIHRoaXMucmFkaW9TZXR0aW5ncy5jb2xvciA9ICdyYWRpby1pbmZvJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5MSUdIVDpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmNvbG9yID0gJ3JhZGlvLWxpZ2h0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5EQVJLOlxuICAgICAgICB0aGlzLnJhZGlvU2V0dGluZ3MuY29sb3IgPSAncmFkaW8tZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmNvbG9yID0gJ3JhZGlvLXByaW1hcnknO1xuICAgIH1cblxuICAgIHN3aXRjaCAoc2V0dGluZ3MuYWxpZ24pIHtcbiAgICAgIGNhc2UgUkFESU9fQUxJR04uSE9SSVpPTlRBTDpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmFsaWduID0gJ3JhZGlvLWlubGluZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5yYWRpb1NldHRpbmdzLmFsaWduID0gJyc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==