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
  addCity(s:any){

    s = s.split(',');
    if(this.city !=="") {
        s = s[0]
        this.flag = true;

        let gepos: any;
        this.loveserviss.findGeoLoctionPos(s).subscribe(
            data => {
                data['results'].map(val => {

                    gepos = {"lat": val.geometry.location.lat, "lng": val.geometry.location.lng}
                })
                const real = this.db.list("/cities");
                if(this.checkSite(s)){

                    real.push({
                        "city"  :s,
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

       return this.markers.subscribe(data => {
           console.log(data)
            if(data.length == 0 ){
                return true;
            }

            data.map(v=>{

                if(v.city === c) {

                    return false
                } else {
                    return true;
                }
            })

        });


    }

}
