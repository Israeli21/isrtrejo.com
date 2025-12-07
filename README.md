# israeltrejo.net

### Setting up:
Created the repo on Github. Then, I created a folder on my own local machine. 
After, I used these lines in order to add my local folder to connect to my github repo:

`echo # israeltrejo.net > README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Israeli21/israeltrejo.net.git
git push -u origin main`

I created all of the following files:
* package.json
* vite.config.ts
* src/style.css
* tsconfig.json
* postcss.config.js

npm install
npm run dev