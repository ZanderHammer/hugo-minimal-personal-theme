# GitHub Copilot Instructions

## Language & Communication

- **All project content must be in English**
  - Code comments must be in English
  - Documentation files (README, guides, etc.) must be in English
  - Git commit messages must be in English
  - Issue and PR descriptions must be in English
  - Code variable names and function names must be in English
- Use clear, professional English throughout the project

## Git Commit Guidelines

This project follows the **Conventional Commits** specification for commit messages.

### Commit Message Format

Each commit message MUST be structured as follows:

```
<type>[optional scope][optional !]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature for the user
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

### Scope

A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parentheses, e.g., `fix(parser):`, `feat(header):`, `style(css):`.

### Breaking Changes

Breaking changes MUST be indicated by:
- Adding `!` immediately before the `:` in the type/scope prefix, e.g., `feat!: remove support for legacy format`
- OR by adding a footer with `BREAKING CHANGE:` followed by a description

### Examples

```
feat: add dark mode toggle to header
fix(pagination): correct page number calculation
docs: update README with installation instructions
feat!: redesign navigation structure
fix(footer): resolve alignment issue on mobile devices

BREAKING CHANGE: footer layout now requires Bulma 1.0.4+
```

### Rules

- Commit messages MUST be in English
- The description MUST immediately follow the colon and space after the type/scope prefix
- The description is a short summary of the code changes
- A longer commit body MAY be provided after the short description, separated by one blank line
- Footers MAY be provided one blank line after the body
- Types other than `feat` and `fix` MAY be used as needed

## Project Configuration

- This project is based on **Hugo 0.152.2**
- **Bulma 1.0.4** is used - this should always be taken into account when generating code!
- For icons, use **Font Awesome Free version 7**. It is stored under "assets/fontawesome/"
- **Never include Google Fonts from the cloud** - all fonts must be hosted locally!

## Theme Development

- The theme is being developed from scratch and is called **"minimal-personal"**
- **No personal blog content** should be included in the theme
- Keep the theme generic and reusable for other users

## Color Palette

The theme uses the following color palette:

- **Primary Dark Green**: `#386641`
- **Medium Green**: `#6a994e`
- **Light Green**: `#a7c957`
- **Cream/Beige**: `#f2e8cf`
- **Red Accent**: `#bc4749`

These colors should be used consistently throughout the theme for maintaining visual coherence.

## CSS Guidelines

### General Principles
- **Always try to use existing CSS classes first** before creating new ones
- Leverage Bulma's utility classes and components whenever possible
- Only create custom CSS when existing classes cannot achieve the desired result
- Keep custom CSS minimal and maintainable

### Code Organization
- Use clear section separators with meaningful headers
- Group related styles together logically
- Follow this structure order:
  1. CSS Variables & Theme
  2. Base Styles & Layout
  3. Header & Navigation
  4. Footer
  5. Page-specific Styles
  6. Component Styles
  7. Utility Classes
  8. Responsive Design (Media Queries)

### Best Practices
- Remove redundant comments (e.g., "Styles", "Styling")
- Use consistent indentation and spacing
- Group dark mode overrides directly after their light mode counterparts
- Place all media queries at the end of the file
- Use CSS custom properties (variables) for repeated values
- Maintain consistent naming conventions

## Icons and Emojis

- **Prefer Font Awesome icons over emojis** whenever possible
- Use Font Awesome Free version 7 from "assets/fontawesome/"
- Only use emojis when Font Awesome doesn't provide a suitable alternative
- Ensure consistent icon usage throughout the theme

## User Interaction

- **Apply hover effects only to clickable elements** (links, buttons, interactive components)
- Non-clickable elements should not have hover effects to avoid user confusion
- Ensure clear visual feedback for interactive elements

## Responsive Design

- **The site must be optimized for both desktop and mobile devices**
- Use Bulma's responsive classes (e.g., `is-mobile`, `is-tablet`, `is-desktop`)
- Test layouts on different screen sizes
- Ensure touch-friendly interfaces on mobile devices
- Use responsive typography and spacing
- Consider mobile-first approach when designing components