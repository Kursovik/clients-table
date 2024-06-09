import {Component, inject} from '@angular/core';
import {FacadeService} from "../services/facade.service";
import { IUsers} from "../types/clients";
import { Observable} from "rxjs";


@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.scss'],
})
export class TableClientsComponent{
  private readonly facadeService = inject(FacadeService);
  private readonly key = 'clients';

  public clients: Observable<IUsers[]> = this.facadeService.getAll(this.key)

}
