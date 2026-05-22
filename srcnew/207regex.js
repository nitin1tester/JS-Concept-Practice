/**
 * REGULAR EXPRESSIONS (RegEx): Pattern Matching
 * 
 * What is a Regular Expression:
 * - Pattern for matching text
 * - Find, validate, extract, replace strings
 * - Syntax: /pattern/flags
 * - Can be RegExp object or literal
 * 
 * RegEx Literals:
 * - /pattern/flags - Easy to read
 * - /hello/ - Match "hello"
 * - /[aeiou]/ - Match any vowel
 * 
 * RegExp Constructor:
 * - new RegExp("pattern", "flags")
 * - Useful for dynamic patterns
 * - Used when pattern is variable
 * 
 * Flags (Modifiers):
 * - g - Global (all matches)
 * - i - Ignore case
 * - m - Multiline (^ and $ per line)
 * - s - Dot matches newline
 * - u - Unicode
 * 
 * Common Pattern Elements:
 * - . - Any character except newline
 * - * - Zero or more
 * - + - One or more
 * - ? - Zero or one
 * - {n} - Exactly n times
 * - {n,m} - Between n and m times
 * - [] - Character class
 * - [a-z] - Range
 * - [^abc] - NOT in set
 * 
 * Character Classes:
 * - \d - Digit (0-9)
 * - \D - Non-digit
 * - \w - Word char (a-z, A-Z, 0-9, _)
 * - \W - Non-word char
 * - \s - Whitespace
 * - \S - Non-whitespace
 * 
 * Anchors:
 * - ^ - Start of string/line
 * - $ - End of string/line
 * - \b - Word boundary
 * 
 * Groups:
 * - (abc) - Capturing group
 * - (?:abc) - Non-capturing group
 * 
 * String Methods:
 * - match() - Find matches
 * - matchAll() - All matches with details
 * - search() - First match index
 * - replace() - Replace matches
 * - replaceAll() - Replace all matches
 * - split() - Split by pattern
 * - test() - Boolean: matches?
 * - exec() - Detailed match info
 * 
 * WHY RegEx:
 * - Powerful pattern matching
 * - Validation (email, phone, URL)
 * - Text processing (clean, extract)
 * - Search and replace
 * 
 * WHERE Used:
 * - Email validation
 * - Phone number formatting
 * - Password strength
 * - URL parsing
 * - Log analysis
 * 
 * Use-Cases in Testing:
 * - Validate API responses
 * - Extract IDs from responses
 * - Check error messages match patterns
 * - Test form validation
 * - Parse test data from strings
 * 
 * WHERE: Validation, parsing, test data extraction
 * 
 * Performance:
 * - Avoid catastrophic backtracking
 * - Use character classes instead of alternation
 * - Anchor patterns when possible
 * - Test performance with large strings
 */

// Example 1: Basic Pattern Matching
const pattern = /hello/;
console.log(pattern.test("hello world")); // true
console.log(pattern.test("goodbye")); // false


// Example 2: Case-Insensitive Matching
const caseInsensitive = /hello/i;
console.log(caseInsensitive.test("HELLO")); // true
console.log(caseInsensitive.test("Hello")); // true


// Example 3: Global Matching - Find All
const globalPattern = /[aeiou]/g;
const matches = "hello world".match(globalPattern);
console.log(matches); // ['e', 'o', 'o']


// Example 4: Email Validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("user@example.com")); // true
console.log(emailPattern.test("invalid.email")); // false
console.log(emailPattern.test("@example.com")); // false


