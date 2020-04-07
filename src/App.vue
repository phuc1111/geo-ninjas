<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'

export default {
  name: 'App',
  components: {
    Navbar,
    Signup,
    Login
  }
}
</script>

<style>

</style>
