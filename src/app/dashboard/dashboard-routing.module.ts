import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPage } from "./dashboard.page";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: DashboardPage,
    children: [
      {
        path: "search",
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "shops",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      // {
      //   path: "home",
      //   redirectTo: "/home/search",
      //   pathMatch: "full",
      // },
    ],
  },
  // {
  //   path: "home",
  //   redirectTo: "/home/search",
  //   pathMatch: "full",
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
