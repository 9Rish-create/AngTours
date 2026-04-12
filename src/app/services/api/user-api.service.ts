import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../../shared/api";
import { IAuthUser, IAuthUserRes, IRegisterUser, IRegUserRes } from "../../models/user";


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

    registration(body: IRegisterUser): Observable<string> {
        return this.http.post(this.api.register, body, {responseType: 'text'})
    }
}

//     auth(body:any): Observable<any> {
//         return this.http.post<any>(this.api.auth, body)
//     }
// }