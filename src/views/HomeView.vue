<template>
  <div class="home">
    <p>Hello</p>
    <!-- <h1>{{$store.getters.GET_USERS}}</h1> -->
    <!-- <h3>{{b}}</h3> -->
    <!-- <p>{{c}}</p> -->
    <table border="1">
      <tr>
        <td>User Name</td>
        <td>Image</td>
      </tr>
      <tr v-for="(item, index) in c" :key="index">
        <td>{{item.login}}</td>
        <td>{{item.avatar_url}}</td>
      </tr>
    </table>
    <button @click="updateValue">Update</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  data:()=>({
    b: 0
  }), 
  computed:{
    ...mapGetters({c: 'GET_USERS'})
    
  },  
  mounted(){
    // this.b = this.$store.getters.GET_VALUE
  },
  methods:{
    updateValue(){
      // this.$store.commit('UPDATE_USERS', 45)
      this.$store.dispatch('GET_ALL_USERS', 78)
    }
  }
}
</script>
