# Serverless na AWS

No seminário sobre Serverless, vamos configurar uma aplicação React com backend NodeJS para salvar mensagens e datetime em um banco de dados nao relacional na AWS.

## Aplicação Front-End

Para configurar a aplicação, siga: 

- Clone este repositório: `git clone`
- Entre na pasta: `cd webinars-aws-series-1/06-serverless-na-aws/doe-feedbacks`
- Rode o seguinte comando: `yarn create react-app doe-feedbacks`
- Suba a app local para teste: `yarn start`

## S3 

Para hospedar o Front da app, vamos utilizar um bucket S3. Para isto, siga: 

- https://docs.aws.amazon.com/pt_br/AmazonS3/latest/user-guide/create-bucket.html

Configure o bucket como um site estático: 

- https://docs.aws.amazon.com/pt_br/AmazonS3/latest/user-guide/static-website-hosting.html

## CloudFront

Iremos utilizar o Cloudfront para expor nosso bucket S3, garantindo assim que nossos dados não estarão expostos em um bucket aberto.

Siga: https://aws.amazon.com/pt/premiumsupport/knowledge-center/cloudfront-https-requests-s3/


## Aplicação Backend 

O backend da app será em NodeJS, o mesmo está localizado no seguinte caminho: 










