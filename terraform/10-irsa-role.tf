#This project was deployed locally. Using IRSA implies that the cluster is deployed in AWS EKS. This file is created to create a production
#ready IRSA role for the eks cluster.

#creates the IAM role that will be used by the IRSA.
resource "aws_iam_role" "irsa_s3_dynamo"{
    name = "irsa-s3-dynamo"


#Policy that uses the OIDC provider to use the role
    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [{
            Effect = "Allow"
            Principal = {
                #This is where you would add the OIDC provider for production deployment
                Federated = "arn:aws:iam::${var.aws_account_id}:oidc-provider/${var.oidc_provider}"
            }
            Action = "sts:AssumeRoleWithWebIdentity"
            Condition = {
                StringEquals = {
                    "<eks_oidc_provider>:sub" = "system:serviceaccount:default:app-serviceaccount"
                }
            }
    }]
    })
}


#Policy that allows the role to access s3
resource "aws_iam_role_policy_attachment" "attach_s3_dynamo_policy" {
    name = "attach-s3-dynamo"
    roles = [aws_iam_role.irsa_s3_dynamo.name]
    policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}


