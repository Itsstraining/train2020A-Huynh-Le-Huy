import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/service/signin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public auth:SigninService) { }

  ngOnInit(): void {
  }

}
