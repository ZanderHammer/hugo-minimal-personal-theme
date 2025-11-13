---
title: "Markdown-Funktionen Demo"
date: 2025-11-13T09:00:00+01:00
draft: false
description: "Eine umfassende Demonstration der Markdown-Formatierungsmöglichkeiten in Hugo"
summary: "Vollständiger Leitfaden zu Markdown in Hugo: Textformatierung, Listen, Tabellen, Code-Blöcke, Fußnoten und mehr."

# Preview Images (responsive)
image_desktop: "3-1_mdf.webp"  # 3:1 ratio for desktop/tablet
image_mobile: "5-4_mdf.webp"   # 5:4 ratio for mobile


tags: ["markdown", "demo", "formatierung"]
categories: ["dokumentation"]
author: "Hugo Demo"
translationKey: "markdown-features-demo"
---

# Überschrift Ebene 1

Dieser Beitrag demonstriert verschiedene Markdown-Funktionen, die von Hugo unterstützt werden. Von grundlegender Textformatierung bis hin zu komplexen Tabellen und Code-Blöcken siehst du alles, was Markdown in Hugo zu bieten hat.

## Überschrift Ebene 2

Hugo unterstützt alle Standard-Markdown-Elemente und erweitert diese um zusätzliche Funktionen.

### Überschrift Ebene 3

Hier ist ein Absatz mit **fettem Text**, *kursivem Text*, ***fett und kursiv***, und `Inline-Code`.

#### Überschrift Ebene 4

Du kannst auch ~~durchgestrichenen~~ Text verwenden.

##### Überschrift Ebene 5

Und sogar [Links zu externen Seiten](https://gohugo.io) hinzufügen.

###### Überschrift Ebene 6

Die kleinste Überschriftsebene ist immer noch gut lesbar.

---

## Listen

### Ungeordnete Liste

- Erstes Element
- Zweites Element
  - Verschachteltes Element 1
  - Verschachteltes Element 2
    - Noch tiefere Verschachtelung
- Drittes Element

### Geordnete Liste

1. Erster Schritt
2. Zweiter Schritt
   1. Unterschritt A
   2. Unterschritt B
3. Dritter Schritt

### Aufgabenliste

- [x] Erledigte Aufgabe
- [x] Weitere erledigte Aufgabe
- [ ] Ausstehende Aufgabe
- [ ] Zukünftige Aufgabe

---

## Blockzitate

> Dies ist ein Blockzitat.
> Es kann sich über mehrere Zeilen erstrecken.

> **Hinweis:** Blockzitate können andere Markdown-Elemente enthalten.
>
> - Sogar Listen
> - Und mehr

---

## Code-Beispiele

### Inline-Code

Verwenden Sie `const variable = "value"` für Inline-Code-Snippets.

### Code-Block

```
Dies ist ein einfacher Code-Block
ohne Syntax-Hervorhebung.
```

### Code-Block mit Syntax-Hervorhebung

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
    return true;
}

greet("Hugo");
```

---

## Tabellen

| Funktion | Unterstützt | Hinweise |
|---------|-----------|-------|
| Markdown | ✓ | Vollständige Unterstützung |
| Shortcodes | ✓ | Hugo-spezifisch |
| Templates | ✓ | Go-Templates |
| Assets | ✓ | Hugo Pipes |

### Tabelle mit Ausrichtung

| Linksbündig | Zentriert | Rechtsbündig |
|:-------------|:--------------:|--------------:|
| Zelle 1 | Zelle 2 | Zelle 3 |
| Zelle 4 | Zelle 5 | Zelle 6 |

---

## Horizontale Linien

Du kannst horizontale Linien auf verschiedene Arten erstellen:

---

***

___

## Definitionslisten

Hugo unterstützt auch Definitionslisten:

Begriff 1
: Definition 1

Begriff 2
: Definition 2a
: Definition 2b

---

## Fußnoten

Hier ist ein Satz mit einer Fußnote[^1].

Und hier ist ein weiterer mit einer längeren Fußnote[^2].

[^1]: Dies ist die erste Fußnote.
[^2]: Dies ist die zweite Fußnote mit ausführlicheren Informationen. Sie kann sich über mehrere Zeilen erstrecken und **Formatierung** enthalten.

---

## Emoji-Unterstützung

Hugo unterstützt Emojis! :smile: :rocket: :heart:

Du kannst Emoji-Shortcodes in deinen Inhalten verwenden. :thumbsup:

---

## HTML in Markdown

Hugo erlaubt es dir, HTML mit Markdown zu mischen:

<div style="background-color: #f2e8cf; padding: 1rem; border-radius: 4px; border-left: 4px solid #386641;">
    <strong>Hinweis:</strong> Dies ist eine individuell gestaltete Box mit HTML.
</div>

---

## Fazit

Dieser Beitrag demonstriert die leistungsstarken Markdown-Funktionen, die in Hugo verfügbar sind. Du kannst diese Elemente kombinieren, um umfangreiche, gut formatierte Inhalte zu erstellen.
