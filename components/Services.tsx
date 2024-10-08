import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Smartphone, Globe, Server } from 'lucide-react';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Create stunning, high-performance mobile apps for iOS and Android using React Native.',
    icon: Smartphone,
  },
  {
    title: 'Web Development',
    description: 'Build modern, responsive web applications with Next.js for optimal user experiences.',
    icon: Globe,
  },
  {
    title: 'Backend Development',
    description: 'Develop robust, scalable backend services and APIs using Go for high-performance systems.',
    icon: Server,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Software Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of services to meet your software development needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon className="h-8 w-8 text-indigo-600" />
                  <CardTitle className="mt-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}