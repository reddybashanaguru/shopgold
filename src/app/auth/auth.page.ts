import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoadingController } from "@ionic/angular";

import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  // onLogin() {
  //   this.isLoading = true;
  //   this.authService.login();
  //   this.loadingCtrl
  //     .create({ keyboardClose: true, message: "Logging in..." })
  //     .then((loadingEl) => {
  //       loadingEl.present();
  //       setTimeout(() => {
  //         this.isLoading = false;
  //         loadingEl.dismiss();
  //         console.log(this.router);
  //         this.router.navigateByUrl("/places/tabs/discover");
  //       }, 1500);
  //     });
  // }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    this.authService.login();
    if (form && form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      console.log(email, password);
      this.loadingCtrl
        .create({ keyboardClose: true, message: "Logging in..." })
        .then((loadingEl) => {
          loadingEl.present();
          setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            console.log(this.router);
            this.router.navigateByUrl("");
          }, 1500);
        });
      // if (this.isLogin) {
      //   // Send a request to login servers
      // } else {
      //   // Send a request to signup servers
      // }
    }
  }
}
