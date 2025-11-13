---
title: "Hugo Shortcodes Showcase"
date: 2025-11-13T12:00:00+01:00
draft: false
description: "A comprehensive guide to Hugo's built-in shortcodes and how to use them"
summary: "Master Hugo shortcodes: embed videos, images, code, and social media without writing HTML."

# Preview Images (responsive)
image_desktop: "3-1_hsc.webp"  # 3:1 ratio for desktop/tablet
image_mobile: "5-4_hsc.webp"   # 5:4 ratio for mobile

tags: ["shortcodes", "hugo", "features"]
categories: ["documentation"]
author: "Hugo Demo"
translationKey: "hugo-shortcodes-showcase"
---

## Introduction

Shortcodes are simple snippets inside your content files that Hugo will render using predefined templates. They make it easy to add complex elements without writing HTML. Discover how to embed videos, images, code snippets, and social media content effortlessly.

## Built-in Shortcodes

Hugo provides several built-in shortcodes out of the box.

### Figure - Images with Captions

The `figure` shortcode creates an HTML5 figure element with optional caption, attribution, and link.

{{< figure src="/img/portrait.png" title="Portrait Image" caption="An example portrait with caption" alt="Portrait" attr="Photo credit" attrlink="https://example.com" >}}

**Usage:**
```go
{{</* figure src="/img/portrait.png" title="Portrait Image" caption="An example caption" alt="Portrait" */>}}
```

### Highlight - Syntax Highlighting

The `highlight` shortcode provides advanced syntax highlighting with line numbers and highlighting specific lines.

{{< highlight go "linenos=table,hl_lines=2 4-6,linenostart=1" >}}
package main

import "fmt"

func main() {
    fmt.Println("Hello, Hugo!")
}
{{< /highlight >}}

**Usage:**
```go
{{</* highlight go "linenos=table,hl_lines=2 4-6" */>}}
// Your code here
{{</* /highlight */>}}
```

### Gist - Embed GitHub Gists

Embed a GitHub Gist directly into your content:

**Note:** The `gist` shortcode is deprecated in Hugo v0.143.0+. You can create a custom shortcode or embed Gists manually using HTML.

**Usage (deprecated):**
```go
{{</* gist username gist-id */>}}
{{</* gist username gist-id filename */>}}
```

### YouTube Videos

Embed YouTube videos responsively:

{{< youtube dQw4w9WgXcQ >}}

**Usage:**
```go
{{</* youtube video-id */>}}
{{</* youtube id="video-id" autoplay="true" */>}}
```

### Vimeo Videos

Embed Vimeo videos:

{{< vimeo 55073825 >}}

**Usage:**
```go
{{</* vimeo video-id */>}}
```

### X (formerly Twitter)

Embed posts from X (formerly Twitter):

**Note:** Use the `x` shortcode instead of the deprecated `twitter` shortcode.

**Usage:**
```go
{{</* x user="username" id="post-id" */>}}
```

### Instagram

Embed Instagram posts:

**Usage:**
```go
{{</* instagram post-id */>}}
{{</* instagram post-id hidecaption */>}}
```

### Param

Access site or page parameters:

```go
This site's title is: {{</* param title */>}}
```

**Usage:**
```go
{{</* param "title" */>}}
```

### Ref and RelRef

Create links to other pages:

**Usage:**
```go
[Link text]({{</* ref "path/to/post.md" */>}})
[Link text]({{</* relref "path/to/post.md" */>}})
```

## Shortcode Parameters

Shortcodes can accept both named and positional parameters:

### Positional Parameters

```go
{{</* shortcode param1 param2 */>}}
```

### Named Parameters

```go
{{</* shortcode key1="value1" key2="value2" */>}}
```

## Nested Shortcodes

Some shortcodes can be nested using the `%` delimiter:

```go
{{%/* parent */%}}
  {{%/* child */%}}
    Content here
  {{%/* /child */%}}
{{%/* /parent */%}}
```

## Custom Shortcodes

You can create custom shortcodes in `layouts/shortcodes/`:

### Example: Note Box

```html
<!-- layouts/shortcodes/note.html -->
<div class="notification is-info">
  <strong>Note:</strong> {{ .Inner }}
</div>
```

**Usage:**
```go
{{%/* note */%}}
This is an important note!
{{%/* /note */%}}
```

### Example: Button

```html
<!-- layouts/shortcodes/button.html -->
<a href="{{ .Get "link" }}" class="button is-primary">
  {{ .Get "text" }}
</a>
```

**Usage:**
```go
{{</* button link="/tools" text="View Tools" */>}}
```

## Shortcode vs. Markdown

Use `{{</* */>}}` for shortcodes that output HTML.
Use `{{%/* */%}}` for shortcodes whose content should be processed as Markdown.

### Example with HTML

```go
{{</* myshortcode */>}}
**This won't be bold** because it's treated as HTML
{{</* /myshortcode */>}}
```

### Example with Markdown

```go
{{%/* myshortcode */%}}
**This will be bold** because it's processed as Markdown
{{%/* /myshortcode */%}}
```

## Practical Examples

### Image Gallery Pattern

```go
{{</* figure src="/img/photo1.jpg" title="Photo 1" */>}}
{{</* figure src="/img/photo2.jpg" title="Photo 2" */>}}
{{</* figure src="/img/photo3.jpg" title="Photo 3" */>}}
```

### Code Comparison

**Before:**
{{< highlight javascript >}}
var x = 1;
console.log(x);
{{< /highlight >}}

**After:**
{{< highlight javascript >}}
const x = 1;
console.log(x);
{{< /highlight >}}

### Responsive Video Section

Create rich multimedia content easily:

{{< youtube w7Ft2ymGmfc >}}

*Above: Hugo in 100 Seconds*

## Best Practices

1. **Use built-in shortcodes** when possible instead of raw HTML
2. **Create reusable custom shortcodes** for repeated patterns
3. **Choose the right delimiter**: `<>` for HTML, `%%` for Markdown
4. **Name parameters** for clarity in complex shortcodes
5. **Document your custom shortcodes** for team members

## Shortcode Reference

| Shortcode | Purpose | Example |
|-----------|---------|---------|
| `figure` | Images with captions | `{{</* figure src="img.jpg" */>}}` |
| `highlight` | Code with syntax highlighting | `{{</* highlight go */>}}` |
| `youtube` | Embed YouTube | `{{</* youtube id */>}}` |
| `vimeo` | Embed Vimeo | `{{</* vimeo id */>}}` |
| `x` | Embed X posts | `{{</* x user="user" id="id" */>}}` |
| `instagram` | Embed Instagram | `{{</* instagram id */>}}` |
| `param` | Access parameters | `{{</* param "key" */>}}` |
| `ref` | Link to content | `{{</* ref "post.md" */>}}` |
| `relref` | Relative link | `{{</* relref "post.md" */>}}` |

## Conclusion

Shortcodes are one of Hugo's most powerful features, allowing you to:

- ✅ Embed rich media easily
- ✅ Maintain clean, readable content files
- ✅ Reuse complex HTML patterns
- ✅ Keep content separate from presentation
- ✅ Create consistent formatting across your site

Start using shortcodes today to enhance your Hugo content!
