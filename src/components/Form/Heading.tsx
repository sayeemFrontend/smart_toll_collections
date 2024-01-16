import React from 'react'

interface PropsType {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  title?: string
  className?: string
}

export default function Heading({ size = 'xs', title, className }: PropsType) {
  const classObject = {
    xxxl: 'text-4xl font-bold',
    xxl: 'text-2xl font-bold',
    xl: 'text-xl font-bold',
    lg: 'text-lg font-semibold',
    md: 'text-base font-medium',
    sm: 'text-sm font-medium',
    xs: 'text-xs font-medium',
  }
  return <p className={`${classObject[size]} ${className}`}>{title}</p>
}
