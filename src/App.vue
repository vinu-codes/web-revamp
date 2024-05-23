<script setup>
import { ref, isRef, reactive, toRefs, customRef } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>
