// moved files from pixel-art-maker forked from crazy-88
// see previous commit history at pixel-art-maker

// ( function() {
  'use strict';

  let paintBrushDown = false
  let brushColor = 'black'

  const drawCanvas = () => {
    let createCanvas = document.querySelector('#canvas')

    for (var i = 0; i < 330; i++) {
      const pixel = document.createElement('div')
      // add class pixel on each
      pixel.classList.add('pixel')
      createCanvas.appendChild(pixel)

      // pixel.onclick = function(e){
      //   e.target.style.backgroundColor = 'black'
      // }

      pixel.addEventListener('mousedown', (e) => {
        e.preventDefault()
        e.target.style.backgroundColor = brushColor
        console.log('in EL mousedown--------->');
        paintBrushDown = true
      })

      pixel.addEventListener('mouseover', (e) => {
        e.preventDefault()
        if (paintBrushDown) {
          console.log('paintbrush is DOWN!>>>');
          e.target.style.backgroundColor = brushColor
        }
      })

      // on mouseover, if paintBrushDown = true, color pixel

      pixel.addEventListener('mouseup', () => {
        console.log('in EL mouseup $$$$$$$$$$$');
        paintBrushDown = false
        // stop painting
        // stop adding color to div
      })

    } // end for loop
  } // end drawCanvas

  const drawPalette = () => {
    let createPalette = document.querySelector('#palette')
    let createBrushPalette = document.querySelector('#showCurrentColor')

    // create box to show current color
    const currentColor = document.createElement('div')
    currentColor.classList.add('currentBrushColor')
    showCurrentColor.appendChild(currentColor)

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

      //set color when click on palette color
      paletteColor.addEventListener('click', (event) => {
        brushColor = color
        currentColor.style.backgroundColor = brushColor
        console.log('create brushColor>>>>', brushColor);
      })

      palette.appendChild(paletteColor)

    }

  }

    // createCanvas.addEventListener('click', (event) => {
    //   if (event.target === document.querySelector('#canvas')) {
    //     return;
    //   }

  drawCanvas()
  drawPalette()

// })()
