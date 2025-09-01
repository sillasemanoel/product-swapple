'use client'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

import { routes } from '@/config'
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

import { formAction } from '../_actions/form'
import { formSchema } from '../_schemas/login-form'

export function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { status, message } = await formAction(values)

    if (status === 'success') {
      redirect(routes.app)
    } else if (status === 'warning') {
      toast.warning(message)
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
                  placeholder="E-mail"
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
                  placeholder="Senha"
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
            {isSubmitting ? 'Carregando' : 'Continuar'}
          </Button>

          <Link
            href={routes.forgotPassword}
            className="text-primary text-sm underline-offset-4 hover:underline"
          >
            Esqueci a senha
          </Link>
        </div>
      </form>
    </Form>
  )
}
