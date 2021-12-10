import { Store } from './../../../shared/models/store.interface';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  @Input()
  storeData: Store;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
