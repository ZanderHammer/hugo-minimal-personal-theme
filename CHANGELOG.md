# Changelog

All notable changes to the Minimal Personal Hugo Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Customizable Footer Section**: Complete footer customization system allowing users to personalize their site footer
  - Copyright text with dynamic `{year}` and `{site}` placeholders
  - Configurable footer menu with i18n support using identifier-based translations (same pattern as main menu)
  - Social media icons with Font Awesome 7 support
  - Custom styling options for fonts, colors, and backgrounds (light and dark mode)
  - Enable/disable individual footer sections (copyright, menu, social icons)
  - Toggleable "Created with ❤️ and Hugo" credit message (separate from copyright)
  - Responsive design optimized for mobile devices
  - Full documentation in README.md with examples
  - Example configuration in `exampleSite/hugo.toml`
  - **Smart footer visibility**: Footer element is automatically hidden when all sections are disabled, preventing empty space on pages

### Configuration Options
- `params.footer.showCopyright` - Toggle copyright display
- `params.footer.showFooterMenu` - Toggle footer menu display
- `params.footer.showSocialIcons` - Toggle social icons display
- `params.footer.showHugoCredit` - Toggle "Created with ❤️ and Hugo" message display
- `params.footer.copyrightText` - Custom copyright text with placeholders
- `params.footer.style.fontFamily` - Custom footer font family
- `params.footer.style.backgroundColor` - Footer background color (light mode)
- `params.footer.style.textColor` - Footer text color (light mode)
- `params.footer.style.darkBackgroundColor` - Footer background color (dark mode)
- `params.footer.style.darkTextColor` - Footer text color (dark mode)
- `params.social[]` - Array of social media profiles with icons
- `menus.footer[]` - Footer menu items with i18n support

### Changed
- Footer partial (`layouts/_partials/footer.html`) completely rewritten for flexibility
- Footer CSS updated with new styles for social icons and menu
- Colors template (`layouts/_partials/head/colors.gohtml`) extended to support footer styling
- i18n files updated with new footer-related translations

### Translations Added
- `followMe` - "Follow me" / "Folge mir"
- `privacy` - "Privacy" / "Datenschutz"
- `footer.menu.imprint` - "Imprint" / "Impressum"
- `footer.menu.privacy` - "Privacy" / "Datenschutz"
- `footer.menu.terms` - "Terms of Service" / "Nutzungsbedingungen"
- `footer.menu.contact` - "Contact" / "Kontakt"

## [0.0.1] - Initial Release

### Added
- Initial theme structure
- Dark mode support
- Multilingual support (English and German)
- Responsive design
- Bulma 1.0.4 CSS framework integration
- Font Awesome 7 icons
- Basic navigation menu
- Post listing and single post layouts
- Custom color palette configuration
