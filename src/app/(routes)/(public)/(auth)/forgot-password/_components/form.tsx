'use client'

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
import { Button } from '@/components/ui/button'

import { formAction } from '../_actions/form'
import { formSchema } from '../_schemas/form'

export function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { status, message } = await formAction(values)

    if (status === 'success') {
      toast.success(message)
      redirect(routes.login)
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
