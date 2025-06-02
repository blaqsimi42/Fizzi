import React, { JSX } from "react";
import clsx from "clsx";

type IntrinsicElement = keyof JSX.IntrinsicElements;

type BoundedProps<T extends IntrinsicElement> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Bounded<T extends IntrinsicElement = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<T>) {
  const Comp = as || "section";
  return (
    <Comp className={clsx("px-4 first:pt-10 md:px-6", className)} {...restProps}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
}
