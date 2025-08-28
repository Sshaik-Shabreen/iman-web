export default function AboutUs() {
  return (
    <section id="about" className="bg-white px-6 md:px-20 py-12">
      <h1 className="text-center text-4xl font-bold text-[#c94f2c] mb-10">About Us</h1>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-gray-800 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#c94f2c] mb-4">Strengthening Iman Through Connection</h2>
          <p className="mb-6">
            At <strong>Iman Connect</strong>, our mission is to help Muslims
            stay spiritually connected, informed, and inspired in their daily lives.
          </p>
          <p>
            Whether you’re at home, traveling, or away from your local masjid,
            Iman Connect offers a space to access Qur’anic verses, Hadith,
            Islamic reminders, prayer times, and authentic resources.
          </p>
        </div>
        <div className="flex-1">
          <img src="/aboutus.png" alt="About Iman Connect" className="rounded-xl shadow-lg object-cover" />
        </div>
      </div>
    </section>
  );
}
