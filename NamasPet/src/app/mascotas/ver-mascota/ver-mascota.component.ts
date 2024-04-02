import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent {
@Input()
mascota!: Mascota;

constructor(
  private mascotaService: MascotaService,
  private route: ActivatedRoute,
  private router: Router
) {}
ngOnInit(): void {
  console.log("ngoinit");
  //llamar API
  this.route.paramMap.subscribe((params) => {
  const id = Number(params.get('id'));
  this.mascota=this.mascotaService.findById(id);
  });
}
ngochanges(): void {
  console.log("ngonchanges");

}

}
