<script setup>
import { currentUserStore } from '../stores/currentUser';
const currentUser = currentUserStore();

await currentUser.logout().then(() => {
    setTimeout(location.reload(),1500);
});

</script>
<template>
    <Loading />
</template>