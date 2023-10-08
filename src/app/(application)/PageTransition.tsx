"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useContext, useRef, forwardRef } from "react";

// fixes for Framer-motion ExitAnimation
function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="popLayout" custom={{ pathname }}>
      <motion.div
        key={pathname}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};
