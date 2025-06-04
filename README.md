# NubesLearning 🌥️

NubesLearning is a scalable, cloud-native education platform prototype built for modern web infrastructure. It features a React frontend and a Flask backend API, both containerized with Docker. This project is designed to be cloud-ready, with plans to deploy using AWS EKS, Terraform, and IAM.

---

## 🚀 Project Highlights

- 🧠 **Frontend:** React app that communicates with a RESTful Flask backend
- 🐍 **Backend:** Python Flask API that serves data to the frontend
- 🐳 **Containerized:** Both services are fully Dockerized for local and cloud use
- 📐 **Clean Structure:** Modular codebase for separation of concerns
- ☁️ **Cloud-Ready:** Infrastructure design aligns with AWS best practices (EKS, Terraform, IAM)

---

## 🗂️ Folder Structure

nubeslearning/
├── backend/ # Flask API
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
├── frontend/ # React App
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── Dockerfile
├── docker-compose.yml # Optional: run both containers together
└── README.md


---

## 🐳 Local Development with Docker

### 1. Build & run the Flask backend:

cd backend
docker build -t nubes-backend .
docker run -p 4000:4000 nubes-backend
##

Then visit: http://localhost:3000

---

💡 Why “NubesLearning”?
"Nubes" means "cloud" in Latin — a fitting name for a project built to thrive in cloud-native environments.

---

🧠 Author
Landon @landscamp04
Cloud enthusiast | DevOps learner | Software Engineer

📜 License
MIT License – use, modify, and deploy freely.
