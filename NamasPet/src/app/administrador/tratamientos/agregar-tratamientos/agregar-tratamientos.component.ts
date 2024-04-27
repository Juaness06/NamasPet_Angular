import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Droga } from 'src/app/model/droga';
import { TratamientoService } from 'src/app/service/tratamientos.service';
import { DrogaService } from 'src/app/service/droga.service';
import { Tratamiento } from 'src/app/model/tratamiento';
import { Veterinario } from 'src/app/model/veterinario';
import { Mascota } from 'src/app/model/mascota';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-agregar-tratamientos',
  templateUrl: './agregar-tratamientos.component.html',
  styleUrls: ['./agregar-tratamientos.component.css']
})
export class AgregarTratamientosComponent implements OnInit {
  

  sendtratamiento!: Tratamiento;
  drogasList: Droga[] = [];
  formTratamiento: Tratamiento = {
    id: 0,
    nombreTratamiento: '',
    precioC: 0.0,
    fecha: new Date(),
    droga: {
        codigo: 0,
        nombre: '',
        precioV: 0,
        precioC: 0,
        unidades_C: 0,
        unidades_V:0
    },
    veterinario: {
        id: 0,
        nombre: '',
        especialidad: '',
        atenciones: 0,
        foto: '',
        activo: false,
    },
    perros: {
        id: 0,
        imagen: '',
        nombre: '',
        raza: '',
        edad: 0,
        actividad: false,
        peso: 0.0,
        numeroAtenciones: 0,
        cedulaCliente: 0,
    }

  
  
};
formVeterinario: Veterinario = {
  id: 0,
  nombre: '',
  especialidad: '',
  atenciones: 0,
  foto: '',
  activo: false,
  tratamientos: []
};

formMascota: Mascota = {
  id: 0,
  imagen: '',
  nombre: '',
  raza: '',
  edad: 0,
  actividad: false,
  peso: 0.0,
  numeroAtenciones: 0,
  cedulaCliente: 0,
  cliente: {
    cedula: 0,
    nombre: '',
    correo: '',
    celular: 0,
    contrasena: '',
    usuario: '',
  },
};

formDroga: Droga = {
  codigo: 0,
  nombre: '',
  precioV: 0,
  precioC: 0,
  unidades_C: 0,
  unidades_V:0
};



  constructor(
    private tratamientoService: TratamientoService,
    private drogaService: DrogaService,
    private veterinarioService: VeterinarioService,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDrogas();
  }

  loadDrogas() {
    this.drogaService.findAll().subscribe(drogas => {
      this.drogasList = drogas;
    });
  }

  onSubmit() {
    console.log("dentro del on submit");
    console.log("comprobar todos los id");
    console.log(this.mascotaService.findById(this.formMascota.id));
    console.log(this.drogaService.findById(this.formDroga.codigo));
    console.log(this.veterinarioService.findById(this.formVeterinario.id));
    
    if (this.mascotaService.findById(this.formMascota.id) != null && this.drogaService.findById(this.formDroga.codigo) != null && this.veterinarioService.findById(this.formVeterinario.id) != null) {
      console.log("dentro del if");
      
      console.log(this.formMascota.id);
      console.log(this.formDroga.codigo);
      console.log(this.formVeterinario.id);
      this.sendtratamiento = Object.assign({}, this.formTratamiento);
      this.tratamientoService.addTratamiento(this.sendtratamiento,this.formMascota.id,this.formDroga.codigo,this.formVeterinario.id); 
      this.router.navigate(['/tratamientos/all']);
    } else {
      console.log('El cliente no existe');


    }
    
  }
  }
  

