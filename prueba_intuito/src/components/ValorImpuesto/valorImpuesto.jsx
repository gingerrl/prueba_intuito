import React from 'react'


function ValorImpuesto(props) {
    const { dataValor, setData } = props;


    const handleCodigo = (e) => {
        setData({ ...dataValor, codigo: e })
    }
    const handleCodigoPorcentaje = (e) => {
        setData({ ...dataValor, codigoPorcentaje: e })
    }

    const handleBaseImponible = (e) => {
        setData({ ...dataValor, baseImponible: e })
    }

    const handleValor = (e) => {
        setData({ ...dataValor, valor: e })
    }

    const handleValorDevolucion = (e) => {
        setData({ ...dataValor, valorDevolucion: e })
    }


    return (
        <div  >
            <div className="titleTributario">
                Total con Impuesto
                    </div>
            <div>
                <input className="styled-slider slider-progress" value={dataValor.codigo} onChange={(e) => handleCodigo(e.target.value)} placeholder="Codigo" type="text" />
                <input className="styled-slider slider-progress" value={dataValor.codigoPorcentaje} onChange={(e) => handleCodigoPorcentaje(e.target.value)} placeholder="Codigo Porcentaje" type="text" />
                <input className="styled-slider slider-progress" value={dataValor.baseImponible} onChange={(e) => handleBaseImponible(e.target.value)} placeholder="Base Imponible" type="text" />
                <input className="styled-slider slider-progress" value={dataValor.valor} onChange={(e) => handleValor(e.target.value)} placeholder="valor" type="text" />
                <input className="styled-slider slider-progress" value={dataValor.valorDevolucion} onChange={(e) => handleValorDevolucion(e.target.value)} placeholder="Valor Devolucion" type="text" />

            </div>


        </div>
    )
}

export default ValorImpuesto