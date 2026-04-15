import { inject, Injectable,OnInit } from "@angular/core";
import { TourApiService } from "./api/tour-api.service";

@Injectable({
    providedIn: 'root'
})
export class ToursService {
    private tourApi = inject(TourApiService);

    constructor() {

    }

    getTours() { // set types
        return this.tourApi.getTours();
    }
}