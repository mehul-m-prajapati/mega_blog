 Mega Blog App - README

📝 Mega Blog App
================

A full-featured blogging platform built with **React** and **Appwrite**, designed for speed, simplicity, and scalability.

* * *

🚀 Features
-----------

*   🔐 User Authentication (Register, Login, Logout)
*   📝 Create, Read, Update, Delete blog posts
*   📸 Image uploads with Appwrite storage
*   🧠 Rich text editor (optional: use something like `react-quill`)
*   🔍 Search and filter posts
*   🗂️ Category tagging
*   💡 Responsive UI (optional: styled with Tailwind CSS or another framework)

🧱 Tech Stack
-------------

Tech

Usage

React

Frontend UI

Vite

Lightning-fast dev

Appwrite

Backend-as-a-service (Auth, DB, Storage)

CSS / Tailwind

Styling (optional)

📦 Getting Started
------------------

### 1\. Clone the repo

    git clone https://github.com/yourusername/mega-blog-app.git
    cd mega-blog-app


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

🤝 Contributing
---------------

1.  Fork the repo
2.  Create a new branch (`git checkout -b feature-name`)
3.  Commit your changes
4.  Push to the branch
5.  Open a Pull Request

📄 License
----------

MIT License. Free to use, modify, and distribute.

🧑‍💻 Author
------------

Built with ❤️ by **Mehul**
