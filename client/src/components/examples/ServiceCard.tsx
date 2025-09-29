import ServiceCard from '../ServiceCard'

export default function ServiceCardExample() {
  const services = [
    {
      title: "Hair Cut & Style",
      description: "Professional haircut with personalized styling to match your unique look and lifestyle.",
      duration: "45 min",
      price: 65
    },
    {
      title: "Color Treatment",
      description: "Full color transformation using premium products for vibrant, long-lasting results.",
      duration: "2-3 hours", 
      price: 150
    },
    {
      title: "Highlights",
      description: "Expert highlighting techniques to add dimension and brightness to your hair.",
      duration: "2 hours",
      price: 120
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}