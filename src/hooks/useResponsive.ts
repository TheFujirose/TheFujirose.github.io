import { useMediaQuery, useTheme } from '@mui/material'
import { RESPONSIVE_VALUES } from '../config/responsiveConfig'

/**
 * Custom hook for responsive design utilities
 * Uses MUI's breakpoints for consistency
 * Breakpoints: xs (0), sm (600), md (960), lg (1280), xl (1920)
 */
export const useResponsive = () => {
  const theme = useTheme()

  // Individual breakpoints
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTabletPortrait = useMediaQuery(theme.breakpoints.only('sm'))
  const isTabletLandscape = useMediaQuery(theme.breakpoints.only('md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('xl'))

  // Combined conditions
  const isMobile = isSmallMobile
  const isTablet = isTabletPortrait || isTabletLandscape
  const isLargeScreen = isDesktop || isLargeDesktop

  // Breakpoint groups
  const breakpoint = {
    isSmallMobile,
    isTabletPortrait,
    isTabletLandscape,
    isDesktop,
    isLargeDesktop,
  }

  // Responsive sizing helpers
  const getResponsiveValue = <T,>(
    smallMobile: T,
    tabletPortrait: T,
    tabletLandscape: T,
    desktop: T,
    largeDesktop: T,
  ): T => {
    if (isLargeDesktop) return largeDesktop
    if (isDesktop) return desktop
    if (isTabletLandscape) return tabletLandscape
    if (isTabletPortrait) return tabletPortrait
    return smallMobile
  }

  // Common responsive patterns
  const getLayoutDirection = () => isDesktop || isTabletLandscape ? 'row' : 'column'
  
  const getPadding = () => 
    getResponsiveValue(
      RESPONSIVE_VALUES.padding.smallMobile,
      RESPONSIVE_VALUES.padding.tabletPortrait,
      RESPONSIVE_VALUES.padding.tabletLandscape,
      RESPONSIVE_VALUES.padding.desktop,
      RESPONSIVE_VALUES.padding.largeDesktop,
    )

  const getMargin = () => 
    getResponsiveValue(
      RESPONSIVE_VALUES.margin.smallMobile,
      RESPONSIVE_VALUES.margin.tabletPortrait,
      RESPONSIVE_VALUES.margin.tabletLandscape,
      RESPONSIVE_VALUES.margin.desktop,
      RESPONSIVE_VALUES.margin.largeDesktop,
    )
  
  const getGap = () => 
    getResponsiveValue(
      RESPONSIVE_VALUES.gap.smallMobile,
      RESPONSIVE_VALUES.gap.tabletPortrait,
      RESPONSIVE_VALUES.gap.tabletLandscape,
      RESPONSIVE_VALUES.gap.desktop,
      RESPONSIVE_VALUES.gap.largeDesktop,
    )
  
  const getMaxWidth = () =>
    getResponsiveValue(
      RESPONSIVE_VALUES.maxWidth.smallMobile,
      RESPONSIVE_VALUES.maxWidth.tabletPortrait,
      RESPONSIVE_VALUES.maxWidth.tabletLandscape,
      RESPONSIVE_VALUES.maxWidth.desktop,
      RESPONSIVE_VALUES.maxWidth.largeDesktop,
    )
  
  const getCardColumns = () =>
    getResponsiveValue(
      RESPONSIVE_VALUES.gridColumns.smallMobile,
      RESPONSIVE_VALUES.gridColumns.tabletPortrait,
      RESPONSIVE_VALUES.gridColumns.tabletLandscape,
      RESPONSIVE_VALUES.gridColumns.desktop,
      RESPONSIVE_VALUES.gridColumns.largeDesktop,
    )

  // Navigation helpers
  const showSidebar = isDesktop || isTabletLandscape
  const showBottomNav = isSmallMobile
  const showTopBar = !isDesktop && !isTabletLandscape

  return {
    // Individual breakpoints
    breakpoint,
    isSmallMobile,
    isTabletPortrait,
    isTabletLandscape,
    isDesktop,
    isLargeDesktop,

    // Combined conditions
    isMobile,
    isTablet,
    isLargeScreen,

    // Responsive helpers
    getResponsiveValue,
    getLayoutDirection,
    getPadding,
    getMargin,
    getGap,
    getMaxWidth,
    getCardColumns,

    // Navigation visibility
    showSidebar,
    showBottomNav,
    showTopBar,
  }
}
