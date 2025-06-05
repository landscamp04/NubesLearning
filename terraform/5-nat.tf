# ===========================================
# NAT Gateway - Commented to avoid AWS charges
# ===========================================

# EIP for NAT Gateway - Uncomment to enable provisioning
# resource "aws_eip" "nat" {
#   domain = "vpc"
#
#   tags = {
#     Name = "${local.env}-nat"
#   }
# }

# NAT Gateway for private subnet outbound access
# Commented to avoid ~$30/month charge
# Set count = 1 and uncomment EIP above to enable
# resource "aws_nat_gateway" "staging_nat" {
#   allocation_id = aws_eip.nat.id
#   subnet_id     = aws_subnet.public_zone1.id
#
#   tags = {
#     Name = "staging-nat"
#   }
# }
