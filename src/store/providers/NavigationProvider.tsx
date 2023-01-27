import { createContext, useMemo, useRef } from "react";
import { INavigationContext } from "src/interfaces/global";

export const NavigationContext = createContext<INavigationContext>({
  homeSection: null,
  skillSection: null,
  portoSection: null,
  contactSection: null,
});

const NavigationProvider = ({ children }: { children: JSX.Element }) => {
  const homeSection = useRef<HTMLInputElement | null>(null);
  const skillSection = useRef<HTMLInputElement | null>(null);
  const portoSection = useRef<HTMLInputElement | null>(null);
  const contactSection = useRef<HTMLInputElement | null>(null);

  const navigations = useMemo(() => {
    return {
      homeSection,
      skillSection,
      portoSection,
      contactSection,
    };
  }, []);

  return (
    <NavigationContext.Provider value={navigations}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
