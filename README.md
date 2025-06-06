# NubesLearning 🌥️

![CI](https://github.com/landscamp04/NubesLearning/actions/workflows/deploy.yml/badge.svg)

## 🚀 Overview

NubesLearning is a scalable, cloud-native education platform prototype built for modern web infrastructure. It features a React frontend and a Flask backend API, both containerized with Docker. This project is designed to be cloud-ready, with plans to deploy using AWS EKS, Terraform, and IAM.

💡 Why “NubesLearning”?
"Nubes" means "cloud" in Latin — a fitting name for a project built to thrive in cloud-native environments.
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

---

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

> _See `/docs/system-architecture.png` for infrastructure details, including Terraform module structure, EKS layout, and deployment diagram.

---

🧠 Author
Landon @landscamp04
Cloud enthusiast | DevOps learner | Software Engineer

📄 License  
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and deploy.

