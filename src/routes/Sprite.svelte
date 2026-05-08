<script>
  // The path to your spritesheet image
  export let src; 
  
  // Dimensions of a single frame
  export let width = 64; 
  export let height = 64; 
  
  // The X and Y coordinates (or column/row index) of the sprite you want
  export let x = 0; 
  export let y = 0; 
  
  // Optional scale if you want to resize the sprite
  export let scale = 1; 

  // Calculate the pixel offset based on grid coordinates
  // If x=1 and width=32, the offset is -32px
  $: bgPosX = -(x * width) + 'px';
  $: bgPosY = -(y * height) + 'px';
</script>

<div 
  class="sprite" 
  style="
    width: {width}px; 
    height: {height}px; 
    background-image: url({src}); 
    background-position: {bgPosX} {bgPosY};
    transform: scale({scale});
  "
></div>

<style>
  .sprite {
    display: inline-block;
    background-repeat: no-repeat;
    image-rendering: pixelated; 
  }
</style>