# Raketti Chat

Raketti Chat is a real-time chat application built with Node.js and Azure Web PubSub. It allows users to send and receive messages instantly in a shared chatroom.

## Features
- Real-time messaging
- User authentication with access tokens
- Azure Web PubSub integration

## Getting Started

### Prerequisites
- Docker
- Docker Compose
- Azure Web PubSub resource (for production)

### Installation & Running
1. Clone the repository:
   ```sh
   git clone https://github.com/purtonen/raketti-chat.git
   cd raketti-chat
   ```
2. Install dependencies in both backend and frontend:
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   cd ..
   ```
3. Set up your environment variables (e.g., Azure Web PubSub connection string) in a `.env` file in the project root or as required:
   ```env
   WEB_PUBSUB_CONNECTION_STRING=your-azure-webpubsub-connection-string
   ```
4. Start the application:
   ```sh
   docker compose up
   ```

The entire application (backend and frontend) will start and be ready for use.

## License
MIT
