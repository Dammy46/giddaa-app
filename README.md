# Giddaa Application

## Prerequisites
- Node.js installed on your machine
- npm or yarn package manager installed

## Installation
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/Dammy46/giddaa-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd giddaa-app
    ```
3. Install dependencies using npm or yarn:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Configuration
1. Rename the `.env.example` file to `.env`.
2. Fill in the necessary environment variables in the `.env` file:
    ```dotenv
    NEXT_PUBLIC_BACKEND_API=https://dev-api.giddaa.com
    NEXTAUTH_SECRET=91h1HbvV8fzpbDoCtTOT7gscHMtAvHkOm1JhjekrwlQ=
    NEXTAUTH_URL=http://localhost:3000
    ```

## Running the Application
1. Start the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

## Viewing the Application
1. Once the server is running, open your web browser.
2. Navigate to `http://localhost:3000` to view the application.

## Building for Production
1. To build the application for production, run:
    ```bash
    npm run build
    ```
    or
    ```bash
    yarn build
    ```
2. Start the production server:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```
