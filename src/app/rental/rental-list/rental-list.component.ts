import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: any[] = [
      {
        id: 1,
        title: 'Central Apartment 1',
        city: 'New York',
        street: 'Times Square',
        category: 'apartment',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        descripcion: 'Very nice apartment',
        dailyRate: 34,
        shared: false,
        price: 324,
        createdAt: '24/11/2018'
    },
    {
      id: 2,
      title: 'Central Apartment 2',
      city: 'San Francisco',
      street: 'Main Street',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      descripcion: 'Very nice apartment',
      dailyRate: 12,
      shared: false,
      price: 552,
      createdAt: '24/11/2018'
    },
    {
      id: 3,
      title: 'Central Apartment 3',
      city: 'Bratislava',
      street: 'Hlavna',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      descripcion: 'Very nice apartment',
      dailyRate: 334,
      shared: true,
      price: 625,
      createdAt: '24/11/2018'
    },
    {
      id: 4,
      title: 'Central Apartment 4',
      city: 'Berlin',
      street: 'Haupt strasse',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 9,
      descripcion: 'Very nice apartment',
      dailyRate: 33,
      shared: true,
      price: 1024,
      createdAt: '24/11/2018'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
