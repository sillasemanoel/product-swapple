'use client'

import Link from 'next/link'
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
import { PasswordInput } from '@/components/ui/password-input'
import { Button } from '@/components/ui/button'

import { loginFormAction } from '../_actions/login-form'
import { loginData } from '../_data'
import { loginFormSchema } from '../_schemas/login-form'

export function LoginFormComponent() {
  const router = useRouter()
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const { success, message, redirectTo } = await loginFormAction(values)

    if (success) {
      router.push(redirectTo as string)
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
                  placeholder={loginData.form.email.placeholder}
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  placeholder={loginData.form.password.placeholder}
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between gap-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer"
          >
            {isSubmitting && <LoaderCircle className="animate-spin" />}
            {isSubmitting
              ? loginData.form.button.loading
              : loginData.form.button.submit}
          </Button>

          <Link
            href={loginData.form.forgotPassword.href}
            className="text-primary text-sm underline-offset-4 hover:underline"
          >
            {loginData.form.forgotPassword.label}
          </Link>
        </div>
      </form>
    </Form>
  )
}
