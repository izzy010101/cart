<script setup>
import {useImageStore} from "@/stores/imageStore.js";
import { ref, computed } from "vue";


const imageStore= useImageStore();

const mainImageDisplay = computed(() => {
  return imageStore.mainImage;
})

const thumbnails = computed(() => imageStore.thumbnails);

const updateImg = (newImage) => {
  imageStore.updateMainImage(newImage);
}

const showOverlay = (index) => {
  imageStore.showOverlay(index);
}

const hideOverlay = (index) => {
  imageStore.hideOverlay(index);
}


const sneakerQuantity = computed(() => imageStore.quantity);
const increment = () => {
   imageStore.incrementQuantity();
}

const decrement = () => {
  imageStore.decrementQuantity();
}

const sneakerPrice =  computed(() => {
  return imageStore.price;
})
  const addToCart = (quantity, price) => {
    imageStore.addToCart();
  };

const sneakerCart = computed(() => {
  return imageStore.cart;
})

</script>
<template>

<div class="shoeImages mt-12 w-[45%]">

    <img
        :src="mainImageDisplay"
        alt="main_image_card"
        class="mainImage w-[100%] rounded-xl">

    <div class="thumbnails rounded-xl flex flex-row gap-10 mt-8 cursor-pointer">
        <div
            v-for="(img, index) in thumbnails"
            :key="index"
            class="thumbnail-container"
            @mouseover="showOverlay(index)"
            @mouseleave="hideOverlay(index)"
            @click="updateImg(img.main)"
        >
          <img
              :src="img.thumbnail"
              alt="thumbnail_img"
              class="thumbnail rounded-xl w-[100%]"
              :class = "['thumbnail', img.isSelected ? 'selected' : '']"
          >
          <div class="overlay" :class="{ active: img.isHovered || img.isSelected }"></div>
        </div>
    </div>
  </div>

  <div class="w-[50%] inline-block">
    <div class="h-screen flex flex-col mt-20 gap-4 w-[80%] ml-24">
      <h3 class="text-2xl font-bold text-gray-500 text-left">SNEAKER COMPANY</h3>
      <h1 class="text-5xl font-bold">Fall Limited Edition Sneakers</h1>
      <p class="text-gray-400 text-xl mt-12">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div class="flex gap-4 mt-8">
        <span class="font-bold text-4xl">&dollar; {{ sneakerPrice }}</span>
        <span class="discount font-bold text-white text-xl bg-gray-800 px-3 py-1 rounded-xl items-center">50&#37;</span>
      </div>

      <s class="oldPrice text-gray-400 text-xl font-bold">&dollar; 250</s>

      <div class="buttons flex gap-10 mt-6">
        <div class="counter flex gap-4 bg-[#f7f8fd] rounded-xl text-xl">
          <div class="cursor-pointer text-[#ff7d19] font-bold py-4 px-4 text-2xl" @click="decrement()">-</div>
          <div class="font-bold px-4 py-4">{{ sneakerQuantity }}</div>
          <div class="cursor-pointer text-[#ff7d19] font-bold py-4 px-4 text-2xl" @click="increment()">+</div>
        </div>
      <button class="addToCart bg-[#ff7d19] text-black font-bolder px-16 rounded-xl text-xl flex items-center justify-center gap-2" @click="addToCart">
        <img src="/src/assets/icons/cart_icon.png" alt="cart_icon" class="w-[20px]  h-[20px]">
        <span>Add To Cart</span>
      </button>


      </div>
    </div>
  </div>


</template>

<style scoped>

.thumbnail-container {
  position: relative;
  width: 20%;
}

.thumbnail {
  display: block;
  width: 100%;
  border-radius: 8px;
}

.thumbnail.selected {
  border: 3px solid #ff7d19;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay.active {
  opacity: 1;
}


</style>



