import { Movies } from './../models/movies';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const enum endpoint{
  trending="/trending/all/week",
  originals="/discover/tv",
  upcoming="/movie/upcoming",
  top_rated="/movie/top_rated",
  popular="/movie/popular",
  latest="/movie/latest",
  now_playing="/movie/now_playing",
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL="https://api.themoviedb.org/3";
  private api_key=environment.api;

  constructor(private http:HttpClient) { }

  getTrending():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`,{
      params:{
        api_key:this.api_key
      }
    });
  }

  getTopRated():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`,{
      params:{
        api_key:this.api_key
      }
    });
  }
  
  getPopular():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`,{
      params:{
        api_key:this.api_key
      }
    });
  }
  getOriginals():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`,{
      params:{
        api_key:this.api_key
      }
    });
  }
  getNowPlaying():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`,{
      params:{
        api_key:this.api_key
      }
    });
  }
  
}
