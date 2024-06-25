"use client"

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  phone: z.string().min(9, { message: "Telefone inválido" }),
  subject: z.string().optional()
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simula um pedido de envio de formulário
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simular atraso de rede
    console.log(data);
    // Reseta o formulário com valores padrão para cada campo
    reset({
      email: '',
      name: '',
      phone: '',
      subject: ''
    });
    setIsSubmitting(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000); // Oculta a mensagem após 5 segundos
  };
  

  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Entre em contato conosco!</h3>
                <p className="text-gray-300 text-lg mb-6">Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-auto">
                  <div className="flex flex-col gap-4 justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="text" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-500" placeholder="Seu nome…" {...register('name')} />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                    <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-500" placeholder="Seu email…" {...register('email')} />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <input type="text" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-500" placeholder="Seu telefone…" {...register('phone')} />
                    {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}

                    <textarea className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-500" placeholder="Assunto (opcional)…" {...register('subject')} />
                    <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" disabled={isSubmitting}>Entrar em contato</button>
                  </div>
                  {showSuccessMessage && <p className="text-sm text-gray-400 mt-3">Responderemos o mais breve possível. Obrigado por entrar em contato!</p>}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
