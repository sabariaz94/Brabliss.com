const WhyBrabliss = () => {
  return (
    <section className="bg-pink-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Why Brabliss?</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="font-semibold text-xl">Premium Comfort</h3>
          <p className="mt-2 text-gray-600">Soft fabrics that feel like second skin.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Free & Fast Delivery</h3>
          <p className="mt-2 text-gray-600">Across Pakistan in 3–5 days.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Easy Returns</h3>
          <p className="mt-2 text-gray-600">No questions asked, 7-day return policy.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyBrabliss;
