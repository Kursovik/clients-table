import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';
import { map, Observable, tap } from 'rxjs';
import { IClients, IUsers } from '../types/clients';
import { StoreService } from './store.service';

/* Компонет таблицы клиентов*/
@Injectable()
export class FacadeService<Y extends IClients, T extends IUsers> {
  private readonly apiService: ApiService<Y> = inject(ApiService);
  private readonly localStorageService: LocalStorageService<T[]> =
    inject(LocalStorageService);
  private readonly storeService: StoreService<T[]> = inject(StoreService);

  public getAll(key: string): Observable<T[]> {
    this.localStorageService.key = key;
    return this.localStorageService.hasStorage
      ? this.storeService.getStoreAsObservable()
      : this.apiService.getAll().pipe(
          map(
            (data) =>
              data.users.map((item, index) => ({
                ...item,
                id: index,
              })) as T[],
          ),
          tap((data) => (this.storeService.store = data)),
        );
  }
  public create(data: T) {
    this.storeService.store = [
      ...this.storeService.store,
      { ...data, id: this.storeService.store.length + 1 },
    ];
  }
  public edit(data: T): void {
    this.storeService.store = this.storeService.store.map((item) =>
      item.id === data.id ? data : item,
    );
  }
  public delete(idArray: Set<number>): void {
    this.storeService.store = this.storeService.store.filter(
      (item) => !idArray.has(item.id),
    );
  }
}
