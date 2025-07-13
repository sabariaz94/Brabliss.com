const Testimonials = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-pink-100 p-4 rounded shadow text-center">
          <p>“Best bra I’ve ever worn! Super soft and fits perfectly.”</p>
          <p className="mt-2 font-semibold">— Ayesha K.</p>
        </div>
        <div className="bg-pink-100 p-4 rounded shadow text-center">
          <p>“Great quality and affordable. Highly recommend Brabliss!”</p>
          <p className="mt-2 font-semibold">— Fatima S.</p>
        </div>
        <div className="bg-pink-100 p-4 rounded shadow text-center">
          <p>“Delivery was super fast and packaging was so cute!”</p>
          <p className="mt-2 font-semibold">— Maria Z.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
