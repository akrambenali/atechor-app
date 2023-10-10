import { Component, Input, OnInit } from "@angular/core";
import { CoefficientsViewModel } from "src/business/model/views.model/coefficients-view.model";

@Component({
    selector: 'app-coefficients',
    templateUrl: './coefficients.component.html',
    styleUrls: ['./coefficients.component.css']
  })
  export class CoefficientsComponent implements OnInit { 

    @Input() coefficients!: CoefficientsViewModel

    ngOnInit(): void {
        
      }
    
  }