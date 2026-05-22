/**
 * DESIGN PATTERNS: Singleton & Factory
 * 
 * SINGLETON PATTERN
 * ==================
 * What is Singleton:
 * - Pattern ensuring only ONE instance of a class exists
 * - Global point of access to that instance
 * - Instance created lazily (on first use)
 * - All references point to same object
 * 
 * WHY Singleton:
 * - Single source of truth
 * - Resource management (database, logger)
 * - Prevent multiple instances
 * - Thread-safe initialization
 * - Global state management
 * 
 * WHERE Singleton:
 * - Database connections
 * - Logger instances
 * - Configuration objects
 * - Application state
 * - Cache managers
 * 
 * Singleton Implementation:
 * 1. Private constructor (prevent new instances)
 * 2. Static getInstance() method
 * 3. Store instance in static property
 * 4. Lazy instantiation
 * 
 * Use-Cases in Testing:
 * - Mock singleton database
 * - Logger spy to track calls
 * - Configuration fixture
 * - Shared test state
 * 
 * FACTORY PATTERN
 * ================
 * What is Factory:
 * - Pattern for creating objects without specifying exact class
 * - Factory method returns appropriate object type
 * - Client doesn't know concrete class
 * - Centralizes object creation logic
 * 
 * WHY Factory:
 * - Decouple object creation from usage
 * - Create different types based on parameters
 * - Encapsulate creation logic
 * - Make code more flexible
 * - Easy to add new types
 * 
 * WHERE Factory:
 * - Different database implementations
 * - Browser abstraction (Chrome, Firefox)
 * - File format handlers (PDF, Excel)
 * - Payment processors (Stripe, PayPal)
 * - Database drivers
 * 
 * Factory Patterns:
 * 1. Simple Factory: switch/if to create
 * 2. Factory Method: abstract method in parent
 * 3. Abstract Factory: family of objects
 * 
 * Use-Cases in Testing:
 * - Create test doubles (mocks, stubs)
 * - Create test data objects
 * - Create different test scenarios
 * - Browser factory for E2E tests
 * 
 * WHERE: Object creation, abstraction, polymorphism
 */

// ========== SINGLETON PATTERN ==========

// Example 1: Basic Singleton
class DatabaseConnection {
    static instance = null;
    
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        
        this.connection = null;
        DatabaseConnection.instance = this;
    }
    
    connect() {
        this.connection = "Connected to DB";
        console.log(this.connection);
    }
    
    query(sql) {
        console.log(`Executing: ${sql}`);
    }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // true - same instance


