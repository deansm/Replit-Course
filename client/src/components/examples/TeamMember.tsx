import TeamMember from '../TeamMember'
import femaleStyleImage from '@assets/generated_images/Hair_stylist_profile_photo_979d5f1b.png'
import maleStyleImage from '@assets/generated_images/Male_hair_stylist_photo_98c51867.png'

export default function TeamMemberExample() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Senior Hair Stylist",
      image: femaleStyleImage,
      rating: 5,
      specialties: ["Color", "Cuts", "Styling"],
      yearsExperience: 8
    },
    {
      name: "Michael Chen",
      title: "Master Colorist",
      image: maleStyleImage,
      rating: 5,
      specialties: ["Highlights", "Balayage", "Color Correction"],
      yearsExperience: 12
    },
    {
      name: "Emily Rodriguez", 
      title: "Style Specialist",
      image: femaleStyleImage,
      rating: 4,
      specialties: ["Cuts", "Updos", "Special Events"],
      yearsExperience: 6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  )
}