# Site vitrine – Giuseppe | Sérénades napolitaines

## 1. Objectif du site
Créer un site vitrine immersif pour Giuseppe, chanteur, compositeur et musicien spécialisé dans les sérénades napolitaines.
Le site doit s'appuyer fortement sur la vidéo et le contact direct via WhatsApp.

## 2. Structure générale
Le site est composé de **3 pages**, fidèles à la maquette Canva.

- Page 1 : Accueil / Présentation (`index.html`)
- Page 2 : Exemples de sérénades (`serenate.html`)
- Page 3 : Contact / Recensioni (`contact.html`)

Navigation : liens simples vers les 3 pages (pas de menu hamburger).

## 3. Public cible
- Couples
- Personnes souhaitant offrir une sérénade
- Événements privés (anniversaires, mariages)
- Public sensible à la culture napolitaine

## 4. Identité visuelle

### Ambiance
- Romantique
- Chaleureuse
- Authentique
- Inspirée de Naples

### Couleurs (extraites de la maquette)
- **Vert foncé** : #2D4739 (titres "Serenata", textes importants)
- **Rouge/Corail** : #E85A4F (script "D'autore", textes italiques)
- **Fond** : #F5F5F5 avec texture ondulée gris clair
- **Noir** : #1A1A1A (textes, bouton WhatsApp)
- **Blanc** : #FFFFFF (contrastes)

### Typographies (Google Fonts / imports)
| Élément | Police | Style |
|---------|--------|-------|
| "SERENATA" | **Gatwick** | Serif décoratif, vert foncé |
| "D'autore" | **Gistesy** | Script cursif, rouge/corail |
| "Se ami la musica..." | **Josefin Sans** | Italique, rouge/corail |
| "+100 SPOSI SODDISFATTI" | **Chau Philomene One** | Italique, vert foncé |
| "GUARDA IL VIDEO" | **Josefin Sans** | Majuscules espacées |
| "CHATTA CON ME" | **Anton** | Souligné, noir |
| "PIANOFORTE E VOCE..." | **TT Firs Neue** | Italique, rouge/corail |
| "GUARDA LE RECENSIONI..." | **Chau Philomene One** | Majuscules, vert foncé |
| "Ecco qualche videorecensione..." | **DM Serif Display** | Italique |
| "Se cerchi uno spettacolo..." | **Allura** | Script élégant |

### Fond / Background
- Texture gris clair avec motifs ondulés subtils
- À recréer en CSS (dégradés, formes SVG ou pseudo-éléments)

---

## 5. Contenu détaillé par page

### Page 1 – Accueil (`index.html`)

