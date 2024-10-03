import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  searchTerm: String = "";

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm']
    })
  }

  search(): void {
    if (this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm)
  }

}
