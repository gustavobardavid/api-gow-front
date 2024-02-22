import React from 'react';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Getting Started

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita alias doloribus eius, illum modi, ipsa, sint ratione deleniti qui excepturi id optio non deserunt repellat commodi tempore ut.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam molestiae similique recusandae quos numquam odit quidem libero porro quo. Voluptatem perferendis at possimus totam voluptatibus est! Sunt, beatae voluptatibus.

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia aut, reiciendis, optio, nesciunt cupiditate provident temporibus error est quasi esse architecto accusantium ullam! Assumenda animi molestias quibusdam facilis modi?

`;

const GettingStartedPage = () => {
  return (
    <Container>
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  </Container>
  );
};

export default GettingStartedPage;
