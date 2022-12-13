server {
      listen 80;
      listen [::]:80;

      root /var/www/fontevida.com;
      index index.html index.htm;

  }
