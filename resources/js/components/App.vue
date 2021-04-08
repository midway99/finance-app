<template>
    <div class="wrapper">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
import EmptyLayout from "./Layouts/EmptyLayout.vue";
import MainLayout from "./Layouts/MainLayout.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "../../styles/index.css";
</style>
