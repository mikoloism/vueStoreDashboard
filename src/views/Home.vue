<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav">
      <b-nav fill align="center">
        <b-nav-item>
          <div
            class="d-flex flex-column justify-content-between align-items-center align-content-between"
          >
            <b-icon-house />
            <router-link to="/">Home</router-link>
          </div>
        </b-nav-item>
        <b-nav-item>
          <div
            class="d-flex flex-column justify-content-between align-items-center align-content-between"
          >
            <b-icon-archive />
            <router-link to="/about">About</router-link>
          </div>
        </b-nav-item>
        <b-nav-item>
          <div
            class="d-flex flex-column justify-content-between align-items-center align-content-between"
          >
            <b-icon-layout-text-window />
            <router-link to="/dashboard">Dashboard</router-link>
          </div>
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
