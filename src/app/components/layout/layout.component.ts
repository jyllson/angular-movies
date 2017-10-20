import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../search/search/search.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

	private search: string;

  constructor() { }

  ngOnInit() {
  }

}
