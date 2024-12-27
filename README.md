# b_react-scss

Este é um boilerplate para projetos React com SCSS, Vite, ESLint, Stylelint, Prettier, Lint-staged com Husky e Commitlint.

## Comandos

### Desenvolvimento

* `npm run dev`: Inicia o servidor de desenvolvimento com o Vite.
* `npm run build`: Cria a build do projeto.
* `npm run preview`: Inicia o servidor de preview com o Vite.

### Lint

* `npm run lint`: Executa o ESLint em todos os arquivos JS e JSX.
* `npm run lint:scss`: Executa o Stylelint em todos os arquivos SCSS.
* `npm run lint:scss:fix`: Executa o Stylelint em todos os arquivos SCSS e corrige os erros.

### Commit

* `npm run commit`: Abre o Commitizen para ajudar a criar um commit com as boas práticas (antes precisa usar um `git add`).

## Configurações

### ESLint

O ESLint foi configurado para utilizar as configurações padrão do React e do plugin React Hooks. Além disso, também inclui regras adicionais para garantir que os commits sejam feitos de acordo com as boas práticas.

### Stylelint

O Stylelint foi configurado para utilizar o plugin de ordenação de propriedades SCSS. Isso significa que as propriedades CSS devem ser ordenadas de acordo com a ordem especificada no arquivo `.stylelintrc.json`.

### Prettier

O Prettier foi configurado para formatar os arquivos JS e JSX de acordo com as configurações padrão.

### Lint-staged com Husky

O Lint-staged foi configurado para executar o ESLint e o Stylelint em todos os arquivos que são commitados. Isso ajuda a garantir que os commits sejam feitos de acordo com as boas práticas.

### Commitlint

O Commitlint foi configurado para utilizar as configurações padrão do Conventional Changelog. Isso significa que os commits devem ser feitos de acordo com as boas práticas de commit.

### Commitizen

O Commitizen foi configurado para utilizar configurações personalizadas de commits, pode verificar isso no arquivo `commitlint.config.js`. Isso significa que os commits devem ser feitos de acordo com as boas práticas de commit.
