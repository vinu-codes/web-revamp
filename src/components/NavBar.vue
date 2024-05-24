<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="nav-bar">
    <h1>Hello App!</h1>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
</template>

<style>
.nav-bar {
  display: flex;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  h1 {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 0;
  }
}
</style>
