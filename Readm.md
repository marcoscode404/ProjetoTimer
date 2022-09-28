<!-- install dependencias Type script-->
- npm i styled-components 
- npm i @types/styled-components -D

<!-- install dependencias eslint -->
- npm i eslint -D
- npm i @rocketseat/eslint-config -D

## rode este comando no terminal para ver todos os erros que o eslint mostra
- npx eslint src --ext .ts,.tsx

<!-- ajusta todos os erro de padrões -->
-npx eslint src --ext .ts,.tsx --fix

// adicionei esse codigo dentro de package.json e só rodar o comando 
- npm run lint

## agora só rodar deste modo 
- npm run lint --fix

## para desinstalar o eslint do projeto
-- apague o arquivo .eslintrc.json e no package.json https://stackoverflow.com/questions/49227262/how-to-install-eslint-globally

<!-- integrando react router Dom-->
- npm i react-router-dom

<!-- biblioteca de icones -->
- npm i phosphor-react  

<!-- biblioteca de formularios -->
- npm i react-hook-form 

<!-- instalando biblioteca de validação -->
- npm i zod

<!-- permite integrar as bibliotecas de validação e forms -->
- npm i @hookform/resolvers

<!-- date fns -->
- npm i date-fns