<template>
  <div id="app">{{message}}</div>
</template>
<script>
import Vue from "vue";
export default {
  name: "Demo",
  data() {
    //message: "";
    return {
      message: ""
    };
  }
};
var app = new Vue({
  el: "#app",
  data: { message: "Hello Demo" }
});
app.message = "111";
</script>
