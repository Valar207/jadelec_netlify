# Jadelec - Site Vitrine

Site vitrine pour Jadelec, entreprise d'électricité générale basée à La Courneuve (93).

## Stack Technique

- **Eleventy 2.x** - Générateur de site statique
- **TailwindCSS 3.x** - Framework CSS utility-first
- **Netlify CMS** - Gestion de contenu headless
- **Netlify** - Hébergement et déploiement

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## Structure du projet

```
jadelec_netlify/
├── src/
│   ├── _data/           # Données globales (site.json, navigation.json)
│   ├── _includes/
│   │   ├── layouts/     # Layouts Nunjucks
│   │   └── components/  # Composants réutilisables
│   ├── assets/
│   │   ├── css/         # Styles TailwindCSS
│   │   └── images/      # Images statiques
│   ├── services/        # Pages services (markdown)
│   ├── realisations/    # Portfolio (markdown)
│   └── *.njk            # Pages principales
├── admin/               # Configuration Netlify CMS
├── .eleventy.js         # Configuration Eleventy
├── tailwind.config.js   # Configuration Tailwind
├── netlify.toml         # Configuration Netlify
└── package.json
```

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur local sur http://localhost:8080 |
| `npm run build` | Build de production dans `_site/` |
| `npm run preview` | Preview du build sur port 8081 |

## Administration

L'interface d'administration est accessible à `/admin` après déploiement sur Netlify.

1. Activer Netlify Identity dans les paramètres du site
2. Activer Git Gateway
3. Inviter les utilisateurs admin

## Déploiement

Le site se déploie automatiquement sur Netlify à chaque push sur la branche `main`.

## Contact

Jadelec - contact@jadelec.net
