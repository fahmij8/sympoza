# Sympozia Project

<p align="center"><img src="https://img.youtube.com/vi/CnnnlR6zi3E/maxresdefault.jpg" width="600"></p>
<p align="center">
    <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel">
    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgresql">
    <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript">
</p>

<p align="center">
    <img src="https://wakatime.com/badge/user/761b44aa-c23f-4d0f-8a49-4d2f91a7fef7/project/60b63154-983c-4f7c-a368-030b504990b4.svg?style=for-the-badge" alt="Time Spent">
    <a href="https://sympozia-kelompok3.herokuapp.com/">
        <img src="https://img.shields.io/website?down_message=%E2%9D%8C%20Not%20Available&label=Live%20Demo&style=for-the-badge&up_message=%E2%9C%94%20Click%20Here&url=https%3A%2F%2Fsympozia-kelompok3.herokuapp.com%2F">
    </a>
    <a href="https://www.youtube.com/watch?v=CnnnlR6zi3E">
        <img src="https://img.shields.io/badge/Video%20Demo-YouTube-red.svg?logo=youtube&style=for-the-badge">
    </a>
</p>

## Assignments

-   [x] Add paper feature
-   [x] View paper feature
-   [x] Edit paper feature

Usage :

-   Install php dependencies (composer)

```
composer install
```

-   Create SQL Database named `laravel`
-   Migrate & seed initial database

```
php artisan migrate:fresh --seed
```

-   Rename `.env.example` to `.env`
-   Create application key

```
php artisan key:generate
```

-   Serve!

```
php artisan serve
```

-   In case of the storage file is not readable, please run this command to link the storage to public

```
php artisan storage:link
```
