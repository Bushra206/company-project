import React from 'react';

const MostViewedItem = ({ image, title }) => (
  <div className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-50">
    <img src={image} alt={title} className="w-24 h-16 object-cover rounded" />
    <h3 className="text-sm font-medium">{title}</h3>
  </div>
);

const NewsArticle = () => {
  const mostViewed = [
    {
      title: "I Am A Woman, Be Afraid",
      image: "public/images/e415246a682b40205fb358987cbe2e3a.jpeg"
    },
    {
      title: "Keep The Ball Rollin'",
      image: "public/images/38834d477f7937873ebf023a197cbac5.png"
    },
    {
      title: "Put Me In Coach, I'm Ready To Play, Today",
      image: "public/images/e496c1bf566c3d4dc7fe501055232782.jpeg"
    },
    {
      title: "Slow And Steady Wins The Race",
      image: "public/images/e496c1bf566c3d4dc7fe501055232782.jpeg"
    }
  ];

  return (
    <div>
          <div className=" bg-[#BOB3C9] max-w-6xl mx-auto px-4 py-8  flex gap-8">
      {/* Main Article Content */}
      <div className="flex-grow max-w-3xl">
        <article className="prose">
          <p className="text-black mb-4">
            An Erebus Motorsport data engineer has been axed from the team after being charged by the
            police on counts of assault and making a false report.
          </p>

          <p className="text-black mb-4">
            The 20-year-old man - who has not been named in the police report - had initially claimed that he
            had been assaulted by three men on William Street in the early hours of Monday morning,
            following celebrations of the team's Bathurst 1000 victory with Brodie Kostecki and Todd
            Hazelwood.
          </p>

          <p className="text-black mb-4">
            This led Erebus to offer a "substantial reward" to anyone who could provide assistance to the
            investigation into the incident.
          </p>

          <p className="text-black mb-4">
            But CCTV footage, which has since been shared publicly, showed the man repeatedly hitting
            himself while being followed by a woman. Both parties were taken to a Bathurst hospital and
            paramedics were called to the scene.
          </p>



        </article>
      </div>

      {/* Most Viewed Sidebar */}
      <div className="w-80 flex-shrink-0">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-6">Most Viewed</h2>
          {mostViewed.map((item, index) => (
            <MostViewedItem
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
     <div className='grid grid-cols-3 gap-4'>
     <div className=" mb-8 flex flex-col justify-center">
     <img
       src="public\images\94c551f2664e27784018cbebfac6adad.jpeg"
       alt="Racing car in action"
       className="w-full h-[250px] rounded-lg"
     />
     <div className="mt-2 text-sm text-black">
       <p className="font-medium">Brodie Kostecki, Erebus Motorsport Chevrolet Camaro ZL</p>
       <p>Photo by: Edge Photographics</p>
     </div>
   </div>
   <div className='col-span-2'>
   <p className="text-black mb-4">
     A New South Wales police communication explains: "Following police inquiries, yesterday
     (Tuesday) evening the man was charged with make false representation calling for investigation, common
     assault (DV) and false representation resulting in police investigation."
   </p>

   <p className="text-black mb-4">
     "He will appear in Bathurst Local Court on Wednesday 13 December 2024.
     "Police will allege in court the man assaulted a woman known to him, and was self-assaulted
     himself but made a false report to police."
   </p>

   <p className="text-black mb-4">
     In a statement shared with Motorsport.com, the team confirmed: "Erebus Motorsport was
     advised by NSW Police that charges would be laid and his employment has been terminated."
   </p>
   </div>
     </div>
    </div>

  );
};

export default NewsArticle;