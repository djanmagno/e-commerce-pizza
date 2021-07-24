import React, {useState, useEffect} from 'react';
import api2 from '../../services/api2';

import {
    SobremesasContainer,
    SobremesasHeader,
    SobremesasOrder,
    CardSobremesa,
    ImagemSobremesa,
    InfoSobremesa,
    TituloSobremesa,
    DescSobremesa,
    PrecoSobremesa,
    BotaoSobremesa
} from './SobremesasElements';

// import { Container } from './styles';

function Sobremesas({header, dados}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        api2.get('').then(
            response => {
                setData(response.data)
            }
        )
    },[]);

    const handleCart = (index) => {
        const Sobremesa = JSON.stringify(dados[index]);
        localStorage.setItem(`@Sobremesa = ${index}`, Sobremesa);
    }

    return (
        <SobremesasContainer>
            <SobremesasHeader>{header}</SobremesasHeader>
            <SobremesasOrder>
                {data.map((sobremesa, index) =>{
                    return (
                        <CardSobremesa key={index}>
                            <ImagemSobremesa src={sobremesa.img} alt={sobremesa.alt} />
                            <InfoSobremesa>
                                <TituloSobremesa>{sobremesa.nome}</TituloSobremesa>
                                <DescSobremesa>{sobremesa.descricao}</DescSobremesa>
                                <PrecoSobremesa>{sobremesa.preco}</PrecoSobremesa>
                                <BotaoSobremesa onClick={() => handleCart(index)}>{sobremesa.botao}</BotaoSobremesa>
                            </InfoSobremesa>
                        </CardSobremesa>
                    )
                })}
            </SobremesasOrder>
        </SobremesasContainer>
    );
}

export default Sobremesas;