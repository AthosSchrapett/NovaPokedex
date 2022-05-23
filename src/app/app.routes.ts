import { Routes } from "@angular/router";
import { AdminGuard } from "./components/admin/Guards/admin.guard";

export const AppRoutes : Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../app/components/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'admin/pokemon-list',
    loadChildren: () => import('../app/components/admin/admin.module').then(x => x.AdminModule),
    canActivate: [AdminGuard]
  }
]
