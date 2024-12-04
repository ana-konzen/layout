import {
  pane,
  artist,
  copyParam,
  artistParams,
  artistsButtons,
  addSectionButton,
  generateBtn,
} from "../tweak.js";

import { processData } from "../data.js";

let totalPageCount = 0;

const sections = [];

const sketch = (p) => {
  let data;
  p.setup = () => {
    p.noCanvas();
    addSectionButton.on("click", addSection);
    generateBtn.on("click", async () => {
      console.log("generate");
      data = await processData();
      for (const dp of data) {
        const artist = dp.id;
        const copy = dp.copy;
        const layout = new Layout(artist, copy, dp);
        layout.addPage();
        layout.addCopy();
        sections.push({ artist, copy, layout });
      }
    });
  };

  function addSection() {
    console.log(artist.artist);
    console.log(copyParam.copy);
    const layout = new Layout(artist.artist, copyParam.copy, p.random(1000));
    layout.addPage();
    layout.addCopy();

    sections.push({ artist: artist.artist, copy: copyParam.copy, layout: layout });
    console.log(sections);
    artist.artist = "";
    copyParam.copy = "";
    pane.refresh();
    console.log(artistParams);
    console.log(artistsButtons);
    artistsButtons.forEach((button, index) => {
      button.update.on("click", () => {
        console.log("update");
        updateSection(artistParams[index]);
      });
    });
  }

  function updateSection(params) {
    const section = sections.find((s) => s.artist === params.artist);
    section.copy = params.copy;
    console.log(section);
    // if (!section) {
    //   console.warn(`No section found for artist ${artistName}.`);
    //   return;
    // }
    section.layout.copy = params.copy;
    section.layout.addCopy();
  }

  class Layout {
    constructor(artist, copy, data = {}, seed = 100, numCols = 10, numRows = 10, margin = 20) {
      this.artist = artist;
      this.data = data;
      this.copy = copy;
      this.seed = seed;
      this.margin = margin;
      this.rows = numRows;
      this.cols = numCols;
      this.pageW = p.select(".page").width;
      this.pageH = p.select(".page").height;
      this.colW = (this.pageW - 2 * margin) / numCols;
      this.rowH = (this.pageH - 2 * margin) / numRows;
      this.pageNumber = 0;
      p.randomSeed(this.seed);
    }

    setGrid() {
      this.walkers = [];
      this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
      this.categories = ["image", "copy", "blank"];
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
        let x = p.floor(p.random(this.cols));
        let y = p.floor(p.random(this.rows));
        if (this.grid[y][x] === null) {
          return { x, y };
        }
        attempts++;
      }
      throw new Error("No empty cells available in the grid.");
    }

    getNextMove(x, y) {
      const moves = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ];
      const shuffledMoves = moves.sort(() => p.random(0.5));
      for (const move of shuffledMoves) {
        const newX = x + move.x;
        const newY = y + move.y;
        if (
          newX >= 0 &&
          newX < this.cols &&
          newY >= 0 &&
          newY < this.rows &&
          this.grid[newY][newX] === null
        ) {
          return { x: newX, y: newY };
        }
      }
      return null; // No valid moves available
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
            };
            movesMade++;
          }
        }
      } while (movesMade > 0);
    }

    getPositions() {
      const positions = {};
      for (const category of this.categories) {
        positions[category] = [];
      }
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          if (this.grid[row][col]) {
            const cell = this.grid[row][col];
            if (positions[cell.category].length > 0) {
              const last = positions[cell.category][positions[cell.category].length - 1];
              if (last.y === row * this.rowH) {
                last.width += this.colW;
              } else {
                positions[cell.category].push({
                  x: col * this.colW,
                  y: row * this.rowH,
                  width: this.colW,
                });
              }
            } else {
              positions[cell.category].push({
                x: col * this.colW,
                y: row * this.rowH,
                width: this.colW,
              });
            }
          }
        }
      }
      return positions;
    }

    addPage() {
      totalPageCount++;
      this.pageNumber++;
      const page = p.createDiv();
      page.addClass("page");
      this.appendToDOM(page);
      this.drawDivs(page);
    }

    appendToDOM(page) {
      const siblings = p.selectAll(`.${this.artist}`);
      page.addClass(this.artist);
      console.log(siblings);
      if (siblings.length === 0) {
        page.parent("preview-cont");
        console.warn(`No siblings found for artist ${this.artist}.`);
        return;
      }
      const lastSibling = siblings[siblings.length - 1];
      lastSibling.elt.after(page.elt);
    }

    drawDivs(page) {
      this.fillGrid();
      const positions = this.getPositions();
      for (const category of this.categories) {
        for (const pos of positions[category]) {
          if (category === "copy") this.drawTextBoxes(page, pos);
          if (category === "image") this.drawImageBoxes(page, pos);
        }
      }
    }

    positionDiv(pos, div) {
      div.style("position", "absolute");
      div.style("left", pos.x + this.margin + "px");
      div.style("top", pos.y + this.margin + "px");
      div.style("width", pos.width + "px");
      div.style("height", this.rowH + "px");
      div.style("box-sizing", "border-box");
    }

    drawTextBoxes(page, pos) {
      const textBox = p.createDiv();
      textBox.addClass("copy");
      textBox.addClass(`copy-${this.artist}`);
      this.positionDiv(pos, textBox);
      textBox.parent(page);
    }

    drawImageBoxes(page, pos) {
      const imgBox = p.createDiv();
      imgBox.addClass("image");
      this.positionDiv(pos, imgBox);
      const imagePath = this.data.images[this.pageNumber % this.data.images.length];
      imgBox.style("background-image", `url(${imagePath})`);
      imgBox.style("background-position", `-${pos.x}px -${pos.y}px`);
      imgBox.parent(page);
    }

    addCopy() {
      let textBoxes = p.selectAll(`.copy-${this.artist}`);
      if (textBoxes.length === 0) {
        console.warn(`No text boxes found for artist ${this.artist}.`);
        return;
      }

      textBoxes[0].html(this.copy);
      let currentIndex = 0;
      let currentBox = textBoxes[currentIndex];

      while (currentBox) {
        let nextBox = textBoxes[currentIndex + 1];
        while (currentBox.elt.scrollHeight > currentBox.elt.clientHeight) {
          let content = currentBox.html();

          // Split into words along with any following whitespace
          const tokens = content.match(/(\S+\s*|\s+)/g) || [];
          let overflowTokens = [];

          // Remove tokens from the end until the box fits
          while (tokens.length > 0 && currentBox.elt.scrollHeight > currentBox.elt.clientHeight) {
            overflowTokens.unshift(tokens.pop());
            currentBox.html(tokens.join(""));
          }

          // Only add a new page if there's no next box
          if (!nextBox) {
            this.addPage();
            textBoxes = p.selectAll(`.copy-${this.artist}`);
            nextBox = textBoxes[currentIndex + 1];
            if (!nextBox) break; // No more boxes available
          }

          // Prepend overflow tokens to next box content
          nextBox.html(overflowTokens.join("") + (nextBox.html() || ""));
        }
        currentIndex++;
        currentBox = textBoxes[currentIndex];
      }
    }
  }
};

new p5(sketch);
