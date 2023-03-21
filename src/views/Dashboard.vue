<script setup>
import router from '../router';
import { auth } from '../firebase';
import { currentUserStore } from '../stores/currentUser';
const currentUser = currentUserStore();



if(currentUser.nombre == undefined || currentUser.nombre == null){
    //router.push('/profile');
}

async function getDatos(){
    if(currentUser.id == null) await currentUser.getDatos();
}
getDatos();
</script>

<template>

    <DefaultPage>

        <Loading v-if="currentUser.loading"></Loading>
        
        <div v-else>
            <PageTitle>Bienvenido  {{ currentUser.nombre }}</PageTitle>

            <div class="row mb-5">
    
                <!-- CARD MÓDULOS DE TRANSPARENCIA -->
                <div class="col-md-6 col-xl-4 my-3">
                    <BigCard>
                        
                        Comienza a personalizar las vistas
                            
                    </BigCard> 
                </div>
                
            </div>
        
        </div>
        

    </DefaultPage>
</template>