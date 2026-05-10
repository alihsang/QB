"use client"

import Link from "next/link"
import { Zap } from "lucide-react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 16, text: "text-lg" },
    md: { icon: 20, text: "text-xl" },
    lg: { icon: 28, text: "text-2xl" },
  }

  const { icon, text } = sizes[size]

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="bg-primary rounded-xl p-1.5 flex items-center justify-center">
        <Zap className="text-primary-foreground fill-primary-foreground" style={{ width: icon, height: icon }} />
      </div>
      <span className={`font-bold ${text} tracking-tight`}>
        Quick<span className="text-primary">Bite</span>
      </span>
    </Link>
  )
}
