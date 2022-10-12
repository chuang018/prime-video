import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey:String = 'k_i02wi5xz';
  private url:String = 'https://imdb-api.com';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any>{
    
    return this.http.get<any>(this.url+'/en/API/MostPopularMovies/'+this.apiKey);
  
  }

  searchMovies(exp): Observable<any>{
    return this.http.get<any>(this.url+'/en/API/SearchTitle/'+this.apiKey+"/"+exp);
  }

  getMetaData (id): Observable<any>{
    return this.http.get<any>(this.url+"/en/API/Title/"+this.apiKey+"/"+id);
  }


}
