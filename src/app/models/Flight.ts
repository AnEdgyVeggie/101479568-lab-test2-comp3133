export class Flight {

    flightInfo:any = {
        crew: null,
        details: null,
        flight_number: null,
        is_tentative: null,
        last_ll_launch_date: null,
        last_wiki_launch_date : null,
        last_wiki_revision : null,
        last_wiki_update : null,
        launch_date_local: null,
        launch_date_unix: null,
        last_date_update : null,
        launch_date_utc : null,
        launch_failure_details: null,
        launch_site : null,
        launch_success: null,
        launch_window: null,
        launch_year: null,
        links: null,
        mission_id: null,
        mission_name: null,
        rocket: null,
        ships: null,
        static_fire_date_unix: null,
        static_fire_date_utc: null,
        tbd: null,
        telemetry: null,
        tentative_max_precision: null,
        timeline: null,
        upcoming: null
}

    constructor( flightInfo: any
    ) {
        this.flightInfo = flightInfo
    }

}