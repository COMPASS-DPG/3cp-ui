# 3cp-ui

Welcome to the 3cp-UI project! This is a third party course provider interface with the following features:

1. **3cp Sign Up and Login:**

   - Allows 3cp to create accounts and log in securely.

2. **My Courses:**

   - 3cp can add and edit courses that will be approved or rejected by the admin.

3. **Transactions:**

   - 3cp can view transaction details.

4. **My Account:**

   - 3cp can view and edit profile details.
   - 3cp can reset passwords.

5. **Backend Service Connections:**
   - Connects to the following backend services:
     - `course-manager-service`: Fetches courses, profile details, transactions, and can add or edit courses and profile details.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

Node.js: Download and install Node.js

### Installation

Clone the repository:

```
git clone https://github.com/COMPASS-DPG/3cp-ui.git
cd 3cp-ui
```

Install dependencies:

```
npm install
```

Configuration

Configure the connection to the backend service by updating the config.js file with the appropriate API endpoint.

### Development

To start the development server, run the following command:

```
npm run dev
```

Visit http://localhost:3000 in your browser to view the application.

### Deployment

Follow these steps to deploy the project:

Build the project:

```
npm run build
```

Start the production server:

```
npm start
```
