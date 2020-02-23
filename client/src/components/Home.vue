<template>
  <div class="main" :style="{ 'background-image': 'url(' + url + ')' }">
     <button v-on:click="left">kiki</button>
     <button v-on:click="right">Add 1</button>
     
  </div>
</template>

<script>
import axios from 'axios'
import io from "socket.io-client";
var socket = io.connect("http://localhost:3000");

export default {
  name: 'Home',
  data() {
    return {
      url: null,
      id: null,
    }
  },
  mounted() {
    socket.on('update',() => {
      console.log('up',this.id)
      axios({
        url: 'http://localhost:3000',
        method: 'get',
      })
      .then(result=>{
        this.url = result.data.url
        this.id = result.data.id
      console.log('data',result.data)

      console.log('up',this.id)

      })
      .catch(error=>{
        console.log(error,'>>>')
      })
    })
    axios({
        url: 'http://localhost:3000',
        method: 'get',
      })
      .then(result=>{
        this.url = result.data.url
        this.id = result.data.id

      })
      .catch(error=>{
        console.log(error,'>>>')
      })
  },
  methods: {
   
    right() {
      let old
      let current
      if(this.id == 5) {
        old = this.id
        current = 1
        socket.emit('update')
      }else{
        old = this.id
        current = this.id+1
        socket.emit('update')
      }
    axios({
      url: 'http://localhost:3000',
      method: 'patch',
      data: {
        old,
        current
      }
    })
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
      
    },
    left() {
      let old
      let current
      if(this.id == 1) {
        old = this.id
        current = 5
        socket.emit('update')
      }else{
        old = this.id
        current = this.id-1
        socket.emit('update')
      }
    axios({
      url: 'http://localhost:3000',
      method: 'patch',
      data: {
        old,
        current
      }
    })
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

.main {
  -webkit-transition: background-image 2s ease-in-out;
  transition: background-image 2s ease-in-out;
  height: 100vh;
  width: 100vw;
  background-size: cover;
}
</style>
