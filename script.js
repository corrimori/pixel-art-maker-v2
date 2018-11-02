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

    // const colors = [
    //   'black', 'white', 'green', 'yellow', 'red', 'blue'
    // ]

    // greyscale palette
    const colors = [
      'white','#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#708090', '#2F4F4F', 'black'
    ]

    for (const color of colors) {
      const paletteColor = document.createElement('div')
      // paletteColor.classList.add('paletteColor', colors[0])
      paletteColor.classList.add('paletteColor', color)
      console.log('color>>>>', color)
      paletteColor.style.backgroundColor = color
      console.log('in create palette color w/ added class --------->', paletteColor)

      paletteColor.addEventListener('click', (event) => {
        console.log('in event listener-- add click to palette color ##########');
        paletteColor.style.backgroundColor = 'green'
        // brushColor = color
        // ???.style.backgroundColor = color
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
