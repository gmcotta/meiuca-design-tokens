# Meiuca - Design Tokens

### Introdução

Esse repositório tem o objetivo de mostrar os design tokens de um design system, criada a partir do curso de Design Systems in Code, da Meiuca.

Ao longo do curso, desenvolvemos um design system contendo design tokens, assets (ícones), uma biblioteca de componentes core (contendo os elementos mais primitivos, como botão, input, tipografia...) e uma biblioteca de times (que usa da biblioteca core para criar seus componentes, que serão usados para um produto específico). Dentro da landing page também possuem componentes que não fazem parte do design system e é exclusivo para a página desenvolvida.

Abaixo encontram-se os links para os repositórios do design system:

- [Design Tokens](https://github.com/gmcotta/meiuca-design-tokens)
- [Assets](https://github.com/gmcotta/meiuca-assets)
- [Biblioteca Core](https://github.com/gmcotta/meiuca-design-system-core)
- [Biblioteca de Time](https://github.com/gmcotta/meiuca-design-system-team-lp)
- [Landing Page](https://github.com/gmcotta/meiuca-ds-landing-page)

Abaixo encontra-se também o link para o projeto do design system e da landing page no Figma:

- [Figma](https://www.figma.com/file/ADrWGQ6GfDjIMKkWsJ65M0/DS-in-Code-%7C-Atividade-pr%C3%A1tica?node-id=2%3A3199)

***

### Tecnologias

Os tokens foram feitos a partir do [Style Dictionary](https://amzn.github.io/style-dictionary/#/). Ele permite criar uma estrutura única cuja saída é gerada para diversas tecnologias (CSS/SASS, JS, iOS, Android...).


### Como gerar os tokens

Primeiramente, baixe o repositório:
```bash
  git clone git@github.com:gmcotta/meiuca-design-tokens.git <nome_da_pasta>
```

Entre na pasta gerada:
```bash
  cd nome_da_pasta
```

Instale as dependências (uso o Yarn para gerenciar os pacotes):
```bash
  yarn
```

Para fazer o build da aplicação:
```bash
  yarn build
```
A pasta gerada é ```dist```.


Para publicar o pacote:
```bash
  npm publish --access public
```
