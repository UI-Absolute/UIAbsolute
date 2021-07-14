import { OnInit } from '@angular/core';
import { ButtonsToggleConfig } from './../../../../models';
export declare class ButtonToggleComponent implements OnInit {
    settings: ButtonsToggleConfig;
    value: any;
    checked: boolean;
    buttonToggleSettings: {
        bg_color: string;
        text_color: string;
        size: string;
        isOutline: boolean;
    };
    constructor();
    ngOnInit(): void;
    applySettings(settings: any): void;
}
