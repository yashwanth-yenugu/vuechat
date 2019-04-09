<template>
  <div class="hello">
    <div>
      <button v-on:click="firestore">Click Me</button>
      <article v-for="(user, idx) in users" :key="idx">
        <!-- <img :src="location.image"> -->
        <h1>{{ user.name }} - {{ user.mobile_number }}</h1>
      </article>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "HelloWorld",
  data() {
    return {
      users: []
    };
  },
  methods: {
    firestore() {
      const userRef = db.collection("users");
      userRef.onSnapshot(users => {
        this.users = [];
        users.forEach(user => {
          this.users.push(user.data());
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
