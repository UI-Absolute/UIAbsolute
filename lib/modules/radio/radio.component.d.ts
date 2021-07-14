import { OnInit } from '@angular/core';
import { RadioConfig } from './../../../models';
export declare class RadioComponent implements OnInit {
    settings: RadioConfig;
    radioSettings: {
        color: string;
        align: string;
    };
    constructor();
    ngOnInit(): void;
    applySettings(settings: any): void;
}
