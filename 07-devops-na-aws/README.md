# Devops na AWS

No seminário sobre Devops, vamos configurar toda Infraestrutura de serviços que criamos até aqui na região de us-east-1, migrar para região de us-west-2 utilizando infraestrutura como código (CloudFormation). E fazer o deploy automatizado de todos os nossos códigos utilizando a Stack de Code da AWS.

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


