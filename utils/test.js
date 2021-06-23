import * as PIXI from "pixi.js";
import image1 from "../public/images/gallery/1.jpg";
import image10 from "../public/images/gallery/10.jpg";
import image100 from "../public/images/gallery/100.jpg";
import image11 from "../public/images/gallery/11.jpg";
import image12 from "../public/images/gallery/12.jpg";
import image13 from "../public/images/gallery/13.jpg";
import image14 from "../public/images/gallery/14.jpg";
import image15 from "../public/images/gallery/15.jpg";
import image16 from "../public/images/gallery/16.jpg";
import image17 from "../public/images/gallery/17.jpg";
import image18 from "../public/images/gallery/18.jpg";
import image19 from "../public/images/gallery/19.jpg";
import image2 from "../public/images/gallery/2.jpg";
import image20 from "../public/images/gallery/20.jpg";
import image21 from "../public/images/gallery/21.jpg";
import image22 from "../public/images/gallery/22.jpg";
import image23 from "../public/images/gallery/23.jpg";
import image24 from "../public/images/gallery/24.jpg";
import image25 from "../public/images/gallery/25.jpg";
import image26 from "../public/images/gallery/26.jpg";
import image27 from "../public/images/gallery/27.jpg";
import image28 from "../public/images/gallery/28.jpg";
import image29 from "../public/images/gallery/29.jpg";
import image3 from "../public/images/gallery/3.jpg";
import image30 from "../public/images/gallery/30.jpg";
import image31 from "../public/images/gallery/31.jpg";
import image32 from "../public/images/gallery/32.jpg";
import image33 from "../public/images/gallery/33.jpg";
import image34 from "../public/images/gallery/34.jpg";
import image35 from "../public/images/gallery/35.jpg";
import image36 from "../public/images/gallery/36.jpg";
import image37 from "../public/images/gallery/37.jpg";
import image38 from "../public/images/gallery/38.jpg";
import image39 from "../public/images/gallery/39.jpg";
import image4 from "../public/images/gallery/4.jpg";
import image40 from "../public/images/gallery/40.jpg";
import image41 from "../public/images/gallery/41.jpg";
import image42 from "../public/images/gallery/42.jpg";
import image43 from "../public/images/gallery/43.jpg";
import image44 from "../public/images/gallery/44.jpg";
import image45 from "../public/images/gallery/45.jpg";
import image46 from "../public/images/gallery/46.jpg";
import image47 from "../public/images/gallery/47.jpg";
import image48 from "../public/images/gallery/48.jpg";
import image49 from "../public/images/gallery/49.jpg";
import image5 from "../public/images/gallery/5.jpg";
import image50 from "../public/images/gallery/50.jpg";
import image51 from "../public/images/gallery/51.jpg";
import image52 from "../public/images/gallery/52.jpg";
import image53 from "../public/images/gallery/53.jpg";
import image54 from "../public/images/gallery/54.jpg";
import image55 from "../public/images/gallery/55.jpg";
import image56 from "../public/images/gallery/56.jpg";
import image57 from "../public/images/gallery/57.jpg";
import image58 from "../public/images/gallery/58.jpg";
import image59 from "../public/images/gallery/59.jpg";
import image6 from "../public/images/gallery/6.jpg";
import image60 from "../public/images/gallery/60.jpg";
import image61 from "../public/images/gallery/61.jpg";
import image62 from "../public/images/gallery/62.jpg";
import image63 from "../public/images/gallery/63.jpg";
import image64 from "../public/images/gallery/64.jpg";
import image65 from "../public/images/gallery/65.jpg";
import image66 from "../public/images/gallery/66.jpg";
import image67 from "../public/images/gallery/67.jpg";
import image68 from "../public/images/gallery/68.jpg";
import image69 from "../public/images/gallery/69.jpg";
import image7 from "../public/images/gallery/7.jpg";
import image70 from "../public/images/gallery/70.jpg";
import image71 from "../public/images/gallery/71.jpg";
import image72 from "../public/images/gallery/72.jpg";
import image73 from "../public/images/gallery/73.jpg";
import image74 from "../public/images/gallery/74.jpg";
import image75 from "../public/images/gallery/75.jpg";
import image76 from "../public/images/gallery/76.jpg";
import image77 from "../public/images/gallery/77.jpg";
import image78 from "../public/images/gallery/78.jpg";
import image79 from "../public/images/gallery/79.jpg";
import image8 from "../public/images/gallery/8.jpg";
import image80 from "../public/images/gallery/80.jpg";
import image81 from "../public/images/gallery/81.jpg";
import image82 from "../public/images/gallery/82.jpg";
import image83 from "../public/images/gallery/83.jpg";
import image84 from "../public/images/gallery/84.jpg";
import image85 from "../public/images/gallery/85.jpg";
import image86 from "../public/images/gallery/86.jpg";
import image87 from "../public/images/gallery/87.jpg";
import image88 from "../public/images/gallery/88.jpg";
import image89 from "../public/images/gallery/89.jpg";
import image9 from "../public/images/gallery/9.jpg";
import image90 from "../public/images/gallery/90.jpg";
import image91 from "../public/images/gallery/91.jpg";
import image92 from "../public/images/gallery/92.jpg";
import image93 from "../public/images/gallery/93.jpg";
import image94 from "../public/images/gallery/94.jpg";
import image95 from "../public/images/gallery/95.jpg";
import image96 from "../public/images/gallery/96.jpg";
import image97 from "../public/images/gallery/97.jpg";
import image98 from "../public/images/gallery/98.jpg";
import image99 from "../public/images/gallery/99.jpg";
import { backgroundFragment } from "../shaders/backgroundFragment";
import { stageFragment } from "../shaders/stageFragment";

