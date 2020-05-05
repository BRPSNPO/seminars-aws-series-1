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

O backend da app será em NodeJS, o mesmo está localizado no seguinte caminho: `webinars-aws-series-1/06-serverless-na-aws/lambda/index.js`

## Lambda

O backend irá rodar em uma função Lambda, para criar siga: https://docs.aws.amazon.com/pt_br/lambda/latest/dg/getting-started-create-function.html

O Runtime é `Node 10.x`

## API Gateway

Iremos expor essa API utilizando o API Gateway da AWS. Para criar um API Gateway, siga: https://docs.aws.amazon.com/pt_br/apigateway/latest/developerguide/apigateway-getting-started-with-rest-apis.html

Lembre-se de configurar o CORS: https://docs.aws.amazon.com/pt_br/apigateway/latest/developerguide/how-to-cors.html

Lembre-se de apontar o seu método POST para a nossa função Lambda criada no step anterior.

## DynamoDB

Para armazenar as mensagens enviadas pelos pacientes iremos utilizar o DynamoDB como banco de dados.

- Crie uma tabela: https://docs.aws.amazon.com/pt_br/amazondynamodb/latest/developerguide/SampleData.CreateTables.html
    - A única configuração necessária é a configuração de uma Primary Key (Partitin Key) com nome DATE e tipo NUMBER.

## Ajustes finais 

Agora você precisará apontar a aplicação front-end para o back-end no API Gateway e o Back-end para o DynamoDB correto.

Os trechos de código são os seguintes: 

Front-end, coloque o endereço de seu API Gateway:

```
    axios.post('https://xxxx.execute-api.us-east-1.amazonaws.com/dev/api', {
      "key1" : `${name} ${message}`,
    },
```

Back-end, coloque o nome da tabela do DynamoDB:









