import React from "react";
import clsx from "clsx";

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type BoundedProps<T extends React.ElementType> = {
  className?: string;
  children?: React.ReactNode;
} & AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, { className?: string; children?: React.ReactNode }>>;

export function Bounded<T extends React.ElementType = "section">({
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

