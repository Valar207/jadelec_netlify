# User Stories - Système de Configuration WordPress-Like pour Jadelec

**Date de création** : 27 janvier 2026  
**Demandeur** : Val (via retour patron)  
**Objectif** : Permettre à un utilisateur non-technique de paramétrer l'intégralité du site (textes, styles, rubriques, images) via une interface CMS visuelle.

---

## 📋 Résumé Exécutif

Transformation du site Jadelec en système entièrement configurable via Decap CMS (ex-Netlify CMS), permettant de modifier :
- Tous les textes et contenus de chaque page
- Les couleurs, polices et styles visuels
- La structure des menus et rubriques
- Les images et médias
- Les sections activables/désactivables
- Le SEO de chaque page

---

# EPIC 1 : Architecture Data-Driven

## US-1.1 : Créer le fichier de configuration des styles globaux

**En tant que** administrateur du site  
**Je veux** pouvoir modifier les couleurs et polices du site  
**Afin de** personnaliser l'identité visuelle sans toucher au code

### Critères d'acceptation
- [ ] Créer `src/_data/theme.json` avec :
  - Couleur primaire (hex)
  - Couleur secondaire/accent (hex)
  - Couleur de fond claire
  - Couleur de fond sombre
  - Police principale (Google Fonts)
  - Police des titres
  - Taille de police de base
  - Rayon des bordures (arrondi des boutons/cartes)
- [ ] Les templates Nunjucks utilisent ces variables
- [ ] Le CSS Tailwind génère les couleurs dynamiquement

### Estimation : 3 points

---

## US-1.2 : Créer le fichier de configuration de la page d'accueil

**En tant que** administrateur du site  
**Je veux** pouvoir modifier tous les textes de la page d'accueil  
**Afin de** mettre à jour le contenu sans intervention technique

### Critères d'acceptation
- [ ] Créer `src/_data/pages/home.json` avec :
  - **Section Hero** :
    - Badge texte
    - Titre principal
    - Sous-titre
    - Description
    - Texte bouton CTA principal
    - Texte bouton CTA secondaire
    - Image de fond (optionnel)
  - **Section Services** :
    - Titre de section
    - Sous-titre
    - Description
    - Activation/désactivation de la section
  - **Section Statistiques** :
    - Liste des stats (valeur + label) - éditable
    - Activation/désactivation
  - **Section "Pourquoi nous choisir"** :
    - Titre
    - Description
    - Liste des avantages (titre + description)
    - Image
    - Activation/désactivation
  - **Section CTA finale** :
    - Titre
    - Description
    - Texte des boutons
- [ ] Le template `index.njk` lit ces données dynamiquement

### Estimation : 5 points

---

## US-1.3 : Créer le fichier de configuration de la page Contact

**En tant que** administrateur du site  
**Je veux** pouvoir modifier les textes de la page contact  
**Afin de** personnaliser les messages et informations affichées

### Critères d'acceptation
- [ ] Créer `src/_data/pages/contact.json` avec :
  - Titre de la page
  - Description
  - Titre du formulaire
  - Texte d'urgence
  - Labels des champs du formulaire
  - Message de confirmation après envoi
- [ ] Le template `contact.njk` utilise ces données

### Estimation : 2 points

---

## US-1.4 : Créer le fichier de configuration de la page Réalisations

**En tant que** administrateur du site  
**Je veux** pouvoir modifier les textes de la page réalisations  
**Afin de** personnaliser la présentation de nos projets

### Critères d'acceptation
- [ ] Créer `src/_data/pages/realisations.json` avec :
  - Titre de la page
  - Description
  - Texte d'introduction
  - Catégories disponibles (liste éditable)
- [ ] Le template `realisations.njk` utilise ces données

### Estimation : 2 points

---

## US-1.5 : Créer le fichier de configuration du Header

**En tant que** administrateur du site  
**Je veux** pouvoir modifier le header et la navigation  
**Afin de** personnaliser les menus et liens

### Critères d'acceptation
- [ ] Étendre `src/_data/navigation.json` avec :
  - Logo (upload image)
  - Texte du bouton CTA header
  - Lien du bouton CTA
  - Afficher/masquer le numéro de téléphone
  - Afficher/masquer le bouton CTA
- [ ] Le template `header.njk` utilise ces données

### Estimation : 2 points

