import { CatProducto } from './catproducto';
import { VentaDetalle } from './ventadetalle';

export interface Producto {
  id: number;
  idCatProducto: number;
  nombre: string;
  precio: number;
  descripcion: string;
  estado: boolean;
  imagen: string;
  min: string;
  max: string;
  stock: string;
  fechaCreacion: Date;
  fechaModificacion: Date;
  catproducto: CatProducto;
  ventadetalle: VentaDetalle[];
}
