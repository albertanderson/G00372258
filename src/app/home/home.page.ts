import { Component,OnInit } from '@angular/core'; // Imports OnInit
import {Storage} from '@ionic/storage'; // Use storage
import { Flashlight } from '@ionic-native/flashlight/ngx';// Import for flashlight

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit { // Implement OnInit
yourFavourite:string;
  constructor(private storage:Storage, private flashlight:Flashlight) {} // Access to storage

lightMethod(){
this.flashlight.toggle();// To turn on and off the light
}


  ngOnInit() {
    this.storage.get("favourite").then( // Retrieves the value
    (data) => { // Whats coming back from data
    this.yourFavourite = data;// When the data comes back
    })
    .catch (
      (error)=>{
        console.log(error);
      }
    );
    }

  }
