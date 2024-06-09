import { inject, Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class StoreService<T> {
  private readonly localStorageService: LocalStorageService<T> =
    inject(LocalStorageService);
  private _store: BehaviorSubject<T> = new BehaviorSubject(null);

  public get store(): T {
    return this._store.value;
  }
  public set store(store: T) {
    this.localStorageService.storage = store;
    this._store.next(store);
  }
  public getStoreAsObservable(): Observable<T> {
    this._store.next(this.localStorageService.storage);
    return this._store.asObservable();
  }
}
