data "aws_subnet" "public_subnet_1" {
  id = "subnet-09e3c2dcb51e8e53d"
}

data "aws_subnet" "public_subnet_2" {
  id = "subnet-0de2fbca6cddd60d7"
}

data "aws_subnet" "public_subnet_3" {
  id = "subnet-0d1bb96aaf9285a23"
}


resource "aws_eks_cluster" "nubes_cluster" {
    name = "nubes-cluster"
    role_arn = aws_iam_role.eks_cluster_role.arn

    vpc_config {
        subnet_ids = [
  data.aws_subnet.public_subnet_1.id,
  data.aws_subnet.public_subnet_2.id,
  data.aws_subnet.public_subnet_3.id
  ]
  endpoint_private_access = false
  endpoint_public_access = true

    }
    depends_on = [aws_iam_role_policy_attachment.eks_cluster_policy]
}

    
