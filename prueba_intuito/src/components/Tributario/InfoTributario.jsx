import React from 'react'
import "../Tributario/InfoTributario.css"

function InfoTributario(props) {

    const { dataTributaria, setData } = props;

    console.log(dataTributaria)
    const handleAmbiente = (e) => {
        setData({ ...dataTributaria, ambiente: e })
    }
    const handleTipoEmision = (e) => {
        setData({ ...dataTributaria, tipoEmision: e })
    }

    const handleRazon = (e) => {
        setData({ ...dataTributaria, razonSocial: e })
    }

    const handleNombreComercial = (e) => {
        setData({ ...dataTributaria, nombreComercial: e })
    }

    const handleRuc = (e) => {
        setData({ ...dataTributaria, ruc: e })
    }

    const handleClaveAcceso = (e) => {
        setData({ ...dataTributaria, claveAcceso: e })
    }
    const handleCodDoc = (e) => {
        setData({ ...dataTributaria, codDoc: e })
    }
    const handleEstab = (e) => {
        setData({ ...dataTributaria, estab: e })
    }

    const handlePtoEmi = (e) => {
        setData({ ...dataTributaria, ptoEmi: e })
    }

    const handleSecuencial = (e) => {
        setData({ ...dataTributaria, secuencial: e })
    }
    const handleDirMatriz = (e) => {
        setData({ ...dataTributaria, dirMatriz: e })
    }

    const handleAgenteRetencion = (e) => {
        setData({ ...dataTributaria, agenteRetencion: e })
    }

    const handlecontribuyenteRimpe = (e) => {
        setData({ ...dataTributaria, contribuyenteRimpe: e })
    }

    return (
        <div  >
            <div>
                <div className="titleTributario">
                    Información Tributario
                    </div>
                <input value={dataTributaria.ambiente} onChange={(e) => handleAmbiente(e.target.value)} placeholder="Ambiente" type="text" />
                <input value={dataTributaria.tipoEmision} onChange={(e) => handleTipoEmision(e.target.value)} placeholder="Tipo Emision" type="text" />
                <input value={dataTributaria.razonSocial} onChange={(e) => handleRazon(e.target.value)} placeholder="Razon social" type="text" />
                <input value={dataTributaria.nombreComercial} onChange={(e) => handleNombreComercial(e.target.value)} placeholder="Nombre comercial" type="text" />
                <input value={dataTributaria.ruc} onChange={(e) => handleRuc(e.target.value)} placeholder="Ruc" type="text" />
                <input value={dataTributaria.claveAcceso} onChange={(e) => handleClaveAcceso(e.target.value)} placeholder="Clave acceso" type="text" />
                <input value={dataTributaria.codDoc} onChange={(e) => handleCodDoc(e.target.value)} placeholder="CodDoc" type="text" />
                <input value={dataTributaria.estab} onChange={(e) => handleEstab(e.target.value)} placeholder="estab" type="text" />
                <input value={dataTributaria.ptoEmi} onChange={(e) => handlePtoEmi(e.target.value)} placeholder="ptoEmi" type="text" />
                <input value={dataTributaria.secuencial} onChange={(e) => handleSecuencial(e.target.value)} placeholder="secuencial" type="text" />
                <input value={dataTributaria.dirMatriz} onChange={(e) => handleDirMatriz(e.target.value)} placeholder="DirMatriz" type="text" />
                <input value={dataTributaria.agenteRetencion} onChange={(e) => handleAgenteRetencion(e.target.value)} placeholder="Agente retencion" type="text" />
                <input value={dataTributaria.contribuyenteRimpe} onChange={(e) => handlecontribuyenteRimpe(e.target.value)} placeholder="Contribuyente Rimpe" type="text" />
            </div>
        </div>
    )
}

export default InfoTributario