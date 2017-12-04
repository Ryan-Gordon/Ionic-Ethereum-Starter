import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Web3Provider} from '../../providers/web3/web3'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private web3: Web3Provider) {
    this.web3.get();
    this.web3.getBlock();

  }

}
