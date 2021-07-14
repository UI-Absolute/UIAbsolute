import { OnInit } from '@angular/core';
import { ButtonsConfig } from './../../../models';
export declare class ButtonsComponent implements OnInit {
    settings: ButtonsConfig;
    value: any;
    buttonSettings: {
        bg_color: string;
        text_color: string;
        size: string;
        isOutline: boolean;
    };
    constructor();
    ngOnInit(): void;
    applySettings(settings: any): void;
}
