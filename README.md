📝 Mega Blog App
================

A full-featured blogging platform built with **React** and **Appwrite**, designed for speed, simplicity, and scalability.

* * *

🚀 Features
-----------

*   🔐 User Authentication (Register, Login, Logout)
*   📝 Create, Read, Update, Delete blog posts
*   📸 Image uploads with Appwrite storage
*   🧠 Rich text editor
*   🔍 Search and filter posts
*   💡 Responsive UI

🧱 Tech Stack
-------------

### Frontend
- **React** – UI library for building interactive interfaces
- **Vite** – Lightning-fast frontend build tool
- **JavaScript** – Core language
- **Tailwind CSS** – Utility-first CSS framework

### Backend (via Appwrite)
- **Appwrite Auth** – User registration, login, and session management
- **Appwrite Database** – Document-based storage for blog posts, comments, etc.
- **Appwrite Storage** – File uploads for blog images and media

📦 Getting Started
------------------

### 1\. Clone the repo

    git clone https://github.com/mehul-m-prajapati/mega_blog.git
    cd mega_blog


### 2\. Install dependencies

    npm install

### 3\. Setup environment variables

Create a `.env` file in the root:

    VITE_APPWRITE_ENDPOINT=your-appwrite-url
    VITE_APPWRITE_PROJECT_ID=your-project-id
    VITE_APPWRITE_DATABASE_ID=your-database-id
    VITE_APPWRITE_COLLECTION_ID=your-collection-id
    VITE_APPWRITE_BUCKET_ID=your-bucket-id

### 4\. Start the dev server

    npm run dev

Visit [http://localhost:5173](http://localhost:5173) 🚀

🧠 Appwrite Setup
-----------------

1.  [Create an Appwrite account](https://appwrite.io/)
2.  Create a new **project**
3.  Set up:
    *   **Database**
    *   **Collection** for posts
    *   **Bucket** for file uploads
    *   **Authentication** (enable email/password login)
4.  Add your API keys and IDs to the `.env` file

🔧 Scripts
----------

    npm run dev       # start development server
    npm run build     # build for production
    npm run preview   # preview production build

📄 License
----------

MIT License. Free to use, modify, and distribute.

🧑‍💻 Author
------------

Built with ❤️ by **Mehul**
