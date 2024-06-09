import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService<T> {
  private _key: string;

  public set key(key: string){
    this._key = key;
  }
  public get storage(): T{
    return JSON.parse(localStorage.getItem(this._key) as string);
  }
  public set storage(data: T){
    localStorage.setItem(this._key, JSON.stringify(data));
  }
  public get hasStorage(){
    return !!this.storage;
  }
}
