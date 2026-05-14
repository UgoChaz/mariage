# Gwendoline & Ugo — Site de mariage

Site vitrine pour le mariage du 18 septembre 2027 à La Tuile au Loup, Corps (38970).

---

## Tester le site en local

Ouvre simplement `index.html` dans ton navigateur (double-clic sur le fichier).
Le mot de passe est : **120122**

---

## Modifier le contenu

Ouvre `index.html` dans un éditeur de texte (Notepad, VS Code…) et cherche les balises :

```
<!-- EDIT: ... -->
```

Elles indiquent exactement où modifier : horaires, lieux, hébergements, dress code, date limite RSVP, etc.

---

## Ajouter le Google Form RSVP

1. Va sur [forms.google.com](https://forms.google.com) et crée ton formulaire.
   Champs suggérés :
   - Nom & prénom
   - Nombre de personnes
   - Présence à : cérémonie / vin d'honneur / dîner / soirée
   - Allergies ou régimes alimentaires
   - Message libre

2. Clique sur **Envoyer** (icône avion en haut à droite) → onglet **`<>`** (Intégrer) → copie l'URL.

3. Dans `index.html`, cherche `GOOGLE_FORM_EMBED_URL` et remplace-le par l'URL copiée.

4. Supprime le bloc `<div class="rsvp-placeholder">...</div>` et dé-commente le bloc `<iframe>` juste en dessous (enlève `<!--` et `-->`).

Les réponses seront consultables dans la Google Sheet automatiquement liée au formulaire.

---

## Déployer sur GitHub Pages

### Première fois

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/UgoChaz/mariage.git
git push -u origin main
```

Ensuite sur GitHub :
1. Va sur ton repo → **Settings** → **Pages**
2. Source : **Deploy from a branch** → branche `main` → dossier `/root`
3. Clique **Save**

Ton site sera en ligne en 1-2 minutes à l'adresse :
**https://ugochaz.github.io/mariage/**

### Mettre à jour le site après une modification

```bash
git add .
git commit -m "Mise à jour contenu"
git push
```

Le site se met à jour automatiquement en 1-2 minutes.

---

## Changer le mot de passe

Dans `assets/script.js`, ligne 15, remplace `'120122'` par le nouveau mot de passe :

```js
if (input.value === '120122') {
```

---

## Ajouter un domaine personnalisé (optionnel)

Si tu veux une URL type `gwendoline-et-ugo.fr` (~10€/an sur OVH ou Gandi) :

1. Crée un fichier `CNAME` à la racine avec juste le nom de domaine dedans :
   ```
   gwendoline-et-ugo.fr
   ```
2. Chez ton registrar, ajoute un enregistrement DNS `CNAME` → `ugochaz.github.io`
3. Dans GitHub → Settings → Pages → Custom domain : entre ton domaine

---

## Structure des fichiers

```
mariage/
├── index.html        ← page principale (tout le contenu est ici)
├── assets/
│   ├── style.css     ← couleurs, typos, mise en page
│   └── script.js     ← mot de passe, compte à rebours, animations
├── .nojekyll         ← nécessaire pour GitHub Pages
├── .gitignore
└── README.md         ← ce fichier
```
