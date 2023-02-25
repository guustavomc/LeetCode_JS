/**
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

****
  Example 1:

  Input: strs = ["flower","flow","flight"]
  Output: "fl"
  
  Example 2:

  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
  
 ****
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    prefix="";
    strs.sort();
    let firstString= strs[0];
    let lastString= strs[strs.length-1];

    for(let i=0; i <= firstString.length; i++){
        if(firstString[i]!=lastString[i]){
            break;
        }
        prefix += firstString[i];
    }
    return prefix;
}
