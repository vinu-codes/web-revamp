<script setup>
import { Theme } from "@/utils";
import office from "../assets/office.png";
</script>

<template>
  <div class="banner">
    <div class="content-a"></div>
    <div class="content-b">
      <div class="image"></div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 16px 32px;
  background: rgb(247, 249, 251);
  background: linear-gradient(
    335deg,
    rgba(247, 249, 251, 1) 0%,
    rgba(235, 235, 235, 1) 100%
  );
  .content-a {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .content-b {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    min-width: 400px;
    min-height: 400px;
    width: 400px;
    height: 400px;
    overflow: hidden;
    background-size: cover;
    background-image: url("../assets/office.png");
    background-repeat: no-repeat;
    background-position: -100px 0px;
  }
}
</style>
