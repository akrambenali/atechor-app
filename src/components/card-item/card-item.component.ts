import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input()
  score: any;
  solutionScore!: string;
  software!: string;
  price!: string;
  provider!: string;
  compatibility!: string;
  positionning!: string;

  constructor() {}

  ngOnInit(): void {
    this.solutionScore = this.removeTrailingZeros(this.score.Score);
    this.software = this.removeTrailingZeros(this.score.software);
    this.price = this.removeTrailingZeros(this.score.price);
    this.provider = this.removeTrailingZeros(this.score.provider);
    this.compatibility = this.removeTrailingZeros(this.score.compatibility);
    this.positionning = this.removeTrailingZeros(this.score.positionning);
  }

  removeTrailingZeros(num: number) {
    const number = String(num).replace(/\.0+$/, '');

    return this.number_test(num) ? number : parseFloat(number).toFixed(2);
  }

  number_test(n: number) {
    var result = n - Math.floor(n) !== 0;

    if (result) return false;
    else return true;
  }
}
