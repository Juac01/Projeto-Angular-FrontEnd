import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { InativosComponent } from './components/inativos/inativos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ReadAllComponent
  },
  {
    path: 'inativos',
    component: InativosComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
