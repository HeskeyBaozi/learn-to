<template lang="pug">
  b-navbar.topbar(toggleable fixed='top' type='inverse' variant='primary')
    .container
      b-nav-toggle(target="nav_collapse")

      b-link.navbar-brand(to="#")
        span Matrix OJ

      b-collapse(is-nav id="nav_collapse")
        b-nav.main-nav(is-nav-bar)
          b-nav-item 主頁
          b-nav-item 題目
          b-nav-item 狀態
          b-nav-item 排名


        b-nav.ml-auto(is-nav-bar)
          b-nav-form.search(right)
            .input-group
              input.form-control(type='text' placeholder='Search')
              span.input-group-btn
                button.btn.btn-secondary
                  span.fa.fa-search
          img.img-fluid.rounded-circle(src='../assets/logo.png' style='height: 30px; width: 30px; margin-top: 5px; background-color: white;')
          b-nav-item-dropdown(right)

            <!-- Using button-content slot -->
            template(slot="button-content")
              span(style="font-weight: bold;") User
            template

            b-dropdown-item(to="#") Profile
            b-dropdown-item(to="#") Signout
</template>

<script>
export default {}
</script>

<style lang="stylus">
nav.topbar
  background-color: #749fce !important
  @media (min-width: 576px)
    padding-top: 0
    padding-bottom: 0
    height: 50px
    border-bottom: 1px solid rgba(0, 0, 0, 0.15)
  .container
    @media (max-width: 576px)
      margin-left: initial
      margin-right: initial
  .search
    margin-right: 10px
    input
      background: #548dcc
      color: #eee
      border: none
      border-radius: 0
      &::placeholder
        color: #eee
    button
      border: none
      background: transparent
      color: white
      outline: none
      box-shadow: none
      cursor: pointer
    @media(max-width: 767px)
      display: none
  .main-nav
    @media (min-width: 576px)
      width: 400px
      margin: 0 1rem
    .nav-link
      padding-right: 1rem
      padding-left: 1rem
    .nav-link:hover
      background-color: #548dcc
  .navbar-toggler
    right: 0
  .navbar-collapse
    height: 100%
  .navbar-brand
    margin-top: -1rem
    margin-bottom: -1rem
    padding: 1rem 0.5rem
    @media (max-width: 576px)
      margin: initial
      padding: .25rem 0
  .navbar-nav.ml-auto
    padding: 0 1rem
  .dropdown
    height: 100%
</style>
