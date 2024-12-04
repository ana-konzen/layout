export function addTOC(sections, p = p5.instance) {
  console.log(sections);
  const sectionKeys = Object.keys(sections);
  const tocArtists = p.select(".toc-artists");
  const tocPages = p.select(".toc-pages");
  sectionKeys.forEach((key, index) => {
    const section = sections[key];
    const artist = p.createDiv(section.artist);
    artist.addClass("artist");
    artist.parent(tocArtists);
  });
}
