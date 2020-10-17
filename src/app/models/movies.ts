export interface Movies {
    results: (ResultsEntity)[] | null;
    page: number;
    total_results: number;
    dates: Dates;
    total_pages: number;
  }
  export interface ResultsEntity {
    backdrop_path:string;
    id:number;
    popularity:number;
    video:boolean;
    poster_path:string;
    adult:boolean;
    title:string;
    overview:string;
    vote_average:number;
    release_date:string;
    vote_count:number;
    original_language:string;
    original_title:string;
    genre_ids?:(number)[] | null;
  } 
  export interface Dates {
    maximum:number;
    minimum:number;
  }
