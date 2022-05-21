import { Injectable,OnInit } from '@angular/core';
import { CreateNotaDTO, Nota } from '../models/nota';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import { not } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class NotasService implements OnInit{

  selectedNota:Nota={
    id:0,
    nombre:'',
    parcial1:0,
    parcial2:0,
    parcial3:0,
  };
  notas:Nota[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getNotas();
  }

  getNotas(){
    this.http.get<Nota[]>('http://localhost:3000/')
    .subscribe((data)=>{
      this.notas=data;
    },(error)=>{
    })
    
  }

  addNota(nota:CreateNotaDTO){
    this.http.post('http://localhost:3000/',nota)
    .subscribe(
      (data)=>{
        this.getNotas();
        Swal.fire({
          icon: 'success',
          text: 'Se ha registrado la nota ',
        })
      },
      (error)=>console.log(error)
    );
  }
  
  deleteNota(id:number){
    this.http.delete(`http://localhost:3000/${id}`)
    .subscribe(
      (data)=>{
        Swal.fire({
          icon: 'success',
          text: 'Se ha eliminado el registro de la nota ',
        })
        this.getNotas();
      },
      (error)=>console.log(error.error)
    );
  }

  editNota(nota:Nota){
    this.http.put(`http://localhost:3000/`, nota)
    .subscribe(
      (data)=>{
        Swal.fire({
          icon: 'success',
          text: 'Se ha editado el registro de la nota ',
        })
        this.getNotas();
      },
      (error)=>console.log(error.error)
    );
  }

}