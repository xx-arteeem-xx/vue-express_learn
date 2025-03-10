# Сервис для создания заметок

Использую vue.js + express.js + pgsql. 

## Развертывание
``` sh
# Пуллим образ с гитхаба
git pull https://github.com/xx-arteeem-xx/vue-express_learn.git

# Создаем .env файлы с настройками подключения к БД. 
# Для linux: 
mkdir env/
echo "PGSQL_ROOT_PASSWD=[ваш пароль]" >> env/db.env
# На Windows создайте папку *env*, затем создайте файлы: api.env, db.env, frontend.env. Запишите туда переменные среды.

# Создаем и запускаем docker-контейнер
docker-compose up -d --build
```

### Получение базы данных
 - Скачиваем пустую базу с яндекс диска [ссылка]
 - Заходим по адресу: 
    [http://localhost:8080/]
 - Импортируем базу в наш проект

