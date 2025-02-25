import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {HttpsService} from 'src/app/services/https.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [SharedModule]
})
export class DetailsPage implements OnInit {
  productId: string | null = null;
  product: any;
  route = (ActivatedRoute);
  constructor(private activatedRoute: ActivatedRoute,  private http: HttpsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log(this.productId);
     });
    this.getProduct(this.productId);
  }

  getProduct(id:any){
    this.http.getProduct(id).subscribe({
      next: (rest: any) => {
        this.product= rest;
        console.log(this.product);
      },
      error: (error: any) => {}
    })
  }
}



 
