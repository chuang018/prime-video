import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { searchResult } from '../searchresult';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  //input:any = null;
  spin:boolean = false;
  notNull:boolean = false;
  result:searchResult[];

  constructor(private api: ApiService, private loadingCtrl: LoadingController) {}

  search(value){
    console.log(value);
    this.spin = true;
    this.api.searchMovies(value).subscribe( data =>{
      this.result = data.results;
      console.log(this.result);
      this.spin = false;
      this.notNull = true;
    })
    //console.log(this.input);
  }

  async showLoading(){
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      keyboardClose: true,
      showBackdrop: true,
    });

    loading.present();
  }

}
