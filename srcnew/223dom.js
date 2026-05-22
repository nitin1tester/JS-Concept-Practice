/**
 * DOM API & EVENT HANDLING: Querying, Manipulating, Listening
 * 
 * DOM Selection Methods:
 * - getElementById(id) - Select by ID
 * - querySelector(selector) - CSS selector (first match)
 * - querySelectorAll(selector) - CSS selector (all matches)
 * - getElementsByClassName(class) - By class name
 * - getElementsByTagName(tag) - By tag name
 * 
 * Differences:
 * - getElementById: Fastest, specific
 * - querySelector: CSS selector, flexible
 * - getElementsBy*: Live collections (update)
 * - querySelectorAll: Static NodeList
 * 
 * DOM Manipulation:
 * - textContent - Text content (safe)
 * - innerHTML - HTML content (risky)
 * - setAttribute(name, value) - Set attribute
 * - getAttribute(name) - Get attribute
 * - classList.add/remove/toggle - Manage classes
 * - createElement(tag) - Create element
 * - appendChild(node) - Add child
 * - removeChild(node) - Remove child
 * 
 * Event Handling:
 * - addEventListener(event, handler) - Attach handler
 * - removeEventListener(event, handler) - Remove handler
 * - Event types: click, input, change, submit, etc.
 * - Event delegation: Listen on parent
 * 
 * Event Object:
 * - event.target - Element that triggered
 * - event.currentTarget - Element with listener
 * - event.preventDefault() - Cancel default action
 * - event.stopPropagation() - Stop bubble up
 * 
 * Event Delegation:
 * - Listen on parent element
 * - Check event.target for actual element
 * - Efficient for dynamic content
 * - Reduces listeners needed
 * 
 * WHY These Methods:
 * - querySelector: Modern, flexible, CSS-based
 * - addEventListener: Standard, removable
 * - Event delegation: Efficient, handles dynamic
 * - textContent: Safe from XSS
 * 
 * WHERE Used:
 * - Selecting elements
 * - Form handling
 * - Button clicks
 * - List updates
 * - Dynamic content
 * 
 * Use-Cases in Testing:
 * - Simulate clicks
 * - Verify element updates
 * - Test event propagation
 * - Check class modifications
 * - Form submission testing
 * 
 * WHERE: DOM manipulation, event handling, user interaction
 * 
 * Best Practices:
 * - Use querySelector/querySelectorAll
 * - Prefer textContent over innerHTML
 * - Use event delegation for lists
 * - Cache element references
 * - Clean up listeners
 */

// Example 1: Select by ID
const element = document.getElementById("myElement");
if (element) {
    console.log("Found:", element.id);
}


// Example 2: querySelector - Single Element
const heading = document.querySelector("h1");
const button = document.querySelector(".submit-btn");
const listItem = document.querySelector("ul > li:first-child");


// Example 3: querySelectorAll - Multiple Elements
const paragraphs = document.querySelectorAll("p");
console.log("Found", paragraphs.length, "paragraphs");

paragraphs.forEach(p => {
    console.log(p.textContent);
});


// Example 4: className and classList Manipulation
const el = document.querySelector(".box");

// Old way (avoid)
// el.className = "box active"; // Overwrites

// New way (better)
el.classList.add("active");
el.classList.remove("inactive");
el.classList.toggle("highlight");

console.log(el.classList.contains("active")); // true


// Example 5: textContent vs innerHTML
const div = document.querySelector("div");

// Safe (text only)
div.textContent = "Hello <b>World</b>";
// Result: "Hello <b>World</b>" (literal text)

// Dangerous (parses HTML)
// div.innerHTML = "Hello <b>World</b>";
// Result: Hello **World** (rendered)


// Example 6: getAttribute and setAttribute
const link = document.querySelector("a");

const href = link.getAttribute("href");
console.log("Current href:", href);

link.setAttribute("href", "https://new-url.com");
link.setAttribute("target", "_blank");


// Example 7: Element Creation and Insertion
const newDiv = document.createElement("div");
newDiv.textContent = "New Content";
newDiv.className = "new-element";

