import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
/*
  Generated class for the Web3Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Web3Provider {
  private  web3Instance: Web3;
  constructor(public http: Http, public web3: Web3) {
    console.log('Hello Web3Provider Provider');
    
    if (typeof web3 !== null) {
      if(web3.currentProvider !== null){
      console.log(web3)
      console.log("Found web3")
      console.log(web3.currentProvider)
      this.web3 = new Web3(web3.currentProvider);

      }
      else{
        console.log("Web 3 was found but current provider is null; Setting local provider")
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        
      }
    } else {
      
      console.log("Creating web3")
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  }

  get() {
    return this.web3;
  }
  getBlock(){
    console.log(this.web3.eth.getBlock("latest"));
  }
}
