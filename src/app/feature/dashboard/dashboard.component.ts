import { Component } from '@angular/core';
import { ProductPrice } from '../../core/models/product-price.model';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../../ui/product-filter/product-filter.component';
import { ProductFilter } from '../../core/models/product-filter.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductFilterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  productPrices: ProductPrice[] = [
    {
      id: 2,
      name: 'Maize',
      price: 30000,
      size: '100kg',
      addedBy: 'Peter Parker',
    },
    {
      id: 6,
      name: 'Rice',
      price: 35000,
      size: '100kg',
      addedBy: 'John Doe',
    },
    {
      id: 9,
      name: 'Beans',
      price: 25000,
      size: '100kg',
      addedBy: 'Jane Smith',
    },
    {
      id: 14,
      name: 'Yam',
      price: 45000,
      size: '100kg',
      addedBy: 'Ali Kidang',
    },
    {
      id: 12,
      name: 'Garri',
      price: 15000,
      size: '100kg',
      addedBy: 'Chinedu Okeke',
    },
    {
      id: 4,
      name: 'Palm Oil',
      price: 22000,
      size: '100kg',
      addedBy: 'Adeola Ayeni',
    },
  ];

  getProductPrices(filter: ProductFilter) {
    console.log(filter);
  }
}
