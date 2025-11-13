---
title: "Hugo Shortcodes Übersicht"
date: 2025-11-13T12:00:00+01:00
draft: false
description: "Ein umfassender Leitfaden zu Hugos integrierten Shortcodes und deren Verwendung"
summary: "Meistern Sie Hugo-Shortcodes: Betten Sie Videos, Bilder, Code und Social Media ein, ohne HTML zu schreiben."

# Preview Images (responsive)
image_desktop: "3-1_hsc.webp"  # 3:1 ratio for desktop/tablet
image_mobile: "5-4_hsc.webp"   # 5:4 ratio for mobile


tags: ["shortcodes", "hugo", "funktionen", "demo"]
categories: ["dokumentation"]
author: "Hugo Demo"
translationKey: "hugo-shortcodes-showcase"
---

## Einführung

Shortcodes sind einfache Code-Schnipsel in Ihren Content-Dateien, die Hugo mit vordefinierten Templates rendert. Sie ermöglichen es, komplexe Elemente ohne HTML-Code hinzuzufügen. Entdecken Sie, wie Sie mühelos Videos, Bilder, Code-Snippets und Social-Media-Inhalte einbetten können.

## Integrierte Shortcodes

Hugo bietet standardmäßig mehrere integrierte Shortcodes.

### Figure - Bilder mit Beschriftungen

Der `figure`-Shortcode erstellt ein HTML5-Figure-Element mit optionaler Bildunterschrift, Attribution und Link.

{{< figure src="/img/portrait.png" title="Portrait-Bild" caption="Ein Beispiel-Portrait mit Bildunterschrift" alt="Portrait" attr="Bildnachweis" attrlink="https://example.com" >}}

**Verwendung:**
```go
{{</* figure src="/img/portrait.png" title="Portrait-Bild" caption="Eine Beispiel-Bildunterschrift" alt="Portrait" */>}}
```

### Highlight - Syntax-Hervorhebung

Der `highlight`-Shortcode bietet erweiterte Syntax-Hervorhebung mit Zeilennummern und Hervorhebung spezifischer Zeilen.

{{< highlight go "linenos=table,hl_lines=2 4-6,linenostart=1" >}}
package main

import "fmt"

func main() {
    fmt.Println("Hello, Hugo!")
}
{{< /highlight >}}

**Verwendung:**
```go
{{</* highlight go "linenos=table,hl_lines=2 4-6" */>}}
// Ihr Code hier
{{</* /highlight */>}}
```

### Gist - GitHub Gists einbetten

Bette ein GitHub Gist direkt in deine Inhalte ein:

**Hinweis:** Der `gist`-Shortcode ist ab Hugo v0.143.0+ veraltet. Du kannst einen benutzerdefinierten Shortcode erstellen oder Gists manuell mit HTML einbetten.

**Verwendung (veraltet):**
```go
{{</* gist benutzername gist-id */>}}
{{</* gist benutzername gist-id dateiname */>}}
```

### YouTube-Videos

Bette YouTube-Videos responsiv ein:

{{< youtube dQw4w9WgXcQ >}}

**Verwendung:**
```go
{{</* youtube video-id */>}}
{{</* youtube id="video-id" autoplay="true" */>}}
```

### Vimeo-Videos

Bette Vimeo-Videos ein:

{{< vimeo 55073825 >}}

**Verwendung:**
```go
{{</* vimeo video-id */>}}
```

### X (ehemals Twitter)

Bette Beiträge von X (ehemals Twitter) ein:

**Hinweis:** Verwende den `x`-Shortcode anstelle des veralteten `twitter`-Shortcodes.

**Verwendung:**
```go
{{</* x user="benutzername" id="beitrag-id" */>}}
```

### Instagram

Bette Instagram-Beiträge ein:

**Verwendung:**
```go
{{</* instagram beitrag-id */>}}
{{</* instagram beitrag-id hidecaption */>}}
```

### Param

Greife auf Site- oder Page-Parameter zu:

```go
Der Titel dieser Site ist: {{</* param title */>}}
```

**Verwendung:**
```go
{{</* param "title" */>}}
```

### Ref und RelRef

Erstelle Links zu anderen Seiten:

**Verwendung:**
```go
[Linktext]({{</* ref "pfad/zum/beitrag.md" */>}})
[Linktext]({{</* relref "pfad/zum/beitrag.md" */>}})
```

## Shortcode-Parameter

Shortcodes können sowohl benannte als auch positionelle Parameter akzeptieren:

### Positionelle Parameter

```go
{{</* shortcode param1 param2 */>}}
```

