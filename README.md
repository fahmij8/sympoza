# Sympozia Project

<p align="center"><img src="https://img.youtube.com/vi/CnnnlR6zi3E/maxresdefault.jpg" width="600"></p>
<p align="center">
    <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel">
    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
    <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript">
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
