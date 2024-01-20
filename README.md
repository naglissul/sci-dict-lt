# Science dictionary LT/NL -> EN

When googling about math, transition to English easily!

Check out the deployed website here: [sci-dict.org](http://sci-dict.org)

The branch "dereleased" keeps the version v1.1.1 which for now will not be used and will be deleted, but in later versions will be used again.

## How to use?

Look for your work in specific literature category, or use the Search bar.

## How to contribute?

For a new word / category (for the words from a specific literature) or
a better translation suggestions please email me [naglis.suliokas@gmail.com](mailto:naglis.suliokas@gmail.com)
or fork repo and create a PR.

## For developers

### Tech

- React TS
- React-bootstrap
- GitHub Pages
- yarn

### Run dev

Basic run for react app with yarn (ofc, prerequisites are nodejs and yarn installed):

```
git pull
yarn
yarn start
```

Deploy:

```
yarn build
yarn deploy https://${username}:${gh_token}@github.com/${username}/${username}.github.io
```

## Future ideas

Admin and user acc. User can provide a translation for the admin to review. Do that with API keys.

Add mini likes - translations with least like will be eliminated (archived)
