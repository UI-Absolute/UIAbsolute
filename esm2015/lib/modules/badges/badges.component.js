/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UIA_THEME, BADGES_SHAPE } from './../../../models';
export class BadgesComponent {
    constructor() {
        this.badgeSettings = {
            bg_color: 'bg-primary',
            text_color: 'text-white',
            shape: ''
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
    }
}
BadgesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uia-badge',
                template: "<span class=\"badge\" [ngClass]=\"[badgeSettings.bg_color, badgeSettings.text_color, badgeSettings.shape]\">{{value}}</span>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BadgesComponent.ctorParameters = () => [];
BadgesComponent.propDecorators = {
    settings: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BadgesComponent.prototype.settings;
    /** @type {?} */
    BadgesComponent.prototype.value;
    /** @type {?} */
    BadgesComponent.prototype.badgeSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWFic29sdXRlLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTzFFLE1BQU0sT0FBTyxlQUFlO0lBVzFCO1FBTkEsa0JBQWEsR0FBRztZQUNkLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQVE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUUxQiwyRUFBMkU7UUFDM0UsUUFBUSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3pCLEtBQUssU0FBUyxDQUFDLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDM0MsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE1BQU07Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUN4QyxNQUFNO1lBQ1IsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQ3hDLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7U0FDOUM7UUFFRCw0REFBNEQ7UUFDNUQsUUFBUSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RCLEtBQUssWUFBWSxDQUFDLE9BQU87Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDMUMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDBJQUFzQzs7YUFFdkM7Ozs7O3VCQUdFLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLG1DQUFnQzs7SUFDaEMsZ0NBQW9COztJQUVwQix3Q0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFkZ2VzQ29uZmlnLCBVSUFfVEhFTUUsIEJBREdFU19TSEFQRSB9IGZyb20gJy4vLi4vLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXVpYS1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYWRnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNldHRpbmdzOiBCYWRnZXNDb25maWc7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgYmFkZ2VTZXR0aW5ncyA9IHtcbiAgICBiZ19jb2xvcjogJ2JnLXByaW1hcnknLFxuICAgIHRleHRfY29sb3I6ICd0ZXh0LXdoaXRlJyxcbiAgICBzaGFwZTogJydcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwbHlTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIGFwcGx5U2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzKSB7IHJldHVybjsgfVxuXG4gICAgLy8gRm9yIHNldHRpbmcgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgYmFkZ2UgYmFzZWQgb24gdGhlIHNldHRpbmdzIHJlY2lldmVkXG4gICAgc3dpdGNoIChzZXR0aW5ncy5iZ19jb2xvcikge1xuICAgICAgY2FzZSBVSUFfVEhFTUUuU0VDT05EQVJZOlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MuYmdfY29sb3IgPSAnYmctc2Vjb25kYXJ5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5TVUNDRVNTOlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MuYmdfY29sb3IgPSAnYmctc3VjY2Vzcyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuREFOR0VSOlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MuYmdfY29sb3IgPSAnYmctZGFuZ2VyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJQV9USEVNRS5XQVJOSU5HOlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MuYmdfY29sb3IgPSAnYmctd2FybmluZyc7XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy50ZXh0X2NvbG9yID0gJ3RleHQtZGFyayc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSUFfVEhFTUUuSU5GTzpcbiAgICAgICAgdGhpcy5iYWRnZVNldHRpbmdzLmJnX2NvbG9yID0gJ2JnLWluZm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkxJR0hUOlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MuYmdfY29sb3IgPSAnYmctbGlnaHQnO1xuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MudGV4dF9jb2xvciA9ICd0ZXh0LWRhcmsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlBX1RIRU1FLkRBUks6XG4gICAgICAgIHRoaXMuYmFkZ2VTZXR0aW5ncy5iZ19jb2xvciA9ICdiZy1kYXJrJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmJhZGdlU2V0dGluZ3MuYmdfY29sb3IgPSAnYmctcHJpbWFyeSc7XG4gICAgfVxuXG4gICAgLy8gRm9yIHNldHRpbmcgdGhlIHNoYXBlIG9mIGJhZGdlIGJhc2VkIG9uIHNldHRpbmdzIHJlY2lldmVkXG4gICAgc3dpdGNoIChzZXR0aW5ncy5zaGFwZSkge1xuICAgICAgY2FzZSBCQURHRVNfU0hBUEUuUk9VTkRFRDpcbiAgICAgICAgdGhpcy5iYWRnZVNldHRpbmdzLnNoYXBlID0gJ3JvdW5kZWQtcGlsbCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5iYWRnZVNldHRpbmdzLnNoYXBlID0gJyc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==