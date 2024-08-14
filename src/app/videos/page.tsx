export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center my-5 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-2xl text-white">
            Vídeo 1
          </h2>
          <video src="/videos/video1.mp4" controls width={600} height={400}></video>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-2xl text-white">
            Vídeo 2
          </h2>
          <video src="/videos/video2.mp4" controls width={600} height={400}></video>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-2xl text-white">
            Vídeo 3
          </h2>
          <video src="/videos/video3.mp4" controls width={600} height={400}></video>
        </div>
      </div>
    </div>
  )
}