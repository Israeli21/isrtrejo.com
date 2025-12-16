export function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 bg-gray-900 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
      <div className="max-w-3xl text-lg md:text-xl leading-relaxed">
        <p className="mb-4">
          I’m Israel Trejo, currently a Senior Computer Science student at the University of Houston with a passion 
          for <span className="font-bold">Data Science</span> and <span className="font-bold">Software Engineering</span>. 
          I really like working on projects that makes a great impact on the world, and I believe processing data through machine learning and displaying the results is a huge step! 
          I’m a team player that enjoys working and growing with others.
        </p>
        <p>
          My hobbies outside of tech include drawing comics, animating, playing the guitar and lifting weights at home.
        </p>
      </div>
    </section>
  );
}