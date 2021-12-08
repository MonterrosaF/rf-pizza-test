import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rf-pizza-test';
  isLoginPage = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.isLoginPage = this.router.url.includes('login')
  }
}
