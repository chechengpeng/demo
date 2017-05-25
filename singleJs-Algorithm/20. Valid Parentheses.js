/**
 * https://leetcode.com/problems/valid-parentheses/#/description
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 * 正则替换加循环，这个方法不好
 */
var isValid = function (s) {
  var l = 0;
  var sl = s.length;
  while (s.length > 0 && l < sl) {
    sl = s.length;
    s = s.replace(/\(\)/g, '');
    s = s.replace(/\{\}/g, '');
    s = s.replace(/\[\]/g, '');
    l = s.length;
    console.log(sl + "---" + l);
    if (sl == l) {
      console.log('false')
      return false;
    }
  }
  console.log('true');
  return true;
}
isValid("[()[[]()]]")

// 优雅的做法
var isValid2 = function (s) {
  if (s.length % 2 !== 0) {
    return false
  }

  const left = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!left[s[i]]) {
      if (left[stack.pop()] !== s[i]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
//isValid('([])')
