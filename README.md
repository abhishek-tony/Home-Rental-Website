# Home-Rental-Website
# Home Rental System

## Project Overview
This project is a dynamic web application for managing property rentals. It allows users to browse, search, and book rental properties seamlessly. The application is built with a focus on dynamic backend integration and user-friendly frontend design.

---

## Features
1. **Dynamic Property Listings**:
   - Fetch and display properties from the backend dynamically.
   - Includes property details like title, location, price, and availability.

2. **Booking Functionality**:
   - Users can book available properties.
   - Bookings are updated in real-time on the backend.

3. **User Management**:
   - Signup and login functionalities (optional for demo).
   - Reset password feature.

4. **Search & Filter** (Planned Enhancement):
   - Filter properties by location or price (can be added).

---

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Hosting**:
  - Frontend: GitHub Pages
  - Backend: Render

---

## Deployment Links
- **Frontend**: [Live Demo](https://username.github.io/home-rental-system)
- **Backend**: [API Endpoint](https://backend-home-rental.onrender.com)

---

## Setup Instructions

### Prerequisites
1. **Node.js**: Install [Node.js](https://nodejs.org/).
2. **MongoDB**: Install and start MongoDB locally or use MongoDB Atlas.

### Backend Setup
1. Clone the backend repository:
   ```bash
   git clone <backend-repo-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/homeRentalSystem
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend Setup
1. Clone the frontend repository:
   ```bash
   git clone <frontend-repo-url>
   cd frontend
   ```
2. Open `property_list_dynamic.html` in a browser.

---

## Screenshots
### Property Listings Page
![Property Listings](https://via.placeholder.com/800x400)

### Booking Functionality
![Booking Form](https://via.placeholder.com/800x400)

---

## Future Enhancements
1. Add search and filter capabilities.
2. Implement user authentication for personalized experiences.
3. Optimize the design with responsive frameworks like Bootstrap.

---

## Credits
Developed by **Abhishek Maxin Antony**.
