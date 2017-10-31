import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the SaleReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sale-report',
  templateUrl: 'sale-report.html',
})
export class SaleReportPage {

  sales: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('http://10.151.122.8:8080/api/getPaymentList').map(res => res.json()).subscribe(data => {
      this.sales = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaleReportPage');
  }
  
}
