<template>
  <header>
  <nav class="navbar green">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('hide')">
          <i class="material-icons hide-on-med-only hide-on-large-only show-on-medium-and-down black-text">swap_horiz</i>
        </a>
        <router-link to="/"><span class="black-text logo">MoneyKeep</span></router-link>
        <ul class="hide-on-med-and-down">
          <li>
            <router-link active-class="active" to="/" exact>
              {{ this.$locale("Menu_Bill") }}
            </router-link>
          </li>
          <li>
            <router-link active-class="active" to="/history">
              {{ this.$locale("Menu_History") }}
            </router-link>
          </li>
          <li>
            <router-link active-class="active" to="/planning">
              {{ this.$locale("Menu_Planning") }}
            </router-link>
          </li>
          <li>
            <router-link active-class="active" to="/record">
              {{ this.$locale("Menu_NewRecord") }}
            </router-link>
          </li>
          <li>
            <router-link active-class="active" to="/categories">
              {{ this.$locale("Menu_Categories") }}
            </router-link>
          </li>
        </ul>
      </div>

      <ul class="right">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            {{ name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i
                >{{ this.$locale("Menu_Profile") }}
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i
                >{{ this.$locale("Menu_Logout") }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  </header>
</template>

<script>

export default {
    name: "Navbar",
    methods: {
        async logout() {
            await this.$store.dispatch("logout");
            this.$router.push("/login?message=logout");
        },
    },
    computed: {
        name() {
            return this.$store.getters.info.name;
        },
    },
    mounted() {
         window.M.Dropdown.init(this.$refs.dropdown, {coverTrigger: false});
    },
}
</script>
<style>

.header {
  font-size: 18px;
}

.nav-wrapper {
  margin: 0 20px;
}

nav ul a {
  font-size: 1.3rem;
}

.nav_right {
  margin-right: auto;
}

.logo{
  margin-right: 10px;
}

</style>
