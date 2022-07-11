<template>
<!--  <nav>-->
<!--&lt;!&ndash;    <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    <div><el-button>c</el-button></div>&ndash;&gt;-->
<!--  </nav>-->
 <router-view></router-view>
</template>

<style>

body{
  background-image: url('./assets/背景11.png');

  background-repeat: no-repeat;
  background-size: 100%;
  weight:100%;
  height:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
