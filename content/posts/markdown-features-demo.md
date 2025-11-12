---
title: "Markdown Features Demo"
date: 2024-01-15T10:00:00+01:00
draft: false
description: "A comprehensive demonstration of Markdown formatting capabilities in Hugo"
summary: "Complete guide to Markdown in Hugo: text formatting, lists, tables, code blocks, footnotes, and more."
tags: ["markdown", "demo", "formatting"]
categories: ["documentation"]
author: "Hugo Demo"
---

# Heading Level 1

This post demonstrates various Markdown features supported by Hugo. From basic text formatting to complex tables and code blocks, you'll see everything Markdown has to offer in Hugo.

## Heading Level 2

Hugo supports all standard Markdown elements and extends them with additional features.

### Heading Level 3

Here's a paragraph with **bold text**, *italic text*, ***bold and italic***, and `inline code`.

#### Heading Level 4

You can also use ~~strikethrough~~ text.

##### Heading Level 5

And even add [links to external sites](https://gohugo.io).

###### Heading Level 6

The smallest heading level is still readable.

---

## Lists

### Unordered List

- First item
- Second item
  - Nested item 1
  - Nested item 2
    - Even deeper nesting
- Third item

### Ordered List

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task List

- [x] Completed task
- [x] Another completed task
- [ ] Pending task
- [ ] Future task

---

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

> **Note:** Blockquotes can contain other Markdown elements.
>
> - Even lists
> - And more

---

## Code Examples

### Inline Code

Use `const variable = "value"` for inline code snippets.

### Code Block

```
This is a basic code block
without syntax highlighting.
```

### Code Block with Syntax Highlighting

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
    return true;
}

greet("Hugo");
```

---

## Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Markdown | ✓ | Full support |
| Shortcodes | ✓ | Hugo specific |
| Templates | ✓ | Go templates |
| Assets | ✓ | Hugo Pipes |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Cell 1 | Cell 2 | Cell 3 |
| Cell 4 | Cell 5 | Cell 6 |

---

## Horizontal Rules

You can create horizontal rules in multiple ways:

---

***

___

## Definition Lists

Hugo also supports definition lists:

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

---

## Footnotes

Here's a sentence with a footnote[^1].

And here's another one with a longer footnote[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote with more detailed information. It can span multiple lines and contain **formatting**.

---

## Emoji Support

Hugo supports emoji! :smile: :rocket: :heart:

You can use emoji shortcodes throughout your content. :thumbsup:

---

## HTML in Markdown

Hugo allows you to mix HTML with Markdown:

<div style="background-color: #f2e8cf; padding: 1rem; border-radius: 4px; border-left: 4px solid #386641;">
    <strong>Note:</strong> This is a custom styled box using HTML.
</div>

---

## Conclusion

This post demonstrates the powerful Markdown capabilities available in Hugo. You can combine these elements to create rich, well-formatted content.
