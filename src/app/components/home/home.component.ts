import { Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public loaderService: LoaderService) {}

}
