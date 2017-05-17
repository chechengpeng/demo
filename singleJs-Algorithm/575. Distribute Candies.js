/**
 * Given an integer array with even length, where different numbers in this array represent different kinds of candies.
 * Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.
 * Example 1:
 *  Input: candies = [1,1,2,2,3,3]   Output: 3
 * Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
The sister has three different kinds of candies. 
Example 2:
Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1]. 
The sister has two different kinds of candies, the brother has only one kind of candies. 
 */

/**
 * @param {number[]} candies
 * @return {number}
 * 通过题意可以得出如果种类足够多返回糖果数量的一半，如果种类小于糖果数量的一半，那就返回种类数
 */
var distributeCandies = function(candies) {
    var kinds = uniq(candies);
    return kinds<candies.length/2 ? kinds : candies.length/2
};

function uniq(arr){
    return Array.from(new Set(arr)).length;
}