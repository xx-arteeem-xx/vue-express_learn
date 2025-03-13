<script>

</script>

<template>
    <div class="topmain">
        <div class="container content d-flex justify-content-between align-items-center">
            <div class="row">
                <div class="col-6 d-flex justify-content-center flex-column gap-2">
                    <h1 class="fw-bold">
                        Notes Pro - Идеи, которые всегда с тобой.
                    </h1>
                    <p class="fs-4">
                        Создавай заметки в пару кликов и получай к ним доступ с любого устройства. Делись идеями с друзьями или коллегами — легко и быстро!
                    </p>
                </div>
                <div class="col-2"></div>
                <div class="col-4">
                    <img src="../assets/notes.png" alt="" class="notebook">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .topmain{
        position: relative;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background: 
            linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), 
            url("../assets/background.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

    }

    .content{
        height: 100vh;
    }

    .notebook{
        width: 100%;
    }
</style>