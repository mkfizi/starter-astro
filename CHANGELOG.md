# Changelog
All notable changes to this project will be documented chronologically ordered
in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and versioning adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Types of changes:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## [Unreleased]
Put unreleased changes here.

## [0.2.1] - 2025-11-29
### Added
- Upgrade Astro to v5.16.2
- Added icon to nav title.
- Set `sm` breakpoint to start at 480px to handle small high resolution tablets with 2 DPR.
- Add `pointer-events-none` to :class with `hidden` and `invisible`

### Changed
- Change shorthand '@' alpinejs handler to 'x-on:' for clarity.
- Wrap svg icons in a container.
- Update button style to support `stroke-*` for icons.
- Put `dark:` selector to front.
- Image metadata path.

### Removed
- Element attribute in props other that class in favour of `...rest`

## [0.2.0] - 2025-11-12
### Added
- Partials Web and Blog Layout
- Blog components
- Typography components
- Dynamic blog tags.
- Shiki integration.

### Changed
- Update dependancies.
- Revised look and feel.
- Renamed `Metadata.astro` to `Head.astro`.
- Renamed `astro.config.mjs` to `astro.config.ts`.

### Removed
- TailwindCSS config file.
- `site.mjs` file.

## [0.1.0] - 2024-05-08
### Added
- First release.
