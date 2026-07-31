import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 ease-power3 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-blue text-white shadow-soft hover:bg-brand-blue-dark hover:shadow-card hover:-translate-y-0.5',
        accent:
          'bg-brand-green text-brand-navy-deep shadow-soft hover:bg-brand-green-deep hover:shadow-card hover:-translate-y-0.5',
        outline:
          'border border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white/70',
        outlineDark:
          'border border-brand-blue/30 text-brand-blue bg-transparent hover:bg-brand-blue/5 hover:border-brand-blue',
        ghost: 'text-ink hover:bg-surface-light',
        link: 'text-brand-blue underline-offset-4 hover:underline p-0 h-auto font-medium',
      },
      size: {
        default: 'h-12 px-7 py-3',
        sm: 'h-10 px-5 text-sm',
        lg: 'h-14 px-9 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
