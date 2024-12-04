import { pane, generateBtn, addArtist } from "../tweak.js";

import { processData } from "../data.js";

let totalPageCount = 0;

const sections = {};

const sketch = (p) => {
  let data;
  p.setup = () => {
    p.noCanvas();

    generateBtn.on("click", async () => {
      console.log("generate");
      data = await processData();
      for (const dp of data) {
        const id = dp.id;
        const layout = new Layout(id, dp.copy, dp, 100 + data.indexOf(dp));
        layout.addFirstPages();
        layout.addCopy();

        await updateArtists(layout, dp, id);
        sections[id].pages.forEach((page, index) => {
          page.button.on("click", () => {
            p.select(`.image-${layout.artist}-${index + 1}`).style(
              "background-image",
              `url(${page.params.image})`
            );
            pane.refresh();
          });
        });

        sections[id].button.on("click", async () => {
          layout.seed = sections[id].params.seed;
          layout.rows = sections[id].params.rows;
          layout.cols = sections[id].params.cols;
          layout.reset();
          pane.refresh();
        });
      }
      const state = pane.exportState();
      localStorage.setItem("state", JSON.stringify(state));
    });
  };

  async function updateArtists(layout, dp, id) {
    const pages = [];
    const copyElts = p.selectAll(`.copy-${layout.artist}`);
    for (let i = 0; i < layout.pageCount - 1; i++) {
      pages[i] = {
        title: `page_${i + 1}`,
        index: i,
        params: {
          copy: copyElts[i].html(),
          image: "",
        },
      };
      if (i < dp.images.length) {
        pages[i].params.image = dp.images[i];
      }
    }
    const params = {
      seed: layout.seed,
      rows: layout.rows,
      cols: layout.cols,
    };
    sections[id] = {
      art: dp.art,
      images: dp.images,
      params,
      pages,
      layout,
    };
    await addArtist(sections[id]);
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
      this.pageCount = 0;
      this.imageWeight = 1;
      p.randomSeed(this.seed);
    }

    setGrid() {
      this.walkers = [];
      this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
      this.categories = ["image", "blank", "blank", "blank"];
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
      throw new Error("no empty cells in grid");
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

    addPage() {
      totalPageCount++;
      this.pageCount++;
      const page = p.createDiv();
      page.addClass("page");
      this.appendToDOM(page);
      this.drawDivs(page);
      this.addPageNumber(page);
    }

    addFirstPages() {
      totalPageCount += 2;
      // this.pageCount+=2;
      const page = p.createDiv();
      page.addClass("page");
      page.addClass("first-page");
      page.addClass(`first-page-${this.artist}`);

      const page2 = p.createDiv();
      page2.addClass("page");
      page2.addClass("first-page");
      page2.addClass(`first-page-${this.artist}`);

      const comment = p.createP(this.data.firstPageCopy);
      comment.addClass("comment");
      page.style("background", this.data.color2);

      // createRandomPath(`first-page-${this.artist}`, this.data.art, this.pageW, this.pageH, 10);
      const title = p.createDiv(this.data.art);
      title.addClass("art-title");
      title.style("left", p.random(10, 60) + "%");
      title.style("top", p.random(10, 60) + "%");
      title.style("color", this.data.color1);
      // add english language
      title.attribute("lang", "en");
      title.parent(page);

      comment.style("left", p.random(10, 90) + "%");
      comment.style("top", p.random(10, 90) + "%");
      comment.parent(page);

      let commentRect = comment.elt.getBoundingClientRect();
      const titleRect = title.elt.getBoundingClientRect();

      //check if comment is overlapping with title
      while (
        commentRect.left < titleRect.right &&
        commentRect.right > titleRect.left &&
        commentRect.top < titleRect.bottom &&
        commentRect.bottom > titleRect.top
      ) {
        comment.style("left", p.random(10, 90) + "%");
        comment.style("top", p.random(10, 90) + "%");
        commentRect = comment.elt.getBoundingClientRect();
      }

      this.appendToDOM(page);
      this.appendToDOM(page2);
    }

    addPageNumber(page) {
      const pageNumber = p.createDiv(totalPageCount);
      pageNumber.addClass("pageNumber");
      if (totalPageCount % 2 === 0) {
        pageNumber.addClass("even");
      } else {
        pageNumber.addClass("odd");
      }
      pageNumber.parent(page);
    }

    appendToDOM(page) {
      const siblings = p.selectAll(`.${this.artist}`);
      page.addClass(this.artist);
      // console.log(siblings);
      if (siblings.length === 0) {
        page.parent("preview-cont");
        console.warn(`No siblings found for artist ${this.artist}.`);
        return;
      }
      const lastSibling = siblings[siblings.length - 1];
      lastSibling.elt.after(page.elt);
    }

    reset() {
      const pages = p.selectAll(`.${this.artist}`);
      for (const page of pages) {
        page.remove();
      }
      totalPageCount -= this.pageCount;
      this.pageCount = 0;
      this.addFirstPages();
      this.addCopy();
    }

    drawDivs(page) {
      this.toCSSPolygon();
      this.drawImageBoxes(page);
      this.drawTextBoxes(page);
    }

    drawTextBoxes(page) {
      const textBox = p.createDiv();
      textBox.addClass("copy");
      const textBorder = p.createDiv();
      textBorder.style("shape-outside", this.polygon);
      // textBorder.style("clip-path", this.polygon);

      textBorder.addClass("text-border");
      textBorder.parent(textBox);
      const paragraph = p.createP();
      paragraph.addClass(`copy-${this.artist}`);
      paragraph.parent(textBox);
      textBox.parent(page);

      const text = p.createDiv();
      text.addClass("text");
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
      this.polygon = `polygon(${polygonPath})`;
    }

    drawImageBoxes(page) {
      const imgBox = p.createDiv();
      imgBox.addClass("image");
      imgBox.addClass(`image-${this.artist}-${this.pageCount - 1}`);
      if (this.pageCount - 1 < this.data.images.length) {
        const imagePath = this.data.images[this.pageCount - 1];
        imgBox.style("background-image", `url(${imagePath})`);
      }
      if (this.data.imageOrientation === "vertical") {
        imgBox.addClass("vertical");
      } else {
        imgBox.addClass("horizontal");
      }

      imgBox.style("clip-path", this.polygon);
      imgBox.parent(page);
    }

    addCopy() {
      const tokens = this.copy.match(/(\S+\s*|\s+)/g) || [];
      const widthOffset = 20;
      while (tokens.length > 0) {
        this.addPage();
        const textBoxes = p.selectAll(`.copy-${this.artist}`);
        const currentBox = textBoxes[textBoxes.length - 1];
        while (currentBox.elt.scrollHeight <= currentBox.elt.clientHeight && tokens.length > 0) {
          let oldText = currentBox.html();
          const newToken = tokens.shift();
          currentBox.html(oldText + newToken);
          while (currentBox.elt.scrollWidth > currentBox.elt.clientWidth + widthOffset) {
            oldText += "<br>";
            currentBox.html(oldText + newToken);
          }
          if (currentBox.elt.scrollHeight > currentBox.elt.clientHeight) {
            currentBox.html(oldText);
            tokens.unshift(newToken);
            break;
          }
        }
      }
    }
  }

  function createRandomPath(className, title, width, height, numPoints) {
    let pathData = `M ${p.floor(p.random(10, width - 30))} ${p.floor(p.random(10, height - 30))} `;
    for (let i = 0; i < numPoints; i++) {
      const x = p.floor(p.random(50, 100) * i);
      const y = p.floor(p.random(50, 200));
      pathData += `L ${x} ${y} `;
    }
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    // svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    console.log(pathData);
    path.setAttribute("d", pathData);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "none");
    path.setAttribute("stroke-width", "0");
    path.id = `path-${className}`;
    const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
    textPath.setAttribute("href", `#path-${className}`);
    textPath.classList.add("art-title");
    textPath.setAttribute("startOffset", "0%");
    textPath.textContent = title;
    svgText.appendChild(textPath);
    svg.appendChild(path);
    svg.appendChild(svgText);
    document.querySelector(`.${className}`).appendChild(svg);
    console.log(svg);
  }
};

new p5(sketch);
