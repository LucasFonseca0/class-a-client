import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Área superior: Blocos */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1º bloco */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Termos</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Política de Privacidade</a>
            </div>
          </div>

          {/* Bloco de Contato */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Contato</h6>
            <ul className="text-sm text-gray-600">
              <li className="mb-2">Rua Exemplo, 123, Bairro, Cidade, Estado</li>
              <li className="mb-2">(11) 1234-5678</li>
              <li className="mb-2">contato@exemplo.com</li>
              <li className="mb-2">Atendimento: Seg-Sex, 9h-18h</li>
            </ul>
          </div>

          {/* 2º bloco */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Serviços</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Criação de Sites</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Gestão de Tráfego</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Design Gráfico</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Consultoria</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">outros</a>
              </li>
            </ul>
          </div>

          {/* 3º bloco */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Empresa</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#hero" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Início</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Sobre Nós</a>
              </li>
              <li className="mb-2">
                <a href="#team" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Equipe</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contato</a>
              </li>
            </ul>
          </div>

          {/* 4º bloco */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Assine nossa Newsletter</h6>
            <p className="text-sm text-gray-600 mb-4">Receba as últimas novidades e artigos diretamente no seu e-mail.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Seu email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Assinar">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </footer>
  )
}
