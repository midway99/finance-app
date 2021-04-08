<template>
  <div>
    <div
      :style="{ display: flex, 'align-items': center, height: number + 'vh' }"
      class="flexLoading"
      v-if="loading"
    >
      <Loader v-if="loading" />
    </div>
    <div v-else class="app-main-layout">
      <Navbar @hide="isActive = !isActive" />
      <Sidebar :isActive="isActive" />
      <main class="app-content full">
        <div class="app-page">
            <router-view />
        </div>
      </main>
        <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Sidebar from "../SideNavBars/Sidebar.vue";
import Navbar from "../SideNavBars/Navbar.vue";
import Loader from "../Loader.vue";
import Footer from "../Footer/Footer";
import messages from "../utils/messages.js";
import Filters from "../utils/Filters";
import Home from "../Home/Home";

export default {
  name: "MainLayout",
  data: () => ({
    isActive: false,
    loading: true,
    flex: "flex",
    center: "center",
    number: 100,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.loading = false;
  },
  components: {
    Sidebar,
    Navbar,
    Loader,
    Footer,
    Home,
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(
        messages[fbError.code] ||
          "Упс, кажется у нас проблемы!!!"
      );
    },
  },
};
</script>
