# Science dictionary LT -> EN

When googling about math, transition to English easily!

Check out the deployed website here: [sci-dict.lt](http://sci-dict.lt)

## How to use?

Use Ctrl+F to find your word or category.

## How to contribute?

See mistakes? Know a word that's not here? Know a better translation?

- Email me [naglis.suliokas@gmail.com](mailto:naglis.suliokas@gmail.com) or
- Fork repo and create a PR after modifying [./client/src/data/dict.json](./client/src/data/dict.json) file.

## For developers

### Tech

- React JS
- Docker
- React-bootstrap

### Run

Run dev server:

```
cd client
npm install
npm start
```

Run (as) prod with docker (on linux):

```
docker-compose -f docker-compose.prod.yaml up
```

Shut down docker server:

```
docker-compose -f docker-compose.prod.yaml down
```

Deploy new release:

```
git pull
docker-compose -f docker-compose.prod.yaml down
docker image ls     (should see the client-prod-i image name)
docker image rm client-prod-i
docker-compose -f docker-compose.prod.yaml up
```

run backend counter:

```
cd server
(npm install)
npm start
```

Comment: later should be possible to run with "./bin/prod_deploy.sh up|down" but it's not tested

HAPPY CODING! :))

## Future ideas

There could be admin and user accounts. And a database.
