/**
 * https://leetcode.com/problems/student-attendance-record-i/#/description
 * You are given a string representing an attendance record for a student. The record only contains the following three characters:
 * 'A' : Absent.  'L' : Late.  'P' : Present.
 * A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
 * You need to return whether the student could be rewarded according to his attendance record.
 * Input: "PPALLP"  Output: True
 * Input: "PPALLL"  Output: False
 */

/**
 * @param {string} s
 * @return {boolean}
 * 如果不会用正则表达式，用 string 的 split 方法，可是实现简单的匹配字符串功能。
 * 如果找不到匹配字符串则把总字符串变为长度为1的数组
 */
var checkRecord = function(s) {
    console.log(s.split('LLL'))
    if(s.split('LLL').length>1)return false;
    var len = s.length;
    var as = s.replace(/A/g,'').length;
    return len-as<2
};