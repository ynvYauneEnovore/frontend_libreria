<s
<template>
    <div>
      <h2>Caja Chica</h2>
      <div class="box">
        <div class="box-header">
          <h3>Detalles de la caja chica</h3>
        </div>
        <div class="box-body">
          <div class="form-group">
            <label for="concepto">Concepto:</label>
            <input type="text" id="concepto" class="form-control">
          </div>
          <div class="form-group">
            <label for="monto">Monto:</label>
            <input type="number" id="monto" class="form-control">
          </div>
          <div class="form-group">
            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" class="form-control">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" rows="4" class="form-control"></textarea>
          </div>
        </div>
        <div class="box-footer">
          <button class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .box {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .box-header {
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  .form-control {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  