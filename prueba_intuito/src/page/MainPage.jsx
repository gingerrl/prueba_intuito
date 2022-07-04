import React, { useEffect, useState } from 'react';
import InfoNotaCredito from '../components/NotaCredito/InfoNotaCredt';
import InfoTributario from '../components/Tributario/InfoTributario';
import ValorImpuesto from '../components/ValorImpuesto/valorImpuesto';
import saveData from '../Actions/FormActions'
import { connect, useDispatch } from 'react-redux';
import "../components/Tributario/InfoTributario.css";
import "../components/NotaCredito/notaCredito.css"
import "../components/ValorImpuesto/valorImpuesto.css"
import Listado from '../components/Listado/ListadoForm';
import "../page/MainPage.css"
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
    identificacionComprador: null,
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

  const handleSave = (data) => {
    dispatch(saveData(data))
    setData({
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
      identificacionComprador: null,
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

  }

  return (
    <div >
      <div className='titleForm'>
        <span>Formulario</span>
      </div>
      <div className='tributario'>
        <InfoTributario dataTributaria={data} setData={setData} />
      </div>
      <div className='notaCredito'>
        <InfoNotaCredito dataNota={data} setData={setData} />
      </div>
      <div className='impuesto'>
        <ValorImpuesto dataValor={data} setData={setData} />
      </div>
      <button onClick={() => handleSave(data)} > Guardar</button>
      <Listado />

    </div>
  )
}

export default connect(null,)(MainPage);