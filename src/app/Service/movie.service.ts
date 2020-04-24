import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // To use the Http Module
import {Observable} from 'rxjs'; // Call the mtehod without killing the app

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }// Making local instance available

  GetMovieData(getLink?:any):Observable<any>{
    getLink
    return this.http.get(getLink); //Retrive data 
    
  }
}
