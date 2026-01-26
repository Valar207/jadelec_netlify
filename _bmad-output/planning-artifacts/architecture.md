---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/product-brief-jadelec_netlify-2026-01-25.md"
workflowType: 'architecture'
project_name: 'jadelec_netlify'
user_name: 'Val'
date: '2026-01-25'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

---

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
38 FRs répartis en 7 domaines :
- Navigation & Structure (4) : Architecture de pages, menu, responsive
- Page Accueil (4) : Composants Hero, Services Grid, CTA
- Pages Services (7) : 5 templates de pages service avec SEO
- Portfolio (4) : Collection de réalisations avec images
- Contact (6) : Formulaire Netlify Forms + coordonnées
- SEO (5) : Meta tags, sitemap, schema.org
- CMS Admin (8) : Interface Netlify CMS pour gestion contenu

**Non-Functional Requirements:**
25 NFRs critiques pour l'architecture :
- Performance : Lighthouse > 90, LCP < 2.5s, page < 1MB
- SEO : Lighthouse SEO > 95, Core Web Vitals "Good"
- Accessibility : WCAG 2.1 AA
- Security : HTTPS, headers sécurité, anti-spam formulaire

**Scale & Complexity:**
- Primary domain : Web Frontend (Static Site Generator)
- Complexity level : Low
- Estimated architectural components : 8-10

### Technical Constraints & Dependencies

| Contrainte | Valeur | Impact |
|------------|--------|--------|
| Budget | 0€ | Netlify free tier uniquement |
| Framework | Eleventy 2.x | SSG, templates Nunjucks/Liquid |
| Styling | TailwindCSS 3.x | Utility-first CSS |
| CMS | Netlify CMS (Decap) | Git-based, YAML config |
| Hosting | Netlify | CDN, Forms, Analytics inclus |
| Build | < 30s | Architecture simple requise |

### Cross-Cutting Concerns Identified

1. **SEO** : Chaque page doit avoir meta tags, schema.org, URLs optimisées
2. **Responsive** : Mobile-first, breakpoints 640px/1024px
3. **Performance** : Images WebP, lazy loading, CSS minimal
4. **CMS Integration** : Collections pour réalisations, pages services éditables
5. **Formulaires** : Netlify Forms avec honeypot anti-spam

---

## Starter Template Evaluation

### Primary Technology Domain

**Static Site Generator (SSG)** - Site vitrine avec CMS headless

### Technical Preferences (from PRD)

- **Framework** : Eleventy 2.x (imposé par PRD)
- **Styling** : TailwindCSS 3.x
- **CMS** : Netlify CMS (Decap CMS)
- **Hosting** : Netlify
- **Language** : JavaScript/Nunjucks templates

### Starter Options Considered

| Option | Description | Verdict |
|--------|-------------|---------|
| `eleventy-base-blog` | Starter officiel Eleventy | Trop orienté blog |
| `eleventy-netlify-boilerplate` | Eleventy + Netlify CMS | ✅ **Parfait** |
| Custom from scratch | Configuration manuelle | Plus long, moins fiable |

### Selected Starter: Custom Eleventy + Netlify CMS Setup

**Rationale for Selection:**
Le projet est simple et bien défini. Plutôt qu'un starter générique, on configure Eleventy from scratch avec exactement ce dont on a besoin, en suivant les best practices.

**Initialization Command:**

```bash
mkdir jadelec-site && cd jadelec-site
npm init -y
npm install @11ty/eleventy tailwindcss autoprefixer postcss
npm install -D netlify-cms-app
```

### Architectural Decisions Provided by Setup

**Language & Runtime:**
- Node.js 18+ LTS
- JavaScript ES6+ (pas TypeScript - overkill pour ce projet)
- Templates Nunjucks (.njk)

**Styling Solution:**
- TailwindCSS 3.x avec PostCSS
- Purge CSS automatique en production
- Pas de CSS-in-JS (inutile pour SSG)

**Build Tooling:**
- Eleventy pour génération statique
- PostCSS pour processing CSS
- npm scripts pour build/dev

