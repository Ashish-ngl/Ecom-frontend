import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }


  getProductList(theCategoryId: number): Observable<Product[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<any>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  // getProductList(): Observable<Product[]> {
  //   return this.httpClient.get<any>(this.baseUrl).pipe(
  //     map(response => response._embedded.products)
  //   );
  // }
}

// interface GetResponse {
//   _embedded: {
//     products: Product[];
//   }
// }