"use client"

import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 52, text: "text-3xl" },
  }

  const { icon, text } = sizes[size]

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          {/* Lightning bolt shape - representing speed */}
          <rect
            x="4"
            y="4"
            width="44"
            height="44"
            rx="12"
            className="fill-primary"
          />
          {/* Fork and lightning combined */}
          <path
            d="M30 12L18 28H25L22 40L34 24H27L30 12Z"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Small decorative dots */}
          <circle cx="14" cy="14" r="2" fill="white" fillOpacity="0.4" />
          <circle cx="38" cy="38" r="2" fill="white" fillOpacity="0.4" />
        </svg>
      </div>
      <span className={`font-bold tracking-tight ${text}`}>
        <span className="text-foreground">Quick</span>
        <span className="text-primary">Bite</span>
      </span>
    </Link>
  )
}
