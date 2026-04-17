/**
 * Responsive Design System Configuration
 * 
 * This file documents the responsive breakpoints and design patterns
 * used throughout the portfolio application.
 */

export const BREAKPOINTS = {
  xs: 0, // Extra small (mobile)
  sm: 600, // Small (tablet portrait)
  md: 960, // Medium (tablet landscape)
  lg: 1280, // Large (desktop)
  xl: 1920, // Extra large (large desktop)
} as const

export const DEVICE_TYPES = {
  SMALL_MOBILE: 'small-mobile', // 0px - 599px
  TABLET_PORTRAIT: 'tablet-portrait', // 600px - 959px
  TABLET_LANDSCAPE: 'tablet-landscape', // 960px - 1279px
  DESKTOP: 'desktop', // 1280px - 1919px
  LARGE_DESKTOP: 'large-desktop', // 1920px+
} as const

export const RESPONSIVE_VALUES = {
  // Spacing
  padding: {
    smallMobile: 1, // 1 * 8px
    tabletPortrait: 2, // 2 * 8px
    tabletLandscape: 3, // 3 * 8px
    desktop: 3,
    largeDesktop: 3,
  },

  margin: {
    smallMobile: 0.5, // 4px
    tabletPortrait: 1, // 8px
    tabletLandscape: 1.5, // 12px
    desktop: 1.5,
    largeDesktop: 2, // 16px
  },

  // Gaps between elements
  gap: {
    smallMobile: 1.875, // 15px
    tabletPortrait: 2, // 16px
    tabletLandscape: 2.5, // 20px
    desktop: 2.5,
    largeDesktop: 3, // 24px
  },

  // Max content widths
  maxWidth: {
    smallMobile: '100%',
    tabletPortrait: '100%',
    tabletLandscape: '100%',
    desktop: '1200px',
    largeDesktop: '1400px',
  },

  // Grid columns for content cards
  gridColumns: {
    smallMobile: 1,
    tabletPortrait: 2,
    tabletLandscape: 2,
    desktop: 3,
    largeDesktop: 4,
  },

  // Navigation
  topBarHeight: {
    smallMobile: 64, // pixels
    tabletPortrait: 64,
    tabletLandscape: 0, // Hidden on tablet landscape
    desktop: 0, // Hidden on desktop
    largeDesktop: 0,
  },

  bottomNavHeight: {
    smallMobile: 64, // pixels
    tabletPortrait: 0, // Hidden
    tabletLandscape: 0,
    desktop: 0,
    largeDesktop: 0,
  },

  sidebarWidth: {
    smallMobile: 0,
    tabletPortrait: 0,
    tabletLandscape: 280, // pixels
    desktop: 280,
    largeDesktop: 320,
  },
} as const

/**
 * Design Strategy:
 * 
 * Mobile-First Approach:
 * - Start with small mobile as the base (360px width)
 * - Layer up improvements for each larger breakpoint
 * - Use CSS custom properties for easy theming
 * 
 * Layout Strategy by Breakpoint:
 * 
 * 1. Small Mobile (0-599px):
 *    - Single column layout
 *    - Top app bar
 *    - Bottom navigation bar (vertical items)
 *    - Full-width cards
 *    - Tab-based content switching
 * 
 * 2. Tablet Portrait (600-959px):
 *    - Single column with more padding
 *    - Top app bar remains
 *    - Can show more content at once
 *    - 2-column grid for some elements
 *    - Bottom navigation remains
 * 
 * 3. Tablet Landscape (960-1279px):
 *    - Sidebar navigation appears (left side)
 *    - Top app bar hidden (title in sidebar)
 *    - Main content takes remaining space
 *    - 2-3 column grid layouts available
 * 
 * 4. Desktop (1280-1919px):
 *    - Fixed width sidebar
 *    - Main content area centered
 *    - Multiple columns for project/skill cards
 *    - Centered max-width container
 * 
 * 5. Large Desktop (1920px+):
 *    - Wider sidebar
 *    - Larger max-width container
 *    - 4-column layouts
 */

export const LAYOUT_STRATEGY = {
  // Where to show each navigation component
  navigation: {
    topBar: {
      shown: true,
      breakpoint: 'below md', // Hidden on md and above
    },
    bottomNav: {
      shown: true,
      breakpoint: 'below sm', // Only on small mobile
    },
    sidebar: {
      shown: true,
      breakpoint: 'md and above', // Visible on tablet landscape and up
    },
  },

  // Content display strategy
  content: {
    allSectionsVisible: 'md and above', // Show all tabs at once on tablet landscape
    tabBasedSwitching: 'below md', // Switch between tabs on smaller screens
  },

  // Recommended grid patterns
  gridPatterns: {
    projectCards: {
      smallMobile: 1,
      tabletPortrait: 2,
      tabletLandscape: 2,
      desktop: 3,
      largeDesktop: 4,
    },
    skillCards: {
      smallMobile: 1,
      tabletPortrait: 3,
      tabletLandscape: 4,
      desktop: 5,
      largeDesktop: 6,
    },
  },
} as const

/**
 * Implementation Guide:
 * 
 * 1. Use the useResponsive() hook for responsive behavior:
 *    import { useResponsive } from '@/hooks/useResponsive'
 *    const { isDesktop, getResponsiveValue, showSidebar } = useResponsive()
 * 
 * 2. Use MUI's sx prop with responsive values:
 *    sx={{ px: { xs: 1, sm: 2, md: 3, lg: 3 } }}
 * 
 * 3. Use CSS custom properties for consistent theming:
 *    var(--content-padding-mobile)
 *    var(--content-gap-mobile)
 * 
 * 4. Use className utilities from App.css:
 *    container-responsive
 *    flex-responsive
 *    grid-responsive
 */
