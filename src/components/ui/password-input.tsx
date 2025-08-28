'use client'

import * as React from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof Input>, 'type'> {
  showLabel?: string
  hideLabel?: string
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className,
      showLabel = 'Mostrar senha',
      hideLabel = 'Ocultar senha',
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const isValueEmpty =
      props.value === '' || props.value === undefined || props.value === null
    const disabled = props.disabled || isValueEmpty

    function toggle() {
      if (disabled) return
      setShowPassword((prev) => !prev)
    }

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('hide-password-toggle pr-10', className)}
          ref={ref}
          aria-invalid={props['aria-invalid']}
          autoComplete={props.autoComplete ?? 'current-password'}
          {...props}
        />
        <Button
          type="button"
          variant="link"
          size="sm"
          className="absolute top-0 right-0 h-full cursor-pointer px-3 py-2 hover:bg-transparent"
          onClick={toggle}
          disabled={disabled}
          aria-label={showPassword ? hideLabel : showLabel}
          aria-pressed={showPassword}
        >
          {showPassword && !disabled ? (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? hideLabel : showLabel}
          </span>
        </Button>

        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    )
  },
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