// Example 5: Phone Number Validation
const phonePattern = /^(\+\d{1,3})?\s?(\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
console.log(phonePattern.test("123-456-7890")); // true
console.log(phonePattern.test("(123) 456-7890")); // true
console.log(phonePattern.test("+1 123 456 7890")); // true


// Example 6: Extract Numbers
const numberPattern = /\d+/g;
const text = "I have 2 apples and 5 oranges";
const numbers = text.match(numberPattern);
console.log(numbers); // ['2', '5']


// Example 7: Extract Words
const wordPattern = /\w+/g;
const sentence = "Hello_World, how are you?";
const words = sentence.match(wordPattern);
console.log(words); // ['Hello_World', 'how', 'are', 'you']


// Example 8: String Replacement
const text1 = "The cat sat on the mat";
const replaced = text1.replace(/cat/g, "dog");
console.log(replaced); // "The dog sat on the mat"


// Example 9: Replace with Function
const text2 = "apple orange banana";
const fruit = text2.replace(/\b\w+\b/g, match => match.toUpperCase());
console.log(fruit); // "APPLE ORANGE BANANA"


// Example 10: Split by Pattern
const csv = "name,age,email";
const fields = csv.split(/,/);
console.log(fields); // ['name', 'age', 'email']

// Split by whitespace
const words2 = "one   two  three".split(/\s+/);
console.log(words2); // ['one', 'two', 'three']


// Example 11: Extract Capturing Groups
const urlPattern = /^(https?):\/\/([^\/]+)\/(.+)$/;
const url = "https://example.com/api/users";
const match = url.match(urlPattern);
console.log(match);
// [0]: full match
// [1]: protocol
// [2]: domain
// [3]: path


// Example 12: Password Validation
function validatePassword(password) {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
}

console.log(validatePassword("weak")); // false
console.log(validatePassword("Weak123!")); // true


// Example 13: URL Extraction
const content = "Check https://google.com and http://github.com";
const urlRegex = /https?:\/\/[^\s]+/g;
const urls = content.match(urlRegex);
console.log(urls); // ['https://google.com', 'http://github.com']


// Example 14: Remove Whitespace
const text3 = "  hello  world  ";
const trimmed = text3.replace(/^\s+|\s+$/g, "");
console.log(`"${trimmed}"`); // "hello  world"


// Example 15: Test Multiple Patterns
function testInput(input) {
    const isEmail = /^[^\s@]+@[^\s@]+$/.test(input);
    const isPhone = /^\d{10}$/.test(input);
    const isNumeric = /^\d+$/.test(input);
    
    if (isEmail) return "Email";
    if (isPhone) return "Phone";
    if (isNumeric) return "Number";
    return "Unknown";
}

console.log(testInput("user@example.com")); // "Email"
console.log(testInput("1234567890")); // "Phone"
console.log(testInput("12345")); // "Number"


// Example 16: Testing Pattern - Validate API Response
function validateAPIResponse(response) {
    // Check response has expected format
    const pattern = /^\{".*"\}$/; // Simple JSON check
    return pattern.test(JSON.stringify(response));
}

const response = { id: 1, name: "Test" };
console.log(validateAPIResponse(response)); // true


// Example 17: Dynamic RegEx
function createSearchPattern(searchTerm) {
    // Escape special characters
    const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(escaped, "gi");
}

const pattern2 = createSearchPattern("test.js");
console.log(pattern2.test("Test.JS file")); // true


// Example 18: matchAll for Detailed Matches
const text4 = "The quick brown fox";
const wordMatches = [...text4.matchAll(/\b\w+\b/g)];
wordMatches.forEach(match => {
    console.log(`${match[0]} at index ${match.index}`);
});


// Example 19: Testing Pattern - Extract Test IDs
function extractTestIds(testResult) {
    const pattern = /TEST-\d{4}/g;
    return testResult.match(pattern) || [];
}

const result = "Failed: TEST-1001, TEST-1002, TEST-1005";
console.log(extractTestIds(result)); // ['TEST-1001', 'TEST-1002', 'TEST-1005']


// Example 20: Regex Performance - Avoid Catastrophic Backtracking
// Bad: Can cause extreme backtracking
// const bad = /(a+)+b/;

// Good: Optimized pattern
const good = /a+b/;
console.log(good.test("aaaaaab")); // true
