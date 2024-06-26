<script setup>
// import { computed } from 'vue';
import { useImageStore } from '@/stores/imageStore.js';

const imageStore = useImageStore();



const clearCartAndStorage = () => {
  imageStore.removeStorageItem('cart');
};

</script>


<template>
  <div class="flex flex-col gap-10 bg-[#f9fafb]">
    <h1 class="text-gray-500 text-4xl font-bold">Order Summary</h1>
    <ul v-if="!imageStore.isLocalStorageEmpty()" class="text-lg">
      <li v-for="(item, index) in imageStore.loadCartLocalStorage()"
          :key="index"
      >
        <p class="flex flex-col w-[10%] h-[12%]">
          <img :src="item.image" alt="sneaker_image">
        </p>
        <p class="flex flex-col text-2xl gap-2">Product name:
          <span class="text-lg">{{ item.name }}</span>
        </p>
        <p class="flex flex-col text-2xl gap-2 mt-4">Product price:
          <span class="text-lg">&dollar;{{ item.price }}.00</span>
        </p>
        <p class="flex flex-col text-2xl gap-2 mt-4">Product quantity:
          <span class="text-lg">{{ item.quantity }}</span>
        </p>
        <p class="flex flex-col text-2xl gap-2 mt-4">Subtotal:
          <span class="text-lg">&dollar;{{ item.subtotal }}.00</span>
        </p>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" @click="clearCartAndStorage">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>


