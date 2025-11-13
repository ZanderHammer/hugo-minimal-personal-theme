# Minimal Personal Hugo Theme

A clean, minimalistic Hugo theme designed for personal websites and blogs.

## Features

- Clean, minimalistic design optimized for personal websites and blogs
- Dark mode support with automatic theme switching
- Responsive layout that works on desktop and mobile devices
- Multilingual support (i18n) with English and German translations
- **Language switcher component** for easy switching between available languages
- Customizable color palette via configuration
- **Fully customizable footer** with copyright text, custom links, and social media icons
- Built with Bulma 1.0.4 CSS framework
- Font Awesome 7 icons included
- SEO-friendly structure
- Fast loading times

## Installation

### As a Git Submodule

Clone the theme into your Hugo site's `themes` directory:

```bash
cd your-hugo-site
git submodule add https://github.com/ZanderHammer/hugo-minimal-personal-theme.git themes/minimal-personal
```

Then update your `hugo.toml`:

```toml
theme = "minimal-personal"
```
v
## Requirements

- Hugo 0.152.2 or higher (Extended version recommended)

## Color Palette

The theme uses the following color scheme:

- **Primary Dark Green**: `#386641`
- **Medium Green**: `#6a994e`
- **Light Green**: `#a7c957`
- **Cream/Beige**: `#f2e8cf`
- **Red Accent**: `#bc4749`

## Configuration

### Multilingual Support & Language Switcher

The theme includes built-in support for multilingual websites with an automatic language switcher that appears when multiple languages are configured.

#### Basic Multilingual Setup

Configure languages in your `hugo.toml`:

```toml
defaultContentLanguage = "en"
defaultContentLanguageInSubdir = false

[languages]
  [languages.en]
    languageCode = "en-US"
    languageName = "English"
    title = "My Site"
    weight = 1

  [languages.de]
    languageCode = "de-DE"
    languageName = "Deutsch"
    title = "Meine Seite"
    weight = 2
```

#### Language Switcher Behavior

The language switcher automatically:
- Displays in the header between the navigation menu and dark mode toggle
- Shows the current language with a globe icon
- Provides a dropdown menu with all available languages
- Links to translated versions of the current page when available
- Falls back to the homepage if a translation doesn't exist
- Adapts to mobile layouts (centered, full-width)
- Supports dark mode styling

#### Linking Translated Content

To link content across languages, use the `translationKey` parameter in your content frontmatter:

```yaml
# content/posts/my-post.en.md
---
title: "My Post"
translationKey: "my-post"
---

# content/posts/my-post.de.md
---
title: "Mein Beitrag"
translationKey: "my-post"
---
```

When users click the language switcher on a page with translations, they'll be taken directly to the translated version.

#### Language-Specific Configuration

You can customize settings per language:

```toml
[languages.en]
  languageCode = "en-US"
  languageName = "English"
  title = "My Site"
  weight = 1

  [languages.en.params]
    description = "My personal website"

[languages.de]
  languageCode = "de-DE"
  languageName = "Deutsch"
  title = "Meine Seite"
  weight = 2

  [languages.de.params]
    description = "Meine persönliche Webseite"
```

#### Language-Specific Permalinks

Customize URL structures per language:

```toml
[languages.de]
  languageCode = "de-DE"
  languageName = "Deutsch"

  [languages.de.permalinks]
    posts = "/beitraege/:slug/"
    tools = "/werkzeuge/:slug/"
```

#### Adding More Languages

To add additional languages:

1. Add the language to your `hugo.toml`:

```toml
[languages.fr]
  languageCode = "fr-FR"
  languageName = "Français"
  title = "Mon Site"
  weight = 3
```

2. Create translation file at `i18n/fr.toml`:

```toml
[languageSwitcher]
other = "Changer de langue"

[menu.home]
other = "Accueil"
```

3. Create content with language suffix (e.g., `content/posts/my-post.fr.md`)

The language switcher will automatically display all configured languages.

### Customizing Colors

You can override the default colors in your `hugo.toml`:

```toml
[params.colors]
  primary = "#386641"
  secondary = "#6a994e"
  accent = "#a7c957"
  background = "#f2e8cf"
  highlight = "#bc4749"
  
  [params.colors.dark]
    primary = "#7fc97f"
    secondary = "#9ed98e"
    accent = "#c5e8a1"
```

### Customizing the Footer

The theme provides extensive footer customization options. All footer features can be enabled/disabled and styled via configuration.

#### Basic Footer Configuration

Add this to your `hugo.toml`:

```toml
[params.footer]
  # Enable/disable footer sections
  showCopyright = true
  showFooterMenu = true
  showSocialIcons = true
  showHugoCredit = false
  
  # Copyright text with placeholders
  # {year} = current year
  # {site} = site title from hugo.toml
  copyrightText = "© {year} {site}. All rights reserved."
```

**Copyright Text Examples:**

```toml
# Simple copyright
copyrightText = "© {year} {site}"

# With custom message
copyrightText = "© {year} {site}. Made with ❤️"

# Without site name
copyrightText = "© {year} John Doe. All rights reserved."

# Leave empty to show default "Created with ❤️ and Hugo"
copyrightText = ""
```

#### Footer Menu Links

