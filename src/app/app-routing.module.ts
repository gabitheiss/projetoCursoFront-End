import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiratelaComponent } from './primeiratela/primeiratela.component';
import { SegundatelaComponent } from './segundatela/segundatela.component';

const routes: Routes = [
  { component: PrimeiratelaComponent, path: 'primeira' },
  { component: SegundatelaComponent, path: 'segunda' },
];                                    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
