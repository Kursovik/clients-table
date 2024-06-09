import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clients' },
  {
    path: 'clients',
    loadChildren: () =>
      import('./table-clients/table-clients.module').then(
        (m) => m.TableClientsModule,
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/clients' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
