import { Store } from './../../shared/models/store.interface';
import { StoresService } from './services/stores.service';
import { AuthService } from './../auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  storesList: Store[];

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private route: Router,
    private storesService: StoresService
  ) {}

  async ngOnInit(): Promise<void> {
    this.blockUI.start('Loading...');
    let userName: string = JSON.parse(localStorage.getItem('token')).name;
    // this.toastr.success(`¡Hola de nuevo ${userName}.`, '¡Bienvenido!');
    this.storesList = await this.storesService.getStoresFromJSON()
    if(this.storesList.length == 5){
      let newStore:Store ={
        id: 6,
        name: 'Pizzeria Avengers',
        address: 'Calle 6 #7-9',
        description: "Proximamente...",
        products: []
      }
      this.storesList.push(newStore)
    }
    this.blockUI.stop();
  }
}
