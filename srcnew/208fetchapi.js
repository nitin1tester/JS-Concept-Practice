/**
 * FETCH API: Making HTTP Requests from Browser
 * 
 * What is Fetch API:
 * - Modern way to make HTTP requests
 * - Returns a Promise (async/await compatible)
 * - Replaces XMLHttpRequest (XHR) - old API
 * - Built-in to modern browsers
 * - Works with any HTTP method (GET, POST, PUT, DELETE)
 * 
 * Basic Syntax:
 * - fetch(url, options) → Promise<Response>
 * - Returns Promise that resolves with Response object
 * - Response has .json(), .text(), .blob() methods
 * 
 * Options Object:
 * - method: "GET", "POST", "PUT", "DELETE"
 * - headers: { "Content-Type": "application/json" }
 * - body: JSON.stringify(data) for POST/PUT
 * - credentials: "include" for cookies
 * - mode: "cors", "no-cors", "same-origin"
 * - signal: AbortController for cancellation
 * 
 * Response Object:
 * - status: HTTP status code (200, 404, etc.)
 * - ok: true if status 200-299
 * - headers: Response headers
 * - json(): Parse response as JSON
 * - text(): Get response as text
 * - blob(): Get response as binary
 * - clone(): Create copy of response
 * 
 * WHY Fetch:
 * - Non-blocking (async)
 * - Cleaner syntax than XMLHttpRequest
 * - Promise-based (can use async/await)
 * - Modern browser standard
 * - Easy error handling with try/catch
 * 
 * WHERE Used:
 * - API calls from browser
 * - Loading data dynamically
 * - Form submissions (AJAX)
 * - Downloading files
 * - Real-time updates
 * 
 * Use-Cases in Testing:
 * - Mock API responses
 * - Test error scenarios
 * - Test different status codes
 * - Verify request headers
 * - Test timeout handling
 * - Mock file downloads
 * 
 * WHERE: API integration, dynamic data loading, AJAX
 * 
 * Common Patterns:
 * - Basic GET request
 * - POST with JSON body
 * - Error handling
 * - Request cancellation
 * - Timeout handling
 * - Retry logic
 * 
 * Important Notes:
 * - fetch() does NOT reject on 404/500
 * - ONLY rejects on network failure
 * - Must check response.ok or status
 * - Credentials not sent by default
 * - CORS errors throw NetworkError
 */

// Example 1: Basic GET Request
async function basicGet() {
    try {
        const response = await fetch("https://api.example.com/users");
        const data = await response.json();
        console.log("Users:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}


// Example 2: GET with Error Handling
async function getWithErrorHandling() {
    try {
        const response = await fetch("https://api.example.com/users");
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("Error fetching data:", error.message);
    }
}


// Example 3: POST Request with JSON
async function postData() {
    try {
        const response = await fetch("https://api.example.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Alice",
                email: "alice@example.com"
            })
        });
        
        if (!response.ok) {
            throw new Error(`POST failed: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Created:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}


// Example 4: PUT Request - Update Data
async function updateData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Updated Name",
                email: "newemail@example.com"
            })
        });
        
        if (!response.ok) {
            throw new Error(`Update failed: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Updated:", data);
    } catch (error) {
        console.log("Error updating:", error);
    }
}


// Example 5: DELETE Request
async function deleteData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`, {
            method: "DELETE"
        });
        
        if (!response.ok) {
            throw new Error(`Delete failed: ${response.status}`);
        }
        
        console.log("Deleted successfully");
    } catch (error) {
        console.log("Error deleting:", error);
    }
}


// Example 6: Fetch with Headers
async function fetchWithHeaders() {
    try {
        const response = await fetch("https://api.example.com/users", {
            headers: {
                "Authorization": "Bearer token123",
                "User-Agent": "MyApp/1.0",
                "Accept": "application/json"
            }
        });
        
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}


// Example 7: Request with Credentials (Cookies)
async function fetchWithCredentials() {
    try {
        const response = await fetch("https://api.example.com/users", {
            credentials: "include" // Send cookies
        });
        
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}


// Example 8: Cancel Request with AbortController
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Request timeout");
        } else {
            console.log("Error:", error);
        }
    }
}


// Example 9: Parallel Requests with Promise.all
async function fetchMultiple() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch("https://api.example.com/users").then(r => r.json()),
            fetch("https://api.example.com/posts").then(r => r.json()),
            fetch("https://api.example.com/comments").then(r => r.json())
        ]);
        
        console.log("Users:", users);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.log("Error fetching multiple:", error);
    }
}


// Example 10: Retry Logic
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            
            if (response.ok) {
                return await response.json();
            }
            
            // Don't retry client errors (4xx)
            if (response.status >= 400 && response.status < 500) {
                throw new Error(`Client error: ${response.status}`);
            }
        } catch (error) {
            console.log(`Attempt ${i + 1} failed: ${error.message}`);
            
            if (i === maxRetries - 1) {
                throw error;
            }
            
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}


// Example 11: Check Status Codes
async function fetchAndCheckStatus(url) {
    try {
        const response = await fetch(url);
        
        if (response.status === 200) {
            console.log("Success");
        } else if (response.status === 404) {
            console.log("Not found");
        } else if (response.status === 500) {
            console.log("Server error");
        } else {
            console.log("Status:", response.status);
        }
        
        return response.ok;
    } catch (error) {
        console.log("Network error:", error);
    }
}


// Example 12: Response Types
async function handleDifferentResponseTypes() {
    try {
        // JSON response
        const jsonResponse = await fetch("https://api.example.com/data");
        const json = await jsonResponse.json();
        
        // Text response
        const textResponse = await fetch("https://example.com/file.txt");
        const text = await textResponse.text();
        
        // Blob response (binary)
        const blobResponse = await fetch("https://example.com/image.png");
        const blob = await blobResponse.blob();
        
        console.log("JSON:", json);
        console.log("Text:", text);
        console.log("Blob size:", blob.size);
    } catch (error) {
        console.log("Error:", error);
    }
}


// Example 13: Testing Pattern - Mock Fetch
function mockFetch(data, delay = 100) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve(data),
                text: () => Promise.resolve(JSON.stringify(data))
            });
        }, delay);
    });
}

async function testWithMock() {
    const mockData = { id: 1, name: "Test" };
    const response = await mockFetch(mockData);
    const data = await response.json();
    console.log("Mock data:", data);
}


// Example 14: CORS Request
async function fetchWithCORS() {
    try {
        const response = await fetch("https://api.example.com/data", {
            method: "GET",
            mode: "cors", // Enable CORS
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        const data = await response.json();
        console.log("CORS data:", data);
    } catch (error) {
        console.log("CORS error:", error);
    }
}


// Example 15: Upload File with FormData
async function uploadFile(file) {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("username", "alice");
        
        const response = await fetch("https://api.example.com/upload", {
            method: "POST",
            body: formData
            // Don't set Content-Type header - browser will set it
        });
        
        const result = await response.json();
        console.log("Upload result:", result);
    } catch (error) {
        console.log("Upload error:", error);
    }
}
