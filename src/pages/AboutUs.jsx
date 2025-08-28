 export default function AboutUs() {
  return (
    <div className="bg-white px-8 md:px-16 py-12">
      {/* About Us title */}
      <div className="text-center py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#a5381c] drop-shadow-md">
          About Us
        </h1>
      </div>

      {/* Content section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#a5381c] mb-4">
            Strengthening Iman Through Connection and Knowledge
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            At <span className="font-bold">Iman Connect</span>, our mission is to help Muslims around the world strengthen their faith (Iman) 
            and stay connected with their Islamic community — no matter where they are. 
            We believe technology can be a powerful tool for spreading beneficial knowledge, 
            fostering unity, and encouraging good deeds.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Born out of a desire to make Islamic learning and reminders more accessible, 
            Iman Connect provides a digital space where users can read the Qur’an, 
            listen to Islamic lectures, learn daily duas, track prayer times, 
            and share inspiring reminders with loved ones. 
            Our aim is to make it easier for every Muslim to stay spiritually connected — anywhere, anytime.
          </p>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/about-image.jpg"
            alt="Muslim community"
            className="rounded-2xl drop-shadow-2xl max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>
    </div>
  );
}
