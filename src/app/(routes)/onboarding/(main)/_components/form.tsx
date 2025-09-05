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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { formAction } from '../_actions/form'
import { formSchema } from '../_schemas/form'

export function FormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await formAction(values)

    if (result.status === 'success') {
      form.reset()

      redirect(ROUTES.app)
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome" disabled={isSubmitting} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Slug" disabled={isSubmitting} {...field} />
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
