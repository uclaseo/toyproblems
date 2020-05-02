/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const recurse = (r, c) => {
      if (!grid[r] || grid[r] === '0') {
          return 0;
      } else if (!grid[r][c] || grid[r][c] === '0') {
          return 0;
      }
      grid[r][c] = '0';
      recurse(r - 1, c);
      recurse(r + 1, c);
      recurse(r, c - 1);
      recurse(r, c + 1);
      return 1;
  };
  let count = 0;
  for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
          count += recurse(i, j);
      }
  }
  return count;
};