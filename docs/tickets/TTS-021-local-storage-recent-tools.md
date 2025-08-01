### TASK: Implement Local Storage for Recently Used Tools

**Description**:  
Create a system to track and store recently used tools in the browser's local storage, allowing users to quickly access their most frequently used tools without having to navigate through the sidebar.

**Acceptance Criteria**:  
- Recently used tools tracked and stored in local storage
- Limit of 10 most recent tools maintained
- Automatic updates when tools are accessed
- Recently used tools section in dashboard/homepage
- Clear visual representation with tool icons and names
- One-click access to recent tools
- Option to clear recent tools history
- Persistence across browser sessions
- Fallback for browsers with local storage disabled
- Responsive design across all device sizes

**Implementation Notes**:  
- Use browser's localStorage API with appropriate fallbacks
- Create a dedicated store for managing recent tools state
- Implement hooks for easy access to recent tools data
- Add middleware to track tool usage automatically
- Consider using a custom hook for localStorage interaction
- Ensure proper serialization/deserialization of data
- Add appropriate error handling for storage limits
- Consider privacy implications and add relevant documentation
- Test across different browsers and with localStorage disabled

**Files Involved**:
- `src/lib/hooks/useRecentTools.ts`
- `src/lib/utils/storage.ts`
- `src/components/dashboard/RecentTools.tsx`
- `src/components/ui/RecentToolCard.tsx`
- `src/store/recentToolsStore.ts` (if using Zustand)
- `src/types/recent-tools.ts`
- `src/routes/index.tsx` (homepage/dashboard)
