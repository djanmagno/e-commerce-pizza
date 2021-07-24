import React, {useState, useEffect} from 'react';
import api1 from '../../services/api1';

import {
    ProdutosContainer,
    ProdutosHeader,
    ProdutosOrder,
    CardProduto,
    ImagemProduto,
    InfoProduto,
    TituloProduto,
    DescProduto,
    PrecoProduto,
    BotaoProduto
} from './ProdutosElements';

// import { Container } from './styles';

function Produtos({header, dados}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        api1.get('').then(
            response => {
                setData(response.data)
            }
        )
    },[]);

    const handleCart = (index) => {
        const produto = JSON.stringify(dados[index]);
        localStorage.setItem(`@Produto = ${index}`, produto);
    }

    return (
        <ProdutosContainer>
            <ProdutosHeader>{header}</ProdutosHeader>
            <ProdutosOrder>
                {data.map((produto, index) =>{
                    return (
                        <CardProduto key={index}>
                            <ImagemProduto src={produto.img} alt={produto.alt} />
                            <InfoProduto>
                                <TituloProduto>{produto.nome}</TituloProduto>
                                <DescProduto>{produto.descricao}</DescProduto>
                                <PrecoProduto>{produto.preco}</PrecoProduto>
                                <BotaoProduto onClick={() => handleCart(index)}>{produto.botao}</BotaoProduto>
                            </InfoProduto>
                        </CardProduto>
                    )
                })}
            </ProdutosOrder>
        </ProdutosContainer>
    );
}

export default Produtos;