# Install

```sh
npm install
```

# Migrations

```sh
npm run migrations:run
```

# Run in dev mode

```sh
npm run dev
```

# Run in prod mode

```sh
npm run start
```

# Connect to local DB

docker-compose up -d postgres

# Command to check if the container is running

docker ps

# Connect to DB from Docker

```sh
docker-compose exec postgres bash
psql -h localhost -d my_store -U nico
\d+
SELECT * FROM users;
DELETE FROM users WHERE id=<id>;
```
