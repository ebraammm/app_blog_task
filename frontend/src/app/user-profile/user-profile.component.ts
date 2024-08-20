import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: string | null = '';
  lastSeenTime: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve username and last seen time from local storage
    this.username = localStorage.getItem('username');
    this.lastSeenTime = localStorage.getItem('lastSeenTime');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('lastSeenTime');
    this.router.navigate(['/login']);
  }
}
