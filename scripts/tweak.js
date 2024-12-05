import { Pane } from "https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/dist/tweakpane.min.js";
import * as TextareaPlugin from "https://cdn.jsdelivr.net/npm/@pangenerator/tweakpane-textarea-plugin@2.0.0/dist/tweakpane-textarea-plugin.min.js";
import { sections } from "../main.js";
export const pane = new Pane({});

pane.registerPlugin(TextareaPlugin);

const setContent = pane.addFolder({ title: "set content" });

export const contentParams = {
  issue: "issue1",
  sheetID: "1o4hfVIEqVGXpXXHibQbBzY5uTbxikXqo_JjDczPAUew",
};

setContent.addBinding(contentParams, "issue", {
  options: {
    issue1: "issue1",
    issue2: "issue2",
  },
});

setContent.addBinding(contentParams, "sheetID");

export const generateBtn = setContent.addButton({ title: "generate" });

const saveBtn = setContent.addButton({ title: "save" });

saveBtn.on("click", () => {
  const sectionKeys = Object.keys(sections);
  const sectionsToSave = {};

  sectionKeys.forEach((key) => {
    const section = sections[key];
    const sectionToSave = {
      art: section.art,
      id: section.id,
      params: {
        seed: section.params.seed,
        rows: section.params.rows,
        cols: section.params.cols,
      },
      images: section.images,
      pages: section.pages.map((page) => {
        return {
          title: page.title,
          index: page.index,
          params: {
            copy: page.params.copy,
            image: page.params.image,
          },
        };
      }),
    };
    sectionsToSave[key] = sectionToSave;
  });

  console.log(sectionsToSave);
  localStorage.setItem("savedData", JSON.stringify(sectionsToSave));
});

const tabs = pane.addTab({
  pages: [{ title: "Content" }, { title: "Stats" }, { title: "Print" }],
});

const printMenu = tabs.pages[2];
const printButton = printMenu.addButton({ title: "print PDF" });
printButton.on("click", () => {
  const magazine = document.getElementById("magazine");
  const preview = document.getElementById("preview-cont");
  console.log(preview.innerHTML);
  magazine.innerHTML = preview.innerHTML;
  window.print();
});

const contentMenu = tabs.pages[0];

export async function addArtist(section) {
  const sectionFolder = contentMenu.addFolder({ title: section.art });

  sectionFolder.addBinding(section.params, "seed", {
    step: 1,
    min: 10,
    max: 1000,
  });

  sectionFolder.addBinding(section.params, "rows", {
    options: {
      4: 4,
      8: 8,
      10: 10,
      16: 16,
    },
  });

  sectionFolder.addBinding(section.params, "cols", {
    options: {
      4: 4,
      8: 8,
      10: 10,
      16: 16,
    },
  });

  const imageOptions = { none: "" };
  for (const image of section.images) {
    imageOptions[image] = image;
  }

  section.button = sectionFolder.addButton({
    title: "update section",
  });

  const pagesFolder = sectionFolder.addFolder({ title: "pages" });

  for (const page of section.pages) {
    const pageFolder = pagesFolder.addFolder({ title: page.title });
    pageFolder.addBinding(page.params, "copy", {
      view: "textarea",
      rows: 6,
      placeholder: "Type here...",
    });

    pageFolder.addBinding(page.params, "image", { options: imageOptions });
    page.button = pageFolder.addButton({
      title: "update page",
    });
  }
}
