import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() toggleSidenav = new EventEmitter<void>();
  isAuth: Boolean;
  authSubscription: Subscription

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  onClose() {
    this.toggleSidenav.emit();
  }

  onLogout() {
    this.authService.logout().subscribe(res => this.router.navigate(['/']));
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe()
  }

}
