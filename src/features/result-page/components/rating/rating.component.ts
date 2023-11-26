import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Rating } from 'src/business/model/rating.model';
import { ClientService } from 'src/features/services/client.services';
import { ResponsiveService } from 'src/features/services/responsive/responsive.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [NgbRatingConfig],
})
export class RatingComponent implements OnInit {
  RespMessage: any;
  ratingData!: Rating;
  contactforms = true;
  submitted = false;
  currentRate!: number;
  send = false

  constructor(
    private clientService: ClientService,
    public responsive: ResponsiveService,
    public config: NgbRatingConfig
  ) {}

  ratingForm = new FormGroup({
    rate: new FormControl<number | null>(null, Validators.required),
    comment: new FormControl<string | null>(null, Validators.required),
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
      this.send =  true
    }); 
  }
}
