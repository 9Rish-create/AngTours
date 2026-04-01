import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../../shared/api";
import { IAuthUser, IAuthUserRes, IREgisterUser, IregUserRes } from "../../models/user";


@Injectable({
    providedIn: 'root'
})

export class userApiService {

    private api = API;
    private http = inject(HttpClient);

    constructor() {}

    auth(body:IAuthUser): Observable<IAuthUserRes> {
        return this.http.post<IAuthUserRes>(this.api.auth, body)
    }

    registration(body: IREgisterUser): Observable<IregUserRes> {
        return this.http.post<IregUserRes>(this.api.register, body)
    }
}

//     auth(body:any): Observable<any> {
//         return this.http.post<any>(this.api.auth, body)
//     }
// }