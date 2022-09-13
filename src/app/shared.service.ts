import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  prod:[]=[];
  tot:any;
  setPro(data: any){
    this.prod=data;
  }
  setTot(data: any){
    this.tot=data;
    console.log(this.tot);
  }
  getPro(){
    return this.prod;
  }
  getTot(){
    return this.tot;
  }
  constructor() { }
}
