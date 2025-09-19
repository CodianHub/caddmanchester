import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* Hero Section with Background Image and Overlay Text */}
      <section
        className="relative w-full h-[60vh] sm:h-[50vh] md:h-[calc(100vh-80px)] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/about/image.jpg')",
          height: '100vh',
          width: '100%',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        {/* Overlay Content */}
        <div className="relative z-10 text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
            Welcome to CADD Manchester
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 font-medium">
            Empowering careers through expert training in Digital Marketing, AutoCAD, and IT skills.  
            Transform your potential with practical, industry-driven education.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full py-12 bg-gradient-to-b from-[#222B57]/5 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#222B57] mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-[#222B57] text-white rounded-full p-3 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
          <p className="text-gray-600">Learn from industry professionals with years of experience in Digital Marketing, AutoCAD, and IT.</p>
        </div>
        {/* Feature 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-[#222B57] text-white rounded-full p-3 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 17v-2a4 4 0 0 1 8 0v2" />
          <circle cx="12" cy="7" r="4" />
          <rect x="2" y="17" width="20" height="5" rx="2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Career-Focused Curriculum</h3>
          <p className="text-gray-600">Courses designed to boost employability and practical skills for real-world success.</p>
        </div>
        {/* Feature 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
          <div className="bg-[#222B57] text-white rounded-full p-3 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
          <p className="text-gray-600">Choose from online or in-person classes to fit your schedule and learning style.</p>
        </div>
          </div>
        </div>
      </section>
      {/* About and Map Section */}
      <section className="relative w-full py-12 bg-white">
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-6 max-w-7xl mx-auto">

          {/* Google Map */}
          <div className="lg:w-[35%] w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.971382368237!2d77.27502737407531!3d28.63061978417011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3bd6098fa13%3A0x5f111c4431472261!2sCADD%20Manchester%20Academy!5e0!3m2!1sen!2sin!4v1733154633771!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              aria-label="Google Map showing CADD Manchester Academy"
            ></iframe>
          </div>

          {/* About Content */}
          <div className="lg:w-[60%] w-full text-black">
            <h2 className="text-3xl font-bold mb-4 text-[#222B57]">About CADD Manchester</h2>
            <hr className="border-t-2 border-gray-200 mb-4" />
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              In the past few years, the best digital marketing in Laxmi Nagar, Delhi has become a popular career choice.
              It’s an excellent choice for those wanting a stable and reliable income.<br /><br />
              Unlike regular jobs, CADD Manchester’s Digital Marketing course gives you many advantages. You can work from home,
              on your own time, or get a good-paying job with a well-known company.<br /><br />
              The digital marketing courses in Laxmi Nagar have greatly affected the market and opened up many new opportunities.
              Whether you’re looking for a job or you’re a business owner, learning Internet marketing can help. Today, because so many things are done online,
              businesses need to ensure they have a strong presence on the internet. That’s why they hire digital marketing experts to help them get noticed online and succeed.
            </p>

            {/* CTA Button */}
            <Link
              href="/join-us"
              className="inline-block px-6 py-3 bg-[#222B57] text-white text-lg font-semibold rounded-md hover:bg-white hover:text-[#222B57] border border-[#222B57] transition duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
