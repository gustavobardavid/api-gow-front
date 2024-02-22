import React from 'react';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

const markdownContent = `
# Bem-vindo à Documentação

Esta é a página de introdução da documentação.
Aqui você pode fornecer uma visão geral do seu produto, instruções de instalação, 
uma breve introdução aos recursos principais e outras informações importantes.
`;

const IntroductionPage = () => {
  return (
    <Container>
    <ReactMarkdown remarkPlugins={[breaks]}>{markdownContent}</ReactMarkdown>
  </Container>
  );
};

export default IntroductionPage;
