/**
 * MODULE EXAMPLE: Named & Default Exports
 * 
 * Demonstrates both export types:
 * - Named exports: export function namedExport()
 * - Default export: export default function defaultExport()
 * 
 * WHY Multiple Exports:
 * - Default: Primary export (main function)
 * - Named: Secondary exports (utilities)
 * - One file can have both
 * 
 * Typical Pattern:
 * - Default: Main class or primary function
 * - Named: Helper functions, utilities
 * 
 * Use in Testing:
 * - Main test file imports default (browser driver)
 * - Secondary imports utilities (helpers)
 * 
 * WHERE: Utility modules, helper libraries, test fixtures
 */

export function getrendomNumber(){
    console.log("I am a random number ");
}

export default function getRamdonString(){
    console.log("i am default function from stringUtil");
}


