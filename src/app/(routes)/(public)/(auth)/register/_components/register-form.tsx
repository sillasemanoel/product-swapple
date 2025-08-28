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

import { registerFormAction } from '../_actions/register-form'
import { registerData } from '../_data'
import { registerFormSchema } from '../_schemas/register-form'

export function RegisterFormComponent() {
  const router = useRouter()
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    const { success, message, redirectTo } = await registerFormAction(values)

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
        <div className="flex items-start gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={registerData.form.firstName.placeholder}
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={registerData.form.lastName.placeholder}
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={registerData.form.email.placeholder}
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
                  placeholder={registerData.form.password.placeholder}
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
                  placeholder={registerData.form.confirmPassword.placeholder}
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-muted-foreground text-sm">
          {registerData.form.termsAndPrivacy.prefix}{' '}
          <Link
            href={registerData.form.termsAndPrivacy.termsHref}
            className="text-primary underline-offset-4 hover:underline"
          >
            {registerData.form.termsAndPrivacy.termsLabel}
          </Link>{' '}
          {registerData.form.termsAndPrivacy.privacyConnector}{' '}
          <Link
            href={registerData.form.termsAndPrivacy.privacyHref}
            className="text-primary underline-offset-4 hover:underline"
          >
            {registerData.form.termsAndPrivacy.privacyLabel}
          </Link>
          {registerData.form.termsAndPrivacy.suffix}
        </p>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-fit cursor-pointer"
        >
          {isSubmitting && <LoaderCircle className="animate-spin" />}
          {isSubmitting
            ? registerData.form.button.loading
            : registerData.form.button.submit}
        </Button>
      </form>
    </Form>
  )
}
