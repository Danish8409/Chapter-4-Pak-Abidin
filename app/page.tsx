import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <Sidebar title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

    
       <div className="p-4 shadow-md bg bg-[#057781] rounded-md hover:scale-105 transition-all duration-300">
          <img
            src="/image/foto1.png"
            alt="foto1"
            className="rounded-md w-full h-48 object-cover mb-4"
          />
          <h2 className="font-semibold text-lg">Murah</h2>
          <p className="text-gray-600 text-sm">Mulai dari 10k bisa cinematic!</p>
        </div>

         <div className="p-4 shadow-md bg bg-[#057781] rounded-md hover:scale-105 transition-all duration-300">
          <img
            src="/image/foto2.png"
            alt="foto2"
            className="rounded-md w-full h-48 object-cover mb-4"
          />
          <h2 className="font-semibold text-lg">Profesional</h2>
          <p className="text-gray-600 text-sm">Pengerjaan cepat tidak sampai 1 jam</p>
        </div>

       
        <div className="p-4 shadow-md bg bg-[#057781] rounded-md hover:scale-105 transition-all duration-300">
          <img
            src="/image/foto3.png"
            alt="foto3"
            className="rounded-md w-full h-48 object-cover mb-4"
          />
          <h2 className="font-semibold text-lg">Kualitas terbaik</h2>
          <p className="text-gray-600 text-sm">Hasil di jamin terbaik kualitas 4k 60fps</p>
        </div>

      </div>
    </Sidebar>
    
  );
}