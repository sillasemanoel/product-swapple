'use client'

import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { PasswordInput } from '@/components/ui/password-input'
import { Button } from '@/components/ui/button'

import { resetPasswordFormAction } from '../_actions/reset-password-form'
import { resetPasswordData } from '../_data'
import { resetPasswordFormSchema } from '../_schemas/reset-password-form'

export function ResetPasswordFormComponent() {
  const router = useRouter()
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof resetPasswordFormSchema>) {
    const { success, message, redirectTo } =
      await resetPasswordFormAction(values)

    if (success) {
      if (message) toast.success(message)
      if (redirectTo) router.push(redirectTo)
    } else {
      toast.error(message)
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  placeholder={resetPasswordData.form.newPassword.placeholder}
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  placeholder={
                    resetPasswordData.form.confirmPassword.placeholder
                  }
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-fit cursor-pointer"
        >
          {isSubmitting && <LoaderCircle className="animate-spin" />}
          {isSubmitting
            ? resetPasswordData.form.button.loading
            : resetPasswordData.form.button.submit}
        </Button>
      </form>
    </Form>
  )
}
