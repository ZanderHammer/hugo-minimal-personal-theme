---
title: "Front Matter und Taxonomien Demo"
date: 2025-11-13T18:20:00+01:00
draft: false
description: "Demonstration von Hugos leistungsstarken Front Matter-Funktionen und dem Taxonomiesystem"
summary: "Erfahren Sie, wie Sie Front Matter-Variablen, benutzerdefinierte Parameter, Taxonomien und Metadaten in Hugo verwenden"

# Vorschaubilder (responsive)
image_desktop: "fm_3-1.webp"        # 3:1 Verhältnis für Desktop/Tablet
image_mobile: "fm_5-4.webp"         # 5:4 Verhältnis für Mobilgeräte

# Taxonomien
tags:
  - hugo
  - front-matter
  - taxonomies
  - metadata
  - seo
categories:
  - documentation
  - tutorial
series: ["Hugo Grundlagen"]

# Autor-Informationen
author: "Hugo Experte"
authors: ["Hugo Experte", "Demo Autor"]

# Inhaltsorganisation
slug: "front-matter-demo"
aliases:
  - /alter-pfad/front-matter
  - /legacy/metadata-anleitung

# Translation key to link with English version
translationKey: "front-matter-taxonomies-demo"

# SEO und Social Media
keywords:
  - hugo front matter
  - hugo metadaten
  - hugo taxonomien
images:
  - /img/portrait.png
featured_image: "/img/portrait.png"

# Anzeigeoptionen
toc: true
math: false
weight: 10

# Benutzerdefinierte Parameter
custom:
  difficulty: "anfänger"
  reading_time: "5 Min."
  featured: true
  sidebar: true

resources:
  - name: "featured"
    src: "portrait.png"
    title: "Vorschaubild"

externalLink: ""
disableShare: false
showReadingTime: true
showToc: true
TocOpen: false
---

## Einführung

Dieser Beitrag demonstriert Hugos leistungsstarke Front Matter-Funktionen und das Taxonomiesystem. Front Matter ist der Metadaten-Bereich am Anfang Ihrer Inhaltsdateien. Lernen Sie, wie Sie Tags, Kategorien, benutzerdefinierte Parameter, SEO-Metadaten und vieles mehr verwenden, um Ihre Inhalte zu organisieren und zu optimieren.

## Front Matter Formate

Hugo unterstützt drei Front Matter-Formate:

### YAML (Am häufigsten verwendet)
```yaml
---
title: "Mein Beitrag"
date: 2024-01-01
---
```

### TOML
```toml
+++
title = "Mein Beitrag"
date = 2024-01-01
+++
```

### JSON
```json
{
  "title": "Mein Beitrag",
  "date": "2024-01-01"
}
```

## Standard Front Matter-Variablen

### Grundlegende Metadaten

- **title**: Der Titel des Inhalts
- **date**: Das Erstellungsdatum
- **lastmod**: Datum der letzten Änderung
- **draft**: Ob der Inhalt ein Entwurf ist (true/false)
- **description**: Eine kurze Beschreibung des Inhalts

### Inhaltsorganisation

- **slug**: Benutzerdefiniertes URL-Segment
- **aliases**: Alternative URLs, die zu diesem Inhalt weiterleiten
- **weight**: Zur Sortierung von Inhalten (niedrigere Zahlen zuerst)
- **type**: Benutzerdefinierter Inhaltstyp
- **layout**: Benutzerdefiniertes Layout-Template

## Taxonomien

Hugos Taxonomiesystem ermöglicht es Ihnen, Inhalte in mehreren Dimensionen zu organisieren:

### Standard-Taxonomien

- **tags**: Für detaillierte Kategorisierung
- **categories**: Für breitere Gruppierung

### Taxonomien dieses Beitrags

**Tags in diesem Beitrag:**
- `hugo`
- `front-matter`
- `taxonomies`
- `metadata`
- `seo`

**Kategorien:**
- `documentation`
- `tutorial`

### Benutzerdefinierte Taxonomien

