<template>
<div class="container">
  <div class="gallery">
    <!-- 25% -->
    <div class="filter"> 
      <ul>
        <li @click="searchValue = ''">Wszystkie</li>
        <li 
        v-for="(category, name) in categories"
        :key="name"
        @click="updateSearch(name)"
        >{{ category }}
        </li>
        
      </ul>
    </div>

    <!-- 75%, 3 images desktop/tablet, 1/2 mobile view -->
    <div class="gallery__images">
      <VPictureSwipe :items="filteredItems" :options="options" />
    </div>

  </div>
</div>
</template>

<script src="./VGallery.js"></script>


<style lang="scss">
  @import "./VGallery.scss";
</style>