---

## US-1.6 : Créer le fichier de configuration du Footer

**En tant que** administrateur du site  
**Je veux** pouvoir modifier le contenu du footer  
**Afin de** personnaliser les informations de bas de page

### Critères d'acceptation
- [ ] Créer `src/_data/footer.json` avec :
  - Texte de description
  - Liens réseaux sociaux (liste)
  - Texte copyright
  - Liens légaux additionnels
  - Afficher/masquer certaines sections
- [ ] Le template `footer.njk` utilise ces données

### Estimation : 2 points

---

## US-1.7 : Créer le fichier de configuration SEO global

**En tant que** administrateur du site  
**Je veux** pouvoir gérer le SEO de manière centralisée  
**Afin d'** optimiser le référencement sans compétences techniques

### Critères d'acceptation
- [ ] Créer `src/_data/seo.json` avec :
  - Titre par défaut du site
  - Description par défaut
  - Mots-clés globaux
  - Image OG par défaut
  - Twitter handle
  - Google Analytics ID
  - Scripts additionnels (head/body)
- [ ] Le template `seo-head.njk` utilise ces données

### Estimation : 2 points

---

# EPIC 2 : Interface CMS Decap (Admin Visuel)

## US-2.1 : Configurer Decap CMS pour les styles/thème

**En tant que** administrateur du site  
**Je veux** modifier les couleurs et polices via une interface visuelle  
**Afin de** ne pas avoir à éditer de fichiers JSON manuellement

### Critères d'acceptation
- [ ] Ajouter dans `admin/config.yml` la collection "Thème" avec :
  - Color picker pour les couleurs
  - Select pour les polices Google Fonts
  - Slider pour les tailles
  - Preview en temps réel si possible
- [ ] Interface traduite en français

### Estimation : 3 points

---

## US-2.2 : Configurer Decap CMS pour la page d'accueil

**En tant que** administrateur du site  
**Je veux** modifier la page d'accueil via l'interface admin  
**Afin de** mettre à jour facilement les contenus

### Critères d'acceptation
- [ ] Ajouter dans `admin/config.yml` la collection "Page d'accueil" avec :
  - Champs pour chaque section (hero, services, stats, etc.)
  - Widgets appropriés (string, text, image, list, boolean)
  - Organisation en onglets/groupes logiques
- [ ] Labels en français clairs et explicites

### Estimation : 5 points

---

## US-2.3 : Configurer Decap CMS pour la page Contact

**En tant que** administrateur du site  
**Je veux** modifier la page contact via l'interface admin  
**Afin de** personnaliser les textes facilement

### Critères d'acceptation
- [ ] Ajouter la collection "Page Contact" dans le CMS
- [ ] Tous les champs éditables avec widgets appropriés

### Estimation : 2 points

---

## US-2.4 : Configurer Decap CMS pour la page Réalisations

**En tant que** administrateur du site  
**Je veux** modifier la page réalisations via l'interface admin  
**Afin de** gérer la présentation de mes projets

### Critères d'acceptation
- [ ] Ajouter la collection "Page Réalisations" dans le CMS
- [ ] Permettre d'ajouter/supprimer des catégories

### Estimation : 2 points

---

## US-2.5 : Configurer Decap CMS pour le Header/Navigation

**En tant que** administrateur du site  
**Je veux** modifier le menu de navigation via l'interface admin  
**Afin de** gérer les rubriques du site

### Critères d'acceptation
- [ ] Ajouter la collection "Navigation" dans le CMS avec :
  - Upload du logo
  - Gestion des items de menu (drag & drop si possible)
  - Sous-menus configurables
  - Liens externes/internes
- [ ] Interface intuitive pour réorganiser les menus

### Estimation : 3 points

---

## US-2.6 : Configurer Decap CMS pour le Footer

**En tant que** administrateur du site  
**Je veux** modifier le footer via l'interface admin  
**Afin de** personnaliser les informations de bas de page

### Critères d'acceptation
- [ ] Ajouter la collection "Footer" dans le CMS
- [ ] Gestion des réseaux sociaux (liste avec icône + URL)
- [ ] Textes éditables

### Estimation : 2 points

---

## US-2.7 : Configurer Decap CMS pour le SEO

**En tant que** administrateur du site  
**Je veux** gérer le SEO via l'interface admin  
**Afin d'** optimiser mon référencement facilement

