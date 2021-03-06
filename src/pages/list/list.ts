import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,Slides, LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import * as jQuery from 'jquery';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  waterpolo: Array<object>;
  loading:any;
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';


  constructor(private _http: Http, public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // this.loading = this.loadingCtrl.create({
    //           content: 'Please wait..',
    //           spinner: 'crescent'
    //         });
    // this.loading.present(this.loading);
    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  ionViewDidLoad() {

  }
  selectTab(index, event) {
    this.pageSlider.slideTo(index);
    jQuery('body > ion-app > ng-component > ion-nav > page-list > ion-header > ion-toolbar > div.toolbar-content.toolbar-content-md > ion-segment').children().removeClass('active');
    event.target.classList.add('active');
  }
  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
    // this.tabs= tab1;
   }
  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }
  // hideLoading(){
  //           setTimeout(() => {
  //             this.loading.dismiss();
  //           },);
  //         }
  activeadd(i, event){
    if(i==0){
      event.target.classList.add('active');
    }
  }
}
