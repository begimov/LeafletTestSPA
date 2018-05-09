LeafletTestSPA

- cd /var/www/html/your_website

- git clone https://github.com/begimov/LeafletTestSPA.git

- mv LeafletTestSPA/* .
- mv LeafletTestSPA/.* .

- rmdir LeafletTestSPA/

- composer install

- chown www-data: -R /var/www/html/your_website/

- mv .env.example .env
- nano .env

- php artisan key:generate
- php artisan migrate
- php artisan db:seed

- nano /etc/apache2/sites-available/your_website.conf
- a2ensite your_website.conf
- service apache2 reload