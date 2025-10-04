# Book Store - MERN Stack Application

A full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This project serves as a digital catalog for a book collection, providing complete CRUD (Create, Read, Update, Delete) functionality through a clean and responsive user interface.

## 📖 Features

-   **View All Books**: Browse the entire book collection on the homepage, displayed in both table and card layouts.
-   **Create New Books**: Easily add new books to the database via a dedicated form.
-   **Show Book Details**: View detailed information for any single book on its own page.
-   **Edit Books**: Update the title, author, or publish year of existing books.
-   **Delete Books**: Remove books from the collection with a confirmation step to prevent accidental deletion.
-   **Responsive Design**: The UI is built with Tailwind CSS, ensuring a great user experience on devices of all sizes.

## 🚀 Tech Stack

-   **Frontend**: React (with Vite), React Router for navigation, and Tailwind CSS for styling.
-   **Backend**: Node.js and Express.js for building the RESTful API.
-   **Database**: MongoDB Atlas for cloud-based data storage.
-   **API Client**: Axios for making HTTP requests between the frontend and backend.
-   **Development**: `nodemon` for live-reloading the backend server during development.

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or newer)
-   npm (or your preferred package manager)
-   A free MongoDB Atlas account for the database

### Installation & Setup

1.  **Clone the repository:**
    ```
    git clone https://github.com/arpit-adake/book-store.git
    cd book-store
    ```

2.  **Install Backend Dependencies:**
    ```
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```
    cd ../frontend
    npm install
    ```

4.  **Set Up Environment Variables:**
    -   In the `backend` folder, create a file named `.env`.
    -   Add your MongoDB connection string to this file:
        ```
        PORT=5555
        mongoDBURL=your_mongodb_connection_string
        ```
    -   Make sure to replace `your_mongodb_connection_string` with your actual key from MongoDB Atlas.

### Running the Application

1.  **Start the Backend Server:**
    -   Navigate to the `backend` directory and run:
        ```
        npm run dev
        ```
    -   The server will start on `http://localhost:5555`.

2.  **Start the Frontend Development Server:**
    -   In a separate terminal, navigate to the `frontend` directory and run:
        ```
        npm run dev
        ```
    -   The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📁 Project Structure

