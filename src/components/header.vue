<template>
  <div  id='header'class="text-gray-50 flex h-16">
    <!-- logo -->
    <a href="/index" class="inline-block w-20 mr-6">
      <img class="h-full" alt="Vue logo" src="../assets/logo.svg" />
    </a>
    <!-- list -->
    <div class="flex gap-5 font-bold text-sm justify-center items-center  text-[#e5e5e5] ">
      <p class="cursor-pointer">首頁</p>
      <p class="cursor-pointer">節目</p>
      <p class="cursor-pointer">電影</p>
      <p class="cursor-pointer">最新熱門電影</p>
      <p class="cursor-pointer">我的口袋名單</p>
      <p class="cursor-pointer">按照語言瀏覽</p>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
#header{
    padding-right: 60px;
    padding-left: 60px;
    margin-right: auto;
    margin-left: auto;
}

</style>
