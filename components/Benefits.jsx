export default function Benefits() {
  const features = [
    {
      icon: "🌸",
      title: "Delicate Comfort",
      desc: "Soft, breathable fabrics that feel like a second skin.",
    },
    {
      icon: "🌈",
      title: "Inclusive Sizes",
      desc: "From petite to plus — every body is beautiful.",
    },
    {
      icon: "📦",
      title: "Fast & Discreet Shipping",
      desc: "Free delivery over $50 in elegant packaging.",
    },
  ];
  return (
    <section className="bg-white py-16 border-t border-pink-200 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((item, i) => (
          <div key={i} className="p-4">
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold text-pink-800">{item.title}</h3>
            <p className="text-pink-700 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
