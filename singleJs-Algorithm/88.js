/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m==0 && n==0){
      nums1 = [];
    }else if(m==0 && n!= 0){
      nums1 = nums2.slice(0,n);
    }else if(m!=0 && n==0){
      nums1 = nums1.slice(0,m);
    }else{
      nums1 = nums1.slice(0,m);
      nums2 = nums2.slice(0,n);
      nums1 = nums1.concat(nums2).sort(function(a,b){return a-b})
    }
    console.log(nums1);
};
 merge([0],0,[1],1) // [1]
//merge([1],1,[],0) // [1]
//merge([1,2,3,4],2,[5,6,7,8],2) // [1]