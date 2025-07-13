const Newsletter = () => {
  return (
    <section className="bg-pink-200 py-10 text-center px-4">
      <h2 className="text-2xl font-bold text-pink-800">Subscribe & Get 10% Off</h2>
      <p className="text-gray-700 mt-2 mb-4">Be the first to hear about new arrivals & offers.</p>
      <form className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded w-full md:w-1/3"
        />
        <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
