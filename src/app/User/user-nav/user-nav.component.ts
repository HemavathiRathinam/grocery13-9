import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  term:any;
  constructor(private route:Router) { }

  open(){
    this.route.navigate(['user/cart']);
  }
  ngOnInit(): void {
  }

}
