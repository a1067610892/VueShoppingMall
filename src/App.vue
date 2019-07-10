<template>
  <div id="app">
    <header-nav></header-nav>
    <list-nav></list-nav>
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from '../src/common/HeaderNav'
import ListNav from '../src/common/ListNav'
export default {
  name: 'App',
  components: {
    HeaderNav,
    ListNav
  }
}
</script>

<style>

</style>
