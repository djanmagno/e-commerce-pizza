import React from 'react';
import {FeatureContainer, FeatureBotao} from './FeatureElements';

// import { Container } from './styles';

function Feature() {

  return (
      <FeatureContainer>
          <h1>Pizza do Dia</h1>
          <p>Pizza de massa fina com molho Alfredo Trufado com 24 toppings a seu gosto.</p>
          <FeatureBotao>Saiba Mais</FeatureBotao>
      </FeatureContainer>
  );
}

export default Feature;