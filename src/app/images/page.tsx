import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center my-5 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-2xl text-white">
            Imagem 1
          </h2>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Eduardo_Campos_anos_80.png"
            width={300}
            height={300}
            alt=""
            className="rounded-2xl shadow-2xl"   
          />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-2xl text-white">
            Imagem 2
          </h2>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/4%29_Eduardo_Campos_e_Miguel_Arraes_%2828783524402%29.png/300px-4%29_Eduardo_Campos_e_Miguel_Arraes_%2828783524402%29.png"
            width={600}
            height={300}
            alt=""
            className="rounded-2xl shadow-2xl"   
            />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-2xl text-white">
            Imagem 3
          </h2>
          <Image
            className="rounded-2xl shadow-2xl"   
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lula-Ch%C3%A1vez-AbreueLima.jpg/300px-Lula-Ch%C3%A1vez-AbreueLima.jpg"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </div>
  )
} 