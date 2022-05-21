import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NOTAS';

  constructor (public modalService:ModalService){}

  showAdd(){
    this.modalService.changeType('ADD');
    this.modalService.showModal();
  }
}
