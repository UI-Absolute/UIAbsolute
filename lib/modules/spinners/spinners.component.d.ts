import { OnInit } from '@angular/core';
import { SpinnersConfig } from './../../../models';
export declare class SpinnersComponent implements OnInit {
    settings: SpinnersConfig;
    loadingText: string;
    spinnerSettings: {
        color: string;
        size: string;
        speed: string;
    };
    constructor();
    ngOnInit(): void;
    applySettings(settings: any): void;
}
