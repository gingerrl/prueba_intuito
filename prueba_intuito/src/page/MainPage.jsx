import React, { useEffect, useState } from 'react';
import InfoNotaCredito from '../components/NotaCredito/InfoNotaCredt';
import InfoTributario from '../components/Tributario/InfoTributario';
import ValorImpuesto from '../components/ValorImpuesto/valorImpuesto';
import  saveData  from '../Actions/FormActions'
import { connect, useDispatch } from 'react-redux';
function MainPage() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    ambiente: null,
    tipoEmision: null,
    razonSocial: null,
    nombreComercial: null,
    ruc: null,
    claveAcceso: null,
    codDoc: null,
    estab: null,
    ptoEmi: null,
    secuencial: null,
    dirMatriz: null,
    agenteRetencion: null,
    contribuyenteRimpe: null,
    fechaEmision: null,
    dirEstablecimiento: null,
    tipoIdentificacionComprador: null,
    razonSocialComprador: null,
    contribuyenteEspecial: null,
    obligadoContabilidad: null,
    rise: null,
    codDocModificado: null,
    numDocModificado: null,
    fechaEmisionDoc: null,
    totalSinImpuesto: null,
    valorModificacion: null,
    moneda: null,
    codigo: null,
    codigoPorcentaje: null,
    baseImponible: null,
    valor: null,
    valorDevolucion: null,
  })

console.log(data)

const handleSave=(data) =>{
  console.log(data)
  dispatch (saveData(data))

}

  return (
    <div className='contenedor'>
      <div className='item-titulo'>
        <span>Formulario</span>
      </div>
      <div className='item-buscador'>
        <InfoTributario dataTributaria={data} setData={setData} />
      </div>
      <div className='item-tabla'>
        <InfoNotaCredito dataNota={data} setData={setData}  />
      </div>
      <div className='item-info'>
        <ValorImpuesto dataValor={data} setData={setData} />
      </div>
      <button className='primaryButton' onClick={() => handleSave(data)} > <i className="fa fa-plus" aria-hidden="true"></i> Guardar</button>

    </div>
  )
}

export default connect(null, ) (MainPage);