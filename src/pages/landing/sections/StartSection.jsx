const StartSection = () => {
  return (
      <section className="flex items-center flex-col">
        <div className="min-w-[50%] mt-24 max-sm:mt-14">
          <h1 className="text-4xl md:text-6xl max-sm:mx-10 font-bold text-[#E2E8F0]">Hey, I&apos;m <span className="text-[#F1D827] text-5xl md:text-7xl font-extrabold">Angel Moreno</span></h1>
          <h1 className="text-4xl md:text-6xl max-sm:mx-10 text-[#E2E8F0] mt-4">Frontend Developer.</h1>
        </div>
        <div className="min-w-[50%] flex gap-5 mt-8">
          <a className="bg-slate-800 font-medium tracking-wider px-5 py-2 rounded-full hover:bg-slate-900"
            target="_blank"
            href="https://www.linkedin.com/in/angel-moreno-romera/" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i> Linkedin
          </a>
          <a className="bg-slate-800 font-medium tracking-wider px-5 py-2 rounded-full hover:bg-slate-900"
            target="_blank"
            href="https://github.com/Angel-M-R" rel="noreferrer">
            <i className="fa-brands fa-github"></i> Github</a>
        </div>
        <div className="min-w-[50%] mt-8 max-w-xl max-sm:mt-10">
          <p className="max-sm:text-md max-sm:mx-10 text-slate-300 text-xl leading-8">Hi, I&apos;m Ángel, Experienced front-end developer from <strong>Spain</strong>. <br/> With <strong>4</strong> years of expertise in different JavaScript frameworks. <br/>My mentality is to be as <strong>productive</strong> as I can.</p>
        </div>
      </section>
  )
}

export {StartSection}