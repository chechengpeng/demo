/**
 * Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
 * Please note that the string does not contain any non-printable characters.
 * Example:  Input: "Hello, my name is John"  Output: 5 
 */

/**
 * @param {string} s
 * @return {number}
 * 利用简单的正则表达式即可
 */
var countSegments = function(s) {
  s = s.replace(/\s{1,}/g,' ');
  if(s[s.length-1]==' '){     // 忘了用字符串的 trim 方法
    s = s.slice(0,-1);
  }
  if(s[0]==' '){
    s = s.slice(1);
  }
    if(s == ' ' || s == ''){
      //console.log('0')
      return 0;
    }
    //console.log(s.split(' ').length);
    return s.split(' ').length;
};
// countSegments("Of all the gin joints in all the towns in all the world,   ");
// countSegments("             ");
// countSegments(", , , ,        a, eaefa");
// countSegments("Hello, my name is John");
// countSegments("Of all the gin joints in all the towns in all the world,   ");
countSegments("    foo    bar");
