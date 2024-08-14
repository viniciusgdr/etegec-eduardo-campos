'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full px-4 py-16">
      <h1 className="text-2xl font-semibold text-white text-center pb-4">
        Uma homenagem ao Governador Eduardo Campos
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full md:w-[70%] rounded-xl shadow-2xl p-3 bg-base-100">
          <p className="text-lg text-gray-700 mb-4">
            Eduardo Henrique Accioly Campos foi um político brasileiro, economista e administrador público, nascido em 10 de agosto de 1965, no Recife, Pernambuco. Ele se destacou como uma das figuras mais proeminentes da política brasileira nas décadas de 1990 e 2000, exercendo importantes cargos, como Ministro da Ciência e Tecnologia, Deputado Federal e Governador de Pernambuco.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Campos era neto do ex-governador Miguel Arraes, uma das figuras mais respeitadas da política nordestina, e desde cedo foi envolvido no ambiente político. Formado em Economia pela Universidade Federal de Pernambuco, Eduardo Campos iniciou sua carreira política em 1990, aos 25 anos, quando foi eleito deputado estadual. Em 1994, foi eleito deputado federal, cargo que exerceu por três mandatos consecutivos.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Em 2004, foi nomeado Ministro da Ciência e Tecnologia pelo então presidente Luiz Inácio Lula da Silva, destacando-se por sua gestão e iniciativas voltadas à inovação e ao desenvolvimento tecnológico. No entanto, sua maior projeção nacional ocorreu quando foi eleito governador de Pernambuco em 2006, sendo reeleito em 2010 com um percentual recorde de votos. Seu governo foi marcado por significativas melhorias na educação, na saúde e na infraestrutura do estado, consolidando-o como uma liderança política respeitada em todo o Brasil.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Eduardo Campos também foi um dos fundadores do Partido Socialista Brasileiro (PSB) e, em 2014, lançou sua candidatura à Presidência da República, apresentando-se como uma alternativa ao modelo político vigente. Sua campanha foi interrompida tragicamente no dia 13 de agosto de 2014, quando o avião em que estava caiu em Santos, São Paulo, levando à sua morte prematura.
          </p>
          <p className="text-lg text-gray-700">
            Campos deixou um legado de renovação na política brasileira e é lembrado por seu espírito inovador, dedicação ao serviço público e compromisso com o desenvolvimento social e econômico do Brasil.
          </p>
        </div>
        <div className="w-full md:w-[30%] rounded-xl shadow-2xl p-3 bg-base-100">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Eduardo_Campos_%28cropped%29.jpg/345px-Eduardo_Campos_%28cropped%29.jpg'}
              width={300}
              height={300}
              alt="Governador Foto Eduardo Campos Google Pesquisar"
            className="rounded-2xl shadow-2xl"   
            />
            <p className="">
              Eduardo Campos em março de 2013. <Link className="link" href='https://pt.wikipedia.org/wiki/Eduardo_Campos'>Fonte: Wikipedia</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
