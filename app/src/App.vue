<template>
  <div class="hello">
    <h1>user:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="user">{{ user }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      user: "",
    };
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/api/getusers', {
        method: "GET",
        headers: {
          
        },
      })
        .then((response) => {
          response.json().then((data) => {
            this.user = data;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
  button {
    padding: 12px 32px;
    font-size: 16px;
    border-radius: 8px;
  }
</style>