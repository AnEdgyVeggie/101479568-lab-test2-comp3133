import { inject, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FilterService {
    static  type: string = ""
    static value: string = ""

    constructor() {

    }

    setParams(type:string, value: string) {
        // console.log(`type: ${type}  |  value: ${value}`)
        FilterService.type = type
        FilterService.value = value
    }

    getFilter() {

        return {
            type: FilterService.type,
            value: FilterService.value
        }
    }

}