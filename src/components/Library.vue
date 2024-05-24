<script setup>
import { Theme, Colors } from "@/utils";
</script>

<template>
  <div class="container color-palette">
    <h1>Color Palette</h1>
    <ul>
      <li
        v-for="item in Colors"
        :key="item.id"
        class="swatch"
        :style="{ backgroundColor: item.value }"
      >
        <div class="content">
          <span>
            {{ item.label }}
          </span>
          <sup>{{ item.value }}</sup>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
color.palette {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
    color: black;
    margin-top: 24px;
    font-size: 24px;
  }
}
ul {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    sup {
      font-size: 12px;
      line-height: 21px;
      padding: 4px;
      border-radius: 6px;
      border: 1px solid white;
      margin-top: 8px;
      background: white;
      color: #150e2f;
    }
  }
  li {
    margin: 0;
    padding: 0;
    border-radius: 8px;
    width: 120px;
    height: 120px;
    display: flex;
    border: 1px solid v-bind("Theme.colors.royalty");
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    span {
      color: white;
      background: black;
      border-radius: 8px;
      display: flex;
      padding: 4px 7px;
      line-height: 21px;
      font-size: 16px;
    }
  }
}
</style>
