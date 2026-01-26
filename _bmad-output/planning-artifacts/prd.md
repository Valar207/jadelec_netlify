---
stepsCompleted: [step-01-init, step-02-discovery, step-03-success, step-04-journeys, step-05-domain-skipped, step-06-innovation-skipped, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-jadelec_netlify-2026-01-25.md"
workflowType: 'prd'
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 0
  projectDocs: 0
classification:
  projectType: web_app
  domain: general
  complexity: low
  projectContext: greenfield
  specificType: static_site_ssg
  stack: eleventy_netlify_cms
---

# Product Requirements Document - Jadelec

**Author:** Val
**Date:** 2026-01-25

---

## Executive Summary

**Projet:** Refonte du site vitrine Jadelec
**Objectif:** Conquérir les marchés GTB, IRVE et Domotique via un SEO optimisé
**Stack:** Eleventy + Netlify CMS + TailwindCSS
**Budget:** 0€ (Netlify free tier)
**Délai:** ASAP

**MVP (8 pages):**
- Accueil + 5 pages services + Réalisations + Contact
- CMS admin pour autonomie
- SEO optimisé pour mots-clés cibles

**Métriques clés:**
- 38 Functional Requirements
- 25 Non-Functional Requirements
- 4 User Journeys documentés

---

## Success Criteria

### User Success
- **Thomas (Décideur Technique)** : Trouve Jadelec en < 3 clics depuis Google, consulte le portfolio, soumet une demande de devis en < 5 minutes
- **Sophie (Conducteur Travaux)** : Identifie rapidement les réalisations similaires à son projet, télécharge/enregistre les infos de contact
- **Marc (Syndic)** : Comprend immédiatement que Jadelec fait les bornes de recharge pour copropriétés

### Business Success
- **3 mois** : Site live, indexé Google, premiers contacts via formulaire
- **6 mois** : Positionnement page 2+ sur mots-clés cibles
- **12 mois** : Top 10 Google sur "GTB Île-de-France", "borne recharge entreprise 93"

### Technical Success
- Performance : Lighthouse score > 90 (Performance, SEO, Accessibility)
- Mobile : 100% responsive, temps de chargement < 3s sur 3G
- SEO : Sitemap, meta tags, schema.org LocalBusiness
- Admin : Netlify CMS fonctionnel pour éditer services/réalisations

### Measurable Outcomes

| Métrique | Baseline | Objectif 3 mois | Objectif 12 mois |
|----------|----------|-----------------|------------------|
| Visites/mois | 0 | 100+ | 500+ |
| Demandes devis/mois | 0 | 2+ | 10+ |
| Taux consultation portfolio | N/A | > 30% | > 40% |
| Position Google "GTB IDF" | Non indexé | Indexé | Top 10 |

---

## Product Scope

### MVP - Minimum Viable Product
- Page Accueil avec Hero + Services + CTA
- Pages Services dédiées (Courant Fort, Courant Faible, Entretien)
- Page Réalisations (portfolio photos)
- Page Contact avec formulaire Netlify Forms
- SEO de base (meta, sitemap, schema.org)
- Responsive mobile-first
- Netlify CMS pour admin

### Growth Features (Post-MVP)
- Blog/Actualités pour SEO content
- Formulaire de devis multi-étapes
- Témoignages clients
- Page "Qui sommes-nous" enrichie

### Vision (Future)
- Espace client avec suivi de projet
- Intégration CRM
- Chat en direct
- Animations avancées

---

## User Journeys

### Journey 1: Thomas - Le Décideur Technique en Quête d'un Prestataire GTB

**Persona:** Thomas, 45 ans, Directeur Technique chez un groupe tertiaire en Île-de-France. Il gère un parc immobilier de 15 bâtiments et doit moderniser la GTB de 3 sites.

**Opening Scene:** Thomas est dans son bureau, frustré. Son prestataire habituel ne fait pas de GTB. Il ouvre Google et tape "GTB entreprise Île-de-France".

**Rising Action:**
1. Il voit Jadelec en première page (objectif SEO)
2. Clique sur la page "GTB / Domotique"
3. Lit les détails des prestations, voit que c'est exactement ce qu'il cherche
4. Consulte les réalisations → trouve un projet similaire au sien (immeuble tertiaire)
5. Note mentalement : "Ils ont l'expérience"

**Climax:** Thomas clique sur "Demander un devis", remplit le formulaire en 2 minutes avec les détails de son projet.

**Resolution:** Il reçoit un appel de Jadelec sous 24h. Après un RDV, il signe un contrat pour les 3 sites. Thomas a trouvé son nouveau prestataire de confiance.

**Capabilities Revealed:** SEO pages services, portfolio filtrable, formulaire devis rapide, informations de contact visibles

---

### Journey 2: Sophie - La Conductrice de Travaux qui Compare les Prestataires

**Persona:** Sophie, 32 ans, Conductrice de travaux chez un promoteur immobilier. Elle prépare un nouveau programme de 80 logements avec bornes de recharge.

**Opening Scene:** Sophie a une liste de 5 électriciens à contacter. Elle visite leurs sites pour les pré-qualifier avant d'envoyer les consultations.

**Rising Action:**
1. Elle arrive sur jadelec.net depuis sa recherche "installation IRVE promoteur"
2. Vérifie rapidement : font-ils des bornes de recharge ? ✓
3. Consulte les réalisations → cherche des projets promoteurs/résidentiels
4. Trouve 2 projets similaires avec photos
5. Note les coordonnées pour la consultation

**Climax:** Sophie ajoute Jadelec à sa short-list des 3 prestataires à consulter en priorité.

**Resolution:** Jadelec remporte l'appel d'offres grâce à son portfolio convaincant et son expertise démontrée.

**Capabilities Revealed:** Navigation rapide vers services, portfolio avec filtres par type de projet, téléchargement/impression des infos

---

### Journey 3: Marc - Le Syndic qui Cherche une Solution Bornes de Recharge

**Persona:** Marc, 52 ans, Gestionnaire technique dans un syndic de copropriété. Les copropriétaires demandent des bornes de recharge au parking.

**Opening Scene:** Marc reçoit la 10ème demande de copropriétaire pour des bornes. Il doit trouver un prestataire pour le prochain conseil syndical.

**Rising Action:**
1. Recherche Google "borne recharge copropriété 93"
2. Arrive sur la page IRVE de Jadelec
3. Voit que Jadelec intervient en habitat collectif
4. Consulte les réalisations → trouve un projet copropriété
5. Vérifie la proximité géographique (La Courneuve = proche)

**Climax:** Marc appelle directement le numéro affiché pour avoir un devis rapide à présenter au conseil.

**Resolution:** Jadelec intervient, les copropriétaires sont satisfaits, Marc garde le contact pour les futurs projets.

**Capabilities Revealed:** SEO local, numéro de téléphone visible, mention habitat collectif, proximité géographique claire

---

### Journey 4: Admin Jadelec - Mise à Jour du Portfolio

**Persona:** Employé Jadelec (ou Val) qui doit ajouter une nouvelle réalisation au site.

**Opening Scene:** Un chantier vient de se terminer, il faut l'ajouter au portfolio avec les photos.

**Rising Action:**
1. Connexion à Netlify CMS (/admin)
2. Navigation vers "Réalisations"
3. Clic sur "Nouvelle réalisation"
4. Remplissage : titre, description, catégorie, photos
5. Prévisualisation

**Climax:** Clic sur "Publier" → le site se reconstruit automatiquement.

**Resolution:** La nouvelle réalisation est visible sur le site en quelques minutes, sans intervention technique.

**Capabilities Revealed:** Netlify CMS intuitif, gestion des médias, catégorisation des réalisations, publication simple

---

### Journey Requirements Summary

| Journey | Capabilities Requises |
|---------|----------------------|
| Thomas (GTB) | Pages services SEO, portfolio, formulaire devis |
| Sophie (IRVE) | Navigation rapide, portfolio filtrable, infos téléchargeables |
| Marc (Copro) | SEO local, téléphone visible, mention habitat collectif |
| Admin | Netlify CMS, gestion médias, publication simple |

**Fonctionnalités Transversales:**
- SEO optimisé par service
- Portfolio avec catégories
- Formulaire de contact/devis
- Coordonnées toujours visibles
- Mobile responsive
- CMS admin intuitif

---

## Web App Specific Requirements

### Project-Type Overview
Site vitrine statique généré avec Eleventy (SSG), hébergé sur Netlify, avec CMS headless pour la gestion de contenu. Architecture Multi-Page App (MPA) optimisée pour le SEO.

### Technical Architecture Considerations

#### Stack Technique
- **Framework** : Eleventy 2.x (Static Site Generator)
- **Styling** : TailwindCSS 3.x
- **CMS** : Netlify CMS (Decap CMS)
- **Hébergement** : Netlify (Free tier)
- **Formulaires** : Netlify Forms
- **Analytics** : Netlify Analytics (basique)

#### Browser Support Matrix

| Navigateur | Version Minimum |
|------------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |

### Responsive Design
- **Approche** : Mobile-first
- **Breakpoints** :
  - Mobile : < 640px
  - Tablet : 640px - 1024px
  - Desktop : > 1024px
- **Touch targets** : Minimum 44x44px sur mobile

### Performance Targets

| Métrique | Objectif |
|----------|----------|
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
| Lighthouse Accessibility | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3s |
| Total Page Weight | < 1MB |

### SEO Strategy
- **Meta tags** : Title, description, og:image pour chaque page
- **Sitemap** : sitemap.xml auto-généré
- **Schema.org** : LocalBusiness, Service, Organization
- **URLs** : Slugs français optimisés (/services/gtb-domotique, /services/bornes-recharge-irve)
- **Canonical URLs** : Définis sur chaque page
- **Robots.txt** : Configuré pour indexation complète

### Accessibility Level
- **Standard** : WCAG 2.1 AA
- **Contraste** : Ratio minimum 4.5:1
- **Navigation clavier** : Complète
- **Alt text** : Sur toutes les images
- **ARIA labels** : Sur éléments interactifs

### Implementation Considerations
- **Build time** : < 30s pour génération complète
- **Déploiement** : Auto via Git push → Netlify
- **Preview** : Deploy previews sur branches
- **CMS** : Interface admin sur /admin

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-Solving MVP
- Résoudre le problème immédiat : visibilité SEO sur GTB/IRVE
- Livrer rapidement pour validation boss
- Itérer après feedback

**Resource Requirements:**
- 1 développeur (Val)
- Contenu existant (site actuel + photos Dropbox)
- Budget : 0€ (Netlify free tier)

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- ✅ Thomas : Recherche Google → Page service → Portfolio → Devis
- ✅ Sophie : Consultation portfolio → Contact
- ✅ Marc : Recherche locale → Appel direct
- ✅ Admin : Ajout réalisation via CMS

**Must-Have Capabilities:**

| Feature | Justification |
|---------|---------------|
| Page Accueil | Point d'entrée, présentation services |
| Pages Services (5) | SEO par mot-clé cible |
| Page Réalisations | Crédibilité, conversion |
| Page Contact | Formulaire devis, coordonnées |
| Netlify CMS | Autonomie gestion contenu |
| SEO de base | Meta, sitemap, schema.org |
| Responsive | 50%+ trafic mobile |

### Post-MVP Features

**Phase 2 (Growth) - Après validation boss:**
- Blog/Actualités (SEO content marketing)
- Témoignages clients
- Page "Qui sommes-nous" enrichie
- Formulaire devis multi-étapes
- Filtres portfolio par catégorie

**Phase 3 (Expansion) - Long terme:**
- Espace client avec suivi projet
- Intégration CRM
- Chat en direct
- Animations Framer Motion
- Multi-langue (si expansion)

### Risk Mitigation Strategy

**Technical Risks:**
- *Risque* : Temps de build Eleventy
- *Mitigation* : Architecture simple, images optimisées

**Market Risks:**
- *Risque* : SEO prend du temps (3-6 mois)
- *Mitigation* : Contenu de qualité dès le départ, pages dédiées

**Resource Risks:**
- *Risque* : Val seul sur le projet
- *Mitigation* : MVP minimaliste, CMS pour autonomie client

---

## Functional Requirements

### Navigation & Structure

- **FR1:** Visiteur peut accéder à toutes les pages du site via un menu de navigation principal
- **FR2:** Visiteur peut voir le logo Jadelec cliquable qui ramène à l'accueil
- **FR3:** Visiteur peut accéder aux coordonnées de contact depuis n'importe quelle page (header/footer)
- **FR4:** Visiteur peut naviguer sur le site depuis un appareil mobile avec une expérience adaptée

### Page Accueil

- **FR5:** Visiteur peut comprendre immédiatement l'activité de Jadelec (électricité générale)
- **FR6:** Visiteur peut voir les services principaux mis en avant (GTB, IRVE, Domotique)
- **FR7:** Visiteur peut accéder rapidement au formulaire de contact/devis via un CTA visible
- **FR8:** Visiteur peut voir une section de réassurance (expertise, zone d'intervention)

### Pages Services

- **FR9:** Visiteur peut consulter une page dédiée au service Courant Fort
- **FR10:** Visiteur peut consulter une page dédiée au service Courant Faible
- **FR11:** Visiteur peut consulter une page dédiée aux Bornes de Recharge (IRVE)
- **FR12:** Visiteur peut consulter une page dédiée à la GTB/Domotique
- **FR13:** Visiteur peut consulter une page dédiée à l'Entretien & Dépannage
- **FR14:** Visiteur peut voir le détail des prestations pour chaque service
- **FR15:** Visiteur peut accéder au formulaire de devis depuis chaque page service

### Portfolio / Réalisations

- **FR16:** Visiteur peut consulter la liste des réalisations de Jadelec
- **FR17:** Visiteur peut voir les photos de chaque réalisation
- **FR18:** Visiteur peut voir la description et catégorie de chaque réalisation
- **FR19:** Visiteur peut identifier des projets similaires au sien (par type : tertiaire, copropriété, etc.)

### Contact & Formulaire

- **FR20:** Visiteur peut voir les coordonnées complètes de Jadelec (téléphone, email, adresse)
- **FR21:** Visiteur peut voir les horaires d'ouverture
- **FR22:** Visiteur peut soumettre une demande de devis via un formulaire
- **FR23:** Visiteur peut renseigner son nom, email, sujet et message dans le formulaire
- **FR24:** Visiteur reçoit une confirmation après soumission du formulaire
- **FR25:** Jadelec reçoit les demandes de devis par email

### SEO & Découvrabilité

- **FR26:** Moteur de recherche peut indexer toutes les pages du site
- **FR27:** Chaque page possède des meta tags optimisés (title, description)
- **FR28:** Le site possède un sitemap.xml accessible
- **FR29:** Le site possède des données structurées schema.org (LocalBusiness, Service)
- **FR30:** Les URLs sont optimisées pour le SEO français

### Administration (CMS)

- **FR31:** Admin peut se connecter à l'interface d'administration
- **FR32:** Admin peut ajouter une nouvelle réalisation (titre, description, catégorie, photos)
- **FR33:** Admin peut modifier une réalisation existante
- **FR34:** Admin peut supprimer une réalisation
- **FR35:** Admin peut modifier le contenu des pages services
- **FR36:** Admin peut uploader et gérer les images/médias
- **FR37:** Admin peut prévisualiser les modifications avant publication
- **FR38:** Les modifications publiées sont visibles sur le site après rebuild automatique

---

## Non-Functional Requirements

### Performance

- **NFR1:** Temps de chargement initial (FCP) < 1.5 secondes sur connexion 4G
- **NFR2:** Largest Contentful Paint (LCP) < 2.5 secondes
- **NFR3:** Time to Interactive (TTI) < 3 secondes
- **NFR4:** Score Lighthouse Performance > 90
- **NFR5:** Poids total de page < 1 MB (images comprises)
- **NFR6:** Images optimisées (WebP, lazy loading)

### SEO

- **NFR7:** Score Lighthouse SEO > 95
- **NFR8:** Toutes les pages indexables par les moteurs de recherche
- **NFR9:** Temps de réponse serveur (TTFB) < 200ms (CDN Netlify)
- **NFR10:** Core Web Vitals dans la zone "Good"

### Accessibility

- **NFR11:** Conformité WCAG 2.1 niveau AA
- **NFR12:** Score Lighthouse Accessibility > 90
- **NFR13:** Contraste couleurs ratio minimum 4.5:1
- **NFR14:** Navigation complète au clavier
- **NFR15:** Textes alternatifs sur toutes les images

### Security

- **NFR16:** Site servi en HTTPS uniquement
- **NFR17:** Protection spam sur formulaire (honeypot ou reCAPTCHA)
- **NFR18:** Headers de sécurité configurés (CSP, X-Frame-Options)
- **NFR19:** Pas de données utilisateur stockées côté serveur

### Reliability

- **NFR20:** Disponibilité 99.9% (garantie Netlify)
- **NFR21:** Déploiement sans interruption de service
- **NFR22:** Rollback possible en cas de problème

### Maintainability

- **NFR23:** Code source versionné sur Git
- **NFR24:** Documentation technique pour maintenance
- **NFR25:** CMS utilisable sans compétences techniques

