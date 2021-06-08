let resumeData = {
    name: 'Akash Verma',
    role: 'Fullstack Developer and a Competitive Programmer',
    roleDescription:
      " I'm currently in my pre-final year, pursuing B.E in Computer Science and Engineering at IET DAVV Indore. I like to learn about new technologies and implementing them or simply play badminton in my free time.",
    socialLinks: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/akashverma514739192',
        className: 'fa fa-linkedin',
      },
      {
        name: 'github',
        url: 'http://github.com/AkashVerma1515',
        className: 'fa fa-github',
      },
      {
        name: 'facebook',
        url: 'https://www.facebook.com/profile.php?id=100006881080266',
        className: 'fa fa-facebook',
      },
      {
        name: 'mail',
        url: 'mailto:akashzxc786@gmail.com',
        className: 'fa fa-envelope',
      },
    ],
    aboutme:
      'I am currently in my pre-final year, pursuing B.E in Computer Science and Engineering at IET DAVV Indore',
    address: 'India',
    education: [
      {
        UniversityName: 'Institute of Engineering and Technology DAVV',
        specialization: 'B.E in Computer Science and Engineering',
        duration: 'July 2018 - May 2022',
        Achievements: 'CGPA - 7.5',
      },
      {
        UniversityName: 'Carmel Convent Sr. Sec. School Neemuch',
        specialization: 'PCM with Physical Education',
        duration: 'April 2016 - May 2018',
        Achievements: 'Scored 81%',
      },
    ],
    
    skillsDescription: 'Your skills here',
    skills: [
      {
        category: 'Programming Languages',
        list: [
          {
            img: '/images/c.png',
            name: 'C',
          },
          {
            img: '/images/cpp.png',
            name: 'C++',
          },
          {
            img:
              'https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg',
            name: 'JavaScript',
          },
          {
            img: '/images/java.png',
            name: 'Java',
          },
        ],
      },
      {
        category: 'Web Development',
        list: [
          {
            img: '/images/html.png',
            name: 'HTML',
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg',
            name: 'CSS',
          },
          {
            img: '/images/bootstrap.png',
            name: 'Bootstrap',
          },
          {
            img: '/images/react.png',
            name: 'React',
          },
          {
            img:
              'http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png',
            name: 'Node.js',
          },
          
        ],
      },

      {
        category: 'Databases',
        list: [
          
          {
            img: '/images/mongo.png',
            name: 'mongoDB',
          },
          
        ],
      },
    
      {
        category: 'Others',
        list: [
          {
            img: '/images/git.png',
            name: 'Git',
          },
          {
            img: '/images/postman.svg',
            name: 'Postman',
          },
        ],
      },
    ],
    portfolio: [
      // {
      //   title: 'Babblify',
      //   intro:
      //     "A MERN stack social network application with features implemented: user authentication, profile viewing, posting, commenting, and following/unfollowing.",
      //   des:
      //     'It is a Social Network Application where the user can be : ',
      //   points: [
      //     ' Able to view posts.',
      //     ' Able to create a post.',
      //     ' Able to delete his/her post.',
      //     ' Able to like/unlike a post.',
      //     ' Able to comment on a post.',
      //     ' Able to view other users profiles.',
      //   ],
      //   imgurl: '/images/portfolio/babblify.png',
      //   techstack: ['Node.js', 'React', 'Express', 'mongoDB'],
      //   links: {
      //     launch: 'https://babblify.herokuapp.com/',
      //     github: 'https://github.com/AkashVerma1515/babblify',
      //   },
      // },
      {
        title: 'Blood Bank',
        intro:
          'It is a web application that is designed to store and retrieve the donors.',
        des: 'The website has the following features : ',
        points: [
          'The user can Add the donation details like name, blood group, city, contact, etc.. .',
          'The user can search the donors as per the requirements.',
          'The user can also check all the donors who had registered for the blood donation.',
        ],
        imgurl: '/images/portfolio/bloodbank.png',
        techstack: ['Node.js', 'mongoDB', 'Express'],
        links: {
          launch: 'https://bloodbank-bb.herokuapp.com/',
          github: 'https://github.com/AkashVerma1515/BloodBank-bb',
        },
      },
      
      {
        title: 'Chatroom Application',
        intro:
          'A multi-threaded client-server chat application written in C++ that uses sockets to communicate.',
        des: 'The app has the following features :',
        points: [
          'Users can send and receive messages simultaneously',
          'Multiple users can send messages simultaneously',
        ],
        imgurl: '/images/portfolio/chatroom.jpeg',
        techstack: ['C++','Multi-threading','Sockets'],
        links: {
          launch: 'https://github.com/AkashVerma1515/chatroom_cpp',        
          github: 'https://github.com/AkashVerma1515/chatroom_cpp',
        },
      },
      
      {
        title: 'Xrypto',
        intro:
          "A CryptoCurrency tracking web application. We can analyze the cryptocurrencies in this application.",
        des:
          'It is a Tracking web application where the client can search the crypto and analyze it. It updates the information over a fixed interval of time. It contains more than 50 cryptocurrencies which contains information like: ',
        points: [
          ' Current Price of the cryptocurrency.',
          ' Total Volume of the cyrptocurrency.',
          ' Live percentage change of the price.',
          ' Total Market Cap.',
        ],
        imgurl: '/images/portfolio/xrypto.png',
        techstack: ['React', 'REST API'],
        links: {
          launch: 'https://xrypto-app.herokuapp.com/',
          github: 'https://github.com/AkashVerma1515/Xrypto',
        },
      },

    ]
    
  };
  
    export default resumeData