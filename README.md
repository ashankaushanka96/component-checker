# Component Checker

An all-in-one solution to monitor and validate the state of your software components across distributed environments. This project provides a robust Python-based API backend and a modern React frontend to give you real-time insights into component health.

## 🚀 Features

- **Real-time Health Checks**: Automatically ping your components and report uptime status.  
- **Detailed Logging**: Capture and display component logs for easier debugging.  
- **User-friendly Dashboard**: Intuitive React UI for quick overview and deep dive into component states.  
- **RESTful API**: Built with FastAPI for easy integration and extensibility.  
- **Configurable Alerts**: Customize thresholds and get notified when components deviate from expected behavior.

## 🏛️ Architecture

```
┌─────────────┐            ┌───────────────────┐      ┌───────────────┐
│  React App  │ <──HTTP──> │  API Backend      │ <──> │   Data Store  │
│ (FrontEnd/) │            │ (BackEnd/)        │      │ (Database /   │
└─────────────┘            └───────────────────┘      │  Local Files) │
                                                      └───────────────┘
```

- **BackEnd/**: Python server providing health-check endpoints.  
- **FrontEnd/**: React application consuming the API and rendering the dashboard.  
- **Component State Checker.pdf**: Detailed project requirements and design document.

## ⚙️ Prerequisites

- **Backend**: Python 3.8 or higher  
- **Frontend**: Node.js 14 or higher  
- **Optional**: Docker & Docker Compose for containerized deployment  

## 🛠️ Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/ashankaushanka96/component-checker.git
   cd component-checker
   ```

2. **Backend setup**  
   ```bash
   cd BackEnd
   python -m venv venv
   source venv/bin/activate          # Linux/macOS
   venv\Scripts\activate           # Windows
   pip install -r requirements.txt
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

3. **Frontend setup**  
   ```bash
   cd ../FrontEnd
   npm install
   npm start
   ```

4. **Access the dashboard**  
   Open your browser at `http://localhost:3000` (or the port defined in `.env`).

## 🔍 Usage

- **View Component List**: Navigate to the **Components** page.  
- **Trigger Health Check**: Click on the **Check Now** button next to any component.  
- **Inspect Logs**: Use the **Logs** tab to see real-time output.  
- **Configure Alerts**: Edit `config.yaml` (or `.env`) to set custom thresholds.

## 📖 API Endpoints

| Method | Endpoint                   | Description                       |
| ------ | -------------------------- | --------------------------------- |
| GET    | `/api/components`          | List all monitored components.    |
| POST   | `/api/components/check`    | Trigger a health check.           |
| GET    | `/api/components/{id}`     | Get detailed status of a component. |
| GET    | `/api/components/{id}/logs`| Fetch logs for a component.       |


## 📬 Contact

- **Maintainer**: Ashan Kaushanka  
- **Email**: ashankaushanka96@example.com

---

*This README was auto-generated to provide a clear overview of the Component Checker project.*
