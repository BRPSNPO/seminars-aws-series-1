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

### Deploy Ingress Controller ALB

- Criar Ingress ALB: 

    - Crie um OIDC Provider:   
```
eksctl utils associate-iam-oidc-provider \
    --region region-code \
    --cluster prod \
    --approve
```

  - Crie uma policy (em caso de problemas via AWS CLI, crie via console) Obs: copie e guarde o ARN da Policy.

```


aws iam create-policy \
    --policy-name ALBIngressControllerIAMPolicy \
    --policy-document https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/iam-policy.json

```
  - Crie as roles de RBAC
```kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/rbac-role.yaml
```

- Crie uma AWS Role (Lembra do ARN da policy? A hora é agora)

```
eksctl create iamserviceaccount \
    --region region-code \
    --name alb-ingress-controller \
    --namespace kube-system \
    --cluster prod \
    --attach-policy-arn arn:aws:iam::111122223333:policy/ALBIngressControllerIAMPolicy \
    --override-existing-serviceaccounts \
    --approve
```

- Faça o deploy do ingress controller: 

`kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/aws-alb-ingress-controller/v1.1.4/docs/examples/alb-ingress-controller.yaml`

- Vamos editar o Ingress Controller pro type IP.
`kubectl edit deployment.apps/alb-ingress-controller -n kube-system`

Após a linha: `-ingress-class=alb`

Insira:

```
    spec:
      containers:
      - args:
        - --ingress-class=alb
        - --cluster-name=prod
        - --aws-vpc-id=vpc-03468a8157edca5bd
        - --aws-region=region-code
```

- Cheque se o ingress controller está rodando: `kubectl get pods -n kube-system`

### Deploy aplicação de exemplo 

Para criar um Fargate Profile, execute: 
`eksctl create fargateprofile --cluster prod --region us-east-1 --name alb-name-app --namespace app-name`

Como vamos utilizar a imagem no ECR, adicione a seguinte policy a sua cluster role:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecr:BatchCheckLayerAvailability",
                "ecr:BatchGetImage",
                "ecr:GetDownloadUrlForLayer",
                "ecr:GetAuthorizationToken"
            ],
            "Resource": "*"
        }
    ]
}
```

- Clone este repositório:
`git clone ...`

- Entre na pasta shark-app: 
`kubectl apply -f .`



