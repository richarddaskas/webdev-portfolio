'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      
      // Get viewport and document dimensions
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page, always show Projects as active
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('projects');
        return;
      }
      
      // Otherwise, find which section we're in
      const viewportMiddle = scrollPosition + windowHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (viewportMiddle >= offsetTop) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-theme-primary text-theme-secondary">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* LEFT COLUMN - Static */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-theme-primary sm:text-5xl">
                Richard Daskas
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-theme-primary sm:text-xl">
                Full-Stack Web Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-theme-muted">
                Building responsive, modern web applications with React, Node.js, and Tailwind CSS.
              </p>

              {/* Navigation */}
              <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="w-max">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                      className={`group flex items-center py-3 ${
                        activeSection === 'about' ? 'active' : ''
                      }`}
                    >
                      <span className={`nav-indicator mr-4 h-1.5 w-1.5 rounded-full transition-all ${
                        activeSection === 'about' 
                          ? 'w-8 bg-theme-accent' 
                          : 'bg-slate-400 group-hover:w-8 group-hover:bg-theme-accent'
                      }`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${
                        activeSection === 'about'
                          ? 'text-theme-primary'
                          : 'text-theme-subtle group-hover:text-theme-primary'
                      }`}>
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                      className={`group flex items-center py-3 ${
                        activeSection === 'experience' ? 'active' : ''
                      }`}
                    >
                      <span className={`nav-indicator mr-4 h-1.5 w-1.5 rounded-full transition-all ${
                        activeSection === 'experience' 
                          ? 'w-8 bg-theme-accent' 
                          : 'bg-slate-400 group-hover:w-8 group-hover:bg-theme-accent'
                      }`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${
                        activeSection === 'experience'
                          ? 'text-theme-primary'
                          : 'text-theme-subtle group-hover:text-theme-primary'
                      }`}>
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                      className={`group flex items-center py-3 ${
                        activeSection === 'projects' ? 'active' : ''
                      }`}
                    >
                      <span className={`nav-indicator mr-4 h-1.5 w-1.5 rounded-full transition-all ${
                        activeSection === 'projects' 
                          ? 'w-8 bg-theme-accent' 
                          : 'bg-slate-400 group-hover:w-8 group-hover:bg-theme-accent'
                      }`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${
                        activeSection === 'projects'
                          ? 'text-theme-primary'
                          : 'text-theme-subtle group-hover:text-theme-primary'
                      }`}>
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li className="text-xs">
                <a
                  className="block hover:text-theme-primary"
                  href="https://github.com/richarddaskas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="text-xs">
                <a
                  className="block hover:text-theme-primary"
                  href="https://linkedin.com/in/richard-d-03128838b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </header>

          {/* RIGHT COLUMN - Scrollable */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* ABOUT SECTION */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-theme-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-theme-primary lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4 text-theme-muted leading-relaxed">
                  I'm a developer with 10+ years of technical experience building complex systems. 
                  I recently transitioned into web development after shipping a commercial game and 
                  working at IBM Research on AI-driven platforms.
                </p>
                <p className="mb-4 text-theme-muted leading-relaxed">
                  My background in C# and systems architecture gives me a strong foundation for 
                  building scalable, maintainable web applications. I'm drawn to projects that 
                  combine technical challenges with creative problem-solving.
                </p>
                <p className="text-theme-muted leading-relaxed">
                  When I'm not coding, you can find me composing music, working on game prototypes, 
                  or exploring new technologies.
                </p>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-theme-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-theme-primary lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">

                  {/* Experience Item 1 - Freelance Web Developer */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-theme-subtle sm:col-span-2" aria-label="2021 to Present">
                        2021 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-theme-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="#" aria-label="Freelance Web Developer">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Freelance Web Developer · <span className="inline-block">Self-Employed</span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Building responsive websites and web applications for clients. Creating custom 
                          solutions using modern frameworks and tools, focusing on clean code and user 
                          experience.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Next.js</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Tailwind CSS</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Node.js</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Experience Item 2 - Game Developer */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-theme-subtle sm:col-span-2" aria-label="2018 to Present">
                        2018 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-theme-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="#" aria-label="Game Developer & Systems Designer">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Game Developer & Systems Designer · <span className="inline-block">Independent</span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Designed and developed complete game systems from concept to implementation. 
                          Built custom physics engines, state management systems, and interactive gameplay 
                          mechanics using Unity and C#. Shipped commercial title on Steam.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Unity</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">C#</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Systems Design</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Game Architecture</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Experience Item 3 - IBM Research */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-theme-subtle sm:col-span-2" aria-label="2015 to 2017">
                        2015 — 2017
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-theme-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="#" aria-label="Software Developer at IBM Research">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Software Developer · <span className="inline-block">IBM Research</span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Worked on Watson Beat, an AI-driven music generation platform. Implemented 
                          technical systems for music composition algorithms, handled data processing 
                          pipelines, and collaborated with research scientists on experimental features.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Python</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">AI/ML</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Data Processing</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                </ol>
                {/*
                <div className="mt-12">
                  <a className="inline-flex items-center font-medium leading-tight text-theme-primary group" aria-label="View Full Resume" href="/resume.pdf">
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-theme-accent motion-reduce:transition-none">View Full </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-theme-accent motion-reduce:transition-none">Resume</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                */}
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-theme-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-theme-primary lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">

                  {/* Project 1 - Property Management Platform */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="https://property-management-site-three.vercel.app/" target="_blank" rel="noreferrer" aria-label="Property Management Platform">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Property Management Platform
                              <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Full-stack web application for managing rental properties. Features include tenant 
                          screening, payment processing integration, and automated workflows. Built with modern 
                          frameworks and deployed on cloud infrastructure.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Node.js</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Tailwind CSS</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Vercel</div>
                          </li>
                        </ul>
                      </div>
                      <img alt="Property management platform screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-theme-primary/10 transition group-hover:border-theme-primary/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src="/ss_kaswellPropertyManagementSite.png" />
                    </div>
                  </li>
                  
                  {/* Project 2 - Systems Design Portfolio */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="https://systemsdesignportfolio.richarddaskas.com/" target="_blank" rel="noreferrer" aria-label="Systems Design Portfolio">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Systems Design Portfolio
                              <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Interactive portfolio site showcasing game systems design work. Features dynamic 
                          content sections, responsive design, and modern UI/UX principles. Built to demonstrate 
                          both technical implementation and design thinking.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Next.js</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Tailwind CSS</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Vercel</div>
                          </li>
                        </ul>
                      </div>
                      <img alt="Systems Design Portfolio screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-theme-primary/10 transition group-hover:border-theme-primary/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src="/ss_systemDesignSite.png" />
                    </div>
                  </li>

                  {/* Project 3 - Client Site */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="https://www.grandviewheritagefarms.com/home" target="_blank" rel="noreferrer" aria-label="Client Portfolio Site">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Client Portfolio Site
                              <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Website design and development for local bakery using Wix platform. Configured 
                          Square payment integration for e-commerce, designed custom layouts, and optimized 
                          user experience for mobile ordering.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Wix</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Square Payments</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">UI/UX Design</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Responsive Design</div>
                          </li>
                        </ul>
                      </div>
                      <img alt="Client site screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-theme-primary/10 transition group-hover:border-theme-primary/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src="/ss_grandViewHeritageFarmsSite.png" />
                    </div>
                  </li>

                </ul>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="max-w-md pb-16 text-sm text-theme-subtle sm:pb-0">
              <p>
                Built with <a href="https://nextjs.org/" className="font-medium text-theme-muted hover:text-theme-accent focus-visible:text-theme-accent" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium text-theme-muted hover:text-theme-accent focus-visible:text-theme-accent" target="_blank" rel="noreferrer">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" className="font-medium text-theme-muted hover:text-theme-accent focus-visible:text-theme-accent" target="_blank" rel="noreferrer">Vercel</a>.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}