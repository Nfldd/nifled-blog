import React, { useState } from 'react';
import BlogPosts from './BlogPosts.jsx';
import Sidebar from './Sidebar.jsx';
import FullPost from './FullPost.jsx';

// day1
import d11 from '../assets/tour/Day 1/1.jpg';
import d12 from '../assets/tour/Day 1/2.jpg';
import d13 from '../assets/tour/Day 1/3.jpg';
// day2
import d21 from '../assets/tour/Day 2/1.jpg';
import d22 from '../assets/tour/Day 2/2.jpg';
import d23 from '../assets/tour/Day 2/3.jpg';
// day3
import d31 from '../assets/tour/Day 3/1.jpg';
import d32 from '../assets/tour/Day 3/2.jpg';
import d33 from '../assets/tour/Day 3/3.jpg';
// day4
import d41 from '../assets/tour/Day 4/1.jpg';
import d42 from '../assets/tour/Day 4/2.jpg';
import d43 from '../assets/tour/Day 4/3.jpg';
// day5
import d51 from '../assets/tour/Day 5/1.jpg';
import d52 from '../assets/tour/Day 5/2.jpg';
// day6
import d61 from '../assets/tour/Day 6/1.jpg';
import d62 from '../assets/tour/Day 6/2.jpg';
import d63 from '../assets/tour/Day 6/3.jpg';
// day7
import d71 from '../assets/tour/Day 7/1.jpg';
import d72 from '../assets/tour/Day 7/2.jpg';

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 'post-1',
      title: 'Manila’s Gateway: History, Heroes, and High-Tech Horizons',
      date: 'April 7, 2025',
      excerpt: 'Our journey began with a sense of excitement and anticipation as we touched down at Ninoy Aquino International Airport.',
      image: [d11],
      content: [
        { type: 'text', value: 'The educational tour kicked off with a vibrant arrival at Ninoy Aquino International Airport, immersing the group in Manila’s lively atmosphere. The first stop, Luneta Park (Rizal Park), a verdant symbol of national pride, featured the José Rizal monument, which sparked reflections on knowledge, courage, and technology’s role in preserving history. The journey continued into Intramuros, where the majestic Manila Cathedral showcased the blend of faith, art, and architecture, while Fort Santiago’s ancient walls and somber dungeon vividly recalled tales of resistance and sacrifice, underscoring the value of digital archiving for historical truth.' },
        { type: 'image', src: d12, alt: 'Mall of Asia' },
        { type: 'image', src: d13, alt: 'Intramuros' },
        { type: 'text', value: 'As the day progressed, the group transitioned from historical exploration to modern innovation at the Mall of Asia, one of Asia’s largest shopping hubs. Beyond its sheer scale, the mall exemplified urban development and the pervasive influence of IT in everyday life, from retail technology to smart infrastructure and digital marketing. This first day wove together Manila’s past, present, and future, revealing how technology serves as a bridge across time, enriching both cultural heritage and contemporary advancements.' },
      ]
    },
    {
      id: 'post-2',
      title: 'Smart Cities Unveiled: Subic’s Blueprint for Progress',
      date: 'April 8, 2025',
      excerpt: 'On the second day of the educational tour, the group left Manila’s vibrant energy for the orderly and innovative environment of Subic...',
      image: [d21],
      content: [
        { type: 'text', value: 'On the second day of the educational tour, the group left Manila’s vibrant energy for the orderly and innovative environment of Subic, a model of disciplined governance and smart infrastructure. The visit provided a unique perspective on how precision, efficiency, and technology drive a progressive community, offering more than a tour but a deep dive into the systems powering a modern city.' },
        { type: 'text', value: 'The day started at the Subic Bay Exhibition and Convention Center, where exhibits and presentations detailed Subic’s evolution from a U.S. naval base to a thriving economic hub. This transformation highlighted the power of adaptive reuse, strategic planning, and leadership, while for IT students, it underscored technology’s critical role in managing growth and preserving historical legacy simultaneously.' },
        { type: 'image', src: [d22] },
        { type: 'image', src: [d23] }
      ]
    },
    {
      id: 'post-3',
      title: 'Natural Wonders & National Treasures: Day of Discovery',
      date: 'April 9, 2025',
      excerpt: 'Our third day was a captivating journey through nature’s wonders and the heart of our nation’s history...',
      image: [d31],
      content: [
        { type: 'text', value: 'Our third day was a captivating journey through nature’s wonders and the heart of our nation’s history. We began at the National Museum of Natural History, where one exhibit stood out—the giant crocodile named Lolong, once the largest crocodile ever recorded. Seeing Lolong’s preserved remains reminded us of the incredible biodiversity that the Philippines holds and the importance of conservation. The museum’s use of interactive displays and digital storytelling brought Lolong’s story to life. It was fascinating to see how technology can enhance our understanding of natural history and contribute to protecting endangered species. The experience deepened our appreciation for the richness of our environment and the need to preserve it for future generations.' },
        { type: 'image', src: [d32],},
        { type: 'image', src: [d33],}
      ]
    },
    {
      id: 'post-4',
      title: 'Currency and Circuits: Innovation at BSP and Hytec Power',
      date: 'April 10, 2025',
      excerpt: 'Our fourth day was a fascinating dive into two crucial sectors that drive the economy—finance and technology...',
      image: [d41],
      content: [
        { type: 'text', value: 'Our fourth day was a fascinating dive into two crucial sectors that drive the economy—finance and technology. We began at the Bangko Sentral ng Pilipinas (BSP), where we learned about the intricate processes behind currency creation and the strategic management of the nation’s gold reserves. The staff guided us through high-tech facilities where new bills are printed, showcasing the sophisticated security features embedded in every note to prevent counterfeiting. It was eye-opening to see how technology plays a vital role in maintaining the integrity of our currency. We also learned about how the central bank manages its gold reserves—buying, storing, and securing precious metals to support the nation’s financial stability, showing how innovation and security go hand in hand in economic management.' },
        { type: 'image', src: [d42],},
        { type: 'image', src: [d43],},
        { type: 'text', value: 'After gaining insight into the world of money, we shifted gears to Hytec Power Incorporated, where technology was the main highlight. The company introduced us to the advanced solutions they provide across multiple industries. We explored their construction vehicle simulator, which allows operators to train virtually before handling actual equipment—reducing risk and increasing efficiency. We also witnessed the capabilities of their automated welding machine, showcasing how robotics and precision engineering improve manufacturing processes. Furthermore, their power generation systems demonstrated how technological innovation plays a crucial role in supporting industrial energy needs.' },
      ]
    },
    {
      id: 'post-5',
      title: 'Metro Mechanics: How Manila Moves',
      date: 'April 11, 2025',
      excerpt: 'Day five of our educational tour gave us an exclusive look at the systems that keep Metro Manila moving...',
      image: [d51],
      content: [
        { type: 'text', value: 'Day five of our educational tour gave us an exclusive look at the systems that keep Metro Manila moving. From traffic surveillance to rail control, we witnessed how technology powers the daily flow of millions of commuters—and how IT plays a vital role behind the scenes in managing urban mobility.' },
        { type: 'text', value: 'We started at the Traffic Engineering Center of the MMDA, where we were welcomed into their state-of-the-art Metrobase Surveillance Center. Massive screens displayed live footage from hundreds of CCTVs strategically placed throughout the city. It was impressive to see how real-time monitoring helps manage traffic congestion, detect incidents, and coordinate emergency responses. The MMDA team also explained their protocols during power outages in key areas, including switching to backup systems and working closely with local units. This experience highlighted the importance of reliable IT infrastructure, system redundancy, and efficient data flow in maintaining smooth citywide operations.' },
        { type: 'image', src: [d52],}
      ]
    },
    {
      id: 'post-6',
      title: 'Baguio Bound: Culture, Climate, and Cordillera Charm',
      date: 'April 12, 2025',
      excerpt: 'Our sixth day took us to the cool, cultural heart of the highlands—Baguio City...',
      image: [d61],
      content: [
        { type: 'text', value: 'Our sixth day took us to the cool, cultural heart of the highlands—Baguio City—where every stop offered a deeper understanding of nature, history, and identity. Though it was technically a city tour, it felt more like a journey through the soul of the Cordilleras, rich in tradition and heritage.' },
        { type: 'text', value: 'We began at the Strawberry Farm in La Trinidad, where vibrant fields stretched out before us. Although we didn’t enter the actual farm, simply seeing it was enough to appreciate the region’s agricultural abundance. The farm serves as a symbol of sustainable local livelihood, demonstrating how farming, tourism, and community efforts can work together to drive regional development. It was a powerful reminder that each strawberry sold carries with it a story of dedication, culture, and resilience.' },
        { type: 'image', src: [d62],},
        { type: 'image', src: [d63],}
      ]
    },
    {
      id: 'post-7',
      title: 'Wheels Up, Hearts Full: Our Journey Home',
      date: 'April 14, 2025',
      excerpt: 'Day 7 hit different—it was our last day in Manila. With our bags packed (some definitely heavier with *pasalubong* than clothes), we headed to ..',
      image: [d71],
      content: [
        { type: 'text', value: 'Day 7 hit different—it was our last day in Manila. With our bags packed (some definitely heavier with *pasalubong* than clothes), we headed to the airport still buzzing from a week full of learning, bonding, and unforgettable experiences. There was a mix of excitement and nostalgia in the air as we looked back on the places we visited and the lessons we gained. Laughter echoed in every corner—inside jokes from the bus rides, shared snacks at stopovers, and the familiar “Saan seat mo?” as we boarded our flight. It wasn’t just the end of a tour—it was the closing of a chapter that brought us closer together, sparked new interests, and gave us stories we’ll be telling for years to come.' },
        { type: 'image', src: [d72],}
      ]
    }
  ];

  return (
    <>
      <section id="home">
        <div className="content">
          <BlogPosts posts={posts} setSelectedPost={setSelectedPost} />
        </div>
        <Sidebar posts={posts} />
        {selectedPost && (
          <FullPost
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </section>
    </>
  );
};

export default Home;
