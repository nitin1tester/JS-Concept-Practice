# JavaScript Concepts NOT Covered in `src/`

## Core Language Features

### 1. **Scope & Closures**
- Global, function, and block scope
- Lexical scope
- Closures and practical use cases
- Scope chain
- Variable hoisting in detail

### 2. **Prototypes & Prototype Chain**
- Prototype-based inheritance
- `__proto__` vs `prototype`
- Constructor functions
- Object.create()
- Prototype chain traversal

### 3. **Hoisting**
- Variable hoisting (var, let, const differences)
- Function hoisting
- Temporal Dead Zone (TDZ)

### 4. **This Binding**
- Context of `this` keyword
- Method invocation context
- Standalone function calls
- Arrow functions and `this`
- Explicit binding (call, apply, bind)

### 5. **Getters & Setters**
- Property getters with `get` keyword
- Property setters with `set` keyword
- Computed property names
- Property descriptors

### 6. **Symbols**
- Creating and using symbols
- Symbol registry
- Symbol as object keys
- Well-known symbols

### 7. **WeakMap & WeakSet**
- WeakMap for private data
- WeakSet for tracking objects
- Garbage collection implications
- Use cases

### 8. **Generators & Iterators**
- Generator functions (`function*`)
- `yield` keyword
- Iterator protocol
- Iterable protocol
- `for...of` loops with custom iterables

### 9. **Proxy & Reflect**
- Proxy traps (get, set, has, delete, etc.)
- Proxy use cases (validation, logging, etc.)
- Reflect API
- Meta-programming

### 10. **Module System**
- ES6 Modules (import/export)
- CommonJS (require/module.exports)
- Module patterns
- Circular dependencies
- Tree-shaking

---

## Error Handling & Debugging

### 11. **Error Handling Advanced**
- Custom error classes
- Error stack traces
- Error propagation
- Finally blocks (already basic, needs depth)
- Error types (TypeError, ReferenceError, etc.)

### 12. **Try-Catch-Finally**
- Advanced error handling patterns
- Resource cleanup in finally
- Error recovery strategies

---

## Event Handling & DOM

### 13. **Event System**
- Event listeners and handlers
- Event propagation (bubbling, capturing)
- Event delegation
- Event object properties
- preventDefault() vs stopPropagation()

### 14. **DOM Manipulation**
- Selecting elements (querySelector, getElementById, etc.)
- Creating and removing elements
- DOM traversal
- Modifying attributes and styles
- Event binding to DOM elements

### 15. **Browser APIs**
- Fetch API and AJAX
- LocalStorage & SessionStorage
- Cookies
- Geolocation
- Timers (setTimeout, setInterval, clearTimeout, clearInterval)
- RequestAnimationFrame

---

## Performance & Advanced Concepts

### 16. **Debouncing & Throttling**
- Debounce patterns
- Throttle patterns
- Practical use cases

### 17. **Memoization**
- Caching function results
- Optimization techniques

### 18. **Currying**
- Function currying basics
- Partial application
- Practical examples

### 19. **Immutability**
- Immutable data structures
- Object freeze/seal
- Structural sharing
- Benefits and trade-offs

### 20. **Memory Management**
- Garbage collection
- Memory leaks
- Reference cycles
- Performance monitoring

---

## Advanced Functions & Patterns

### 21. **Higher-Order Functions**
- Functions that return functions
- Functions that take functions as arguments
- Map, filter, reduce in detail
- Composition patterns

### 22. **Partial Application & Composition**
- Function composition libraries
- Pipe and compose functions
- Practical patterns

### 23. **Design Patterns**
- Singleton pattern
- Factory pattern
- Observer pattern
- Pub-Sub pattern
- Module pattern
- MVC/MVVM patterns

### 24. **Polymorphism**
- Method overloading concepts
- Interface-like patterns
- Duck typing

---

## Modern JavaScript Features

### 25. **Spread Operator Advanced**
- Shallow vs deep copy
- Spreading with nested objects
- Performance implications

