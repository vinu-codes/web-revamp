<script setup>
import { Theme } from "@/utils";
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="Content">
    <RouterView />
  </main>
  <footer>Copy right @2024</footer>
</template>

<style>
#app {
  display: flex;
  min-height: 100vh;
  background: v-bind("Theme.colors.smoke");
  flex-direction: column;

  .Content {
    flex: 1;
  }

  footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 16px;
  }
}
</style>
