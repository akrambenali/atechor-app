import { Component, Input, OnInit } from '@angular/core';
import { CoefficientsViewModel } from 'src/business/model/views.model/coefficients-view.model';

@Component({
  selector: 'app-coefficients-crm',
  templateUrl: './coefficients-crm.component.html',
  styleUrls: ['./coefficients-crm.component.css'],
})
export class CoefficientsCrmComponent implements OnInit {
  @Input() coefficients!: CoefficientsViewModel;

  ngOnInit(): void {}
}
