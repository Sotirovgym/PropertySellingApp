import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  Properties: Array<any> =
  [{
    "id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 120000
  },
  {
    "id": 2,
    "Name": "Sotirov House",
    "Type": "House",
    "Price": 500000
  },
  {
    "id": 3,
    "Name": "Plovdiv House",
    "Type": "House",
    "Price": 250000
  },
  {
    "id": 4,
    "Name": "Sofia House",
    "Type": "House",
    "Price": 370000
  },
  {
    "id": 5,
    "Name": "Ruse House",
    "Type": "House",
    "Price": 750000
  }
]
}
