<template>
  <div class="portfolio overflow-hidden">
    <nav class="flex items-center justify-between flex-wrap p-6 nav">
      <div class="flex items-center flex-shrink-0 text-white ml-10 brand-name">
        <nuxt-link to="/" class="font-bold text-xl tracking-tight">TomisinLalude</nuxt-link>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div class="nav-links">
          <nuxt-link
            to="/about"
            class="about block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white mr-4"
          >About</nuxt-link>
          <nuxt-link
            to="/projects"
            class="block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white mr-4"
          >Projects</nuxt-link>
          <nuxt-link
            to="/articles"
            class="block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white mr-4"
          >Articles</nuxt-link>
        </div>
      </div>
    </nav>
    <div class="container">
      <h1 class="title">Articles</h1>
      <h3 class="subtitle">Click <a href="oluwatomisin.xyz"><span class="text-purple-400">here</span></a> to view my blog at Hashnode.</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({ toggle: "drawer/toggle" }),
  },
  computed: {
    ...mapGetters({ drawer: "drawer/getNavState" }),
  },
};
</script>

<style scoped>
.portfolio {
  width: 100%;
  height: 100vh;
  background: #161718;
}

.container {
  margin: 10% auto;
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
  margin: 0 15%;
}

.social-icons {
  position: relative;
  top: 0;
}

@media (max-width: 767px) {
  .container {
    margin: 0;
    height: 70vh;
  }

  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 1rem;
  }

  .title {
    font-size: 23px;
    margin-top: 8%;
  }

  .subtitle {
    margin: 10%;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
  }
  .social-icons {
    position: static;
    display: flex;
  }

  .brand-name {
    margin-left: 0;
  }
}
</style>