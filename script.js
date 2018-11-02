// moved files from pixel-art-maker forked from crazy-88
// see previous commit history at pixel-art-maker

// ( function() {
  'use strict';

  let paintBrushDown = false
  let brushColor = 'deeppink'

  const drawCanvas = () => {
    let createCanvas = document.querySelector('#canvas')

    for (var i = 0; i < 330; i++) {
      const pixel = document.createElement('div')
      // add class pixel on each
      pixel.classList.add('pixel')
      console.log('pixel.classList------->', pixel.classList)
      createCanvas.appendChild(pixel)

      // pixel.onclick = function(e){
      //   e.target.style.backgroundColor = 'black'
      // }

      pixel.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = brushColor
        // add paint coloring
        // color div to color of paint brush
      })

      pixel.addEventListener('mouseup', () => {
        // stop painting
        // stop adding color to div
      })

    } // end for loop
  } // end drawCanvas

  const drawPalette = () => {
    let createPalette = document.querySelector('#palette')
    let createBrushPalette = document.querySelector('#showCurrentColor')

    // draw current color box
    const currentColor = document.createElement('div')
    currentColor.classList.add('currentBrushColor')
    createBrushPalette.appendChild(currentColor)

    const colors = [
      'black', 'white', 'green', 'yellow', 'red', 'blue'
    ]

    // greyscale palette
    // const colors = [
    //   'white','#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#708090', '#2F4F4F', 'black'
    // ]

    for (const color of colors) {
      const paletteColor = document.createElement('div')
      // add paletteColor class to each palette color
      paletteColor.classList.add('paletteColor', color)
      paletteColor.style.backgroundColor = color
      console.log('in create palette color w/ added class --------->', paletteColor)

      //set color when click on palette color
      paletteColor.addEventListener('click', (event) => {
        console.log('in event listener-- add click to palette color ##########');
        brushColor = color
        console.log('brushColor---->', brushColor);

        currentColor.style.backgroundColor = brushColor
        console.log('create brushColor>>>>', brushColor);

      })

      palette.appendChild(paletteColor)

    }

    // const currentColor = document.createElement('div')
    // currentColor.classList.add('currentBrushColor')
    // currentColor.style.backgroundColor = brushColor
    // console.log('create brushColor>>>>', brushColor);
    //
    // createBrushPalette.appendChild(currentColor)


  }

    // createCanvas.addEventListener('click', (event) => {
    //   if (event.target === document.querySelector('#canvas')) {
    //     return;
    //   }

  drawCanvas()
  drawPalette()

// })()
