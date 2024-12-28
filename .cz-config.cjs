module.exports = {
  types: [
    { value: 'feat', name: 'feat: Adição de uma nova funcionalidade ao projeto.' },
    { value: 'fix', name: 'fix: Correção de um bug identificado no código.' },
    { value: 'docs', name: 'docs: Atualizações ou melhorias na documentação do projeto (e.g., README, comentários).' },
    { value: 'style', name: 'style: Alterações puramente visuais ou de formatação, sem impacto funcional (e.g., indentação, espaços, ponto e vírgula).' },
    { value: 'refactor', name: 'refactor: Refatoração de código que não altera a funcionalidade externa, mas melhora a legibilidade ou estrutura interna.' },
    { value: 'perf', name: 'perf: Melhorias no desempenho ou eficiência do código.' },
    { value: 'test', name: 'test: Criação, atualização ou correção de testes automatizados para o projeto.' },
    { value: 'chore', name: 'chore: Tarefas rotineiras que não alteram o código de produção (e.g., atualizações de ferramentas).' },
    { value: 'build', name: 'build: Alterações no sistema de build ou nas ferramentas utilizadas (e.g., Webpack, Rollup, Babel).' },
    { value: 'ci', name: 'ci: Alterações em configurações ou scripts de integração contínua (e.g., GitHub Actions, Jenkins).' },
    { value: 'revert', name: 'revert: Reversão de um commit anterior devido a problemas ou erros.' },
    { value: 'wip', name: 'wip: Trabalho em progresso, indicando alterações que ainda estão sendo desenvolvidas e não estão finalizadas.' },
    { value: 'temp', name: 'temp: Alterações temporárias que serão revisadas ou removidas posteriormente.' },
    { value: 'security', name: 'security: Correções ou melhorias relacionadas à segurança do projeto (e.g., remoção de vulnerabilidades).' },
    { value: 'design', name: 'design: Alterações relacionadas à aparência visual ou layout, incluindo UX/UI.' },
    { value: 'locale', name: 'locale: Alterações ou adições relacionadas à localização ou internacionalização (e.g., arquivos de tradução).' },
    { value: 'ux', name: 'ux: Melhorias específicas na experiência do usuário (e.g., fluxo de navegação, interatividade).' },
    { value: 'deps', name: 'deps: Adição, remoção ou atualização de dependências de bibliotecas ou frameworks.' },
    { value: 'config', name: 'config: Alterações ou melhorias em arquivos de configuração do projeto (e.g., ESLint, Prettier).' },
    { value: 'data', name: 'data: Alterações na estrutura ou conteúdo de dados, incluindo seeds, mocks ou bases de dados.' },
    { value: 'hotfix', name: 'hotfix: Correções urgentes aplicadas diretamente em produção para resolver problemas críticos.' },
    { value: 'infra', name: 'infra: Alterações na infraestrutura do projeto, incluindo servidores, ambientes de deploy e scripts relacionados.' },
    { value: 'env', name: 'env: Modificações relacionadas a variáveis de ambiente, arquivos `.env`, ou configurações sensíveis a ambientes específicos (e.g., dev, staging, prod).' },
    { value: 'lint', name: 'lint: Correções de erros ou ajustes relacionados ao linting do código, garantindo conformidade com regras estabelecidas.' },
    { value: 'release', name: 'release: Preparação para a nova versão do projeto, incluindo atualizações de versões, arquivos de release, etc.' },
    { value: 'seo', name: 'seo: Alterações relacionadas ao SEO, melhorias na estrutura de URLs, meta tags, etc.' }
  ],
  messages: {
    type: 'Selecione o tipo de alteração que você está commitando:',
    subject: 'Escreva uma descrição breve (obrigatório):',
    body: 'Escreva uma descrição detalhada das alterações (opcional):',
    footer: 'Adicione informações adicionais, como IDs de tickets (opcional):',
    confirmCommit: 'Confirma o commit com as informações acima?'
  },
  subjectLimit: 100
};