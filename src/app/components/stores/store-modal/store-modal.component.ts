import { Store } from './../../../shared/models/store.interface';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-store-modal',
  templateUrl: './store-modal.component.html',
  styleUrls: ['./store-modal.component.scss'],
})
export class StoreModalComponent implements OnInit {
  storeData: Store;
  imagg: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.storeData = data.store;
  }

  ngOnInit(): void {}

  getUrl() {
    return `url('./../../../../../assets/images/${this.storeData.name}.png')`;
  }
}
