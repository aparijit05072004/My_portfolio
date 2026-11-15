# Aparijit Chakraborty: Portfolio

Static portfolio site (HTML, CSS, JavaScript). No build step.

```
index.html        page content
css/style.css     theme, doodles, button styles
js/main.js        theme toggle, project filter, button-style panel, background doodles
assets/           favicon
```

## Deploy on GitHub Pages
1. Create a new GitHub repo (name it `aparijit05072004.github.io` for a root URL, or any name such as `Portfolio-Website`).
2. In this folder run:
   ```
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/aparijit05072004/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub open **Settings > Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
4. The site goes live in a minute or two at `https://aparijit05072004.github.io/<repo-name>/`.

## Editing
- **Projects:** each project is a `.row` inside `#plist` in `index.html`. Its `data-c` attribute sets which filter tabs show it: `ai`, `ml`, `data`, or several separated by spaces.
- **Contact icons:** Mail, Phone, LinkedIn and GitHub live in `<div class="links">` in the `#contact` section of `index.html`.
- **Project links:** replace the repositories-page GitHub links in Projects with the exact repo URLs.
- **Colours:** edit the variables at the top of `css/style.css`.
- **Button defaults:** change `def` in `js/main.js` (`s` style, `t` transparency, `b` blur).
