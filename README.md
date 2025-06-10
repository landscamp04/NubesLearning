# NubesLearning 🌥️

![CI](https://github.com/landscamp04/NubesLearning/actions/workflows/deploy.yml/badge.svg)

## 🚀 Overview

NubesLearning is a scalable, cloud-native education platform prototype built for modern web infrastructure. It features a React and Tailwind CSS frontend, and a NodeJS and Express backend API, both containerized with Docker. This project is designed to be cloud-ready, with plans to deploy using AWS EKS, Terraform, and IAM.

💡 Why “NubesLearning”?
"Nubes" means "cloud" in Latin — I thought it was clever and fits the project.
---

## 🧱 Tech Stack
- React frontend
- Node.js/Express backend
- Docker for containerization
- GitHub Actions for CI/CD
- AWS ECR for image hosting
- Terraform + EKS planned for deployment

---

## 🐳 Local Development with Docker

### 1. Build & run the NodeJS and Express backend:

cd backend
docker build -t nubes-backend .
docker run -p 4000:4000 nubes-backend

---

### 2. Build & run the React frontend:

  cd frontend
  docker build -t nubes-frontend .
  docker run -p 3000:80 nubes-frontend
  
Then visit: http://localhost:3000

OR

run npm start in cd frontend

---

Frontend demo

### 🎥 Live Demo (Downloadable)
[Click to download or watch the demo video](Nubes-Frontend-demo.mp4)


🔁 CI/CD Pipeline (GitHub Actions → ECR)
This project uses a GitHub Actions workflow for continuous integration and delivery:

- 🛠️ Automatically runs on every push to `main`
- 🐳 Builds Docker images for frontend and backend
- ☁️ Pushes images to Amazon ECR:
  - [`nubes-backend`](https://console.aws.amazon.com/ecr/repositories/nubes-backend)
  - [`nubes-frontend`](https://console.aws.amazon.com/ecr/repositories/nubes-frontend)
- 🔐 AWS credentials are securely managed using GitHub Secrets

---

📊 System Architecture
> _See `/frontend/src/assets/architecture.png` for infrastructure details, including Terraform module structure, EKS layout, and deployment diagram.

---

⚠️ Deployment Disclaimer
Note: This project is designed with production deployment on AWS EKS in mind, including:

✅ Terraform-managed infrastructure (VPC, subnets, IAM, EKS)

✅ Kubernetes manifests and IRSA setup

✅ AWS ECR-based CI/CD pipeline

However, to avoid unnecessary cloud costs during development, the application is currently run and tested using Minikube and Docker Desktop. All infrastructure code and deployment manifests are included and fully functional for EKS. The project can be deployed to a production-grade EKS cluster with minimal adjustments.

---

🔐 IAM Roles & Policies
- To maintain secure access control, I created IAM roles and policies for:

- EKS cluster and node groups – granting only the permissions necessary to interact with Kubernetes resources.

- IRSA (IAM Roles for Service Accounts) – allowing fine-grained permissions for pods to access AWS services like  DynamoDB and S3 securely, without using static credentials.
This ensures that each component only has access to what it needs, following the principle of least privilege.

---

📡 VPC, Subnets & Networking
I created 3 public and 3 private subnets across multiple availability zones to follow AWS best practices for high availability and fault tolerance.

Public subnets are used for internet-facing resources like the frontend and load balancer.

Private subnets (commented out during testing to avoid charges) are reserved for backend services and databases that should not be directly exposed to the internet.
This design mimics real-world production-grade networking used in cloud environments.

---

🧠 Author
Landon @landscamp04
Cloud enthusiast | DevOps learner | Software Engineer

📄 License  
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and deploy.

