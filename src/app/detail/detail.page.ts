import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { ApiService } from '../api.service';
import { titleData } from '../titledata';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id:string = null;
  meta:titleData;
  loading:boolean = true;

  constructor(private router:ActivatedRoute,private location: Location,private api: ApiService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getMetaData();
  }

  getMetaData(){
    this.api.getMetaData(this.id).subscribe( data =>{
      this.meta = data;
      console.log(this.meta);
      this.loading = false;
    });
  }

  back(){
    this.location.back();
  }

}
