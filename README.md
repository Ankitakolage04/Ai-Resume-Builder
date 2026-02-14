# 🚀 AI Resume Builder

> **An intelligent, resilience-first resume generation tool allowing users to craft professional resumes in seconds.**

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 Overview

The **AI Resume Builder** is a full-stack application designed to simplify the job application process. It leverages modern web technologies to provide a seamless experience for creating, editing, and exporting professional resumes.

**Key Differentiator:** This project implements a **Resilient "Demo Mode" Architecture**. It allows the application to function fully offline or when external AI services are unavailable, ensuring 100% reliability during presentations and demos.

## ✨ Key Features

- **🤖 AI-Powered Content Creation**: Generates professional summaries and experience descriptions tailored to your role.
- **⚡ Real-Time Preview**: Instantly view changes as you type with a dynamic React-based UI.
- **🛡️ Resilience & Reliability**: Built-in **Mock/Demo Mode** automatically engages when AI services are unreachable, providing high-quality sample data for testing and demonstration.
- **🎨 Modern UI/UX**: clean, responsive interface built with Tailwind CSS.
- **📝 ATS-Friendly Export**: Structured output designed to be parsed easily by Applicant Tracking Systems.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **HTTP Client**: Axios

### Backend
- **Core**: Java 21, Spring Boot 3.2.4
- **Architecture**: RESTful API, Microservices-ready
- **Build Tool**: Maven
- **Containerization**: Docker

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Java 21 (JDK)
- Docker (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/Ankitakolage04/Ai-Resume-Builder.git
cd Ai-Resume-Builder
```

### 2. Run Backend (Mock/Demo Mode)
```bash
cd resume-ai-backend
./mvnw clean spring-boot:run
```
*Server starts on http://localhost:8080*

### 3. Run Frontend
```bash
cd resume_frontend
npm install
npm run dev
```
*Application opens on http://localhost:5173*

## 🐳 Docker Deployment

The project includes a `Dockerfile` for easy containerization of the backend service.

```bash
docker build -t resume-backend ./resume-ai-backend
docker run -p 8080:8080 resume-backend
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---
*Built with ❤️ by Aniketa Kolage*
