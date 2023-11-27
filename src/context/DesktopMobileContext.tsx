import React, { createContext, useEffect, useState, ReactNode } from "react";

interface DesktopMobileProviderProps {
  children: ReactNode;
}

const DesktopMobileContext = createContext({
  isDesktop: false,
  setIsDesktop: (isDesktop: boolean) => {},
});

const DesktopMobileProvider: React.FC<DesktopMobileProviderProps> = ({
  children,
}) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 820);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DesktopMobileContext.Provider value={{ isDesktop, setIsDesktop }}>
      {children}
    </DesktopMobileContext.Provider>
  );
};

export { DesktopMobileProvider, DesktopMobileContext };
