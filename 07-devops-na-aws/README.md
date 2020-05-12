# Devops na AWS

No seminário sobre Devops vamos focar em IaC e Deployment. Vamos pegar uma das aplicações que desenvolvemos e recriar ela inteira com Cloud Formation e CI /CD utilizando os serviços da AWS.

# Infraestrutura como Código

O serviço da AWS para IAC é o Cloudformation. Temos na pasta /iac neste repositório os códigos para vocês utilizarem.

Como utilizar:

- clone este repositório: `git clone`
- Vá até o console e até o serviço: CloudFormation
- Clique em: Create Stack
- Clique em: Standard with new resources
- Clique em: Upload a template file 
- Clique em: Chose File e encontre onde voce clonou o repositorio e a pasta /iac
- Faça upload do arquivo e clique em Next
- Preencha os campos
- Clique em next e next.

Os resources declarados neste arquivo .yml serão criados em sua conta AWS.

# Deployment

Iremos utilizar a Stack de Code da AWS para fazer o nosso deploy. Então primeiro de tudo, precisamos gerar uma AMI com o agente do Code deploy.

- Instalar agente code deploy: https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html

- Criar os arquivos de configuração. Como estamos trabalhando com Code Build e Code Deploy. Deixei os arquivos de exemplo aqui na pasta `scripts`. 

Aqui materiais de apoio sobre estes arquivos:

   - https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html
   - https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html
    



