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
import { formSchema } from '../_schemas/form'

export function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { status, message } = await formAction(values)

    if (status === 'success') {
      toast.success(message)
      redirect(routes.login)
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
        <div className="flex items-start gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nome"
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
                    placeholder="Sobrenome"
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

        <p className="text-muted-foreground text-sm">
          Ao continuar, você concorda com nossos{' '}
          <Link
            href={routes.terms}
            className="text-primary underline-offset-4 hover:underline"
          >
            Termos de Serviço
          </Link>{' '}
          e nossa{' '}
          <Link
            href={routes.privacy}
            className="text-primary underline-offset-4 hover:underline"
          >
            Política de Privacidade
          </Link>
          .
        </p>

        <Button
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
