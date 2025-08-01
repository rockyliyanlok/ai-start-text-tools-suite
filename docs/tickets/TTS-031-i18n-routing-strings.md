### TASK: Set Up i18n-Ready Routing and Strings

**Description**:  
Implement internationalization (i18n) infrastructure to prepare the application for multi-language support. This includes setting up i18n-ready routing, string extraction, and translation management system.

**Acceptance Criteria**:  
- i18n framework integrated (e.g., i18next, react-intl)
- Locale-based routing structure implemented
- String extraction system for all UI text
- Default language (English) fully configured
- Language switching mechanism
- Locale detection based on browser settings
- Persistence of language preference
- Support for RTL languages in layout
- Documentation for adding new languages
- Translation workflow documented

**Implementation Notes**:  
- Use i18next with react-i18next for React integration
- Implement locale-based routing with TanStack Start
- Extract all hardcoded strings into translation files
- Create a language switcher component
- Set up locale detection and persistence in local storage
- Consider implementing a translation management system
- Test with pseudo-localization to catch hardcoded strings
- Add support for RTL layouts with appropriate CSS
- Document the translation process for future contributors
- Consider implementing language-specific SEO metadata

**Files Involved**:
- `src/lib/i18n/index.ts` (i18n configuration)
- `src/locales/` (translation files directory)
- `src/components/ui/LanguageSwitcher.tsx`
- `src/hooks/useTranslation.ts`
- `src/middleware.ts` (for locale-based routing)
- `src/config/i18n.ts` (i18n configuration)
- `src/types/i18n.ts` (TypeScript types)
- `scripts/extract-messages.js` (string extraction script)
