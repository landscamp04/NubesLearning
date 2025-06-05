locals {
    env = "staging"
    region = "us-west-1"
    zone1 = "us-west-1b"
    zone2 = "us-west-1c"
    zone3 = "us-west-1c"
    
    tags = {
        Environment = "staging"
        ManagedBy   = "Terraform"
        Project     = "nubeslearning"
    }

    eks_name = "my_eks_cluster"
    eks_version = "1.28"
}