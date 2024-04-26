import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador.service'; // Asegúrate de importar correctamente tu servicio
import Chart from 'chart.js/auto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administrador-dashboard',
  templateUrl: './administrador-dashboard.component.html',
  styleUrls: ['./administrador-dashboard.component.css'],
})
export class AdministradorDashboardComponent implements OnInit {

  Ocultar: boolean = true;
  tratamientosUltimoMes: number = 0;
  tratamientosPorDroga: any[] = [];
  veterinariosActivos: number = 0;
  veterinariosInactivos: number = 0;
  totalMascotas: number = 0;
  mascotasActivas: number = 0;
  ventasTotales: number = 0;
  gananciasTotales: number = 0;

  @ViewChild('chartTratamientosPorDroga') chartRef!: ElementRef;

  constructor(private adminService: AdministradorService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    this.router.events.subscribe((event) => {
      // Verificar la ruta actual y cambiar `Ocultar` según sea necesario
      if (this.router.url.includes('/admin/dashboard')) {
        this.Ocultar = false;
      } else {
        this.Ocultar = true;
      }
    });


    this.adminService.contarTratamientosUltimoMes().subscribe((data) => {
      this.tratamientosUltimoMes = data;
    });
    this.adminService.contarTratamientosPorDroga().subscribe((data) => {
      this.tratamientosPorDroga = data;
    });
    this.adminService.getVeterinariosActivosCount().subscribe((data) => {
      this.veterinariosActivos = data;
    });
    this.adminService.getVeterinariosInactivosCount().subscribe((data) => {
      this.veterinariosInactivos = data;
    });
    this.adminService.contarTotalMascotas().subscribe((data) => {
      this.totalMascotas = data;
    });
    this.adminService.contarTotalMascotasActivas().subscribe((data) => {
      this.mascotasActivas = data;
    });
    this.adminService.ventasTotalesVeterinaria().subscribe((data) => {
      this.ventasTotales = data;
    });
    this.adminService.gananciasTotalesVeterinaria().subscribe((data) => {
      this.gananciasTotales = data;
    });
  }

  ngAfterViewInit() {
    this.adminService.contarTratamientosPorDroga().subscribe((data) => {
      console.log(data); // Esto te mostrará la estructura de datos en la consola
      this.tratamientosPorDroga = data;
      this.renderChart();
    });
    
  }

  renderChart() {
    const labels = this.tratamientosPorDroga.map(item => item[0]);
    const data = this.tratamientosPorDroga.map(item => item[1]);

    const chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad por Medicamento',
          data: data,
          backgroundColor: '#F3D75A', // Amarillo suave
        }]
      }
    });
  }
}
