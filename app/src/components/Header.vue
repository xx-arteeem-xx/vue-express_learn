<script>

</script>

<template>
    <div class="row align-items-center bg-dark rounded header">
        <div class="col-3 text-center py-3">
            <a href="/" class="btn">
                <h2>
                    <i class="fa-solid fa-book"></i>
                    Notes Pro
                </h2>
            </a>
        </div>
        <div class="col-5 d-flex align-items-center justify-content-center gap-3 py-3">
            <a href="/" class="btn btn-outline-secondary">
                <i class="fa-solid fa-house"></i>
                Главная
            </a>
            <a href="/" class="btn btn-outline-secondary">
                <i class="fa-solid fa-circle-info"></i>
                О проекте
            </a>
            <a href="/" class="btn btn-outline-secondary">
                <i class="fa-solid fa-note-sticky"></i>
                Мои заметки
            </a>
            <a href="/" class="btn btn-outline-secondary">
                <i class="fa-solid fa-circle-plus"></i>
                Создать
            </a>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-center gap-3 py-3">
            <div class="dropdown-center">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-language"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">RU</a></li>
                    <li><a class="dropdown-item" href="#">EN</a></li>
                </ul>
            </div>
            <a href="/" class="btn btn-outline-secondary">
                <i class="fa-solid fa-right-to-bracket"></i>
                Войти
            </a>
            <a href="/" class="btn btn-outline-secondary">
                <i class="fa-solid fa-id-card"></i>
                Зарегистрироваться
            </a>
        </div>
    </div>
</template>

<style>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
    }
</style>
