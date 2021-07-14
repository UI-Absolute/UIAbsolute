import { OnInit } from '@angular/core';
import { SwitchesConfig } from './../../../models';
export declare class SwitchesComponent implements OnInit {
    settings: SwitchesConfig;
    checked: boolean;
    disabled: boolean;
    switchSettings: {
        color: string;
        size: string;
    };
    constructor();
    ngOnInit(): void;
    applySettings(settings: any): void;
}
