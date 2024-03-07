# WebRTC Video Chat Application

This project is a simple WebRTC video chat application that allows users to create and join video chat rooms. It uses the Agora Real-Time Messaging (RTM) SDK for signaling to coordinate the communication between peers and STUN/TURN servers for NAT traversal.

## Features

- Create and join video chat rooms using a room ID.
- Real-time video and audio chat with WebRTC.
- UI built with Bootstrap for responsiveness.
- Audio and video toggle functionalities.
- Automatic redirect to the lobby for new or disconnected users.

## Technologies Used

- HTML/CSS for the frontend interface.
- Bootstrap for styling and responsive design.
- Agora RTM SDK for signaling.
- WebRTC for peer-to-peer video and audio communication.

## Setup

To run this project, you'll need to have Node.js and NPM installed on your machine.

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies with `npm install`.
3. Start the development server with `npm start`.
4. Open `lobby.html` in your browser to create or join a room.

## Configuration

Replace `YOUR-APP-ID-HERE` in `main.js` with your Agora app ID to connect to the Agora RTM service.

```javascript
let APP_ID = "YOUR-APP-ID-HERE";
```

## Usage

1. Open `lobby.html` and enter a room ID to join or create a room.
2. Share the room ID with others to join the same video chat.
3. Use the audio and video toggle buttons to enable/disable your microphone and camera.


