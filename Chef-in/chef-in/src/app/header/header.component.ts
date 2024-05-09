import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToRecipes() {
    this.router.navigate(['/recipes']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  searchRecipes(query: string) {
    if (query.trim() !== '') {
      // Perform recipe search using query
      // Redirect to search results page
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }
}
