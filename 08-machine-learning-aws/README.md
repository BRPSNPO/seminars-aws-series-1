# Machine Learning na AWS

Focaremos em 5 serviços principais: 

## Textract 

O Amazon Textract é um serviço que extrai automaticamente texto e dados de documentos digitalizados. O Amazon Textract vai além do simples OCR (Reconhecimento óptico de caracteres) para também identificar o conteúdo de campos em formulários e informações armazenadas em tabelas.

https://docs.aws.amazon.com/textract/latest/dg/what-is.html

## Lex
O Amazon Lex é um serviço para a criação de interfaces de conversa em qualquer aplicativo usando voz e texto. O Amazon Lex disponibiliza funcionalidades avançadas de aprendizado profundo de Automatic Speech Recognition (ASR – Reconhecimento automático de fala), para a conversão de fala em texto, e Natural Language Understanding (NLU – Compreensão de linguagem natural.

https://docs.aws.amazon.com/lex/latest/dg/getting-started.html

## Translate
O Amazon Translate é um serviço de tradução automática neural que fornece traduções de idiomas com rapidez, alta qualidade e economia. A tradução automática neural é um tipo de automação de tradução de idiomas que usa modelos de aprendizado profundo para entregar traduções que soam mais precisas e naturais do que as oferecidas por algoritmos de tradução tradicionais estatísticos e baseados em regras.

https://docs.aws.amazon.com/translate/latest/dg/what-is.html

## Rekognition 
O Amazon Rekognition facilita a adição de análises de imagem e vídeo aos seus aplicativos usando a tecnologia comprovada e altamente escalável de aprendizagem profunda, que não requer conhecimentos de machine learning para usar. Com o Amazon Rekognition, você pode identificar objetos, pessoas, texto, cenas e atividades em imagens e vídeos, além de detectar qualquer conteúdo inapropriado. O Amazon Rekognition também fornece recursos de análise facial e pesquisa facial altamente precisos que você pode usar para detectar, analisar e comparar rostos para uma ampla variedade de casos de uso de verificação de usuários, contagem de pessoas e segurança pública.

https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html


## SageMaker

O Amazon SageMaker é um serviço totalmente gerenciado que fornece a todos os desenvolvedores e cientistas de dados a capacidade de criar, treinar e implantar modelos de machine learning (ML) rapidamente. O SageMaker remove o trabalho pesado de cada etapa do processo de machine learning para facilitar o desenvolvimento de modelos de alta qualidade.

https://docs.aws.amazon.com/sagemaker/latest/dg/gs.html

# Desenvolvimento

Fizemos a integração da nossa aplicação `doe-info` com um chatbot criado utilizando Translate e Lex.

- Primeiro, crie um chatbot no LEX.
- Crie uma Federated Identities no Cognito, com permissão para Translate e LEX
- Baixe os arquivos da pasta: scripts
- Importe o Chatbot no LEX: chatbot.zip 
- Abra o arquivo chatbot.html 

