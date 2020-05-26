# Migração na AWS

Migrar workloads entre contas AWS, ou do seu ambiente onprem para AWS pode ser um trabalho e tanto. Discovery, priorização, ajustes, instalação, scripts.. certo? Errado! 

Vamos realizar a migração de uma EC2 entre regiões com poucos cliques utilizando Cloud Endure.


# Cloud Endure

A migração do CloudEndure simplifica, agiliza e automatiza migrações em larga escala da infraestrutura física, virtual e baseada em nuvem para a AWS. Ele converte automaticamente qualquer aplicativo em execução nos sistemas operacionais suportados, permitindo funcionalidade completa na AWS sem problemas de compatibilidade. Durante o processo de replicação, seus aplicativos continuarão sendo executados na fonte sem interrupções ou interrupções no desempenho. Após uma janela de transição mínima, seus servidores migrados serão executados nativamente na AWS.


## Step-by-step

- Crie uma conta na Cloud Endure com free tier de 90 dias: [AQUI](https://aws.amazon.com/pt/cloudendure-migration/pricing/)

- Crie um usuário no IAM da sua conta AWS com permissão Admin (temporario)

- Gere access key e secret key

- No console do CloudEndure, crie um projeto do tipo Migration
- Salve sua accesskey e secretkey na ferramenta
- Crie uma Replication Settings apontando pra maquina na região de origem e o destino onde vai fazer a migração
- Voce irá receber os steps para instalar o agent na instância EC2, basta copiar e colar.
- Após rodar os comandos na EC2, sua instancia vai automaticamente aparecer no console do cloud endure! 
- O Cloudendure vai automaticamente gerar uma replication instance
- Ao final, clique em Machine > Selecione sua instancia > Launch Target Machine > Test mode

Basta aguardar, ele vai replicar pra voce a EC2 em outra regiao! 
