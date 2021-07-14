import { OnInit } from '@angular/core';
import { BadgesConfig } from './../../../models';
export declare class BadgesComponent implements OnInit {
    settings: BadgesConfig;
    value: any;
    badgeSettings: {
        bg_color: string;
        text_color: string;
        shape: string;
    };
    constructor();
    ngOnInit(): void;
    applySettings(settings: any): void;
}
