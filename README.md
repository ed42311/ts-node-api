# Node API Stuff

## Install

Clone this repo then run

`npm install`

## Dev

`npm run dev` - nodemon running dev server in one terminal
`curl http://localhost:3000/` - test in another terminal
should return
`{"message":"OK"}`

### Module Breakdown

#### api (this)

#### [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

[Express Cors Typescript][1]

## Prod

### Setup 1st run

heroku create, it will pick a random name for you, like this:

```
Creating app... done, ⬢ stormy-harbor-71028
https://stormy-harbor-71028.herokuapp.com/ | https://git.heroku.com/stormy-harbor-71028.git
```

Here is your new endpoint: `https://<random-name>.herokuapp.com/`

You can check on success with `git remote -v` you should see something like this:

```
❯ git remote -v
heroku  https://git.heroku.com/stormy-harbor-71028.git (fetch)
heroku  https://git.heroku.com/stormy-harbor-71028.git (push)
origin  git@bitbucket.org:murdochs-ranch-and-home-supply/api-learning.git (fetch)
origin  git@bitbucket.org:murdochs-ranch-and-home-supply/api-learning.git (push)
```

Then functionality should be the same just with new url:

```
curl https://stormy-harbor-71028.herokuapp.com/
{"message":"OK"}%
```

### Pushing Code to Prod

commit your code and push just with the `heroku` remote

[1]: https://brianflove.com/2017-03-22/express-cors-typescript/
