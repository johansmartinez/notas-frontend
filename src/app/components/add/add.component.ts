import { Component, OnInit } from '@angular/core';
import { CreateNotaDTO, Nota } from 'src/app/models/nota';
import { NotasService } from 'src/app/services/notas.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  nota:CreateNotaDTO={
    nombre:"",
    parcial1:1,
    parcial2:1,
    parcial3:1
  }

  constructor(private notasService:NotasService, private modalService:ModalService) { }

  ngOnInit(): void {
  }

  addNota(event:Event){
    event.preventDefault();
    this.notasService.addNota(this.nota);
    this.nota={
      nombre:"",
      parcial1:1,
      parcial2:1,
      parcial3:1
    }
  }

  close(){
    this.modalService.hideModal();
  }

}
