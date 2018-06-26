<template>
<header>
  <nav class="light-blue accent-4">
    <div class="container">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">
          <i id="logo-chart" class="material-icons">insert_chart</i>Thai Economics
        </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/report" tag="a">รายงาน</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      r_active: false
    }
  }
}
</script>

<style>
#logo-chart {
  font-size: 1.5em;
}
</style>
