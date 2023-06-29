export interface Cliente {
    id: number;
    nit: string;
    codigoCliente: number;
    nombreCliente: string;
    direccion: string;
    genero: string;
    telefono: string;
    celular: string;
    email: string;
    fechaNacimiento: Date;
    fechaCreacion: Date;
    fechaModificacion: Date;
    ventas: VentaEntity[];
  }
  