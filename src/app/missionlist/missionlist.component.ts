import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../models/Flight';
import {MatCardModule} from '@angular/material/card';
import { FilterService } from '../services/filter.service';
import { RouterLink } from '@angular/router';
import { MissionfilterComponent } from '..//missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  imports: [ CommonModule, MatCardModule, RouterLink, MissionfilterComponent ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css',
  providers: [FilterService]
})
export class MissionlistComponent {

  constructor(private service: FilterService) { }

  allMissions: any = []
  missionList: any = []
  // nullImage: any = 

  ngOnInit() {
    this.fetchData()
  }

  ngDoCheck() {
    // console.log(this.service.getFilter())
    this.filterFlights(this.service.getFilter())
  }

  async fetchData() {

    let request : any = await fetch(
      "https://api.spacexdata.com/v3/launches",
    )

    let response: any = await request.json()
    this.setMissionList(response)

  }

  // convert response to Flight object
  setMissionList(flights: [any]) {
    if (flights!== null && flights.length > 0) {
      flights.forEach(res => {
        let flightInfo = {res}
        let flight: Flight = new Flight(res)
        this.allMissions.push(flight)
        console.log(flight)
        this.setDisplay(this.allMissions)
      })
    }
  }

  setDisplay(missions: any) {
    this.missionList = missions
  }

  filterFlights(filter: any) {
    const type = filter.type
    const value = filter.value
    this.missionList = []
    
    if (type == "" || value == "") {
      this.missionList = this.allMissions
      return
    }

    console.log(type)
    console.log(value)

    if (this.allMissions.length === 0) {
      this.missionList = []
    }

    this.allMissions.forEach((mission :any) => {
      console.log(mission.flightInfo[type] )
      if (mission.flightInfo[type] === null) {
        return
      }
      if (mission.flightInfo[type].toString() === value) {
        this.missionList.push(mission)
      }
    })
    console.log(this.missionList)

  }
}
