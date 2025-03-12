'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, FileText, Twitter } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Sricharan S</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Software Development Engineer passionate about building scalable applications 
          and exploring new technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Github, href: "https://github.com/srich02", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sricharan-s-179105151/", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com/BrkmstrSol", label: "Twitter" },
            { icon: Mail, href: "mailto:srichoffl@gmail.com", label: "Email" },
            { icon: FileText, href: "/Sricharan S.pdf", label: "Resume" }
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform transition-all duration-300 hover:scale-110 flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <social.icon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">{social.label}</span>
            </a>
          ))}
        </div>

        <div className={`space-y-6 text-left bg-white p-6 rounded-xl shadow-lg transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-700 leading-relaxed">
            Hi! I&apos;m a software engineer based in Bengaluru, specializing in full-stack development.
            I enjoy creating efficient, scalable solutions and exploring new technologies.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Currently working at Intel as a Software Application Development Engineer, 
            focused on building enterprise applications and optimizing development workflows.
          </p>
        </div>
      </div>
    </div>
  )
}