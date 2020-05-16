import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counterService.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CounterButtonService } from '../counterButtonService';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(
    public counterService: CounterService,
    private router: Router,
    /* კითხვა მაქვს ამასთან დაკავშირებით:
    * route-ს რომ ვარქმევთ ცვლადს, როცა ActivatedRoute-ს ვიყენებთ,
    * ეს შეთანხმებაა ზოგადად რომ ასე დაერქვას და უმეტესობა ასე იყენებს
    * თუ სხვა მსგავსი შინაარსის სახელიც მისაღებია ამ ტიპის ცვლადისთვის?
    */
    private route: ActivatedRoute,
    public counterButtonService: CounterButtonService
    ) { }

  counter = 0;
  recievedCounter: number;

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.recievedCounter = params.counter;
      }
      );
  }

  // სერვისი შემოვიტანე, რათა Homepage-ზე გადასვლას არ დაერესეტებინა მთვლელი
  counterButtonClicked(){
    this.router.navigate(['counter'], {queryParams: { counter: ++this.counterButtonService.counter}});
  }


}
