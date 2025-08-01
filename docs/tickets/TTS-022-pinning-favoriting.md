### TASK: Add Pinning/Favoriting Functionality

**Description**:  
Implement a system that allows users to pin or favorite specific tools for quick access. This feature will help users create a personalized experience by keeping their most frequently used tools easily accessible.

**Acceptance Criteria**:  
- Ability to mark/unmark tools as favorites with a single click
- Visual indicator for favorited tools in the sidebar
- Favorites stored persistently in local storage
- Favorites section in the sidebar and/or dashboard
- Drag and drop reordering of favorites (optional)
- Limit on maximum number of favorites (configurable)
- Responsive design for favorites display on all devices
- Keyboard shortcuts for adding/removing favorites
- Animation feedback when adding/removing favorites
- Proper state management across the application

**Implementation Notes**:  
- Use browser's localStorage API for persistence
- Implement a favorites store using Zustand
- Add toggle functionality to tool cards and listings
- Create a dedicated favorites section in the UI
- Consider using the star icon from Lucide React
- Add appropriate animations for user feedback
- Ensure favorites are synchronized across browser tabs
- Test edge cases like reaching maximum favorites limit
- Consider implementing categories for favorites (future enhancement)
- Document the feature for users in helper text

**Files Involved**:
- `src/lib/hooks/useFavorites.ts`
- `src/store/favoritesStore.ts`
- `src/components/ui/FavoriteButton.tsx`
- `src/components/sidebar/FavoritesSection.tsx`
- `src/components/dashboard/FavoriteTools.tsx`
- `src/lib/utils/favorites.ts`
- `src/types/favorites.ts`
