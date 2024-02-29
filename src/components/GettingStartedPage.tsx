import React from 'react';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import remarkGfm from 'remark-gfm'

const markdownContent = `
# Getting Started

## Technical details

| What          | Description                                  |
| -------------- | ------------------------------------------ |
| Characters    | Information about the characters in the game. |
| Weapons       | Information about the weapons in the game.       |
| Items        | Information about the items in the game.       |
| Games        | Information about all the games released.     |

## Resources
| Resource        | Base URL                     | Version | 
| -------------- | --------------------------- | ------ |
| Characters   | https://gowdb.up.railway.app/v1/characters      | v1     |
| Games          | https://gowdb.up.railway.app/v1/games     | v1     |
| Items          | https://gowdb.up.railway.app/v1/items      | v1     |
`;


const GettingStartedPage = () => {
  return (
    <Container>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
  </Container>
  );
};

export default GettingStartedPage;
