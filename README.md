# NRabionLauncher

## Electron
<ul>
    <li>
        <code>npm install</code> - установить пакеты
    </li>
    <li>
        <code>npm update</code> - обновить пакеты
    </li>
    <li>
        <code>npm start</code> - запустить проект
    </li>
    <li>
        <code>npm run pack</code> - Собирает распакоанную сборку проекта
    </li>
    <li>
        <code>npm run dist</code> - Собирает установщик проекта
    </li>
</ul>

## Алгоритм авторизации
* Лаунчер спрашивает у пользователя логин и пароль, а затем отправляет их на Сайт;
* Сайт проверяет правильность введенных данных и отправляет обратно Лаунчеру : Ник игрока, UUID, accessToken ;
* Лаунчер запускает Клиент игры с параметрами, полученными с предыдущего пункта;
* Игрок в Клиенте выбирает Сервер и нажимает Подключиться;
* Клиент знакомится с Сервером. Сервер отдает Клиенту ServerID - уникальный номер сервера для подключения. Клиент отдает Серверу свой ник (username);
* Клиент запрашивает разрешение у Сайта авторизации, отдавая ему свой accessToken, UUID и ServerID;
* Сайт проверяет правильность данных и если все ОК, то запоминает ServerID;
* Клиент получил разрешение от Сайта и посылает на Сервер запрос на подключение;
* Сервер, чтобы впустить Клиента спрашивает у Сайта авторизации его данные, отдавая ему Ник игрока и свой ServerID;
* Сайт передаёт Серверу информацию о параметрах игрока, чем разрешает тому войти;
* Клиент успешно заходит на сервер.

## PHP
Для отображения ошибок в PHP скриптах, может потребоваться использование:
```php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
```

## Возможные проблемы
Скины могут не загружаться по следующим пунктам:
<ul>
    <li>Параметр <code>online-mode</code> на сервере выключен, из-за этого сервер не грузит скины</li>
    <li>Ссылки на скин должны без проблем выдавать контент даже если пользователь делает запрос не из браузера (cloudflare может и не выдавать картинку майнкрафту)</li>
</ul>