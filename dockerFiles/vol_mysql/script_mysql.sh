#!/bin/sh

SQL="CREATE USER 'docker_biblia'@'localhost' IDENTIFIED BY 'M@deld4166'; GRANT ALL PRIVILEGES ON * . * TO 'docker_biblia'@'localhost'; UPDATE mysql.user SET host='%' WHERE user="docker_biblia"; FLUSH PRIVILEGES;"

mysql -u root -pdeusepoder --execute="CREATE USER 'docker_biblia'@'localhost' IDENTIFIED BY 'M@deld4166'; GRANT ALL PRIVILEGES ON * . * TO 'docker_biblia'@'localhost'; UPDATE mysql.user SET host='%' WHERE user='docker_biblia'; FLUSH PRIVILEGES;"