const galleryImages = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
	image19,
	image20,
	image21,
	image22,
	image23,
	image24,
	image25,
	image26,
	image27,
	image28,
	image29,
	image30,
	image31,
	image32,
	image33,
	image34,
	image35,
	image36,
	image37,
	image38,
	image39,
	image40,
	image41,
	image42,
	image43,
	image44,
	image45,
	image46,
	image47,
	image48,
	image49,
	image50,
	image51,
	image52,
	image53,
	image54,
	image55,
	image56,
	image57,
	image58,
	image59,
	image60,
	image61,
	image62,
	image63,
	image64,
	image65,
	image66,
	image67,
	image68,
	image69,
	image70,
	image71,
	image72,
	image73,
	image74,
	image75,
	image76,
	image77,
	image78,
	image79,
	image80,
	image81,
	image82,
	image83,
	image84,
	image85,
	image86,
	image87,
	image88,
	image89,
	image90,
	image91,
	image92,
	image93,
	image94,
	image95,
	image96,
	image97,
	image98,
	image99,
	image100,
];

export default function test() {
	// Class to generate a random masonry layout, using a square grid as base
	class Grid {
		// The constructor receives all the following parameters:
		// - gridSize: The size (width and height) for smallest unit size
		// - gridColumns: Number of columns for the grid (width = gridColumns * gridSize)
		// - gridRows: Number of rows for the grid (height = gridRows * gridSize)
		// - gridMin: Min width and height limits for rectangles (in grid units)
		constructor(gridSize, gridColumns, gridRows, gridMin) {
			this.gridSize = gridSize;
			this.gridColumns = gridColumns;
			this.gridRows = gridRows;
			this.gridMin = gridMin;
			this.rects = [];
			this.currentRects = [
				{ x: 0, y: 0, w: this.gridColumns, h: this.gridRows },
			];
		}

		// Takes the first rectangle on the list, and divides it in 2 more rectangles if possible
		splitCurrentRect() {
			if (this.currentRects.length) {
				const currentRect = this.currentRects.shift();
				const cutVertical = currentRect.w > currentRect.h;
				const cutSide = cutVertical ? currentRect.w : currentRect.h;
				const cutSize = cutVertical ? "w" : "h";
				const cutAxis = cutVertical ? "x" : "y";
				if (cutSide > this.gridMin * 2) {
					const rect1Size = randomInRange(this.gridMin, cutSide - this.gridMin);

					const rect1 = Object.assign({}, currentRect, {
						[cutSize]: rect1Size,
					});

					const rect2 = Object.assign({}, currentRect, {
						[cutAxis]: currentRect[cutAxis] + rect1Size,
						[cutSize]: currentRect[cutSize] - rect1Size,
					});

					this.currentRects.push(rect1, rect2);
				} else {
					this.rects.push(currentRect);
					this.splitCurrentRect();
				}
			}
		}

		// Call `splitCurrentRect` until there is no more rectangles on the list
		// Then return the list of rectangles
		generateRects() {
			while (this.currentRects.length) {
				this.splitCurrentRect();
			}
			return this.rects;
		}
	}

	// Generate a random integer in the range provided
	function randomInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Get canvas view
	const view = document.querySelector("#view");
	// Loaded resources will be here
	// const resources = PIXI.Loader.shared.resources;
	// Target for pointer. If down, value is 1, else value is 0
	let pointerDownTarget = 0;
	// Useful variables to keep track of the pointer
	let pointerStart = new PIXI.Point();
	let pointerDiffStart = new PIXI.Point();
	let width, height, app, background, uniforms, diffX, diffY;

	// Variables and settings for grid
	const gridSize = 50;
	const gridMin = 3;
	const imagePadding = 20;
	let gridColumnsCount, gridRowsCount, gridColumns, gridRows, grid;
	let widthRest,
		heightRest,
		centerX,
		centerY,
		container,
		rects,
		images = [];

	// Set dimensions
	function initDimensions() {
		width = window.innerWidth;
		height = window.innerHeight;
		diffX = 0;
		diffY = 0;
	}

	// Set initial values for uniforms
	function initUniforms() {
		uniforms = {
			uResolution: new PIXI.Point(width, height),
			uPointerDiff: new PIXI.Point(),
			uPointerDown: pointerDownTarget,
		};
	}

	// Initialize the random grid layout
	function initGrid() {
		// Getting columns
		gridColumnsCount = Math.ceil(width / gridSize);
		// Getting rows
		gridRowsCount = Math.ceil(height / gridSize);
		// Make the grid 5 times bigger than viewport
		gridColumns = gridColumnsCount * 5;
		gridRows = gridRowsCount * 5;
		// Create a new Grid instance with our settings
		grid = new Grid(gridSize, gridColumns, gridRows, gridMin);
		// Calculate the center position for the grid in the viewport
		widthRest = Math.ceil(gridColumnsCount * gridSize - width);
		heightRest = Math.ceil(gridRowsCount * gridSize - height);
		centerX = (gridColumns * gridSize) / 2 - (gridColumnsCount * gridSize) / 2;
		centerY = (gridRows * gridSize) / 2 - (gridRowsCount * gridSize) / 2;
		// Generate the list of rects
		rects = grid.generateRects();
	}

	// Init the PixiJS Application
	function initApp() {
		// Create a PixiJS Application, using the view (canvas) provided
		app = new PIXI.Application({ view });
		// Resizes renderer view in CSS pixels to allow for resolutions other than 1
		app.renderer.autoDensity = true;
		// Resize the view to match viewport dimensions
		app.renderer.resize(width, height);

		const stageFilter = new PIXI.Filter(undefined, stageFragment, uniforms);
		app.stage.filters = [stageFilter];
	}

	// Init the gridded background
	function initBackground() {
		// Create a new empty Sprite and define its size
		background = new PIXI.Sprite();
		background.width = width;
		background.height = height;
		// Create a new Filter using the fragment shader
		// We don't need a custom vertex shader, so we set it as `undefined`
		const backgroundFilter = new PIXI.Filter(
			undefined,
			backgroundFragment,
			uniforms
		);
		// Assign the filter to the background Sprite
		background.filters = [backgroundFilter];
		// Add the background to the stage
		app.stage.addChild(background);
	}

	// Initialize a Container element for solid rectangles and images
	function initContainer() {
		container = new PIXI.Container();
		app.stage.addChild(container);
	}

	// program to get a random item from an array
	function getRandomElementFrom(arr) {
		// get random index value
		const randomIndex = Math.floor(Math.random() * arr.length);

		// get random item
		const item = arr[randomIndex];

		return item;
	}

	// Add solid rectangles and images
	function initRectsAndImages() {
		// Create a new Graphics element to draw solid rectangles
		const graphics = new PIXI.Graphics();
		// Select the color for rectangles
		graphics.beginFill(0x000000);
		// Loop over each rect in the list
		rects.forEach((rect) => {
			// Create a new Sprite element for each image
			const image = new PIXI.Sprite();
			// Set image's position and size
			image.x = rect.x * gridSize;
			image.y = rect.y * gridSize;
			image.width = rect.w * gridSize - imagePadding;
			image.height = rect.h * gridSize - imagePadding;
			// Set it's alpha to 0, so it is not visible initially
			// image.alpha = 1;
			// Add image to the list
			images.push(image);
			// Draw the rectangle
			graphics.drawRect(image.x, image.y, image.width, image.height);
		});
		// Ends the fill action
		graphics.endFill();
		// Add the graphics (with all drawn rects) to the container
		container.addChild(graphics);
		// Add all image's Sprites to the container
		images.forEach((image, index) => {
			container.addChild(image);
			image.texture = PIXI.Texture.from(image1);
			// if (index <= galleryImages.length - 1) {
			// 	image.texture = PIXI.Texture.from(getRandomElementFrom(galleryImages));
			// } else {
			// 	image.texture = PIXI.Texture.from(galleryImages[index]);
			// }
		});
	}

	// Start listening events
	function initEvents() {
		// Make stage interactive, so it can listen to events
		app.stage.interactive = true;

		// Pointer & touch events are normalized into
		// the `pointer*` events for handling different events
		app.stage
			.on("pointerdown", onPointerDown)
			.on("pointerup", onPointerUp)
			.on("pointerupoutside", onPointerUp)
			.on("pointermove", onPointerMove);
	}

	// On pointer down, save coordinates and set pointerDownTarget
	function onPointerDown(e) {
		const { x, y } = e.data.global;
		pointerDownTarget = 1;
		pointerStart.set(x, y);
		pointerDiffStart = uniforms.uPointerDiff.clone();
	}

	// On pointer up, set pointerDownTarget
	function onPointerUp() {
		pointerDownTarget = 0;
	}

	// On pointer move, calculate coordinates diff
	function onPointerMove(e) {
		const { x, y } = e.data.global;
		if (pointerDownTarget) {
			diffX = pointerDiffStart.x + (x - pointerStart.x);
			diffY = pointerDiffStart.y + (y - pointerStart.y);
			diffX =
				diffX > 0
					? Math.min(diffX, centerX + imagePadding)
					: Math.max(diffX, -(centerX + widthRest));
			diffY =
				diffY > 0
					? Math.min(diffY, centerY + imagePadding)
					: Math.max(diffY, -(centerY + heightRest));
		}
	}

	// Init everything
	function init() {
		initDimensions();
		initUniforms();
		initGrid();
		initApp();
		initBackground();
		initContainer();
		initRectsAndImages();
		initEvents();

		// Animation loop
		// Code here will be executed on every animation frame
		app.ticker.add(() => {
			// Multiply the values by a coefficient to get a smooth animation
			uniforms.uPointerDown +=
				(pointerDownTarget - uniforms.uPointerDown) * 0.075;
			uniforms.uPointerDiff.x += (diffX - uniforms.uPointerDiff.x) * 0.2;
			uniforms.uPointerDiff.y += (diffY - uniforms.uPointerDiff.y) * 0.2;
			// Set position for the container
			container.x = uniforms.uPointerDiff.x - centerX;
			container.y = uniforms.uPointerDiff.y - centerY;
		});
	}

	// Init the app
	init();
}
