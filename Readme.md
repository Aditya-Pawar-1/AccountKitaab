````markdown
# Accountkitaab

**Accountkitaab** is a file management web application that allows users to create, view, edit, and delete text-based files. This project was developed during the **Backend Domination** course at Sheryians Coding School, using **Express.js** for the backend and **EJS** for templating.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Website Images](#Website-images)
- [License](#license)

## Features

- **File Management**: Users can create new files, view existing files, edit file contents, and delete files they no longer need.
- **Auto-Generated Date**: Automatically appends the current date to new files created in the system.
- **Dynamic Content Rendering**: Renders file content dynamically using EJS templates.

## Technologies

- **Backend**: Express.js
- **Templating**: EJS
- **File System**: Node.js `fs` module for file operations
- **Styling**: Custom CSS (served via the `public` directory)

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Clone the Repository

```bash
git clone https://github.com/Aditya-Pawar-1/accountkitaab.git
cd accountkitaab
```
````

### Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### Run the Application

To start the application, run:

```bash
node app.js
```

This will start the app at `http://localhost:3000`.

## Usage

1. **View Files**: Visit the homepage to see a list of available files.
2. **Create Files**: Go to `/create` to generate a new file with the current date.
3. **Edit Files**: Select a file from the list and click on the edit option to modify its content.
4. **Delete Files**: Remove files by selecting the delete option.

## Folder Structure

```bash
accountkitaab/
├── public/
│   └── (Static assets such as CSS files)
├── views/
│   ├── index.ejs
│   ├── create.ejs
│   ├── view.ejs
│   ├── edit.ejs
├── files/
│   └── (Text files created by users)
├── app.js
├── package.json
└── README.md
```

## Website-images

## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
