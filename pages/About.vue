<template>
  <div class="portfolio">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white ml-10 brand-name">
        <nuxt-link to="/" class="font-bold text-xl tracking-tight">TomisinLalude</nuxt-link>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div class="nav-links">
          <nuxt-link
            to="/about"
            class="about block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white mr-4"
          >About Her</nuxt-link>
          <nuxt-link
            to="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-purple-400 hover:text-white mr-4"
          >Her Projects</nuxt-link>
        </div>
      </div>
    </nav>
    <div class="container">
      <h1 class="title">About Tomisin</h1>
      <h2
        class="subtitle"
      >She has a skillset in Product Management and also building web skills with JavaScript and two of its frameworks: React(NextJS) and Vue(NuxtJS). She is also very much interested in Tech Education and as such, she mentors in a couple of programs: StartNG, HNG Internship and She Code Africa</h2>
    </div>
    <div class="social-icons">
      <a
        href="https://www.linkedin.com/in/oluwatomisinlalude/"
        class="block linkedin lg:inline-block text-purple-400 hover:text-white ml-10 mr-5"
      >
        <img src="linkedin.svg" alt="linkedin" />
      </a>
      <a
        href="https://twitter.com/tomisinlalude"
        class="block lg:inline-block text-purple-400 hover:text-white mr-5"
      >
        <img src="twitter.svg" alt="twitter" />
      </a>
      <a
        href="https://www.facebook.com/oluwatomisinlalude/"
        class="block lg:inline-block text-purple-400 hover:text-white mr-5"
      >
        <img src="facebook.svg" alt="facebook" />
      </a>
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
  margin: 10% 10%;
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

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 3rem;
  }

  .about {
    margin-bottom: 1rem;
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

  .about {
    margin-top: 0;
    float: right;
  }
}
</style>