/**
 * ERROR HANDLING: try, catch, finally, throw
 * 
 * Error Handling Flow:
 * - try {} - Code that might throw error
 * - catch (error) {} - Handles error if thrown
 * - finally {} - Cleanup code (always runs)
 * 
 * WHY Error Handling:
 * - Prevent program crash on errors
 * - Graceful degradation (handle and continue)
 * - Resource cleanup (close files, connections)
 * - Debugging (error messages and stack traces)
 * - User feedback (show meaningful messages)
 * 
 * Error Types in JavaScript:
 * - Error: Generic error
 * - TypeError: Wrong data type
 * - ReferenceError: Undefined variable
 * - SyntaxError: Invalid code (parse-time)
 * - RangeError: Value out of valid range
 * - URIError: Invalid URI
 * 
 * WHERE Error Handling:
 * - API calls (network failures)
 * - File operations (not found)
 * - Type-sensitive operations (null checks)
 * - Validation logic (user input)
 * - Async operations (Promise rejection)
 * 
 * Use-Cases in Testing:
 * - Test error scenarios: verify errors thrown
 * - Mock API failures: simulate network errors
 * - Validation testing: test input validation
 * - Async error handling: Promise rejection testing
 * - Error message assertions: check error text
 * 
 * WHERE: API calls, validation, async patterns, resource cleanup
 * 
 * Best Practices:
 * - Catch specific errors, not generic Error
 * - Always use finally for cleanup
 * - Provide meaningful error messages
 * - Log errors for debugging
 * - Re-throw if cannot handle
 */

// Example 1: Basic try-catch-finally
function basicErrorHandling() {
    try {
        console.log("Trying operation");
        const result = JSON.parse("invalid json"); // Throws SyntaxError
        console.log(result);
    } catch (error) {
        console.log("Caught error:", error.message);
    } finally {
        console.log("Cleanup code - always runs");
    }
}

basicErrorHandling();


// Example 2: Specific Error Types
function handleSpecificErrors(value) {
    try {
        if (typeof value !== "number") {
            throw new TypeError("Expected a number");
        }
        if (value < 0 || value > 100) {
            throw new RangeError("Value must be between 0-100");
        }
        console.log("Valid value:", value);
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type error:", error.message);
        } else if (error instanceof RangeError) {
            console.log("Range error:", error.message);
        } else {
            console.log("Unknown error:", error.message);
        }
    }
}

handleSpecificErrors("abc"); // Type error
handleSpecificErrors(150);   // Range error
handleSpecificErrors(50);    // Valid


// Example 3: Custom Error Class
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateEmail(email) {
    try {
        if (!email.includes("@")) {
            throw new ValidationError("Invalid email format", "email");
        }
        console.log("Email valid:", email);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`${error.field}: ${error.message}`);
        } else {
            throw error; // Re-throw unknown errors
        }
    }
}

validateEmail("invalid");     // email: Invalid email format
validateEmail("test@example.com"); // Email valid


// Example 4: Error Stack Trace
function functionA() {
    functionB();
}

function functionB() {
    functionC();
}

function functionC() {
    throw new Error("Error in functionC");
}

try {
    functionA();
} catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Stack trace:", error.stack);
}


// Example 5: Async Error Handling with Promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(new Error("URL is required"));
        } else {
            resolve({ data: "mock data" });
        }
    });
}

async function handleAsyncError() {
    try {
        const result = await fetchData("");
        console.log("Data:", result);
    } catch (error) {
        console.log("Error caught:", error.message);
    } finally {
        console.log("Request completed");
    }
}


// Example 6: Error Handling in Promise Chain
fetchData("http://api.example.com")
    .then(response => {
        console.log("Response:", response);
    })
    .catch(error => {
        console.log("Error in promise:", error.message);
    })
    .finally(() => {
        console.log("Promise settled");
    });


// Example 7: Testing Error Scenarios
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function testDivideErrors() {
    // Test successful case
    try {
        const result = divide(10, 2);
        console.log("Result:", result); // 5
    } catch (error) {
        console.log("Unexpected error:", error);
    }
    
    // Test error case
    try {
        const result = divide(10, 0);
        console.log("Result:", result);
    } catch (error) {
        console.log("Expected error caught:", error.message);
    }
}


// Example 8: Resource Cleanup with finally
function readFile(filename) {
    let file = null;
    try {
        file = openFile(filename); // Mock
        const data = file.read();  // Mock
        console.log("Data:", data);
    } catch (error) {
        console.log("Error reading file:", error.message);
    } finally {
        if (file) {
            file.close(); // Always close file
            console.log("File closed");
        }
    }
}


// Example 9: Nested try-catch
function complexOperation() {
    try {
        try {
            throw new Error("Inner error");
        } catch (innerError) {
            console.log("Inner catch:", innerError.message);
            throw new Error("Transformed error");
        }
    } catch (outerError) {
        console.log("Outer catch:", outerError.message);
    }
}

complexOperation();


// Example 10: Error in Testing Pattern
class TestAssertionError extends Error {
    constructor(message, expected, actual) {
        super(`Assertion failed: ${message}`);
        this.expected = expected;
        this.actual = actual;
    }
}

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new TestAssertionError(message, expected, actual);
    }
}

function runTest() {
    try {
        assertEqual(5, 5, "5 should equal 5");
        console.log("Test passed");
    } catch (error) {
        if (error instanceof TestAssertionError) {
            console.log(`FAIL: ${error.message}`);
            console.log(`Expected: ${error.expected}, Got: ${error.actual}`);
        }
    }
}

runTest();