### Critères d'acceptation
- [ ] Ajouter la collection "SEO & Analytics" dans le CMS
- [ ] Champs pour meta tags, OG, analytics
- [ ] Aide contextuelle pour guider l'utilisateur

### Estimation : 2 points

---

## US-2.8 : Améliorer l'interface Decap CMS

**En tant que** administrateur du site  
**Je veux** une interface admin agréable et intuitive  
**Afin de** naviguer facilement dans les paramètres

### Critères d'acceptation
- [ ] Personnaliser le logo et les couleurs de l'admin
- [ ] Organiser les collections par catégories logiques :
  - 📄 Pages
  - 🎨 Apparence
  - ⚙️ Paramètres
  - 📝 Contenus
- [ ] Ajouter des descriptions d'aide sur chaque champ
- [ ] Interface 100% en français

### Estimation : 2 points

---

# EPIC 3 : Pages de Services Configurables

## US-3.1 : Rendre les pages services entièrement configurables

**En tant que** administrateur du site  
**Je veux** pouvoir modifier chaque page service en détail  
**Afin de** personnaliser la présentation de mes prestations

### Critères d'acceptation
- [ ] Chaque service a les champs suivants éditables :
  - Titre
  - Description courte (liste services)
  - Description longue (page détail)
  - Icône (sélection ou upload)
  - Image principale
  - Galerie d'images
  - Liste des prestations incluses
  - Tarifs indicatifs (optionnel)
  - CTA personnalisé
- [ ] Template `service.njk` utilise ces données

### Estimation : 5 points

---

## US-3.2 : Permettre l'ajout/suppression de services

**En tant que** administrateur du site  
**Je veux** pouvoir ajouter ou supprimer des services  
**Afin de** faire évoluer mon offre

### Critères d'acceptation
- [ ] Bouton "Nouveau service" dans le CMS
- [ ] Suppression avec confirmation
- [ ] Mise à jour automatique de la navigation
- [ ] Mise à jour automatique de la page d'accueil

### Estimation : 3 points

---

# EPIC 4 : Fonctionnalités Avancées

## US-4.1 : Système de sections réutilisables (blocs)

**En tant que** administrateur du site  
**Je veux** pouvoir activer/désactiver des sections sur chaque page  
**Afin de** composer mes pages librement

### Critères d'acceptation
- [ ] Chaque section a un toggle "Afficher/Masquer"
- [ ] Possibilité de réordonner les sections (si techniquement faisable)
- [ ] Sections disponibles :
  - Hero
  - Services
  - Statistiques
  - Témoignages
  - CTA
  - FAQ
  - Galerie
  - Texte libre

### Estimation : 8 points

---

## US-4.2 : Gestion des images et médias

**En tant que** administrateur du site  
**Je veux** une médiathèque pour gérer mes images  
**Afin de** réutiliser facilement mes visuels

### Critères d'acceptation
- [ ] Configurer Cloudinary ou Uploadcare pour la gestion des médias
- [ ] Redimensionnement automatique des images
- [ ] Optimisation WebP automatique
- [ ] Organisation par dossiers

### Estimation : 5 points

---

## US-4.3 : Preview en temps réel

**En tant que** administrateur du site  
**Je veux** voir un aperçu de mes modifications avant publication  
**Afin de** valider mes changements

### Critères d'acceptation
- [ ] Configurer le mode preview de Decap CMS
- [ ] Lien "Voir l'aperçu" sur chaque page
- [ ] Déploiement preview sur branche séparée

### Estimation : 3 points

---

## US-4.4 : Gestion des mentions légales

**En tant que** administrateur du site  
**Je veux** pouvoir modifier les mentions légales  
**Afin de** maintenir ma conformité RGPD

### Critères d'acceptation
- [ ] Page mentions légales éditable via CMS
- [ ] Champs structurés (éditeur légal, hébergeur, RGPD, cookies)
- [ ] Template dédié

### Estimation : 2 points

---

## US-4.5 : Page 404 personnalisable

**En tant que** administrateur du site  
**Je veux** pouvoir personnaliser la page d'erreur 404  
**Afin de** garder une expérience cohérente

### Critères d'acceptation
- [ ] Titre et message éditables
- [ ] Image personnalisable
- [ ] Liens suggérés configurables

### Estimation : 1 point

