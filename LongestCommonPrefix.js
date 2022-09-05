/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const length = strs.length;
    if(length === 1){
        return strs.toString()
    }
    
    let final = strs[0].split('');
    let result = [];
    for(let i = 1; i< strs.length; i++){
        const toCheck = strs[i].split('')
        result = []
        for(let j =0; j< toCheck.length; j++){
            if(final[j] == toCheck[j]){
                result.push(final[j])
            } else break;
        }
        final = result
    }
    
    return result.join('')
};
