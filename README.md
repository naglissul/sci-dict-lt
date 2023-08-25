# Science dictionary LT -> EN

When googling about math, transition to English easily!

Check out the deployed website here: [sci-dict.lt](http://sci-dict.lt)

## How to use?

Use Ctrl+F to find your word or category.

See mistakes? Know a word that's not here? Know a better translation? Email me [naglis.suliokas@gmail.com](mailto:naglis.suliokas@gmail.com) or create a Pull request on [GitHub](https://github.com/naglissul/sci-dict-lt).

## For developers

### Tech
- React JS
- Docker

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
Comment: should be possible to run with "./bin/prod_deploy.sh up|down" but it's not tested

HAPPY CODING! :))