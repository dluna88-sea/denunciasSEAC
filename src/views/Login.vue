<script setup>
import { ref } from 'vue';
import {currentUserStore} from '../stores/currentUser';
const currentUser = currentUserStore();

const email = ref('');
const password = ref('');

const doLogin = async() => {
    try {
        
        await currentUser.login(email.value.trim(),password.value.trim()).then(() => {
            //if(currentUser.is.success){ location.reload(); }
        });

    } catch (e) {
        console.log(e.message);
    }
}
</script>
<template>

    <div class="container text-center mainwrapper">
        <main class="form-signin w-100 m-auto">
            <form @submit.prevent="doLogin">
                <h1 class="h3 mb-3">Sistema de gestión de denuncias</h1>
                <img class="mb-4" src="/logo.png" width="180" height="180" alt="SEAC">
                <h3 class="h5">Iniciar Sesión</h3>
                <div class="form-floating">
                    <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="Escriba su dirección de correo electrónico">
                    <label for="floatingInput"><i class="bi bi-envelope-fill"></i> &nbsp; Correo Electrónico</label>
                </div>
                <div class="form-floating">
                    <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Escriba su contraseña">
                    <label for="floatingPassword"><Icon name="key-fill" /> &nbsp; Contraseña</label>
                </div>

                <Error v-if="currentUser.is.error">
                    {{ currentUser.is.message }}
                </Error>

                <Success v-if="currentUser.is.success">
                    {{ currentUser.is.message }}
                </Success>

                <button class="w-100 btn btn-lg btn-primary mb-3"  type="submit">
                    <Icon name="unlock-fill"/> Acceder
                </button>

            </form>
        </main>
    </div>


</template>

<style scoped>
.mainwrapper{
    height: calc(100vh - 60px);
    display: flex;
    font-size:14px;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>