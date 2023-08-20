import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/Components/cadastro/cadastro.component';
import { LoginComponent } from 'src/Components/login/login.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component:CadastroComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
