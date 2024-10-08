import { Card, CardContent } from '@/components/ui/card';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "We have worked with Safyah Solutions on various projects over the past eight years. They have consistently delivered a professional, technically-strong coding service and we highly recommend them for your web and native app development",
    author: "Haz Samuel",
    company: "EIM Inc"
  },
  // You can add more testimonials here in the future
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Safyah Solutions.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <FaQuoteLeft className="text-4xl text-indigo-500 mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}