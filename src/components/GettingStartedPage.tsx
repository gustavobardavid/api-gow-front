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
| Locations        | Information about the locations in the game.     |

## Resources
| Resource        | Base URL                     | Version | 
| -------------- | --------------------------- | ------ |
| Characters   | https://api.gowdb.com      | v1     |
| Games          | https://api.gowdb.com      | v1     |
| Items          | https://api.gowdb.com      | v1     |
| Locations         | https://api.gowdb.com      | v1     |
`;


const GettingStartedPage = () => {
  return (
    <Container>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
  </Container>
  );
};

export default GettingStartedPage;
