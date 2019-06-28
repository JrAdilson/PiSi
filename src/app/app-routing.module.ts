import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'oficina1', loadChildren: './oficina1/oficina1.module#Oficina1PageModule' },
  { path: 'oficina2', loadChildren: './oficina2/oficina2.module#Oficina2PageModule' },
  { path: 'oficina3', loadChildren: './oficina3/oficina3.module#Oficina3PageModule' },
  { path: 'conta', loadChildren: './conta/conta.module#ContaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },


  
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
