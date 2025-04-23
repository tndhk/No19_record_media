'use client'

import React, { useState, memo, useCallback } from 'react'
import { cn } from '@/lib/utils'

export type RadioOption = {
  value: string
  label: string
}

type RadioGroupProps = {
  options: RadioOption[]
  name: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
  error?: string
}

const RadioGroupComponent = ({
  options,
  name,
  defaultValue = '',
  onChange,
  className,
  error
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  // useCallbackでメモ化して関数が再生成されるのを防ぐ
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSelectedValue(value)
    onChange?.(value)
  }, [onChange])

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              'flex items-center space-x-2 cursor-pointer rounded-md border p-3 transition-colors',
              selectedValue === option.value
                ? 'border-primary bg-primary/10'
                : 'border-input'
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              className="sr-only"
            />
            <div
              className={cn(
                'h-4 w-4 rounded-full border flex items-center justify-center',
                selectedValue === option.value
                  ? 'border-primary'
                  : 'border-muted-foreground'
              )}
            >
              {selectedValue === option.value && (
                <div className="h-2 w-2 rounded-full bg-primary" />
              )}
            </div>
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

// memoでコンポーネントをラップして不要な再レンダリングを防止
export const RadioGroup = memo(RadioGroupComponent) 