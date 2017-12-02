# Notes

--------

Used this website:

https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089

steps taken:

1. added this to `package.json`:
```
"homepage": "https://www.whenisbigbashon.com"
```

2. `npm run build`

3. `npm install --save-dev gh-pages`

4. added this to `package.json`:
```
"deploy": "npm run build && gh-pages -d build"
```

5. `npm run deploy`

6. go to https://github.com/noccer/big-bash/settings and add custom domain `www.whenisbigbashon.com`

7. go to crazy domains and add A records to point at gh pages:

```
whenisbigbashon.com 192.30.252.153
www.whenisbigbashon.com 192.30.252.153
whenisbigbashon.com 192.30.252.154
www.whenisbigbashon.com 192.30.252.154

Read more at https://manage.crazydomains.com.au/members/domains/details/?id=20944257#myJldK0EpR8KOEQv.99
```

----------

Other resources:

https://help.github.com/articles/setting-up-an-apex-domain/
https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/


