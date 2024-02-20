# GoW DB - God of War Database API

Bem-vindo à documentação oficial da API GoW DB (God of War Database)! Esta API fornece acesso a informações sobre o universo do jogo God of War, incluindo personagens, armas, locais e muito mais.

## Descrição

A API GoW DB é uma fonte centralizada de dados relacionados ao mundo do God of War. Com esta API, os desenvolvedores podem acessar facilmente informações detalhadas sobre vários aspectos do jogo, como personagens, inimigos, armas, armaduras, magias e itens colecionáveis.

## Recursos Disponíveis

Atualmente, a API GoW DB oferece os seguintes recursos principais:

1. **Personagens**: Informações detalhadas sobre personagens principais, secundários e inimigos do God of War.
2. **Armas e Armaduras**: Descrições e estatísticas de armas, armaduras e equipamentos disponíveis no jogo.
3. **Locais**: Detalhes sobre os diferentes locais e regiões exploráveis no mundo do God of War.
4. **Itens Colecionáveis**: Informações sobre itens colecionáveis, como artefatos, pergaminhos e recursos.

## Autenticação

A API GoW DB atualmente não requer autenticação para acessar os recursos disponíveis. No entanto, a autenticação pode ser implementada posteriormente para controlar o acesso a recursos sensíveis ou para limitar o uso da API.

## Endpoints

A seguir estão os endpoints disponíveis na API GoW DB:

### GET /characters
### Get /games

Retorna uma lista de todos os personagens do God of War.

#### Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Kratos",
    "role": "Protagonist"
  },
  ...
]
