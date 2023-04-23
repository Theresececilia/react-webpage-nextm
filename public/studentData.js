// make id for every student with nanoid

const studentData = [
 /* {
    id: '1',
    name: '',
    profession: '',
    likedin: true,
    linkedinUrl: '',
    portfolio: '',
    portfolioUrl: '',
    email: '',
    desc: '',
    img: '',
},*/
  {
    id: '2',
    name: 'Stefan Kasapovski',
    profession: 'Immersive audio designer ',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/stefan-kasapovski-a1b78b225/',
    portfolio: false,
    portfolioUrl: '',
    email: 'stedakas@gmail.com',
    desc: 'Immersive audio designer for extended reality, games and linear audio',
    img: '',
  },
  {
    id: '3',
    name: 'Rang Li',
    profession:
      'Visual Designer | Creative Director | Art Director | Immersive Experience Creator | Artist',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/rang-li-8143b687/',
    portfolio: true,
    portfolioUrl: 'https://cargocollective.com/youya', //https://www.behance.net/youya-youya
    email: 'youyayewya@gmail.com',
    desc: 'Rang Li is a visual designer, artist, illustrator, picture book author, curator and director. She has been based in Stockholm, since 2017. She has been active in the publishing industry since 2005 and has designed more than 250 books. In addition, she has been involved in a wide range of design projects - including graphic design, product and packaging design, character design, web design and branding. In these projects, she has taken on roles as designer, curator, project planner, art designer and creative director. In addition, she has severed as an adviser to several large publishers and given lectures to college students, artists and others.',
    img: '',
  },
  {
    id: '4',
    name: 'Vitor Rossini',
    profession: 'Game Designer',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/vitor-rossini-0054021b8/',
    portfolio: false,
    portfolioUrl: '',
    email: 'vitorrossini@live.com',
    desc: "When I moved to Sweden with my family almost 2 years ago, I took the opportunity to also change careers and follow what I always wanted to do in life but never thought it would be possible: to work with video games. I'm currently studying Game Design at Futuregames and I couldn't be happier knowing that I can still use all the problem solving and management skills I've acquired along the years on my previous job.",
    img: '',
  },
  {
    id: '0',
    name: 'Therese Johansson',
    profession: 'Frontend Web Developer | Creative coding',
    likedin: true,
    linkedinUrl: 'https://se.linkedin.com/in/therese-johansson-140a221a1',
    portfolio: 'true',
    portfolioUrl: 'https://lunagrace.tech/',
    email: 'Therese@lunagrace.tech',
    desc: '',
    img: '',
  },
  {
    id: '5',
    name: 'Carl Reinestam',
    profession: 'Brandbuilder | AI-activist | Metaverse explorer',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/carl-reinestam-838633',
    portfolio: false,
    portfolioUrl: '',
    email: 'reinestam@gmail.com',
    desc: "Carl is a sales-driven senior manager and intrapreneur with a proven track record of international business and a schooling from Sweden, Japan, France, and United States. He has a great passion for people, organizations, business models, cultures, and the outdoors. He is currently studying computer and information sciences and support services at Changemaker Educations, where he learns how to create content for immersive media (VR, AR, and other interactive video and audio). He is interested in the mix between real life, e-sport and metaverse, and believes in humanity's ability to create a sustainable future for society.",
    img: '',
  },
  {
    id: '6',
    name: 'Alline Pernilla Ackerfors',
    profession: 'Digital artist',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/alline-ackerfors-8108211b3/',
    portfolio: true,
    portfolioUrl: 'http://www.allinefors.com/',
    email: 'allinefors@gmail.com',
    desc: 'Im a 3D digital artist that enjoys create new worlds digitally using: Autodesk Maya, Zbrush, Unreal, Substance Painter, Effect house and Spark AR',
    img: '',
  },
  {
    id: '7',
    name: 'Jad Tawbi',
    profession: 'Game Designer and Programmer | XR Creator',
    likedin: true,
    linkedinUrl: 'http://www.linkedin.com/in/jad-tawbi-682a90218/',
    portfolio: true,
    portfolioUrl:
      'https://www.canva.com/design/DAFZnVuMknc/k0pEjoSyt7B-Q7LmaV96rg/view',
    email: 'jad.tawbi2@gmail.com',
    desc: 'As a Game Designer and Programmer with 4 years of experience in game development, I am passionate about creating meaningful and engaging experiences through my expertise and strive for quality and efficiency in every project I undertake. Throughout my academic and extracurricular pursuits, I have built a strong foundation in creation tools, engines, game design methods, collaborative teamwork, and leadership. As a result, I have a proven track record of producing quality work and excel in both team and individual environments.',
    img: '',
  },
  {
    id: '8',
    name: 'Sutthiporn Paso',
    profession: 'Senior graphic and 3D designer',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/amm-paso',
    portfolio: true,
    portfolioUrl: 'https://pasoamiko.wixsite.com/website',
    email: 'pasoamiko@gmail.com',
    desc: "I am a Graphic Designer from Bangkok with a Master's Degree in Industrial Education (Product Design) and Bachelor’s degree in Architecture (Industrial Design ). I began my design career over 7 years ago as event 3D designer and now I have opportunities study Immersive Experince Creator at Futuregames. I looking for internship opportunities within design and Immersive Experience. If you need a creative designer with several years of experience do not hesitate to send me message.",
    img: '',
  },
  {
    id: '9',
    name: 'Alex Kaminska',
    profession: 'Narrative designer',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/alexkami',
    portfolio: true,
    portfolioUrl: 'https://www.alexkami.com/',
    email: 'textcreating@gmail.com',
    desc: '14 years in copywriting, 12 years in games, and 5 years as a publishing writer. Games and interactive stories are my biggest passion, and my vibe is to make the story playable, unforgettable, and beloved by millions. I’m good with making story structures, mixing creation and deadlines, business, and passion. I can do: game narrative, pitch and presentation, marketing texts, storyline, game flow, complex story, gdd, feature documents, quests, quests schemes, dialogues, technical tasks, briefs, prototype gdd, troubleshooting, and problem-solving. I am keen on logic, science, and structure, and I love chaos and the magic of creativity. I make games as immersive as it is only imaginable. I am currently updating my skills with Immersive Experience Creation and looking for new games to make. Hard skills: story writing, narrative design, GDDs, dialogues, plots, quests schemes, narrative management, organizing (convert chaos into the structure), UI/UX improvements, data mining, game problem-solving, evidence-based and result-oriented game development. Soft skills: stress tolerance, communication, creativity and educability, no-stress collaboration, hardworking',
    img: '',
  },
  {
    id: '10',
    name: 'Rafal Zygula',
    profession:
      'Agile Project Manager & Business Developer | Passionate about Digitization & Sustainability | Future-focused Product Designer | VR/AR/XR Explorer | Immersive Experience Enthusiast',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/rafal-zygula/',
    portfolio: false,
    portfolioUrl: '',
    email: 'rafal.zygula@gmail.com',
    desc: 'Passionate IT professional with expertise in Agile Project Management, Product Management, Scrum Master, and Business Development. Committed to driving digitization and sustainability through continuous improvement, implementation plans, and managing small to medium-sized projects. Adept at leading teams to achieve their goals by creating effective structures and facilitating transparent communication. Skilled in conducting qualitative and quantitative research to develop strategies for business growth, improving communication tools, and identifying opportunities to enhance structure and framework using design thinking and the double diamond methods. Eager to explore Product Design roles and expand expertise in Virtual Reality, AR, and XR solutions through the Immersive Experience Creator course at Futuregames.',
    img: '',
  },
  {
    id: '11',
    name: 'Ida Mäkelä',
    profession: 'Frontend developer | Behavioral scientist',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/makelaida/',
    portfolio: true,
    portfolioUrl: 'https://idamakela.vercel.app/',
    email: 'idamakela98@gmail.com',
    desc: "I never thought I could be a programmer, but here we are and I'm loving every second of it. Maybe not so much when there's bugs, but the feeling of solving the problem and to have learned something new is remarkable. I really like the UX part of building websites, probably because of my background in behavioural science, and I have gotten my eyes up for backend development and hope to explore that area more in the future. To be in a field of work where there is so many areas to choose from can be overwhelming but I love the opportunity of meeting people with different areas of expertise and learning from it!",
    img: '',
  },
  {
    id: '12',
    name: 'Ivar Kronqvist',
    profession: 'Immersive experiance creator | Nurse',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/ivar-kronqvist-86337324b/',
    portfolio: true,
    portfolioUrl: 'https://ivarkronqvist.myportfolio.com/',
    email: 'Ivarkronqvist@gmail.com',
    desc: 'With a unique perspective on creative projects, I work in an Agile and open-minded way with creative people, drawing from my nursing experience to give them the conditions they need to make great stuff. As an XR generalist, I possess a wide range of skills and tools, and am adept at working with people and groups to deliver successful projects. My goal is to become an efficient and skilled project manager, leading projects from conception to implementation.',
    img: '',
  },
  {
    id: '13',
    name: 'Ardavan Masihabadi',
    profession: 'Music Composer | Mix Engineer | Sound Designer',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/ardavan-masihabadi-482a311b1',
    portfolio: true,
    portfolioUrl:
      'https://drive.google.com/drive/folders/1Spmooux1qmnOAnhi02w2Mxn9fQeH-1Ea',
    email: 'masihardavan99@gmail.com',
    desc: "I was born 1999 with an inner passion of music. Studying Bachelor and Master of Multimedia Arts with a focus on audio and having the opportunity to work as Audio Producer in different media mediums such as advertisement, video games and podcasts gave me a clear vision of the overall procedures happening in media and entertainment industry. On top of all, I've had the honor to learn from some of the bests in the industry and teach those skills in my personal workshops, university-supported workshops and as teaching assistant in my university. Lastly, some may count this as my weakness, but when I start doing something, only the best quality satisfies me, even if the odds are not in my favor.",
    img: '',
  },
  {
    id: '14',
    name: 'Sheila Géa',
    profession: 'Immersive Experience Creator (VR - AR ) | Architect ',
    likedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/sheilagea/',
    portfolio: true,
    portfolioUrl: 'https://www.sheiladgea.com/',
    email: 'sheilagea@gmail.com',
    desc: "Hello! It is nice to meet you, I'm Sheila! I was born and raised in Brazil, but I'm currently living in Stockholm, Sweden.I have a degree in Architecture and Urbanism and a Postgraduate Degree in Project Management. Presently I am in the process of making my career transition to the Immersive Experience Creator. I have been dedicating my time to studying this area and currently doing my high vocational program. It would be a privilege to have the opportunity to share with you and your company my different views of the world. If you have any questions or require any further information, feel free to contact me. I'll be delighted to discuss my qualifications and interests.",
    img: '',
  },
];

export default studentData;