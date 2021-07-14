import { OnInit } from '@angular/core';
import { CheckboxConfig } from './../../../models';
export declare class CheckboxComponent implements OnInit {
    settings: CheckboxConfig;
    checkboxSettings: {
        color: string;
        align: string;
    };
    constructor();
    ngOnInit(): void;
    applySettings(settings: any): void;
}
