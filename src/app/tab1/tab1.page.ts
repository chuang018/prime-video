import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Autoplay, Keyboard, Pagination, Scrollbar, Zoom} from 'swiper';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page {

  categories:any = null;
  slideOpt ={
    initialSlide: 1,
    speed: 200,
  };

  constructor() {
    this.categories = "all";
  }

  slidesDidLoad(slides: IonSlides): void{
    slides.startAutoplay();
  }

}