// Example 2: Singleton with getInstance()
class Logger {
    static instance = null;
    
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        
        this.logs = [];
        Logger.instance = this;
    }
    
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    
    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(`[${timestamp}] ${message}`);
        console.log(`[${timestamp}] ${message}`);
    }
    
    getLogs() {
        return this.logs;
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
console.log(logger1 === logger2); // true


// Example 3: Singleton with IIFE
const AppConfig = (function() {
    let instance;
    
    function createInstance() {
        return {
            apiUrl: "https://api.example.com",
            timeout: 5000,
            debug: false,
            setApiUrl(url) {
                this.apiUrl = url;
            }
        };
    }
    
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();
console.log(config1 === config2); // true


// Example 4: Testing with Singleton
class MockDatabase {
    static instance = null;
    
    constructor() {
        if (MockDatabase.instance) {
            return MockDatabase.instance;
        }
        
        this.data = {};
        this.callCount = 0;
        MockDatabase.instance = this;
    }
    
    save(key, value) {
        this.callCount++;
        this.data[key] = value;
    }
    
    get(key) {
        return this.data[key];
    }
    
    reset() {
        this.data = {};
        this.callCount = 0;
    }
}

// Test usage
const mockDb = new MockDatabase();
mockDb.save("user1", { name: "Alice" });
console.log(mockDb.get("user1")); // { name: "Alice" }
console.log(mockDb.callCount); // 1


// ========== FACTORY PATTERN ==========

// Example 5: Simple Factory
class BrowserFactory {
    static createBrowser(type) {
        switch (type) {
            case "chrome":
                return new ChromeBrowser();
            case "firefox":
                return new FirefoxBrowser();
            case "safari":
                return new SafariBrowser();
            default:
                throw new Error(`Unknown browser: ${type}`);
        }
    }
}

class ChromeBrowser {
    launch() {
        console.log("Launching Chrome");
    }
    
    close() {
        console.log("Closing Chrome");
    }
}

class FirefoxBrowser {
    launch() {
        console.log("Launching Firefox");
    }
    
    close() {
        console.log("Closing Firefox");
    }
}

class SafariBrowser {
    launch() {
        console.log("Launching Safari");
    }
    
    close() {
        console.log("Closing Safari");
    }
}

const chrome = BrowserFactory.createBrowser("chrome");
chrome.launch(); // "Launching Chrome"


// Example 6: Factory with Configuration
class PaymentFactory {
    static createPaymentProcessor(type, config) {
        switch (type) {
            case "stripe":
                return new StripeProcessor(config);
            case "paypal":
                return new PayPalProcessor(config);
            case "square":
                return new SquareProcessor(config);
            default:
                throw new Error(`Unknown processor: ${type}`);
        }
    }
}

class StripeProcessor {
    constructor(config) {
        this.apiKey = config.apiKey;
    }
    
    process(amount) {
        console.log(`Processing $${amount} with Stripe`);
        return { success: true, amount, processor: "Stripe" };
    }
}

class PayPalProcessor {
    constructor(config) {
        this.clientId = config.clientId;
    }
    
    process(amount) {
        console.log(`Processing $${amount} with PayPal`);
        return { success: true, amount, processor: "PayPal" };
    }
}

class SquareProcessor {
    constructor(config) {
        this.accessToken = config.accessToken;
    }
    
    process(amount) {
        console.log(`Processing $${amount} with Square`);
        return { success: true, amount, processor: "Square" };
    }
}

const stripeProcessor = PaymentFactory.createPaymentProcessor("stripe", { apiKey: "key123" });
stripeProcessor.process(99.99);


// Example 7: Factory Method Pattern
class TestDataFactory {
    static createUser(type) {
        switch (type) {
            case "admin":
                return new AdminUser();
            case "regular":
                return new RegularUser();
            case "guest":
                return new GuestUser();
            default:
                return new RegularUser();
        }
    }
}

class AdminUser {
    constructor() {
        this.role = "admin";
        this.permissions = ["read", "write", "delete"];
    }
}

class RegularUser {
    constructor() {
        this.role = "user";
        this.permissions = ["read"];
    }
}

class GuestUser {
    constructor() {
        this.role = "guest";
        this.permissions = [];
    }
}

const admin = TestDataFactory.createUser("admin");
console.log(admin.permissions); // ["read", "write", "delete"]


// Example 8: Factory for Test Doubles
class MockFactory {
    static createMockUser(overrides = {}) {
        return {
            id: 1,
            name: "Test User",
            email: "test@example.com",
            active: true,
            ...overrides
        };
    }
    
    static createMockResponse(status = 200, data = {}) {
        return {
            status,
            ok: status >= 200 && status < 300,
            json: () => Promise.resolve(data),
            headers: new Map()
        };
    }
    
    static createMockError(message = "Error") {
        return new Error(message);
    }
}

const user = MockFactory.createMockUser({ email: "alice@example.com" });
console.log(user);


// Example 9: Abstract Factory
class UIComponentFactory {
    createButton() {
        throw new Error("Must implement createButton");
    }
    
    createInput() {
        throw new Error("Must implement createInput");
    }
}

class DarkThemeFactory extends UIComponentFactory {
    createButton() {
        return new DarkButton();
    }
    
    createInput() {
        return new DarkInput();
    }
}

class LightThemeFactory extends UIComponentFactory {
    createButton() {
        return new LightButton();
    }
    
    createInput() {
        return new LightInput();
    }
}

class DarkButton {
    render() {
        console.log("Dark Button");
    }
}

class LightButton {
    render() {
        console.log("Light Button");
    }
}

class DarkInput {
    render() {
        console.log("Dark Input");
    }
}

class LightInput {
    render() {
        console.log("Light Input");
    }
}


// Example 10: Factory in Testing
class TestBuilder {
    static buildScenario(type) {
        switch (type) {
            case "login_success":
                return {
                    input: { username: "user", password: "pass" },
                    expected: { success: true, token: "abc123" }
                };
            case "login_failure":
                return {
                    input: { username: "user", password: "wrong" },
                    expected: { success: false, error: "Invalid credentials" }
                };
            case "login_empty":
                return {
                    input: { username: "", password: "" },
                    expected: { success: false, error: "Fields required" }
                };
            default:
                return null;
        }
    }
}

const scenario = TestBuilder.buildScenario("login_success");
console.log(scenario);
