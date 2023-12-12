function Contact() {
  return (
    <footer className="flex flex-col mb-10 relative">
      <div className="flex justify-center fixed bottom-5 left-[50%] max-sm:-ml-16 -ml-24 max-sm:absolute max-sm:-bottom-5">
        <a className="bg-slate-800 font-medium tracking-wider px-5 py-2 rounded-full hover:bg-slate-900"
            target="_blank"
            href="https://www.linkedin.com/in/angel-moreno-romera/" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i> Linkedin
        </a>
      </div>
    </footer>
  )
}

export {Contact}