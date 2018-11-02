// moved files from pixel-art-maker forked from crazy-88
// see previous commit history at pixel-art-maker

// ( function() {
  'use strict';

  let paintBrushDown = false
  let brushColor = 'deeppink'

  const drawCanvas = () => {
    let createCanvas = document.querySelector('#canvas')

    for (var i = 0; i < 264; i++) {
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


    // createCanvas.addEventListener('click', (event) => {
    //   if (event.target === document.querySelector('#canvas')) {
    //     return;
    //   }

  drawCanvas()

// })()
