import React from 'react';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

const markdownContent = `
# Starting

Para começar a usar a API GowDB, você precisará se inscrever para obter uma chave de API. A chave de API é necessária para autenticar suas solicitações à API e garantir que você tenha acesso aos recursos disponíveis.

Para obter uma chave de API, visite nosso site e siga as instruções para se registrar. Depois de obter sua chave de API, você poderá começar a fazer solicitações à API GowDB e explorar os dados do universo de "God of War".

## Documentação

Esta documentação é dividida em várias seções para ajudá-lo a entender e usar a API GowDB:

- **Endpoints**: Lista completa de todos os endpoints disponíveis e suas descrições.
- **Parâmetros de Solicitação**: Descrição de todos os parâmetros de solicitação aceitos pelos endpoints.
- **Exemplos de Uso**: Exemplos práticos de como fazer solicitações à API GowDB e interpretar as respostas.
- **Limitações e Política de Uso**: Informações sobre limites de taxa, políticas de uso e outras considerações importantes ao usar a API GowDB.

Esperamos que esta documentação seja útil e que você aproveite o acesso aos dados da GowDB por meio da API GowDB. Se você tiver alguma dúvida ou precisar de suporte adicional, não hesite em entrar em contato conosco.

Divirta-se explorando o universo de "God of War" com a API GowDB!`
;

const RestPage = () => {
  return (
    <Container>
    <ReactMarkdown remarkPlugins={[breaks]}>{markdownContent}</ReactMarkdown>
  </Container>
  );
};

export default RestPage;
