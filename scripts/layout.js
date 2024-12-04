import { Walker } from "./walker.js";

export let totalPageCount = 0;

export class Layout {
  constructor(p = p5.instance, artist, copy, data = {}, seed = 100, numCols = 10, numRows = 10, margin = 20) {
    this.artist = artist;
    this.data = data;
    this.copy = copy;
    this.seed = seed;
    this.margin = margin;
    this.rows = numRows;
    this.cols = numCols;
    this.p = p;
    this.pageW = this.p.select(".page").width;
    this.pageH = this.p.select(".page").height;
    this.pageCount = 0;
    this.imageWeight = 1;
    this.walker = new Walker(this.p, this.seed, this.rows, this.cols);
    this.p.randomSeed(this.seed);
  }

  addPage() {
    totalPageCount++;
    this.pageCount++;
    const page = this.p.createDiv();
    page.addClass("page");
    this.appendToDOM(page);
    this.drawDivs(page);
    this.addPageNumber(page);
  }

  addFirstPages() {
    this.indexPage = totalPageCount + 1;
    totalPageCount += 2;
    const page = this.p.createDiv();
    page.addClass("page");
    page.addClass("first-page");
    page.addClass(`first-page-${this.artist}`);

    const page2 = this.p.createDiv();
    page2.addClass("page");
    page2.addClass("first-page2");
    page2.addClass(`first-page2-${this.artist}`);
    page2.style("background-image", `url(${this.data.firstImage})`);

    const comment = this.p.createP(this.data.firstPageCopy);
    comment.addClass("comment");
    const title = this.p.createDiv(this.data.art);
    title.addClass("art-title");
    // add english language
    title.attribute("lang", "en");
    title.parent(page);
    comment.parent(page);

    this.appendToDOM(page);
    this.appendToDOM(page2);
  }

  addLastPage() {
    totalPageCount++;
    const page = this.p.createDiv();
    page.addClass("page");
    page.addClass("last-page");
    page.addClass(`last-page-${this.artist}`);
    page.style("background-image", `url(${this.data.lastImage})`);
    this.appendToDOM(page);
  }

  addPageNumber(page) {
    const pageNumber = this.p.createDiv(totalPageCount);
    pageNumber.addClass("pageNumber");
    if (totalPageCount % 2 === 0) {
      pageNumber.addClass("even");
    } else {
      pageNumber.addClass("odd");
    }
    pageNumber.parent(page);
  }

  appendToDOM(page) {
    const siblings = this.p.selectAll(`.${this.artist}`);
    page.addClass(this.artist);
    if (siblings.length === 0) {
      page.parent("preview-cont");
      console.warn(`No siblings found for artist ${this.artist}.`);
      return;
    }
    const lastSibling = siblings[siblings.length - 1];
    lastSibling.elt.after(page.elt);
  }

  create() {
    this.addFirstPages();
    this.addCopy();
    if (this.pageCount % 2 !== 0) {
      this.addLastPage();
    }
  }

  reset() {
    const pages = this.p.selectAll(`.${this.artist}`);
    for (const page of pages) {
      page.remove();
    }
    totalPageCount -= this.pageCount;
    this.pageCount = 0;
    this.create();
  }

  drawDivs(page) {
    this.polygon = this.walker.toCSSPolygon();
    this.drawImageBoxes(page);
    this.drawTextBoxes(page);
  }

  drawTextBoxes(page) {
    const textBox = this.p.createDiv();
    textBox.addClass("copy");
    const textBorder = this.p.createDiv();
    textBorder.style("shape-outside", this.polygon);
    textBorder.addClass("text-border");
    textBorder.parent(textBox);
    const paragraph = this.p.createP();
    paragraph.addClass(`copy-${this.artist}`);
    paragraph.parent(textBox);
    textBox.parent(page);

    const text = this.p.createDiv();
    text.addClass("text");
  }

  drawImageBoxes(page) {
    const imgBox = this.p.createDiv();
    imgBox.addClass("image");
    imgBox.addClass(`image-${this.artist}-${this.pageCount - 1}`);
    if (this.pageCount - 1 < this.data.images.length) {
      const imagePath = this.data.images[this.pageCount - 1];
      imgBox.style("background-image", `url(${imagePath})`);
    }

    imgBox.style("clip-path", this.polygon);
    imgBox.parent(page);
  }

  addCopy() {
    const tokens = this.copy.match(/(\S+\s*|\s+)/g) || [];
    const widthOffset = 20;
    while (tokens.length > 0) {
      this.addPage();
      const textBoxes = this.p.selectAll(`.copy-${this.artist}`);
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
