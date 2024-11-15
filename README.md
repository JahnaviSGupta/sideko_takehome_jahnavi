# File Comparison API

This API allows users to upload and compare two files to detect differences between them. The API supports plain text and PDF file formats, and it is built using Node.js, Express, Multer for file uploads, and Swagger for API documentation.

## Features

- **File Upload**: Users can upload two files (Supports `.md`, `.py`, `.ts`, and `.pdf` file formats) for comparison.
- **File Comparison**: The API compares the two uploaded files and identifies the differences.


## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- Git (optional, for cloning the project)

## Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository (if applicable)**:
   ```bash
   git clone <https://github.com/JahnaviSGupta/sideko_takehome>
   ```

2. **Install dependencies:** Run the following command to install all required packages:
   ```bash
   npm install
   npm install swagger-jsdoc swagger-ui-express
   ```

3. **Run app.js:** 

   ```bash
   node app.js
   ```
   Server will run on port 3000
   API will run on http://localhost:3000/api-docs/#/default/post_api_files_compare

   - CLick on *Try Now*
   - Select the files

4. **Test the API:** Run the following command to test the file comparison API:

```bash
curl -X POST http://localhost:3000/api/files/compare -F "file1=@File1.txt" -F "file2=@File2.txt"
``` 
This will compare File1.txt and File2.txt using the API.

**Notes:**
- Make sure that **File1.txt** and **File2.txt** are present in the same directory from which you are running the curl command, or provide the full path to the files.


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