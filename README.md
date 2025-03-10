# Сервис для создания заметок

Использую vue.js + express.js + pgsql. 

## Развертывание

### Пуллим образ с гитхаба
``` sh
git pull https://github.com/xx-arteeem-xx/vue-express_learn.git
```

### Добавляем переменные среды
 - Скачиваем пример .env файлов с [яндекс диска](https://disk.yandex.ru/d/7h8alZcOc-xykQ)
 - Переносим файлы в корень проекта
 - Меняем переменные на свои

### Создаем и запускаем docker-контейнер
``` sh
docker-compose up -d --build
```

### Получение базы данных
 - Скачиваем пустую базу с [яндекс диска](https://disk.yandex.ru/d/FwuI74BW19GOLg)
 - Заходим по адресу: 
     [http://localhost:8080/](http://localhost:8080/)
 - Импортируем базу в наш проект

