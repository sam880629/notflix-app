<template>
  <div
    ref="RowBox"
    class="border border-white w-full h-44 flex mt-10 relative overflow-hidden"
  >
    <!-- 左箭頭 -->
    <svg
      @click="prev"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="z-10 w-12 h-12 absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
        fill="#ffffff"
      ></path>
    </svg>
    <!-- 內容 -->
    <div
      class="flex gap-5 transition-transform duration-300 w-full"
      :style="{
        transform: `translateX(-${(currentIndex * 50) }%)`,
      }"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt=""
        class="w-full object-cover"
        ref="firstImageRef"
      />
    </div>
    <!-- 右箭頭 -->
    <svg
      @click="next"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-12 h-12 absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
        fill="#ffffff"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([
  "https://picsum.photos/id/234/600/400",
  "https://picsum.photos/id/236/600/400",
  "https://picsum.photos/id/238/600/400",
  "https://picsum.photos/id/240/600/400",
  "https://picsum.photos/id/242/600/400",
  "https://picsum.photos/id/244/600/400",
]);

const currentIndex = ref(0);
const RowBox = ref(null);
const firstImageRef = ref(null);
const Img = ref(null);
onMounted(() => {});
// 上一頁
const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};
// 下一頁
const next = () => {
  const width = RowBox.value.offsetWidth;
  console.log("div 寬度:", width);
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
  console.log(currentIndex.value)
  console.log('第一張圖片的寬度:', firstImageRef.value[0].offsetWidth);
};
</script>

<style></style>
