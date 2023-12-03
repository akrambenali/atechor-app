import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ClientBusiness,
  CompanySize,
  Dev,
  Implemntation,
  InternationnalBusiness,
  Size,
  UsersNumber,
} from 'src/business/model/solution.model';

@Component({
  selector: 'app-item-button',
  templateUrl: './item-button.component.html',
  styleUrls: ['./item-button.component.css'],
})
export class ItemButtonComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  image!: string;
  @Input()
  clientType!: string;
  @Input()
  companySize!: string;
  @Input()
  clientCompanySize!: string;
  @Input()
  clientDeployment!: string;
  @Input()
  usersNumber!: string;
  @Input()
  dev!: string;
  @Input()
  connexion!: boolean;
  @Input()
  deadlineType!: string;
  @Input()
  isCabinetConseil!: boolean;

  @Output() sendClientTypeEvent = new EventEmitter<any>();
  @Output() sendClientRevenuesEvent = new EventEmitter<any>();
  @Output() sendClienCompanySizeEvent = new EventEmitter<any>();
  @Output() sendClientDeploymentEvent = new EventEmitter<any>();
  @Output() sendClientUsersNumberEvent = new EventEmitter<any>();
  @Output() sendClientDevEvent = new EventEmitter<any>();
  @Output() sendClientConnexionEvent = new EventEmitter<any>();
  @Output() sendClientDeadlineEvent = new EventEmitter<any>();
  @Output() sendStatusEvent = new EventEmitter<any>();
  @Output() sendClientCbinetConseil = new EventEmitter<any>();

  status: boolean = false;

  item = { b2b: false, b2c: false, both: false } as ClientBusiness;
  itemSize = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
  } as Size;
  itemCompanySize = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
  } as CompanySize;
  itemDeployment = {
    national: false,
    international: false,
  } as InternationnalBusiness;
  itemUsersNumber = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
  } as UsersNumber;
  itemDev = { low: false, high: false, none: false } as Dev;
  itemDeadline = {
    M1: false,
    M6: false,
    A1: false,
    A100: false,
    any: false,
  } as Implemntation;

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.status = !this.status;
    switch (this.clientType) {
      case (this.clientType = 'b2b'):
        this.item.b2b = true;
        break;
      case (this.clientType = 'b2c'):
        this.item.b2c = true;
        break;
      case (this.clientType = 'both'):
        this.item.both = true;
        break;
      default:
        break;
    }
    switch (this.companySize) {
      case (this.companySize = 'A'):
        this.itemSize.A = true;
        break;
      case (this.companySize = 'B'):
        this.itemSize.B = true;
        break;
      case (this.companySize = 'C'):
        this.itemSize.C = true;
        break;
      case (this.companySize = 'D'):
        this.itemSize.D = true;
        break;
      case (this.companySize = 'E'):
        this.itemSize.E = true;
        break;
      case (this.companySize = 'F'):
        this.itemSize.F = true;
        break;
      default:
        break;
    }
    switch (this.clientCompanySize) {
      case (this.clientCompanySize = 'A'):
        this.itemCompanySize.A = true;
        break;
      case (this.clientCompanySize = 'B'):
        this.itemCompanySize.B = true;
        break;
      case (this.clientCompanySize = 'C'):
        this.itemCompanySize.C = true;
        break;
      case (this.clientCompanySize = 'D'):
        this.itemCompanySize.D = true;
        break;
      case (this.clientCompanySize = 'E'):
        this.itemCompanySize.E = true;
        break;
      case (this.clientCompanySize = 'F'):
        this.itemCompanySize.F = true;
        break;
      default:
        break;
    }
    switch (this.clientDeployment) {
      case (this.clientDeployment = 'N'):
        this.itemDeployment.national = true;
        break;
      case (this.clientDeployment = 'I'):
        this.itemDeployment.international = true;
        break;
      default:
        break;
    }
    switch (this.usersNumber) {
      case (this.usersNumber = 'A'):
        this.itemUsersNumber.A = true;
        break;
      case (this.usersNumber = 'B'):
        this.itemUsersNumber.B = true;
        break;
      case (this.usersNumber = 'C'):
        this.itemUsersNumber.C = true;
        break;
      case (this.usersNumber = 'D'):
        this.itemUsersNumber.D = true;
        break;
      case (this.usersNumber = 'E'):
        this.itemUsersNumber.E = true;
        break;
      case (this.usersNumber = 'F'):
        this.itemUsersNumber.F = true;
        break;
      default:
        break;
    }
    switch (this.dev) {
      case (this.dev = 'L'):
        this.itemDev.low = true;
        break;
      case (this.dev = 'H'):
        this.itemDev.high = true;
        break;
      case (this.dev = 'N'):
        this.itemDev.none = true;
        break;
      default:
        break;
    }
    switch (this.deadlineType) {
      case (this.deadlineType = 'M1'):
        this.itemDeadline.M1 = true;
        break;
      case (this.deadlineType = 'M6'):
        this.itemDeadline.M6 = true;
        break;
      case (this.deadlineType = 'A1'):
        this.itemDeadline.A1 = true;
        break;
      case (this.deadlineType = 'A100'):
        this.itemDeadline.A100 = true;
        break;
      case (this.deadlineType = 'ANY'):
        this.itemDeadline.any = true;
        break;
      default:
        break;
    }
    this.sendClientTypeEvent.emit(this.item);
    this.sendClientRevenuesEvent.emit(this.itemSize);
    this.sendClienCompanySizeEvent.emit(this.itemCompanySize);
    this.sendClientDeploymentEvent.emit(this.itemDeployment);
    this.sendClientUsersNumberEvent.emit(this.itemUsersNumber);
    this.sendClientDevEvent.emit(this.itemDev);
    this.sendClientConnexionEvent.emit(this.connexion);
    this.sendClientCbinetConseil.emit(this.isCabinetConseil)
    this.sendClientDeadlineEvent.emit(this.itemDeadline);
    this.sendStatusEvent.emit(this.status);
  }
}
