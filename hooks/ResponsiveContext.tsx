import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const breakpoints = {
  xs: 360,  // Small phones
  sm: 390,  // Medium phones
  md: 768,  // Large phones and tablets
  lg: 1024, // Small laptops
  xl: 1280, // Desktops
};

type BreakpointKey = keyof typeof breakpoints;

export interface ResponsiveContextType {
  windowWidth: number;
  isExtraSmallPhone: boolean;
  isSmallPhone: boolean;
  isMediumPhone: boolean;
  isLargePhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isGreaterThan: (breakpoint: BreakpointKey) => boolean;
  isLessThan: (breakpoint: BreakpointKey) => boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

export const ResponsiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const handleDimensionsChange = ({ window }: { window: { width: number } }) => {
      setWindowWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', handleDimensionsChange);

    return () => subscription.remove();
  }, []);

  const isGreaterThan = (breakpoint: BreakpointKey) => windowWidth > breakpoints[breakpoint];
  const isLessThan = (breakpoint: BreakpointKey) => windowWidth < breakpoints[breakpoint];

  const value: ResponsiveContextType = {
    windowWidth,
    isExtraSmallPhone: windowWidth < breakpoints.xs,
    isSmallPhone: windowWidth >= breakpoints.xs && windowWidth < breakpoints.sm,
    isMediumPhone: windowWidth >= breakpoints.sm && windowWidth < breakpoints.md,
    isLargePhone: windowWidth >= breakpoints.md && windowWidth < breakpoints.lg,
    isTablet: windowWidth >= breakpoints.lg && windowWidth < breakpoints.xl,
    isDesktop: windowWidth >= breakpoints.xl,
    isGreaterThan,
    isLessThan,
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};
