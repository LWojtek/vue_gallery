<template>
<div class="container">
  <div class="gallery">
    <!-- 25% -->
    <div class="filter"> 
      <ul>
        <li>Wszystkie</li>
        <li>Sala Weselna</li>
        <li>Ogród</li>
        <li>Menu</li>
      </ul>
    </div>

    <!-- 75%, 3 images desktop/tablet, 1/2 mobile view -->
    <div class="gallery__images">
      <VPictureSwipe :items="items" :options="options" />
    </div>

  </div>
</div>
</template>

<script src="./VGallery.js"></script>

<style lang="scss">
  @import "./VGallery.scss";
</style>