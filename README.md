# metraWeb v6

The new version of our website based on Jekyll


## Development

For development, just start Jekyll with the serve option

`bundle exec jekyll serve`

Any changes to the code are shown dynamically. You can access the page on http://localhost:4000


To test the behaviour with the static results (like the production version will be), go to the _site folder and start any webserver, eg.

`python3 -m http.server`


## Push to Production

The website is hosted with CloudCannon - https://cloudcannon.com/

They are automatically rendering any static code that is found in the github repo. That is why the _site directory is a git directory which is a public repo on github.

So to update, go to the _site dir and do a normal git add, git commit, git push.


## Change content

To change files and other content, log into cloudcannon and use the GUI