# Zen Garden Final Project
- Author: John M Harper
- Author: Jaron Hill
- Class: WDD 331-D

## Project Description
We set out to create scss files that styled the existing Zen Garden project without changing HTML content. The one change we made was to add the reference to styles.css. The original file placed the styles.css in the same directory as the index.html file. We didn't like that as it is best practice to keep images, styles, scripts, and other assetts in their own folder.

## Requirements (Semester Project + Best Practice)
01. The HTML must not change
02. The SASS files must be modular so that multiple students can contribute.
03. The whole project must be version controlled using Git.
04. The project must have 1 mixin.
05. The project must have 1 animation.
06. The project must be dynamic and mobile friendly.
07. The project must not use javascript.
08. The project must have 1 SVG image (icon, background, etc).
09. The project must incorporate the design principles we learned this semester.

## File Structure of Project
``` text
zen
├── README.md
├── design
│   └── collage.jpg
├── examples
│   ├── index.html
│   └── style.css
├── images
│   ├── 221-background.jpg
│   ├── background-large.jpg
│   ├── background-medium.jpg
│   ├── background-original.jpg
│   ├── background-small.jpg
│   ├── fairy-background-small.jpg
│   ├── hero-large.jpg
│   ├── hero-medium.jpg
│   ├── hero-original.jpg
│   ├── hero-small.jpg
│   ├── underwater-nature-fish-coral-seaweed-starfish-generated-by-ai.jpg
│   └── yellow-old-paper-texture.jpg
├── index.html
└── styles
    ├── _breakpoints.scss
    ├── _mixins.scss
    ├── main.scss
    ├── student1.scss
    ├── student2.scss
    ├── student3.scss
    ├── styles.css
    └── styles.css.map

5 directories, 25 files
```

We created a folder structure that housed assets by their type. For example, we grouped all of the sass files in a folder named "styles." We also created a folder named "images" to house all of the images. We also created a folder named "examples" to house the original index.html and style.css files. The index.html file remained in the root directory and was unchanged except for the **"../styles/styles.css"** reference change from **"style.css?v=8may2013."** reference. You can see that the original reference did not include the ../styles/ folder.

We optimized the images per breakpoint size. We wanted the page load to be as quick as possible **AND** we wanted the images to be as clear as possible, without pixelation. SVG images do not pixelate. But we also used jpg files for various effects.