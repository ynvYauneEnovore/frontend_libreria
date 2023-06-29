export interface VentaDetalle {
    id: number;
    idVentaDetalle: number;
    idVenta: number;
    cantidad: number;
    precioNeto: number;
    descuento: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    producto: ProductoEntity;
    venta: VentaEntity;
  }
  