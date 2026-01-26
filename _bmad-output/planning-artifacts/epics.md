---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
---

# Jadelec - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Jadelec, decomposing the requirements from the PRD and Architecture into implementable stories.

## Requirements Inventory

### Functional Requirements

- **FR1:** Visiteur peut accéder à toutes les pages du site via un menu de navigation principal
- **FR2:** Visiteur peut voir le logo Jadelec cliquable qui ramène à l'accueil
- **FR3:** Visiteur peut accéder aux coordonnées de contact depuis n'importe quelle page (header/footer)
- **FR4:** Visiteur peut naviguer sur le site depuis un appareil mobile avec une expérience adaptée
- **FR5:** Visiteur peut comprendre immédiatement l'activité de Jadelec (électricité générale)
- **FR6:** Visiteur peut voir les services principaux mis en avant (GTB, IRVE, Domotique)
- **FR7:** Visiteur peut accéder rapidement au formulaire de contact/devis via un CTA visible
- **FR8:** Visiteur peut voir une section de réassurance (expertise, zone d'intervention)
- **FR9:** Visiteur peut consulter une page dédiée au service Courant Fort
- **FR10:** Visiteur peut consulter une page dédiée au service Courant Faible
- **FR11:** Visiteur peut consulter une page dédiée aux Bornes de Recharge (IRVE)
- **FR12:** Visiteur peut consulter une page dédiée à la GTB/Domotique
- **FR13:** Visiteur peut consulter une page dédiée à l'Entretien & Dépannage
- **FR14:** Visiteur peut voir le détail des prestations pour chaque service
- **FR15:** Visiteur peut accéder au formulaire de devis depuis chaque page service
- **FR16:** Visiteur peut consulter la liste des réalisations de Jadelec
- **FR17:** Visiteur peut voir les photos de chaque réalisation
- **FR18:** Visiteur peut voir la description et catégorie de chaque réalisation
- **FR19:** Visiteur peut identifier des projets similaires au sien (par type : tertiaire, copropriété, etc.)
- **FR20:** Visiteur peut voir les coordonnées complètes de Jadelec (téléphone, email, adresse)
- **FR21:** Visiteur peut voir les horaires d'ouverture
- **FR22:** Visiteur peut soumettre une demande de devis via un formulaire
- **FR23:** Visiteur peut renseigner son nom, email, sujet et message dans le formulaire
- **FR24:** Visiteur reçoit une confirmation après soumission du formulaire
- **FR25:** Jadelec reçoit les demandes de devis par email
- **FR26:** Moteur de recherche peut indexer toutes les pages du site
- **FR27:** Chaque page possède des meta tags optimisés (title, description)
- **FR28:** Le site possède un sitemap.xml accessible
- **FR29:** Le site possède des données structurées schema.org (LocalBusiness, Service)
- **FR30:** Les URLs sont optimisées pour le SEO français
- **FR31:** Admin peut se connecter à l'interface d'administration
- **FR32:** Admin peut ajouter une nouvelle réalisation (titre, description, catégorie, photos)
- **FR33:** Admin peut modifier une réalisation existante
- **FR34:** Admin peut supprimer une réalisation
- **FR35:** Admin peut modifier le contenu des pages services
- **FR36:** Admin peut uploader et gérer les images/médias
- **FR37:** Admin peut prévisualiser les modifications avant publication
- **FR38:** Les modifications publiées sont visibles sur le site après rebuild automatique

### Non-Functional Requirements

- **NFR1:** Temps de chargement initial (FCP) < 1.5 secondes sur connexion 4G
- **NFR2:** Largest Contentful Paint (LCP) < 2.5 secondes
- **NFR3:** Time to Interactive (TTI) < 3 secondes
- **NFR4:** Score Lighthouse Performance > 90
- **NFR5:** Poids total de page < 1 MB (images comprises)
- **NFR6:** Images optimisées (WebP, lazy loading)
- **NFR7:** Score Lighthouse SEO > 95
- **NFR8:** Toutes les pages indexables par les moteurs de recherche
- **NFR9:** Temps de réponse serveur (TTFB) < 200ms (CDN Netlify)
- **NFR10:** Core Web Vitals dans la zone "Good"
- **NFR11:** Conformité WCAG 2.1 niveau AA
- **NFR12:** Score Lighthouse Accessibility > 90
- **NFR13:** Contraste couleurs ratio minimum 4.5:1
- **NFR14:** Navigation complète au clavier
- **NFR15:** Textes alternatifs sur toutes les images
- **NFR16:** Site servi en HTTPS uniquement
- **NFR17:** Protection spam sur formulaire (honeypot ou reCAPTCHA)
- **NFR18:** Headers de sécurité configurés (CSP, X-Frame-Options)
- **NFR19:** Pas de données utilisateur stockées côté serveur
- **NFR20:** Disponibilité 99.9% (garantie Netlify)
- **NFR21:** Déploiement sans interruption de service
- **NFR22:** Rollback possible en cas de problème
- **NFR23:** Code source versionné sur Git
- **NFR24:** Documentation technique pour maintenance
- **NFR25:** CMS utilisable sans compétences techniques

### Additional Requirements (from Architecture)

- **ARCH1:** Setup projet Eleventy 2.x + TailwindCSS 3.x + PostCSS
- **ARCH2:** Configuration Netlify (netlify.toml, headers sécurité)
- **ARCH3:** Structure dossiers src/ avec _data, _includes, assets
- **ARCH4:** Configuration Netlify CMS (admin/config.yml)
- **ARCH5:** Configuration Netlify Identity pour auth CMS
- **ARCH6:** Collections Eleventy pour services et réalisations
- **ARCH7:** Layouts Nunjucks (base.njk, page.njk, service.njk)
- **ARCH8:** Composants réutilisables (header, footer, cards, etc.)
- **ARCH9:** Intégration Netlify Forms
- **ARCH10:** SEO components (seo-head.njk, sitemap.njk, robots.txt)

### FR Coverage Map

| Epic | FRs Covered |
|------|-------------|
| Epic 1: Project Setup | ARCH1-5 |
| Epic 2: Layout & Navigation | FR1-4, NFR11-15 |
| Epic 3: Page Accueil | FR5-8 |
| Epic 4: Pages Services | FR9-15 |
| Epic 5: Page Réalisations | FR16-19 |
| Epic 6: Page Contact | FR20-25 |
| Epic 7: SEO & Performance | FR26-30, NFR1-10 |
| Epic 8: CMS Admin | FR31-38, ARCH4-6 |

## Epic List

1. **Epic 1: Project Setup** - Infrastructure et configuration initiale
2. **Epic 2: Layout & Navigation** - Structure de base et navigation
3. **Epic 3: Page Accueil** - Page d'accueil avec hero et services
4. **Epic 4: Pages Services** - 5 pages services dédiées
5. **Epic 5: Page Réalisations** - Portfolio des réalisations
6. **Epic 6: Page Contact** - Formulaire et coordonnées
7. **Epic 7: SEO & Performance** - Optimisation SEO et performance
8. **Epic 8: CMS Admin** - Interface d'administration Netlify CMS

---

## Epic 1: Project Setup

**Goal:** Mettre en place l'infrastructure technique du projet pour permettre le développement des pages et fonctionnalités.

**FRs covered:** ARCH1-5, NFR16, NFR23

### Story 1.1: Initialisation du projet Eleventy

As a **développeur**,
I want **initialiser un projet Eleventy avec la structure de dossiers définie**,
So that **je puisse commencer à développer les pages du site**.

**Acceptance Criteria:**

**Given** un nouveau dossier de projet vide
**When** j'exécute les commandes d'initialisation npm
**Then** le projet contient package.json avec les dépendances Eleventy 2.x
**And** la structure src/_data, src/_includes, src/assets existe
**And** le fichier .eleventy.js est configuré avec les paths corrects
**And** `npm run dev` lance un serveur local sur localhost:8080

### Story 1.2: Configuration TailwindCSS et PostCSS

As a **développeur**,
I want **configurer TailwindCSS avec PostCSS**,
So that **je puisse utiliser les classes utilitaires pour le styling**.

**Acceptance Criteria:**

**Given** le projet Eleventy initialisé
**When** j'ajoute les dépendances Tailwind et PostCSS
**Then** tailwind.config.js est créé avec les paths de purge corrects
**And** postcss.config.js est configuré
**And** src/assets/css/styles.css contient les directives @tailwind
**And** le CSS est compilé lors du build

### Story 1.3: Configuration Netlify

As a **développeur**,
I want **configurer le déploiement Netlify**,
So that **le site soit déployé automatiquement avec les headers de sécurité**.

**Acceptance Criteria:**

**Given** le projet avec Eleventy et Tailwind configurés
**When** je crée netlify.toml
**Then** la commande de build est définie (npm run build)
**And** le dossier de publication est _site
**And** les headers de sécurité sont configurés (X-Frame-Options, CSP, etc.)
**And** HTTPS est forcé

### Story 1.4: Configuration données globales

As a **développeur**,
I want **créer les fichiers de données globales**,
So that **les informations de l'entreprise soient centralisées et réutilisables**.

**Acceptance Criteria:**

**Given** la structure _data/ existe
**When** je crée site.json et navigation.json
**Then** site.json contient nom, téléphone, email, adresse, horaires de Jadelec
**And** navigation.json contient la structure du menu
**And** les données sont accessibles via {{ site.name }} dans les templates

---

## Epic 2: Layout & Navigation

**Goal:** Créer la structure de base du site avec header, footer et navigation responsive.

**FRs covered:** FR1-4, NFR11-15

### Story 2.1: Layout de base HTML

As a **visiteur**,
I want **voir une page HTML bien structurée**,
So that **le site soit accessible et performant**.

**Acceptance Criteria:**

**Given** les données globales configurées
**When** je crée src/_includes/layouts/base.njk
**Then** le layout contient doctype HTML5, lang="fr"
**And** les meta viewport et charset sont présents
**And** le CSS Tailwind est inclus
**And** la structure semantic (header, main, footer) est présente
**And** le score Lighthouse Accessibility > 90

### Story 2.2: Composant Header avec navigation

As a **visiteur**,
I want **voir un header avec le logo et le menu de navigation**,
So that **je puisse naviguer facilement sur le site**.

**Acceptance Criteria:**

**Given** le layout base.njk créé
**When** je crée src/_includes/components/header.njk
**Then** le logo Jadelec est affiché et cliquable (retour accueil)
**And** le menu de navigation affiche les liens vers toutes les pages
**And** un CTA "Demander un devis" est visible
**And** le numéro de téléphone est affiché
**And** la navigation est accessible au clavier (tabindex)

### Story 2.3: Composant Footer

As a **visiteur**,
I want **voir un footer avec les coordonnées complètes**,
So that **je puisse contacter Jadelec facilement**.

**Acceptance Criteria:**

**Given** le header créé
**When** je crée src/_includes/components/footer.njk
**Then** les coordonnées complètes sont affichées (adresse, tel, email)
**And** les horaires d'ouverture sont visibles
**And** les liens de navigation secondaires sont présents
**And** le copyright est affiché

### Story 2.4: Navigation mobile responsive

As a **visiteur mobile**,
I want **avoir un menu hamburger sur mobile**,
So that **je puisse naviguer sur le site depuis mon téléphone**.

**Acceptance Criteria:**

**Given** le header avec navigation desktop
**When** je visualise le site sur mobile (< 640px)
**Then** le menu se transforme en icône hamburger
**And** au clic, le menu s'ouvre en overlay
**And** les liens sont cliquables avec des touch targets de 44x44px minimum
**And** le menu se ferme au clic sur un lien ou à l'extérieur

---

## Epic 3: Page Accueil

**Goal:** Créer la page d'accueil qui présente Jadelec et ses services principaux.

**FRs covered:** FR5-8

### Story 3.1: Section Hero

As a **visiteur**,
I want **voir immédiatement ce que fait Jadelec**,
So that **je comprenne si leurs services correspondent à mes besoins**.

**Acceptance Criteria:**

**Given** le layout avec header et footer
**When** je crée src/index.njk avec le composant hero.njk
**Then** le titre principal "Jadelec - Électricité générale" est visible
**And** un sous-titre décrit les services (GTB, IRVE, Domotique)
**And** un CTA "Demander un devis" est proéminent
**And** une image ou illustration professionnelle est affichée

### Story 3.2: Section Services principaux

As a **visiteur**,
I want **voir les services principaux de Jadelec**,
So that **je puisse accéder rapidement au service qui m'intéresse**.

**Acceptance Criteria:**

**Given** la section hero créée
**When** j'ajoute la section services avec service-card.njk
**Then** les 5 services sont affichés en grille (Courant Fort, Courant Faible, IRVE, GTB, Entretien)
**And** chaque carte a un titre, une icône et une description courte
**And** chaque carte est cliquable vers la page service dédiée
**And** la grille est responsive (1 col mobile, 2 tablet, 3 desktop)

### Story 3.3: Section Réassurance

As a **visiteur**,
I want **voir des éléments de réassurance**,
So that **je sois convaincu du professionnalisme de Jadelec**.

**Acceptance Criteria:**

**Given** les sections hero et services
**When** j'ajoute une section réassurance
**Then** la zone d'intervention est mentionnée (Île-de-France, 93)
**And** l'expérience/expertise est mise en avant
**And** les types de clients sont listés (tertiaire, industriel, copropriété)

---

## Epic 4: Pages Services

**Goal:** Créer les 5 pages services dédiées optimisées pour le SEO.

**FRs covered:** FR9-15

### Story 4.1: Layout page service

As a **développeur**,
I want **créer un layout réutilisable pour les pages services**,
So that **toutes les pages services aient une structure cohérente**.

**Acceptance Criteria:**

**Given** le layout base existant
**When** je crée src/_includes/layouts/service.njk
**Then** le layout hérite de base.njk
**And** il affiche le titre du service en H1
**And** il inclut une section pour le contenu détaillé
**And** il inclut un CTA vers le formulaire de devis
**And** il affiche les services connexes en bas de page

### Story 4.2: Collection services Eleventy

As a **développeur**,
I want **configurer la collection services dans Eleventy**,
So that **les pages services soient générées automatiquement**.

**Acceptance Criteria:**

**Given** le layout service.njk créé
**When** je configure la collection dans .eleventy.js
**Then** src/services/*.md sont traités comme une collection
**And** services.json définit le layout et permalink par défaut
**And** les URLs sont /services/{slug}/

### Story 4.3: Page Courant Fort

As a **visiteur**,
I want **consulter la page Courant Fort**,
So that **je comprenne les prestations d'installation électrique**.

**Acceptance Criteria:**

**Given** la collection services configurée
**When** je crée src/services/courant-fort.md
**Then** le frontmatter contient title, description SEO, permalink
**And** le contenu détaille les prestations (installations, éclairage, etc.)
**And** la page est accessible à /services/courant-fort/
**And** le meta title est optimisé pour "installation électrique entreprise"

### Story 4.4: Page Courant Faible

As a **visiteur**,
I want **consulter la page Courant Faible**,
So that **je comprenne les prestations réseaux et sécurité**.

**Acceptance Criteria:**

**Given** la collection services configurée
**When** je crée src/services/courant-faible.md
**Then** le contenu détaille les prestations (réseaux, vidéosurveillance, contrôle d'accès)
**And** la page est accessible à /services/courant-faible/

### Story 4.5: Page Bornes de Recharge IRVE

As a **visiteur**,
I want **consulter la page Bornes de Recharge**,
So that **je comprenne les solutions IRVE pour mon entreprise ou copropriété**.

**Acceptance Criteria:**

**Given** la collection services configurée
**When** je crée src/services/bornes-recharge-irve.md
**Then** le contenu détaille les solutions (entreprise, copropriété, parking)
**And** la page est accessible à /services/bornes-recharge-irve/
**And** le meta title est optimisé pour "borne recharge entreprise 93"

### Story 4.6: Page GTB Domotique

As a **visiteur**,
I want **consulter la page GTB/Domotique**,
So that **je comprenne les solutions de gestion technique du bâtiment**.

**Acceptance Criteria:**

**Given** la collection services configurée
**When** je crée src/services/gtb-domotique.md
**Then** le contenu détaille les prestations GTB et domotique
**And** la page est accessible à /services/gtb-domotique/
**And** le meta title est optimisé pour "GTB Île-de-France"

### Story 4.7: Page Entretien Dépannage

As a **visiteur**,
I want **consulter la page Entretien & Dépannage**,
So that **je sache que Jadelec assure la maintenance**.

**Acceptance Criteria:**

**Given** la collection services configurée
**When** je crée src/services/entretien-depannage.md
**Then** le contenu détaille les prestations de maintenance et dépannage
**And** la page est accessible à /services/entretien-depannage/

---

## Epic 5: Page Réalisations

**Goal:** Créer le portfolio des réalisations pour démontrer l'expertise de Jadelec.

**FRs covered:** FR16-19

### Story 5.1: Collection réalisations Eleventy

As a **développeur**,
I want **configurer la collection réalisations**,
So that **les réalisations soient gérées dynamiquement**.

**Acceptance Criteria:**

**Given** Eleventy configuré
**When** je configure la collection realisations
**Then** src/realisations/*.md sont traités comme une collection
**And** realisations.json définit les defaults (layout, tags)
**And** chaque réalisation a title, description, category, images

### Story 5.2: Page liste des réalisations

As a **visiteur**,
I want **voir la liste de toutes les réalisations**,
So that **je puisse évaluer l'expérience de Jadelec**.

**Acceptance Criteria:**

**Given** la collection réalisations configurée
**When** je crée src/realisations.njk
**Then** toutes les réalisations sont affichées en grille
**And** chaque carte montre l'image principale, le titre et la catégorie
**And** les catégories sont visibles (tertiaire, copropriété, industriel)
**And** la grille est responsive

### Story 5.3: Composant carte réalisation

As a **visiteur**,
I want **voir des cartes de réalisation attrayantes**,
So that **je puisse identifier les projets similaires au mien**.

**Acceptance Criteria:**

**Given** la page liste créée
**When** je crée realisation-card.njk
**Then** la carte affiche l'image en lazy loading
**And** le titre et la catégorie sont visibles
**And** la carte est cliquable (future: page détail)

### Story 5.4: Exemples de réalisations

As a **visiteur**,
I want **voir des exemples concrets de réalisations**,
So that **je puisse évaluer la qualité du travail**.

**Acceptance Criteria:**

**Given** la collection et les composants créés
**When** j'ajoute 3-5 réalisations exemples en markdown
**Then** chaque réalisation a un titre descriptif
**And** une description du projet
**And** une catégorie (tertiaire, copropriété, industriel)
**And** au moins une image

---

## Epic 6: Page Contact

**Goal:** Permettre aux visiteurs de contacter Jadelec et demander des devis.

**FRs covered:** FR20-25

### Story 6.1: Page contact avec coordonnées

As a **visiteur**,
I want **voir les coordonnées complètes de Jadelec**,
So that **je puisse les contacter par le moyen de mon choix**.

**Acceptance Criteria:**

**Given** le layout page.njk
**When** je crée src/contact.njk
**Then** l'adresse complète est affichée
**And** le téléphone fixe et mobile sont cliquables (tel:)
**And** l'email est cliquable (mailto:)
**And** les horaires d'ouverture sont visibles

### Story 6.2: Formulaire de contact Netlify Forms

As a **visiteur**,
I want **soumettre une demande de devis via un formulaire**,
So that **je puisse être recontacté par Jadelec**.

**Acceptance Criteria:**

**Given** la page contact créée
**When** j'ajoute le composant contact-form.njk
**Then** le formulaire contient les champs nom, email, téléphone, sujet, message
**And** l'attribut netlify est présent sur le form
**And** un champ honeypot est ajouté pour anti-spam
**And** les champs requis sont marqués
**And** le formulaire est accessible (labels, aria)

### Story 6.3: Page de confirmation

As a **visiteur**,
I want **voir une confirmation après soumission**,
So that **je sache que ma demande a été envoyée**.

**Acceptance Criteria:**

**Given** le formulaire configuré
**When** je soumets le formulaire avec succès
**Then** je suis redirigé vers une page de confirmation
**And** un message de remerciement est affiché
**And** les prochaines étapes sont indiquées

---

## Epic 7: SEO & Performance

**Goal:** Optimiser le site pour le référencement et la performance.

**FRs covered:** FR26-30, NFR1-10

### Story 7.1: Composant SEO head

As a **moteur de recherche**,
I want **des meta tags optimisés sur chaque page**,
So that **le site soit bien référencé**.

**Acceptance Criteria:**

**Given** le layout base.njk
**When** je crée seo-head.njk
**Then** chaque page a un title unique et optimisé
**And** chaque page a une meta description unique
**And** les balises Open Graph sont présentes (og:title, og:description, og:image)
**And** la balise canonical est définie

### Story 7.2: Sitemap XML

As a **moteur de recherche**,
I want **un sitemap.xml à jour**,
So that **toutes les pages soient indexées**.

**Acceptance Criteria:**

**Given** toutes les pages créées
**When** je crée src/sitemap.njk
**Then** le sitemap liste toutes les pages du site
**And** les dates de modification sont incluses
**And** le fichier est accessible à /sitemap.xml

### Story 7.3: Robots.txt

As a **moteur de recherche**,
I want **un robots.txt configuré**,
So that **je sache quelles pages indexer**.

**Acceptance Criteria:**

**Given** le sitemap créé
**When** je crée src/robots.njk
**Then** le fichier autorise l'indexation de toutes les pages
**And** le sitemap est référencé
**And** le fichier est accessible à /robots.txt

### Story 7.4: Schema.org LocalBusiness

As a **moteur de recherche**,
I want **des données structurées schema.org**,
So that **les informations de l'entreprise soient enrichies dans les résultats**.

**Acceptance Criteria:**

**Given** le composant seo-head.njk
**When** j'ajoute le JSON-LD schema.org
**Then** le type LocalBusiness est défini
**And** le nom, adresse, téléphone, horaires sont inclus
**And** les services sont listés
**And** le schema est valide (test avec Google Rich Results)

### Story 7.5: Optimisation images

As a **visiteur**,
I want **des images optimisées**,
So that **le site charge rapidement**.

**Acceptance Criteria:**

**Given** des images dans le projet
**When** je configure l'optimisation
**Then** les images sont en format WebP quand possible
**And** le lazy loading est activé (loading="lazy")
**And** les dimensions width/height sont spécifiées
**And** le poids total de page < 1MB

---

## Epic 8: CMS Admin

**Goal:** Permettre à l'admin de gérer le contenu sans compétences techniques.

**FRs covered:** FR31-38, ARCH4-6

### Story 8.1: Configuration Netlify CMS

As a **admin**,
I want **accéder à une interface d'administration**,
So that **je puisse gérer le contenu du site**.

**Acceptance Criteria:**

**Given** le projet déployé sur Netlify
**When** je crée admin/index.html et admin/config.yml
**Then** l'interface CMS est accessible à /admin
**And** la configuration pointe vers le repo Git
**And** le backend est configuré pour git-gateway

### Story 8.2: Configuration Netlify Identity

As a **admin**,
I want **me connecter de manière sécurisée**,
So that **seuls les admins autorisés puissent modifier le contenu**.

**Acceptance Criteria:**

**Given** Netlify CMS configuré
**When** j'active Netlify Identity
**Then** l'inscription est désactivée (invite only)
**And** la connexion fonctionne via email/password
**And** le script Identity est inclus dans base.njk

### Story 8.3: Collection CMS réalisations

As a **admin**,
I want **ajouter/modifier/supprimer des réalisations**,
So that **le portfolio soit toujours à jour**.

**Acceptance Criteria:**

**Given** Netlify CMS et Identity configurés
**When** je configure la collection realisations dans config.yml
**Then** je peux créer une nouvelle réalisation avec titre, description, catégorie
**And** je peux uploader des images
**And** je peux prévisualiser avant publication
**And** la publication déclenche un rebuild automatique

### Story 8.4: Collection CMS services (édition)

As a **admin**,
I want **modifier le contenu des pages services**,
So that **je puisse mettre à jour les descriptions**.

**Acceptance Criteria:**

**Given** la collection réalisations fonctionnelle
**When** je configure la collection services dans config.yml
**Then** je peux éditer le contenu de chaque page service
**And** les modifications sont sauvegardées dans Git
**And** le site est reconstruit après publication

