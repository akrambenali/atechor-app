import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientBusiness, CompanySize, InternationnalBusiness, Size } from 'src/business/model/solution.model';

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


  


  @Output() sendClientTypeEvent = new EventEmitter<any>();
  @Output() sendClientRevenuesEvent = new EventEmitter<any>();
  @Output() sendClienCompanySizeEvent = new EventEmitter<any>();
  @Output() sendClientDeploymentEvent = new EventEmitter<any>();

  status: boolean = false;

  item = { b2b: false, b2c: false, both: false } as ClientBusiness;
  itemSize = {A: false, B: false, C: false, D: false, E: false, F: false} as Size
  itemCompanySize = {A: false, B: false, C: false, D: false, E: false, F: false} as CompanySize
  itemDeployment = {national: false, international: false} as InternationnalBusiness

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
    this.sendClientTypeEvent.emit(this.item);
    this.sendClientRevenuesEvent.emit(this.itemSize)
    this.sendClienCompanySizeEvent.emit(this.itemCompanySize)
    this.sendClientDeploymentEvent.emit(this.itemDeployment)
  }
}
