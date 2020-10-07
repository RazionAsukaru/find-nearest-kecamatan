import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import output from './../../assets/files/output.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  kecamatan = [];

  constructor(private router: Router) {
    this.kecamatan = [...output];
    console.log(this.kecamatan);
    
  }

  ngOnInit(): void {
  }

}
