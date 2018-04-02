import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,  } from '@angular/common/http';
import {Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {tap} from "rxjs/operators/tap";
import {catchError} from "rxjs/operators/catchError";

@Injectable()
export class LovemapService {


  constructor(private http:HttpClient) { }

  findCity(city:string):any{

      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin' : 'http://centerpc.co.uk',
              'Access-Control-Allow-Credentials' :' true',
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          })
      };
      //let  url:string ="/api/maps/api/place/autocomplete/json?input="+city+"&types=geocode&language=gb&key=AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY";
      //let  url:string ="https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+city+"&language=en&key=AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY";
      let  url:string ="api/maps/api/place/autocomplete/json?input="+city+"&language=en&key=AIzaSyC3fiie1AoGkZxnfh4kdgnr0V2rS2BA2pY";
      let urlmy:string="http://studio.centerpc.co.uk/google/"+city+"/";
      return this.http.get(urlmy,httpOptions).map(res => res) ;


  }

  findGeoLoctionPos(target:string):any{
      let urlgeo ="https://maps.googleapis.com/maps/api/geocode/json?address="+target+"&key=AIzaSyAPkId9iXBpankTI-Ixeh3nWfsArjp1zt0";
      let yahoo ="https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20geo.places%20WHERE%20text%3D%22"+target+"%22%20and%20placeTypeName%20%3D%20%22Town%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
     // console.log(this.http.get(yahoo).map(res => res) );
      return this.http.get(urlgeo).map(res => res) ;


}


}
