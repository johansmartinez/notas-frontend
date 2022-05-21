import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { ModalService } from 'src/app/services/modal.service';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  nota:Nota={
    id:0,
    nombre:"",
    parcial1:0,
    parcial2:0,
    parcial3:0
  };
  constructor(private modalService:ModalService, private notasService:NotasService) {}

  ngOnInit(): void {
    this.nota=this.notasService.selectedNota;
  }

  close(){
    this.modalService.hideModal();
  }

  editNota(event:Event){
    event.preventDefault();
    this.notasService.editNota(this.nota);
    this.modalService.changeType('');
    this.modalService.hideModal();
  }
}
