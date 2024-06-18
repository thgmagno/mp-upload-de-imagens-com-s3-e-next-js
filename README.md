# Upload de Imagens com S3 e Next.js

Crie uma galeria de fotos simples com upload de imagens diretamente para o Amazon S3 (AWS) utilizando Next.js, React e TailwindCSS. O usuário conseguirá arrastar e soltar imagens diretamente na interface para upload, além de visualizar as imagens já armazenadas no S3. O design final do projeto já está definido e você poderá utilizá-lo como base para sua implementação.

## 🤓 Antes de começar

Este Mini Projeto não possui setup inicial. Você deverá começar o projeto do zero. 

## 🔨 Requisitos

### Configuração da AWS

- Crie uma conta AWS - se você ainda não tiver nenhuma para utilizar o serviço S3
- Crie um bucket no S3 para armazenar as imagens.
- Obtenha as credenciais de acesso (Access Key ID e Secret Access Key) para sua conta AWS

> [!CAUTION]  
> Cuidado com o vazamento de credenciais! Use as melhores práticas de segurança e **nunca** coloque uma chave API diretamente no seu repositório git.


### Componente de Upload de Imagens

- **Arrastar e Soltar:** Deve ser permitido que o usuário arraste e solte imagens na área de upload, com um visual que indica a área de drop (indicado no design por linhas tracejadas).
- **Validação de Tamanho:** Limitar o tamanho máximo das imagens para 2MB, exibindo uma mensagem de erro caso o limite seja excedido.
- **Tipo de Arquivo:** Aceite apenas imagens.
- **Armazenamento no S3:** Enviar as imagens para o bucket S3, exibindo uma mensagem de sucesso após o upload.
- **Server Actions:** Implemente o envio de dados utilizando Server Actions

> [!TIP]  
> Utilize a biblioteca `uppy` para implementar a funcionalidade de drag and drop.
> Utilize a biblioteca `@aws-sdk/client-s3` para interagir com o S3.


### Galeria de Imagens:

- **Layout:** As imagens devem ser exibidas em uma grade de colunas. A grade deverá ser responsiva.
- **Visualização das Imagens:** Exibir as imagens em uma grade, com tamanho proporcional ao espaço da grade, mantendo a proporção original da imagem.
- **Ordenação por Data:** Ordenar as imagens por data de upload, exibindo as imagens mais recentes primeiro.
- **Exclusão de Imagens:** Implementar um botão de exclusão para cada imagem, que deve ser exibido ao passar o mouse sobre a imagem.
- **Server Actions:** Implemente a exclusão de imagens utilizando Server Actions

> [!TIP]  
> Utilize o componente `Image` do Next.js.


## 🔨 Desafio extra para quem quer ir além

- **Compressão de Imagens:** Implemente a compressão de imagens antes do upload utilizando a biblioteca `sharp`.
- **Gerenciamento de Metadados:** Armazene metadados adicionais para cada imagem, como título, descrição, etc., e permita que o usuário edite esses metadados.

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1384982363863255036/mini-projeto-upload-de-imagens-com-s3-e-next-js)

## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar:

#### Next.js

- **Server Actions:** Utilizar Server Actions para gerenciar o upload de imagens e a exclusão de imagens na galeria.
- **`revalidatePath()`:** Implementar a revalidação de páginas para atualizar a galeria de imagens após o upload ou a exclusão de imagens.
- **`next/image`:** Utilizar o componente `next/image` para otimizar o carregamento das imagens na galeria.

#### AWS S3

- **Interação com S3:** Utilizar a biblioteca `@aws-sdk/client-s3` para interagir com o S3 e realizar o upload, listagem e a exclusão de imagens.
- **Gerenciamento de Bucket:** Criar e gerenciar um bucket S3 para armazenar as imagens.
- **Configurar Credenciais:** Configurar as credenciais da AWS no projeto Next.js para acesso ao S3.
- **S3 e IAM:** Utilizar o serviço IAM (Identity and Access Management) da AWS para configurar permissões de acesso ao bucket S3.

#### TailwindCSS

- **Layout:** Criar um layout responsivo para a galeria de imagens, com a grade de 3 colunas.
- **Estilização:** Estilizar os componentes da aplicação utilizando a sintaxe de classes do TailwindCSS, incluindo o modal de confirmação.
- **Flexbox e Grid:** Utilizar flexbox e grid para criar layouts flexíveis e responsivos.

### Pré requisitos

- Conhecimento básico de HTML, CSS e JavaScript.
- Familiaridade com React.
- Conhecimento básico do framework Next.js.
