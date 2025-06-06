# NubesLearning 🌥️

![CI](https://github.com/landscamp04/NubesLearning/actions/workflows/deploy.yml/badge.svg)


NubesLearning is a scalable, cloud-native education platform prototype built for modern web infrastructure. It features a React frontend and a Flask backend API, both containerized with Docker. This project is designed to be cloud-ready, with plans to deploy using AWS EKS, Terraform, and IAM.

💡 Why “NubesLearning”?
"Nubes" means "cloud" in Latin — a fitting name for a project built to thrive in cloud-native environments.
---

## 🚀 Project Highlights

- 🧠 **Frontend:** React app that communicates with a RESTful Flask backend
- 🐍 **Backend:** Python Flask API that serves data to the frontend
- 🐳 **Containerized:** Both services are fully Dockerized for local and cloud use
- 📐 **Clean Structure:** Modular codebase for separation of concerns
- ☁️ **Cloud-Ready:** Infrastructure design aligns with AWS best practices (EKS, Terraform, IAM)

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

This project uses a GitHub Actions workflow to build and push Docker images to Amazon ECR:

- ✅ Automatically triggers on every push to `main`
- 🐳 Builds frontend and backend Docker images
- ☁️ Pushes to ECR:
  - `727218227857.dkr.ecr.us-west-1.amazonaws.com/nubes-backend`
  - `727218227857.dkr.ecr.us-west-1.amazonaws.com/nubes-frontend`

---

💡 Why “NubesLearning”?
"Nubes" means "cloud" in Latin — a fitting name for a project built to thrive in cloud-native environments.

---

🧠 Author
Landon @landscamp04
Cloud enthusiast | DevOps learner | Software Engineer

📜 License
MIT License – use, modify, and deploy freely.
