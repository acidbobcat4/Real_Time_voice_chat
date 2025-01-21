**Voice Chat Room Application**

A modern and feature-rich voice chat room application designed for seamless communication and collaboration. This application combines an intuitive user interface with real-time WebSocket-based communication, ensuring a responsive and engaging experience.

Features

- **Real-Time Voice Communication**: Facilitates high-quality voice interactions between users.
- **Dynamic Room Management**: Users can create, join, and leave rooms effortlessly.
- **Modern UI/UX Design**: Sleek, responsive, and accessible interface with engaging animations and smooth transitions.
- **User Authentication**: Secure user sign-in and sign-up functionality.
- **Responsive Design**: Fully responsive across all devices, ensuring a seamless experience on desktops, tablets, and mobile phones.
- **Interactive Features**:
  - Start or join a room with a click.
  - Real-time updates for participant lists.
  - Easily toggle microphone and settings.
- **Cross-Browser Compatibility**: Optimized for all major browsers.

---

## Technologies Used

### Frontend:
- **HTML5**, **CSS3**, **JavaScript**: For structure, styling, and interactivity.
- **CSS Animations** and **Transitions**: To enhance user experience.
- **Responsive Grid and Flexbox Layouts**: Ensuring adaptability to various screen sizes.

### Backend:
- **Node.js** with **Express.js**: For server-side operations.
- **Socket.IO**: Enables real-time, bi-directional communication between clients and server.

### Database:
- **MongoDB**: For storing user data, room information, and activity logs.

### Others:
- **WebSocket Protocol**: For low-latency, full-duplex communication.
- **RESTful API Design**: For efficient data exchange.

---

## Installation

### Prerequisites
Ensure the following tools are installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A modern web browser (e.g., Chrome, Firefox)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/voice-chat-room.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd voice-chat-room
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following keys:
   ```
   PORT=5500
   MONGO_URI=your_mongo_connection_string
   SOCKET_URL=ws://localhost:5500
   ```
5. **Start the Server**:
   ```bash
   npm start
   ```
6. **Access the Application**:
   Open a web browser and navigate to `http://localhost:5500`.

---

## Folder Structure

```
voice-chat-room/
├── public/
│   ├── css/
│   │   └── styles.css       # Main stylesheet
│   ├── js/
│   │   └── app.js           # Client-side JavaScript
│   └── assets/              # Images and other assets
├── routes/
│   └── api.js               # API routes
├── views/
│   ├── index.ejs            # Main view
│   └── room.ejs             # Room view
├── .env                     # Environment variables
├── app.js                   # Entry point of the server
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## Scripts

- **Start the application**:
  ```bash
  npm start
  ```
- **Run in development mode** (with [nodemon](https://nodemon.io/)):
  ```bash
  npm run dev
  ```

---

## Roadmap

### Upcoming Features
- **Voice Filters**: Add fun filters to voice communication.
- **Direct Messaging**: Private chats within rooms.
- **Moderation Tools**: For room admins to manage participants effectively.
- **Screen Sharing**: Share screens for presentations or demonstrations.
- **Theming**: Light and dark mode for better accessibility.

---

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---
