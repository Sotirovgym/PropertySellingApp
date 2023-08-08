import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

}
