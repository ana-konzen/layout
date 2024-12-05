export function addTOC(sections, p = p5.instance) {
  console.log(sections);
  const sectionKeys = Object.keys(sections);
  const tocArtists = p.select(".toc-artists");
  const tocPages = p.select(".toc-pages");
  sectionKeys.forEach((key, index) => {
    const section = sections[key];
    p.createDiv(section.artist).addClass("toc-artist").parent(tocArtists);
    p.createDiv(`${section.art} // ${section.layout.indexPage}`).addClass("page-index").parent(tocPages);
  });
}
