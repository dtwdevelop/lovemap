import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, } from '@angular/common/http';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {tap} from "rxjs/operators/tap";
import {catchError} from "rxjs/operators/catchError";

@Injectable()
export class LovemapService {


  constructor(private http:HttpClient) { }

  findCity(city:string):any{
   let headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
      //let  url:string ="/api/maps/api/place/autocomplete/json?input="+city+"&types=geocode&language=gb&key=AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY";
      let  url:string ="/api/maps/api/place/autocomplete/json?input="+city+"&language=en&key=AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY";

      return this.http.get(url).map(res => res) ;


  }

  findGeoLoctionPos(target:string):any{
      let urlgeo ="https://maps.googleapis.com/maps/api/geocode/json?address="+target+"&key=AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY";
      return this.http.get(urlgeo).map(res => res) ;


}


}
