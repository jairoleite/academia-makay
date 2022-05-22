<template>
  <div class="container">
    <div class="flex flex-row flex-wrap py-4">
      <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
        <!--        botão de votlar-->
        <NuxtLink to="/">
          <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span class="ml-3">Voltar</span>
          </a>
        </NuxtLink>

        <!--        fim-->
        <div class="sticky top-0 p-4 w-full">
          <!-- navigation -->
          <ul class="flex flex-col overflow-hidden">
            <div v-for="(aula, index) in aulas" :key="index">
              <li v-if="aula.isCapitulo">
                <a
                  class="flex items-center p-1 text-base font-normal text-green-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span class="ml-1 text-xl">{{ aula.nome }}</span>
                </a>
              </li>
              <li v-else>
                <a href="#" @click.prevent="clickAula(aula)" :class="aula.id === defaultAula.id ? 'bg-gray-100' : ''"
                   class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="ml-3">{{ aula.nome }}</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </aside>
      <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-7 px-2">
        <iframe v-if="defaultAula" :src="defaultAula.linkVideo" allow="autoplay"></iframe>
      </main>
    </div>

    <!--    loading page-->
    <loading :isLoading="isLoading"/>
  </div>

</template>

<script>
import Loading from "../../components/Loading";

export default {
  name: 'PageHome',
  components: {Loading},
  data() {
    return {
      aulas: [],
      defaultAula: null,
      isLoading: false
    }
  },
  async fetch() {

    if (!this.$route.params || !this.$route.params.id || isNaN(this.$route.params.id)) {
      return
    }
    // lista de aulas
    this.isLoading = true
    this.aulas = await this.$axios.$get(`/api/aula/${this.$route.params.id}`)
    this.defaultAula = this.aulas[1] || null
    this.isLoading = false
  },
  methods: {
    clickAula(aula) {
      this.isLoading = true
      this.defaultAula = aula
      setTimeout(() => this.isLoading = false, 2000)
    }
  }
}
</script>

<style scoped>
iframe {
  display: block; /* iframes are inline by default */
  background: #000;
  border: none; /* Reset default border */
  height: 88vh; /* Viewport-relative units */
  width: 75vw;
  border-radius: 10px;
}

.menu-selecionado {
  background-color: #9a9999;
}

</style>

