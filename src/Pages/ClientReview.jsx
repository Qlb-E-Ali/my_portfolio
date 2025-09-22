import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EffectFade, EffectCoverflow, EffectCards } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const clientReviews = [
    {
        id: 1,
        name: "John Smith",
        position: "Project Manager",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        review: "The team delivered our website ahead of schedule with clean code and an amazing design. Their attention to detail made the process smooth and stress-free. Every feature worked flawlessly from day one, and the testing process was handled with precision. Communication was clear, consistent, and transparent throughout the entire journey. They made sure to involve us in every key decision and provided excellent suggestions for improvement. We appreciated their proactive attitude and dedication to quality. It was a real partnership rather than just a transaction. I highly recommend them for any professional web project."
    },
    {
        id: 2,
        name: "Sarah Johnson",
        position: "CEO",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        review: "We got a flawless mobile app with smooth performance and intuitive design that exceeded our expectations. The communication was professional and timely at every stage, making collaboration effortless. They listened carefully to our business goals and incorporated them seamlessly into the final product. The app not only looked great but also functioned perfectly on multiple devices. They also helped us plan scalability for future growth. The documentation was clear, making onboarding easy for our in-house team. Their dedication and expertise gave us confidence throughout the process. Our customers love using the new app every single day."
    },
    {
        id: 3,
        name: "Michael Brown",
        position: "Creative Director",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        review: "Their design approach completely transformed our app’s interface into something modern, elegant, and functional. The layouts were fresh and highly user-friendly, making the user journey smooth and enjoyable. They took the time to understand our creative vision and translated it into practical designs. Every little detail, from typography to color balance, was carefully executed. They were open to feedback and improved the designs quickly whenever we requested changes. Collaboration was seamless, and the final product went beyond our expectations. Their creativity and technical skills made a huge difference to our project. It truly felt like working with an in-house creative partner."
    },
    {
        id: 4,
        name: "Emily Davis",
        position: "CTO",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        review: "They provided quick turnaround times and managed to exceed expectations in every sprint we worked on together. Their problem-solving skills helped us overcome multiple technical challenges that could have delayed our project. The code quality was clean, maintainable, and well-documented, which made integration with our existing systems easy. They used agile methodologies effectively, ensuring that progress was visible at all times. Their willingness to adapt to last-minute changes really impressed us. Security and performance were taken seriously, with thorough testing at every stage. The whole process was efficient and stress-free. We look forward to working with them again."
    },
    {
        id: 5,
        name: "David Wilson",
        position: "Founder",
        image: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg",
        review: "Our online shop now looks professional, modern, and works seamlessly across all devices and browsers. From speed optimization to user-friendly design, everything was executed with precision. They understood our vision and added features that elevated the shopping experience. Payment integration, cart management, and inventory handling were smooth and efficient. They also guided us on SEO best practices for better visibility. The team was creative, flexible, and always ready to suggest improvements. It’s not just a website; it’s a complete digital store that has boosted our sales. Their development expertise has been a game-changer for our business growth."
    },
    {
        id: 6,
        name: "Olivia Martinez",
        position: "Software Engineer",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        review: "The API integrations were seamless, efficient, and significantly improved our workflows and team productivity. They quickly understood the technical requirements and executed everything with precision. The documentation was clear and easy to follow, which helped our team adapt quickly. Testing was rigorous, and we had no major bugs after launch. Their knowledge of best practices made the integration future-proof and scalable. Collaboration was smooth, with fast responses to our queries. Their technical expertise saved us a lot of time and resources. Working with them felt effortless, and we would gladly collaborate with them again on future projects."
    },
    {
        id: 7,
        name: "James Anderson",
        position: "Operations Head",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        review: "They were always available to address issues, provide guidance, and keep us updated regularly. Their professionalism and dedication were outstanding, and they never left us in the dark. They used clear and simple explanations to help us understand technical aspects. Their agile approach ensured everything was delivered on time. Even during unexpected challenges, they remained calm and found solutions quickly. It was clear they valued long-term relationships more than short-term gains. The collaboration was smooth, transparent, and stress-free. We felt supported at every step, and I’d strongly recommend them to anyone seeking reliable partners."
    },
    {
        id: 8,
        name: "Sophia Taylor",
        position: "Product Manager",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        review: "Our financial web app was delivered with absolute accuracy, precision, and outstanding attention to detail. They ensured the UX was intuitive, making it easy for clients to adopt the platform. The backend was solid, scalable, and optimized for high performance. They also offered innovative suggestions that enhanced functionality. Communication was smooth, and feedback was always implemented quickly. The security measures they built into the system gave us full confidence. Testing and documentation were both thorough. Overall, it was one of the smoothest and most successful projects I’ve managed, and I’d gladly work with them again."
    },
    {
        id: 9,
        name: "William Thomas",
        position: "Director",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        review: "The team worked closely with us, taking the time to deeply understand our business goals. They built a scalable platform that continues to grow with us and supports increasing traffic. Performance, speed, and reliability have been excellent since launch. They also provided great post-launch support, ensuring everything ran smoothly. We were impressed by their professionalism and ability to adapt to changing requirements. The platform was delivered on time, within budget, and exceeded our expectations. Their communication and transparency made everything stress-free. It felt like working with a trusted partner, not just a service provider."
    },
    {
        id: 10,
        name: "Isabella White",
        position: "Chief Medical Officer",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        review: "They provided innovative digital solutions that modernized our healthcare services and workflows. Patients now enjoy smoother experiences with the online booking system and health tools. The team was attentive to every requirement, including security and compliance standards. Their ability to deliver within tight timelines was impressive. They communicated clearly and involved us in every important decision. The final product was reliable, fast, and easy to use for both staff and patients. It was a huge improvement over our old system. We trust them fully and plan to work with them on future healthcare projects as well."
    }
];




const ClientReview = () => {
    return (
        <div className="bg-[#000319] py-12">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 w-full text-white">
    Kind Words From <span className="text-[#CBACF9]">Satisfied Clients</span>
  </h1>

  <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView="auto"
    coverflowEffect={{
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    navigation={true}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
    spaceBetween={20}
    loop={true}
    speed={800}
    className="w-[95%] sm:w-[90%] md:w-[80%] h-[65vh] sm:h-[55vh] md:h-[50vh] rounded-3xl"
  >
    {clientReviews.map((item) => (
      <SwiperSlide
        key={item.id}
        className="bg-gradient-to-r from-[#000319] via-[#4D4D97] to-[#0C0F2A] 
                   p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-between"
      >
        {/* Review text */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 text-center md:text-left italic">
          {item.review}
        </p>

        {/* Profile section */}
        <div className="flex items-center md:justify-start justify-center gap-3 sm:gap-4 mt-auto">
          <div className="w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] rounded-full overflow-hidden border-2 border-[#4D4D97] shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-white">{item.name}</h1>
            <h2 className="text-xs sm:text-sm text-gray-400">{item.position}</h2>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    )
}

export default ClientReview