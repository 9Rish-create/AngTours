import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API } from "../../shared/api";

@Injectable({
    providedIn: 'root'
})
export class TourApiService {
    private api = API;
    private http = inject(HttpClient);
    constructor() {}

    getTours() {  //сделать описание структур в models/tours.ts
        return this.http.get(`${this.api.tours}`);
    }
}