import { Component,ViewChild,OnInit,Input  } from '@angular/core';
import {LovemapService} from './lovemap.service'
import {Timeouts} from "selenium-webdriver";
import {MyUserServService} from './ip.service';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {split} from "ts-node/dist";
import {isBoolean} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Давай Поженимся UK';
  lat: number = 51.50853;
  lng: number = -0.12574;
  town:any;
  markers:Observable<any[]>

  arr:any[] =[]
  city:string;
  datacity:string;
  flag:boolean =false;
  citytrue:boolean=true;


  constructor(private loveserviss:LovemapService,private userService:MyUserServService,private db:AngularFireDatabase){
  }
  ngOnInit() {
    this.markers = this.db.list("/cities").valueChanges();

    // this.userService.getIpAddress().subscribe(data => {
    //   console.log(data);
    // });
      this.checkSite("London");

  }

  sendTest(event:any){

    if(event.target.value.length > 1){

      this.loveserviss.findCity(event.target.value).subscribe(data=> {

        data['predictions'].map(val=>{

          this.arr.push(val.description)

        })

      });
    }


  }
  clear(){
    setTimeout(()=> this.flag=false ,4000);
  }
  addCity(cityname:any){

    let s:any = cityname.split(',');
    if(this.city !== "") {
        let scity:string = s[0];
        this.flag = true;

        let gepos: any;
        this.loveserviss.findGeoLoctionPos(cityname).subscribe(
            data => {
                data['results'].map(val => {

                    gepos = {"lat": val.geometry.location.lat, "lng": val.geometry.location.lng}
                })
                const real = this.db.list("/cities");
                this.checkSite(scity)
                if(this.citytrue == true){

                    real.push({
                        "city"  :scity,
                        "lat":gepos.lat,
                        "lng": gepos.lng,
                        "total":1

                    }).key

                }


            });
        this.clear()
      //window.location.reload()
    }

  }
    checkSite(c: string):any {

        this.markers.subscribe(data => {
            if(data.length == 0) {
                this.citytrue =true;
            }
            for (let v of data) {


                if(v.city !== c) {
                    console.log(v.city , c)
                    this.citytrue = true;

                }

            }
        });
        console.log("status",this.citytrue)

    }

}
