import { Card, CardContent } from '@/components/ui/card';
import { SiReact, SiNextdotjs, SiGo } from 'react-icons/si';

const technologies = [
  { name: 'React Native', icon: SiReact, description: 'Build native mobile apps using React' },
  { name: 'Next.js', icon: SiNextdotjs, description: 'The React Framework for Production' },
  { name: 'Go', icon: SiGo, description: 'Efficient, reliable, and fast programming language' },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Technologies</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Cutting-edge Stack
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We leverage the latest technologies to deliver high-quality software solutions.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <Card key={tech.name} className="flex flex-col items-center text-center">
                <CardContent className="pt-6">
                  <tech.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}