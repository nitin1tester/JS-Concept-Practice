/**
 * CONDITIONAL STATEMENTS & FLOW CONTROL
 * 
 * if-else: Execute code based on condition
 * - if (condition) { } else { }
 * - Executes ONE block based on boolean result
 * 
 * if-else if-else: Multiple conditions
 * - Checks conditions sequentially, stops at first true
 * - Use when checking multiple unrelated conditions
 * 
 * Nested if: if statements inside if blocks
 * - Use for complex multi-level conditions
 * - Can become hard to read (avoid deep nesting)
 * 
 * switch-case: More readable for many options
 * - Compares single value against multiple cases (=== comparison)
 * - Use break to exit switch
 * - default: fallback if no case matches
 * - Better than many if-else for multiple fixed values
 * 
 * Use in Testing: Validating different browser types, environments, or user roles
 */
// ifelse block
// if if if else
// if else if else
// nested if 
// switch case;


// ifelse block
let x = 9;
if (x>=10) {
    console.log("I am if part");
} else {
    console.log("I am else part ");
}

// if if if else
if (1===1) {
    console.log("A for apple");
}if (2==2) {
    console.log("b for Boy");
}if (3==="3") {
    console.log("c for cat");
}else{
  console.log("you are in else block");
}

// if else if else
let apple = 5;
if (apple === 5) {
    console.log("I am 1st if");
} else if (true){
    console.log("I am 2nd if");
} else if (true){
    console.log("I am 3rd if");
} else if (true){
    console.log("I am 4th if");
}else{
    console.log("I am final else");
}

//nested
let y = 1;
if(y == 100){
    console.log("I am 1st if ");
    y--;
    if(y==99){
        console.log("I am 2nd if");
        y--;
        if(y==98){
            console.log('i am 3rd if');
            y--;
        }else{
            console.log("I am 3rd else");
        }
    }else{
        console.log("I am 2nd else");
    }
}else{
    console.log("i am first else");
}

//switch
let browser = " SAFARI ";
switch (browser.toLowerCase().trim()) {
    case `chrome`: console.log("Launch Chrome");
        break;
    case `firefox`: console.log("Launch Firefox");
        break;
    case `safari` : console.log("Launch Safari");
        break;
    default: console.log("please enter a valid browser");
        break;
}




