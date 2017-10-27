export interface Goal {
    guid: string;
    title: string;
    description: string;
    type: string;
    data_type: string;
    display_type: string;
    start_date: string;
    end_date: string;
    first_earnable_ignores_enroll_date: string;
    tracking_frequency: string;
    progress_frequency: string;
    required_tracker: boolean;
    target_value: number;
    grace_period: number;
    target_comparison_method: string;
    baseline: string;
    calculation_type: string;
    prorate_short_periods: boolean;
    scope_identifier: string;
    program_blueprint_id: string;
    display_order: number;
    subtext_template: string;
    pre_success_details: string;
    post_success_details: string;
    incentive_value: number;
}
