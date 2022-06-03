import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { IWork, IWorkItem, IWorkResponse } from "../models/work.model";
//import { }

@Injectable({
    providedIn: 'root'
})

export class WorksService {
    private readonly ROUTE_API = "https://api.crossref.org/";
    
    constructor(private _httpClient: HttpClient) { }

    public getMenuData(query?: string, rows?: number, offset?: number):Observable<IWork> {
        let params: any = {};

        if(query) {
            params.query = query;
        }

        if(rows) {
            params.rows = rows;
        }

        if(offset) {
            params.offset = offset;
        }

        return this._httpClient.get<IWorkResponse>(this.ROUTE_API + "works", {
            params: params
        })
        .pipe(map(val => { return val.message }));
    }
}