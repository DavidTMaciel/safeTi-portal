# SafeTI Portal

Este é o repositório do SafeTI Portal, uma camada adicional entre o frontend e o backend do SafeTI, responsável por receber requisições do frontend, buscar dados no backend e entregá-los de volta ao frontend, além de realizar a validação com JWT token.

## Sobre o Projeto

O SafeTI Portal funciona como um intermediário entre o frontend e o backend do SafeTI. Ele recebe requisições do frontend, que podem incluir solicitações de dados ou ações específicas, busca essas informações no backend por meio de chamadas de API e as retorna ao frontend. Além disso, o portal é responsável por validar os JWT tokens enviados pelo frontend para garantir a autenticidade e segurança das requisições.

### Funcionalidades Principais

- Recebimento de requisições do frontend
- Interação com o backend para buscar ou enviar dados
- Validação de JWT tokens para garantir autenticidade e segurança das requisições

## Tecnologias Utilizadas

- **Express**: Framework web para Node.js, utilizado para criar o servidor do portal.
- **Apollo Server Express**: Biblioteca para criar um servidor GraphQL com Express.
- **GraphQL**: Linguagem de consulta e manipulação de dados para APIs.
- **Axios**: Cliente HTTP para fazer requisições para o backend.
- **TypeORM**: ORM (Object-Relational Mapping) para trabalhar com bancos de dados relacionais.
- **PostgreSQL (pg)**: Banco de dados relacional utilizado para armazenar dados do SafeTI.
- **UUID**: Biblioteca para geração de identificadores únicos.
- **JSON Web Token (JWT)**: Padrão para criar tokens de acesso que podem ser verificados facilmente.

## Como Rodar o Projeto Localmente

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/safeti-portal.git

## 1 Navegue até o diretório do projeto:
    cd safeti-portal
## 2 Instale as dependências:
    npm install
## Execute o Servidor
    npm run dev
## Links Relacionados

- **Back-end Repository**: [URL do Repositório Back-end](url-repositorio-back)
- **Portal da Plataforma SafeTI**: [URL do Front](https://github.com/DavidTMaciel/safeti-ui)

---

Este projeto é uma parte crucial do SafeTI, garantindo a comunicação segura e eficiente entre o frontend e o backend da plataforma. Para mais informações sobre outros componentes do SafeTI, consulte os respectivos repositórios e documentações.
