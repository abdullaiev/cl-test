import {ID} from "./id";

export interface Program {
    guid: string;
    bonus: number;
    brand_icon: string;
    catalog_guid: string;
    catalog: ID;
    channel: ID;
    color: string;
    custom: boolean;
    description: string;
    display_order: number;
    display_type: string;
    eligible_group: ID;
    end_date: string;
    enrolled_group: string;
    enrollment_end_date: string;
    enrollment_start_date: string;
    hide_during_enrollment: boolean;
    icon_url: string;
    incentive_description: string;
    invisible: boolean;
    mandatory: boolean;
    possible_earnings_description: string;
    pre_enrollment_grace_period: number;
    start_date: string;
    subtext_template: string;
    title: string;
    type: string;
    goals: Array<ID>;
}
