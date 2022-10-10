import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Autoplay, Keyboard, Pagination, Scrollbar, Zoom} from 'swiper';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../api.service';
import { MostPopularData } from '../mostpopulardata';
import { MostPopularDetail } from '../mostpopulardetail';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page {

  categories:any = null;
  result:MostPopularData;
  tenPopularMovies: MostPopularDetail[] = null;
  recommendedMovies: MostPopularDetail[] =  null;

  slideOpt ={
    initialSlide: 1,
    speed: 200,
  };

  constructor(private api: ApiService) {
    this.categories = "all";
  }

  ngOnInit(){
    this.getPopularMovies();
  }

  slidesDidLoad(slides: IonSlides): void{
    slides.startAutoplay();
  }

  getPopularMovies(){
    this.api.getPopularMovies().subscribe(data =>{
        this.result = data;

        this.tenPopularMovies = this.result.items.slice(0,10);
        this.recommendedMovies = this.result.items.slice(11,21);
        console.log(this.tenPopularMovies);
        console.log(this.recommendedMovies);
    })
  }

}
