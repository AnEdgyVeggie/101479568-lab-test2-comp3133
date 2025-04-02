import { Component } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-missionfilter',
  imports: [],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css',
  providers: [FilterService]
})
export class MissionfilterComponent {

  constructor(private service:  FilterService) {

   }

  setFilter(filterType: string, filterValue: string) {
    this.service.setParams(filterType, filterValue)
  }


}