Sie können benutzerdefinierte Taxonomien in `hugo.toml` definieren:

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  series = "series"
  author = "authors"
```

## Benutzerdefinierte Parameter

Sie können beliebige benutzerdefinierte Parameter zu Ihrem Front Matter hinzufügen:

```yaml
custom:
  difficulty: "anfänger"
  reading_time: "5 Min."
  featured: true
```

Greifen Sie in Templates mit `.Params.custom.difficulty` darauf zu.

## Datumsverarbeitung

Hugo bietet ausgefeilte Datumsverarbeitung:

- **date**: Hauptveröffentlichungsdatum
- **publishDate**: Zukünftige Veröffentlichung planen
- **expiryDate**: Ablaufdatum des Inhalts
- **lastmod**: Letzte Änderung

```yaml
date: 2024-01-15T10:00:00+01:00
publishDate: 2024-01-15T10:00:00+01:00
expiryDate: 2025-01-15T10:00:00+01:00
lastmod: 2024-02-15T09:20:00+01:00
```

## SEO und Social Media

### Schlüsselwörter und Bilder

```yaml
keywords:
  - hugo front matter
  - hugo metadaten
images:
  - /img/social-share.png
description: "Dies erscheint in Suchergebnissen"
```

### Open Graph und Twitter Cards

Hugo kann automatisch Open Graph- und Twitter Card-Metadaten aus Ihrem Front Matter generieren.

## Entwurfs- und Veröffentlichungsstatus

### Entwurfsinhalte

```yaml
draft: true
```

Entwurfsbeiträge werden von Produktions-Builds ausgeschlossen, es sei denn, Sie verwenden `hugo -D`.

### Zukünftige Veröffentlichung

```yaml
publishDate: 2025-01-01T00:00:00+01:00
```

Inhalte mit einem zukünftigen `publishDate` erscheinen nicht vor diesem Datum.

### Abgelaufene Inhalte

```yaml
expiryDate: 2024-01-01T00:00:00+01:00
```

Abgelaufene Inhalte werden automatisch von Builds ausgeschlossen.

## URL-Verwaltung

### Benutzerdefinierte Slugs

```yaml
slug: "benutzerdefinierter-url-name"
```

Erzeugt: `/beitraege/benutzerdefinierter-url-name/`

### Aliase

```yaml
aliases:
  - /alte-url
  - /weitere-alte-url
```

Hugo erstellt Weiterleitungen von diesen URLs zu Ihrem Inhalt.

## Mehrsprachige Unterstützung

```yaml
title: "Englischer Titel"
translationKey: "mein-beitrag"
---

# In der deutschen Version:
---
title: "Deutscher Titel"
translationKey: "mein-beitrag"
```

Der gleiche `translationKey` verbindet Übersetzungen miteinander.

## Seitenressourcen

```yaml
resources:
  - name: "header"
    src: "images/sonnenuntergang.jpg"
    title: "Sonnenuntergang"
    params:
      credits: "Foto von Jane Doe"
```

Seitenressourcen sind Bilder und Dateien, die mit Ihrem Inhalt gespeichert werden.

## Cascade

Verwenden Sie `cascade`, um Front Matter auf alle Nachkommen anzuwenden:

```yaml
cascade:
  banner: "/img/standard-banner.png"
  type: "docs"
```

## Build-Optionen

```yaml
build:
  render: always  # always, never, link
  list: always    # always, never, local
  publishResources: true
```

Steuern Sie, wie Hugo diesen Inhalt verarbeitet.

## Fazit

Front Matter ist die Steuerzentrale Ihres Hugo-Inhalts. Es bietet:

- ✅ Inhaltsorganisation durch Taxonomien
- ✅ SEO-Optimierung mit Metadaten
- ✅ Veröffentlichungssteuerung mit Daten und Entwürfen
- ✅ Benutzerdefinierte Parameter für jeden Anwendungsfall
- ✅ URL-Verwaltung mit Slugs und Aliasen

**Aktuelle Beitragsparameter:**
- Schwierigkeit: Anfänger
- Lesezeit: 5 Min.
- Hervorgehoben: Ja
