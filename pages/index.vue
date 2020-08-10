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
      <h1 class="title">Tomisin Lalude</h1>
      <h2 class="subtitle">The Web and the Girl</h2>
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

<style scoped>
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
  .portfolio {
    height: 100vh;
    overflow-y: hidden;
  }
  
  .container {
    margin: 5% auto;
    height: 50vh;
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
    font-size: 38px;
    margin-top: 30%;
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
    padding: 0;
    margin-top: -7rem;
  }

  .linkedin {
    margin-left: 30px;
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
