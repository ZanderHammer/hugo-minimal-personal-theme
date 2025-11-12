---
title: "Front Matter and Taxonomies Demo"
date: 2024-02-10T14:30:00+01:00
lastmod: 2024-02-15T09:20:00+01:00
draft: false
description: "Demonstrating Hugo's powerful front matter features and taxonomy system"
summary: "Learn how to use front matter variables, custom parameters, taxonomies, and metadata in Hugo"

# Preview Images (responsive)
image_desktop: "fm_3-1.webp"        # 3:1 ratio for desktop/tablet
image_mobile: "fm_5-4.webp"   # 5:4 ratio for mobile
image: "fm_3-1.webp"                # Fallback

# Taxonomies
tags: 
  - hugo
  - front-matter
  - taxonomies
  - metadata
  - seo
categories: 
  - documentation
  - tutorial
series: ["Hugo Basics"]

# Author information
author: "Hugo Expert"
authors: ["Hugo Expert", "Demo Author"]

# Content organization
slug: "front-matter-demo"
aliases:
  - /old-path/front-matter
  - /legacy/metadata-guide

# SEO and Social
keywords:
  - hugo front matter
  - hugo metadata
  - hugo taxonomies
images:
  - /img/portrait.png
featured_image: "/img/portrait.png"

# Display options
toc: true
math: false
weight: 10

# Custom parameters
custom:
  difficulty: "beginner"
  reading_time: "5 min"
  featured: true
  sidebar: true
  
resources:
  - name: "featured"
    src: "portrait.png"
    title: "Featured Image"
    
externalLink: ""
disableShare: false
showReadingTime: true
showToc: true
TocOpen: false
---

## Introduction

This post demonstrates Hugo's powerful front matter capabilities and taxonomy system. Front matter is the metadata section at the top of your content files. Learn how to use tags, categories, custom parameters, SEO metadata, and much more to organize and optimize your content.

## Front Matter Formats

Hugo supports three front matter formats:

### YAML (Most Common)
```yaml
---
title: "My Post"
date: 2024-01-01
---
```

### TOML
```toml
+++
title = "My Post"
date = 2024-01-01
+++
```

### JSON
```json
{
  "title": "My Post",
  "date": "2024-01-01"
}
```

## Standard Front Matter Variables

### Basic Metadata

- **title**: The title of the content
- **date**: The creation date
- **lastmod**: Last modification date
- **draft**: Whether content is a draft (true/false)
- **description**: A short description of the content

### Content Organization

- **slug**: Custom URL segment
- **aliases**: Alternative URLs that redirect to this content
- **weight**: For ordering content (lower numbers first)
- **type**: Custom content type
- **layout**: Custom layout template

## Taxonomies

Hugo's taxonomy system allows you to organize content in multiple dimensions:

### Default Taxonomies

- **tags**: For detailed categorization
- **categories**: For broader grouping

### Accessing This Post's Taxonomies

**Tags used in this post:**
- `hugo`
- `front-matter`
- `taxonomies`
- `metadata`
- `seo`

**Categories:**
- `documentation`
- `tutorial`

### Custom Taxonomies

You can define custom taxonomies in `hugo.toml`:

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  series = "series"
  author = "authors"
```

## Custom Parameters

You can add any custom parameters to your front matter:

```yaml
custom:
  difficulty: "beginner"
  reading_time: "5 min"
  featured: true
```

Access them in templates with `.Params.custom.difficulty`.

## Date Handling

Hugo provides sophisticated date handling:

- **date**: Main publication date
- **publishDate**: Schedule future publishing
- **expiryDate**: Content expiration
- **lastmod**: Last modification

```yaml
date: 2024-01-15T10:00:00+01:00
publishDate: 2024-01-15T10:00:00+01:00
expiryDate: 2025-01-15T10:00:00+01:00
lastmod: 2024-02-15T09:20:00+01:00
```

## SEO and Social Media

### Keywords and Images

```yaml
keywords:
  - hugo front matter
  - hugo metadata
images:
  - /img/social-share.png
description: "This appears in search results"
```

### Open Graph and Twitter Cards

Hugo can automatically generate Open Graph and Twitter Card metadata from your front matter.

## Draft and Published States

### Draft Content

```yaml
draft: true
```

Draft posts are excluded from production builds unless you use `hugo -D`.

### Future Publishing

```yaml
publishDate: 2025-01-01T00:00:00+01:00
```

Content with a future `publishDate` won't appear until that date.

### Expired Content

```yaml
expiryDate: 2024-01-01T00:00:00+01:00
```

Expired content is automatically excluded from builds.

## URL Management

### Custom Slugs

```yaml
slug: "custom-url-name"
```

Creates: `/posts/custom-url-name/`

### Aliases

```yaml
aliases:
  - /old-url
  - /another-old-url
```

Hugo creates redirects from these URLs to your content.

## Multilingual Support

```yaml
title: "English Title"
translationKey: "my-post"
---

# In the German version:
---
title: "Deutscher Titel"
translationKey: "my-post"
```

The same `translationKey` links translations together.

## Page Resources

```yaml
resources:
  - name: "header"
    src: "images/sunset.jpg"
    title: "Sunset"
    params:
      credits: "Photo by Jane Doe"
```

Page resources are images and files stored with your content.

## Cascade

Use `cascade` to apply front matter to all descendants:

```yaml
cascade:
  banner: "/img/default-banner.png"
  type: "docs"
```

## Build Options

```yaml
build:
  render: always  # always, never, link
  list: always    # always, never, local
  publishResources: true
```

Control how Hugo processes this content.

## Conclusion

Front matter is the control center of your Hugo content. It provides:

- ✅ Content organization through taxonomies
- ✅ SEO optimization with metadata
- ✅ Publishing control with dates and drafts
- ✅ Custom parameters for any use case
- ✅ URL management with slugs and aliases

**Current post parameters:**
- Difficulty: beginner
- Reading Time: 5 min
- Featured: true
