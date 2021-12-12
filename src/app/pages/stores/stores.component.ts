import { Store } from './../../shared/models/store.interface';
import { StoresService } from './services/stores.service';
import { AuthService } from './../auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  storesList: Store[];
  storesFiltered: Store[];
  searchInput: FormGroup;

  constructor(
    private toastr: ToastrService,
    private storesService: StoresService,
    private fb: FormBuilder,
  ) {
    this.searchInput = this.fb.group({
      search: [''],
    });
  }

  async ngOnInit(): Promise<void> {
    this.blockUI.start('Cargando...');
    let userName: string = JSON.parse(localStorage.getItem('token')).name;
    this.toastr.success(``, `¡Bienvenido de nuevo ${userName}!`);
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
    this.storesFiltered = this.storesList
    this.blockUI.stop();
  }

  onSearch(input:string){
    let storesWithFilter = this.storesList.filter(store => store.name.toLowerCase().includes(input.toLowerCase()))
    if(storesWithFilter){
      this.storesFiltered = storesWithFilter
    }
    if(!input){
      this.storesFiltered = this.storesList
    }
  }
}
