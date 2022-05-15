<template>
  <div>
   <h1>{{$route.params}}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      aulas: []
    }
  },
  async fetch() {
    // lista de aulas
    this.aulas = await this.$axios.$get(`/api/aula/${this.$route.params.id}`)

    console.log(this.aulas)
  }
}
</script>
