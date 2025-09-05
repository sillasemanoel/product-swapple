'use client'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

import { ROUTES } from '@/config'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { PasswordInput } from '@/components/ui/password-input'
import { Button } from '@/components/ui/button'

import { formAction } from '../_actions/form'
import { formSchema } from '../_schemas/form'

export function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const token =
      new URLSearchParams(window.location.search).get('token') ?? undefined

    if (!token) {
      redirect(ROUTES.forgotPassword)
    }

    const result = await formAction({
      ...values,
      token,
    })

    if (result.status === 'success') {
      toast.success(result.message)

      form.reset()

      redirect(ROUTES.login)
    } else {
      toast.error(result.message)
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
                  placeholder="Nova Senha"
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
                  placeholder="Confirmar senha"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size="sm"
          type="submit"
          disabled={isSubmitting}
          className="w-fit cursor-pointer"
        >
          {isSubmitting && <LoaderCircle className="animate-spin" />}
          {isSubmitting ? 'Carregando' : 'Continuar'}
        </Button>
      </form>
    </Form>
  )
}
