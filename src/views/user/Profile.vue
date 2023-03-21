<script setup>
import { ref } from 'vue';
import { currentUserStore } from '../../stores/currentUser';
const currentUser = currentUserStore();

const bread = [
    { class:"", href:"/", text:"Inicio" },
    { class:"active", href:"", text:"Perfil" },
];

const updateDatos = () => {
    
    const nombre = document.forms['profileDataForm']['nombre'];
    const email = document.forms['profileDataForm']['email'];
    const datos = [];

    if(nombre.value.trim() != currentUser.nombre) datos.push({ nombre:nombre.value.trim() });
    if(email.value.trim() != currentUser.email) datos.push({ email:email.value.trim() });
    
    

}

async function getDatos(){
    if( currentUser.id == null ) await currentUser.getDatos();
}
getDatos();
</script>

<template>
    <DefaultPage>

        <Loading v-if="currentUser.loading"></Loading>
        <div v-else>

            <PageTitle
                :bread="bread"
                > 
                <Icon name="person-square" Class="mx-2" />Editar datos personales
            </PageTitle>

            <form name="profileDataForm" @submit.prevent="updateDatos()">
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-6  col-xl-5">
                        
                        <BigCard>
                            <div class="text-center">
                                <img :src="currentUser.foto" alt="">
                            </div>
                        </BigCard>

                    </div>
                </div>
            </form>

        </div>

    </DefaultPage>
</template>