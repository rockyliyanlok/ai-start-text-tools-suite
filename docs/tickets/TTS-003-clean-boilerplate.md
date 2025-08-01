### TASK: Clean Up Demo Content and Unused Boilerplate

**Description**:  
Remove the default demo content and unused boilerplate code from the TanStack Start project to create a clean foundation for the Text Tools Suite. This will ensure we have a minimal starting point without unnecessary code or dependencies.

**Acceptance Criteria**:  
- All demo routes and components moved under /example
- Unused dependencies identified and removed
- Default styling cleaned up
- Icons for our application added
- Project builds and runs without errors after cleanup
- No references to demo content remain

**Implementation Notes**:  
- Keep essential TanStack Start configuration
- Preserve the routing structure but remove demo routes
- Update the main layout component to match our design needs
- Document any important configuration that was preserved

**Files Involved**:
- `src/routes/` (remove demo routes)
- `src/components/` (clean up demo components)
- `src/styles/` (reset default styling)
- `src/main.tsx` (update providers if needed)
- `package.json` (review and clean dependencies)
