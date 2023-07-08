import React from "react";

const page = () => {
  const aboutinfo = [
    {
      work: "News",
      info: "Stay in the loop with our comprehensive coverage of the ever-evolving tech industry. From breakthrough innovations to industry trends, we provide timely and accurate news articles to keep you informed. Our team of expert writers curates and delivers the most relevant stories, ensuring you're up-to-date with the latest happenings across the tech landscape",
    },
    {
      work: "New Tech",
      info: "Discover the future today! At TechTech, we explore andshowcase the most exciting emerging technologies that aretransforming the way we live, work, and play. Fromartificial intelligence and virtual reality to blockchainand the Internet of Things (IoT), we delve into thepotential and impact of these cutting-edge advancements. Ourin-depth articles and reviews demystify new technologies,helping you understand their implications and how they canenhance your daily life.",
    },
    {
      work: "Tech Solutions",
      info: "Finding the right tech solutions can be challenging, butfret not! TechTech is here to assist you. Our dedicatedsection features practical guides, tutorials, and how-toarticles to solve your tech-related dilemmas. Whether youneed help troubleshooting software issues, setting up a homenetwork, or choosing the best gadgets for your needs, ourstep-by-step solutions will empower you to overcome anytechnological hurdle.",
    },
    {
      work: "Product Reviews",
      info: "Making informed purchasing decisions is crucial, especially when it comes to tech products. Our unbiased and comprehensive reviews help you navigate the vast sea of options. Whether you're looking for a new smartphone, a laptop, a gaming console, or any other tech gadget, our expert reviewers provide detailed insights, highlighting the pros and cons of each product to help you make the right choice.",
    },
    {
      work: "Guides and Tips",
      info: "Enhance your tech knowledge and skills with our practical guides and tips. From boosting your productivity with software hacks to securing your online presence, our articles cover a wide range of topics to help you make the most of your technology. We're committed to empowering our readers with the know-how they need to navigate the digital world confidently.",
    },
    {
      work: "Community and Interaction",
      info: "Loxia is not just a website; it's a thriving tech community. Engage with fellow tech enthusiasts through our comment sections, forums, and social media channels. Share your insights, ask questions, and exchange ideas with like-minded individuals who share your passion for technology. Our interactive platform encourages collaboration and fosters meaningful discussions.",
    },
  ];

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="">
              <h1
                className="text-2xl
             font-bold text-gray-900 text-center"
              >
                About Us!
              </h1>
              <p className="text-gray-900 text-center my-5 font-semibold">
                Welcome to Loxia! Your go-to destination for all things tech,
                where you'll find the latest news, cutting-edge technologies,
                and practical solutions to empower your digital world. Whether
                you're a tech enthusiast, a professional seeking insights, or
                someone looking for answers to your tech-related questions,
                we've got you covered.
              </p>
            </div>
            <div className="text-gray-900 text-center">
              <h2
                className="text-2xl
             font-bold py-5"
              >
                What We Provide
              </h2>
              <ul>
                {aboutinfo.map((item) => {
                  return (
                    <li className="
                     my-5">
                      <h3 className="text-3xl text-indigo-500 font-mono py-5">{item.work}</h3>
                      <p className="lg:px-60 lg:py-15 font-serif">{item.info}</p>
                    </li>
                  );
                })}
              </ul>
              <h3 className="py-3 font-semibold">
                At Loxia, we believe that knowledge is power, and we strive
                to empower you with the latest tech news, exciting innovations,
                practical solutions, and expert guidance. Join us on this
                exciting journey as we unravel the wonders of the tech world
                together. Stay tuned for an immersive experience that will
                transform the way you perceive and interact with technology
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
