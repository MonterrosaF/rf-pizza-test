import { Store } from './../../../shared/models/store.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  @Input()
  storeData: Store;

  constructor() {}

  ngOnInit(): void {}
}