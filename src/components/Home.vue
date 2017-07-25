<template lang='pug'>
  .main
    b-navbar(toggleable type="inverse" variant="success")

      b-nav-toggle(target="nav_collapse")

      b-link.navbar-brand(to="#")
        span BootstrapVue

      b-collapse(is-nav id="nav_collapse")

        b-nav(is-nav-bar)
          b-nav-item Support
          b-nav-item Docs
          b-nav-item Contact Us

        b-nav(s-nav-bar).ml-auto

          <!-- Navbar dropdowns -->
          b-nav-item-dropdown(text="Lang" right)
            b-dropdown-item(to="#") EN
            b-dropdown-item(to="#") ES
            b-dropdown-item(to="#") RU
            b-dropdown-item(to="#") FA

          b-nav-item-dropdown(right)

            <!-- Using button-content slot -->
            template(slot="button-content")
              span(style="font-weight: bold;") User
            template

            b-dropdown-item(to="#") Profile
            b-dropdown-item(to="#") Signout
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li 
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
