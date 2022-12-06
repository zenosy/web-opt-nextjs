const IntroSection: React.FC = () => {
  return (
    <div
      className="intro relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
      style={{ maxWidth: '1200px' }}
    >
      <h1 className="inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-wider leading-normal mb-10 font-bold">
        {`Hey, Let's go to `}
        <span className="text-fun-pink">Next.js</span> world
      </h1>
    </div>
  );
};

export default IntroSection;
