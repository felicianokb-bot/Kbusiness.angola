'use client'

import { useForm as useFormpree } from '@formspree/react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LucideCheckCircle } from 'lucide-react'

const schema = yup.object({
  nome: yup.string().required('Nome obrigatório!'),
  email: yup.string().required('Email obrigatório').email('Email não valido!'),
  telefone: yup.string().required(),
  empresa: yup.string().required(),
  mensagem: yup.string().min(20, 'Mínimo 20 caracteres!'),
})

export function Form() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'xvgsnsea'
  const [, sendToFormspree] = useFormpree(formspreeId)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  })

  watch()

  return (
    <form
      onSubmit={handleSubmit(sendToFormspree)}
      className="w-full p-8 bg-white"
    >
      {isSubmitted && (
        <div className="w-full h-16 gap-2 flex items-center justify-center mb-4 rounded-lg bg-[#40DDB6] text-white font-bold">
          <LucideCheckCircle size={24} />
          Sua mensagem foi submetida com sucesso!
        </div>
      )}
      <div className=" space-y-2">
        <Label>Nome</Label>
        <Input
          {...register('nome')}
          type="text"
          placeholder="Digite o seu nome"
          className=""
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.nome?.message ? errors?.nome?.message : ''}
          </p>
        }
      </div>
      <div className=" space-y-2">
        <Label>Email</Label>
        <Input
          {...register('email')}
          type="text"
          placeholder="Digite o email"
          className=""
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.email?.message ? errors?.email?.message : ''}
          </p>
        }
      </div>
      <div className=" space-y-2">
        <Label>Telefone</Label>
        <Input
          {...register('telefone')}
          type="text"
          placeholder="Digite o contacto"
          className=""
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.telefone?.message ? errors?.telefone?.message : ''}
          </p>
        }
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full space-y-2">
          <Label htmlFor="contact-perfil">Empresa</Label>
          <Input
            {...register('empresa')}
            type="text"
            placeholder="Digite o contacto"
            className=""
            
          />
          {
            <p className="text-red-500 h-4 text-sm">
              {errors?.empresa?.message
                ? errors?.empresa?.message
                : ''}
            </p>
          }
        </div>
      </div>

      <div className="mb-4 space-y-2">
        <Label>Mensagem</Label>
        <Textarea
          {...register('mensagem')}
          className="h-28"
          placeholder="Digite sua mensagem"
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.mensagem?.message ? errors?.mensagem?.message : ''}
          </p>
        }
      </div>
      <Button className="w-full" size="lg">
        {isSubmitting ? (
          <span className="inline-block size-5 border-2 border-primary border-t-transparent rounded-full animate-spin" aria-label="Carregando" />
        ) : (
          'Enviar'
        )}
      </Button>
    </form>
  )
}
