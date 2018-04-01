import { Component,ViewChild,OnInit,Input  } from '@angular/core';
import {LovemapService} from './lovemap.service'
import {Timeouts} from "selenium-webdriver";
import {MyUserServService} from './ip.service';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {split} from "ts-node/dist";

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
    setTimeout(()=> this.flag=false ,5000);
  }
  addCity(s:any){

    s = s.split(',');
    if(this.city !==""){
      s = s[0]
      this.flag=true;

     let gepos:any;
      this.loveserviss.findGeoLoctionPos(s).subscribe(
          data=>{
            data['results'].map(val=>{

               gepos ={"lat":val.geometry.location.lat,"lng":val.geometry.location.lng}
            })
            const  real =   this.db.list("/cities");
            const newKey = real.push({lat:gepos.lat,
              lng:gepos.lng,
              city:this.city,
              total:20
            }).key

          }
      )

      this.clear()
      //window.location.reload()
    }

  }

}
