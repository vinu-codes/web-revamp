<script setup>
import { RouterLink } from "vue-router";
import { Theme } from "@/utils";
import { useRouter, useRoute } from "vue-router";
import logo from "../assets/logo.svg";

const routes = [
  { id: 1, route: "/", label: "Home" },
  { id: 2, route: "/about", label: "About" },
  { id: 4, route: "/library", label: "Library" },
];

const router = useRouter();
const route = useRoute();

const onNavigate = (query) => {
  console.log({ query });
};

const getClassName = (path) => {
  if (route.path === path) {
    return true;
  }
};

const isSticky = (value) => {
  return !!value;
};
</script>

<template>
  <nav :class="{ sticky: isSticky(false) }">
    <div class="container content">
      <button @click="onNavigate()">
        <img :src="logo" />
      </button>
      <ul>
        <li
          v-for="item in routes"
          :key="item.id"
          class="nav-item"
          :class="{ active: getClassName(item.route) }"
        >
          <RouterLink :to="item.route">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 16px;
}
nav {
  width: 100%;
  background: white;
  z-index: 1;
  box-shadow: -1px 5px 15px -5px rgba(0, 0, 0, 0.29);
  &.sticky {
    position: fixed;
    box-shadow: -1px 5px 15px -5px rgba(0, 0, 0, 0.29);
  }
  ul {
    margin: 0px 0px 0px auto;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    gap: 8px;
    li {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.3s ease-in-out;
      &.active {
        a {
          color: v-bind("Theme.colors.royalty");
          font-weight: 600;
        }
      }
      &.in-active {
        background: white;
      }
      &:hover {
        background-color: white;
      }
      a {
        font-size: 16px;
        font-weight: 400;
        padding: 16px 16px;
        text-decoration: none;
        color: v-bind("Theme.colors.text");
        position: relative;
        &:hover {
          color: v-bind("Theme.colors.text");
        }
      }
    }
  }
  button {
    background: none;
    border: none;
    width: 100px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>
