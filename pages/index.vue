<template>
  <div class="portfolio overflow-hidden">
    <nav class="flex items-center justify-between flex-wrap p-6 nav">
      <div class="flex items-center flex-shrink-0 text-white ml-10">
        <nuxt-link to="/" class="font-bold text-xl tracking-tight">TomisinLalude</nuxt-link>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-purple-400 border-purple-600 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <nuxt-link
            to="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white mr-4"
          >About Her</nuxt-link>
          <!-- <nuxt-link
            to="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white mr-4"
          >Her Work</nuxt-link>
          <nuxt-link
            to="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white"
          >Her Blog</nuxt-link>-->
        </div>
      </div>
    </nav>
    <div class="container">
      <h1 class="title">Tomisin Lalude</h1>
      <h2 class="subtitle">The Web and the Girl</h2>
    </div>
    <div class="social-icons p-6">
      <nuxt-link
        to="https://www.linkedin.com/in/oluwatomisinlalude/"
        class="block lg:inline-block text-purple-400 hover:text-white ml-10 mr-5"
      >
        <img src="linkedin.svg" alt="linkedin" />
      </nuxt-link>
      <nuxt-link
        to="https://twitter.com/tomisinlalude"
        class="block lg:inline-block text-purple-400 hover:text-white mr-5"
      >
        <img src="twitter.svg" alt="twitter" />
      </nuxt-link>
      <nuxt-link
        to="https://www.facebook.com/oluwatomisinlalude/"
        class="block lg:inline-block text-purple-400 hover:text-white mr-5"
      >
        <img src="facebook.svg" alt="facebook" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({ toggle: "drawer/toggle" })
  },
  computed: {
    ...mapGetters({ drawer: "drawer/getNavState" })
  }
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.portfolio {
  width: 100%;
  height: 100vh;
  background: #161718;
}

.container {
  margin: 15% 10%;
  text-align: center;
}

.nav {
  background: #161718;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 500;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #ffffff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.social-icons {
  position: relative;
  top: 3%;
}

@media (max-width: 767px) { 
    .container {
        margin: 10% auto;
        height: 50vh;
    }

    .about {
        margin-right: 0 !important;
    }
    
    .title {
        font-size: 38px;
        
    }
    .subtitle {
        margin: 10%;
        font-size: 18px;
        line-height: 1.5;
        text-align: center;
    }
    .social-icons {
        position: relative;
        display: flex;
    }
 }
</style>
