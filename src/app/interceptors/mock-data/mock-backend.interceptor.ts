import {
  HttpRequest,
  HttpResponse,
  HttpEvent,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductPrice } from '../../core/models/product-price.model';

export function mockBackendInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const { url, method } = req;

  if (url.endsWith('/product-prices') && method === 'GET')
    return getProductPrices();
  else return next(req);

  function getProductPrices() {
    const productPrices: ProductPrice[] = [
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
    return ok(productPrices);
  }

  function ok(body?: ProductPrice[]) {
    return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
  }
}
