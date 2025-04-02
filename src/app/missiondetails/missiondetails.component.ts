import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  imports: [],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {

  missionDetails?: any
  flightNumber?: Number


  constructor(private route: ActivatedRoute) {
    let url: any = this.route.params.subscribe(param => {
      this.flightNumber = parseInt(param['id'])
    })
  }

  ngOnInit() {
    this.fetchData()
  }

  async fetchData() {

    let request : any = await fetch(
      "https://api.spacexdata.com/v3/launches",
    )

    let response: any = await request.json()

    response.forEach((flight: any) => {
      if (flight.flight_number === this.flightNumber) {
        this.missionDetails = flight
      }
    })
    console.log(this.missionDetails)



  }

  // convert
}
