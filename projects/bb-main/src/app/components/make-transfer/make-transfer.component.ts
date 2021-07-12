import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {

  transferForm: FormGroup;
  balance = 500;

  @ViewChild('reviewTransfer') reviewModal: ElementRef;
  @ViewChild('makeTransferModal') makeTransferModal: ElementRef;

  constructor(private fb: FormBuilder,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      merchant: ['', Validators.required],
      amount: ['', [Validators.required, this.transferAmtValidator.bind(this)]]
    });
    console.log('revie ', this.reviewModal);
  }

  transferAmtValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value > this.balance) {
      return {noBalance: true}
    } else if(control.value < 0) {
      return {negValue: true}
    } else return null;
  }

  onSubmit() {
    if(this.transferForm.invalid) {
      return;
    }
    let options: NgbModalOptions = {
      size: 'md'
    };
    this.modalService.open(this.makeTransferModal, options);
  }

  onClose() {
    this.modalService.dismissAll();
  }

}
