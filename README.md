Install dependencies

```sh
npm install
```

Spin up the container

```sh
docker-compose up -d postgres
```

verify if the database is running

```sh
docker-compose exec postgres bash
```

connect to database

```sh
psql -h localhost -d devices -U user
```

list the databases `\l` and you will see the following

```
                            List of databases
   Name    | Owner | Encoding |  Collate   |   Ctype    | Access privileges
-----------+-------+----------+------------+------------+-------------------
 catalog   | user  | UTF8     | en_US.utf8 | en_US.utf8 |
 postgres  | user  | UTF8     | en_US.utf8 | en_US.utf8 |
 template0 | user  | UTF8     | en_US.utf8 | en_US.utf8 | =c/user          +
           |       |          |            |            | user=CTc/user
 template1 | user  | UTF8     | en_US.utf8 | en_US.utf8 | =c/user          +
           |       |          |            |            | user=CTc/user
(4 rows)
```

exit the connection `\q` and get out of the container `exit`


```
docker-compose exec postgres createdb -U user catalog
docker-compose exec postgres psql -d catalog -U user

```