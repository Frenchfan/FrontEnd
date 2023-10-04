<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import jwtDecode from "jwt-decode";
import axios from "axios";


export default {
  components: {Footer, Header},
  data() {
    return {
      isAuthorised: false
    }
  },
  mounted() {
    let access = localStorage.getItem('access')
    const refresh = localStorage.getItem('refresh')
    const decodedAccess = jwtDecode(access);
    const decodedRefresh = jwtDecode(refresh);
    const currentTime = Date.now() / 1000;

    if (decodedAccess.exp < currentTime) {
      if (decodedRefresh.exp < currentTime)
        this.isAuthorised = false
       else {
        axios.post('http://127.0.0.1:8000/api/token/refresh/', {"refresh": refresh})
            .then(res => access = res.data.access)
        localStorage.removeItem('access')
        localStorage.setItem('access', access)
        this.isAuthorised = true
      }
    } else {
      this.isAuthorised = true
    }
  },
}
</script>

<template>
  <header>
    <Header :isAuthorised="isAuthorised"/>
  </header>

  <main>
    <RouterView :isAuthorised="isAuthorised"/>
  </main>

  <footer>
    <Footer/>
  </footer>
</template>

<style scoped>

</style>
