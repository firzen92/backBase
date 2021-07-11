import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-modal',
  templateUrl: './bt-modal.component.html',
  styleUrls: ['./bt-modal.component.scss']
})
export class BtModalComponent implements OnInit {

  @Input('t') toAcc: string;
  @Input('a') amt: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
