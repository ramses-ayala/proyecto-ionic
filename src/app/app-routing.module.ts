import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      /* {
        path: ":userId",
        loadChildren: ()=>import("./users/user-detail/user-detail.module").then(m=>m.UserDetailPageModule)
      } */
      
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'users',
    children: [
      {
        path: "",
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: ":userId",
        loadChildren: ()=>import("./users/user-detail/user-detail.module").then(m=>m.UserDetailPageModule)
      }

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
