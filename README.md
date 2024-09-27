# Yelp Camp - Campsite Review Platform

Yelp Camp is a full-featured campsite review platform, inspired by Yelp, designed for campers and adventurers to discover, rate, and review campsites all around the world. The site offers a user-friendly interface with advanced features such as search, user authentication, and interactive maps for campsite locations.

## Features

- **Discover Campsites**: Browse campsites from various regions across the globe.
- **Add Campsites**: Registered users can contribute by adding new campsites, including details like name, image, description, price, and location.
- **Interactive Maps**: View campsite locations on an interactive map using Google Maps API.
- **Campsite Reviews**: Users can leave reviews and rate the campsites they've visited.
- **Authentication**: Full user authentication using `AuthContext` with login, registration, and persistent state.
- **Clean and Modular Code**: Built with the best practices of React, including hooks (`useState`, `useEffect`, and custom hooks) for a neat, scalable, and maintainable structure.
- **Fully Responsive**: Optimized for both desktop and mobile experiences.

## Tech Stack

- **Vite**: Ultra-fast development environment with Vite for a modern frontend toolchain.
- **React**: Built with React using functional components and hooks for state management.
- **JavaScript (ES6)**: Modern JavaScript features for concise and readable code.
- **Google Maps API**: Used for retrieving and displaying geographical information for campsites.
- **React Router**: Handles routing for navigating between different pages of the application.
- **Authentication and Authorization**: User authentication is powered by `AuthContext` for efficient state management and persisted user sessions.

## Project Structure

```bash
.
├── public/              # Static assets
├── src/
│   ├── api/             # API calls to the server
│   ├── components/      # Reusable React components including (Home, Create, Edit, etc.)
│   ├── contexts/        # Context for authentication and other global states
│   ├── hooks/           # Custom hooks for forms, state management
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Vite entry point
│   └── index.css        # Global styles
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## Key Concepts and Best Practices

### 1. **React Hooks**
   - The project makes heavy use of React hooks, such as `useState`, `useEffect`, and `useContext` for managing state and side effects.
   - Custom hooks are implemented to handle complex logic (e.g., form management with validation).

### 2. **AuthContext**
   - User authentication is handled using React's context API. `AuthContext` provides a centralized store for the authentication state (user login, logout, session persistence).
   - This ensures that user sessions are remembered across page reloads, thanks to `localStorage`.

### 3. **Persisted State**
   - The project uses persisted state management to ensure user sessions, form inputs, and other important data are retained even after the user closes or refreshes the browser.

### 4. **Google Maps Integration**
   - Integrated with the Google Maps API to fetch real-time geolocation data for campsites. The API is used to locate campsites based on user input during the creation or editing of a campsite.

### 5. **Clean and Modular Components**
   - The project is broken down into reusable, maintainable components that follow a clean architecture.
   - Each component is self-contained, making it easy to extend or modify the functionality without affecting other parts of the application.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 14.x)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/VaskoPavlov/Yelp-Camp-React.git
   cd yelp-camp-react
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Google Maps API key:
   ```bash
   VITE_API_KEY=your_google_maps_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## RUN Script

- **`npm run dev`**: Start the development server.
  
## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any feature requests or bug fixes.

## License

This project is licensed under the MIT License.
