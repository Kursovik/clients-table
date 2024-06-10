import { Component, inject, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';
import { IUsers } from '../types/clients';
import { Observable, tap } from 'rxjs';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.scss'],
})
export class TableClientsComponent implements OnInit {
  private readonly facadeService = inject(FacadeService);
  private readonly storeService: StoreService<IUsers[]> = inject(StoreService);
  private readonly key = 'clients';

  public clients: Observable<IUsers[]>;
  public ngOnInit(): void {
    this.facadeService
      .getAll(this.key)
      .pipe(
        tap(() => (this.clients = this.storeService.getStoreAsObservable())),
      ).subscribe();
  }
}
