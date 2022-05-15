<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3"
           style="background-image: url(https://blog.cod3r.com.br/wp-content/uploads/2021/01/Tech1-950x500.jpg)">
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-4xl font-bold text-white flex items-center">Dev Learn
              <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
              </svg>
            </h2>

            <p class="max-w-xl mt-3 text-gray-300">Para obter sucesso, comece onde você está, use o que você tem e faça
              o que você pode. – Arthur Ashe</p>
          </div>
        </div>
      </div>


      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">


        <div class="flex-1">
          <div class="text-center">



            <h2 class="text-2xl font-bold text-center flex justify-center items-center text-gray-700 dark:text-white">
              #NeverStopLearning
              <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
              </svg>
            </h2>

            <p class="mt-3 text-gray-500 dark:text-gray-300">Entre e acesse os melhores cursos de programação! Tudo na
              faixa ;)</p>
          </div>

          <div class="mt-8">
            <form>
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">E-mail</label>
                <input v-model="email" type="email" name="email" id="email" placeholder="exemplo@exemplo.com"
                       class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Senha</label>
                  <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">esqueceu
                    a senha?</a>
                </div>

                <input v-model="senha" type="password" name="password" id="password" placeholder="digite sua senha"
                       class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
              </div>

              <div class="mt-6">
                <button
                  @click.prevent="postLogin"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Acessar
                </button>
              </div>

            </form>

            <p class="mt-6 text-sm text-center text-gray-400">Não possui uma conta ? <a href="#"
                                                                                        class="text-blue-500 focus:outline-none focus:underline hover:underline">Cadastre-se</a>.
            </p>
            <div v-show="alert" class="bg-red-100 border border-red-400 text-red-700 my-5 px-4 py-3 rounded relative" role="alert">
              <strong class="font-bold">Aviso!</strong>
              <span class="block sm:inline">{{ message }}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="alert=false">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path
      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  name: 'PageLogin',
  middleware: "noAuthenticated",
  layout: 'auth',
  data() {
    return {
      email: '',
      senha: '',
      alert: false,
      message: null
    }
  },
  methods: {

    async postLogin() {

      if (!this.email || this.email.length == 0) {
        this.message = "O e-mail é obrigatório"
        this.alert = true
        setTimeout(() =>  this.alert=false, 3000)
        return
      }

      if (!this.senha || this.senha.length == 0) {
        this.message = "A senha é obrigatória"
        this.alert = true
        setTimeout(() =>  this.alert=false, 3000)
        return
      }

      const data = {
        email: this.email,
        senha: this.senha
      }

      await this.$axios.$post('/api/usuario/isValido', data).then(resp => {
        if(resp.valido) {
          const auth = {
            accessToken: resp.token
          };
          this.$store.commit("setAuth", auth); // mutating to store for client rendering
          this.$store.commit("setAdmin", resp.admin);
          Cookie.set("auth", auth); // saving token in cookie for server rendering
          this.$router.push("/");
        }
        else {
          this.message = "Usuário ou senha inválido!"
          this.alert = true
        }
      })
    }
  },
};

</script>


