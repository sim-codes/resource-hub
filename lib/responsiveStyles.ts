//  (Utility functions for responsive styles)
import { useResponsive } from "@/hooks/ResponsiveContext";

export const useResponsiveStyles = () => {
  const responsive = useResponsive();

  const getFontSizeClass = () => {
    if (responsive.isExtraSmallPhone) return 'text-lg';
    if (responsive.isSmallPhone) return 'text-xl';
    if (responsive.isMediumPhone) return 'text-2xl';
    if (responsive.isLargePhone || responsive.isTablet) return 'text-3xl';
    return 'text-4xl';
  };

  const getTabFontSizeClass = () => {
    if (responsive.isExtraSmallPhone) return 'text-xs';
    if (responsive.isSmallPhone) return 'text-sm';
    if (responsive.isMediumPhone) return 'text-base';
    if (responsive.isLargePhone || responsive.isTablet) return 'text-lg';
    return 'text-xl';
  };

  const getContainerPaddingClass = () => {
    if (responsive.isExtraSmallPhone || responsive.isSmallPhone) return 'p-2';
    if (responsive.isMediumPhone) return 'p-3';
    return 'p-4';
  };

  return {
    getFontSizeClass,
    getTabFontSizeClass,
    getContainerPaddingClass,
  };
};
