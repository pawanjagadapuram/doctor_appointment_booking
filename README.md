# Prescripto - Healthcare Appointment Management System

## Project Overview

**Prescripto** is a healthcare appointment management system designed to streamline the process of booking appointments with doctors. This platform offers an intuitive user interface for patients to book appointments, doctors to manage schedules, and administrators to oversee the entire system. It provides a comprehensive solution for healthcare providers, enabling efficient management of doctor availability, appointments, and patient profiles.

## Features

### Patient Portal
- **User Registration & Authentication**: Secure login and registration with JWT-based authentication.
- **Profile Management**: Users can update their profile, including uploading images.
- **Doctor Search & Filter**: Patients can search for doctors by specialty and book appointments.
- **Appointment Booking**: Real-time booking of available time slots with doctors.
- **Payment Integration**: Integrated payment gateway using Razorpay for booking fees.

### Doctor Portal
- **Dashboard**: View upcoming appointments and manage availability.
- **Profile Management**: Doctors can update their profiles, including experience, specialization, and fees.
- **Appointment Management**: Ability to mark appointments as completed or cancel them.

### Admin Portal
- **Dashboard**: Overview of total doctors, patients, and appointments.
- **Doctor Management**: Add new doctors, view the list of doctors, and update their availability.
- **Appointment Management**: View all appointments, including the ability to cancel appointments.

## Tech Stack

### Frontend
- **React**: Core frontend framework.
- **React Router**: For navigation and routing.
- **Tailwind CSS**: For styling.
- **Axios**: For API requests.
- **React Toastify**: For notifications.

### Backend
- **Node.js & Express**: Backend framework.
- **MongoDB**: Database to store users, doctors, and appointments.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For secure user authentication.
- **Bcrypt**: For password hashing.
- **Cloudinary**: For image upload and storage.
- **Razorpay**: For payment integration.
- **Multer**: For handling file uploads.

### Admin Portal
- **React**: Admin dashboard built using React.
- **Context API**: For managing global state across admin, doctor, and user contexts.
- **React Router**: For navigating between admin and doctor routes.

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB
- Cloudinary Account (for image storage)
- Razorpay Account (for payment gateway)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/prescripto.git
    cd prescripto
    ```

2. **Setup Backend**
    ```bash
    cd backend
    npm install
    ```

3. **Setup Frontend**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Setup Admin Portal**
    ```bash
    cd ../admin
    npm install
    ```

5. **Run the application**
    - Start the backend server:
      ```bash
      cd ../backend
      npm start
      ```
    - Start the frontend server:
      ```bash
      cd ../frontend
      npm run dev
      ```
    - Start the admin portal:
      ```bash
      cd ../admin
      npm run dev
      ```

## Environment Variables

Create a `.env` file in the root of the `backend`, `frontend`, and `admin` folders


## API Documentation

### User APIs
- **POST** `/api/user/register` - Register a new user
- **POST** `/api/user/login` - User login
- **GET** `/api/user/get-profile` - Get user profile
- **POST** `/api/user/book-appointment` - Book an appointment
- **POST** `/api/user/cancel-appointment` - Cancel an appointment

### Doctor APIs
- **GET** `/api/doctor/list` - Get list of all doctors
- **POST** `/api/doctor/login` - Doctor login
- **GET** `/api/doctor/appointments` - Get doctor's appointments

### Admin APIs
- **POST** `/api/admin/login` - Admin login
- **POST** `/api/admin/add-doctor` - Add a new doctor
- **GET** `/api/admin/dashboard` - Get dashboard data

## Frontend - Key Components

- **Navbar**: Main navigation bar with dynamic user options based on authentication status.
- **Banner**: Promotional banner on the homepage.
- **DoctorList**: List of available doctors filtered by specialties.
- **Appointment**: Booking interface with available slots and calendar view.
- **Profile Management**: Manage user profile and view appointment history.

## Backend - Key Endpoints

- **Doctor Registration**: Add doctors via the admin panel with support for Cloudinary image uploads.
- **Appointment Management**: Book, cancel, and list appointments with real-time slot management.
- **Admin Dashboard**: Real-time data visualization of doctors, patients, and appointments.

## Admin Portal

- **Dashboard**: Overview of all key metrics.
- **Doctor Management**: Add, update, and view doctors.
- **Appointment Management**: View and cancel appointments.
- **Authentication**: Secure login for admin and doctor users.

## Doctor Portal

- **Profile Management**: Update profile details, including available slots.
- **Appointment Management**: View and manage appointments.
- **Analytics**: Dashboard to visualize appointment data.

## Future Enhancements

- **Email Notifications**: Automated email reminders for appointments.
- **Chat Integration**: Real-time chat between patients and doctors.


