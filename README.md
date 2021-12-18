<p align="center"><a href="https://github.com/laravel/laravel" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Sympozia Project

### Assignments

-   [x] Add paper feature
-   [x] View paper feature
-   [ ] Edit paper feature (WIP)

Usage :

-   Install php dependencies (composer)

```
composer install
```

-   Create SQL Database named `laravel`
-   Migrate & seed initial database

```
php artisan migrate:refresh --seed
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

-   In case of the storage file not readable, please run this command to link the storage to public

```
php artisan storage:link
```
