import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

interface Testimonio {
  nombre: string;
  texto: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('nombrePerrito') nombrePerrito!: ElementRef;
  @ViewChild('testimonioPerrito') testimonioPerrito!: ElementRef;

  ngAfterViewInit(): void {
    this.updateTestimonio(0);
  }

  testimonios: Testimonio[] = [
    {
      nombre: 'MANOLO',
      texto:
        "'Hola soy Manolo! Un día me sentí super enfermo mis dueños me llevaron a NamasPet y me cuidaron muy bien'",
    },
    {
      nombre: 'OSQUITAR',
      texto:
        "'Antes le tenía miedo al veterinario en NamasPet no puedo estar más contento'",
    },
    {
      nombre: 'PEPE',
      texto: "'Me llamo Pepe, y quiero mucho a mi doctora, me cuidó muy bien'",
    },
    {
      nombre: 'COCCO',
      texto: "'Me llamo Cocco, y me encanta ir a NamasPet, me siento muy bien'",
    },
  ];

  private counter = 0;
  private operacion = 0;
  private widthImg = 100; // Este valor se ajustará dinámicamente en ngOnInit

  ngOnInit(): void {
    this.widthImg = 100 / this.testimonios.length;
    this.updateTestimonio(0);
  }

  moveToRight(): void {
    if (this.counter >= this.testimonios.length - 1) {
      this.counter = 0;
      this.operacion = 0;
    } else {
      this.counter++;
      this.operacion += this.widthImg;
    }
    this.slider.nativeElement.style.transform = `translate(-${this.operacion}%)`;
    this.slider.nativeElement.style.transition = 'all ease .6s';
    this.updateTestimonio(this.counter);
  }

  moveToLeft(): void {
    if (this.counter <= 0) {
      this.counter = this.testimonios.length - 1;
      this.operacion = this.widthImg * this.counter;
    } else {
      this.counter--;
      this.operacion -= this.widthImg;
    }
    this.slider.nativeElement.style.transform = `translate(-${this.operacion}%)`;
    this.slider.nativeElement.style.transition = 'all ease .6s';
    this.updateTestimonio(this.counter);
  }

  private updateTestimonio(index: number): void {
    this.nombrePerrito.nativeElement.innerHTML = this.testimonios[index].nombre;
    this.testimonioPerrito.nativeElement.innerHTML =
      this.testimonios[index].texto;
  }
}
