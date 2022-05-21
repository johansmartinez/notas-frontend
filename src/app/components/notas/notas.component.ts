import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { ModalService } from 'src/app/services/modal.service';
import { NotasService } from 'src/app/services/notas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(public notasService:NotasService, private modalService:ModalService) { }

  ngOnInit(): void {
    this.reloadNotas();
  }

  reloadNotas(){
    this.notasService.getNotas();
    
  }

  delete(id:number){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿QUIERES ELIMINAR ESTE REGISTRO DE MANERA PERMANENTE?",
      showCancelButton: true,
      confirmButtonColor: '#21AA93',
      cancelButtonColor: '#D82148',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.notasService.deleteNota(id);
      }
    })
  }

  edit(nota:Nota){
    this.notasService.selectedNota=nota;
    this.modalService.changeType('EDIT');
    this.modalService.showModal();
  }

}
