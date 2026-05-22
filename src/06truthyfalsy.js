/**
 * TRUTHY & FALSY VALUES
 * 
 * FALSY Values (8 types - coerce to false):
 * - false: Boolean false
 * - 0: Numeric zero
 * - -0: Negative zero
 * - 0n: BigInt zero
 * - "": Empty string
 * - null: No value
 * - undefined: Uninitialized variable
 * - NaN: Not a Number
 * 
 * TRUTHY Values (everything else):
 * - true: Boolean true
 * - Any non-zero number: 1, -1, 3.14, Infinity, -Infinity
 * - Non-empty string: "hello", "0" (note: "0" is truthy!)
 * - Objects: {}, { name: "test" }, new Date()
 * - Arrays: [], [1,2,3]
 * - Functions: function() { }
 * 
 * Use-Cases:
 * - if (value) { } - checks if truthy
 * - if (!value) { } - checks if falsy
 * - Avoiding explicit boolean checks: if (arr.length) instead of if (arr.length > 0)
 */
//8 different type of falsy value 
// falsy >> false , 0, -0, 0n, "", null, undefined, NaN.
//truthy >> true , any non zero number, non empty string, [], {}, function(){}, new Date(), infinity, -infinity. 