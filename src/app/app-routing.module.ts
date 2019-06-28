import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'oficina1', loadChildren: './oficina1/oficina1.module#Oficina1PageModule' },
  { path: 'oficina2', loadChildren: './oficina2/oficina2.module#Oficina2PageModule' },
  { path: 'oficina3', loadChildren: './oficina3/oficina3.module#Oficina3PageModule' },  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signinwithemail', loadChildren: './signinwithemail/signinwithemail.module#SigninwithemailPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'resetpassword', loadChildren: './resetpassword/resetpassword.module#ResetpasswordPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
