import { Component, OnInit } from '@angular/core';
import {MovieService} from '../Service/movie.service'; // out of directory gets the class

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
})
export class ActionPage implements OnInit {
MovieData: any= []; // Blank array
gameOfThrones:any = 'https://www.jsonblob.com/api/be0a3785-8497-11ea-a89d-0daf094e7664';// link form json blob


  constructor(private Service:MovieService) { } // Bring back data from omdbapi

  ngOnInit() { // Runs first
    this.Service.GetMovieData(this.gameOfThrones).subscribe( // Looks in storage
      (data) => {
      this.MovieData = data.Search;// Puts in the variable
      });  

    

  }

}