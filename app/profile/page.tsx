import Sidebar from "@/components/sidebar";

export default function Profile() {
  return (
    <Sidebar title="Profil Kota">
      <div className="max-w-4xl mx-auto">

        {/* HEADER PROFILE */}
        <div className="relative bg-[url('/image/motor.png')] bg-cover bg-center h-64 rounded-xl shadow-xl overflow-hidden">
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg tracking-wide">
              Jasa cinematic dan foto
            </h1>
            <p className="text-gray-200 mt-2 text-lg drop-shadow">
              Pamerkan motor mu dengan jasa cinematic dan foto!
            </p>
          </div>
        </div>

        {/* BIO SECTION */}
        <div className="mt-8 p-6 rounded-xl bg-[#0F172A] shadow-lg border border-blue-900/30 hover:border-blue-400/40 transition-all duration-300">
          <h2 className="text-2xl font-bold text-blue-300 mb-3">Tentang Kota</h2>
          <p className="text-gray-300 leading-relaxed">
            Pamerakan motor mu menggunakan jasa cinematic dan foto profesional kami.
            Dengan pengalaman bertahun-tahun, kami menjamin hasil terbaik yang akan
            memukau setiap mata yang melihatnya. Jangan lewatkan kesempatan untuk
            mengabadikan momen berharga Anda dengan kualitas tertinggi!
          </p>
        </div>

        {/* CARD KONDISI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

          {/* Card 1 */}
          <div className="bg-[#111827] p-5 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-blue-300">Customer</h3>
            <p className="text-gray-400 mt-2">
              Kami memiliki total 378 customer!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] p-5 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-blue-300">Langganan</h3>
            <p className="text-gray-400 mt-2">
              Sudah 50 orang yang berlangganan jasa kami!
            </p>
          </div>

        </div>

        {/* GALLERY */}
        <h2 className="text-2xl font-bold text-blue-300 mt-10 mb-4">Galeri hasil foto jasa kami</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
            <img src="/image/foto4.png" className="object-cover w-full h-48" />
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
            <img src="/image/foto5.png" className="object-cover w-full h-48" />
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
            <img src="/image/foto6.png" className="object-cover w-full h-48" />
          </div>

        </div>

      </div>
    </Sidebar>
  );
}