const container = document.querySelector(".container");
container.appendChild(newDiv);


// Example 8: Basic Event Listener
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    console.log("Button clicked!");
    console.log("Target:", event.target);
});


// Example 9: Input Event Listener
const input = document.querySelector("input[type='text']");

input.addEventListener("input", (event) => {
    console.log("Input value:", event.target.value);
});


// Example 10: Form Submission
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent reload
    
    const formData = new FormData(form);
    console.log("Form data:", Object.fromEntries(formData));
});


// Example 11: Event Delegation
const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Item clicked:", event.target.textContent);
        event.target.classList.toggle("selected");
    }
});

// Works for current AND future items added to list


// Example 12: Stop Propagation
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

// Click child: only "Child clicked" logs
// (Parent listener not triggered)


// Example 13: Prevent Default
const link = document.querySelector("a#myLink");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Link clicked but not navigating");
});


// Example 14: Remove Event Listener
function handleClick() {
    console.log("Clicked");
}

const btn = document.querySelector(".removable");
btn.addEventListener("click", handleClick);

// Later, remove listener
btn.removeEventListener("click", handleClick);


// Example 15: Multiple Event Types
const input2 = document.querySelector("input");

input2.addEventListener("focus", () => console.log("Focused"));
input2.addEventListener("blur", () => console.log("Blurred"));
input2.addEventListener("keydown", (e) => console.log("Key:", e.key));


// Example 16: Modify Elements on Change
const select = document.querySelector("select");

select.addEventListener("change", (event) => {
    const value = event.target.value;
    
    const message = document.querySelector(".message");
    message.textContent = `Selected: ${value}`;
    message.style.color = value === "error" ? "red" : "green";
});


// Example 17: Dynamic Content - Event Delegation
const container2 = document.querySelector(".dynamic-list");

// Button adds items
document.querySelector(".add-btn").addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "New item";
    container2.appendChild(item);
});

// Delegate click on container
container2.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});


// Example 18: Get All Attributes
function getAttributes(element) {
    const attrs = {};
    for (const attr of element.attributes) {
        attrs[attr.name] = attr.value;
    }
    return attrs;
}


// Example 19: CSS-like Selectors
const advanced = {
    // Descendant
    elements: document.querySelectorAll("div p"),
    
    // Child
    directChildren: document.querySelectorAll("div > p"),
    
    // Attribute
    inputs: document.querySelectorAll('input[type="text"]'),
    
    // Class
    active: document.querySelectorAll(".active"),
    
    // Pseudo-class
    first: document.querySelector("li:first-child"),
    
    // Multiple selectors
    buttons: document.querySelectorAll("button, [role='button']")
};


// Example 20: Testing Pattern - Simulate Events
function testDOMInteraction() {
    // Create test element
    const testBtn = document.createElement("button");
    testBtn.textContent = "Test";
    
    let clicked = false;
    testBtn.addEventListener("click", () => {
        clicked = true;
    });
    
    // Simulate click
    testBtn.click();
    console.assert(clicked, "Click handler should fire");
    
    // Test classList
    testBtn.classList.add("active");
    console.assert(testBtn.classList.contains("active"), "Should have active class");
    
    // Test text modification
    testBtn.textContent = "Clicked";
    console.assert(testBtn.textContent === "Clicked", "Text should update");
    
    console.log("All DOM tests passed!");
}

// testDOMInteraction();


// Example 21: Common DOM Pattern - Tab Navigation
function setupTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");
    
    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Hide all panels
            tabPanels.forEach(panel => panel.style.display = "none");
            
            // Show selected panel
            tabPanels[index].style.display = "block";
            
            // Update button styles
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
}


// Example 22: Common DOM Pattern - Form Validation
function setupFormValidation() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
    
    form.addEventListener("submit", (event) => {
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add("error");
                isValid = false;
            } else {
                input.classList.remove("error");
            }
        });
        
        if (!isValid) {
            event.preventDefault();
        }
    });
}
