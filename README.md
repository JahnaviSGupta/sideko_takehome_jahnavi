# File Comparison API

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
    git clone <your-repo-url>
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

    Replace `xyz.js` with the actual name of the main file if it differs.

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