**Testing Framework:**
- Pas de tests unitaires (site statique simple)
- Lighthouse CI pour tests performance/SEO
- Validation HTML W3C

**Code Organization:**
```
jadelec-site/
├── src/
│   ├── _data/           # Données globales (site.json)
│   ├── _includes/       # Layouts et partials
│   │   ├── layouts/     # base.njk, page.njk
│   │   └── components/  # header.njk, footer.njk, etc.
│   ├── assets/
│   │   ├── css/         # styles.css (Tailwind)
│   │   └── images/      # Images statiques
│   ├── services/        # Pages services (markdown + frontmatter)
│   ├── realisations/    # Collection réalisations
│   ├── index.njk        # Page accueil
│   └── contact.njk      # Page contact
├── admin/               # Netlify CMS config
│   ├── index.html
│   └── config.yml
├── .eleventy.js         # Config Eleventy
├── tailwind.config.js   # Config Tailwind
├── postcss.config.js    # Config PostCSS
├── netlify.toml         # Config Netlify
└── package.json
```

**Development Experience:**
- `npm run dev` : Serveur local avec hot reload
- `npm run build` : Build production
- Netlify Dev pour tester Forms localement

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- ✅ Framework : Eleventy 2.x
- ✅ Styling : TailwindCSS 3.x
- ✅ CMS : Netlify CMS (Decap CMS)
- ✅ Hosting : Netlify
- ✅ Formulaires : Netlify Forms

**Important Decisions (Shape Architecture):**
- ✅ Templates : Nunjucks (.njk)
- ✅ Structure : src/ avec _includes, _data, collections
- ✅ Images : Optimisation WebP + lazy loading

**Deferred Decisions (Post-MVP):**
- Blog/Actualités (Phase 2)
- Animations Framer Motion (Phase 3)
- Intégration CRM (Phase 3)

### Data Architecture

| Décision | Choix | Rationale |
|----------|-------|-----------|
| **Data Storage** | Fichiers Markdown + YAML frontmatter | SSG = pas de BDD, contenu versionné dans Git |
| **Collections** | `realisations/`, `services/` | Eleventy collections pour contenu dynamique |
| **Global Data** | `_data/site.json` | Infos entreprise, navigation, SEO defaults |
| **Images** | `assets/images/` + Netlify Large Media | Optimisation automatique, CDN |

**Structure des données :**

```yaml
# _data/site.json
{
  "name": "Jadelec",
  "tagline": "Électricité générale",
  "phone": "01 48 35 50 51",
  "mobile": "06 98 23 62 58",
  "email": "contact@jadelec.net",
  "address": "163 avenue Paul Vaillant-Couturier, 93120 LA COURNEUVE",
  "hours": "Lundi-Vendredi 8h-12h / 13h30-17h"
}
```

### Authentication & Security

| Décision | Choix | Rationale |
|----------|-------|-----------|
| **CMS Auth** | Netlify Identity | Gratuit, intégré, Git Gateway |
| **Site public** | Pas d'auth | Site vitrine public |
| **Formulaires** | Honeypot anti-spam | Simple, pas de CAPTCHA intrusif |
| **HTTPS** | Automatique Netlify | Certificat Let's Encrypt gratuit |
| **Headers** | netlify.toml | CSP, X-Frame-Options, etc. |

### API & Communication Patterns

| Décision | Choix | Rationale |
|----------|-------|-----------|
| **API** | Aucune | Site statique, pas de backend |
| **Formulaires** | Netlify Forms | Serverless, notifications email |
| **Analytics** | Netlify Analytics | Gratuit basique, RGPD-friendly |

### Frontend Architecture

| Décision | Choix | Rationale |
|----------|-------|-----------|
| **State Management** | Aucun | Site statique, pas de state client |
| **JavaScript** | Minimal vanilla JS | Menu mobile, lazy loading |
| **Components** | Nunjucks includes | Réutilisables, pas de framework JS |
| **Routing** | Eleventy file-based | URLs = structure fichiers |
| **CSS** | TailwindCSS utility-first | Rapide, purge automatique |

