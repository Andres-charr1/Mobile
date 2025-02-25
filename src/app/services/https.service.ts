import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor(private http: HttpClient) { }
  getCharacters(params: any){
    return this.http.get(environment.baseUrl + environment.product)
  }
  getProduct(id: any){
    return this.http.get(environment.baseUrl + environment.product + id)
}
}