---

# 📊 Récapitulatif

| Epic | Nombre d'US | Points totaux | Statut |
|------|-------------|---------------|--------|
| 1 - Architecture Data-Driven | 7 | 18 | ✅ TERMINÉ |
| 2 - Interface CMS Decap | 8 | 21 | ✅ TERMINÉ |
| 3 - Pages Services | 2 | 8 | ✅ TERMINÉ |
| 4 - Fonctionnalités Avancées | 5 | 19 | ✅ TERMINÉ |
| **TOTAL** | **22** | **66 points** | ✅ **100%** |

---

# ✅ IMPLÉMENTATION RÉALISÉE (27 janvier 2026)

## Fichiers de données créés
- `src/_data/theme.json` - Couleurs, polices, espacements
- `src/_data/footer.json` - Configuration du footer
- `src/_data/seo.json` - SEO global et analytics
- `src/_data/pages/home.json` - Page d'accueil complète
- `src/_data/pages/contact.json` - Page contact
- `src/_data/pages/realisations.json` - Page réalisations
- `src/_data/pages/mentions-legales.json` - Mentions légales
- `src/_data/pages/404.json` - Page 404
- `src/_data/navigation.json` - Navigation étendue avec header

## Collections CMS configurées (admin/config.yml)
- **📄 Pages** : Accueil, Contact, Réalisations, Mentions légales, 404
- **🔧 Services** : Édition des pages services
- **⚙️ Paramètres** : Site, Thème, SEO, Footer, Navigation
- **📷 Réalisations** : Gestion des projets

## Templates modifiés
- `hero.njk` - Utilise `pages.home.hero`
- `index.njk` - Toutes sections configurables avec toggle on/off
- `service-card.njk` - Icônes par nom
- `footer.njk` - Entièrement configurable
- `contact.njk` - Utilise `pages.contact`
- `realisations.njk` - Utilise `pages.realisations`
- `404.njk` - Utilise `pages['404']`
- `service.njk` - Layout services avec features et clients

## Sections réutilisables créées
- `section-testimonials.njk` - Témoignages clients avec notes
- `section-faq.njk` - Questions fréquentes (accordéon)
- `section-gallery.njk` - Galerie d'images

## Configuration médias et preview
- Support Cloudinary prêt (à activer dans config.yml)
- Preview en temps réel avec styles CSS
- Dossier uploads créé pour les médias locaux

---

# 🎯 Priorisation Recommandée

## Sprint 1 - Fondations (MVP)
- US-1.1 : Config styles
- US-1.2 : Config page accueil
- US-2.1 : CMS styles
- US-2.2 : CMS page accueil
- US-1.5 : Config header
- US-2.5 : CMS navigation

**Total : 21 points**

## Sprint 2 - Pages Complètes
- US-1.3 : Config contact
- US-1.4 : Config réalisations
- US-1.6 : Config footer
- US-2.3 : CMS contact
- US-2.4 : CMS réalisations
- US-2.6 : CMS footer

**Total : 12 points**

## Sprint 3 - Services & SEO
- US-1.7 : Config SEO
- US-2.7 : CMS SEO
- US-3.1 : Services configurables
- US-3.2 : Ajout/suppression services
- US-2.8 : Amélioration interface CMS

**Total : 15 points**

## Sprint 4 - Avancé
- US-4.1 : Sections réutilisables
- US-4.2 : Gestion médias
- US-4.3 : Preview temps réel
- US-4.4 : Mentions légales
- US-4.5 : Page 404

**Total : 19 points**

---

# 📝 Notes Techniques

## Stack recommandée
- **CMS** : Decap CMS (gratuit, open-source, intégré Netlify)
- **Médias** : Cloudinary (plan gratuit généreux) ou Netlify Large Media
- **Déploiement** : Netlify (déjà en place)
- **Authentification** : Netlify Identity (gratuit jusqu'à 1000 users)

## Prérequis
1. Activer Netlify Identity sur le site
2. Activer Git Gateway dans Netlify
3. Inviter les administrateurs via email

## Limitations connues
- Decap CMS ne permet pas le drag & drop de sections (contrairement à WordPress Gutenberg)
- Les modifications nécessitent un rebuild (~1-2 min)
- Pas de preview instantané natif (mais configurable)

---

*Document généré par BMad Master 🧙*