Add custom links to your footer using the same i18n pattern as the main menu:

```toml
# Add footer menu items
[[menus.footer]]
  identifier = 'imprint'
  pageRef = '/impressum'
  weight = 10

[[menus.footer]]
  identifier = 'privacy'
  pageRef = '/privacy'
  weight = 20

[[menus.footer]]
  identifier = 'terms'
  pageRef = '/terms'
  weight = 30
```

**Multilingual Footer Menu:**

For German translations, add to your `hugo.toml`:

```toml
[languages.de.menus]
  [[languages.de.menus.footer]]
    identifier = 'imprint'
    name = 'Impressum'
    pageRef = '/impressum'
    weight = 10
    
  [[languages.de.menus.footer]]
    identifier = 'privacy'
    name = 'Datenschutz'
    pageRef = '/datenschutz'
    weight = 20
```

The theme automatically looks up translations using the identifier. You can add translations in `i18n/en.toml` and `i18n/de.toml`:

```toml
# i18n/en.toml
[footer.menu.imprint]
other = "Imprint"

[footer.menu.privacy]
other = "Privacy"

# i18n/de.toml
[footer.menu.imprint]
other = "Impressum"

[footer.menu.privacy]
other = "Datenschutz"
```

#### Social Media Icons

Add social media links with Font Awesome icons:

```toml
[[params.social]]
  name = "GitHub"
  icon = "fab fa-github"
  url = "https://github.com/yourusername"
  weight = 10

[[params.social]]
  name = "Twitter"
  icon = "fab fa-twitter"
  url = "https://twitter.com/yourusername"
  weight = 20

[[params.social]]
  name = "LinkedIn"
  icon = "fab fa-linkedin"
  url = "https://linkedin.com/in/yourusername"
  weight = 30

[[params.social]]
  name = "Email"
  icon = "fas fa-envelope"
  url = "mailto:your@email.com"
  weight = 40
```

**Supported Icons:**

You can use any Font Awesome 7 Free icon. Common examples:
- `fab fa-github` - GitHub
- `fab fa-twitter` - Twitter / X
- `fab fa-linkedin` - LinkedIn
- `fab fa-mastodon` - Mastodon
- `fab fa-youtube` - YouTube
- `fab fa-instagram` - Instagram
- `fas fa-envelope` - Email
- `fas fa-rss` - RSS Feed

#### Custom Footer Styling

Override footer fonts and colors:

```toml
[params.footer.style]
  # Custom font family (leave empty for theme default)
  fontFamily = "'Roboto', sans-serif"
  
  # Light mode colors
  backgroundColor = "#f5f5f5"
  textColor = "#333333"
  
  # Dark mode colors
  darkBackgroundColor = "#1a1a1a"
  darkTextColor = "#e0e0e0"
```

**Complete Footer Example:**

```toml
[params.footer]
  showCopyright = true
  showFooterMenu = true
  showSocialIcons = true
  copyrightText = "© {year} {site}. Built with Hugo."
  
  [params.footer.style]
    fontFamily = "'Inter', -apple-system, sans-serif"
    backgroundColor = "#f8f9fa"
    textColor = "#495057"
    darkBackgroundColor = "#212529"
    darkTextColor = "#dee2e6"

[[params.social]]
  name = "GitHub"
  icon = "fab fa-github"
  url = "https://github.com/yourusername"
  weight = 10

[[params.social]]
  name = "Email"
  icon = "fas fa-envelope"
  url = "mailto:contact@example.com"
  weight = 20

[[menus.footer]]
  identifier = 'imprint'
  pageRef = '/impressum'
  weight = 10

[[menus.footer]]
  identifier = 'privacy'
  pageRef = '/privacy'
  weight = 20
```

### Disabling Footer Sections

You can selectively disable footer sections:

```toml
[params.footer]
  showCopyright = true       # Show copyright text
  showFooterMenu = false     # Hide footer menu
  showSocialIcons = false    # Hide social icons
  showHugoCredit = false     # Hide "Created with ❤️ and Hugo" message
```

**Note:** If all footer sections are disabled, the footer element will not be rendered at all, avoiding empty space on your pages.

## Dependencies

This theme includes the following third-party libraries:

### Bulma CSS Framework

- **Version**: 1.0.4
- **License**: MIT License
- **Website**: https://bulma.io
- **Copyright**: © 2024 Jeremy Thomas

Bulma is a free, open-source CSS framework based on Flexbox.

### Font Awesome

- **Version**: 7.0 Free
- **License**: Font Awesome Free License
  - Icons: CC BY 4.0 License (https://creativecommons.org/licenses/by/4.0/)
  - Fonts: SIL OFL 1.1 License (https://scripts.sil.org/OFL)
  - Code: MIT License
- **Website**: https://fontawesome.com

Font Awesome Free is a collection of icons and fonts for web development.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

Format: `<type>[optional scope]: <description>`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes

## License

This theme is open source and available under the [GNU General Public License v3.0](LICENSE).

## Credits

- Built with [Hugo](https://gohugo.io/)
- Styled with [Bulma](https://bulma.io/)
- Icons by [Font Awesome](https://fontawesome.com/)

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/ZanderHammer/hugo-minimal-personal-theme/issues) on GitHub.
