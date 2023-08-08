import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent = 1;
  Properties: Array<IProperty> = [];

  constructor (private route: ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2; // Means that we are on the rent-property URL else we are on base URL
    }

    this.housingService.getAllProperties(this.SellRent).subscribe({
        next: (data) => {
          this.Properties = data;
          console.log(data);
        },
        error: (e) => {
          console.log("htterror");
          console.log(e);
        }
      }
    );
  }

}