### Infrastructure & Deployment

| Décision | Choix | Rationale |
|----------|-------|-----------|
| **Hosting** | Netlify | CDN global, gratuit, intégré |
| **CI/CD** | Netlify auto-deploy | Push Git → Build → Deploy |
| **Preview** | Deploy Previews | Branches = URLs preview |
| **Domain** | jadelec.net (Hover) | Migration DNS vers Netlify |
| **Monitoring** | Netlify Analytics | Basique mais suffisant |

### Decision Impact Analysis

**Implementation Sequence:**
1. Setup projet (Eleventy + Tailwind + config)
2. Layout de base + composants (header, footer)
3. Page accueil
4. Pages services (5)
5. Page réalisations + collection
6. Page contact + formulaire
7. Netlify CMS config
8. SEO (meta, sitemap, schema.org)
9. Tests Lighthouse + optimisations
10. Déploiement production

**Cross-Component Dependencies:**
- Layout base → Toutes les pages
- _data/site.json → Header, Footer, Contact
- Collection réalisations → Page réalisations, CMS
- Tailwind config → Tous les composants

---

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:** 8 areas où les agents IA pourraient faire des choix différents

### Naming Patterns

**File Naming Conventions:**
| Type | Convention | Exemple |
|------|------------|---------|
| Pages | kebab-case.njk | `contact.njk`, `qui-sommes-nous.njk` |
| Includes | kebab-case.njk | `header.njk`, `service-card.njk` |
| Layouts | kebab-case.njk | `base.njk`, `page.njk` |
| Data files | kebab-case.json | `site.json`, `navigation.json` |
| CSS | kebab-case.css | `styles.css` |
| Images | kebab-case.ext | `hero-accueil.webp` |

**URL Naming Conventions:**
| Type | Convention | Exemple |
|------|------------|---------|
| Pages services | /services/slug | `/services/gtb-domotique` |
| Réalisations | /realisations/slug | `/realisations/immeuble-paris-15` |
| Pages statiques | /slug | `/contact`, `/qui-sommes-nous` |

**CSS Class Naming:**
- Utiliser les classes utilitaires TailwindCSS
- Pas de CSS custom sauf exceptions documentées
- Préfixe `jl-` pour classes custom si nécessaire

### Structure Patterns

**Project Organization:**
```
src/
├── _data/              # Données globales JSON
├── _includes/
│   ├── layouts/        # Layouts Nunjucks
│   └── components/     # Composants réutilisables
├── assets/
│   ├── css/           # Fichiers CSS source
│   └── images/        # Images statiques
├── services/          # Collection services (markdown)
├── realisations/      # Collection réalisations (markdown)
└── *.njk              # Pages racine
```

**Component Organization:**
- 1 fichier = 1 composant
- Composants dans `_includes/components/`
- Nommage descriptif : `service-card.njk`, `realisation-gallery.njk`

### Format Patterns

**Frontmatter Format (Markdown):**
```yaml
---
title: "Titre de la page"
description: "Description SEO"
layout: layouts/page.njk
permalink: /chemin/url/
date: 2026-01-25
tags: ["service", "courant-fort"]
image: /assets/images/featured.webp
---
```

