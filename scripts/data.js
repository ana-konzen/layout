import { contentParams } from "./tweak.js";

async function getOpenSheet() {
  const issue = "issue";
  const sheetID = contentParams.sheetID;
  const tabName = contentParams.issue;
  const url = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

  const json = await fetch(url);
  const response = await json.json();
  console.log(response);
  return response;
}

export async function processData() {
  const data = await getOpenSheet();
  data.forEach((dp, index) => {
    const imagePaths = [];
    const fileName = dp.art.replace(/\s/g, "-").toLowerCase();
    for (let i = 0; i < dp.numImages; i++) {
      imagePaths.push(`images/${"issue1"}/art/${fileName}/${i + 1}.png`);
    }
    dp.images = imagePaths;
    dp.lastImage = `images/${"issue1"}/art/${fileName}/last.png`;
    dp.firstImage = `images/${"issue1"}/art/${fileName}/first.png`;
    dp.id = `art${index}`;
  });
  console.log(data);
  return data;
}
