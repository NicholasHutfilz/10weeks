"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);
  
  // Set first render to false after mount
  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  
  return (
    <AnimatePresence mode="wait" initial={isFirstRender}>
      <div key={pathname} className="w-full h-full">
        {children}
      </div>
    </AnimatePresence>
  );
} 