import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border-2 border-primary px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-[4px_4px_0px] shadow-primary hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px] hover:shadow-primary",
  {
    variants: {
      variant: {
        default:
          "bg-[image:var(--gradient-primary)] text-secondary",
        secondary:
          "bg-[image:var(--gradient-hero)] text-secondary",
        destructive:
          "bg-[image:var(--gradient-primary)] text-secondary",
        outline: "bg-transparent text-primary border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
