import { pane, generateBtn, addArtist } from "./scripts/tweak.js";

import { processData } from "./scripts/data.js";

import { Layout, totalPageCount } from "./scripts/layout.js";

const savedJSON = localStorage.getItem("savedData") || "[]";
localStorage.setItem("oldData", JSON.stringify(savedJSON));
const savedSections = JSON.parse(savedJSON);

export const sections = {};

console.log(savedSections);

const sketch = (p) => {
  let data;
  p.setup = () => {
    p.noCanvas();

    generateBtn.on("click", async () => {
      console.log("generate");
      data = await processData();
      for (const dp of data) {
        const id = dp.id;
        const layout = new Layout(p, id, dp.copy, dp, 100 + 1 * data.indexOf(dp));
        layout.create();

        await updateArtists(p, layout, dp, id);
        await addArtist(sections[id]);

        sections[id].pages.forEach((page, index) => {
          page.button.on("click", () => {
            p.select(`.image-${layout.artist}-${index}`).style(
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
      updateImages(p);
    });
  };
};

new p5(sketch);

function updateImages(p = p5.instance) {
  for (const section of Object.keys(savedSections)) {
    const dp = savedSections[section];
    dp.pages.forEach((page, index) => {
      p.select(`.image-${dp.id}-${index}`)?.style("background-image", `url(${page.params.image})`);
      console.log(sections[section]);
      sections[section].pages[index].params.image = page.params.image;
    });
  }
  pane.refresh();
}

async function updateArtists(p, layout, dp, id) {
  const pages = [];
  const copyElts = p.selectAll(`.copy-${layout.artist}`);
  for (let i = 0; i < layout.pageCount; i++) {
    pages[i] = {
      title: `page_${totalPageCount - layout.pageCount + i}`,
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
    id: id,
    images: dp.images,
    params,
    pages,
    layout,
  };
}
