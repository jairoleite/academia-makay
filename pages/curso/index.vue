<template>
  <div>
   <pre>loading...</pre>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  mounted() {
    this.$router.push("/")
  }
}
</script>
