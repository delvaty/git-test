import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex items-center justify-center py-20">
      <div className="bg-white shadow-md rounded-xl max-w-sm w-[320px] dark:border-gray-700 flex flex-col">
        <div className="rounded-xl overflow-hidden p-4 pb-7">
        <Image
          className="rounded-lg"
          src="/image-qr-code.png"
          alt="qr-image"
          height={600}
          width={320}
        />
        </div>
        

        <div className="px-5 pb-5">
          <h1
            className="font-bold  text-xl tracking-tight text-black text-center"
            style={{ color: "hsl(218, 44%, 22%)" }}
          >
            Improve your front-end <br /> skills by building projetcs
          </h1>
          <p
            className="p-2 text-center"
            style={{ fontSize: "15px", color: "hsl(220, 15%, 55%)" }}
          >
            Scan the QR code to visit Frontend <br /> Mentor and take your
            coding skills to the next level
          </p>
        </div>

        
      </div>
    </div>
  );
}
