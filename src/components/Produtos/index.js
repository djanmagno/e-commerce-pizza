import React from 'react';

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
  return (
      <ProdutosContainer>
          <ProdutosHeader>{header}</ProdutosHeader>
          <ProdutosOrder>
              {dados.map((produto, index) =>{
                  return (
                      <CardProduto key={index}>
                          <ImagemProduto src={produto.img} alt={produto.alt} />
                          <InfoProduto>
                              <TituloProduto>{produto.nome}</TituloProduto>
                              <DescProduto>{produto.descricao}</DescProduto>
                              <PrecoProduto>{produto.preco}</PrecoProduto>
                              <BotaoProduto>{produto.botao}</BotaoProduto>
                          </InfoProduto>
                      </CardProduto>
                  )
              })}
          </ProdutosOrder>
      </ProdutosContainer>
  );
}

export default Produtos;