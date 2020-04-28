# Containers na AWS

# Docker


# ECS


# EKS 

- Instalar AWS Cli e eksctl: 
https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html

- Criar Cluster: 
```
eksctl create cluster \
    --name clustername \
    --region us-east-1 \
    --fargate
```
- Checar se o cluster está criado e se o kubectl está configurado: 
`kubectl get nodes`

