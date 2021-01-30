<template>
  <div class="gallery">
    <!-- 25% -->
    <div> 
      <ul>
        <li>Tag 1</li>
        <li>Tag 2</li>
        <li>Tag 3</li>
      </ul>
    </div>

    <!-- 75%, 3 images desktop/tablet, 1/2 mobile view -->
    <div>
      <VPictureSwipe :items="items" :options="options" />
    </div>

  </div>
</template>

<script src="./VGallery.js"></script>

<style lang="scss">
  @import "./VGallery.scss";
</style>