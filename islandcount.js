/*
*  Number of Islands (LeetCode)
*  This JavaScript solution was extracted from the Java version seen in: https://www.youtube.com/watch?v=o8S2bO3pmO4
*  
*  Problem description: Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is 
*  surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*  
*  Example
*  ------------------
*
*  Input:
*  [
*    [1, 1, 1, 1, 0],
*    [1, 0, 1, 0, 0],
*    [0, 1, 1, 0, 1],
*    [0, 0, 0, 1, 1]
*  ]
*
*  Output: 2
*
*/

class IslandCounter {

    constructor(grid) {
        this.grid = grid;
        this.i = 0;
        this.j = 0;
        this.dfs = (grid, i, j) => {
            if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
                return 0;
            }
            grid[i][j] = 0;
            this.dfs(grid, i + 1, j);
            this.dfs(grid, i - 1, j);
            this.dfs(grid, i, j + 1);
            this.dfs(grid, i, j - 1);
            return 1;
        }
    }

    get islandCount() {
        if (this.grid == null || this.grid.length == 0) {
            return 0;
        }

        let numIslands = 0;
        for (this.i = 0; this.i < this.grid.length; this.i++) {
            for(this.j = 0; this.j < this.grid[this.i].length; this.j++) {
                if (this.grid[this.i][this.j]) {
                    numIslands += this.dfs(this.grid, this.i, this.j);
                }
            }
        }

        return numIslands;
    }

}

let islands = new IslandCounter([
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 0, 0, 1, 1]
])

console.log(islands.islandCount)

