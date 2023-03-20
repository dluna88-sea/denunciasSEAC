<script setup>

</script>

<template>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3 shadow-sm">
        <div class="container">
            <RouterLink class="navbar-brand" to="/" >
                <img src="/logo.png" alt="SEAC" width="25" height="25" class="d-inline-block align-text-top pr-2">
                Sistema
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/alguna_ruta">Algun link</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav flex-wrap ms-md-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/profile">
                            <Icon name="person-circle"  Class="mx-2"/>Mi Perfil
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/logout">
                            <Icon name="lock-fill"  Class="mx-2"/>Cerrar Sesión
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style scoped>
@media only screen and (min-width: 992px) {
  .navbar .navbar-nav .nav-item .nav-link {
    padding: 0 0.5em;
  }
  .navbar .navbar-nav .nav-item:not(:last-child) .nav-link {
    border-right: 1px solid #0000006e;
  }
}
</style>