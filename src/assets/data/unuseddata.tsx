// NOTE:: This part is not working. Need to be executed later.

{
  /* <section className="mb-16">
<h2 className="text-2xl font-bold mb-4">Portfolio</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ProjectCard title="Amazon Scrapper" image="300/200" />
  <ProjectCard title="Modern Architecture" image="300/200" />
  <ProjectCard title="Mountain View" image="300/200" />
</div>
<button className="mt-8 bg-yellow-500 text-black px-6 py-2 rounded-full">
  View More
</button>
</section> */
}

{
  /* <section className="mb-16">
<h2 className="text-2xl font-bold mb-4">Testimonial</h2>
<div className="bg-gray-800 p-6 rounded-lg flex items-center">
  <img
    src="/api/placeholder/100/100"
    alt="Client"
    className="rounded-full mr-6"
  />
  <div>
    <p className="italic mb-2">
      "The design quality, flexibility, documentation and support are
      all absolutely excellent. They are fast, professional and have
      gone above and beyond for me."
    </p>
    <p className="font-semibold">Jasen Ekloran</p>
    <p className="text-gray-400">CEO, Axonas</p>
  </div>
</div>
</section> */
}

//   const ProjectCard = ({ title, image }: any) => (
//     <div className="relative overflow-hidden rounded-lg">
//       <img src={`/api/placeholder/${image}`} alt={title} className="w-full h-48 object-cover" />
//       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>
//     </div>
//   );

      {/* Testimonials Section */}
      // <section
      //   ref={refs.testimonials}
      //   id="testimonials"
      //   className="min-h-screen py-20 bg-indigo-950/30"
      // >
      //   <div className={`container mx-auto px-6 transition-all duration-700 transform 
      //     ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      //     <h2 className="text-4xl font-bold mb-12 text-center">
      //       Client <span className="text-violet-400">Testimonials</span>
      //     </h2>
      //     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      //       {[
      //         {
      //           name: "John Smith",
      //           role: "CEO, TechStart",
      //           content: "Rushikesh delivered exceptional work on our platform. His attention to detail and technical expertise made our project a success.",
      //           rating: 5
      //         },
      //         {
      //           name: "Sarah Johnson",
      //           role: "Product Manager, InnovateX",
      //           content: "Working with Rushikesh was a pleasure. He brought creative solutions to complex problems and delivered ahead of schedule.",
      //           rating: 5
      //         },
      //         {
      //           name: "Michael Brown",
      //           role: "CTO, DataFlow",
      //           content: "Rushikesh's expertise in React and Angular helped us modernize our entire frontend infrastructure. Highly recommended!",
      //           rating: 5
      //         }
      //       ].map((testimonial, index) => (
      //         <div
      //           key={index}
      //           className="bg-indigo-950/50 p-6 rounded-xl hover:shadow-xl hover:shadow-violet-500/20 
      //             transition-all duration-300 transform hover:-translate-y-2"
      //         >
      //           <div className="flex items-center mb-4">
      //             {[...Array(testimonial.rating)].map((_, i) => (
      //               <Star key={i} className="text-violet-400" size={16} fill="currentColor" />
      //             ))}
      //           </div>
      //           <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
      //           <div>
      //             <h4 className="font-semibold text-violet-400">{testimonial.name}</h4>
      //             <p className="text-gray-400">{testimonial.role}</p>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>




      

// update this hero section if necessary======================================
// <section 
//         ref={refs.home}
//         id="home"
//         className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6"
//       >
//         <div className={`container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}>
//           <div className="flex-1 text-center lg:text-left">
//             <span className="text-violet-400 inline-block">Hello, I'm</span>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 mb-4 
//               bg-gradient-to-r from-violet-400 to-fuchsia-400 text-transparent bg-clip-text">
//               Rushikesh Jagtap
//             </h1>
//             <div className="text-lg sm:text-xl text-gray-300">Frontend Developer</div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
//               <button 
//                 onClick={() => scrollTo(refs.contact)}
//                 className="px-6 sm:px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full 
//                   font-medium hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105"
//               >
//                 Contact Me
//               </button>
//               <a 
//                 href="/Rushikesh_Jagtap_Resume.pdf" 
//                 download
//                 className="px-6 sm:px-8 py-3 border-2 border-violet-500 text-violet-400 rounded-full font-medium 
//                   hover:bg-violet-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2
//                   transform hover:scale-105"
//               >
//                 <Download size={18} />
//                 Download CV
//               </a>
//             </div>
//           </div>
//           <div className="flex-1 mt-8 lg:mt-0">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-violet-500/20 rounded-full blur-xl animate-pulse"></div>
//               <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto 
//                 transform hover:scale-105 transition-transform duration-300">
//                 <img 
//                   src={ProfilePhoto} 
//                   alt="Rushikesh Jagtap" 
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
// </section>