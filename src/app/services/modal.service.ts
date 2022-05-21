import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalOpen:boolean=false;
  modalType:string='';
  constructor() { }

  changeType(type:string){
    this.modalType=type;
  }

  showModal(){
    this.modalOpen=true;
  }

  hideModal(){
    this.modalOpen=false;
  }
}
