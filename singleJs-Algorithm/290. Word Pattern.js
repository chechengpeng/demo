/**
 * https://leetcode.com/problems/word-pattern/#/description
 * Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 * 把 pattern 和 str 都转化成为，表示索引的字符串，再比较两者是否相同
 */
var wordPattern = function (pattern, str) {
  var pat = findInd(pattern)
  var st = findInd(str, true);
  console.log(pat == st);
};

function findInd(str, isArr) {
  if (isArr) {
    str = str.split(' ')
  }
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str.indexOf(str[i]));  // 用第一次出现的索引值
  }
  return arr.toString();
}
wordPattern('aaaa', "dog cat cat dog")

// 正统的方式用 hashMap 来实现
var wordPattern2 = function (pattern, str) {
  const strArr = str.split(' ');
  if (pattern.length !== strArr.length) return false;

  let m = {};
  let k = {};
  let result = true;

  for (let i in pattern) {
    const char = pattern[i];
    const word = strArr[i];

    if (!m[char]) {
      m[char] = word;
    } else if (m[char] !== word) {
      return false;
    }

    if (!k[word]) {
      k[word] = char;
    } else if (k[word] !== char) {
      return false;
    }

  }

  return true;
};