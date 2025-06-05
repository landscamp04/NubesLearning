resource "aws_subnet"  "private_zone1" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.1.0/24"
    availability_zone = local.zone1

    tags = {
        "Name" = "${local.env}-private-${local.zone1}"
        "kubernetes.io/role/internal-elb" = "1"
        "kubernetes.io/cluster/${local.eks_name}" = "owned"
    }
}

resource "aws_subnet" "private_zone2" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.2.0/24"
    availability_zone = local.zone2
    
     tags = {
        "Name" = "${local.env}-private-${local.zone2}"
        "kubernetes.io/role/internal-elb" = "2"
        "kubernetes.io/cluster/${local.eks_name}" = "owned"
    }
}

resource "aws_subnet" "private_zone3" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.3.0/24"
    availability_zone = local.zone3
    
     tags = {
        "Name" = "${local.env}-private-${local.zone3}"
        "kubernetes.io/role/internal-elb" = "3"
        "kubernetes.io/cluster/${local.eks_name}" = "owned"
    }
}

resource "aws_subnet" "public_zone1" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.101.0/24"
    availability_zone = local.zone1
    map_public_ip_on_launch = true

    tags = {
        "Name" = "${local.env}-public-${local.zone1}"
        "kubernetes.io/role/elb" = "1"
        "kubernetes.io/cluster/${local.eks_name}" = "owned"
    }
}

resource "aws_subnet" "public_zone2" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.102.0/24"
    availability_zone = local.zone2
    map_public_ip_on_launch = true

    tags = {
        "Name" = "${local.env}-public-${local.zone2}"
        "kubernetes.io/role/elb" = "2"
        "kubernetes.io/cluster/${local.eks_name}" = "owned"
    }
}
resource "aws_subnet" "public_zone3" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.103.0/24"
    availability_zone = local.zone3
    map_public_ip_on_launch = true

    tags = {
        "Name" = "${local.env}-public-${local.zone3}"
        "kubernetes.io/role/elb" = "3"
        "kubernetes.io/cluster/${local.eks_name}" = "owned"
    }
}