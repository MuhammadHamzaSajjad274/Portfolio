"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface PreloaderContextValue {
  isComplete: boolean;
}

const PreloaderContext = createContext<PreloaderContextValue>({
  isComplete: false,
});

const PreloaderCompleteContext = createContext<(() => void) | null>(null);

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <PreloaderContext.Provider value={{ isComplete }}>
      <PreloaderCompleteContext.Provider value={() => setIsComplete(true)}>
        {children}
      </PreloaderCompleteContext.Provider>
    </PreloaderContext.Provider>
  );
}

export function usePreloader(): PreloaderContextValue {
  return useContext(PreloaderContext);
}

export function useMarkPreloaderComplete(): () => void {
  const markComplete = useContext(PreloaderCompleteContext);
  if (!markComplete) {
    throw new Error(
      "useMarkPreloaderComplete must be used within PreloaderProvider",
    );
  }
  return markComplete;
}