**Data File Format (_data/*.json):**
```json
{
  "key": "value",
  "nested": {
    "property": "value"
  },
  "array": ["item1", "item2"]
}
```

### Communication Patterns

**Template Variables:**
- `site.name` : Nom de l'entreprise
- `site.phone` : Téléphone principal
- `page.title` : Titre de la page courante
- `collections.services` : Toutes les pages services
- `collections.realisations` : Toutes les réalisations

**Include Parameters:**
```nunjucks
{% include "components/service-card.njk" with {
  title: service.data.title,
  description: service.data.description,
  url: service.url
} %}
```

### Process Patterns

**Build Process:**
1. Eleventy compile les templates
2. PostCSS traite TailwindCSS
3. Images copiées vers _site/
4. Netlify déploie _site/

**Error Handling:**
- Pas d'erreurs runtime (site statique)
- Validation build-time via Eleventy
- Formulaires : message de confirmation/erreur côté Netlify

### Enforcement Guidelines

**All AI Agents MUST:**
- Suivre les conventions de nommage kebab-case
- Utiliser TailwindCSS pour le styling (pas de CSS inline)
- Respecter la structure de dossiers définie
- Utiliser le frontmatter YAML standard
- Documenter tout écart aux patterns

**Pattern Verification:**
- Build Eleventy réussit sans erreurs
- Lighthouse score > 90
- Validation HTML W3C

### Pattern Examples

**Good Examples:**
```nunjucks
{# Bon : utilisation de Tailwind + include propre #}
<section class="py-16 bg-gray-50">
  {% for service in collections.services %}
    {% include "components/service-card.njk" %}
  {% endfor %}
</section>
```

**Anti-Patterns:**
```nunjucks
{# Mauvais : CSS inline, nommage incohérent #}
<section style="padding: 4rem; background: #f5f5f5;">
  {% for s in collections.Services %}
    <div class="ServiceCard">...</div>
  {% endfor %}
</section>
```

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
jadelec-site/
├── README.md                    # Documentation projet
├── package.json                 # Dépendances npm
├── .eleventy.js                 # Configuration Eleventy
├── tailwind.config.js           # Configuration TailwindCSS
├── postcss.config.js            # Configuration PostCSS
├── netlify.toml                 # Configuration Netlify (headers, redirects)
├── .gitignore                   # Fichiers ignorés Git
├── .nvmrc                       # Version Node.js
│
├── src/                         # Code source
│   ├── _data/                   # Données globales
│   │   ├── site.json            # Infos entreprise (nom, tel, adresse)
│   │   └── navigation.json      # Menu de navigation
│   │
│   ├── _includes/               # Templates réutilisables
│   │   ├── layouts/
│   │   │   ├── base.njk         # Layout HTML de base
│   │   │   ├── page.njk         # Layout page standard
│   │   │   └── service.njk      # Layout page service
│   │   │
│   │   └── components/
│   │       ├── header.njk       # Header avec navigation
│   │       ├── footer.njk       # Footer avec coordonnées
│   │       ├── hero.njk         # Section hero accueil
│   │       ├── service-card.njk # Carte service
│   │       ├── realisation-card.njk  # Carte réalisation
│   │       ├── contact-form.njk # Formulaire contact
│   │       ├── cta-section.njk  # Section call-to-action
│   │       └── seo-head.njk     # Meta tags SEO
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css       # CSS source (Tailwind directives)
│   │   └── images/
│   │       ├── logo-jadelec.svg # Logo principal
│   │       ├── icon-jadelec.svg # Icône/favicon
│   │       └── hero/            # Images hero
│   │
│   ├── services/                # Collection pages services
│   │   ├── services.json        # Defaults collection
│   │   ├── courant-fort.md      # Page Courant Fort
│   │   ├── courant-faible.md    # Page Courant Faible
│   │   ├── bornes-recharge-irve.md  # Page IRVE
│   │   ├── gtb-domotique.md     # Page GTB/Domotique
│   │   └── entretien-depannage.md   # Page Entretien
│   │
│   ├── realisations/            # Collection réalisations
│   │   ├── realisations.json    # Defaults collection
│   │   └── *.md                 # Fichiers réalisations (via CMS)
│   │
│   ├── index.njk                # Page accueil
│   ├── contact.njk              # Page contact
│   ├── realisations.njk         # Page liste réalisations
│   ├── 404.njk                  # Page erreur 404
│   ├── sitemap.njk              # Sitemap XML
│   └── robots.njk               # Robots.txt
│
├── admin/                       # Netlify CMS
│   ├── index.html               # Interface admin
│   └── config.yml               # Configuration collections CMS
│
└── _site/                       # Output build (généré, gitignored)
```

### Architectural Boundaries

**Page Boundaries:**
| Page | URL | Template | Collection |
|------|-----|----------|------------|
| Accueil | `/` | index.njk | - |
| Services | `/services/*` | service.njk | services |
| Réalisations | `/realisations/` | realisations.njk | realisations |
| Contact | `/contact/` | page.njk | - |

**Component Boundaries:**
- `header.njk` : Navigation + logo + CTA
- `footer.njk` : Coordonnées + liens + copyright
- `seo-head.njk` : Meta tags, OG, schema.org
- Composants isolés, pas de dépendances croisées

**Data Boundaries:**
- `site.json` : Données globales (entreprise)
- `navigation.json` : Structure menu
- Frontmatter : Données spécifiques à chaque page
- Collections : Données dynamiques (services, réalisations)

### Requirements to Structure Mapping

**FR → Fichiers :**
| FR | Fichier(s) |
|----|------------|
| FR1-4 (Navigation) | `header.njk`, `navigation.json` |
| FR5-8 (Accueil) | `index.njk`, `hero.njk`, `service-card.njk` |
| FR9-15 (Services) | `services/*.md`, `service.njk` |
| FR16-19 (Portfolio) | `realisations/*.md`, `realisation-card.njk` |
| FR20-25 (Contact) | `contact.njk`, `contact-form.njk` |
| FR26-30 (SEO) | `seo-head.njk`, `sitemap.njk`, `robots.njk` |
| FR31-38 (CMS) | `admin/config.yml` |

### Integration Points

**Netlify Integration:**
- Forms : Attribut `netlify` sur `<form>`
- Identity : Script dans `base.njk` pour CMS auth
- Analytics : Automatique via Netlify

**Build Integration:**
- Eleventy → HTML statique
- PostCSS → CSS optimisé
- Netlify → Déploiement CDN

### Development Workflow

**Commands:**
```bash
npm run dev      # Serveur local http://localhost:8080
npm run build    # Build production dans _site/
npm run preview  # Preview build local
```

**Workflow:**
1. Éditer fichiers dans `src/`
2. Hot reload automatique
3. Commit + push → Netlify auto-deploy
4. Preview URL pour review

---

## Architecture Validation

### Coherence Validation ✅

| Check | Status | Notes |
|-------|--------|-------|
| Technology Compatibility | ✅ | Eleventy + Tailwind + Netlify = stack éprouvée |
| Version Compatibility | ✅ | Node 18+, Eleventy 2.x, Tailwind 3.x |
| Pattern Alignment | ✅ | Patterns Nunjucks cohérents avec SSG |
| No Contradictions | ✅ | Décisions cohérentes |

### Requirements Coverage ✅

| FR Category | Coverage | Architecture Support |
|-------------|----------|---------------------|
| Navigation (FR1-4) | ✅ 100% | header.njk, navigation.json |
| Accueil (FR5-8) | ✅ 100% | index.njk, composants hero/services |
| Services (FR9-15) | ✅ 100% | Collection services, layout service.njk |
| Portfolio (FR16-19) | ✅ 100% | Collection realisations, CMS |
| Contact (FR20-25) | ✅ 100% | contact.njk, Netlify Forms |
| SEO (FR26-30) | ✅ 100% | seo-head.njk, sitemap, schema.org |
| CMS (FR31-38) | ✅ 100% | admin/config.yml, Netlify Identity |

### NFR Coverage ✅

| NFR Category | Coverage | Architecture Support |
|--------------|----------|---------------------|
| Performance | ✅ | SSG = HTML statique, CDN Netlify |
| SEO | ✅ | Meta tags, sitemap, schema.org |
| Accessibility | ✅ | Semantic HTML, ARIA, contraste |
| Security | ✅ | HTTPS auto, headers netlify.toml |
| Reliability | ✅ | Netlify 99.9% SLA |
| Maintainability | ✅ | Git, CMS, structure claire |

### Gap Analysis

**Gaps identifiés : 0**

L'architecture couvre 100% des FRs et NFRs du MVP.

### Validation Summary

✅ **Architecture VALIDÉE** - Prête pour implémentation

---

## Next Steps

1. **Initialiser le projet** avec la structure définie
2. **Créer les epics et stories** basées sur cette architecture
3. **Implémenter** en suivant les patterns définis

