# Armazenamento Local Ionic

Aplicação web construída com Ionic e Angular para cadastrar e administrar contatos. Os dados são armazenados localmente com o Ionic Storage, sem uma API ou um servidor de banco de dados configurados neste repositório.

## Demonstração

O repositório não contém capturas de tela nem um link público de demonstração. Quando houver uma captura real, ela poderá ser adicionada ao projeto em `src/assets/` e referenciada aqui com um caminho relativo.

## Funcionalidades

- Cadastrar contatos com nome, e-mail e telefone.
- Exibir a lista de contatos cadastrados.
- Editar e excluir contatos.
- Persistir os dados localmente usando o Ionic Storage.

## Tecnologias

- **Interface:** Angular 22, Ionic Angular 9 e SCSS.
- **Armazenamento local:** Ionic Storage Angular 4.
- **Linguagem:** TypeScript 6.
- **Integração mobile:** Capacitor 8 está configurado; o repositório não inclui projetos nativos Android ou iOS.

Não foram identificados serviços de API, autenticação ou banco de dados remoto na configuração atual.

## Organização do código

```text
src/
├── app/
│   ├── home/                 # Tela de cadastro e lista de contatos
│   ├── services/             # Serviço de persistência e operações de contatos
│   ├── app-routing.module.ts # Rota inicial para a tela Home
│   └── app.module.ts         # Módulo principal e configuração do Ionic Storage
├── assets/                   # Recursos estáticos
├── environments/             # Configurações de build por ambiente
├── global.scss               # Estilos globais
└── theme/                    # Variáveis de tema do Ionic
```

O componente da tela Home chama o serviço de contatos, que inicializa o Ionic Storage e realiza as operações de leitura, cadastro, atualização e exclusão.

## Como executar

### Pré-requisitos

- Node.js e npm em versões compatíveis com as dependências do projeto.
- Git para clonar o repositório.

### Instalação e execução

Na raiz do projeto, instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm ci
npm start
```

O comando `npm start` executa `ng serve`. A saída do terminal informa o endereço local para abrir no navegador.

### Build

```bash
npm run build
```

O script executa `ng build`; a configuração do Angular define `www/` como diretório de saída. Não há variáveis de ambiente obrigatórias documentadas na configuração atual.

## Aspectos técnicos

A aplicação separa a tela de apresentação da persistência: a página Home mantém o estado do formulário e solicita as operações ao `ContatosService`, enquanto o serviço utiliza o Ionic Storage de forma assíncrona. A configuração existente atende ao armazenamento local; não há instruções ou integração configurada para sincronização com servidor.

## Créditos e status

Os arquivos do repositório não informam se o projeto é individual ou colaborativo, nem registram participantes ou o status de desenvolvimento. Por isso, não são atribuídas contribuições nem uma situação de conclusão.

## Contato

- GitHub: [DiegoOLiveiraCamargo](https://github.com/DiegoOLiveiraCamargo)
- LinkedIn: [Diego Oliveira Camargo](https://www.linkedin.com/in/diegooliveiracamargo/)
