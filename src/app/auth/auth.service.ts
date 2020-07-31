import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _userIsAuthenticated: boolean = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(private router: Router) {
    console.log(this._userIsAuthenticated);
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
    this.router.navigateByUrl("/auth");
  }
}
