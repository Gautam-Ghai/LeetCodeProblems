/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example:
Input: s = "()"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    
    
    const res = [];
    
    for(let i=0; i < s.length; i++){
        const last = res[res.length - 1]
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            res.push(s[i])
        } else if (s[i] === ')' && last === '(' && res.length !== 0) {
            res.pop();
        } else if (s[i] === ']' && last === '[' && res.length !== 0) {
            res.pop();
        }
        else if (s[i] === '}' && last === '{' && res.length !== 0) {
            res.pop();
        }
        else {
            return false
        }
    }
    
    return res.length === 0;
};
