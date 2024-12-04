export class Walker {
  constructor(p = p5.instance, seed = 100, numCols = 10, numRows = 10) {
    this.p = p;
    this.rows = numRows;
    this.cols = numCols;
    this.p.randomSeed(seed);
  }

  setGrid() {
    this.walkers = [];
    this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
    this.categories = ["image", "blank", "blank"];
    for (let i = 0; i < this.categories.length; i++) {
      const startPos = this.getRandomEmptyCell();
      this.walkers.push({
        x: startPos.x,
        y: startPos.y,
        category: this.categories[i],
      });
      this.grid[startPos.y][startPos.x] = { category: this.categories[i] };
    }
  }

  getRandomEmptyCell() {
    const maxAttempts = 1000;
    let attempts = 0;
    while (attempts < maxAttempts) {
      let x = this.p.floor(this.p.random(this.cols));
      let y = this.p.floor(this.p.random(this.rows));
      if (this.grid[y][x] === null) {
        return { x, y };
      }
      attempts++;
    }
    throw new Error("no empty cells in grid");
  }

  getNextMove(x, y) {
    const moves = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];
    const shuffledMoves = this.p.shuffle(moves);
    for (const move of shuffledMoves) {
      const newX = x + move.x;
      const newY = y + move.y;
      if (newX >= 0 && newX < this.cols && newY >= 0 && newY < this.rows && this.grid[newY][newX] === null) {
        return { x: newX, y: newY };
      }
    }
    return null;
  }

  fillGrid() {
    this.setGrid();
    let movesMade;
    do {
      movesMade = 0;
      for (const walker of this.walkers) {
        const nextMove = this.getNextMove(walker.x, walker.y);
        if (nextMove) {
          walker.x = nextMove.x;
          walker.y = nextMove.y;
          this.grid[walker.y][walker.x] = {
            category: walker.category,
            x: walker.x,
            y: walker.y,
          };
          movesMade++;
        }
      }
    } while (movesMade > 0);
  }

  toCSSPolygon() {
    this.fillGrid();
    const polygon = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.grid[row][col]?.category === "image") {
          polygon.push({ x: (col / this.cols) * 100, y: (row / this.rows) * 100 });
          break;
        }
      }
      if (polygon.length > 0) break;
    }
    let nextPoint = { x: -1, y: -1 };
    while (
      nextPoint.x !== (polygon[0].x * this.cols) / 100 ||
      nextPoint.y !== (polygon[0].y * this.rows) / 100
    ) {
      const lastPoint = {
        x: (polygon[polygon.length - 1].x * this.cols) / 100,
        y: (polygon[polygon.length - 1].y * this.rows) / 100,
      };
      if (
        this.grid[lastPoint.y - 1]?.[lastPoint.x]?.category === "image" &&
        this.grid[lastPoint.y - 1]?.[lastPoint.x - 1]?.category !== "image"
      ) {
        nextPoint = { x: lastPoint.x, y: lastPoint.y - 1 };
      } else if (
        this.grid[lastPoint.y]?.[lastPoint.x]?.category === "image" &&
        this.grid[lastPoint.y - 1]?.[lastPoint.x]?.category !== "image"
      ) {
        nextPoint = { x: lastPoint.x + 1, y: lastPoint.y };
      } else if (
        this.grid[lastPoint.y]?.[lastPoint.x - 1]?.category === "image" &&
        this.grid[lastPoint.y]?.[lastPoint.x]?.category !== "image"
      ) {
        nextPoint = { x: lastPoint.x, y: lastPoint.y + 1 };
      } else if (
        this.grid[lastPoint.y - 1]?.[lastPoint.x - 1]?.category === "image" &&
        this.grid[lastPoint.y]?.[lastPoint.x - 1]?.category !== "image"
      ) {
        nextPoint = { x: lastPoint.x - 1, y: lastPoint.y };
      } else {
        console.warn("no next point found");
        break;
      }
      polygon.push({ x: (nextPoint.x / this.cols) * 100, y: (nextPoint.y / this.rows) * 100 });
    }
    const polygonPath = polygon.map((point) => `${point.x}% ${point.y}%`).join(", ");
    return `polygon(${polygonPath})`;
  }
}
