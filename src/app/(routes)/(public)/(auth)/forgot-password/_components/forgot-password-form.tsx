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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { forgotPasswordFormAction } from '../_actions/forgot-password-form'
import { forgotPasswordData } from '../_data'
import { forgotPasswordFormSchema } from '../_schemas/forgot-password-form'

export function ForgotPasswordFormComponent() {
  const router = useRouter()
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>) {
    const { success, message, redirectTo } =
      await forgotPasswordFormAction(values)

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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={forgotPasswordData.form.email.placeholder}
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
            ? forgotPasswordData.form.button.loading
            : forgotPasswordData.form.button.submit}
        </Button>
      </form>
    </Form>
  )
}
