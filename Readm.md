<!-- install dependencias Type script-->
- npm i styled-components 
- npm i @types/styled-components -D

<!-- install dependencias eslint -->
- npm i eslint -D
- npm i @rocketseat/eslint-config -D

rode este comando no terminal para ver todos os erros que o eslint mostra
- npx eslint src --ext .ts,.tsx

<!-- ajusta todos os erro de padrões -->
-npx eslint src --ext .ts,.tsx --fix

// adicionei esse codigo dentro de package.json e só rodar o comando 
- npm run lint

// agora só rodar deste modo 
- npm run lint --fix