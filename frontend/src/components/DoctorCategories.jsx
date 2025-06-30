import pediatricsImg from '../assets/pediatrics.jpg';
import orthopedicsImg from '../assets/orthopaedics.jpg';
import cardiologyImg from '../assets/cardiology.jpg';
import neurologyImg from '../assets/neurology.jpg';

// src/components/DoctorCategories.jsx
const categories = [
  { name: "Pediatrics", img: pediatricsImg },
  { name: "Orthopedics", img: orthopedicsImg},
  { name: "Cardiology", img: cardiologyImg },
  { name: "Neurology", img: neurologyImg },
  // Add more as needed
];

export default function DoctorCategories() {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-6">Find Doctors By Your Health Concern</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {categories.map(({ name, img }) => (
          <div key={name} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer">
            <img src={img} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-2" />
            <p className="font-medium">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
