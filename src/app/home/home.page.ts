import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
[x: string]: any;
  searchTitle = '';
  movieApiUrl = '';
  movieData = {
    title: '',
    description: '',
    BoxOffice: '',
    imageUrl: '',
    Country:'',
    Language:'',
    Type:'',
  };
  readAPI(URL: string) {
    return this.http.get<any>(URL);
  }
  constructor(private http: HttpClient) {
    this.movieApiUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=a6f58373';
    this.readAPI( this.movieApiUrl)
    .subscribe((data) => {
    console.log(data);
    this.movieData.title = data['Title'];
    this.movieData.description = data['Plot'];
    this.movieData.BoxOffice = data['BoxOffice'];
    this.movieData.imageUrl = data['Poster'];
    this.movieData.Country = data['Country'];
    this.movieData.Language = data['Language'];
    this.movieData.Type = data['Type'];

  }
);
}
}
