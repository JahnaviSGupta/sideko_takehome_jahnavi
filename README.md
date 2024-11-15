# File Comparison API

This API allows users to upload and compare two files to detect differences between them. The API supports plain text and PDF file formats, and it is built using Node.js, Express, Multer for file uploads, and Swagger for API documentation.

## Features

- **File Upload**: Users can upload two files (PDF or plain text) for comparison.
- **File Comparison**: The API compares the two uploaded files and identifies the differences.
- **Swagger API Documentation**: Automatically generated Swagger UI for API documentation.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- Git (optional, for cloning the project)

## Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository (if applicable)**:
   ```bash
   git clone <https://github.com/JahnaviSGupta/sideko_takehome>
   cd <repository_directory>
   ```

2. **Install dependencies:** Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Run the API:**: Start the API server locally:
   ```bash
   npm start
   ```

4. **Access API Documentation:**: Once the server is running, you can access the Swagger API documentation at:
   ```bash
  http://localhost:3000/api-docs
   ```

## API Endpoints

### Compare Files

- **Endpoint:** /api/files/compare
- **Method:** POST
- **Description:** Upload two files for comparison, and get a response indicating the differences.

**Request** 

- **Content-Type:** multipart/form-data
- **Form-data parameters:**
    - file1 (required): The first file to compare.
    - file2 (required): The second file to compare.


### Responses

- 200 OK: Returns whether the files are identical and details of the differences if they exist.

```bash
{
  "identical": false,
  "changes": [
    {
      "part": 1,
      "added": true,
      "removed": false,
      "content": "Line added in the second file"
    },
    ...
  ]
}

```
- 400 Bad Request: If files are missing or have different file types.
- 500 Internal Server Error: If an error occurs during the comparison.


### Production Readiness Checklist

- **Environment Configuration:** Ensure environment variables are set correctly for production.
    - Use .env file for managing secrets, DB credentials, and sensitive configurations.
    - Make sure to set the NODE_ENV to production.

**Error Handling:** Implement proper logging using a tool like winston or bunyan for better error tracking and monitoring.

**Security:**
- Ensure CORS is properly configured for secure access.
- Validate and sanitize file uploads to prevent malicious files.
- Use HTTPS in production for secure communication.

**Performance Optimizations:**
- Implement file size restrictions for uploads.
- Optimize for large file handling.
- Use a caching mechanism like Redis for frequently accessed data.

**Testing:**
- Write and run unit tests for controllers and services.
- Perform load testing to ensure stability under high traffic.

**Monitoring:** Integrate with monitoring services like New Relic or Datadog for tracking server performance.

**Deployment:**
- Use a process manager like PM2 or forever to handle production server restarts.
- Ensure proper CI/CD pipeline is set up for automated deployments.


## OpenAPI Specification (Swagger)

The OpenAPI Specification for this API is embedded in the code using Swagger annotations.

### Author

- **Name:** Jahnavi Gupta
- **Email:** [jahnavisgupta@gmail.com](mailto:jahnavisgupta@gmail.com)
- **GitHub:** [https://github.com/JahnaviSGupta](https://github.com/JahnaviSGupta)




==================

<!-- # File Comparison API

This is a REST API service built to help source code analysis engineers compare files. It supports `.md`, `.py`, `.ts`, and `.pdf` formats. The service identifies if two files are identical or provides detailed differences between them, which can be used for changelog generation.

## Features
- Compares two files and identifies differences.
- Supports `.md`, `.py`, `.ts`, and `.pdf` file formats.
- Provides clear output on whether the files are identical or lists the specific differences.

## Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)

## Setup Instructions
Follow these steps to run the API locally:

1. **Clone the repository:**

    ```bash
    git clone <https://github.com/JahnaviSGupta/sideko_takehome>
    cd <your-repo-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    To run the server on `http://localhost:3000`:

    ```bash
    node xyz.js
    ```

## API Usage
### Endpoint: `/compare`

This is the main API endpoint used to compare two files.

- **Method:** POST
- **URL:** `http://localhost:3000/compare`
- **Content-Type:** `multipart/form-data`

### Request Parameters:
- `file1`: First file to compare.
- `file2`: Second file to compare.

### Example Request:
You can use cURL or Postman to test the API. Here's an example using cURL:

```bash
curl -X POST http://localhost:3000/compare -F "file1=@/path/to/file1" -F "file2=@/path/to/file2"

```

### Response:

- If files are identical:

    ```json
    {
      "message": "Files are identical"
    }
    ```

---

- If files are different, a detailed diff will be provided:

    ```json
    {
      "differences": [
        {
          "line": 10,
          "old_value": "Original line in file1",
          "new_value": "Modified line in file2"
        }
      ]
    }
    ```

---

## Production Readiness Checklist
---

Here are some key considerations for deploying this API in a production environment:

---

- **File Size Limits:** Configure file size limits in `multer` to avoid memory overflow.
- **Security:** Consider adding SSL for secure data transfer, and sanitize file uploads to prevent malicious content.
- **Logging:** Implement logging with tools like `morgan` or `winston` for error tracking and audit trails.
- **Testing:** Write unit tests for the API routes and file comparison logic.
- **Error Handling:** Implement comprehensive error handling for file parsing, unsupported formats, etc.
- **Scalability:** Use clustering or load balancing solutions (e.g., NGINX) to manage high traffic.
- **Containerization:** Package the app using Docker for better portability and scalability.
- **Monitoring:** Integrate monitoring tools like `Prometheus` or `New Relic` to keep track of application performance and uptime.

---

### Author

- **Name:** Jahnavi Gupta
- **Email:** [jahnavisgupta@gmail.com](mailto:jahnavisgupta@gmail.com)
- **GitHub:** [https://github.com/JahnaviSGupta](https://github.com/JahnaviSGupta)
- **LinkedIn:** [www.linkedin.com/in/jahnavigupta](https://www.linkedin.com/in/jahnavigupta)


 -->