### Benannte Parameter

```go
{{</* shortcode key1="wert1" key2="wert2" */>}}
```

## Verschachtelte Shortcodes

Einige Shortcodes können mit dem `%`-Begrenzer verschachtelt werden:

```go
{{%/* parent */%}}
  {{%/* child */%}}
    Inhalt hier
  {{%/* /child */%}}
{{%/* /parent */%}}
```

## Benutzerdefinierte Shortcodes

Du kannst benutzerdefinierte Shortcodes in `layouts/shortcodes/` erstellen:

### Beispiel: Hinweis-Box

```html
<!-- layouts/shortcodes/note.html -->
<div class="notification is-info">
  <strong>Hinweis:</strong> {{ .Inner }}
</div>
```

**Verwendung:**
```go
{{%/* note */%}}
Dies ist ein wichtiger Hinweis!
{{%/* /note */%}}
```

### Beispiel: Button

```html
<!-- layouts/shortcodes/button.html -->
<a href="{{ .Get "link" }}" class="button is-primary">
  {{ .Get "text" }}
</a>
```

**Verwendung:**
```go
{{</* button link="/tools" text="Werkzeuge anzeigen" */>}}
```

## Shortcode vs. Markdown

Verwende `{{</* */>}}` für Shortcodes, die HTML ausgeben.
Verwende `{{%/* */%}}` für Shortcodes, deren Inhalt als Markdown verarbeitet werden soll.

### Beispiel mit HTML

```go
{{</* myshortcode */>}}
**Dies wird nicht fett** weil es als HTML behandelt wird
{{</* /myshortcode */>}}
```

### Beispiel mit Markdown

```go
{{%/* myshortcode */%}}
**Dies wird fett** weil es als Markdown verarbeitet wird
{{%/* /myshortcode */%}}
```

## Praktische Beispiele

### Bildergalerie-Muster

```go
{{</* figure src="/img/foto1.jpg" title="Foto 1" */>}}
{{</* figure src="/img/foto2.jpg" title="Foto 2" */>}}
{{</* figure src="/img/foto3.jpg" title="Foto 3" */>}}
```

### Code-Vergleich

**Vorher:**
{{< highlight javascript >}}
var x = 1;
console.log(x);
{{< /highlight >}}

**Nachher:**
{{< highlight javascript >}}
const x = 1;
console.log(x);
{{< /highlight >}}

### Responsive Video-Sektion

Erstelle mühelos umfangreiche Multimedia-Inhalte:

{{< youtube w7Ft2ymGmfc >}}

*Oben: Hugo in 100 Sekunden*

## Best Practices

1. **Verwende integrierte Shortcodes** wann immer möglich anstelle von reinem HTML
2. **Erstelle wiederverwendbare benutzerdefinierte Shortcodes** für wiederkehrende Muster
3. **Wähle den richtigen Begrenzer**: `<>` für HTML, `%%` für Markdown
4. **Benenne Parameter** für Klarheit bei komplexen Shortcodes
5. **Dokumentiere deine benutzerdefinierten Shortcodes** für Teammitglieder

## Shortcode-Referenz

| Shortcode | Zweck | Beispiel |
|-----------|---------|---------|
| `figure` | Bilder mit Bildunterschriften | `{{</* figure src="img.jpg" */>}}` |
| `highlight` | Code mit Syntax-Hervorhebung | `{{</* highlight go */>}}` |
| `youtube` | YouTube einbetten | `{{</* youtube id */>}}` |
| `vimeo` | Vimeo einbetten | `{{</* vimeo id */>}}` |
| `x` | X-Beiträge einbetten | `{{</* x user="user" id="id" */>}}` |
| `instagram` | Instagram einbetten | `{{</* instagram id */>}}` |
| `param` | Parameter zugreifen | `{{</* param "key" */>}}` |
| `ref` | Link zu Inhalt | `{{</* ref "beitrag.md" */>}}` |
| `relref` | Relativer Link | `{{</* relref "beitrag.md" */>}}` |

## Fazit

Shortcodes sind eine der leistungsstärksten Funktionen von Hugo und ermöglichen es dir:

- ✅ Rich Media einfach einzubetten
- ✅ Saubere, lesbare Content-Dateien zu pflegen
- ✅ Komplexe HTML-Muster wiederzuverwenden
- ✅ Inhalte von der Präsentation zu trennen
- ✅ Konsistente Formatierung auf deiner gesamten Site zu erstellen

Beginne noch heute mit der Verwendung von Shortcodes, um deine Hugo-Inhalte zu verbessern!