#### Structure (de haut en bas)
1. **Logo/Titre**
   - "Serenata" (Gatwick, vert foncé #2D4739)
   - "D'autore" (Gistesy, rouge #E85A4F, superposé en bas à droite)

2. **Texte d'accroche**
   - "SPOSO STAI CERCANDO LA SERENATA GIUSTA PER TE ?" 
   - (Josefin Sans, majuscules espacées, gris foncé)

3. **Sous-texte**
   - "Se ami la musica Napoletana e cerchi qualcosa di semplice e coinvolgente Ho una proposta da farti"
   - (Josefin Sans, italique, rouge/corail)

4. **Vidéo de présentation**
   - Fichier : `videos/presentation.mp4`
   - Centrée, coins légèrement arrondis
   - Contrôles visibles

5. **Statistique**
   - "+100 SPOSI SODDISFATTI"
   - (Chau Philomene One, italique, vert foncé)

6. **Call-to-action**
   - "GUARDA IL VIDEO"
   - (Josefin Sans, majuscules espacées, gris)

7. **Bouton WhatsApp**
   - Icône WhatsApp (vert officiel)
   - "Chatta con me" (Anton, souligné, noir)
   - Lien : `https://wa.me/393347522369`

---

### Page 2 – Sérénades (`serenate.html`)

#### Structure (de haut en bas)
1. **Logo/Titre** (identique page 1)

2. **Grille de 6 vidéos** (2 colonnes × 3 lignes)
   - `videos/IMG_2507.mp4`
   - `videos/copy_7324D5A2-2B50-4391-92E1-63CDB7D27926.mp4`
   - `videos/Forse sponsor.mp4`
   - `videos/IMG_3865.mp4`
   - `videos/IMG_3971.mp4`
   - `videos/O surd.mp4`
   - Affichage : miniatures cliquables ou vidéos avec contrôles
   - Coins arrondis

3. **Texte descriptif**
   - "Pianoforte e Voce, l'Atmosfera giusta per rendere la tua Sorpresa un momento eterno firmato Napoli."
   - (TT Firs Neue, italique, rouge/corail)

4. **Call-to-action navigation**
   - "GUARDA LE RECENSIONI NELLA PROSSIMA PAGINA"
   - (Chau Philomene One, majuscules, vert foncé)
   - Lien vers `contact.html`

---

### Page 3 – Contact / Recensioni (`contact.html`)

#### Structure (de haut en bas)
1. **Logo/Titre** (identique page 1)

2. **Texte introduction**
   - "Ecco qualche videorecensione degli sposi 2025"
   - (DM Serif Display, italique)

3. **Grille de 3 vidéos témoignages** (3 colonnes sur desktop, 1 sur mobile)
   - `videos/a70fdbb885e04df1a0366d75680a3ede.mp4`
   - `videos/IMG_3385.mp4`
   - `videos/IMG_3270.mp4`
   - Coins arrondis

4. **Texte final**
   - "Se cerchi uno spettacolo che la faccia piangere e ridere; Ho una proposta per te."
   - (Allura, script élégant, grande taille)

5. **Bouton WhatsApp**
   - Icône WhatsApp officielle (noir)
   - "WhatsApp" (texte noir)
   - Lien : `https://wa.me/393347522369`

---

## 6. Fonctionnalités clés
- Liens WhatsApp cliquables (API `https://wa.me/393347522369`)
- Vidéos responsives avec attribut `playsinline` pour mobile
- Navigation simple (liens directs, pas de menu burger)
- Transitions douces entre les pages
- Lazy loading des vidéos pour les performances

## 7. Contraintes techniques
- HTML5 / CSS3 / JavaScript vanilla
- Site statique (3 fichiers HTML)
- Responsive mobile-first (breakpoint : 768px)
- Performances : compression vidéo recommandée, lazy loading
- Pas de framework lourd
- Code clair, structuré, commenté
- Structure des fichiers :
  ```
  /
  ├── index.html
  ├── serenate.html
  ├── contact.html
  ├── css/
  │   └── style.css
  ├── js/
  │   └── main.js
  └── videos/
      └── (tous les fichiers vidéo)
  ```

## 8. Règles strictes
- Ne jamais inventer de contenu non présent dans la maquette
- Ne pas modifier la structure des pages sans validation
- Priorité à la fidélité visuelle
- Poser une question en cas d'ambiguïté
- Vidéos facilement remplaçables (chemins en variables ou commentés)

---

## 9. Ajustements pour l'optimisation mobile (NOUVEAUX)

### 9.1 Réduction de l'espace en haut de page
**Problème** : Le logo et les marges supérieures prennent trop de place sur mobile.
**Ajustement** :
- Réduire le `padding-top` de la première section
- Logo : hauteur réduite à 80-100px sur mobile (au lieu de 150px+)
- Supprimer ou réduire les marges entre le logo et le texte d'accroche

### 9.2 Bouton WhatsApp visible plus rapidement
**Problème** : L'utilisateur doit scroller pour voir le bouton de contact.
**Ajustement** :
- Ajouter un bouton WhatsApp compact juste après la vidéo de présentation (Page 1)
- Garder le bouton existant en bas de page
- Option : bouton sticky discret en bas de l'écran

### 9.3 Vidéo de présentation non coupée sur mobile
**Problème** : La vidéo peut être partiellement hors écran sur petits appareils.
**Ajustement** :
- S'assurer que la vidéo a une `max-height` adaptée au viewport mobile
- Utiliser `aspect-ratio` pour maintenir les proportions
- Tester sur iPhone SE (375×667) comme référence minimale

### 9.4 Amélioration de la clarté immédiate
**Problème** : Le message peut être moins clair au premier regard.
**Ajustement** :
- Texte d'accroche : taille légèrement réduite mais plus lisible
- Contraste amélioré si nécessaire
- Hiérarchie visuelle renforcée (logo → accroche → vidéo → CTA)

### 9.5 Optimisation du nombre de vidéos (optionnel)
**Problème** : 9+ vidéos = temps de chargement élevé.
**Ajustement proposé** :
- Page 2 : réduire de 6 à 4 vidéos (les plus représentatives)
- Page 3 : garder les 3 vidéos témoignages (preuve sociale importante)
- Total : passer de 10 à 8 vidéos
- **Alternative** : garder toutes les vidéos mais avec `preload="none"` strict

### 9.6 Thumbnails propres pour toutes les vidéos
**Problème** : Sans poster, l'écran est noir avant le chargement.
**Ajustement** :
- Chaque vidéo doit avoir un attribut `poster` avec une image JPG
- Images extraites automatiquement via FFmpeg ou manuellement
- Naming convention : `nomvideo-poster.jpg`

---

## 10. Points à confirmer par le client
- [ ] Validation du SPEC.md avant développement
- [ ] Choix des 4 vidéos à garder sur la page Sérénades (si réduction)
- [ ] Accord pour le bouton WhatsApp supplémentaire après la vidéo
