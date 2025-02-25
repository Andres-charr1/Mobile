import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  imports:[SharedModule]
})
export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
