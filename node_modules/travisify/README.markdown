travisify
=========

Add [travis-ci](http://travis-ci.org) hooks to your github project.

install
=======

```
npm install -g travisify
```

usage
=====

Navigate to a git project that you've set up remotes for on github, then run
`travisify`. The first time you run `travisify` it will prompt you for your
github account and travis api key.

```
$ cd ~/projects/upnode
$ travisify
# created a .travis.yml
# make sure to `git add .travis.yml`
travis hook added for substack/upnode with id 213466
```

Now every time you push to github your tests will be run on travis-ci.

Travisify looks at your `package.json`'s engine field to generate a
`.travis.yml` file if one doesn't already exist.

If you want to trigger the tests manually you can use the `travisify test`
command:

```
$ cd ~/projects/upnode
$ travisify test
test hook sent for substack/upnode/213466
```

commands
========

travisify
---------

Add a github hook for travis if one hasn't already been added.

travisify test
--------------

Trigger a test request for the travis hook.

travisify badge
---------------

Generate a markdown travis badge to put in your readme.

license
=======

MIT
