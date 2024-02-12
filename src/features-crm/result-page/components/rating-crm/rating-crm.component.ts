import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Rating } from 'src/business/model/rating.model';
import { ClientCrmService } from 'src/features-crm/services/client-crm.services';
import { ResponsiveService } from 'src/features/services/responsive/responsive.service';

@Component({
  selector: 'app-rating-crm',
  templateUrl: './rating-crm.component.html',
  styleUrls: ['./rating-crm.component.css'],
  providers: [NgbRatingConfig],
})
export class RatingCrmComponent implements OnInit {
  RespMessage: any;
  ratingData!: Rating;
  contactforms = true;
  submitted = false;
  currentRate!: number;
  send = false;

  constructor(
    private clientService: ClientCrmService,
    public responsive: ResponsiveService,
    public config: NgbRatingConfig,
  ) {}

  ratingForm = new FormGroup({
    rate: new FormControl<number | null>(null, Validators.required),
    comment: new FormControl<string | null>(null, Validators.required),
    type: new FormControl<string>('CRM', Validators.required),
  });

  ngOnInit(): void {}

  submit() {
    this.submitted = true;
    if (this.ratingForm.invalid) {
      return;
    }
    this.ratingData = this.ratingForm.value as Rating;
    this.clientService.addRating(this.ratingData).subscribe((res: any) => {
      this.RespMessage = res;
      this.send = true;
    });
  }
}
