import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.TabsPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: "home-tab",
    loadChildren: () =>
      import("./home-tab/home-tab.module").then((m) => m.HomeTabPageModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthPageModule),
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
