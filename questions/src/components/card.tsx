import * as React from "react"


const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className}, ref) => (
  <div
    ref={ref}
    className="flex items-center p-6 pt-0"
  />
))
CardFooter.displayName = "CardFooter"

export {  CardFooter }
