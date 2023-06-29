import { Producto } from './producto';

export interface CatProducto {
  id: number;
  nombre: string;
  fechaCreacion: Date;
  fechaModificacion: Date;
  productos: Producto[];
}
