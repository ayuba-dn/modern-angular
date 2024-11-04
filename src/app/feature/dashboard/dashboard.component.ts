import { Component, OnInit, signal } from '@angular/core';
import { ProductPrice } from '../../core/models/product-price.model';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../../ui/product-filter/product-filter.component';
import { ProductFilter } from '../../core/models/product-filter.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductFilterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  productPrices = signal<ProductPrice[]>([]);

  constructor(private httpClient: HttpClient) {}

  getProductPrices(filter: ProductFilter) {
    console.log(filter);
  }

  ngOnInit() {
    this.httpClient
      .get<ProductPrice[]>('http://localhost:3000/product-prices')
      .subscribe((productPrices) => {
        this.productPrices.set(productPrices);
      });
  }
}
