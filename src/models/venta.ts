export interface Venta {
    id: number;
    idCliente: number;
    creada: string;
    estado: string;
    finalizada: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    ventadetalle: VentaDetalleEntity[];
    cliente: ClienteEntity;
  }
  