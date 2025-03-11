<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header />

    <div class="container main">
        <div class="p-5 bg-body-tertiary rounded-3">
            <h1 class="text-body-emphasis">
                Notes Pro - сервис для заметок
            </h1>
            <p class="fs-5 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure qui tenetur consequatur minus explicabo ut ducimus dicta quia facere, in deserunt. Corrupti et iure obcaecati consequatur, at quidem fuga!
            </p>
        </div>
    </div>

    <Footer />
</template>

<style>
    .main{
        min-height: 50vh;
        margin-top: 20vh;
    }
</style>