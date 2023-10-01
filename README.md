# Science dictionary LT -> EN

When googling about math, transition to English easily!

Check out the deployed website here: [sci-dict.lt](http://sci-dict.lt)

## How to use?

Use Ctrl+F of "Find in page" to find your word or category.  
Click on the "I was here" counter! So I could carry on with this project  
If curious what the count is, go to [http://sci-dict.lt:5000/api/counters/i-was-here](http://sci-dict.lt:5000/api/counters/i-was-here)

## How to contribute?

See mistakes? Know a word that's not here? Know a better translation?

- Email me [naglis.suliokas@gmail.com](mailto:naglis.suliokas@gmail.com) or
- Fork repo and create a PR after modifying [./client/src/data/dict.json](./client/src/data/dict.json) file.

## For developers

### Tech

- React JS
- Docker
- React-bootstrap

### Run dev

```
cd client
npm install
npm start
```
```
Ctrl + C
```

Or with docker:

```
docker-compose -f docker-compose.prod.yaml up
```

```
docker-compose -f docker-compose.prod.yaml down
```

### Run prod

New release:
```
git pull
./bin/prod_deploy.sh redeploy
```
In case of unsuccessful new release deployment:
```
./bin/prod_deploy.sh rollback
```

Separately run the counter:

```
cd server
npm install
npm start
```

HAPPY CODING! :))

Small comment:  
If access is denied when running bash script, run this command:
```
chmod +x ./bin/prod_deploy.sh
```
## Future ideas

There could be admin and user accounts. And a database. And categories. And voting.

## Bugs
Redeploy is still problematic