import Experience from "./components/experience";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="bg-green-900 px-3 py-1 rounded-full text-sm font-medium">
          <p className="font-semibold uppercase">Available for work</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold ">I'm Marlambekov Duman</h1>
      <p className="mt-4 text-lg">
        An experienced full-stack developer. Skilled in both front-end and back-end
        technologies, I enjoy bringing ideas to life through code.
      </p>

      <div className="mt-6 flex space-x-4">
        <Experience />
      </div>
    </div>
  );
}
