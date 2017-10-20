import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

	private searchTerm: string;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	search() {
		console.log(this.searchTerm);
		this.router.navigate(['search', this.searchTerm]);
	}

}
