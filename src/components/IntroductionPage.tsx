import React from 'react';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

const markdownContent = `# Introduction

Welcome to the documentation of the GoW DB: API

## What is the GoW DB: API?

The GowDB API is an application programming interface (API) that provides access to data from GowDB, a database containing information about the "God of War" game universe. 

- Retrieve detailed information about ***characters***, including their weapon and roles.
- Get thorough details about all the games released. 

We hope you find this documentation helpful and that you enjoy accessing GowDB data through the GowDB API. If you have any questions or need additional support, please don't hesitate to contact us.

Have fun exploring the “God of War” universe with the GowDB API!`
;

const IntroductionPage = () => {
  return (
    <Container>
    <ReactMarkdown remarkPlugins={[breaks]}>{markdownContent}</ReactMarkdown>
  </Container>
  );
};

export default IntroductionPage;
