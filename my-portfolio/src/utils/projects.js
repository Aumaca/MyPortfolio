const projects = [
  {
    name: 'AnimeRank',
    url: 'https://aumaca-animerank.vercel.app/',
    badges: [
      'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
      'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
      'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
      'https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink',
      'https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown',
      'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white'
    ],
    desktopImages: [
      'slider1/1.png',
      'slider1/2.png',
      'slider1/3.png',
      'slider1/4.png',
      'slider1/5.png',
      'slider1/6.png'
    ],
    mobileImages: ['slider1/7.png'],
    description: {
      en: `This is a project created based on the website MyAnimeList, that allows users to create a list of animes and score them, also allowing comments.`,
      pt: `Este é um projeto criado com base no site MyAnimeList, que permite aos usuários criar uma lista de animes e avaliá-los, além de permitir comentários.`
    }
  },
  {
    name: 'MyNikki',
    badges: [
      'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white',
      'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white',
      'https://img.shields.io/badge/Google_Play-217346?style=for-the-badge&logo=google-play&logoColor=white',
      'https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white',
      'https://img.shields.io/badge/Google_Drive-4285F4?style=for-the-badge'
    ],
    desktopImages: ['slider2/1.png'],
    mobileImages: ['slider2/1.png'],
    description: {
      en: `My first app to be launched in Google Play Store, a digital diary app made using Flutter.\nThis project was indeed to be a complex app, with MongoDB server, images from AWS S3 server, login through a backend server and more. After I realized that the app should be simple.\nHowever, even without releasing the complex version, I did the app in the complex way using pre-signed objects for image visualization permission, login using Google, and more.`,
      pt: `Meu primeiro aplicativo lançado na Google Play Store, um aplicativo de diário digital feito usando Flutter.\nEste projeto deveria ser um aplicativo complexo, com servidor MongoDB, imagens no servidor AWS S3, login através de um servidor backend e mais. Depois percebi que o aplicativo deveria ser simples.\nNo entanto, mesmo sem lançar a versão complexa, fiz o aplicativo da maneira complexa, usando objetos pré-assinados para permissão de visualização de imagens, login usando Google e mais.`
    }
  },
  {
    name: 'Truth Table Generator',
    url: 'https://aumaca.github.io/Truth-Table-Generator/',
    badges: [
      'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    ],
    desktopImages: ['slider3/1.png', 'slider3/2.png', 'slider3/3.png', 'slider3/4.png'],
    mobileImages: ['slider3/5.png', 'slider3/6.png'],
    description: {
      en: `I developed a basic Truth Table Generator that constructs truth tables for AND, OR, conditional, and negation operations.\nThis project marked my first significant coding challenge, taking two weeks to complete.\nI utilized object-oriented programming principles to enhance code readability and organization.`,
      pt: `Eu desenvolvi um gerador básico de Tabelas Verdade que constrói tabelas para operações de AND, OR, condicional e negação.\nEste projeto marcou meu primeiro desafio significativo de programação, levando duas semanas para ser concluído.\nEu utilizei princípios de programação orientada a objetos para melhorar a legibilidade e organização do código.`
    }
  },
  {
    name: 'Organização Contábil Sorocaba Website',
    url: 'https://contabilsorocaba.com.br/',
    badges: [
      'https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white',
      'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    ],
    desktopImages: ['slider7/1.png', 'slider7/2.png', 'slider7/3.png'],
    mobileImages: ['slider7/4.png', 'slider7/5.png', 'slider7/6.png', 'slider7/7.png'],
    description: {
      en: `This project marked my first professional work as a web developer in 2023.\nIn my previous job at an accounting office, I was tasked with creating a new website for the company, which was previously on WordPress. My responsibility was to completely redesign the site's aesthetics, taking into account the specific needs and requests of the client.\nI hand-coded all the design in CSS, which allowed me to customize each element of the site according to the company's visual guidelines, ensuring a unique and professional presentation.\nDuring this process, I had the opportunity to work on a project on demand, facing various requirements that demanded creativity and attention to detail. This experience not only helped me improve my technical skills but also provided me with a deeper understanding of the importance of intuitive and attractive design for user satisfaction.`,
      pt: `Este projeto marcou meu primeiro trabalho profissional como desenvolvedor web em 2023.\nEm meu antigo emprego em um escritório de contabilidade, fui encarregado de criar um novo site para a empresa, que estava previamente em WordPress. Minha responsabilidade consistiu em reformular completamente a estética do site, levando em conta as necessidades específicas e as solicitações do cliente.\nRealizei todo o design à mão em CSS, o que me permitiu personalizar cada elemento do site de acordo com as diretrizes visuais da empresa, garantindo uma apresentação única e profissional.\nDurante esse processo, tive a oportunidade de trabalhar em um projeto sob demanda, enfrentando diversos requisitos que exigiam criatividade e atenção aos detalhes. Essa experiência não apenas me ajudou a aprimorar minhas habilidades técnicas, mas também me proporcionou uma compreensão mais profunda da importância de um design intuitivo e atraente para a satisfação do usuário.`
    }
  },
  {
    name: 'Shell Password Manager',
    url: 'https://github.com/Aumaca/Shell-Password-Manager',
    badges: [
      'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=whitek',
      'https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white'
    ],
    desktopImages: [
      'slider4/1.png',
      'slider4/2.png',
      'slider4/3.png',
      'slider4/4.png',
      'slider4/5.png',
      'slider4/6.png',
      'slider4/7.png'
    ],
    mobileImages: [],
    description: {
      en: `I was curious about how to really build a password manager, that can unlock one password with another.\nThrough this little practice, I learned how to do it, and it was great!`,
      pt: `Eu estava curioso sobre como realmente construir um gerenciador de senhas, que pudesse desbloquear uma senha com outra.\nAtravés dessa pequena prática, aprendi como fazer isso, e foi ótimo!`
    }
  },
  {
    name: 'Chess',
    url: 'https://aumaca.github.io/Chess-Game/',
    badges: [
      'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
    ],
    desktopImages: ['slider6/1.png', 'slider6/2.png', 'slider6/3.png', 'slider6/4.png'],
    mobileImages: ['slider6/5.png', 'slider6/6.png'],
    description: {
      en: `This was another challenging one for me.\nFor the first time, I would use OOP to create a project from scratch. I was also learning about layout (grid, flex), code organization, etc.\nAnd yes, this took a lot of logic to make. In reality, I stopped at some point, still lacking some functionalities like recognizing a draw or some movements.`,
      pt: `Este foi outro desafio para mim.\nPela primeira vez, eu usaria OOP para criar um projeto do zero. Eu também estava aprendendo sobre layout (grid, flex), organização de código, etc.\nE sim, isso exigiu muita lógica para ser feito. Na verdade, eu parei em algum ponto, ainda faltando algumas funcionalidades como reconhecer um empate ou alguns movimentos.`
    }
  },
  {
    name: 'Tic-Tac-Toe',
    url: 'https://aumaca.github.io/Tic-Tac-Toe/',
    badges: [
      'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'
    ],
    desktopImages: ['slider5/1.png', 'slider5/2.png'],
    mobileImages: ['slider5/3.png', 'slider5/4.png'],
    description: {
      en: `One of the first projects I ever did, when I was still learning about the whole concept of web development.`,
      pt: `Um dos primeiros projetos que eu fiz, quando ainda estava aprendendo sobre todo o conceito de desenvolvimento web.`
    }
  }
]

export default projects
