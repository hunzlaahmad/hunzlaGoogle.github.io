import { MovieService } from './services/movie.service';
import { Movies } from './models/movies';
import { Component, ElementRef, ViewChild, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'netflix';
  
  sticky=false;
  subs:Subscription[]=[];
  trending:Movies;
  popular:Movies;
  topRated:Movies;
  originals:Movies;
  nowPlaying:Movies;
  latest:Movies;

  headerBGurl:string;


  sliderConfig={  
    //properties from ngx slider carousel
    slidesToShow:9,
    slidesToScroll:2,
    arrows:true,
    autoplay:false
  }

  @ViewChild('stickheader') header:ElementRef;

  constructor(private movie:MovieService){
  }


  ngOnInit():void{
    this.subs.push(this.movie.getNowPlaying().subscribe(data=>this.nowPlaying=data));
    this.subs.push(this.movie.getTrending().subscribe(data=>
      {
        this.trending=data;
        this.headerBGurl='https://image.tmdb.org/t/p/original/'+this.trending.results[2].backdrop_path;
      }));
    this.subs.push(this.movie.getTopRated().subscribe(data=>this.topRated=data));
    this.subs.push(this.movie.getPopular().subscribe(data=>this.popular=data));
    this.subs.push(this.movie.getNowPlaying().subscribe(data=>this.nowPlaying=data));
    this.subs.push(this.movie.getOriginals().subscribe(data=>this.originals=data));
  }

  ngOnDestroy():void{
    this.subs.map(s=>s.unsubscribe());
  }

  @HostListener('window:scroll',['$event'])

  handleScroll(){
    const windowScroll=window.pageYOffset;

    if(windowScroll>=this.header.nativeElement.offsetHeight){
      this.sticky=true;
    }
    else{
      this.sticky=false;
    }
  }




}
