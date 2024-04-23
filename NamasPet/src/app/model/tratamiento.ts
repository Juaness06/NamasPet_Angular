import { Droga } from "./droga";
import { Mascota } from "./mascota";
import { Veterinario } from "./veterinario";

export interface Tratamiento {
  id: number;
  nombreTratamiento: string;
  precioC: number;
  fecha: Date;
  drogas?: Droga[];
  veterinario?: Veterinario;
  perros?:Mascota;
}
