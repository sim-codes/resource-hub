// withResponsive.tsx (Higher-Order Component)
import React from 'react';
import { useResponsive, ResponsiveContextType } from '@/hooks/ResponsiveContext';


export const withResponsive = <P extends object>(
  WrappedComponent: React.ComponentType<P & ResponsiveContextType>
) => {
  return (props: P) => {
    const responsive = useResponsive();
    return <WrappedComponent {...props} {...responsive} />;
  };
};