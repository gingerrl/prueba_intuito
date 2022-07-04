import React, { useEffect, useState } from 'react'


function InfoNotaCredito(props) {

    const { dataNota, setData } = props;

    const handleFechaEmision = (e) => {
        setData({ ...dataNota, fechaEmision: e })
    }
    const handleDirEstablecimiento = (e) => {
        setData({ ...dataNota, dirEstablecimiento: e })
    }
    const handleTipoIdentificacion = (e) => {
        setData({ ...dataNota, tipoIdentificacionComprador: e })
    }
    const handleRazonSocial = (e) => {
        setData({ ...dataNota, razonSocialComprador: e })
    }
    const handleIdentificacionComprador = (e) => {
        setData({ ...dataNota, identificacionComprador: e })
    }
    const handleContribuyenteEspecial = (e) => {
        setData({ ...dataNota, contribuyenteEspecial: e })
    }

    const handleObligadoContabilidad = (e) => {
        setData({ ...dataNota, obligadoContabilidad: e })
    }
    const handleRise = (e) => {
        setData({ ...dataNota, rise: e })
    }
    const handleCodDocModificado = (e) => {
        setData({ ...dataNota, codDocModificado: e })
    }

    const handleNumDocModificado = (e) => {
        setData({ ...dataNota, numDocModificado: e })
    }

    const handleFechaEmisionDoc = (e) => {
        setData({ ...dataNota, fechaEmisionDoc: e })
    }
    const handleTotalSinImpuesto = (e) => {
        setData({ ...dataNota, totalSinImpuesto: e })
    }

    const handleValorModificacion = (e) => {
        setData({ ...dataNota, valorModificacion: e })
    }

    const handleMoneda = (e) => {
        setData({ ...dataNota, moneda: e })
    }

    return (
        <div  >
            <div>
                <div className="titleTributario">
                    Informacion Nota de Credito
                    </div>
                <input className="styled-slider slider-progress" value={dataNota.fechaEmision} onChange={(e) => handleFechaEmision(e.target.value)} placeholder="Fecha Emision" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.dirEstablecimiento} onChange={(e) => handleDirEstablecimiento(e.target.value)} placeholder="Dir establecimiento" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.tipoIdentificacionComprador} onChange={(e) => handleTipoIdentificacion(e.target.value)} placeholder="Tipo identificacion comprador" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.razonSocialComprador} onChange={(e) => handleRazonSocial(e.target.value)} placeholder="Razon social comprador" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.contribuyenteEspecial} onChange={(e) => handleContribuyenteEspecial(e.target.value)} placeholder="Contribuyente Especial" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.identificacionComprador} onChange={(e) => handleIdentificacionComprador(e.target.value)} placeholder="Identificacion comprador" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.obligadoContabilidad} onChange={(e) => handleObligadoContabilidad(e.target.value)} placeholder="Obligado contabilidad" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.rise} onChange={(e) => handleRise(e.target.value)} placeholder="Rise" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.codDocModificado} onChange={(e) => handleCodDocModificado(e.target.value)} placeholder="Coddoc modificado" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.numDocModificado} onChange={(e) => handleNumDocModificado(e.target.value)} placeholder="NumDoc modificado" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.fechaEmisionDoc} onChange={(e) => handleFechaEmision(e.target.value)} placeholder="Fecha emisiondoc" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.totalSinImpuesto} onChange={(e) => handleTotalSinImpuesto(e.target.value)} placeholder="Total sin impuesto" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.valorModificacion} onChange={(e) => handleValorModificacion(e.target.value)} placeholder="Valor modificacion" type="text" />
                <input className="styled-slider slider-progress" value={dataNota.moneda} onChange={(e) => handleMoneda(e.target.value)} placeholder="Moneda" type="text" />
            </div>
        </div>
    )
}

export default InfoNotaCredito