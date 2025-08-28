 export default function Home() {
  return (
    <>
      {/* Hero section with curved bottom */}
      <section className="bg-[#c47f74] rounded-b-[150px] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
          {/* Left text */}
          <div className="text-white max-w-lg">
            <h1 className="text-5xl font-bold leading-snug">
              Stay Connected with Your Faith and Community — Anywhere, Anytime.
            </h1>
          </div>

          {/* Right image */}
          <div className="flex-shrink-0 mt-6 md:mt-0">
            <img
              src="/mosque.jpeg"
              alt="Mosque"
              className="w-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* White section below */}
      <section className="bg-white px-8 py-12">
        <h2 className="text-2xl font-bold mb-4">Welcome to Iman Connect</h2>
        <p className="text-gray-700">
          Our platform is designed to help Muslims strengthen their faith by making Islamic knowledge, prayer times, and community connection easily accessible from anywhere in the world.
        </p>
      </section>
    </>
  );
}
