# Documentação de Configuração do Stylelint para SCSS

Este arquivo de configuração do **Stylelint** tem como objetivo garantir boas práticas e consistência no código SCSS. A seguir, estão as principais regras e configurações.

## Configuração Base
- **`extends`**: Estende a configuração padrão para SCSS.
- **`plugins`**: Adiciona o plugin `stylelint-order` para controlar a ordem das propriedades.
- **`customSyntax`**: Define a sintaxe SCSS usando `postcss-scss`.

## Regras Importantes

### Ordem das Propriedades
- **`order/order`**: Primeiro as propriedades personalizadas (variáveis), depois as declarações.
- **`order/properties-order`**: Define a ordem das propriedades CSS dentro de um bloco. Isso inclui propriedades de layout, flexbox, tamanho, tipografia, cor, bordas, animações e transições.

### Regras de Seletores
- **`selector-class-pattern`**: Exige o padrão **BEM** para classes (`block__element--modifier`).
- **`selector-id-pattern`**: Exige que IDs sejam escritos em minúsculas e com hífens.

### Evitar Duplicações e Erros
- **`no-duplicate-selectors`**: Evita seletores duplicados.
- **`declaration-block-no-duplicate-properties`**: Impede propriedades duplicadas dentro de um bloco de estilo.
- **`no-unknown-animations`**: Evita animações desconhecidas ou inválidas.

### Regras de Cores e Blocos Vazios
- **`color-named`**: Não permite o uso de nomes de cores, forçando o uso de valores hexadecimais ou RGB.
- **`block-no-empty`**: Evita blocos de estilo vazios.

### Outras Configurações
- **`no-empty-source`**: Permite fontes vazias se necessário (usado em casos específicos).
  
## Ordem das Propriedades

A configuração define uma ordem sugerida para as propriedades CSS, conforme abaixo:

1. **Layout**: 
   - `position`, `top`, `right` e etc
   
2. **Display e Flexbox**:
   - `display`, `flex`, `flex-grow` e etc
   
3. **Grid**:
   - `grid`, `grid-template-columns`, `grid-template-rows` e etc
   
4. **Tamanho**:
   - `width`, `min-width`, `max-width` e etc
   
5. **Espaçamento**:
   - `margin`, `margin-top`, `margin-right` e etc
   
6. **Tipografia**:
   - `font`, `font-family`, `font-size` e etc
   
7. **Cores e Fundo**:
   - `color`, `background`, `background-color` e etc
   
8. **Bordas**:
   - `border`, `border-width`, `border-style` e etc
   
9. **Bordas e Sombras**:
   - `border-radius`, `box-shadow`
   
10. **Animação e Transição**:
    - `animation`, `animation-name`, `animation-duration` e etc
    
11. **Outros**:
    - `cursor`, `pointer-events`, `visibility` e etc
    
12. **Propriedades Customizadas**:
    - `custom-properties`

