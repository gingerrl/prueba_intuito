import React from 'react'
import { useSelector } from 'react-redux';
import "../Listado/ListadoForm.css"

function Listado() {

    const listadoForm = useSelector(state => state.FormReducers.data);

    return (

        <div className="listContainer">

            {listadoForm.map((list, index) => (
                <div key={index}>
                    <div className="formText"> <span className="textForm" >Ambiente: </span> {list.ambiente}</div>
                    <div className="formText" > <span className="textForm">tipoEmision: </span>{list.tipoEmision}</div>
                    <div className="formText"> <span className="textForm">razonSocial: </span>{list.razonSocial}</div>
                    <div className="formText"> <span className="textForm">nombreComercial: </span>{list.nombreComercial}</div>
                    <div className="formText"> <span className="textForm">ruc: </span> {list.ruc}</div>
                    <div className="formText"><span className="textForm">claveAcceso: </span> {list.claveAcceso}</div>
                    <div className="formText"> <span className="textForm">codDoc: </span> {list.codDoc}</div>
                    <div className="formText"> <span className="textForm">estab: </span> {list.estab}</div>
                    <div className="formText"> <span className="textForm">ptoEmi: </span> {list.ptoEmi}</div>
                    <div className="formText"><span className="textForm">secuencial: </span> {list.secuencial}</div>
                    <div className="formText"> <span className="textForm">dirMatriz: </span> {list.dirMatriz}</div>
                    <div className="formText"> <span className="textForm">agenteRetencion: </span> {list.agenteRetencion}</div>
                    <div className="formText"> <span className="textForm">contribuyenteRimpe: </span> {list.contribuyenteRimpe}</div>
                    <div className="formText"><span className="textForm">fechaEmision: </span> {list.fechaEmision}</div>
                    <div className="formText"> <span className="textForm">dirEstablecimiento: </span> {list.dirEstablecimiento}</div>
                    <div className="formText"> <span className="textForm">tipoIdentificacionComprador: </span> {list.tipoIdentificacionComprador}</div>
                    <div className="formText"> <span className="textForm">razonSocialComprador: </span> {list.razonSocialComprador}</div>
                    <div className="formText"> <span className="textForm">identificacionComprador: </span> {list.identificacionComprador}</div>
                    <div className="formText"><span className="textForm">contribuyenteEspecial: </span> {list.contribuyenteEspecial}</div>
                    <div className="formText"> <span className="textForm">obligadoContabilidad: </span> {list.obligadoContabilidad}</div>
                    <div className="formText"> <span className="textForm">rise: </span> {list.rise}</div>

                    <div className="formText"> <span className="textForm">codDocModificado: </span> {list.codDocModificado}</div>
                    <div className="formText"> <span className="textForm">numDocModificado: </span> {list.numDocModificado}</div>
                    <div className="formText"><span className="textForm">fechaEmisionDoc: </span> {list.fechaEmisionDoc}</div>
                    <div className="formText"> <span className="textForm">totalSinImpuesto: </span> {list.totalSinImpuesto}</div>
                    <div className="formText"> <span className="textForm">valorModificacion: </span> {list.valorModificacion}</div>
                    <div className="formText"> <span className="textForm">moneda: </span> {list.moneda}</div>
                    <div className="formText"> <span className="textForm">codigo: </span> {list.codigo}</div>
                    <div className="formText"><span className="textForm">codigoPorcentaje: </span> {list.codigoPorcentaje}</div>
                    <div className="formText"> <span className="textForm">baseImponible: </span> {list.baseImponible}</div>
                    <div className="formText"> <span className="textForm">valor: </span> {list.valor}</div>
                    <div className="formText"> <span className="textForm">valorDevolucion: </span> {list.valorDevolucion}</div>
                </div>
            ))}
        </div>
    )
}

export default Listado