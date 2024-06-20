import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import {ref} from "vue";

export let useImageStore = defineStore('imageStore', {

    state: () => ({
        mainImage: '/src/assets/images/sneaker1.jpg',
        quantity : 0,
        cart: [],
        price: 125,
        thumbnails: [
            { thumbnail: '/src/assets/images/sneaker_thumbnail1.jpg', main: '/src/assets/images/sneaker1.jpg', isHovered: false, isSelected: false},
            { thumbnail: '/src/assets/images/sneaker_thumbnail2.jpg', main: '/src/assets/images/sneaker2.jpg', isHovered: false, isSelected: false},
            { thumbnail: '/src/assets/images/sneaker_thumbnail3.jpg', main: '/src/assets/images/sneaker3.jpg', isHovered: false, isSelected: false},
            { thumbnail: '/src/assets/images/sneaker_thumbnail4.jpg', main: '/src/assets/images/sneaker4.jpg', isHovered: false, isSelected: false},
        ],

    }),

    actions: {
        updateMainImage(newImage) {
            this.mainImage = newImage;
            this.thumbnails.forEach(thumbnail => {
                thumbnail.isSelected = thumbnail.main === newImage;
            })
        },

        incrementQuantity() {
            this.quantity++;
        },

        decrementQuantity() {
            if(this.quantity > 0) {
                this.quantity--;
            }
        },

        showOverlay(index) {
            this.thumbnails[index].isHovered = true;
        },

        hideOverlay (index) {
            this.thumbnails[index].isHovered = false;
        },

        // show sweet alert with number of sneaker(s) added on
        // add to cart click and pass the data to cart array
        addToCart (){
            if (this.quantity > 0){
               Swal.fire({
                 position: "center",
                 icon: "warning",
                 title: `${this.quantity} sneaker(s) added to cart!`,
                 showConfirmButton: false,
                 timer: 2000
               });
               this.cart.push({
                 name: 'Fall Limited Edition Sneakers',
                 price: this.price,
                 quantity: this.quantity,
                 subtotal: this.quantity * this.price,
                 image: this.mainImage,

               });

                this.quantity = 0;

                this.cartToLocalStorage();
                setTimeout(() => window.location.reload(), 1500);
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `You have to add at least one pair in cart!`,
                    showConfirmButton: false,
                    timer: 3000
                });
            }
          },

            cartToLocalStorage() {
                localStorage.setItem('cart', JSON.stringify(this.cart));

            },

            loadCartLocalStorage() {
                const cart = localStorage.getItem('cart');
                if(cart) {
                    return this.cart = JSON.parse(cart);
                }
            },

            isLocalStorageEmpty() {
                return localStorage.length === 0;
            },

            removeStorageItem(key){
                localStorage.removeItem(key);
                window.location.reload();
            },

        }

})