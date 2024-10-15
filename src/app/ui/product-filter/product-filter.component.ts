import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductFilter } from '../../core/models/product-filter.model';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
})
export class ProductFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<ProductFilter>();

  filterForm = new FormGroup({
    productName: new FormControl<string>('all'),
    location: new FormControl<string | null>('kano'),
    date: new FormControl<Date>(new Date('2020-01-01')),
  });

  ngOnInit() {
    this.filterForm.valueChanges.subscribe((value) => {
      this.filterChange.emit(value as ProductFilter);
    });
  }
}
