<template>
    <br>
    <div class="mx-auto max-w-screen-lg bg-white">
  <div class="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg" style="background-image: url(https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?size=626&ext=jpg&ga=GA1.2.1506769116.1690802231&semt=ais)">
    <div class="px-4 pt-8 pb-10">
      <div class="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
        <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
        <img class="mx-auto h-auto w-full rounded-full" src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149491786.jpg?size=626&ext=jpg&ga=GA1.1.1506769116.1690802231&semt=ais" alt="" />
      </div>
    </div> 
  </div>
  <div class="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
    <div class="max-w-lg">
      <h1 class="text-2xl font-bold text-gray-800">Beep Essences</h1>
      <p class="mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias. Quas necessitatibus exercitationem praesentium.</p>
    </div>
    <div class="">
      <button class="flex whitespace-nowrap rounded-lg bg-pink-500 px-6 py-2 font-bold text-white transition hover:translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Chat with us
      </button>
      <p class="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        +1 432 923 0001
      </p>
    </div>
  </div>
  <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-3">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">Cloting Store</h2>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16" >
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border bg-gray-100" v-for="produk in state" :key="produk.id">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" :src="getImgSrc(produk.img)" alt=""/>
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id }}">
        <button class="group font-serif mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-white">
          <div class="flex w-full items-center justify-center bg-pink-600 text-xs uppercase transition group-hover:bg-pink-400 group-hover:text-white"><h4>{{ produk.nama }}</h4></div>
        </button>  
    </router-link>
      </article>
    </div>
    </div>
</section>

</div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { produk } from '../assets/Produk';

export default {
    setup(props, context)
    {
        const state = reactive(produk["produk"]);
        const getImgSrc = (imgFileName) => {
          return "../src/assets/img/" + imgFileName + '';
        }

        onMounted (() => {
            context.emit('id-menu', 4);
        });

        return {
            state,
            getImgSrc
        }
    }
}
</script>

<style scoped>
.flex-container {
    display: flex;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    min-width: 200px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
}
</style>