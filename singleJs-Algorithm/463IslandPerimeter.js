/*
 * You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. 
 * Grid cells are connected horizontally/vertically (not diagonally). 
 * The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). 
 * The island doesn't have "lakes" (water inside that isn't connected to the water around the island). 
 * One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 *  Input: [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 *  Answer: 16
 * */
// 因为不清楚 hash table 数据结构，单纯的自己去试结果
// 错误一
var islandPerimeter = function (grid) {
  var newGrid = grid.map(function (x) {
    return x.filter(function (a) {
      return a == 1;
    }).length
  })
  var minL = Math.min.apply(null, newGrid);
  var minuse = minL * (newGrid.length - 1) * 2;
  var numA = newGrid.map(function (x) {
    return num(x);
  })
  var abs = numA.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return abs - minuse;
};
// 错误二
var islandPerimeter = function (grid) {
  // 边的个数数组
  var newGrid = grid.map(function (x) {
    return x.filter(function (a) {
      return a == 1;
    }).length
  })

  var arr = [];
  // 拆分组合新数组
  for (var i = 0; i < grid[0].length; i++) {
    var arr2 = []
    for (var j = 0; j < grid.length; j++) {
      arr2.push(grid[j][i]);
    }
    arr.push(arr2);
  }
  // 找出全是1的数组
  var arr3 = arr.filter(function (x) {
    return x.every(function (a) {
      return a === 1;
    })
  })
  var minL = arr3.length;
  var minuse = minL * (newGrid.length - 1) * 2;
  // 数组求和
  var abs = newGrid.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return abs - minuse;
};

// 方法三：题目给出的标签是 hash table 对数据结构不是很熟，用了笨方法做了出来
var islandPerimeter = function (grid) {

  // 边的个数数组
  var newGrid = grid.map(function (x) {
    return getA(x);
  })

  // 拆分组合新数组
  var arr = [];
  for (var i = 0; i < grid[0].length; i++) {
    var arr2 = []
    for (var j = 0; j < grid.length; j++) {
      arr2.push(grid[j][i]);
    }
    arr.push(arr2);
  }
  var arr3 = arr.map(function (x) {
    return getB(x);
  })
  var minuse = arr3.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  // 数组求和
  var abs = newGrid.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return abs - minuse;
};

// 算出边的个数
function getA(a) {
  var sa = a.join('');
  var asa = sa.split('0');
  var fasa = asa.filter(function (x) {
    return x != '';
  })
  var anums = 0;
  for (var i = 0; i < fasa.length; i++) {
    anums += num(fasa[i].length)
  }
  return anums;
}

// 算出相邻边的个数
function getB(a) {
  var sa = a.join('');
  var asa = sa.split('0');
  var fasa = asa.filter(function (x) {
    return x.length > 1;
  })
  var minu = 0;
  for (var i = 0; i < fasa.length; i++) {
    minu += (fasa[i].length - 1) * 2
  }
  return minu;
}

function num(n) {
  if (n === 0) return 0
  return (n - 1) * 2 + 4
}