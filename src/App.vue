<template>
  <div class="">
    <router-view></router-view>
    <!-- <Home /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Home from './views/home.vue';
import { useRoute } from 'vue-router';


</script>

