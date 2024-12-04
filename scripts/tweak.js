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
  const sectionsToSave = {
    art0: {
      art: "untitled-231120-2",
      id: "art0",
      params: {
        seed: 100,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/untitled-231120-2/1.png",
        "images/issue1/untitled-231120-2/2.png",
        "images/issue1/untitled-231120-2/3.png",
        "images/issue1/untitled-231120-2/4.png",
        "images/issue1/untitled-231120-2/5.png",
      ],
      pages: [
        {
          title: "page_3",
          index: 0,
          params: {
            copy: "let mySize, margin;\nlet tile_w, tile_h;\nlet tile_num_x, tile_num_y, num_x;\nlet seed = Math.random() * 99999;\nlet t, count;\n\nlet circles = [];\nlet MAX_ITERATIONS = 5000;\n\n//color\nlet color_set = [];\nlet palette1, palette2, color_bg;\n\nlet blueGraphic;\n\n",
            image: "images/issue1/untitled-231120-2/1.png",
          },
        },
        {
          title: "page_4",
          index: 1,
          params: {
            copy: "let offset, offsetMax, offsetMin, offdir;\n\n let ele_ang = 0;\n\nfunction ",
            image: "images/issue1/untitled-231120-2/3.png",
          },
        },
        {
          title: "page_5",
          index: 2,
          params: {
            copy: "preload() {\n        theShader = new p5.Shader(this.renderer, vert, frag)\n}\n\nfunction setup() {\n        frameRate(25);\n        // pixelDensity(3);\n        randomSeed(seed);\n        angleMode(DEGREES);\n        mySize = min(windowWidth, windowHeight);\n        if (mySize &gt; 1000) mySize = 1000;\n        margin = mySize / 100;\n        createCanvas(mySize / 16 * 11, mySize);\n        // createCanvas(mySize, mySize / 16 * 11);\n        tile_num_x = int(random(3, 5)) * 2;\n        webGLCanvas = createGraphics(width, height, WEBGL);\n        blueGraphic = createGraphics(width, height);\n        palette1 = random(colorScheme).colors.concat();\n        palette2 = ",
            image: "",
          },
        },
        {
          title: "page_6",
          index: 3,
          params: {
            copy: "random(colorScheme).colors.concat();\n        color_set[0] = random(palette1);\n        color_set[1] = random(palette2);\n        color_set[2] = random(palette1);\n        color_set[3] = random(palette2);\n        color_set[4] = random(palette1);\n        makeFilter();\n        background(random(color_set));\n        t = count = 0;\n        offset = 0;\n        offsetMax = mySize / 30;\n        offsetMin = -offsetMax;\n        offdir = 1;\n\n        let countCir = 0;\n        while (countCir &lt; MAX_ITERATIONS) {\n                countCir++;\n                let x = random(width);\n                let y = random(height);\n                let r = mySize * random(0.2, 0.01);\n                let isOverlap = circles.some((c) =&gt; {\n                        return mag(c.x - x, c.y - y) &lt; (c.r + r) * 1.0;\n                });\n                if (isOverlap) {\n                        continue;\n                }\n                circles.push({\n                        x,\n                        y,\n                        ",
            image: "",
          },
        },
        {
          title: "page_7",
          index: 4,
          params: {
            copy: "r\n                });\n        }\n}\n\nfunction draw() {\n        randomSeed(seed);\n\n        webGLCanvas.shader(theShader);\n        theShader.setUniform('u_resolution', [width / width, height / height]);\n        theShader.setUniform('u_time', millis() / 100);\n        theShader.setUniform(\"u_frame\", frameCount / 1.0);\n        theShader.setUniform('u_tex', blueGraphic);\n\n        webGLCanvas.clear();\n        webGLCanvas.rect(-width / 2, -height / 2, width, height);\n\n\n        // blueGraphic.background(random(color_set));\n        blueGraphic.angleMode(DEGREES);\n        blueGraphic.noFill();\n        tile_w = tile_h = width * 0.9 / tile_num_x;\n        tile_num_y = int(height * 0.9 / tile_h) * 1;\n\n\n        //shadow\n        blueGraphic.drawingContext.shadowColor = str(random(bgcolor)) + \"33\";\n        // blueGraphic.drawingContext.shadowColor = str(random(bgcolor)) + \"bf\";\n        blueGraphic.drawingContext.shadowOffsetX = -t * 1.5 / 2;\n        blueGraphic.drawingContext.shadowOffsetY = t * ",
            image: "",
          },
        },
        {
          title: "page_8",
          index: 5,
          params: {
            copy: '0.5;\n        blueGraphic.drawingContext.shadowBlur = 25;\n\n\n        for (let i = 0; i &lt; 2; i++) {\n                blueGraphic.drawingContext.setLineDash([1, 1]);\n                blueGraphic.stroke(str(random(color_set)) + "1a");\n                blueGraphic.strokeWeight(random(0.1, 0.2) * random() * random() / 2 / random(0.01, 0.02));\n                blueGraphic.push();\n                blueGraphic.translate(width * random(0.1, 0.75) + random([-1, 1]) * t / random(5, 10), height * random(0.05, 0.35));\n                // let size2 = t * random(10, 20) * random(2.5, 4.5) / random(2, 1);\n                // blueGraphic.rotate(random(360));\n                // blueGraphic.line(-size2, -size2, size2, size2);\n                blueGraphic.circle(0, 0, t * random(10, 20) * random(2.5, 4.5) / random(2, 1));\n                blueGraphic.pop();\n        }\n\n\n        // blueGraphic.drawingContext.shadowColor = str(random(color_set)) + "bf";\n\n\n\n\n        // for (let i = 0; i &lt; tile_num_y + 1; i++) {\n        //         blueGraphic.randomSeed(seed * random([0, 1, 2, 3, 4]));\n        //         blueGraphic.push();\n        ',
            image: "",
          },
        },
        {
          title: "page_9",
          index: 6,
          params: {
            copy: "blueGraphic.strokeCap(SQUARE);\n        //         for (let j = 0; j &lt; tile_num_x; j++) {\n        //                 blueGraphic.push();\n        //                 blueGraphic.translate(random(width) + t * random([-1, 1, 1]) * random(1, 3)/100, random(height) + t * random([-1, 1, 1]) * random(1, 1)/10);\n                        // blueGraphic.rotate(t * random([-1, 1]) / 20);\n        // blueGraphic.drawingContext.setLineDash([random(10, 100), random(3, 10), random(10, 100)]);\n        blueGraphic.strokeWeight(random(0.1, 0.2) * random(0.5,1) * random(0.5,1) / random(0.01, 0.02) * random(10,20));\n        //                 blueGraphic.circle(0, 0, j * 1.5 * 100 / random(2, 4)-t/random(2,10));\n        //                 blueGraphic.pop();\n        //         }\n        //         // blueGraphic.line(0, height * 0.9, -width / 4, height * 0.9);\n        //         blueGraphic.pop();\n        // }\n\n        for (let {\n                        x,\n                        y,\n                        ",
            image: "",
          },
        },
        {
          title: "page_10",
          index: 7,
          params: {
            copy: 'r\n                } of circles) {\n                blueGraphic.push();\n                blueGraphic.translate(x, y + t * random([-1, 1, 1]) * random(1, 3) / 20);\n                // blueGraphic.rotate(t * random([-1, 1]) / 20);\n                        // blueGraphic.rotate(random(360));\n                blueGraphic.stroke(str(color_set[random([0, 1, 2, 3, 4])])+"bf");\n                blueGraphic.drawingContext.shadowColor = str(random(bgcolor)) + "bf";\n                ',
            image: "images/issue1/untitled-231120-2/2.png",
          },
        },
        {
          title: "page_11",
          index: 8,
          params: {
            copy: "blueGraphic.drawingContext.shadowOffsetX = random([-1, 1, 1]) * t * 0.2;\n                blueGraphic.drawingContext.shadowOffsetY = random([-1, -1, 1]) * t * ",
            image: "",
          },
        },
        {
          title: "page_12",
          index: 9,
          params: {
            copy: "0.1;\n                blueGraphic.drawingContext.shadowBlur = 0;\n                let rNow = r * 2 - t * 0 / random(4, 1)/10;\n                if (rNow &gt; 0) {\n                        // blueGraphic.rectMode(CENTER);\n                        blueGraphic.square(0, 0, rNow);\n                 let xx = rNow + sin(offset - ele_ang);\n                 let yy = rNow + cos(offset - ele_ang);\n                        let y_size = 2*rNow * noise(sin(xx), cos(yy), t * 0.01);\n                        \n                 // shape\n                 blueGraphic.push();\n                 blueGraphic.translate(xx, yy);\n                 ",
            image: "",
          },
        },
        {
          title: "page_13",
          index: 10,
          params: {
            copy: "// blueGraphic.rotate(random(-ele_ang, ele_ang)+random(360)+t);\n                 blueGraphic.rotate(random(-ele_ang, ele_ang)+random([0, 90, 180,270]));\n                 // blueGraphic.translate(random(-ele_ang, ele_ang), random(-ele_ang, ele_ang));\n                 blueGraphic.rect(-y_size, 0, 0, y_size);\n                 blueGraphic.pop();\n                        // blueGraphic.circle(0, 0, rNow);\n                        \n                        \n                        // ",
            image: "",
          },
        },
        {
          title: "page_14",
          index: 11,
          params: {
            copy: "blueGraphic.rotate(random(360));\n                        // // blueGraphic.rotate(t * ",
            image: "",
          },
        },
        {
          title: "page_15",
          index: 12,
          params: {
            copy: "random([-1, 1]) / 20);\n                        // // blueGraphic.line(-0/2, -0/2, rNow/2, rNow/2);\n                        //                  blueGraphic.rect(rNow, 0, 0, rNow);\n\n                        // blueGraphic.line(-rNow/2 * sin(45), -rNow/2* sin(45), rNow/2* sin(45), rNow/2* sin(45));\n                } else {\n                        blueGraphic.line(-0, -0, 0, 0);\n                        // blueGraphic.circle(0, 0, 0);\n                }\n                blueGraphic.pop();\n                 ele_ang += 1/ 10000;\n                \n                \n        ",
            image: "",
          },
        },
        {
          title: "page_16",
          index: 13,
          params: {
            copy: "}\n\n\n        ",
            image: "",
          },
        },
        {
          title: "page_17",
          index: 14,
          params: {
            copy: 'image(blueGraphic, 0, 0);\n        image(webGLCanvas, 0, 0);\n        // image(blueGraphic, 0, 0);\n        t += 0.25 / 1 * random(1.1, 2);\n\n        if (offset &lt; offsetMax &amp; offdir == 1) {\n                offset += 0.5;\n        }\n        if (offset &gt;= offsetMax) {\n                offdir = -1;\n                count++;\n                // print(count);\n        }\n        if (offset &gt; offsetMin &amp; offdir == -1) {\n                offset -= 0.5;\n        }\n        if (offset &lt;= offsetMin) {\n                offdir = 1;\n        }\n\n        // if (frameCount == 250) {\n        if (count == 2) {\n                strokeWeight(random(0.1, 0.05));\n                stroke(str(random(color_set)) + "33");\n                noFill();\n                ',
            image: "",
          },
        },
        {
          title: "page_18",
          index: 15,
          params: {
            copy: 'drawingContext.setLineDash([1, 1, 1, 1]);\n                drawOverPattern();\n                // image(overAllTexture, 0, 0);\n                drawingContext.setLineDash([0, 0]);\n                noFill();\n                stroke("#202020");\n                strokeWeight(margin);\n                blendMode(BLEND);\n                ',
            image: "",
          },
        },
        {
          title: "page_19",
          index: 16,
          params: {
            copy: "rectMode(CORNER);\n                rect(0, 0, width, height);\n                noLoop();\n        }\n}",
            image: "",
          },
        },
      ],
    },
    art1: {
      art: "Over and Over Again",
      id: "art1",
      params: {
        seed: 101,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/over-and-over-again/1.png",
        "images/issue1/over-and-over-again/2.png",
        "images/issue1/over-and-over-again/3.png",
        "images/issue1/over-and-over-again/4.png",
        "images/issue1/over-and-over-again/5.png",
        "images/issue1/over-and-over-again/6.png",
        "images/issue1/over-and-over-again/7.png",
        "images/issue1/over-and-over-again/8.png",
        "images/issue1/over-and-over-again/9.png",
        "images/issue1/over-and-over-again/10.png",
        "images/issue1/over-and-over-again/11.png",
        "images/issue1/over-and-over-again/12.png",
      ],
      pages: [
        {
          title: "page_22",
          index: 0,
          params: {
            copy: "//Uses the spectral.js library for color mixing.\n\n\n",
            image: "",
          },
        },
        {
          title: "page_23",
          index: 1,
          params: {
            copy: "",
            image: "images/issue1/over-and-over-again/2.png",
          },
        },
        {
          title: "page_24",
          index: 2,
          params: {
            copy: 'let palettes=[\n["#e70617","#c15a01","#458075","#57d0c9","#b7667d","#ee80b3","#b92b09","#030003"],\n["#fdfaf3","#fcb67b","#c96f2e","#32c2f9","#0278a1","#014256","#102a39"],\n["#94472f","#0e5264","#522829","#20283a","#c97a5a","#debe98"],\n]\nlet splashers=[]\nlet simplex\nlet gridSize, colors, minDim, lineColor, lineIndex\n\nfunction setup() {\n        createCanvas(windowWidth, windowHeight);\n        colors= random(palettes)\n        let bgIndex= floor(random(colors.length))\n        let bgColor=colors[bgIndex]\n        simplex= new openSimplexNoise(Date.now())\n        colors.splice(bgIndex, 1)\n        background(bgColor);\n        lineIndex= floor(random(colors.length))\n        minDim= min(windowWidth, windowHeight)\n        gridSize= ',
            image: "images/issue1/over-and-over-again/3.png",
          },
        },
        {
          title: "page_25",
          index: 3,
          params: {
            copy: "minDim/12\n        let tab=0\n        for(let y=gridSize/2; y&lt;=height+gridSize; y+=gridSize){\n                tab++\n        for(let x=gridSize/2+(tab%2*gridSize); x&lt;=width+gridSize; x+=gridSize*2){\n\n                splashers.push(new splasher(x, y, gridSize/2))\n        }\n                \n        }\n}\n\nfunction draw() {\nfor(let s of splashers){\n        s.paint();\n        s.end();\n}\n        \nif(frameCount==100){\nlet tab=0\n        for(let y=gridSize/2; y&lt;=height; y+=gridSize){\n                tab++\n        for(let x=gridSize/2+(tab%2*gridSize); x&lt;=width; x+=gridSize*2){        \n        \n        strokeWeight(gridSize/40)\n\n                        noFill()\n                ellipse(x, y, ",
            image: "",
          },
        },
        {
          title: "page_26",
          index: 4,
          params: {
            copy: "gridSize)                \n                        \n                for(let i=0; i&lt;12; i++){\n            let anglePicker= floor(random(4))\n                         let angle= i*PI/2+PI/12\n                         stroke(colors[(lineIndex+i)%colors.length])\n                        push()\n                        translate(x, y)\n                        rotate(angle)\n                                bezier(0, gridSize/2,    gridSize/2, gridSize/2,     gridSize*0.9, -gridSize/2,     gridSize*0.9+gridSize/2, -gridSize/2)\n                        pop()\n                }        \n        ",
            image: "",
          },
        },
        {
          title: "page_27",
          index: 5,
          params: {
            copy: "}\n        }\n}        \n        \n}\n\n\nclass splasher{\n        constructor(x, y, r){\n                this.center= createVector(x, y)\n                this.radius= r\n                let colorIndex=floor(random(colors.length))\n                let colorIndex2= (colorIndex + floor(random(1, colors.length-1)))%colors.length\n                this.color1= colors[colorIndex]\n                this.color2= ",
            image: "images/issue1/over-and-over-again/4.png",
          },
        },
        {
          title: "page_28",
          index: 6,
          params: {
            copy: "colors[colorIndex2]        \n                this.life=300\n                this.currentLife= this.life\n        }\n        \n        paint(){\n                noStroke()\n                let mixer= map(this.currentLife, this.life, 0, 0, 1)\n                ",
            image: "images/issue1/over-and-over-again/9.png",
          },
        },
        {
          title: "page_29",
          index: 7,
          params: {
            copy: "let filler = color(spectral.mix(this.color1, this.color2, mixer))\n                fill(filler)\n                let x= this.center.x + simplex.noise2D(this.center.x/gridSize, frameCount/(gridSize))*this.radius*0.75\n                let y= this.center.y + simplex.noise2D(this.center.y/gridSize, frameCount/(gridSize*2))*this.radius*0.75\n                let pos= createVector(x, y)\n                for(let i=0; i&lt;15;i++){\n                        push()\n                        translate(pos.x, pos.y)\n                        rotate(simplex.noise3D(this.center.x/200+this.center.y/200, i/10, frameCount/200)*TAU)\n                        ellipse(randomGaussian(0, this.radius/3), randomGaussian(0, this.radius/10), random(this.radius/10))\n                        pop()\n                }\n        }\n        \n        end(){\n                if(this.currentLife&lt;=0){\n                let index = splashers.indexOf(this);\n                        splashers.splice(index, ",
            image: "images/issue1/over-and-over-again/11.png",
          },
        },
        {
          title: "page_30",
          index: 8,
          params: {
            copy: "1);\n                        \n                        \n                        \n                }\n                ",
            image: "images/issue1/over-and-over-again/5.png",
          },
        },
        {
          title: "page_31",
          index: 9,
          params: {
            copy: "this.currentLife--\n        }\n}",
            image: "",
          },
        },
      ],
    },
    art2: {
      art: "Mulholland",
      id: "art2",
      params: {
        seed: 102,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/mulholland/1.png",
        "images/issue1/mulholland/2.png",
        "images/issue1/mulholland/3.png",
        "images/issue1/mulholland/4.png",
        "images/issue1/mulholland/5.png",
        "images/issue1/mulholland/6.png",
        "images/issue1/mulholland/7.png",
        "images/issue1/mulholland/8.png",
        "images/issue1/mulholland/9.png",
        "images/issue1/mulholland/10.png",
        "images/issue1/mulholland/11.png",
        "images/issue1/mulholland/12.png",
        "images/issue1/mulholland/13.png",
      ],
      pages: [
        {
          title: "page_35",
          index: 0,
          params: {
            copy: "let w; // Width of canvas\nlet h; // Height of canvas\nlet s; // Scale, min of w and h\n",
            image: "images/issue1/mulholland/2.png",
          },
        },
        {
          title: "page_36",
          index: 1,
          params: {
            copy: "let asp = 1 / 1.4; // Aspect ratio\nlet c; // Canvas\nlet pixelMapper; // Pixel coordinate mapper\nlet gfx;\nlet seed;\n\nlet canvasExtent = [-1, 1, -1 / asp, 1 / asp];\nlet artExtent = addMargin(canvasExtent);\nlet extentWidth = canvasExtent[1] - canvasExtent[0];\n\nlet pointsPerFrame = 60;\nlet pds;\nlet grainImg;\n\nconst palettes = [\n\t['#1f2421', '#ea8c55', '#ad2e24', '#7b9e89', '#00798c'],\n\t['#bac1b8', '#58a4b0', '#0c7c59', '#2b303a', '#d64933', '#706993', '#c60f7b']\n];\n\nlet colors;\n\nfunction setup() {\n\tlet pd = pixelDensity();\n  \n  seed = 5325*random();\n\t\n\tcolors = ",
            image: "images/issue1/mulholland/1.png",
          },
        },
        {
          title: "page_37",
          index: 2,
          params: {
            copy: "palettes[Math.floor(palettes.length*random())];\n\tcolors.sort((a, b) =&gt; random() - 0.5);\n\n  [w, h] = computeCanvasSize(windowWidth, windowHeight, asp);\n  w = Math.round(w);\n  h = Math.round(h);\n  s = Math.min(w, h);\n\n  pixelMapper = new PixelMapper(w, h);\n  pixelMapper.setExtentWidth(extentWidth);\n\n  c = createCanvas(w, h);\n  gfx = createGraphics(w, h);\n\n  noiseSeed(72*seed);\n  xNoise = new Perlin(5631*seed, 0.5, 10, 0.5);\n  yNoise = new Perlin(7242*seed, 0.5, 10, 0.5);\n\n  const circles = generateCircles(artExtent, 0.25, 0.5, ",
            image: "",
          },
        },
        {
          title: "page_38",
          index: 3,
          params: {
            copy: "random);\n  const nCircles = circles.length;\n\t\n\tconst warpSizeX = random(0.1, 1);\n\tconst warpSizeY = random(0.1, 1);\n\tconst numWarps = floor(random(1, 10 + 1));\n\n  function distanceFunction(p) {\n    let [x, y] = p;\n\t\tlet warpScale = 1;\n\t\tfor (let i = 0; i &lt; numWarps; i++) {\n\t\t\tconst dx = -1 + 2*xNoise.ev(x, y);\n    \tconst dy = -1 + 2*xNoise.ev(x, y);\n\n    \tx += warpScale*warpSizeX*dx;\n    \ty += warpScale*warpSizeY*dy;\n\t\t\t\n\t\t\twarpScale *= 0.5;\n\t\t}\n    \n\n    for (let i = 0; i &lt; nCircles; i++) {\n      const circ = circles[i];\n      const [cX, cY] = ",
            image: "",
          },
        },
        {
          title: "page_39",
          index: 4,
          params: {
            copy: "circ.center;\n      if (Math.hypot(cX - x, cY - y) &lt; circ.radius) return circ.dist;\n    }\n    return 1;\n  }\n\n\tconst minDistance = random(0.004, 0.006);\n\tconst maxDistance = minDistance*random(5, 10);\n\t\n  pds = new Poisson2D({\n    extent: artExtent,\n    minDistance: minDistance,\n    maxDistance: maxDistance,\n    ",
            image: "images/issue1/mulholland/5.png",
          },
        },
        {
          title: "page_40",
          index: 5,
          params: {
            copy: "distanceFunction,\n    tries: 10,\n  }, random);\n\n  grainImg = createImage(2*pd*w, 2*pd*h);\n  addGrain(grainImg, 0.1, false, random);\n  grainImg.resize(pd*w, pd*h);\n\n\tconst backgroundColor = colors.pop();\n  gfx.background(backgroundColor);\n\n  image(gfx, 0, 0);\n\n  blend(grainImg, 0, 0, pd*width, pd*height, 0, 0, width, height, DIFFERENCE);\n\tloop();\n}\n\n",
            image: "images/issue1/mulholland/7.png",
          },
        },
        {
          title: "page_41",
          index: 6,
          params: {
            copy: "function draw() {\n  strokeWeight(s / 300);\n\n  for (let i = 0; i &lt; pointsPerFrame; i++) {\n    let p = pds.next();\n\t\tconst d = pds.getLastDistance();\n\t\tconst dCbrt = Math.pow(d, 1/3);\n    if (!p) {\n      noLoop();\n      return;\n    }\n\t\tconst currentColor = colors[Math.min(Math.floor(dCbrt*colors.length), colors.length - 1)];\n\t\t",
            image: "",
          },
        },
        {
          title: "page_42",
          index: 7,
          params: {
            copy: 'stroke(currentColor);\n    point(...pixelMapper.toPixel(...p));\n  }\n  \n}\n\nwindow.addEventListener("keyup", (e) =&gt; {\n\tif (e.key === " ") {\n\t\tsetup();\n\t\tdraw();\n\t}\n});\n\n//////////////////////////////\n\nfunction addGrain(img, fill = 0.05, color = false, rng = Math.random) {\n    img.loadPixels();\n    const w = ',
            image: "images/issue1/mulholland/6.png",
          },
        },
        {
          title: "page_43",
          index: 8,
          params: {
            copy: "img.width;\n    const h = img.height;\n    \n    for (let i = 0; i &lt; h; i++) {\n      for (let j = 0; j &lt; w; j++) {\n        ind = 4*(i*w + j);\n        let c;\n        if (color) {\n            c = Array(3).fill().map(_ =&gt; fill*255*rng());\n        } else {\n            const value = fill*255*rng();\n            c = Array(3).fill().map(_ =&gt; value);\n        }\n        \n      \n        img.pixels[ind] = c[0];\n        img.pixels[ind + 1] = c[1];\n        img.pixels[ind + 2] = c[2];\n        img.pixels[ind + 3] = 255;\n      }\n    }\n    \n    img.updatePixels();\n  }\n\n",
            image: "images/issue1/mulholland/9.png",
          },
        },
        {
          title: "page_44",
          index: 9,
          params: {
            copy: "//////////////////////////////\n\nfunction addMargin(extent, margin = 0.05) {\n    let [xMin, xMax, yMin, yMax] = extent;\n    const width = xMax - xMin;\n    const height = yMax - yMin;\n\n    const s = Math.min(width, ",
            image: "images/issue1/mulholland/9.png",
          },
        },
        {
          title: "page_45",
          index: 10,
          params: {
            copy: "height);\n\n    xMin += margin*s;\n    xMax -= margin*s;\n    yMin += margin*s;\n    yMax -= margin*s;\n    return [xMin, xMax, yMin, yMax];\n}\n\n//////////////////////////////\n\n\nfunction computeCanvasSize(windowWidth, windowHeight, ",
            image: "images/issue1/mulholland/13.png",
          },
        },
        {
          title: "page_46",
          index: 11,
          params: {
            copy: "aspectRatio, margin = 0.1) {\n    let w, h;\n\n    if (windowHeight*aspectRatio &lt;= windowWidth) {\n        [w, h] = [windowHeight*aspectRatio, windowHeight];\n    } else {\n        [w, h] = [windowWidth, windowWidth / aspectRatio];\n    }\n    return [(1 - margin)*w, (1 - margin)*h];\n}\n\n//////////////////////////////\n\nfunction generateCircles(extent, minRadius = 0.1, maxRadius = 2, rng = Math.random) {\n    const circles = [];\n\n    const pds = new Poisson2D({ extent, minDistance: 0.1 }, rng);\n    const centers = pds.fill();\n    const n = centers.length;\n\n    for (let i = 0; i &lt; n; i++) {\n        circles.push({\n            center: centers[i],\n            radius: minRadius + (maxRadius - minRadius)*rng(),\n            dist: Math.pow(rng(), 3) // Using a power &gt; 1 gives bias towards lower values\n        });\n    }\n    return circles;\n}\n\n",
            image: "",
          },
        },
        {
          title: "page_47",
          index: 12,
          params: {
            copy: "//////////////////////////////\n\nclass Perlin {\n    constructor(seed, range = 1, octaves = 4, falloff = 0.5) {\n      this.xOffset = random();\n      this.yOffset = random();\n      this.range = range;\n      this.octaves = ",
            image: "images/issue1/mulholland/12.png",
          },
        },
        {
          title: "page_48",
          index: 13,
          params: {
            copy: "octaves;\n      this.falloff = falloff;\n\n      this.normConst = 0;\n      let ampl = 0.5;\n      for (let i = 0; i &lt; octaves; i++) {\n        this.normConst += ampl;\n        ampl *= falloff;\n      }\n    }\n\n    ev(x, y) {\n      const r = this.range;\n      noiseDetail(this.octaves, this.falloff);\n      let v = noise((x ",
            image: "images/issue1/mulholland/13.png",
          },
        },
        {
          title: "page_49",
          index: 14,
          params: {
            copy: "+ this.xOffset) / r, (y + this.yOffset) / r);\n      return v / this.normConst;\n    }\n  }\n\n//////////////////////////////\n\nclass PixelMapper {\n    constructor(pixelWidth, pixelHeight) {\n        this.size = [pixelWidth, pixelHeight];\n        this.asp = pixelWidth / pixelHeight;\n        this.setFlipY(true);\n        this.setExtentWidth(2);\n    }\n\n    setFlipY(value) {\n        this.ySign = value ? -1 : 1;\n    }\n\n    setExtentWidth(width) {\n        this.width = width;\n        this.height = width / this.asp;\n    }\n\n    setExtentHeight(height) {\n        this.height = height;\n        this.width ",
            image: "images/issue1/mulholland/3.png",
          },
        },
        {
          title: "page_50",
          index: 15,
          params: {
            copy: "= asp*height;\n    }\n\n    pixelToUnit(column, row) {\n        const [w, h] = this.size;\n        return [(column + 0.5) / w, (row + 0.5) / h];\n    }\n\n    unitToPixel(u, v) {\n        const [w, h] = this.size;\n        return [u*w - 0.5, v*h - 0.5];\n    }\n\n    fromPixel(column, row) {\n        if (row === undefined) [column, row] = column;\n        let [u, v] = this.pixelToUnit(column, row);\n        const asp = this.asp;\n        let x = (u - 0.5)*this.width;\n        let y = (v - 0.5)*this.height*this.ySign;\n        return [x, y];\n    }\n\n    toPixel(x, y) {\n        if (y === undefined) [x, y] = x;\n        let u = x / this.width + 0.5;\n        let v = y * this.ySign / this.height + 0.5;\n        return this.unitToPixel(u, v);\n    }\n}\n\n",
            image: "",
          },
        },
        {
          title: "page_51",
          index: 16,
          params: {
            copy: "//////////////////////////////",
            image: "images/issue1/mulholland/12.png",
          },
        },
      ],
    },
    art3: {
      art: "220205a",
      id: "art3",
      params: {
        seed: 103,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/220205a/1.png",
        "images/issue1/220205a/2.png",
        "images/issue1/220205a/3.png",
        "images/issue1/220205a/4.png",
        "images/issue1/220205a/5.png",
        "images/issue1/220205a/6.png",
        "images/issue1/220205a/7.png",
        "images/issue1/220205a/8.png",
        "images/issue1/220205a/9.png",
        "images/issue1/220205a/10.png",
      ],
      pages: [
        {
          title: "page_55",
          index: 0,
          params: {
            copy: "",
            image: "images/issue1/220205a/1.png",
          },
        },
        {
          title: "page_56",
          index: 1,
          params: {
            copy: "let brushes = [];\n\nfunction setup() {\n\tcreateCanvas(800, 800);\n\tcolorMode(HSB, 360, 100, 100, 100);\n\tpixelDensity(1);\n\tangleMode(DEGREES);\n\n\tlet offset = width / 15;\n\n\tlet x = offset;\n\tlet y = offset;\n\tlet d = width - offset * 2;\n\tlet min_d = d / ",
            image: "images/issue1/220205a/2.png",
          },
        },
        {
          title: "page_57",
          index: 2,
          params: {
            copy: "5;\n\n\tseparateGrid(x, y, d, min_d);\n\tbackground(0, 0, 95);\n}\n\n\nfunction draw() {\n\tlet isFinished = true;\n\tfor (let brush of brushes) {\n\t\tbrush.draw();\n\t}\n}\n\nfunction separateGrid(x, y, d, min_d) {\n\tlet sepNum = ",
            image: "images/issue1/220205a/3.png",
          },
        },
        {
          title: "page_58",
          index: 3,
          params: {
            copy: "int(random(2, 5));\n\tlet w = d / sepNum;\n\n\tfor (let i = x; i &lt; x + d - 1; i += w) {\n\t\tfor (let j = y; j &lt; y + d - 1; j += w) {\n\t\t\tif (random(100) &lt; 95 &amp;&amp; w &gt; min_d) {\n\t\t\t\tseparateGrid(i, j, w, min_d);\n\t\t\t} else {\n\t\t\t\tlet bool = random() &gt; 0.5;\n\t\t\t\tlet dir = random() &gt; 0.5;\n\t\t\t\tlet sx, sy, tx, ty;\n\t\t\t\tlet p1, p2;\n\t\t\t\tlet sw = w / 2;\n\t\t\t\tlet brush;\n\t\t\t\tif (bool) {\n\t\t\t\t\tp1 = createVector(i, j);\n\t\t\t\t\tp2 = createVector(i + w, j + w);\n\t\t\t\t} else {\n\t\t\t\t\tp1 = createVector(i, j + w);\n\t\t\t\t\tp2 = createVector(i + w, j);\n\t\t\t\t}\n\t\t\t\tif (dir) {\n\t\t\t\t\tsx = p1.x;\n\t\t\t\t\t",
            image: "images/issue1/220205a/4.png",
          },
        },
        {
          title: "page_59",
          index: 4,
          params: {
            copy: "sy = p1.y;\n\t\t\t\t\ttx = p2.x;\n\t\t\t\t\tty = p2.y;\n\t\t\t\t} else {\n\t\t\t\t\tsx = p2.x;\n\t\t\t\t\tsy = p2.y;\n\t\t\t\t\ttx = p1.x;\n\t\t\t\t\tty = p1.y;\n\t\t\t\t}\n\t\t\t\tbrush = new Brush(sx, sy, tx, ty, sw);\n\t\t\t\tbrushes.push(brush);\n\t\t\t}\n\t\t}\n\t}\n}\n\nclass Brush {\n\tconstructor(sx, sy, tx, ty, sw) {\n\t\tthis.sx = sx;\n\t\tthis.sy = sy;\n\t\tthis.tx = tx;\n\t\tthis.ty = ty;\n\t\tthis.sw = sw;\n\t\tthis.distance = dist(sx, sy, tx, ty);\n\t\tthis.n = 0;\n\t\tthis.angle = atan2(ty - sy, tx - sx);\n\t\tthis.s_arr = [];\n\t\tfor (let i = 0; i &lt; sw; i++) {\n\t\t\tthis.s_arr.push({\n\t\t\t\tbool: random() &lt; ",
            image: "images/issue1/220205a/5.png",
          },
        },
        {
          title: "page_60",
          index: 5,
          params: {
            copy: "0.999,\n\t\t\t\tx_offset: -random(sw / 2),\n\t\t\t})\n\t\t}\n\t}\n\n\tdraw() {\n\t\t// line(this.sx,this.sy,this.tx,this.ty);\n\n\t\t",
            image: "images/issue1/220205a/6.png",
          },
        },
        {
          title: "page_61",
          index: 6,
          params: {
            copy: "push();\n\t\ttranslate(this.sx, this.sy);\n\t\trotate(this.angle);\n\t\ttranslate(this.n * this.distance, 0);\n\t\t// rotate(this.n*this.distance*1);\n\t\tlet bn = noise(this.sx, this.sy, this.n*3);\n\t\tlet sw2 = this.sw * bn;\n\t\t",
            image: "images/issue1/220205a/7.png",
          },
        },
        {
          title: "page_62",
          index: 7,
          params: {
            copy: "stroke(0, 0, bn * 20);\n\t\tfor (let i = 0; i &lt; this.s_arr.length; i++) {\n\t\t\tlet y = map(i, 0, this.s_arr.length, -sw2 / 2, sw2 / 2);\n\t\t\tlet n = random() &lt; 0.999;\n\t\t\tif (this.s_arr[i].bool &amp;&amp; n) {\n\t\t\t\tpoint(this.s_arr[i].x_offset, y);\n\t\t\t}\n\t\t\tthis.s_arr[i].bool = this.s_arr[i].bool &amp;&amp; n;\n\t\t}\n\t\t",
            image: "images/issue1/220205a/8.png",
          },
        },
        {
          title: "page_63",
          index: 8,
          params: {
            copy: "this.n += 0.0025;\n\t\tthis.n = constrain(this.n, 0, 1);\n\t\tpop();\n\t}\n}",
            image: "images/issue1/220205a/9.png",
          },
        },
      ],
    },
    art4: {
      art: "Particle Ink",
      id: "art4",
      params: {
        seed: 104,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/particle-ink/1.png",
        "images/issue1/particle-ink/2.png",
        "images/issue1/particle-ink/3.png",
        "images/issue1/particle-ink/4.png",
        "images/issue1/particle-ink/5.png",
        "images/issue1/particle-ink/6.png",
        "images/issue1/particle-ink/7.png",
        "images/issue1/particle-ink/8.png",
        "images/issue1/particle-ink/9.png",
        "images/issue1/particle-ink/10.png",
        "images/issue1/particle-ink/11.png",
        "images/issue1/particle-ink/12.png",
      ],
      pages: [
        {
          title: "page_67",
          index: 0,
          params: {
            copy: "// ",
            image: "images/issue1/particle-ink/4.png",
          },
        },
        {
          title: "page_68",
          index: 1,
          params: {
            copy: "A sketch for psudo ink drawing  \n// implements perlin noise and recursion\n\nlet particles = [] ; //array of particles\n\nfunction setup() {\n        createCanvas(windowWidth, windowHeight);\n        background(200,120,30,20);\n}\n\nfunction draw() {\n        \n        if(mouseIsPressed)  {\n                // spawn a new particle and add it to the array\n                particles.push(new Particle(mouseX, mouseY, 5, 75)); \n        }\n        // update and show the particles\n        for(let i=particles.length-2; i&gt;=0; i--) {\n                particles[i].update(particles);\n                particles[i].show() ;\n                if(particles[i].alpha&lt;=2) particles.splice(i, 5); // remove the dead particle\n        }\n}\n\n\n//particle class\nclass Particle{\n        \n        //constructor called when creating an instance of this ",
            image: "",
          },
        },
        {
          title: "page_69",
          index: 2,
          params: {
            copy: "",
            image: "images/issue1/particle-ink/5.png",
          },
        },
        {
          title: "page_70",
          index: 3,
          params: {
            copy: "class\n        // x &amp; y are the location, r is the rate of decay, a is the starting alpha value\n        constructor(x,y,r,a){\n                \n                this.location = createVector(x,y) ;\n                this.velocity = createVector(random(-1,1),random(-1,1));\n                this.acceleration = createVector();\n                this.alpha = this.palpha=a ;\n                this.amp=3; // size of the particle\n                this.rate = r;\n        \n        }\n        \n        //update the velociy and location of particle\n        update(p){\n                this.acceleration.add(createVector((noise(this.location.x)*2-1), (noise(this.location.y)*2-1)));\n                this.velocity.add(this.acceleration);\n                this.acceleration.set(0,0);\n                this.location.add(this.velocity);\n                this.alpha -= this.rate ;\n                //this.amp-= this.rate ;\n                // here is the recursion condition\n                if(this.alpha&lt;=this.palpha*0.25 &amp;&amp; this.palpha&gt;10) {\n                        p.push(new Particle(this.location.x, this.location.y, this.rate*0.25, this.palpha*0.5));\n                ",
            image: "",
          },
        },
        {
          title: "page_71",
          index: 4,
          params: {
            copy: "}\n        }\n        \n        //show the particles\n        show(){\n                noStroke() ;\n                fill(0,35,25, this.alpha) ;\n                ellipse(this.location.x, this.location.y, this.amp);\n        }\n        \n} // end Particle class",
            image: "",
          },
        },
      ],
    },
    art5: {
      art: "Losing Track",
      id: "art5",
      params: {
        seed: 105,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/losing-track/1.png",
        "images/issue1/losing-track/2.png",
        "images/issue1/losing-track/3.png",
        "images/issue1/losing-track/4.png",
        "images/issue1/losing-track/5.png",
        "images/issue1/losing-track/6.png",
        "images/issue1/losing-track/7.png",
        "images/issue1/losing-track/8.png",
        "images/issue1/losing-track/9.png",
        "images/issue1/losing-track/10.png",
        "images/issue1/losing-track/11.png",
        "images/issue1/losing-track/12.png",
        "images/issue1/losing-track/13.png",
      ],
      pages: [
        {
          title: "page_75",
          index: 0,
          params: {
            copy: "let colors=['#fe938c','#e6b89c','#ead2ac','#9cafb7','#4281a4']\n\nlet w\nlet bgColor\nlet simplex\nlet texture\n\nfunction setup() {\n w= Math.min(windowWidth, windowHeight)\n\tcreateCanvas(w, w);\n\tbgColor= color(\"#f7eee6\")\n\ttexture= createGraphics(w, w)\n\n\ttexture.pixelDensity(1)\n\t\n\ttexture.loadPixels()\n\tfor(let x=0; xx++){\n\t\tfor(let y=0; yy+=floor(random(1, 3))){\n\tvar index = (x + y * width)*4;\n\t\tlet avalue= map(noise(x/10, y/100), 0, 1, 0, 100)\n\t  texture.pixels[index+0]= 247;\n    texture.pixels[index+1]= 238;\n    texture.pixels[index+2]= ",
            image: "images/issue1/losing-track/7.png",
          },
        },
        {
          title: "page_76",
          index: 1,
          params: {
            copy: "230;\n    texture.pixels[index+3]= avalue;\t\t\n\t\t}\n\t}\ntexture.updatePixels()\n\t\n\t\n\t\n\tbackground(bgColor);\n\tbgColor.setAlpha(50)\n\tsimplex= new OpenSimplexNoise(Date.now())\n\tstrokeCap(SQUARE)\n}\n\nfunction draw() {\n\tfor(let j=0; j&lt;150; j++){\n\t\n\tfor(let i=0; i&lt;12; i++){\n\t\tlet r= map(j, 0, 150, 0, w/4)\n\t\n\tblendMode(BURN)\n\t\t\n\t\tpblock(w/2+randomGaussian(0, r), w/2+randomGaussian(0, r))\n\t\t\n\t}\t\n\t\t",
            image: "",
          },
        },
        {
          title: "page_77",
          index: 2,
          params: {
            copy: "imageMode(CENTER)\n\t\tblendMode(BLEND)\n\t\tlet rT= floor(random(1, 5))\n\t\tpush()\n\t\ttranslate(w/2, w/2)\n\t\trotate(PI/2*rT)\n\t\timage(texture, 0, 0)\n\t\tpop()\n\t}\n\tnoLoop()\n}\n\nfunction pblock(x, y){\n\tnoFill()\n\tlet chooser= random()\n\t//d=1= horizontal, d=2= verticle\n\tif(chooser&gt;0.5){\n\t\td=1\n\t} else{\n\t\td=2\n\t}\n\tlet color= random(colors)\n\tlet noStrokes= floor(random(10, 25))\n\t",
            image: "",
          },
        },
        {
          title: "page_78",
          index: 3,
          params: {
            copy: "push()\n\ttranslate(x, y)\n\tstroke(color)\n\tstrokeWeight(w/100)\n\tfor(let i=0; ii++){\n\t\tif(d==1){\n\t\n\t\t\tlet yed=random(-w/20, +w/20)\n\t\t\tlet xfrom= map(noise(x/10, y/10, i), 0, 1, -w/15, 0)\n\t\t\tlet xto= map(noise(x/10, y/10, i+10), 0, 1, 0, w/15)\n\t\t\tbeginShape()\n\t\t\tfor(let xer=xfrom; xerxer+=5){\n\t\t\t\tyoff= map(simplex.noise3D(xer/30, x, y), -1, 1, -w/100, w/100)\n\t\t\t\tvertex(xer, yed+yoff)\n\t\t\t}\n\t\t\tendShape()\n\t\t}\n\telse{\n\t\tlet xed= random(-w/20, +w/20)\n\t  let yfrom= map(noise(x/10, y/10, i), 0, 1, -w/15, 0)\n\t\t\tlet yto= map(noise(x/10, y/10, i+10), 0, 1, 0, w/15)\n\t\t\tbeginShape()\n\t\t\tfor(let yer=yfrom; yeryer+=5){\n\t\t\t\txoff= map(noise(yer/30, x, y), 0, 1, -w/100, w/100)\n\t\t\t\tvertex(xed+xoff, yer)\n\t\t\t",
            image: "images/issue1/losing-track/11.png",
          },
        },
        {
          title: "page_79",
          index: 4,
          params: {
            copy: "}\n\t\t\tendShape()\n\t}\t\n\t\t\n\t}\n\tpop()\n\t\n}",
            image: "images/issue1/losing-track/10.png",
          },
        },
      ],
    },
    art6: {
      art: "HDD",
      id: "art6",
      params: {
        seed: 106,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/hdd/1.png",
        "images/issue1/hdd/2.png",
        "images/issue1/hdd/3.png",
        "images/issue1/hdd/4.png",
        "images/issue1/hdd/5.png",
        "images/issue1/hdd/6.png",
        "images/issue1/hdd/7.png",
        "images/issue1/hdd/8.png",
        "images/issue1/hdd/9.png",
        "images/issue1/hdd/10.png",
        "images/issue1/hdd/11.png",
        "images/issue1/hdd/12.png",
        "images/issue1/hdd/13.png",
        "images/issue1/hdd/14.png",
        "images/issue1/hdd/15.png",
        "images/issue1/hdd/16.png",
        "images/issue1/hdd/17.png",
      ],
      pages: [
        {
          title: "page_82",
          index: 0,
          params: {
            copy: "//Uses p5.grain:\n//{@link https://github.com/meezwhite/p5.grain}\n\n// Copyright (c) 2023-present meezwhite. All rights reserved.\n// Twitter: @meezwhite\n// Website: https://meezwhite.xyz\n\nconst PD = 2;\nconst IS_4K = true;\nconst DRAW_INTERSECTION_POINTS = true;\nconst W = 1080;\nconst HW = Math.ceil(W/2);\nconst H = 1920;\nconst QH = Math.ceil(H/4);\nconst TH = Math.ceil(H/10);\nconst HH = Math.ceil(H/2);\n",
            image: "images/issue1/hdd/1.png",
          },
        },
        {
          title: "page_83",
          index: 1,
          params: {
            copy: "const M = Math.ceil(W*0.09);\nconst CD = Math.ceil(W-M*2);\nconst CR = CD/2;\nconst RW = Math.ceil(CD*0.75);\nconst HRW = RW/2;\nconst HHRW = HRW/2;\nconst RM = (W-RW)/2;\nconst DBG = false;\nconst COL = [\n        ['#282828', '#F76951', '#F7AD72', '#FCF3DD', '#2D4F54', '#7e9692'],\n        ['#282828', '#2D4F54', '#FCF3DD'],\n        //['#85aeff', '#1f34ab', '#0478ff', '#0f195a'],\n        //['#ed225d', '#C91C4D', '#A1163E', '#78112E'],\n        //['#b6dc9f', '#98c800', '#146f43'],\n        //['#8ce4df', '#2d9e97', '#104b58'],\n        //['#85aeff', '#1f34ab', '#0478ff', '#ed225d', '#b6dc9f', '#98c800', '#146f43', '#8ce4df', '#2d9e97', '#104b58'],\n];\nconst MIN_RR = 2;\nconst MAX_RR = 3;\nconst MIN_RR_2 = 1;\nconst MAX_RR_2 = 2;\nlet PIX;\nlet RS = 0;\nlet leftIntersectionPoints, middleIntersectionPoints, rightIntersectionPoints;\nlet lipIx = 0, mipIx = 0, ripIx = 0;\nlet intersectionCircles;\n\nfunction setup() ",
            image: "",
          },
        },
        {
          title: "page_84",
          index: 2,
          params: {
            copy: "{\n        createCanvas(W, H);\n        pixelDensity(PD);\n        blendMode(DIFFERENCE);\n        background('#282828');\n        noStroke();\n        \n        leftIntersectionPoints   = [];\n        middleIntersectionPoints = [];\n        rightIntersectionPoints  = [];\n        lipIx = 0;\n        mipIx = 0;\n        ripIx = 0;\n        intersectionCircles = [];\n\n        RS = round(random(0, 1e9));\n        //RS = 999999999;\n        randomSeed(RS);\n        console.debug(`randomSeed: ${RS}`);\n        \n        p5grain.setup();\n        \n        if (DRAW_INTERSECTION_POINTS) ",
            image: "images/issue1/hdd/17.png",
          },
        },
        {
          title: "page_85",
          index: 3,
          params: {
            copy: "{\n                // calculate and draw intersection points\n                const rectX = HW-HRW;\n                const intersections1 = calculateIntersections(HW, HH, CR, rectX, HRW);\n                const intersections2 = calculateIntersections(HW, HH, CR, rectX+HRW, HRW).slice(2);\n                \n                leftIntersectionPoints = [\n                        createVector(intersections1[0].x, 0),\n                        createVector(intersections1[0].x, height),\n                        createVector(intersections1[0].x, round(intersections1[0].y)),\n                        createVector(intersections1[1].x, round(intersections1[1].y)),\n                ];\n                middleIntersectionPoints = [\n                        createVector(HW, 0),\n                        createVector(HW, height),\n                        createVector(intersections1[2].x, round(intersections1[2].y)),\n                        createVector(intersections1[3].x, round(intersections1[3].y)),\n                ",
            image: "",
          },
        },
        {
          title: "page_86",
          index: 4,
          params: {
            copy: "];\n                //middleIntersectionPoints.push(createVector(HW, HH));\n                rightIntersectionPoints = [\n                        createVector(intersections2[0].x, 0),\n                        createVector(intersections2[0].x, height),\n                        createVector(intersections2[0].x, round(intersections2[0].y)),\n                        createVector(intersections2[1].x, round(intersections2[1].y)),\n                ];\n\n                // draw intersection points (left + middle)\n                let left_x, left_y_top, left_y_bottom, left_dist;\n                let left_y_outside_top_dist, left_y_outside_bottom_dist;\n                let middle_x, middle_y_top, middle_y_bottom, middle_dist;\n                let middle_y_outside_top_dist, middle_y_outside_bottom_dist;\n                //fill(COL[PIX][floor(random(0, COL[PIX].length))]);\n                for (let i = 0; i &lt; intersections1.length; i++) {\n                        let cd, cr;\n                        if (! IS_4K) {\n                                cd = floor(random(PD&gt;1?16:64, PD&gt;1?64:256));\n                                //circle(intersections1[i].x, intersections1[i].y, cd);\n                                intersectionCircles.push([intersections1[i].x, intersections1[i].y, cd]);\n                        } else {\n                                ",
            image: "",
          },
        },
        {
          title: "page_87",
          index: 5,
          params: {
            copy: "cd = floor(random(48, 196));\n                                //circle(intersections1[i].x, intersections1[i].y, cd);\n                                intersectionCircles.push([intersections1[i].x, intersections1[i].y, cd]);\n                        }\n                        cr = cd/2;\n                        const y_less = intersections1[i].y-cr;\n                        const y_more = intersections1[i].y+cr;\n                        if (i === 0) {\n                                left_y_outside_top_dist = y_less;\n                        } else if (i === 1) {\n                                left_y_outside_bottom_dist = height - y_more;\n                        } else if (i === 2) {\n                                middle_y_outside_top_dist = y_less;\n                        } else if (i === 3) {\n                                middle_y_outside_bottom_dist ",
            image: "images/issue1/hdd/4.png",
          },
        },
        {
          title: "page_88",
          index: 6,
          params: {
            copy: "= height - y_more;\n                        }\n                        if (i === 0 || i === 1) {\n                                leftIntersectionPoints.push(createVector(intersections1[i].x, round(y_less)));\n                                leftIntersectionPoints.push(createVector(intersections1[i].x, round(y_more)));        \n                        } else if (i === 2 || i === 3) {\n                                middleIntersectionPoints.push(createVector(intersections1[i].x, round(y_less)));\n                                middleIntersectionPoints.push(createVector(intersections1[i].x, round(y_more)));        \n                        }\n                        if (i === 0 || i === 1) {\n                                if (left_x === undefined) ",
            image: "images/issue1/hdd/6.png",
          },
        },
        {
          title: "page_89",
          index: 7,
          params: {
            copy: "{\n                                        left_x = intersections1[i].x;        \n                                }\n                                if (i === 0) {\n                                        left_y_top = y_more;\n                                } else if (i === 1) {\n                                        left_y_bottom = y_less;\n                                }\n                                const circlesIntersectionPoints = calculateCirclesIntersections(\n                                        HW, HH, CR, intersections1[i].x, intersections1[i].y, cr\n                                );\n                                for (let j = 0; j &lt; circlesIntersectionPoints.length; j++) {\n                                        if (\n                                                (i === 0 &amp;&amp; circlesIntersectionPoints[j].y &lt;= intersections1[i].y) ||\n                                                (i === 1 &amp;&amp; circlesIntersectionPoints[j].y &gt;= intersections1[i].y)\n                                        ) {\n                                                leftIntersectionPoints.push(createVector(left_x, round(circlesIntersectionPoints[j].y)));\n                                                // intersections1[2].x -&gt; middle_x\n                                                //middleIntersectionPoints.push(createVector(intersections1[2].x, round(circlesIntersectionPoints[j].y)));\n                                        }\n                                }\n                        } else if (i === 2 || i === 3) {\n                                if (middle_x === undefined) ",
            image: "images/issue1/hdd/11.png",
          },
        },
        {
          title: "page_90",
          index: 8,
          params: {
            copy: "{\n                                        middle_x = intersections1[i].x;\n                                }\n                                if (i === 2) {\n                                        middle_y_top = y_more;\n                                } else if (i === 3) {\n                                        middle_y_bottom = y_less;\n                                }\n                        }\n                }\n                // left intersections\n                left_y_dist = left_y_bottom - left_y_top;\n                const left_y_dist_g = left_y_dist*0.382;\n                leftIntersectionPoints.push(createVector(left_x, round(left_y_top+left_y_dist_g)));\n                leftIntersectionPoints.push(createVector(left_x, round(left_y_top+left_y_dist*0.5)));\n                leftIntersectionPoints.push(createVector(left_x, round(left_y_bottom-left_y_dist_g)));\n                // left top outside\n                leftIntersectionPoints.push(createVector(left_x, round(left_y_outside_top_dist*0.382)));\n                leftIntersectionPoints.push(createVector(left_x, ",
            image: "",
          },
        },
        {
          title: "page_91",
          index: 9,
          params: {
            copy: "round(left_y_outside_top_dist*0.5)));\n                leftIntersectionPoints.push(createVector(left_x, round(left_y_outside_top_dist*0.618)));\n                // left bottom outside\n                leftIntersectionPoints.push(createVector(left_x, round(height - left_y_outside_bottom_dist*0.382)));\n                leftIntersectionPoints.push(createVector(left_x, round(height - left_y_outside_bottom_dist*0.5)));\n                ",
            image: "images/issue1/hdd/14.png",
          },
        },
        {
          title: "page_92",
          index: 10,
          params: {
            copy: "leftIntersectionPoints.push(createVector(left_x, round(height - left_y_outside_bottom_dist*0.618)));\n                // middle intersections\n                middle_y_dist = middle_y_bottom - middle_y_top;\n                const middle_y_dist_g = middle_y_dist*0.382;\n                middleIntersectionPoints.push(createVector(middle_x, round(middle_y_top+middle_y_dist_g)));\n                middleIntersectionPoints.push(createVector(middle_x, round(middle_y_top+middle_y_dist*0.5)));\n                middleIntersectionPoints.push(createVector(middle_x, round(middle_y_bottom-middle_y_dist_g)));\n                // middle top outside\n                middleIntersectionPoints.push(createVector(middle_x, round(middle_y_outside_top_dist*0.382)));\n                middleIntersectionPoints.push(createVector(middle_x, round(middle_y_outside_top_dist*0.5)));\n                middleIntersectionPoints.push(createVector(middle_x, round(middle_y_outside_top_dist*0.618)));\n                // middle bottom ",
            image: "",
          },
        },
        {
          title: "page_93",
          index: 11,
          params: {
            copy: "",
            image: "images/issue1/hdd/11.png",
          },
        },
        {
          title: "page_94",
          index: 12,
          params: {
            copy: "outside\n                middleIntersectionPoints.push(createVector(middle_x, round(height - middle_y_outside_bottom_dist*0.382)));\n                middleIntersectionPoints.push(createVector(middle_x, round(height - middle_y_outside_bottom_dist*0.5)));\n                middleIntersectionPoints.push(createVector(middle_x, round(height - middle_y_outside_bottom_dist*0.618)));\n                \n                // draw intersection points ",
            image: "images/issue1/hdd/4.png",
          },
        },
        {
          title: "page_95",
          index: 13,
          params: {
            copy: "(right)\n                let right_x, right_y_top, right_y_bottom, right_dist;\n                let right_y_outside_top_dist, right_y_outside_bottom_dist;\n                for (let i = 0; i &lt; intersections2.length; i++) {\n                        let cd;\n                        if (! IS_4K) {\n                                cd = floor(random(PD&gt;1?16:64, PD&gt;1?64:256));\n                                //circle(intersections2[i].x, intersections2[i].y, cd);\n                                intersectionCircles.push([intersections2[i].x, intersections2[i].y, cd]);\n                        } else {\n                                cd = floor(random(48, 196));\n                                //circle(intersections2[i].x, intersections2[i].y, cd);\n                                intersectionCircles.push([intersections2[i].x, intersections2[i].y, cd]);\n                        }\n                        cr = cd/2;\n                        const y_less = ",
            image: "",
          },
        },
        {
          title: "page_96",
          index: 14,
          params: {
            copy: "intersections2[i].y-cr;\n                        const y_more = intersections2[i].y+cr;\n                        if (i === 0) {\n                                right_y_outside_top_dist = y_less;\n                        } else if (i === ",
            image: "images/issue1/hdd/15.png",
          },
        },
        {
          title: "page_97",
          index: 15,
          params: {
            copy: "1) {\n                                right_y_outside_bottom_dist = height - y_more;\n                        }\n                        //if (i === 0 || i === 1) {\n                                rightIntersectionPoints.push(createVector(intersections2[i].x, round(y_less)));\n                                rightIntersectionPoints.push(createVector(intersections2[i].x, round(y_more)));\n                        //}\n                        if (i === 0 || i === 1) {\n                                if (right_x === undefined) {\n                                        right_x = intersections2[i].x;        \n                                }\n                                if (i === 0) {\n                                        right_y_top = y_more;\n                                } else if (i === 1) {\n                                        right_y_bottom = y_less;\n                                }\n                                const circlesIntersectionPoints = calculateCirclesIntersections(\n                                        HW, HH, CR, intersections2[i].x, intersections2[i].y, cr\n                                );\n                                for (let j = 0; j &lt; circlesIntersectionPoints.length; j++) {\n                                        if (\n                                                (i === 0 &amp;&amp; circlesIntersectionPoints[j].y &lt;= intersections2[i].y) ||\n                                                (i === 1 &amp;&amp; ",
            image: "",
          },
        },
        {
          title: "page_98",
          index: 16,
          params: {
            copy: "circlesIntersectionPoints[j].y &gt;= intersections2[i].y)\n                                        ) {\n                                                rightIntersectionPoints.push(createVector(right_x, round(circlesIntersectionPoints[j].y)));\n                                                //middleIntersectionPoints.push(createVector(middle_x, round(circlesIntersectionPoints[j].y)));\n                                        }\n                                }\n                        }\n                }\n                // right intersections\n                right_y_dist = right_y_bottom - right_y_top;\n                const right_y_dist_g = right_y_dist*0.382;\n                rightIntersectionPoints.push(createVector(right_x, round(right_y_top+right_y_dist_g)));\n                rightIntersectionPoints.push(createVector(right_x, round(right_y_top+right_y_dist*0.5)));\n                rightIntersectionPoints.push(createVector(right_x, round(right_y_bottom-right_y_dist_g)));\n                // right top outside\n                rightIntersectionPoints.push(createVector(right_x, ",
            image: "",
          },
        },
        {
          title: "page_99",
          index: 17,
          params: {
            copy: "round(right_y_outside_top_dist*0.382)));\n                rightIntersectionPoints.push(createVector(right_x, round(right_y_outside_top_dist*0.5)));\n                rightIntersectionPoints.push(createVector(right_x, round(right_y_outside_top_dist*0.618)));\n                // right bottom outside\n                rightIntersectionPoints.push(createVector(right_x, round(height - right_y_outside_bottom_dist*0.382)));\n                rightIntersectionPoints.push(createVector(right_x, round(height - right_y_outside_bottom_dist*0.5)));\n                rightIntersectionPoints.push(createVector(right_x, round(height - right_y_outside_bottom_dist*0.618)));\n        }\n        \n        // sort intersection points by y-values\n        leftIntersectionPoints.sort((a, b) =&gt; a.y - b.y);\n        middleIntersectionPoints.sort((a, b) =&gt; a.y - b.y);\n        rightIntersectionPoints.sort((a, b) =&gt; a.y - b.y);\n        \n        fill('#F2E0CD');\n        rect(HW-HRW, 0, RW, height);\n        \n        fill('#F76951');\n        ",
            image: "images/issue1/hdd/12.png",
          },
        },
        {
          title: "page_100",
          index: 18,
          params: {
            copy: "arc(HW, HH, CD, CD, radians(90), radians(270));\n        fill('#F6E3D0');\n        arc(HW, HH, CD, CD, radians(270), radians(90));\n        \n        PIX = floor(random(0, COL.length));\n        \n        console.debug(\n                leftIntersectionPoints.length,\n                middleIntersectionPoints.length,\n                rightIntersectionPoints.length);\n        \n        leftRR(HW-HRW);\n        lipIx = 0;\n        mipIx = 0;\n        ripIx = 0;\n        rightRR(HW);\n        \n        fill(COL[PIX][floor(random(0, COL[PIX].length))]);\n        for (let i = 0; i &lt; intersectionCircles.length; i++) {\n                const cX = intersectionCircles[i][0];\n                const cY = intersectionCircles[i][1];\n                const cD = intersectionCircles[i][2];\n                circle(cX, cY, cD);\n        }\n        \n        blendMode(BLEND);\n        \n        if (DBG) ",
            image: "",
          },
        },
        {
          title: "page_101",
          index: 19,
          params: {
            copy: "{\n                ",
            image: "images/issue1/hdd/16.png",
          },
        },
        {
          title: "page_102",
          index: 20,
          params: {
            copy: "fill('#f00');\n                for (let i = 0; i &lt; leftIntersectionPoints.length; i++) {\n                        circle(leftIntersectionPoints[i].x, leftIntersectionPoints[i].y, 10);\n                }\n                for (let i = 0; i &lt; middleIntersectionPoints.length; i++) {\n                        circle(middleIntersectionPoints[i].x, middleIntersectionPoints[i].y, 10);\n                }\n                for (let i = 0; i &lt; rightIntersectionPoints.length; i++) {\n                        circle(rightIntersectionPoints[i].x, rightIntersectionPoints[i].y, 10);\n                }\n        }\n        \n        for (let i = 0; i &lt; 1000; i++) {\n                const colIx = floor(random(0, COL[PIX].length));\n                const col = color(COL[PIX][colIx]);\n                col.setAlpha(3);\n                fill(col);\n                const cx = floor(random(0, width));\n                const cy = floor(random(0, height));\n                let cd = floor(random(10, PD&gt;1?200:800));\n                cd = ! IS_4K ? cd : 256;\n                circle(cx, cy, cd);\n        }\n        fill('#ffffff08');\n        for (let i = 0; i &lt; 10000; i++) {\n                const cx = floor(random(0, width));\n                const cy = floor(random(0, height));\n                const cd = floor(random(0, 4));\n                circle(cx, cy, ",
            image: "",
          },
        },
        {
          title: "page_103",
          index: 21,
          params: {
            copy: "cd);\n        ",
            image: "images/issue1/hdd/3.png",
          },
        },
        {
          title: "page_104",
          index: 22,
          params: {
            copy: "}\n        fill('#ffffff0f');\n        for (let i = 0; i &lt; 10000; i++) {\n                const cx = floor(random(0, width));\n                const cy = floor(random(0, height));\n                const cd = floor(random(1, 2));\n                circle(cx, cy, cd);\n        }\n        fill('#f00');\n        for (let i = 0; i &lt; floor(random(32, 64)); i++) {\n                const px = floor(random(0, width));\n                const py = floor(random(0, height));\n                let ps = PD&gt;1?1:2;\n                ps = ! IS_4K ? ps : 1;\n                rect(px, py, ps, ps);\n        }\n        let grainAmount = PD&gt;1?16:19;\n        grainAmount = ! IS_4K ? grainAmount : 19;\n        p5grain.granulateSimple(grainAmount);\n}\n\nfunction leftRR(rx) {\n        /*let nextY = 0;\n        while (nextY &lt;= height) {\n                const rh = floor(random(QH, TH));\n                const colIx = floor(random(0, COL[PIX].length));\n                fill(COL[PIX][colIx]);\n                rect(rx, nextY, HRW, rh);\n                nextY += rh;\n        ",
            image: "",
          },
        },
        {
          title: "page_105",
          index: 23,
          params: {
            copy: "}*/\n        const last_lipIx = leftIntersectionPoints.length-1;\n        const last_mipIx = middleIntersectionPoints.length-1;\n        //const last_ripIx = rightIntersectionPoints.length-1;\n        let is_lip_turn = true;\n        let currY = 0;\n        while (currY &lt; height) {\n                if ",
            image: "images/issue1/hdd/3.png",
          },
        },
        {
          title: "page_106",
          index: 24,
          params: {
            copy: "(is_lip_turn) {\n                        const inc_mipIx = floor(random(MIN_RR, MAX_RR));\n                        if ((mipIx + inc_mipIx) &lt;= last_mipIx) {\n                                mipIx += inc_mipIx;\n                        } else {\n                                mipIx = last_mipIx;\n                        }\n                        const rh = middleIntersectionPoints[mipIx].y - leftIntersectionPoints[lipIx].y;\n                        const colIx = floor(random(0, COL[PIX].length));\n                        fill(COL[PIX][colIx]);\n                        rect(rx, currY, HRW, rh);\n                        currY += rh;\n                        is_lip_turn = false;\n                }\n                else { // is_mip_turn\n                        const inc_lipIx = floor(random(MIN_RR, MAX_RR));\n                        if ((lipIx + inc_lipIx) &lt;= last_lipIx) {\n                                lipIx += inc_lipIx;\n                        } else {\n                                lipIx = last_lipIx;\n                        }\n                        const rh = leftIntersectionPoints[lipIx].y - ",
            image: "",
          },
        },
        {
          title: "page_107",
          index: 25,
          params: {
            copy: "middleIntersectionPoints[mipIx].y;\n                        const colIx = floor(random(0, COL[PIX].length));\n                        fill(COL[PIX][colIx]);\n                        rect(rx, currY, HRW, rh);\n                        currY += rh;\n                        is_lip_turn = true;\n                }\n        }\n}\n\nfunction rightRR(rx) {\n        const last_mipIx = middleIntersectionPoints.length-1;\n        const last_ripIx = rightIntersectionPoints.length-1;\n        let is_mip_turn = ",
            image: "",
          },
        },
        {
          title: "page_108",
          index: 26,
          params: {
            copy: "true;\n        let currY = 0;\n        while (currY &lt; height) {\n                if (is_mip_turn) {\n                        const inc_ripIx = floor(random(MIN_RR_2, MAX_RR_2));\n                        if ((ripIx + inc_ripIx) &lt;= last_ripIx) {\n                                ripIx += inc_ripIx;\n                        } else {\n                                ripIx = last_ripIx;\n                        }\n                        const rh = rightIntersectionPoints[ripIx].y - middleIntersectionPoints[mipIx].y;\n                        const colIx = floor(random(0, COL[PIX].length));\n                        fill(COL[PIX][colIx]);\n                        rect(rx, currY, HRW, rh);\n                        currY += rh;\n                        is_mip_turn = false;\n                }\n                ",
            image: "images/issue1/hdd/14.png",
          },
        },
        {
          title: "page_109",
          index: 27,
          params: {
            copy: "",
            image: "images/issue1/hdd/5.png",
          },
        },
        {
          title: "page_110",
          index: 28,
          params: {
            copy: "else { // is_rip_turn\n                        const inc_mipIx = floor(random(MIN_RR_2, MAX_RR_2));\n                        if ((mipIx + inc_mipIx) &lt;= last_mipIx) {\n                                mipIx += inc_mipIx;\n                        } else {\n                                mipIx = last_mipIx;\n                        }\n                        const rh = middleIntersectionPoints[mipIx].y - leftIntersectionPoints[lipIx].y;\n                        const colIx = floor(random(0, COL[PIX].length));\n                        fill(COL[PIX][colIx]);\n                        rect(rx, currY, HRW, rh);\n                        currY += rh;\n                        is_mip_turn = ",
            image: "",
          },
        },
        {
          title: "page_111",
          index: 29,
          params: {
            copy: "true;\n                }\n        }\n}\n\nfunction keyPressed() {\n        switch (keyCode) {\n                //case 32: // [SPACE]\n                case 82: // [R]\n                        setup();\n                        break;\n                        \n                case 83: // [S]\n                        save(`export-${RS}.png`);\n                        break;\n                        \n                default:\n                        console.debug('keyCode:', keyCode);\n                        break;\n        }\n}\n\nfunction calculateIntersections(circleX, circleY, circleRadius, rectX, rectWidth) {\n  const intersections = [];\n  // left side intersection points\n  const leftIntersectY1 = circleY - sqrt(circleRadius * circleRadius - (rectX - circleX) * (rectX - circleX));\n  const leftIntersectY2 = circleY + sqrt(circleRadius * circleRadius - (rectX - circleX) * (rectX - circleX));\n  intersections.push(createVector(rectX, ",
            image: "",
          },
        },
        {
          title: "page_112",
          index: 30,
          params: {
            copy: "leftIntersectY1));\n  intersections.push(createVector(rectX, leftIntersectY2));\n  // right side intersection points\n  const rightIntersectY1 = circleY - sqrt(circleRadius * circleRadius - (rectX + rectWidth - circleX) * (rectX + rectWidth - circleX));\n  const rightIntersectY2 = circleY + sqrt(circleRadius * circleRadius - (rectX + rectWidth - circleX) * (rectX + rectWidth - circleX));\n  intersections.push(createVector(rectX + rectWidth, rightIntersectY1));\n  intersections.push(createVector(rectX + rectWidth, rightIntersectY2));\n  return intersections;\n}\n\nfunction calculateCirclesIntersections(x1, y1, r1, x2, y2, r2) {\n  const points = [];\n  // calculate the distance between the circle centers\n  const d = dist(x1, y1, x2, y2);\n  // check if the circles intersect\n  if (d &lt; r1 + r2 &amp;&amp; d &gt; abs(r1 - r2)) {\n    // calculate the intersection points\n    const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);\n    const h = sqrt(r1 * r1 - a * a);\n    // calculate the coordinates of the intersection points\n    const x3 = x1 + (a * (x2 - x1)) / d;\n    const y3 = y1 + (a * (y2 - y1)) / d;\n    const ",
            image: "images/issue1/hdd/15.png",
          },
        },
        {
          title: "page_113",
          index: 31,
          params: {
            copy: "intersectionPoint1 = createVector(\n      x3 + (h * (y2 - y1)) / d,\n      y3 - (h * (x2 - x1)) / d\n    );\n    const intersectionPoint2 = createVector(\n      x3 - (h * (y2 - y1)) / d,\n      y3 + (h * (x2 - x1)) / d\n    );\n    points.push(intersectionPoint1, intersectionPoint2);\n  }\n  return points;\n}",
            image: "images/issue1/hdd/16.png",
          },
        },
      ],
    },
    art7: {
      art: "What am I Thinking About",
      id: "art7",
      params: {
        seed: 107,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/what-am-i-thinking-about/1.png",
        "images/issue1/what-am-i-thinking-about/2.png",
        "images/issue1/what-am-i-thinking-about/3.png",
        "images/issue1/what-am-i-thinking-about/4.png",
        "images/issue1/what-am-i-thinking-about/5.png",
        "images/issue1/what-am-i-thinking-about/6.png",
        "images/issue1/what-am-i-thinking-about/7.png",
        "images/issue1/what-am-i-thinking-about/8.png",
        "images/issue1/what-am-i-thinking-about/9.png",
        "images/issue1/what-am-i-thinking-about/10.png",
        "images/issue1/what-am-i-thinking-about/11.png",
        "images/issue1/what-am-i-thinking-about/12.png",
        "images/issue1/what-am-i-thinking-about/13.png",
        "images/issue1/what-am-i-thinking-about/14.png",
        "images/issue1/what-am-i-thinking-about/15.png",
        "images/issue1/what-am-i-thinking-about/16.png",
        "images/issue1/what-am-i-thinking-about/17.png",
        "images/issue1/what-am-i-thinking-about/18.png",
        "images/issue1/what-am-i-thinking-about/19.png",
        "images/issue1/what-am-i-thinking-about/20.png",
        "images/issue1/what-am-i-thinking-about/21.png",
        "images/issue1/what-am-i-thinking-about/22.png",
        "images/issue1/what-am-i-thinking-about/23.png",
        "images/issue1/what-am-i-thinking-about/24.png",
        "images/issue1/what-am-i-thinking-about/25.png",
      ],
      pages: [
        {
          title: "page_117",
          index: 0,
          params: {
            copy: " //sketch \n\nlet ito_num;\n let seed;\n let mySize, margin;\n let tile_x, tile_y;\n let tile_x_size, tile_y_size;\n\n let color_set = [];\n let palette1, palette2, color_bg;\n let plus;\n\n let glGraphic;\n\n function preload() {\n         theShader = new p5.Shader(this.renderer, vert, frag)\n }\n\n function setup() {\n         seed = Math.random() * 9999\n         // pixelDensity(3);\n         frameRate(25);\n         randomSeed(seed);\n         angleMode(DEGREES);\n         mySize = min(windowWidth, windowHeight) * 0.9;\n         margin = mySize / 100;\n         createCanvas(mySize / 16 * 11, mySize);\n         webGLCanvas = createGraphics(width, height, WEBGL);\n         ",
            image: "images/issue1/what-am-i-thinking-about/8.png",
          },
        },
        {
          title: "page_118",
          index: 1,
          params: {
            copy: "glGraphic = createGraphics(width, height);\n         palette1 = random(colorScheme).colors.concat();\n         palette2 = ",
            image: "images/issue1/what-am-i-thinking-about/17.png",
          },
        },
        {
          title: "page_119",
          index: 2,
          params: {
            copy: "random(colorScheme).colors.concat();\n         color_bg = random(bgcolor);\n         background(color_bg);\n         ito_num = int(random(60, 40));\n         color_set[0] = random(palette1);\n         color_set[1] = random(palette2);\n         color_set[2] = random(palette1);\n         color_set[3] = random(palette2);\n         color_set[4] = random(palette1);\n\n         color1 = random(color_set);\n         color2 = random(color_set);\n         plus = 0;\n         makeFilter();\n }\n\n function draw() {\n\n         randomSeed(seed);\n         noiseSeed(seed);\n\n         webGLCanvas.shader(theShader);\n         theShader.setUniform('u_resolution', [width / width, height / height]);\n         theShader.setUniform('u_time', millis() / 10);\n         theShader.setUniform(\"u_frame\", frameCount / 1.0);\n         theShader.setUniform('u_tex', ",
            image: "images/issue1/what-am-i-thinking-about/9.png",
          },
        },
        {
          title: "page_120",
          index: 3,
          params: {
            copy: "glGraphic);\n\n         webGLCanvas.clear();\n         webGLCanvas.rect(-width / 2, -height / 2, width, height);\n\n         let point_num = int(random(3, ",
            image: "images/issue1/what-am-i-thinking-about/14.png",
          },
        },
        {
          title: "page_121",
          index: 4,
          params: {
            copy: "6));\n\n         glGraphic.push();\n         glGraphic.translate(width / 2, height / 2);\n         glGraphic.rotate(random([-1, 1]) * frameCount / random(300, 500));\n         for (let i = 0; i &lt; ito_num; i++) {\n                 glGraphic.push();\n                 glGraphic.translate(random(-width / 4, width / 1), plus * 1 + random(-height / 2, height / 2));\n                 // glGraphic.rotate(frameCount/300);//\n                 glGraphic.noFill();\n                 glGraphic.stroke(random(color_set));\n                 glGraphic.strokeWeight(random(2.5, 1) + plus / 100);\n                 glGraphic.drawingContext.shadowColor = color_bg;\n                 glGraphic.drawingContext.shadowOffsetX = plus;\n                 glGraphic.drawingContext.shadowOffsetY = plus;\n                 glGraphic.drawingContext.shadowBlur = 0;\n                 glGraphic.drawingContext.setLineDash([mySize * 0.25, mySize * 1, mySize * 0.5, mySize * 2]);\n                 glGraphic.beginShape();\n\n                 for (let x = -mySize * random(0.25, 0.75); x &lt; mySize * random(0.25, 0.75); x += mySize / point_num) {\n                         let n = noise(x * 0.1, i * 0.1, frameCount * 0.01);\n                         let y = map(n, 0, 1, -mySize * random(0.05, 0.35), mySize * random(0.05, 0.35));\n                         glGraphic.curveVertex(x + 2 * sin(random(0.5, 1) * plus / 100 + x * ",
            image: "",
          },
        },
        {
          title: "page_122",
          index: 5,
          params: {
            copy: 'sin(random(1, 2) * plus / 100 - 0.5) + 1.5), y - plus / 1);\n                 }\n                 glGraphic.endShape();\n                 glGraphic.beginShape();\n                 for (let x = -mySize * random(0.25, 0.75); x &lt; mySize * random(0.25, 0.75); x += mySize / point_num) {\n                         let n = noise(x * 0.1, i * 0.1, frameCount * 0.01);\n                         let y = map(n, 0, 1, -mySize * random(0.05, 0.35), mySize * random(0.05, 0.35));\n                         glGraphic.curveVertex(-x - 2 * sin(random(0.5, 1) * plus / 100 - x * sin(random(1, 2) * plus / 100 - 0.5) + 1.5), y - plus / 1);\n                 }\n                 glGraphic.endShape();\n                 glGraphic.pop();\n         }\n\n         for (let i = 0; i &lt; ito_num; i++) {\n                 glGraphic.push();\n                 glGraphic.translate(2 * sin(random(0.5, 1) * plus) + random(-width / 4, width / 1), plus * 1 + random(-height / 2, height / 2));\n                 glGraphic.noFill();\n                 glGraphic.stroke(str(random(color_set)) + "40");\n                 glGraphic.strokeWeight(random(2.5, 1) + plus / 100);\n                 glGraphic.drawingContext.shadowColor = color_bg;\n                 glGraphic.drawingContext.shadowOffsetX = plus;\n                 glGraphic.drawingContext.shadowOffsetY = plus;\n                 glGraphic.drawingContext.shadowBlur = 0;\n                 glGraphic.drawingContext.setLineDash([mySize * 0.01, mySize * 0.5, ',
            image: "images/issue1/what-am-i-thinking-about/24.png",
          },
        },
        {
          title: "page_123",
          index: 6,
          params: {
            copy: "",
            image: "images/issue1/what-am-i-thinking-about/12.png",
          },
        },
        {
          title: "page_124",
          index: 7,
          params: {
            copy: 'mySize * 0.01, mySize * 0.2]);\n                 glGraphic.beginShape();\n                 for (let x = -mySize * random(0.25, 0.75); x &lt; mySize * random(0.25, 0.75); x += mySize / point_num) {\n                         let n = noise(x * 0.1, i * 0.1, frameCount * 0.01);\n                         let y = map(n, 0, 1, -mySize * random(0.05, 0.35), mySize * random(0.05, 0.35));\n                         glGraphic.vertex(x - 2 * sin(random(0.5, 1) * plus / 100 - x * sin(random(1, 2) * plus / 100 - 0.5) + 1.5), y + plus / 1);\n                 }\n                 glGraphic.endShape();\n                 glGraphic.pop();\n         }\n\n         glGraphic.pop();\n         image(webGLCanvas, 0, 0);\n         plus += random(2, 1) * random(0.01, 0.05);\n\n         if (frameCount &gt; random([250])) {\n                 noLoop();\n                 blendMode(BLEND);\n                 // image(overAllTexture, 0, 0);\n                 blendMode(SCREEN);\n                 strokeWeight(random(0.10, 0.5) / 2);\n                 stroke(str(color_bg) + "33");\n                 noFill();\n                 drawingContext.setLineDash([1, 4, 1, 3]);\n                 drawOverPattern();\n                 drawingContext.setLineDash([]);\n                 ',
            image: "",
          },
        },
        {
          title: "page_125",
          index: 8,
          params: {
            copy: "",
            image: "images/issue1/what-am-i-thinking-about/20.png",
          },
        },
        {
          title: "page_126",
          index: 9,
          params: {
            copy: 'blendMode(BLEND);\n\n                 noFill();\n                 strokeWeight(margin);\n                 rectMode(CORNER);\n                 stroke("#202020");\n                 rect(0, 0, width, height);\n         }\n }\n\n//frag functions\n\nconst frag_functions_default = `\n  #define PI 3.141592653589793\n  #define TAU 6.283185307179586\n\t\n\tfloat rand(vec2 c){\n\t\treturn fract(sin(dot(c.xy ,vec2(12.1237,78.2862))) * 232.5453);\n\t}\n\n\tmat2 rotate2d(float _angle){\n    return mat2(cos(_angle),-sin(_angle),\n                sin(_angle),cos(_angle));\n\t}\n\n\tmat2 scale2d(vec2 _scale){\n\t\t\treturn mat2(_scale.x,0.0,\n\t\t\t\t\t\t\t\t\t0.0,_scale.y);\n\t',
            image: "",
          },
        },
        {
          title: "page_127",
          index: 10,
          params: {
            copy: "}\n\n\tvec2 tile (vec2 _st, float _zoom) {\n\t\t\t_st *= _zoom;\n\t\t\treturn fract(_st);\n\t",
            image: "images/issue1/what-am-i-thinking-about/12.png",
          },
        },
        {
          title: "page_128",
          index: 11,
          params: {
            copy: "}\n\n\t//\tClassic Perlin 3D Noise \n\t//\tby Stefan Gustavson\n\n\tvec4 permute(vec4 x){return mod(((x*1000.0)+1.0)*x, 2009.0);}\n\tvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\tvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\n\tfloat cnoise(vec3 P){\n\t\tvec3 Pi0 = floor(P); // Integer part for indexing\n\t\tvec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n\t\tPi0 = mod(Pi0, 15.0);\n\t\tPi1 = mod(Pi1, 19.0);\n\t\tvec3 Pf0 = fract(P); // Fractional part for interpolation\n\t\tvec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n\t\tvec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n\t\tvec4 iy = vec4(Pi0.yy, Pi1.yy);\n\t\t",
            image: "",
          },
        },
        {
          title: "page_129",
          index: 12,
          params: {
            copy: "vec4 iz0 = Pi0.zzzz;\n\t\tvec4 iz1 = Pi1.zzzz;\n\n\t\tvec4 ixy = permute(permute(ix) + iy);\n\t\tvec4 ixy0 = permute(ixy + iz0);\n\t\tvec4 ixy1 = permute(ixy + iz1);\n\n\t\tvec4 gx0 = ixy0 / ${Math.random()*4.0+3.0};\n\t\tvec4 gy0 = fract(floor(gx0) / ${Math.random()*4.0+3.0}) - ${Math.random()*0.15+0.5};\n\t\tgx0 = fract(gx0);\n\t\tvec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n\t\tvec4 sz0 = step(gz0, vec4(0.0));\n\t\tgx0 -= sz0 * (step(0.0, gx0) - 0.5);\n\t\tgy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n\t\tvec4 gx1 = ixy1 / ${Math.random()*4.0+3.0};\n\t\tvec4 gy1 = fract(floor(gx0) / ${Math.random()*4.0+3.0}) - ${Math.random()*0.15+0.5};\n\t\tgx1 = fract(gx1);\n\t\tvec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n\t\tvec4 sz1 = step(gz1, vec4(0.0));\n\t\tgx1 -= sz1 * (step(0.0, gx1) - 0.5);\n\t\tgy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n\t\tvec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n\t\tvec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n\t\tvec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n\t\tvec3 g110 = ",
            image: "images/issue1/what-am-i-thinking-about/8.png",
          },
        },
        {
          title: "page_130",
          index: 13,
          params: {
            copy: "vec3(gx0.w,gy0.w,gz0.w);\n\t\tvec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n\t\tvec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n\t\tvec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n\t\tvec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n\t\tvec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n\t\tg000 *= norm0.x;\n\t\tg010 *= norm0.y;\n\t\tg100 *= norm0.z;\n\t\tg110 *= norm0.w;\n\t\tvec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n\t\tg001 *= norm1.x;\n\t\tg011 *= norm1.y;\n\t\tg101 *= norm1.z;\n\t\tg111 *= norm1.w;\n\n\t\tfloat n000 = dot(g000, Pf0);\n\t\tfloat n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n\t\tfloat n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n\t\tfloat n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n\t\tfloat n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n\t\tfloat n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n\t\tfloat n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n\t\tfloat n111 = dot(g111, Pf1);\n\n\t\tvec3 fade_xyz = fade(Pf0);\n\t\tvec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, ",
            image: "",
          },
        },
        {
          title: "page_131",
          index: 14,
          params: {
            copy: "n111), fade_xyz.z);\n\t\tvec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n\t\tfloat n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n\t\treturn 2.5 * n_xyz;\n\t}\n\t\n\t\nfloat noise(vec2 p, float freq ){\n\tfloat unit = 1./freq;\n\tvec2 ij = floor(p/unit);\n\tvec2 xy = mod(p,unit)/unit;\n\t//xy = .5*(1.-cos(PI/1.*xy));\n\tfloat a = rand((ij+vec2(0.,0.)))/1.;\n\tfloat b = rand((ij+vec2(1.,0.)))/1.;\n\tfloat c = rand((ij+vec2(0.,1.)))/1.;\n\tfloat d = rand((ij+vec2(1.,1.)))/1.;\n\tfloat x1 = mix(a, b, xy.x);\n\tfloat x2 = mix(c, d, xy.x);\n\treturn mix(x1, x2, xy.y);\n}\n\n\t\n\tvec2 random2( vec2 p ) {\n\t\t\t",
            image: "images/issue1/what-am-i-thinking-about/9.png",
          },
        },
        {
          title: "page_132",
          index: 15,
          params: {
            copy: "return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(560.5,5000.3))))*43758.5453);\n\t}\n\n`\n\nconst frag = `\n\tprecision highp float;\n\n\tuniform vec2 u_resolution;\n\tuniform ",
            image: "images/issue1/what-am-i-thinking-about/17.png",
          },
        },
        {
          title: "page_133",
          index: 16,
          params: {
            copy: "",
            image: "images/issue1/what-am-i-thinking-about/13.png",
          },
        },
        {
          title: "page_134",
          index: 17,
          params: {
            copy: "vec2 u_mouse;\n\tuniform float u_time;\n\tuniform vec3 u_lightDir;\n\tuniform vec3 u_col;\n\tuniform mat3 uNormalMatrix;\n\tuniform float u_pixelDensity;\n\tuniform sampler2D u_tex;\n\n\t//attributes, in\n\tvarying vec4 var_centerGlPosition;\n\tvarying vec3 var_vertNormal;\n\tvarying vec2 var_vertTexCoord;\n\n\t${frag_functions_default}\n\n\tvoid main(){\n\t\tvec2 st = var_vertTexCoord.xy /u_resolution; \n\t\t\n\t\t\n\t\t // st.x += cnoise( vec3(st *${Math.random()*0.1+0.5 }*u_time +500.0, 1.) )/100.0;  \n\t\t  //st.y += cnoise( vec3(st *${Math.random()*0.1+0.25 }*u_time +500.0, 1.) )/100.0; \n\t\t \n\t\t\tst.y += cnoise( vec3(st *${Math.random()*0.01+0.01 }*u_time +1000.0, 0.75) )/30.0;  \n\t\tst.x += cnoise( vec3(st *${Math.random(0.05,0.13)*0.1+0.1 }*u_time +100.0, 0.8) ",
            image: "",
          },
        },
        {
          title: "page_135",
          index: 18,
          params: {
            copy: ")/50.0; \n\t\n\t\n\t\t\tvec3 color = vec3(0.0);\n\t\tvec4 texColor = texture2D(u_tex, st);\n\t\tgl_FragColor= vec4(color,0.0)+texColor;\n\t}\n`\n\n//vert\n\n//ref 3d shader from https://www.openprocessing.org/sketch/881537\n\nconst vert = `\n\tprecision highp float;\n\n    // attributes, in\n    attribute vec3 aPosition;\n    attribute vec3 aNormal;\n    attribute vec2 aTexCoord;\n\n    // attributes, out\n    varying vec3 var_vertPos;\n    varying vec3 var_vertNormal;\n    varying vec2 var_vertTexCoord;\n\t\tvarying vec4 var_centerGlPosition;\n    \n    // matrices\n    ",
            image: "",
          },
        },
        {
          title: "page_136",
          index: 19,
          params: {
            copy: "uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n    uniform mat3 uNormalMatrix;\n\t\t",
            image: "images/issue1/what-am-i-thinking-about/19.png",
          },
        },
        {
          title: "page_137",
          index: 20,
          params: {
            copy: "uniform float u_time;\n\n\n    void main() {\n      vec3 pos = aPosition;\n\t\t\tvec4 posOut = uProjectionMatrix * uModelViewMatrix * vec4(pos, 1.0);\n      gl_Position = posOut;\n\n      // set out value\n      var_vertPos      = pos;\n      var_vertNormal   =  aNormal;\n      var_vertTexCoord = aTexCoord;\n\t\t\tvar_centerGlPosition = uProjectionMatrix * uModelViewMatrix * vec4(0., 0., 0.,1.0);\n    }\n`;",
            image: "",
          },
        },
      ],
    },
    art8: {
      art: "untitled",
      id: "art8",
      params: {
        seed: 108,
        rows: 10,
        cols: 10,
      },
      images: [],
      pages: [
        {
          title: "page_141",
          index: 0,
          params: {
            copy: "let color_set = [];\nlet palette1, palette2, color_bg;\n\nlet circles = [];\n// let MAX_ITERATIONS = 20;\n\nlet mySize, margin;\nlet seed = Math.random() * 99999;\n\nlet myGraphic;\n\nfunction setup() {\n\tframeRate(25);\n\t// pixelDensity(3);\n\trandomSeed(seed);\n\tangleMode(DEGREES);\n\tmySize = min(windowWidth, windowHeight);\n\tif (mySize &gt; 1000) mySize = 1000;\n\tmargin = mySize / ",
            image: "",
          },
        },
        {
          title: "page_142",
          index: 1,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_143",
          index: 2,
          params: {
            copy: '100;\n\tcreateCanvas(mySize * 11 / 16, mySize, WEBGL);\n\tpalette1 = random(colorScheme).colors.concat();\n\tpalette2 = random(colorScheme).colors.concat();\n\tcolor_set[0] = random(palette1);\n\tcolor_set[1] = random(palette2);\n\tcolor_set[2] = random(palette1);\n\tcolor_set[3] = random(palette2);\n\tcolor_set[4] = random(palette1);\n\tcolor_set[5] = random(palette1);\n\tcolor_set[6] = random(palette1);\n\tbackground(random(color_set));\n\n\t//brush\n\tbrush.scaleBrushes(1.0);\n\t// "zigzag", "seabed", "curved", "truncated"\n\tbrush.field(random(["seabed", "curved", "truncated"]));\n\t// brush.field("zigzag");\n}\n\nfunction draw() {\n\trandomSeed(seed);\n\ttranslate(-width / 2, -height / 2)\n\tdrawRect(0, 0, width, height);\n\tif (frameCount == 1) {\n\t\tnoFill();\n\t\tstroke("#202020");\n\t\tstrokeWeight(margin);\n\t\t',
            image: "",
          },
        },
        {
          title: "page_144",
          index: 3,
          params: {
            copy: 'blendMode(BLEND);\n\t\trectMode(CORNER);\n\t\trect(0, 0, width, height);\n\t\tnoLoop();\n\t}\n}\n\nfunction createCell(posX, posY, wid, hei, depth) {\n\tif (depth &gt; 0) {\n\t\tlet div = random(0.25, 0.45)\n\t\tcreateCell(posX, posY, wid / 2, hei / 2, depth - int(random([1, 2])))\n\t\tcreateCell(posX + wid / 2, posY, wid / 2, hei / 2, depth - int(random([1, 2])))\n\t\tcreateCell(posX, posY + hei / 2, wid / 2, hei / 2, depth - int(random([1, 2])))\n\t\tcreateCell(posX + wid / 2, posY + hei / 2, wid / 2, hei / 2, depth - int(random([1, 2])))\n\t} else {\n\t\tlet hatch_brushes = ["2B", "marker", "2H", "cpencil"]\n\t\tlet stroke_brushes = ["2H", "HB", "charcoal", "pen", "spray", "rotring"]\n\t\tbrush.noStroke()\n\t\tbrush.fill(random(color_set), random(155, 255))\n\t\t',
            image: "",
          },
        },
        {
          title: "page_145",
          index: 4,
          params: {
            copy: 'brush.bleed(random(0.2, 0.1), random(["in", "in", "in"]))\n\t\tbrush.fillTexture(0.5, 0.8)\n\n\t\tif (random() &lt; 0.1) {\n\t\t\tbrush.fill(random(color_set), random(200, 255))\n\t\t\tbrush.bleed(random(0.1, 0.4), "in")\n\t\t\tbrush.fillTexture(0.5, 0.2)\n\t\t} else {\n\t\t\tbrush.set(random(stroke_brushes), random(color_set))\n\t\t\tbrush.strokeWeight(random(2, 5))\n\t\t\tbrush.setHatch(random(hatch_brushes), random(color_set))\n\t\t\tbrush.hatch(\n\t\t\t\trandom(mySize / 100, mySize / 500), // This is distance between lines\n\t\t\t\trandom(0, 360), // This is angle in degrees\n\t\t\t\t{\n\t\t\t\t\trand: random([0, 0, 0, 0]),\n\t\t\t\t\tcontinuous: random([true, ',
            image: "",
          },
        },
        {
          title: "page_146",
          index: 5,
          params: {
            copy: 'false]),\n\t\t\t\t\tgradient: random([true, false])\n\t\t\t\t}) // Optional\n\t\t}\n\t\t// brush.circle(posX + wid / 2, posY + hei / 2, min(wid * 1, hei * 1)/2)\n\t\tbrush.rect(posX + wid / 2, posY + hei / 2, wid * 0.85, hei * 0.85, CENTER)\n\t\tbrush.noStroke()\n\t\tbrush.noFill()\n\t\tbrush.noHatch()\n\t\t// \t\tlet stroke_brushes = ["2H", "HB", "charcoal", "marker", "2B", "cpencil"]\n\n\t\t// \t\tbrush.set(random(stroke_brushes), random(color_set), random(12, 6))\n\t\t// \t\tbrush.noFill();\n\t\t// \t\tbrush.stroke(random(color_set));\n\t\t// \t\t// ',
            image: "",
          },
        },
        {
          title: "page_147",
          index: 6,
          params: {
            copy: "brush.strokeWeight(random(4, 10));\n\t\t// \t\t// brush.rect(posX, posY, wid * 0.85, hei * 0.85)\n\t\t// \t\t// brush.line(posX, posY + (hei) / 2, posX + wid, posY + (hei) / 2)\n\t\t// \t\tbrush.flowLine(posX, posY + hei / 2, random(wid, hei), random(-45, 45))\n\t}\n}\n\nfunction drawRect(x, y, w, h) {\n\trandomSeed(seed);\n\t// noFill();\n\t// stroke(random(color_set));\n\t// rect(x, y, w, h);\n\tcreateCell(x, y, w, h, 3);\n\tlet splitWidth = random(1) &gt; 0.5;\n\tlet splitWhere = random(0.1, 0.2);\n\n\t// if we're splitting the width\n\tif (splitWidth &amp;&amp; w &gt; width / 2) {\n\t\tdrawRect(x, y, w * splitWhere, ",
            image: "",
          },
        },
        {
          title: "page_148",
          index: 7,
          params: {
            copy: 'h);\n\t\tdrawRect(x + (w * splitWhere), y, w * (1 - splitWhere), h);\n\t} else if (h &gt; height / 3) {\n\t\tdrawRect(x, y, w, h * splitWhere);\n\t\tdrawRect(x, y + (h * splitWhere), w, h * (1 - splitWhere));\n\t}\n}\n\n\nlet bgcolor = "202020-021526-0C0C0C-070F2B".split("-").map((a) =&gt; "#" + a);\nlet colorsblue = "08C2FF-091057-B7E0FF-4F75FF-012340-162D59-8FB6D9-C9DFF2-1B70A6-4590BF-034C8C".split("-").map((a) =&gt; "#" + a);\n',
            image: "",
          },
        },
        {
          title: "page_149",
          index: 8,
          params: {
            copy: 'let colorScheme = [{\n\t\tname: "Pink gerber",\n\t\tcolors: ["#F21313", "#F24B4B", "#F29191", "#F2BBBB", "#F2F2F2"],\n\t},\n\t{\n\t\tname: "blue flower",\n\t\tcolors: ["#5267D9", "#809DF2", "#A7C0F2", "#A0A603", "#F2F2F2"],\n\t},\n\t{\n\t\tname: "sunset",\n\t\tcolors: ["#6B240C", "#994D1C", ',
            image: "",
          },
        },
        {
          title: "page_150",
          index: 9,
          params: {
            copy: '"#E48F45", "#F5CCA0", "#6B240C"],\n\t},\n\t{\n\t\tname: "purple flower",\n\t\tcolors: ["#E2BDF2", "#8A39BF", "#B47ED9", "#6D1BBF", "#F2F2F2"],\n\t},\n\t{\n\t\tname: "monet",\n\t\tcolors: ["#B5C99A", "#862B0D", "#FFF9C9", "#FFC95F", "#B5C99A"],\n\t},\n\t{\n\t\tname: "kandinsky",\n\t\tcolors: ["#8D95A6", "#0A7360", "#F28705", "#D98825", "#F2F2F2"],\n\t},\n\t{\n\t\tname: "summer",\n\t\tcolors: ["#80BFAD", "#B6D96C", "#E3F2C2", "#F2DB66", "#F2AF88"],\n\t},\n\t{\n\t\tname: "Gypsophila ",\n\t\tcolors: ["#BF8034", "#F2D4AE", "#BF9B7A", "#F2E4D8", "#BFADA3"],\n\t},\n\t{\n\t\tname: "sakura",\n\t\tcolors: ["#FF9494", "#FFD1D1", "#FFE3E1", ',
            image: "",
          },
        },
        {
          title: "page_151",
          index: 10,
          params: {
            copy: '"#FFF5E4", "#001B79", "#DA0C81"],\n\t},\n\t{\n\t\tname: "passion",\n\t\tcolors: ["#F27983", "#F28705", "#F27405", "#F2786D", "#F2F2F2"],\n\t},\n\t{\n\t\tname: "hydrangea",\n\t\tcolors: ["#EEF1FF", "#D2DAFF", "#AAC4FF", "#B1B2FF", "#363062", "#A25772"],\n\t},\n\t{\n\t\tname: "tulips",\n\t\tcolors: ["#E38B29", "#F1A661", "#FFD8A9", ',
            image: "",
          },
        },
        {
          title: "page_152",
          index: 11,
          params: {
            copy: '"#FDEEDC", "#22092C", "#748E63"],\n\t},\n\t{\n\t\tname: "face",\n\t\tcolors: ["#FFC3A1", "#F0997D", "#D3756B", "#A75D5D"],\n\t},\n\t{\n\t\tname: "cottage",\n\t\tcolors: ["#374259", "#545B77", "#5C8984", "#F2D8D8"],\n\t},\n\t{\n\t\tname: "summerbeach",\n\t\tcolors: ["#675D50", "#ABC4AA", "#F3DEBA", "#A9907E"],\n\t',
            image: "",
          },
        },
        {
          title: "page_153",
          index: 12,
          params: {
            copy: '},\n\t{\n\t\tname: "eva",\n\t\tcolors: ["#F5F5F5", "#E8E2E2", "#F99417", "#5D3891"],\n\t},\n\t{\n\t\tname: "lollipop",\n\t\tcolors: ["#EAE0DA", "#F7F5EB", "#A0C3D2", "#EAC7C7", "#461959", "#E966A0", "#2B2730"],\n\t},\n\t{\n\t\tname: "bean paste",\n\t\tcolors: ["#EEF5FF", "#9EB8D9", "#7C93C3", "#A25772", "#164863"],\n\t},\n\t{\n\t\tname: "spring",\n\t\tcolors: ["#82954B", "#BABD42", "#EFD345", "#FFEF82", "#004225"],\n\t},\n\t{\n\t\tname: "sea",\n\t\tcolors: ["#146C94", "#19A7CE", "#B0DAFF", "#FEFF86"],\n\t},\n\t{\n\t\tname: "bright",\n\t\tcolors: ["#E8F3D6", "#FCF9BE", "#FFDCA9", "#FAAB78", "#7D6E83"],\n\t},\n\t',
            image: "",
          },
        },
        {
          title: "page_154",
          index: 13,
          params: {
            copy: '{\n\t\tname: "holiday",\n\t\tcolors: ["#403738", "#D9AA55", "#D9C2A7", "#D9501E", "#A62F14"],\n\t},\n\t{\n\t\tname: "forest",\n\t\tcolors: ["#4B5940", "#7A8C68", "#99A686", "#BFB7A8", "#F2F2F2"],\n\t},\n\t{\n\t\tname: "twilight",\n\t\tcolors: ["#AAABA8", "#BC7B77", "#CD9B9D", "#DBC7C9", "#88A795", "#033540"],\n\t},\n\t{\n\t\tname: "goldenyear",\n\t\tcolors: ["#F1EBD8", "#F1EBD8", "#F1EBD8", "#E4BA6A", "#E4BA6A", "#787D46", "#787D46", "#7D4E25", "#222B1B"],\n\t},\n\t{\n\t\tname: "shiny",\n\t\tcolors: ["#ECE9E4", "#ECE9E4", "#ECE9E4", "#E1D8D1", "#E1D8D1", "#C3B39D", "#D6AB7E", "#D18A39", "#D18A39"],\n\t},\n\t{\n\t\t',
            image: "",
          },
        },
        {
          title: "page_155",
          index: 14,
          params: {
            copy: 'name: "rainbow",\n\t\tcolors: ["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"],\n\t},\n\t{\n\t\tname: "midnight",\n\t\tcolors: ["#434BF6", "#3234FB", "#5157D0", "#8286FF", "#B596F1", "#F87AC0", "#FBCAB1", "#FCB895", "#FCC38D", "#FDE7D7"],\n\t},\n\t{\n\t\tname: "sunflower",\n\t\tcolors: ["#004225", "#F5F5DC", "#FFB000", "#FFCF9D"],\n\t},\n];',
            image: "",
          },
        },
      ],
    },
    art9: {
      art: "Glitchy Lines",
      id: "art9",
      params: {
        seed: 109,
        rows: 10,
        cols: 10,
      },
      images: [],
      pages: [
        {
          title: "page_158",
          index: 0,
          params: {
            copy: 'console.log("Lomz 2022");\nconsole.log("https://www.lomz.net");\n\nlet wh;\n\nlet copyFromX;\nlet copyFromY;\n\nlet numberOfBgd = 5;\nvar bgd = [];\nlet bgd_tmp = [];\nlet randomBgd;\n\nvar glitchCopyX = 0;\nvar glitchCopyY = 0;\n\nvar pointX,\n  pointY,\n  pointX2,\n  pointY2 = 0;\n\n',
            image: "",
          },
        },
        {
          title: "page_159",
          index: 1,
          params: {
            copy: "var counter = 0;\n\nvar halfWH = 0;\nvar ranNubmer = 0;\n\nvar xStep = 0.004;\nvar yStep = 0.004;\nvar xNoise = 0;\nvar yNoise = 0;\nvar r,\n  t = 0;\nvar lineSize;\n\n// **************************\n// *        Setup           *\n// **************************\n\nfunction setup() ",
            image: "",
          },
        },
        {
          title: "page_160",
          index: 2,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_161",
          index: 3,
          params: {
            copy: "{\n  wh = windowHeight;\n  createCanvas(wh, ",
            image: "",
          },
        },
        {
          title: "page_162",
          index: 4,
          params: {
            copy: "wh);\n  background(0);\n\n  for (var i = 0; i &lt; numberOfBgd; i++) {\n    bgd_tmp[i] = createGraphics(wh, wh);\n    bgd_tmp[i].copy(bgd[i], 0, 0, bgd[i].width, bgd[i].height, 0, 0, wh, wh);\n  }\n\n  // Grain\n  p5grain.setup();\n  p5grain.setup({\n    ignoreWarnings: true,\n    ignoreErrors: true,\n  });\n\n  // noise seed\n  var mosaicSeed = fxrand() * 1000000;\n  noiseSeed(mosaicSeed);\n  ",
            image: "",
          },
        },
        {
          title: "page_163",
          index: 5,
          params: {
            copy: 'console.log("Mosaic Seed: " + mosaicSeed);\n\n  randomBgd = int(get_random(0, 5));\n  console.log("Bgd: " + randomBgd);\n  \n  let lineWidth = int(get_random(0.1, 0.02) * wh);\n\n  copyFromX = get_random(0, bgd_tmp[randomBgd].width);\n  copyFromY = get_random(0, bgd_tmp[randomBgd].height);\n\n  // layer 01\n\tvar hSize = 50;\n  for (var y = 0; y &lt; width / 2; y = y + lineWidth) {\n    randomBgd = int(get_random(0, numberOfBgd));\n    for (var x = 0; x &lt; height; x = x + hSize) {\n      copy(\n        bgd_tmp[randomBgd],\n        copyFromX,\n        copyFromY,\n        lineWidth,\n        hSize,\n        y,\n        x,\n        lineWidth,\n        hSize\n      );\n    }\n\n    copyFromX = get_random(0, ',
            image: "",
          },
        },
        {
          title: "page_164",
          index: 6,
          params: {
            copy: "bgd_tmp[randomBgd].width / 4);\n    copyFromY = get_random(0, bgd_tmp[randomBgd].height / 4);\n  }\n\t\n\t// layer 02 - ??\n\t// noprotect\n\tvar vStart = wh/get_random(3, 1.5);\n\n\tfor (i=0; i&lt;6; i++) {\n      for (var y = 0; y &lt; width / 2; y = y + lineWidth) {\n        randomBgd = int(get_random(0, numberOfBgd));\n        for (var x = vStart; x &lt; height; x = x + hSize) {\n          copy(\n            bgd_tmp[randomBgd],\n            copyFromX,\n            copyFromY,\n            lineWidth,\n            hSize,\n            y,\n            x,\n            lineWidth,\n            hSize\n          );\n        }\n\n    ",
            image: "",
          },
        },
        {
          title: "page_165",
          index: 7,
          params: {
            copy: "copyFromX = get_random(0, bgd_tmp[randomBgd].width / 4);\n    copyFromY = get_random(0, bgd_tmp[randomBgd].height / 4);\n\t\t\n  }\n  //vStart = vStart + vStart;\n\t}\n\n  \n  for (i=0; i&lt;10000; i++) {\n    push();\n    let cX = int(get_random(0, wh/2));\n    let cY = int(get_random(0, wh));\n    let c = get(cX, cY);\n    ",
            image: "",
          },
        },
        {
          title: "page_166",
          index: 8,
          params: {
            copy: "noStroke();\n    fill(c[0],c[1],c[2],200);\n    circle(cX, cY, int(get_random(0, wh/70)));\n    pop();\n  }\n  \n  for (i=0; i&lt;10000; i++) {\n    push();\n    let cX = int(get_random(0, wh/2));\n    let cY = int(get_random(0, wh));\n    let c = get(cX, cY);\n    noStroke();\n    fill(c[0],c[1],c[2],200);\n    circle(cX, cY, int(get_random(0, ",
            image: "",
          },
        },
        {
          title: "page_167",
          index: 9,
          params: {
            copy: "wh/100)));\n    pop();\n  }\n\n  // Flip\n  push();\n  scale(-1, 1);\n  copy(0, 0, wh / 2, wh, -wh, 0, wh / 2, wh);\n  pop();\n  // End flip\n\n\n\n  \n\n  // Grain\n  granulateChannels(50);\n\n  // END\n}\n\n// **************************\n// *         Draw           *\n// **************************\n\nfunction draw() {\n  \n}\n\n// **************************\n",
            image: "",
          },
        },
        {
          title: "page_168",
          index: 10,
          params: {
            copy: '// *       Save png         *\n// **************************\n\nfunction keyTyped() {\n  if (key == "s" || key == "S")\n    save("Glitchy lines by Lomz: " + int(random(0, 1000)) + ".png");\n}\n\n// **************************\n// *        Random          *\n// **************************\n\nfunction get_random(min, max) {\n  return min + fxrand() * (max - min);\n}\n\n// **************************\n// *        Preload         *\n// **************************\n\nfunction preload() {\n  for (var i = 0; i &lt; numberOfBgd; i++) {\n    bgd[i] = loadImage("bgd" + i + ".png");\n  }\n',
            image: "",
          },
        },
        {
          title: "page_169",
          index: 11,
          params: {
            copy: "}\n",
            image: "",
          },
        },
      ],
    },
    art10: {
      art: "The Silence of the Lambs",
      id: "art10",
      params: {
        seed: 110,
        rows: 10,
        cols: 10,
      },
      images: [
        "images/issue1/the-silence-of-the-lambs/1.png",
        "images/issue1/the-silence-of-the-lambs/2.png",
        "images/issue1/the-silence-of-the-lambs/3.png",
        "images/issue1/the-silence-of-the-lambs/4.png",
        "images/issue1/the-silence-of-the-lambs/5.png",
        "images/issue1/the-silence-of-the-lambs/6.png",
        "images/issue1/the-silence-of-the-lambs/7.png",
        "images/issue1/the-silence-of-the-lambs/8.png",
        "images/issue1/the-silence-of-the-lambs/9.png",
        "images/issue1/the-silence-of-the-lambs/10.png",
        "images/issue1/the-silence-of-the-lambs/11.png",
        "images/issue1/the-silence-of-the-lambs/12.png",
        "images/issue1/the-silence-of-the-lambs/13.png",
        "images/issue1/the-silence-of-the-lambs/14.png",
        "images/issue1/the-silence-of-the-lambs/15.png",
        "images/issue1/the-silence-of-the-lambs/16.png",
        "images/issue1/the-silence-of-the-lambs/17.png",
        "images/issue1/the-silence-of-the-lambs/18.png",
        "images/issue1/the-silence-of-the-lambs/19.png",
        "images/issue1/the-silence-of-the-lambs/20.png",
        "images/issue1/the-silence-of-the-lambs/21.png",
        "images/issue1/the-silence-of-the-lambs/22.png",
        "images/issue1/the-silence-of-the-lambs/23.png",
        "images/issue1/the-silence-of-the-lambs/24.png",
        "images/issue1/the-silence-of-the-lambs/25.png",
        "images/issue1/the-silence-of-the-lambs/26.png",
        "images/issue1/the-silence-of-the-lambs/27.png",
        "images/issue1/the-silence-of-the-lambs/28.png",
        "images/issue1/the-silence-of-the-lambs/29.png",
        "images/issue1/the-silence-of-the-lambs/30.png",
        "images/issue1/the-silence-of-the-lambs/31.png",
        "images/issue1/the-silence-of-the-lambs/32.png",
        "images/issue1/the-silence-of-the-lambs/33.png",
        "images/issue1/the-silence-of-the-lambs/34.png",
        "images/issue1/the-silence-of-the-lambs/35.png",
      ],
      pages: [
        {
          title: "page_172",
          index: 0,
          params: {
            copy: '// https://www.fxhash.xyz/generative/slug/lambs\n\nconst colors = ["#F00", "#FF0", "#0F0", "#0FF", "#00F", "#000", "#FFF"]\nlet bgColor, bloodColor\nconst totalFrame = 1000\nconst lifeStep = 0.005\nlet [wOff, hOff] = [200, 200]\nlet [cols, rows] = [100, 100]\nlet xoff, yoff\nlet nodes = Array.from({ length: rows }, () =&gt; Array.from({ length: cols }))\nlet noiseScale = 0.01\nlet weiRangeMax\nlet maxSide\n\n',
            image: "images/issue1/the-silence-of-the-lambs/16.png",
          },
        },
        {
          title: "page_173",
          index: 1,
          params: {
            copy: 'function setup() {\n\tcreateCanvas(1200, 370)\n\tflex({ container: { padding: "20px" } })\n\t\n\tconst tone = [random(225, 255), random(225, 255), random(225, 255)]\n\tbgColor = color(...tone)\n\tbackground(bgColor)\n\tbloodColor = color(random(colors))\n\tnoFill()\n\n\tnoiseScale = random(0.005, 0.01)\n\tweiRangeMax = 2 ** floor(random(3, 9))\n\tmaxSide = max(width, height)\n\n\tcols = floor(random(1, 11)) * 10\n\txoff = (width - wOff) / cols\n\tyoff = (height - hOff) / rows\n\tfor (let col = 0; col &lt; cols; col++) {\n\t\tfor (let row = 0; row &lt; rows; row++)\n\t\t\tnodes[row][col] = new Node(col * xoff, row * yoff)\n\t}\n\t\n\tdescribe(`"Lamb" by Zaron Chen`)\n}\n\n',
            image: "images/issue1/the-silence-of-the-lambs/33.png",
          },
        },
        {
          title: "page_174",
          index: 2,
          params: {
            copy: "let t\nlet weiCtrl\nfunction draw() {\n\tt = frameCount / totalFrame\n\tweiCtrl = lerp(noise(t, t) * width, width / 2, t)\n\n\tpush()\n\ttranslate((wOff + xoff) / 2, (hOff + yoff) / 2)\n\tlet dotColor = lerpColor(color(0), bloodColor, 0.5 - 0.5 * cos(2 * ",
            image: "images/issue1/the-silence-of-the-lambs/24.png",
          },
        },
        {
          title: "page_175",
          index: 3,
          params: {
            copy: "t))\n\tdotColor.setAlpha(50)\n\tstroke(dotColor)\n\tnodeUpdate(static_dots)\n\tnodeUpdate(motion_dots)\n\tpop()\n\n\tpush()\n\tstroke(bgColor)\n\tstrokeWeight(25)\n\trect(0, 0, width, height)\n\tpop()\n\n\tif (frameCount &gt;= totalFrame) noLoop()\n}\n\nfunction nodeUpdate(display) {\n\tlet nz = frameCount * noiseScale\n\tfor (let col = 0; col &lt; cols; col++) ",
            image: "images/issue1/the-silence-of-the-lambs/34.png",
          },
        },
        {
          title: "page_176",
          index: 4,
          params: {
            copy: "{\n\t\tfor (let row = 0; row &lt; rows; row++) {\n\t\t\tconst node = nodes[row][col]\n\t\t\tconst nx = node.x * noiseScale\n\t\t\tconst ny = node.y * noiseScale\n\t\t\tconst dx = noise(nx + 300, ny + 500, nx + ny + nz) * 2 - 1\n\t\t\tconst dy = noise(nx + 100, ny + 300, nx + ny + nz) * 2 - 1\n\t\t\tconst range = floor(random(1, random(2, weiRangeMax)))\n\t\t\tconst wei = map(weiCtrl, 0, maxSide, -range, range) * (1 - t)\n\t\t\tdisplay(node, dx, dy * (1 - abs(wei) / range) * 20, wei)\n\t\t}\n\t}\n}\n\nfunction static_dots(node, dx, dy, wei) {\n\tnode.mx = node.x + dx * wei * 100 * sin(t)\n\tnode.my = node.y + dy * wei * 210 * sin(t)\n\tpoint(node.mx, node.my)\n",
            image: "",
          },
        },
        {
          title: "page_177",
          index: 5,
          params: {
            copy: "}\n\nfunction motion_dots(node, dx, dy, wei) {\n\tnode.x = node.x + dx * wei\n\tnode.y = node.y + dy * wei\n\tnode.life -= lifeStep\n\tif (node.life &lt; 0) node.reset()\n\tpoint(node.x, node.y)\n}\n\nclass Node {\n\tconstructor(x, y) {\n\t\tthis.x = x\n\t\tthis.y = y\n\t\tthis.mx = x\n\t\tthis.my = y\n\t\tthis.life = random(3)\n\t}\n\treset() {\n\t\tthis.x = this.mx\n\t\tthis.y = this.my\n\t\tthis.life = random(3)\n\t}\n}",
            image: "images/issue1/the-silence-of-the-lambs/28.png",
          },
        },
      ],
    },
    art11: {
      art: "Suprematism",
      id: "art11",
      params: {
        seed: 111,
        rows: 10,
        cols: 10,
      },
      images: [],
      pages: [
        {
          title: "page_180",
          index: 0,
          params: {
            copy: "const Y_AXIS = 1;\nconst X_AXIS = 2;\nlet offwidth,offheight,sz;\n",
            image: "",
          },
        },
        {
          title: "page_181",
          index: 1,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_182",
          index: 2,
          params: {
            copy: "let offgfx,sourceImage;\nlet wiggle=false;\nlet punchcard=false;\nlet seed=0;\n\n// drawing conrol\nlet gi=0;\nlet gj=0;\nlet gf=0;\nlet drawphase=0;\nlet loadindy=0;\nlet drawtot=3;\nlet saveit=false;\n\n\n// art variables\nlet artcols=[];\n\n\n//features\nlet graindots=false;\nlet grainlines=true;\n\n\n",
            image: "",
          },
        },
        {
          title: "page_183",
          index: 3,
          params: {
            copy: "function windowResized(){\n  resizeCanvas(windowWidth,windowHeight);\n}\n\nfunction setup() {\n  createCanvas(700, 700);\n  pixelDensity(1);\n  \n  offwidth=2000;\n  offheight=2000;\n  offgfx= ",
            image: "",
          },
        },
        {
          title: "page_184",
          index: 4,
          params: {
            copy: "createGraphics(offwidth,offheight);\n  sourceImage= createImage(offwidth,offheight);\n  sz=offwidth/1000;\n  \n  // set up things the art NEEDS :)\n\t//first three are for a '3d' shape\n  artcols= [ color(245,160,31),color(255,183,62), color(220,62,53 ),   color(95,82,138), color(160,72,60), color( 74,53,58 ), color(225,220,216),  color(230,46,46),  color(217,102,58), color( 219,203,169 )];\n  \n  \n    drawit();\n  \n}\n\nfunction draw() {\n  if(drawphase==drawtot)\n   {\n    ",
            image: "",
          },
        },
        {
          title: "page_185",
          index: 5,
          params: {
            copy: 'loadindy=0;\n\n  }\n  else { //loading indicator\n   \n    circle(width/2,height/2, randomint(width/2));\n\n  }\n  \n  if(drawphasedrawit();\n\n  \n  if(drawphase==drawtot)\n  {\n      clear();\n      sourceImage = createImage(width,height);\n      sourceImage.copy(offgfx, 0, 0, offwidth,offheight, 0, 0, width, height);\n      image(sourceImage, 0, 0);\n      noLoop();\n     // fxpreview();\n  }\n\n  if(saveit)\n    {\n      offgfx.save("Output-"+random(10)+"-"+ offwidth +"x"+ offheight+".png");\n      saveit=false;\n    }\n\n  \n\n',
            image: "",
          },
        },
        {
          title: "page_186",
          index: 6,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_187",
          index: 7,
          params: {
            copy: "}\n\nfunction drawit()\n{\n  \n\t\n  if(drawphase==2) // grain\n\t{\n\t\tlet bx=offwidth/500;\n    let by=offheight/500;\n    offgfx.noStroke();\n    for(let f=10;f&lt;20; f++)\n    {\n      for(let i=-10;i&lt;510; ",
            image: "",
          },
        },
        {
          title: "page_188",
          index: 8,
          params: {
            copy: "i++)\n      {\n        if(graindots)\n\t\t\t\t{\n\t\t    offgfx.fill(255,255,255,10);\n        offgfx.circle(bx*i + randomint(3)*sz, by*gj+ randomint(3)*sz, bx);\n        offgfx.fill(50,50,50,10);\n        offgfx.circle(bx*i - randomint(3)*sz, by*gj- randomint(3)*sz, bx);\n\t\t\t\t}\n\t\t\t\tif(grainlines)\n\t\t\t\t{\n\t\t\t\t\toffgfx.strokeWeight(1*sz);\n\t\t\t    offgfx.stroke(255,255,255,10);\n          offgfx.line(bx*i + randomint(3)*sz, by*gj,   bx*i + randomint(30)*sz, by*gj,);\n          offgfx.stroke(50,50,5,10);\n          offgfx.line(bx*i , by*gj+ randomint(3)*sz,   bx*i , by*gj+ randomint(30)*sz,);\n\t\t\t\n\t\t\t\t}\n\t\t\t\t\n      }\n      gj++;\n    ",
            image: "",
          },
        },
        {
          title: "page_189",
          index: 9,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_190",
          index: 10,
          params: {
            copy: "}\n   \n    if(gj&gt;500) { drawphase=3; gj=0; }\n\t}\n\t\n\t\n\t\n  \n  if(drawphase==1)\n  {\n\t\toffgfx.noStroke();\n\t  let y1=randomintrange(offheight/3, (offheight/3)*2);\n    let y2=randomintrange(offheight/3, (offheight/3)*2);\n\t\t",
            image: "",
          },
        },
        {
          title: "page_191",
          index: 11,
          params: {
            copy: "offgfx.fill(artcols[5]);\n    offgfx.quad(0,y1,offwidth,y2,offwidth,offheight, 0,offheight);\n    offgfx.fill(artcols[9]);\n\t\toffgfx.circle(randomintrange(offwidth/8,offwidth/2), (y2+y1)/2, randomintrange(offwidth/2,offwidth));\n\t\t\n\t\t\n\t\tfor(let f=0;f&lt;3;f++)\n\t\t{\n    ",
            image: "",
          },
        },
        {
          title: "page_192",
          index: 12,
          params: {
            copy: "draw2Dquad(randomintrange(offwidth/10,offwidth/3), randomintrange(offheight/6,offheight/2), randomintrange(offwidth/8,offwidth/3), randomintrange(offwidth/5,offwidth/2), offgfx);\n\t\t}\n\t\t\n    for(let f=0;f&lt;3;f++)\n\t\t{\n    draw3Dquad(randomintrange(offwidth/10,offwidth/3), randomintrange(offheight/6,offheight/2), randomintrange(offwidth/8,offwidth/3), randomintrange(offwidth/5,offwidth/2), offgfx);\n\t\t}\n\t\t\n\t\t\tfor(let f=0;f&lt;2;f++)\n\t\t",
            image: "",
          },
        },
        {
          title: "page_193",
          index: 13,
          params: {
            copy: "{\n    draw2Dquad(randomintrange(offwidth/10,offwidth/3), randomintrange(offheight/6,offheight/2), randomintrange(offwidth/8,offwidth/3), randomintrange(offwidth/5,offwidth/2), offgfx);\n\t\t",
            image: "",
          },
        },
        {
          title: "page_194",
          index: 14,
          params: {
            copy: "}\n\t\n\t\n\t\t",
            image: "",
          },
        },
        {
          title: "page_195",
          index: 15,
          params: {
            copy: "{ drawphase=2; gj=-10 }\n    \n  }\n  \n  if(drawphase==0) // clear\n  {\n    offgfx.background(artcols[9]);\n     \n    drawphase=1;\n    \n  }\n  \n   \n}\n\n\nfunction draw3Dquad(x,y,w,h,dest)\n{\n\t//new top left\n\tlet ox=(x-(w/2));\n  let oy=(y-(h/2));\n\tdest.noStroke();\n\tdest.push();\n\tdest.translate(x,y);\n\tdest.rotate(randomrange(-0.3,0));\n  //side\n\tlet q1x1= ox;\n\tlet q1y1= oy;\n\t",
            image: "",
          },
        },
        {
          title: "page_196",
          index: 16,
          params: {
            copy: "let q1x2= ox+ (randomrange(0.1, 0.3)*w);\n\tlet q1y2= oy+ (randomrange(0.1, 0.3)*w);\n\tlet q1x3= q1x2;\n\tlet q1y3= oy + h - (randomrange(0.1, 0.2)*w);\n  let q1x4= ox;\n\tlet q1y4= oy + h;\n  dest.fill(artcols[0]);\n\tdest.quad(q1x1, q1y1, q1x2, q1y2, q1x3, q1y3, q1x4, q1y4);\n\t\n\t// top (-1 for rounding errors)\n  let q2x1= ox-1;\n\tlet q2y1= oy-1;\n\tlet q2x2= ox+w;\n\tlet q2y2= oy;\n\tlet q2x3 = ox+w+ (randomrange(0.1, 0.2)*w);;\n\tlet q2y3 = q1y2;\n  let q2x4= q1x2-1;\n\tlet q2y4= q1y2-1;\n\tdest.fill(artcols[1]);\n\tdest.quad(q2x1, q2y1, q2x2, q2y2, q2x3, q2y3, q2x4, q2y4);\n\t\n\t//body\n\tlet q3x1= q1x2-1;\n\tlet q3y1= q1y2-1;\n\tlet q3x2= q2x3;\n\tlet q3y2= q2y3;\n\tlet q3x3= q2x3;\n\tlet q3y3= q2y3 + (randomrange(0.6, 0.8)*h);\n\tlet q3x4= q3x1;\n\tlet q3y4= ",
            image: "",
          },
        },
        {
          title: "page_197",
          index: 17,
          params: {
            copy: "q3y3;\n\tdest.fill(artcols[2]);\n\tdest.quad(q3x1, q3y1, q3x2, q3y2, q3x3, q3y3, q3x4, ",
            image: "",
          },
        },
        {
          title: "page_198",
          index: 18,
          params: {
            copy: "q3y4);\n\n\tdest.pop();\n\t\n\t\n}\n\n\nfunction draw2Dquad(x,y,w,h,dest)\n{\n\t\n\tlet ox=(x-(w/2));\n  ",
            image: "",
          },
        },
        {
          title: "page_199",
          index: 19,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_200",
          index: 20,
          params: {
            copy: 'let oy=(y-(h/2));\n\tdest.noStroke();\n\tdest.push();\n\tdest.translate(x,y);\n\tdest.rotate(randomrange(-0.8,-0.3));\n  //side\n\tlet q1x1= ox;\n\tlet q1y1= oy;\n\tlet q1x2= ox+ (randomrange(0.6, 1.0)*w);\n\tlet q1y2= oy+ (randomrange(0.1, 0.2)*w);\n\tlet q1x3= q1x2;\n\tlet q1y3= oy + h - (randomrange(0.1, 0.2)*w);\n  let q1x4= ox;\n\tlet q1y4= oy + h;\n  dest.fill(artcols[randomintrange(3,8)]);\n\tdest.quad(q1x1, q1y1, q1x2, q1y2, q1x3, q1y3, q1x4, q1y4);\n\n  dest.pop();\n}\n\nfunction keyPressed() {\n  if (keyCode == 83) {\n  \n    offgfx.save("output-"+random(10)+"-"+ offwidth +"x"+ offheight+".png");\n  }\n  \n  \n    if (keyCode == 72) ',
            image: "",
          },
        },
        {
          title: "page_201",
          index: 21,
          params: {
            copy: "{\n\n  \n    offwidth=4000;\n    offheight=4000;\n    sz=offwidth/1000;\n\n    randomSeed(seed);\n    noiseSeed(seed);\n    offgfx= ",
            image: "",
          },
        },
        {
          title: "page_202",
          index: 22,
          params: {
            copy: "createGraphics(offwidth,offheight);\n    sourceImage= createImage(offwidth,offheight);\n\n    drawphase=0;\n    saveit=true;\n    gi=0;\n    gj=0;\n    loop();\n    \n}\n\n}\n\n\n//replacement randoms\nfunction randomint( x)\n{\n  return Math.floor(random(x));\n  //return Math.floor(fxrand()*x);\n}\n\nfunction randomrange(x,y)\n{\n//  let nr = (y - x) ;\n // return (fxrand()*nr) + x;\n  return random(x,y);\n}\n\nfunction randomintrange(x,y)\n",
            image: "",
          },
        },
        {
          title: "page_203",
          index: 23,
          params: {
            copy: "{\n  //let nr = (y - x) ;\n  //return  Math.floor((fxrand()*nr) + x);\n  return  Math.floor(random(x,y));\n}\n\n",
            image: "",
          },
        },
        {
          title: "page_204",
          index: 24,
          params: {
            copy: "function randomfloat( x)\n{\n  return random(x);\n //return fxrand()*x;\n}\n  \n  \n\n\nfunction linelength(x1, y1, x2, y2) {\n    var len1;\n    len1 = sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - ",
            image: "",
          },
        },
        {
          title: "page_205",
          index: 25,
          params: {
            copy: "y1)));\n    return int(len1);\n}\n\nfunction myline(x1, y1, x2, y2, w1, end, dest) {\n    var len, segments, ww;\n    var dx1,dy1,dx2,dy2;\n\n//noiseSeed(seedit);\n\n    // work out length\n    len = linelength(x1, y1, x2, y2);\n    // adapt this to me more the longer the len\n    segments = len / (15*sz);\n    if (segments &lt; 2)\n        segments = 2;\n\n    // stroke can thicken at start, end or middle\n  // currently set to just ",
            image: "",
          },
        },
        {
          title: "page_206",
          index: 26,
          params: {
            copy: "middle\n    ww = 1;\n    dx1=x1;\n    dy1=y1;\n\n    for (var pp = 0; pp &lt; segments+1; pp++) {\n      //find next segment point\n      dx2 = (x1 + ( (x2 - x1) /  segments) * pp);\n      dy2 = (y1 + ( (y2 - y1) /  segments) * pp);\n      \n        if(end==1)\n         ww = pp * ( w1/segments);\n         \n        // fat middle\n        if(end==2)\n          {\n            if(ppww = pp * ( (w1*2)/segments);\n        else\n            ww = (segments-pp) * ( (w1*2)/segments);\n          }\n      \n      \n        if (ww &gt; w1) ww = w1;\n        if (ww &lt; 1)  ww = 1;\n        \n        dest.strokeWeight(ww);\n\n        //add some wiggle\n      if(wiggle)\n       ",
            image: "",
          },
        },
        {
          title: "page_207",
          index: 27,
          params: {
            copy: "{\n         dx2 +=( 0-2+int(noise(dx2*dy1)*2)) *sz;\n         dy2 +=( 0-2+ int(noise(dy2*dx1)*2)) *sz;\n\n      }\n      if(punchcard)\n       {\n          dx2 +=( 0-2+int(noise(dy2)*2)) *sz;\n          dy2 +=( 0-2+ int(noise(dx2)*2)) *sz;\n      }\n\n        //draw this segment\n        dest.line(dx1, dy1, dx2, dy2);\n\n        // set point one to the current segment point\n        dx1=dx2;\n        dy1=dy2;\n    }\n}\n\n",
            image: "",
          },
        },
      ],
    },
    art12: {
      art: "Crayon Fever",
      id: "art12",
      params: {
        seed: 112,
        rows: 10,
        cols: 10,
      },
      images: [],
      pages: [
        {
          title: "page_211",
          index: 0,
          params: {
            copy: "let particles = []\nlet particlesBackup = []\n// let pallet = ['#577399', '#BDD6EB', '#FE5F55', '#FE9587', '#FAE38E']\nlet pallet = [['#577399', '#BDD6EB'], ['#FE5F55', '#FE9587'], ['#FF8D47', '#FFD396'], ['#12948A', '#A5FAD5']]\nlet secondaryPallet = ['#577399', '#BDD6EB', '#FE5F55', '#FE9587', '#FF8D47', '#FFD396', '#12948A', '#A5FAD5']\n// let pallet = [['#00B3FA', '#45EBF7'], ['#C485FF', '#E6C0FA'], ['#F23A74', '#FF69AC'], ['#FFD7E2', '#FFF5FA'], ['#B3F6FF', '#E8FDFF'], ['#FFD7E2', '#FFF5FA'], ['#B3F6FF', '#E8FDFF']]\n// let secondaryPallet = ['#00B3FA', '#45EBF7', '#C485FF', '#E6C0FA', '#FF69AC', '#4DFAD2', '#F8608A', '#FFD7E2', '#FFF5FA', '#41C4F7', '#B3F6FF', '#E8FDFF']\n",
            image: "",
          },
        },
        {
          title: "page_212",
          index: 1,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_213",
          index: 2,
          params: {
            copy: "let flowfield\nlet voronoiCells\nlet cellColors = []\nlet cellSecColors = []\nlet cellFlowFields = []\nlet cellAngGap = []\nlet refreshed = false\n\nfunction setup() {\n\tcreateCanvas(720, 720);\n\tstrokeCap(PROJECT)\n\tbackground(color('#FAF8F0'))\n\t// noLoop()\n\tlet flowfields = [new FlowField()]\n\n\t/* ボロノイ分割する */\n\tprepareVoronoi()\n\tfor(let i = 0; i &lt; voronoiCells.length; i++) {\n\t\tcellColors.push((random(pallet)))\n\t\tcellSecColors[i] = []\n\t\tcellSecColors[i].push(random(secondaryPallet))\n\t\tif (random() &lt; 0.5) cellSecColors[i].push(random(secondaryPallet))\n\t\tcellFlowFields.push(random(flowfields))\n\t\tcellAngGap.push(0)\n\t",
            image: "",
          },
        },
        {
          title: "page_214",
          index: 3,
          params: {
            copy: "}\n\n\t/* Particleをばらまく */\n\tlet diskSampling = new PoissonDiskSampling({\n\t\tshape: [width*2, height*2],\n\t\tminDistance: 8,\n\t\tmaxDistance: 8,\n\t\ttries: 20\n\t})\n\tlet samplings = diskSampling.fill()\n\tdiskSampling = new PoissonDiskSampling({\n\t\tshape: [width*2, height*2],\n\t\tminDistance: 8,\n\t\tmaxDistance: 8,\n\t\ttries: 20\n\t})\n\tsamplings = samplings.concat(diskSampling.fill())\n\tdiskSampling = new PoissonDiskSampling({\n\t\tshape: [width*2, height*2],\n\t\tminDistance: ",
            image: "",
          },
        },
        {
          title: "page_215",
          index: 4,
          params: {
            copy: "8,\n\t\tmaxDistance: 8,\n\t\ttries: 20\n\t})\n\tsamplings = samplings.concat(diskSampling.fill())\n\n\tfor(pos of samplings) {\n\t\tlet cellIndex = voronoiGetSite(pos[0], pos[1])\n\t\tparticles.push(new Particle(pos[0] - width/2, pos[1] - height/2, random() &lt; 1/3 ? color(random(cellSecColors[cellIndex])) : color(random(cellColors[cellIndex])), cellFlowFields[cellIndex], cellAngGap[cellIndex], 0))\n\t}\n\n}\n\nfunction refresh() {\n\tparticles = []\n\tcellColors = []\n\tcellSecColors = []\n\tcellFlowFields = []\n\tcellAngGap = []\n\n\tflowfields = [new FlowField(), new ",
            image: "",
          },
        },
        {
          title: "page_216",
          index: 5,
          params: {
            copy: "FlowField()]\n\n\t\n\t",
            image: "",
          },
        },
        {
          title: "page_217",
          index: 6,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_218",
          index: 7,
          params: {
            copy: "/* ボロノイ分割する */\n\tprepareVoronoi()\n\tfor(let i = 0; i &lt; voronoiCells.length; i++) {\n\t\tcellColors.push((random(pallet)))\n\t\tcellSecColors[i] = []\n\t\tcellSecColors[i].push(random(secondaryPallet))\n\t\tif (random() &lt; 0.5) cellSecColors[i].push(random(secondaryPallet))\n\t\tcellFlowFields.push(random(flowfields))\n\t\tcellAngGap.push(0)\n\t}\n\n\t/* Particleをばらまく */\n\tlet diskSampling = new ",
            image: "",
          },
        },
        {
          title: "page_219",
          index: 8,
          params: {
            copy: "PoissonDiskSampling({\n\t\tshape: [width*2, height*2],\n\t\tminDistance: 8,\n\t\tmaxDistance: 8,\n\t\ttries: 20\n\t})\n\tlet samplings = ",
            image: "",
          },
        },
        {
          title: "page_220",
          index: 9,
          params: {
            copy: "diskSampling.fill()\n\tdiskSampling = new PoissonDiskSampling({\n\t\tshape: [width*2, height*2],\n\t\tminDistance: 8,\n\t\tmaxDistance: 8,\n\t\ttries: 20\n\t})\n\tsamplings = samplings.concat(diskSampling.fill())\n\tdiskSampling = new PoissonDiskSampling({\n\t\tshape: [width*2, height*2],\n\t\tminDistance: 8,\n\t\tmaxDistance: 8,\n\t\ttries: 20\n\t})\n\tsamplings = samplings.concat(diskSampling.fill())\n\n\tfor(pos of samplings) {\n\t\tlet cellIndex = voronoiGetSite(pos[0], pos[1])\n\t\tparticles.push(new Particle(pos[0] - width/2, pos[1] - height/2, random() &lt; 1/3 ? color(random(cellSecColors[cellIndex])) : color(random(cellColors[cellIndex])), cellFlowFields[cellIndex], cellAngGap[cellIndex], 1))\n\t}\n\t",
            image: "",
          },
        },
        {
          title: "page_221",
          index: 10,
          params: {
            copy: "refreshed = true\n}\n\nfunction prepareVoronoi() {\n\tlet pdsVoronoi = new PoissonDiskSampling({\n\t\tshape: [width*2, height*2],\n\t\tminDistance: 5,\n\t\tmaxDistance: 200,\n\t\ttries: 20,\n\t\tdistanceFunction: function (p) {\n\t\t\tlet factor = (noise(p[0] * 0.001 + 1000, p[1] * 0.001) * 10) % 2\n\t\t\tif (factor &gt; 1) factor = 2 - factor\n\t\t\treturn factor; // value between 0 and 1\n\t\t}\n\t})\n\tlet pointsVoronoi = pdsVoronoi.fill()\n\n\tvoronoiSites(pointsVoronoi)\n\tvoronoi(width*2, height*2, ",
            image: "",
          },
        },
        {
          title: "page_222",
          index: 11,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_223",
          index: 12,
          params: {
            copy: "true);\n\n\tvoronoiCells = voronoiGetCells()\n\n}\n\nfunction draw() {\n\tfor(let j = 0; j &lt; particles.length; j++) {\n\t\tparticles[j].update()\n\t\tif(particles[j].isDead) {\n\t\t\tparticles.splice(j, 1)\n\t\t\tj--\n\t\t} else ",
            image: "",
          },
        },
        {
          title: "page_224",
          index: 13,
          params: {
            copy: "{\n\t\t\tparticles[j].show()\n\t\t}\n\t}\n\tif(particles.length == 0 &amp;&amp; !refreshed) refresh()\n}\n\nclass Particle {\n\tconstructor(_x, _y, col, flowfield, angGap, mode) {\n\t\tthis.initialPos = createVector(_x, _y)\n\t\tthis.pos = this.initialPos.copy()\n\t\tthis.posPrev = this.initialPos.copy()\n\t\tthis.isDead = false\n\t\tthis.lifeMax = ceil(random(30, 55))\n\t\tthis.life = this.lifeMax\n\t\tthis.flowfield = flowfield\n\t\tthis.angGap = angGap\n\n\t\tthis.col = col\n\t\tthis.strokeWidth = random(0.5, 4)\n\n\t\tthis.mode = mode\n\t}\n\n\tupdate() ",
            image: "",
          },
        },
        {
          title: "page_225",
          index: 14,
          params: {
            copy: "{\n\t\tlet moveStep = 1\n\t\tlet moveAng = this.flowfield.getAng(this.pos.x, this.pos.y) + this.angGap\n\t\tthis.posPrev = this.pos.copy()\n\t\tthis.pos.add(createVector(moveStep * cos(moveAng), moveStep * sin(moveAng)))\n\t\tthis.life--\n\n\t\tif(this.life &lt;= 0 || this.outOfArea()) {\n\t\t\tthis.isDead = true\n\t\t}\n\t}\n\n\tshow() {\n\t\tif(this.mode == 0 || dist(this.pos.x, this.pos.y, width/2, height/2) &gt; 120 * 1.2) {\n\t\t\tstroke(this.col)\n\t\t\tstrokeWeight(0.5)\n\t\t\tlet posRad = sqrt(random())\n\t\t\tlet posAng = random(PI)\n\t\t\tlet length = random(5) / 2\n\t\t\tlet ang =random(PI)\n\t\t\tline(\n\t\t\t\tthis.pos.x + posRad * cos(posAng) + length * cos(ang),\n\t\t\t\t",
            image: "",
          },
        },
        {
          title: "page_226",
          index: 15,
          params: {
            copy: "this.pos.y + posRad * sin(posAng) + length * sin(ang),\n\t\t\t\tthis.pos.x + posRad * cos(posAng) + length * cos(ang + PI),\n\t\t\t\tthis.pos.y + posRad * sin(posAng) + length * sin(ang + PI)\n\t\t\t)\n\t\t}\n\t}\n\n\toutOfArea() {\n\t\treturn this.pos.x &lt; width * -0.5 || this.pos.x &gt; width * 1.5 || this.pos.y &lt; height * -0.5 || this.pos.y &gt; height * 1.5\n\t}\n}\n\nclass FlowField {\n\tconstructor() {\n\t\tthis.xChange = random(random(TAU))\n\t\tthis.yChange = random(random(TAU))\n\t\tthis.xStartAngle = random(TAU)-this.xChange/2\n\t\tthis.yStartAngle = random(TAU)-this.yChange/2\n\n\t\tthis.leftX = width * ",
            image: "",
          },
        },
        {
          title: "page_227",
          index: 16,
          params: {
            copy: "-0.5\n\t\tthis.rightX = width * 1.5\n\t\tthis.topY = height * -0.5\n\t\tthis.bottomY = height * 1.5\n\t}\n\n\tgetAng(_x, _y) {\n\t\tlet vecAng = this.xStartAngle + this.xChange*2 * (_x - this.leftX) / (this.rightX - this.leftX)\n\t\tvecAng += this.yStartAngle + this.yChange*2 * (_y - this.topY) / (this.bottomY - this.topY) + noise(_x * 0.005, _y * 0.005)\n\t\treturn vecAng\n\t}\n}",
            image: "",
          },
        },
      ],
    },
    art13: {
      art: "200807",
      id: "art13",
      params: {
        seed: 113,
        rows: 10,
        cols: 10,
      },
      images: [],
      pages: [
        {
          title: "page_231",
          index: 0,
          params: {
            copy: 'let unit = [];\nlet COLS = [\n\tcreateCols("https://coolors.co/310c30-fb5b37-650156"),\n\tcreateCols("https://coolors.co/bfdfe3-9ed5eb-025374"),\n\tcreateCols("https://coolors.co/dcd9c6-707070-000000")\n]\nlet unitSize = Math.random()*100 + 80;\n',
            image: "",
          },
        },
        {
          title: "page_232",
          index: 1,
          params: {
            copy: "let pipeWeight = Math.random()*0.2 + 0.7;\n\nfunction setup() {\n\tcreateCanvas(windowWidth, windowHeight);\n\tCOLS = random(COLS);\n\tbackground(COLS[0]);\n\tlet span = ",
            image: "",
          },
        },
        {
          title: "page_233",
          index: 2,
          params: {
            copy: "unitSize;\n\t\n\tfor(let x = 0; x &lt;= width + span; x += span)\n\t{\n\t\tlet yArr = [];\n\t\tfor(let y = 0; y &lt;= height + span; y += span){yArr.push(new ConectedLine(x, y, span, unit.length, yArr.length, unit));}\n\t\tunit.push(yArr);\n\t}\n\t\n\t//コネクションを確認 &gt; リコネクト\n\tfor(let i = 0; i &lt; 10; i++)\n\t{\n\t\tfor(let yArr of unit)for(let u of yArr)u.checkConected();\n\t\tfor(let yArr of unit)for(let u of yArr)if(u.conectedCount == 0)u.randomEnd();\n\t}\n\t\n\t//延長する線を確認\n\tfor(let yArr of unit)for(let unit of yArr)unit.setExEnd();\n\tfor(let yArr of unit)for(let unit of yArr)unit.addExEndUnderCurve();\n\n\t//描画\n\tfor(let yArr of unit)for(let unit of yArr)unit.display();\n",
            image: "",
          },
        },
        {
          title: "page_234",
          index: 3,
          params: {
            copy: "}\n\n\nclass ConectedLine\n{\n\tconstructor(x,y,size,xi,yi,parent)\n\t{\n\t\tthis.pos = createVector(x,y);\n\t\tthis.size = size;\n\t\tthis.xi = xi;\n\t\tthis.yi = yi;\n\t\tthis.parent = parent;\n\t\tthis.ends = null;\n\t\tthis.randomEnd();\n\t\tthis.connectedEnd = [];\n\t\tthis.exEnd = [];\n\t",
            image: "",
          },
        },
        {
          title: "page_235",
          index: 4,
          params: {
            copy: "}\n\t\n\trandomEnd()\n\t{\n\t\tconst span = this.size;\n\t\tlet dir = [createVector(0,-1), createVector(1, 0), createVector(0, 1), createVector(-1, 0)];\n\t\tlet end_1_Index = floor(random(dir.length));\n\t\tlet end_1 = dir[end_1_Index];\n\t\tdir.splice(end_1_Index, 1);\n\t\tlet end_2_Index = floor(random(dir.length));\n\t\tlet end_2 = dir[end_2_Index];\n\t\tlet ends = [end_1,end_2];\n\t\tthis.ends =  ends;\n\t}\n\t\n\tcheckConected()\n\t{\n\t\tlet conectedCount = 0;\n\t\tlet connectedEnd = [];\n\t\tfor(let myEnd of this.ends)\n\t\t\t{\n\t\t\t\tlet nxi = myEnd.x + this.xi;\n\t\t\t\tlet nyi = myEnd.y + this.yi;\n\t\t\t\tif(nxi &lt; 0 || nxi &gt;= this.parent.length || nyi &lt; 0 || nyi &gt;= this.parent[0].length)continue;\n\t\t\t\tlet neighborEnds = this.parent[nxi][nyi].ends;\n\t\t\t\tfor(let nEnd of neighborEnds)\n\t\t\t\t{\n\t\t\t\t\tlet endSum = p5.Vector.add(myEnd, ",
            image: "",
          },
        },
        {
          title: "page_236",
          index: 5,
          params: {
            copy: "nEnd);\n\t\t\t\t\tif(endSum.x == 0 &amp;&amp; endSum.y == 0){\n\t\t\t\t\t\tconectedCount++;\n\t\t\t\t\t\tconnectedEnd.push(myEnd);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t}\n\t\tthis.connectedEnd = connectedEnd;\n\t}\n\t\n\t",
            image: "",
          },
        },
        {
          title: "page_237",
          index: 6,
          params: {
            copy: "setExEnd()\n\t{\n\t\tlet disConnectedEnd = [];\n\t\tfor(const end of this.ends){\n\t\t\tlet isConnected = false;\n\t\t\tfor(const cEnd of this.connectedEnd){if(end.x == cEnd.x &amp;&amp; end.y == cEnd.y)isConnected = true;}\n\t\t\tif(isConnected == false)disConnectedEnd.push(end);\n\t\t}\n\t\tfor(const end of disConnectedEnd)\n\t\t{\n\t\t\tlet xi = end.x + this.xi;\n\t\t\tlet yi = end.y + this.yi;\n\t\t\tif(xi &lt; 0 || xi &gt;= this.parent.length || yi &lt; 0 || yi &gt;= this.parent[0].length)continue;\n\t\t\tlet targetUnit = this.parent[xi][yi];\n\t\t\ttargetUnit.exEnd.push(p5.Vector.mult(end, ",
            image: "",
          },
        },
        {
          title: "page_238",
          index: 7,
          params: {
            copy: "-1));\n\t\t}\n\t}\n\t\n\taddExEndUnderCurve()\n\t{\n\t\tif(this.exEnd.length != 1)return;\n\t\tlet endDot =  p5.Vector.dot(this.ends[0], this.ends[1]);\n\t\tif(endDot != -1)//カーブしている場合\n\t\t{\n\t\t\tthis.exEnd.push(p5.Vector.mult(this.exEnd[0], -1));\n\t\t}\n\t",
            image: "",
          },
        },
        {
          title: "page_239",
          index: 8,
          params: {
            copy: "}\n\t\n\tdrawUnit(endsArr, size = this.size, weight = pipeWeight)\n\t{\n\t\trectMode(CENTER);\n\t\tlet endPos = [];\n\t\tfor(const end of endsArr)\n\t\t{\n\t\t\tlet pos = p5.Vector.add(p5.Vector.mult(end, this.size/2), this.pos);\n\t\t\tendPos.push(pos);\n\t\t}\n\t\t\n\t\tif(endsArr.length == 1){\n\t\t\tpush();\n\t\t\ttranslate(this.pos);\n\t\t\trotate(atan2(endsArr[0].y,endsArr[0].x));\n\t\t\tpipedRect(size*0.25,0, size*0.5, size*weight);\n\t\t\tpop();\n\t\t}\n\t\t\n\t\tif(endsArr.length == 2)\n\t\t{\n\t\t\tlet dot = p5.Vector.dot(endsArr[0], endsArr[1]);\n\t\t\tlet r0 = atan2(endsArr[0].y,endsArr[0].x);\n\t\t\tlet r1 = atan2(endsArr[1].y,endsArr[1].x);\n\n\t\t\tif(dot == -1)//180°\n\t\t\t{\n\t\t\t\t",
            image: "",
          },
        },
        {
          title: "page_240",
          index: 9,
          params: {
            copy: "push();\n\t\t\t\ttranslate(this.pos);\n\t\t\t\trotate(min(r0,r1));\n\t\t\t\tpipedRect(0,0, size, size*weight);\n\t\t\t\tpop();\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tpush();\n\t\t\t\ttranslate(this.pos);\n\t\t\t\trotate(min(r0,r1) + PI);\n\t\t\t\tif(min(r0,r1) == -PI &amp;&amp; max(r0,r1) == PI/2)rotate(-PI/2);\n\t\t\t\tif(min(r0,r1) == -PI/2 &amp;&amp; max(r0,r1) == PI)rotate(-PI/2);\n\t\t\t\t\n\t\t\t\tpipedRect(0, -size/2 +  size * (1-weight) * 0.25, size*weight, size * (1-weight)*0.5);\n\t\t\t\tpipedRect(-size/2 +  size * (1-weight) * 0.25, 0, size * (1-weight)*0.5, size*weight);\n\t\t\t\tpipedArc(-size/2 * weight,-size/2 * weight, size*2 * weight, size*2 * weight, 0, PI/2);\n\t\t\t\tpop();\n\t\t\t}\n\t\t}\n\t",
            image: "",
          },
        },
        {
          title: "page_241",
          index: 10,
          params: {
            copy: '}\n\n\tdisplay()\n\t{\n\t\tthis.drawUnit(this.exEnd);\n\t\tthis.drawUnit(this.ends);\n\t}\n}\n\n\nfunction pipedRect(cx,cy,w,h)\n{\n\tnoStroke();\n\tfill(COLS[1]);\n\trectMode(CENTER);\n\trect(cx,cy,w,h);\n\tlet ns = 0.01;\n\tfill(COLS[2] + "50");\n\tif(w&gt;h){\n\t\tfor(let i = 0; i &lt; w*h/2; i++)\n\t\t{\n\t\t\tlet y = (1-pow(random(),3) ) * h/2;\n\t\t\ty *= random() &gt; 0.5 ? -1 : 1;\n\t\t\ty += cy;\n\t\t\tlet x = cx + random(-w/2, w/2);\n\t\t\tcircle(x,y,1 + noise(x*ns, y*ns));\n\t\t',
            image: "",
          },
        },
        {
          title: "page_242",
          index: 11,
          params: {
            copy: "}\n\t}\n\telse{\n\t\tfor(let i = 0; i &lt; w*h/2; i++)\n\t\t{\n\t\t\tlet x = ",
            image: "",
          },
        },
        {
          title: "page_243",
          index: 12,
          params: {
            copy: "",
            image: "",
          },
        },
        {
          title: "page_244",
          index: 13,
          params: {
            copy: '(1-pow(random(),3) ) * w/2;\n\t\t\tx *= random() &gt; 0.5 ? -1 : 1;\n\t\t\tx += cx;\n\t\t\tlet y = cy + random(-h/2, h/2);\n\t\t\tcircle(x,y,1 + noise(x*ns, y*ns));\n\t\t}\n\t}\n}\n\nfunction pipedArc(x,y,w,h,r1,r2)\n{\n\tlet ns = 0.01;\n\tnoStroke();\n\tfill(COLS[1]);\n\tarc(x,y,w,h,r1,r2);\n\tfill(COLS[2] + "50");\n\tfor(let i = 0; i &lt; w/2*w/2*PI/4/2; i++)\n\t{\n\t\tlet angle = lerp(r1,r2,random());\n\t\tlet radius = w/2 * (1- pow(random(), 3));\n\t\tlet cx = x + ',
            image: "",
          },
        },
        {
          title: "page_245",
          index: 14,
          params: {
            copy: "cos(angle)*radius;\n\t\tlet cy = y + sin(angle)*radius;\n\t\tcircle(cx,cy,1+ noise(cx*ns, cy*ns));\n\t}\n}\n\nfunction createCols(_url)\n{\n  let slash_index = _url.lastIndexOf('/');\n  let pallate_str = _url.slice(slash_index + 1);\n  let arr = pallate_str.split('-');\n  for (let i = 0; i &lt; arr.length; i++) {\n    arr[i] = '#' + arr[i];\n  }\n  return arr;\n}\n",
            image: "",
          },
        },
      ],
    },
  };

  // sectionKeys.forEach((key) => {
  //   const section = sections[key];
  //   const sectionToSave = {
  //     art: section.art,
  //     id: section.id,
  //     params: {
  //       seed: section.params.seed,
  //       rows: section.params.rows,
  //       cols: section.params.cols,
  //     },
  //     images: section.images,
  //     pages: section.pages.map((page) => {
  //       return {
  //         title: page.title,
  //         index: page.index,
  //         params: {
  //           copy: page.params.copy,
  //           image: page.params.image,
  //         },
  //       };
  //     }),
  //   };
  //   sectionsToSave[key] = sectionToSave;
  // });

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