### 26. **Optional Chaining (?.) & Nullish Coalescing (??)**
- Safe property access
- Default values
- Comparison with || and &&

### 27. **BigInt**
- Large number handling
- Operations with BigInt
- Conversion limitations

### 28. **Logical Assignment Operators**
- `&&=`, `||=`, `??=`
- Use cases

### 29. **Regular Expressions**
- Pattern matching
- Regex methods and flags
- String manipulation with regex
- Performance considerations

### 30. **Template Literals Advanced**
- Tagged templates
- Custom template processing
- Complex string interpolation

---

## Asynchronous Programming Advanced

### 31. **Microtasks vs Macrotasks**
- Event loop deep dive
- Task queues
- Promise timing
- setTimeout vs Promise execution order

### 32. **Promise Advanced**
- Promise.all(), Promise.race(), Promise.any(), Promise.allSettled()
- Promise error handling patterns
- Promise chaining vs async-await

### 33. **Async Iterators**
- `async for...of` loops
- Async generators
- Asynchronous iteration

### 34. **AbortController**
- Cancelling async operations
- Fetch with abort signals
- Timeout patterns

---

## Type Coercion & Comparisons

### 35. **Type Coercion Deep Dive**
- Implicit type conversion rules
- Comparison algorithms
- Equality operators (== vs ===) edge cases
- typeof operator edge cases

---

## Object-Oriented Concepts

### 36. **Inheritance Advanced**
- Prototype chain inheritance
- Class inheritance (extends, super)
- Mixins and composition
- Delegation patterns

### 37. **Polymorphism in JavaScript**
- Method overriding
- Duck typing patterns
- Interface patterns

### 38. **Encapsulation**
- Private fields (#)
- Protected properties (naming conventions)
- Getters/setters for encapsulation

### 39. **Static Methods & Properties**
- Static class members
- Factory methods
- Utility functions in classes

---

## Meta-Programming & Reflection

### 40. **Object Introspection**
- Object.keys(), Object.values(), Object.entries()
- Object.getOwnPropertyNames()
- Object.getOwnPropertyDescriptors()
- Property enumeration

### 41. **Object Configuration**
- Object.defineProperty()
- Object.defineProperties()
- Property descriptors (value, get, set, enumerable, writable, configurable)
- Object.freeze(), Object.seal(), Object.preventExtensions()

### 42. **Type Checking & Validation**
- instanceof operator advanced
- Custom type checking
- Validation patterns
- Runtime type assertions

---

## Data Structures

### 43. **Map & Set Collections**
- Map vs Object
- Set for unique values
- WeakMap and WeakSet (covered in #7)
- Iterating Maps and Sets
- Use cases for each

### 44. **Custom Data Structures**
- Linked lists
- Trees
- Graphs
- Stacks and queues
- Hash tables

---

## Testing & Quality

### 45. **Testing Concepts**
- Unit testing basics
- Mocking and stubbing
- Assertions and test runners
- Coverage metrics

### 46. **Debugging Techniques**
- Console methods beyond log()
- Debugging tools
- Error investigation
- Performance profiling

---

## Best Practices

### 47. **Code Organization**
- Module patterns
- File structure
- Naming conventions
- Documentation standards

### 48. **Performance Optimization**
- Critical rendering path
- Lazy loading
- Code splitting
- Bundle optimization

### 49. **Security**
- XSS prevention
- CSRF protection
- Input sanitization
- Secure coding practices

### 50. **Functional Programming Concepts**
- Pure functions
- Immutability
- Side effects
- Functional composition
- Declarative vs imperative

---

## Summary
**Total concepts identified: 50+**

The current `src/` covers:
- Basic data types and operators
- Control flow (loops, conditionals)
- Arrays and objects (basic operations)
- Functions (basic types, arrow functions)
- OOP basics (classes, objects)
- Async/await and Promises (basics)
- Destructuring

**Heavily underrepresented:**
- Event handling & DOM APIs
- Browser APIs & timers
- Advanced prototype concepts
- Meta-programming & Proxy/Reflect
- Complex design patterns
- Performance optimization techniques
- Security practices
