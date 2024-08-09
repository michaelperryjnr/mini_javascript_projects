const questions = [
  {
    question: "A pair of twin figures in Yoruba is called ………",
    options: ["A. kansawa", "B. obheshwana", "C. Fon", "D. ere ibeji"],
    answer: "D",
  },
  {
    question: "The pair of twin figures represent…",
    options: [
      "A. deceased twins",
      "B. deceased kings",
      "C. deceased queens",
      "D. deceased mothers",
    ],
    answer: "A",
  },
  {
    question: "“Fon” is which type of African Art?",
    options: ["A. Sculpture", "B. Textile", "C. Beaded work", "D. Basketry"],
    answer: "B",
  },
  {
    question: "A royal war tunic in the Republic of Benin is known as the",
    options: ["A. ere ibeji", "B. Kansawa", "C. Fon", "D. obheshwana"],
    answer: "B",
  },
  {
    question:
      "The asafo flag was made by which people during the colonial period?",
    options: ["A. Asantes", "B. Ewes", "C. Fantes", "D. Nzemas"],
    answer: "C",
  },
  {
    question: "A beaded panel in South Africa is known as",
    options: ["A. obheshwana", "B. Fon", "C. Kansawa", "D. Asafo"],
    answer: "A",
  },
  {
    question:
      "A basket with a pointed lid from Kigesi District is found where?",
    options: ["A. Buganda", "B. Zulu", "C. Yoruba", "D. Ga’anda"],
    answer: "A",
  },
  {
    question: "Which people use the Ngaady amwash?",
    options: ["A. Asantes", "B. Yoruba", "C. Fantes", "D. Kuba"],
    answer: "D",
  },
  {
    question:
      "All the following are roles of the artist in the community except..",
    options: [
      "A. Healer",
      "B. Mediator",
      "C. Narrator of history",
      "D. Owner of humans",
    ],
    answer: "D",
  },
  {
    question:
      "Gender affects the kind of African art you engage in.\nTrue or False",
    options: ["A. True", "B. False"],
    answer: "A",
  },
  {
    question: "The primary material for creating the royal war tunic is:",
    options: ["A. Wood", "B. Cloth", "C. Beads", "D. Metal"],
    answer: "B",
  },
  {
    question:
      "The beaded panel created by young women in South Africa is called:",
    options: ["A. obheshwana", "B. ere ibeji", "C. kansawa", "D. Fon"],
    answer: "A",
  },
  {
    question: "The mask (Ngaady amwash) is significant to which culture?",
    options: ["A. Yoruba", "B. Fante", "C. Kuba", "D. Asante"],
    answer: "C",
  },
  {
    question: "The function of the twin figures in Yoruba culture is to:",
    options: [
      "A. Represent living twins",
      "B. Honor deceased twins",
      "C. Decorate homes",
      "D. Serve as toys",
    ],
    answer: "B",
  },
  {
    question: "The Asafo flag represents:",
    options: [
      "A. Military achievements",
      "B. Religious beliefs",
      "C. Royal lineage",
      "D. Agricultural practices",
    ],
    answer: "A",
  },
  {
    question: "The materials used in creating the beaded panel include:",
    options: [
      "A. Wood and clay",
      "B. Glass beads and cotton thread",
      "C. Metal and ivory",
      "D. Stone and shells",
    ],
    answer: "B",
  },
  {
    question: "The Buganda basket is notable for its:",
    options: ["A. Height", "B. Color", "C. Shape", "D. Material"],
    answer: "C",
  },
  {
    question:
      "The pot representing an ancestral spirit is made by which ethnic group?",
    options: ["A. Yoruba", "B. Ga’anda", "C. Ga’anda peoples", "D. Zulu"],
    answer: "C",
  },
  {
    question: "The role of the artist as a healer is associated with:",
    options: [
      "A. Traditional beliefs",
      "B. Modern art",
      "C. Urban street art",
      "D. Tourist art",
    ],
    answer: "A",
  },
  {
    question:
      "Which of the following materials is NOT commonly used in African art?",
    options: ["A. Clay", "B. Plastic", "C. Wood", "D. Metal"],
    answer: "B",
  },
  {
    question: "The Luba people are known for their work in:",
    options: ["A. Textiles", "B. Sculpture", "C. Pottery", "D. Beadwork"],
    answer: "B",
  },
  {
    question: "The Akan adinkra symbols are used in:",
    options: ["A. Textile design", "B. Sculpture", "C. Pottery", "D. Jewelry"],
    answer: "A",
  },
  {
    question: 'The term "assemblage" in African art refers to:',
    options: [
      "A. Mixed media works",
      "B. Traditional sculptures",
      "C. Performance art",
      "D. Textile art",
    ],
    answer: "A",
  },
  {
    question: "The primary function of masks in African culture is to:",
    options: [
      "A. Serve as decoration",
      "B. Be used in rituals and ceremonies",
      "C. Act as toys",
      "D. Store food",
    ],
    answer: "B",
  },
  {
    question: "The use of coral in the regalia of the king symbolizes:",
    options: [
      "A. Wealth",
      "B. Power and affiliation with water",
      "C. Fertility",
      "D. Strength",
    ],
    answer: "B",
  },
  {
    question:
      "The primary medium for male artists in traditional African art is:",
    options: ["A. Fabric", "B. Wood", "C. Clay", "D. Metal"],
    answer: "B",
  },
  {
    question: "Women in the Luba culture are known to create:",
    options: [
      "A. Pottery",
      "B. Wooden sculptures",
      "C. Metalworks",
      "D. Textiles",
    ],
    answer: "A",
  },
  {
    question: "The role of the artist can be described as:",
    options: [
      "A. Solely decorative",
      "B. Functional and meaningful",
      "C. Commercial",
      "D. Isolated from society",
    ],
    answer: "B",
  },
  {
    question: 'The term "urban street art" refers to:',
    options: [
      "A. Art created for galleries",
      "B. Works produced by self-taught artists in cities",
      "C. Traditional crafts",
      "D. Art for tourists",
    ],
    answer: "B",
  },
  {
    question:
      "The materials for making art include all of the following EXCEPT:",
    options: [
      "A. Only natural materials",
      "B. Only synthetic materials",
      "C. Both natural and synthetic materials",
      "D. Only traditional materials",
    ],
    answer: "A",
  },
  {
    question: "The primary purpose of tourist art is to:",
    options: [
      "A. Reflect local culture",
      "B. Provide mementos for tourists",
      "C. Serve as fine art",
      "D. Educate about history",
    ],
    answer: "B",
  },
  {
    question:
      "The use of recycled materials in contemporary African art reflects:",
    options: [
      "A. Traditional values",
      "B. Environmental awareness",
      "C. Economic struggles",
      "D. Aesthetic preferences",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following best describes the artistic training in traditional African societies?",
    options: [
      "A. Formal education",
      "B. Informal apprenticeship",
      "C. Self-taught",
      "D. Online courses",
    ],
    answer: "B",
  },
  {
    question:
      "The significance of the artist in the community is often linked to:",
    options: [
      "A. Financial gain",
      "B. Cultural representation",
      "C. Personal expression",
      "D. Isolation from society",
    ],
    answer: "B",
  },
  {
    question: 'The term "Bogolan" refers to:',
    options: [
      "A. A type of sculpture",
      "B. A textile made by women",
      "C. A form of pottery",
      "D. A painting technique",
    ],
    answer: "B",
  },
  {
    question: "The primary focus of contemporary artists is to:",
    options: [
      "A. Adhere to traditional methods",
      "B. Explore current issues",
      "C. Limit their audience",
      "D. Avoid experimentation",
    ],
    answer: "B",
  },
  {
    question: 'The term "performance art" in African culture often involves:',
    options: [
      "A. Static displays",
      "B. Interaction and engagement",
      "C. Solo performances only",
      "D. Written scripts",
    ],
    answer: "B",
  },
  {
    question: "The role of the artist as a creator encompasses:",
    options: [
      "A. Only decorative tasks",
      "B. Transforming materials into meaningful works",
      "C. Ignoring community needs",
      "D. Focusing solely on personal style",
    ],
    answer: "B",
  },
  {
    question: "The materials used in the production of African art include:",
    options: [
      "A. Only natural materials",
      "B. Only synthetic materials",
      "C. Both natural and synthetic materials",
      "D. Only traditional materials",
    ],
    answer: "C",
  },
  {
    question: "The role of the artist as a mediator involves:",
    options: [
      "A. Creating art for profit",
      "B. Bridging cultural gaps",
      "C. Solely focusing on aesthetics",
      "D. Ignoring community needs",
    ],
    answer: "B",
  },
  {
    question: "The significance of masks in cultural ceremonies is to:",
    options: [
      "A. Serve as a fashion accessory",
      "B. Represent ancestral spirits",
      "C. Be displayed in galleries",
      "D. Function as a toy",
    ],
    answer: "B",
  },
  {
    question: "The materials used for beadwork generally include:",
    options: [
      "A. Wood and clay",
      "B. Glass and plastic",
      "C. Metal and stone",
      "D. Fabric and paper",
    ],
    answer: "B",
  },
  {
    question: "The primary audience for modern African art is:",
    options: [
      "A. Local communities only",
      "B. International collectors and galleries",
      "C. Tourists",
      "D. Schools",
    ],
    answer: "B",
  },
  {
    question: 'The term "contemporary art" refers to works that:',
    options: [
      "A. Are strictly traditional",
      "B. Engage with modern issues",
      "C. Are only for local audiences",
      "D. Use only traditional materials",
    ],
    answer: "B",
  },
  {
    question: "The role of the artist in producing royal regalia is to:",
    options: [
      "A. Create decorative items",
      "B. Honor ancestors",
      "C. Reflect political power",
      "D. Serve as toys",
    ],
    answer: "C",
  },
  {
    question: 'The term "mixed media" in contemporary art indicates:',
    options: [
      "A. Use of a single material",
      "B. Combination of different materials",
      "C. Traditional techniques",
      "D. Digital art only",
    ],
    answer: "B",
  },
  {
    question: "The role of the artist in documenting history involves:",
    options: [
      "A. Creating abstract art",
      "B. Ignoring past events",
      "C. Translating history into visual forms",
      "D. Focusing solely on aesthetics",
    ],
    answer: "C",
  },
  {
    question: "The primary function of textiles in African culture is to:",
    options: [
      "A. Be used for decoration",
      "B. Serve practical purposes",
      "C. Reflect personal style",
      "D. Be worn only by royalty",
    ],
    answer: "B",
  },
  {
    question:
      "The significance of the artist's role in the community includes:",
    options: [
      "A. Financial independence",
      "B. Cultural continuity",
      "C. Isolation from society",
      "D. Strict adherence to tradition",
    ],
    answer: "B",
  },
  {
    question: 'The term "tourist art" refers to:',
    options: [
      "A. Art created for local consumption",
      "B. Art sold primarily to tourists",
      "C. Art that is purely decorative",
      "D. Art produced by local artists",
    ],
    answer: "B",
  },
  {
    question: "The primary characteristic of successful African art is:",
    options: [
      "A. Complexity",
      "B. Simplicity",
      "C. Clear definition of each part",
      "D. Randomness",
    ],
    answer: "C",
  },
  {
    question: "The primary role of traditional craftsmen is to:",
    options: [
      "A. Create art for personal expression",
      "B. Produce functional items",
      "C. Document history",
      "D. Create art for galleries",
    ],
    answer: "B",
  },
  {
    question: "The Luba people are known for their:",
    options: [
      "A. Textile production",
      "B. Wood carving",
      "C. Pottery",
      "D. Beadwork",
    ],
    answer: "B",
  },
  {
    question: 'The term "gendered roles" in art refers to:',
    options: [
      "A. Roles assigned based on age",
      "B. Roles assigned based on gender",
      "C. Roles assigned based on skill",
      "D. Roles assigned based on culture",
    ],
    answer: "B",
  },
  {
    question:
      "The primary medium for women artists in traditional African art is:",
    options: ["A. Metal", "B. Clay", "C. Wood", "D. Fabric"],
    answer: "B",
  },
  {
    question: 'The term "assemblage" in African art often involves:',
    options: [
      "A. Mixed media",
      "B. Performance",
      "C. Sculpture",
      "D. Painting",
    ],
    answer: "A",
  },
  {
    question: "The primary audience for contemporary African art is:",
    options: [
      "A. Local communities",
      "B. International collectors",
      "C. Schools",
      "D. Museums",
    ],
    answer: "B",
  },
  {
    question: "The primary purpose of beadwork in African culture is to:",
    options: [
      "A. Serve as decoration",
      "B. Reflect status",
      "C. Be used in rituals",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question: "The significance of the artist in the community often includes:",
    options: [
      "A. Financial gain",
      "B. Spiritual connection",
      "C. Cultural representation",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question: 'The term "urban street art" often reflects:',
    options: [
      "A. Traditional values",
      "B. Contemporary issues",
      "C. Cultural heritage",
      "D. None of the above",
    ],
    answer: "B",
  },
  {
    question: "The materials used in making masks often include:",
    options: [
      "A. Metal and glass",
      "B. Wood and fabric",
      "C. Clay and plastic",
      "D. Paper and stone",
    ],
    answer: "B",
  },
  {
    question: "The role of the artist as a creator often involves:",
    options: [
      "A. Following strict guidelines",
      "B. Ignoring community needs",
      "C. Innovating and experimenting",
      "D. Focusing solely on aesthetics",
    ],
    answer: "C",
  },
  {
    question: "The primary function of masks in ceremonies is to:",
    options: [
      "A. Serve as decoration",
      "B. Represent spiritual beliefs",
      "C. Be worn for fashion",
      "D. Act as toys",
    ],
    answer: "B",
  },
  {
    question:
      "The significance of the artist's role in the community includes:",
    options: [
      "A. Financial independence",
      "B. Cultural continuity",
      "C. Isolation from society",
      "D. Strict adherence to tradition",
    ],
    answer: "B",
  },
  {
    question: "The primary focus of contemporary African artists is to:",
    options: [
      "A. Adhere to traditional methods",
      "B. Explore current issues",
      "C. Limit their audience",
      "D. Avoid experimentation",
    ],
    answer: "B",
  },
  {
    question: 'The term "Bogolan" refers to:',
    options: [
      "A. A type of sculpture",
      "B. A textile made by women",
      "C. A form of pottery",
      "D. A painting technique",
    ],
    answer: "B",
  },
  {
    question:
      "The primary medium for male artists in traditional African art is:",
    options: ["A. Fabric", "B. Wood", "C. Clay", "D. Metal"],
    answer: "B",
  },
  {
    question: "The significance of masks in cultural ceremonies is to:",
    options: [
      "A. Serve as a fashion accessory",
      "B. Represent ancestral spirits",
      "C. Be displayed in galleries",
      "D. Function as a toy",
    ],
    answer: "B",
  },
  {
    question: "The materials used for beadwork generally include:",
    options: [
      "A. Wood and clay",
      "B. Glass and plastic",
      "C. Metal and stone",
      "D. Fabric and paper",
    ],
    answer: "B",
  },
  {
    question: "The primary audience for modern African art is:",
    options: [
      "A. Local communities only",
      "B. International collectors and galleries",
      "C. Tourists",
      "D. Schools",
    ],
    answer: "B",
  },
  {
    question: 'The term "contemporary art" refers to works that:',
    options: [
      "A. Are strictly traditional",
      "B. Engage with modern issues",
      "C. Are only for local audiences",
      "D. Use only traditional materials",
    ],
    answer: "B",
  },
  {
    question: "The role of the artist in producing royal regalia is to:",
    options: [
      "A. Create decorative items",
      "B. Honor ancestors",
      "C. Reflect political power",
      "D. Serve as toys",
    ],
    answer: "C",
  },
  {
    question: 'The term "mixed media" in contemporary art indicates:',
    options: [
      "A. Use of a single material",
      "B. Combination of different materials",
      "C. Traditional techniques",
      "D. Digital art only",
    ],
    answer: "B",
  },
  {
    question: "What is the primary focus of African philosophy?",
    options: [
      "A. Economic systems",
      "B. Social organization",
      "C. Knowledge based on experiences",
      "D. Political structures",
    ],
    answer: "C",
  },
  {
    question:
      "Which term refers to the visual representation of ideas in African societies?",
    options: ["A. Aesthetics", "B. Art", "C. Philosophy", "D. Culture"],
    answer: "B",
  },
  {
    question: "The Lukasa is primarily used for:",
    options: [
      "A. Artistic decoration",
      "B. Historical documentation",
      "C. Memory aid in initiation ceremonies",
      "D. Religious rituals",
    ],
    answer: "C",
  },
  {
    question: "Aesthetics in African art primarily deals with:",
    options: [
      "A. Realistic detail",
      "B. Symbolic statements",
      "C. Photographic likeness",
      "D. Modern interpretations",
    ],
    answer: "B",
  },
  {
    question: "What does the Yoruba concept of 'iwa' refer to?",
    options: ["A. Beauty", "B. Existence/Character", "C. Art", "D. Philosophy"],
    answer: "B",
  },
  {
    question:
      "Which of the following is NOT a characteristic of African aesthetics?",
    options: [
      "A. Complexity of composition",
      "B. Strict adherence to realism",
      "C. Clarity of form",
      "D. Balance and symmetry",
    ],
    answer: "B",
  },
  {
    question: "What does 'ase' signify in Yoruba culture?",
    options: [
      "A. The power to create",
      "B. Aesthetic appeal",
      "C. Historical significance",
      "D. Artistic talent",
    ],
    answer: "A",
  },
  {
    question: "The head of a queen from the Yoruba culture is made of:",
    options: ["A. Wood", "B. Terracotta", "C. Metal", "D. Stone"],
    answer: "B",
  },
  {
    question:
      "Which artwork serves as a symbol of ideal womanhood in Baga culture?",
    options: ["A. D’mba Mask", "B. Mblo Mask", "C. Lukasa", "D. Dance Wand"],
    answer: "A",
  },
  {
    question: "The aesthetic value of a work of art is determined by:",
    options: [
      "A. Its historical context",
      "B. Its functionality and visual pleasure",
      "C. Its monetary value",
      "D. The artist’s fame",
    ],
    answer: "B",
  },
  {
    question: "What does the Yoruba term 'ewa' translate to?",
    options: ["A. Character", "B. Knowledge", "C. Beauty", "D. Tradition"],
    answer: "C",
  },
  {
    question: "The Dance Wand in honor of Eshu is primarily made of:",
    options: ["A. Terracotta", "B. Wood", "C. Metal", "D. Clay"],
    answer: "B",
  },
  {
    question:
      "Which of the following is an example of an aesthetic characteristic?",
    options: [
      "A. Size",
      "B. Functionality",
      "C. Historical background",
      "D. Artist’s intention",
    ],
    answer: "A",
  },
  {
    question:
      "What is the significance of the 'Ifa Divination Tray' in Yoruba aesthetics?",
    options: [
      "A. It serves as a decorative piece.",
      "B. It is used for divination and ritual.",
      "C. It is a historical artifact.",
      "D. It represents modern art.",
    ],
    answer: "B",
  },
  {
    question: "The concept of beauty in African aesthetics is:",
    options: [
      "A. Narrow and limited",
      "B. Central but complex",
      "C. Primarily focused on realism",
      "D. Based only on external appearance",
    ],
    answer: "B",
  },
  {
    question: "The term 'Mbudye' refers to:",
    options: [
      "A. A type of artwork",
      "B. A group of elite initiates",
      "C. A traditional dance",
      "D. A philosophical concept",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary medium used for the 'Mother and Child' sculpture from Asante culture?",
    options: ["A. Terracotta", "B. Wood", "C. Metal", "D. Stone"],
    answer: "B",
  },
  {
    question:
      "Which of the following artworks is associated with the Dahomey Kingdom?",
    options: [
      "A. D’mba Mask",
      "B. Memorial Figure",
      "C. Dance Wand",
      "D. Head of a Queen",
    ],
    answer: "B",
  },
  {
    question: "The aesthetic analysis of an artwork includes evaluating:",
    options: [
      "A. The artist's biography",
      "B. Cultural significance",
      "C. Visual aspects such as color and shape",
      "D. The market value",
    ],
    answer: "C",
  },
  {
    question: "Which of the following is a common theme in African art?",
    options: [
      "A. Individualism",
      "B. Community and history",
      "C. Abstract expressionism",
      "D. Modernism",
    ],
    answer: "B",
  },
  {
    question: "The Yoruba cosmos consists of:",
    options: [
      "A. Only visible elements",
      "B. Aye and Orun",
      "C. Art and philosophy",
      "D. Culture and history",
    ],
    answer: "B",
  },
  {
    question: "The term 'Egungun' refers to:",
    options: [
      "A. A type of mask",
      "B. An ancestral spirit",
      "C. A traditional dance",
      "D. A philosophical concept",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following best describes the relationship between art and philosophy in African cultures?",
    options: [
      "A. They are completely separate.",
      "B. Art is a reflection of philosophical ideas.",
      "C. Philosophy has no influence on art.",
      "D. Art is more important than philosophy.",
    ],
    answer: "B",
  },
  {
    question: "The Asante people favor which style in their sculptural art?",
    options: [
      "A. Abstract",
      "B. Naturalism",
      "C. Hyper-realism",
      "D. Minimalism",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is a characteristic of Yoruba aesthetics?",
    options: [
      "A. Emphasis on individual expression",
      "B. Relationship between character and beauty",
      "C. Focus solely on visual appeal",
      "D. Disregard for cultural context",
    ],
    answer: "B",
  },
  {
    question: "The 'Palette of Narmer' is associated with which civilization?",
    options: ["A. Yoruba", "B. Egyptian", "C. Asante", "D. Baga"],
    answer: "B",
  },
  {
    question: "The concept of beauty in African art is often linked to:",
    options: [
      "A. Economic status",
      "B. Moral and social values",
      "C. Artistic techniques",
      "D. Popular trends",
    ],
    answer: "B",
  },
  {
    question: "The 'Cup, Kuba' is primarily made of:",
    options: ["A. Glass", "B. Metal", "C. Wood", "D. Terracotta"],
    answer: "C",
  },
  {
    question:
      "Which of the following is a key aspect of evaluating art in African cultures?",
    options: [
      "A. The artist's fame",
      "B. The historical context",
      "C. The emotional impact on the viewer",
      "D. The market demand",
    ],
    answer: "C",
  },
  {
    question: "The 'Battle of Adwa' artwork is significant for its:",
    options: [
      "A. Historical representation",
      "B. Use of modern materials",
      "C. Abstract style",
      "D. Lack of cultural context",
    ],
    answer: "A",
  },
  {
    question:
      "The concept of 'traditional knowledge' in African art refers to:",
    options: [
      "A. Modern artistic techniques",
      "B. Oral traditions and narratives",
      "C. Written documentation",
      "D. Global influences",
    ],
    answer: "B",
  },
  {
    question: "The 'Memorial Figure' from Bembe culture is made of:",
    options: [
      "A. Wood and shell",
      "B. Metal and fabric",
      "C. Terracotta and glass",
      "D. Stone and clay",
    ],
    answer: "A",
  },
  {
    question:
      "Which artwork is a representation of a strong, mature woman in Baga culture?",
    options: ["A. Dance Wand", "B. D’mba Mask", "C. Lukasa", "D. Mblo Mask"],
    answer: "D",
  },
  {
    question: "What does the term 'visual analysis' involve?",
    options: [
      "A. Evaluating historical context",
      "B. Assessing emotional responses",
      "C. Analyzing visual aspects like line and color",
      "D. Understanding market trends",
    ],
    answer: "C",
  },
  {
    question: "The Yoruba aesthetic emphasizes the importance of:",
    options: [
      "A. Individual creativity",
      "B. Cultural identity and character",
      "C. Global influences",
      "D. Modern techniques",
    ],
    answer: "B",
  },
  {
    question: "Which of the following is a common component of African art?",
    options: [
      "A. Abstract forms",
      "B. Realistic representations",
      "C. Symbolism",
      "D. Minimalism",
    ],
    answer: "C",
  },
  {
    question: "The 'Stool, Asante' is primarily used for:",
    options: [
      "A. Decoration",
      "B. Ritual purposes",
      "C. Everyday seating",
      "D. Artistic display",
    ],
    answer: "B",
  },
  {
    question: "The 'E-Mukishi' artwork by Maurice Mbikayi represents:",
    options: [
      "A. Traditional themes",
      "B. Modern artistic expressions",
      "C. Historical events",
      "D. Cultural critiques",
    ],
    answer: "D",
  },
  {
    question:
      "The 'Garden Scene' fresco from Nebamun's Tomb is significant for its:",
    options: [
      "A. Use of color",
      "B. Historical context",
      "C. Representation of daily life",
      "D. Abstract nature",
    ],
    answer: "C",
  },
  {
    question: "The 'Figures with Camel' artwork is an example of:",
    options: [
      "A. Ancient art",
      "B. Modern interpretation",
      "C. Abstract expressionism",
      "D. Cultural symbolism",
    ],
    answer: "D",
  },
  {
    question: "The 'Crown (ade)' for an oba is made of:",
    options: [
      "A. Wood and fabric",
      "B. Cloth and beads",
      "C. Metal and glass",
      "D. Terracotta and clay",
    ],
    answer: "B",
  },
  {
    question: "The 'Dahomey Kingdom' is known for its:",
    options: [
      "A. Architectural achievements",
      "B. Artistic contributions",
      "C. Agricultural practices",
      "D. Political structures",
    ],
    answer: "B",
  },
  {
    question: "The 'Je Antelope Masquerade' is significant for its:",
    options: [
      "A. Historical context",
      "B. Cultural representation",
      "C. Modern techniques",
      "D. Abstract forms",
    ],
    answer: "B",
  },
  {
    question: "The 'Head, Yoruba' made of brass signifies:",
    options: [
      "A. Artistic skill",
      "B. Cultural identity",
      "C. Historical significance",
      "D. Economic status",
    ],
    answer: "B",
  },
  {
    question: "The 'Oba, Yoruba' artwork represents:",
    options: [
      "A. A historical figure",
      "B. A cultural concept",
      "C. An artistic style",
      "D. A religious symbol",
    ],
    answer: "A",
  },
  {
    question: "The 'Battle of Adwa' artwork is created using:",
    options: [
      "A. Acrylic on cloth",
      "B. Oil on canvas",
      "C. Pigment on rock",
      "D. Watercolor on paper",
    ],
    answer: "A",
  },
  {
    question: "The 'Aesthetic/Visual Analysis' of selected objects focuses on:",
    options: [
      "A. Historical significance",
      "B. Visual aspects and cultural context",
      "C. Market value",
      "D. Artist's biography",
    ],
    answer: "B",
  },
  {
    question: "The 'Eshu' in Yoruba culture is associated with:",
    options: [
      "A. Beauty",
      "B. Knowledge",
      "C. Trickery and communication",
      "D. Wisdom",
    ],
    answer: "C",
  },
  {
    question: "The 'Ifa Divination Tray' is made of:",
    options: ["A. Terracotta", "B. Wood", "C. Metal", "D. Stone"],
    answer: "B",
  },
  {
    question: "The 'Mother and Child' sculpture reflects:",
    options: [
      "A. Modern themes",
      "B. Traditional values",
      "C. Abstract concepts",
      "D. Individual expression",
    ],
    answer: "B",
  },
  {
    question: "The 'Garden Scene' fresco represents:",
    options: [
      "A. Daily life in ancient Egypt",
      "B. Abstract themes",
      "C. Modern interpretations",
      "D. Cultural critiques",
    ],
    answer: "A",
  },
  {
    question: "The 'Palette of Narmer' is significant for its:",
    options: [
      "A. Use of color",
      "B. Historical context",
      "C. Abstract representation",
      "D. Cultural symbolism",
    ],
    answer: "B",
  },
  {
    question: "The 'Cup, Kuba' is an example of:",
    options: [
      "A. Modern art",
      "B. Traditional craftsmanship",
      "C. Abstract expressionism",
      "D. Cultural critique",
    ],
    answer: "B",
  },
  {
    question: "The 'E-Mukishi' artwork reflects:",
    options: [
      "A. Historical events",
      "B. Cultural identity",
      "C. Modern artistic expressions",
      "D. Economic status",
    ],
    answer: "C",
  },
  {
    question: "The 'Figures with Camel' artwork represents:",
    options: [
      "A. Traditional themes",
      "B. Modern interpretations",
      "C. Cultural symbolism",
      "D. Historical events",
    ],
    answer: "C",
  },
  {
    question: "The 'Crown (ade)' for an oba is significant for its:",
    options: [
      "A. Artistic skill",
      "B. Cultural identity",
      "C. Historical significance",
      "D. Economic status",
    ],
    answer: "C",
  },
  {
    question: "The 'Dahomey Kingdom' is known for its contributions to:",
    options: ["A. Architecture", "B. Agriculture", "C. Art", "D. Politics"],
    answer: "C",
  },
  {
    question: "The 'Je Antelope Masquerade' is significant for its:",
    options: [
      "A. Cultural representation",
      "B. Historical context",
      "C. Modern techniques",
      "D. Abstract forms",
    ],
    answer: "A",
  },
  {
    question: "The 'Head, Yoruba' made of brass signifies:",
    options: [
      "A. Artistic skill",
      "B. Cultural identity",
      "C. Historical significance",
      "D. Economic status",
    ],
    answer: "B",
  },
  {
    question: "The 'Oba, Yoruba' artwork represents:",
    options: [
      "A. A historical figure",
      "B. A cultural concept",
      "C. An artistic style",
      "D. A religious symbol",
    ],
    answer: "A",
  },
  {
    question: "The 'Battle of Adwa' artwork is created using:",
    options: [
      "A. Acrylic on cloth",
      "B. Oil on canvas",
      "C. Pigment on rock",
      "D. Watercolor on paper",
    ],
    answer: "A",
  },
  {
    question: "The 'Aesthetic/Visual Analysis' of selected objects focuses on:",
    options: [
      "A. Historical significance",
      "B. Visual aspects and cultural context",
      "C. Market value",
      "D. Artist's biography",
    ],
    answer: "B",
  },
  {
    question: "The 'Eshu' in Yoruba culture is associated with:",
    options: [
      "A. Beauty",
      "B. Knowledge",
      "C. Trickery and communication",
      "D. Wisdom",
    ],
    answer: "C",
  },
  {
    question: "The 'Ifa Divination Tray' is made of:",
    options: ["A. Terracotta", "B. Wood", "C. Metal", "D. Stone"],
    answer: "B",
  },
  {
    question: "The 'Mother and Child' sculpture reflects:",
    options: [
      "A. Modern themes",
      "B. Traditional values",
      "C. Abstract concepts",
      "D. Individual expression",
    ],
    answer: "B",
  },
  {
    question: "The 'Garden Scene' fresco represents:",
    options: [
      "A. Daily life in ancient Egypt",
      "B. Abstract themes",
      "C. Modern interpretations",
      "D. Cultural critiques",
    ],
    answer: "A",
  },
  {
    question: "The 'Palette of Narmer' is significant for its:",
    options: [
      "A. Use of color",
      "B. Historical context",
      "C. Abstract representation",
      "D. Cultural symbolism",
    ],
    answer: "B",
  },
  {
    question: "The 'Cup, Kuba' is an example of:",
    options: [
      "A. Modern art",
      "B. Traditional craftsmanship",
      "C. Abstract expressionism",
      "D. Cultural critique",
    ],
    answer: "B",
  },
  {
    question: "The 'E-Mukishi' artwork reflects:",
    options: [
      "A. Historical events",
      "B. Cultural identity",
      "C. Modern artistic expressions",
      "D. Economic status",
    ],
    answer: "C",
  },
  {
    question: "The 'Figures with Camel' artwork represents:",
    options: [
      "A. Traditional themes",
      "B. Modern interpretations",
      "C. Cultural symbolism",
      "D. Historical events",
    ],
    answer: "C",
  },
  {
    question: "The 'Crown (ade)' for an oba is significant for its:",
    options: [
      "A. Artistic skill",
      "B. Cultural identity",
      "C. Historical significance",
      "D. Economic status",
    ],
    answer: "C",
  },
  {
    question: "The 'Dahomey Kingdom' is known for its contributions to:",
    options: ["A. Architecture", "B. Agriculture", "C. Art", "D. Politics"],
    answer: "C",
  },
  {
    question: "The 'Je Antelope Masquerade' is significant for its:",
    options: [
      "A. Cultural representation",
      "B. Historical context",
      "C. Modern techniques",
      "D. Abstract forms",
    ],
    answer: "A",
  },
  {
    question: "The 'Head, Yoruba' made of brass signifies:",
    options: [
      "A. Artistic skill",
      "B. Cultural identity",
      "C. Historical significance",
      "D. Economic status",
    ],
    answer: "B",
  },
  {
    question: "The 'Oba, Yoruba' artwork represents:",
    options: [
      "A. A historical figure",
      "B. A cultural concept",
      "C. An artistic style",
      "D. A religious symbol",
    ],
    answer: "A",
  },
  {
    question: "The 'Battle of Adwa' artwork is created using:",
    options: [
      "A. Acrylic on cloth",
      "B. Oil on canvas",
      "C. Pigment on rock",
      "D. Watercolor on paper",
    ],
    answer: "A",
  },
  {
    question: "What is the primary focus of the course UGRC 221?",
    options: [
      "A. European Art History",
      "B. African Art, Its Philosophy and Criticism",
      "C. Asian Art Techniques",
      "D. Modern Art Movements",
    ],
    answer: "B",
  },
  {
    question: "What is one of the main objectives of the course?",
    options: [
      "A. To study only contemporary art",
      "B. To explore the trajectory of African art as an academic discipline",
      "C. To focus solely on European art",
      "D. To learn about art techniques",
    ],
    answer: "B",
  },
  {
    question:
      "Which period's records are examined in the study of African art history?",
    options: [
      "A. 20th century only",
      "B. 14th to 19th century",
      "C. 21st century",
      "D. 18th century only",
    ],
    answer: "B",
  },
  {
    question:
      "What type of knowledge about African art was traditionally passed down?",
    options: [
      "A. Written texts",
      "B. Oral histories and narratives",
      "C. Digital archives",
      "D. Academic journals",
    ],
    answer: "B",
  },
  {
    question:
      "Which group of people were primary sources of traditional knowledge on African art?",
    options: [
      "A. Young artists",
      "B. Elderly people and clan heads",
      "C. European scholars",
      "D. Tourists",
    ],
    answer: "B",
  },
  {
    question: "How was African art previously presented by European writers?",
    options: [
      "A. As fine art",
      "B. As ethnographic curiosities",
      "C. As modern art",
      "D. As historical artifacts",
    ],
    answer: "B",
  },
  {
    question:
      "What is one characteristic of current scholarship in art history?",
    options: [
      "A. It is closed and rigid",
      "B. It is open, interrogative, and self-critical",
      "C. It focuses only on Western art",
      "D. It ignores historical context",
    ],
    answer: "B",
  },
  {
    question:
      "What is the significance of the art of a place according to the document?",
    options: [
      "A. It has no relation to the society that produced it",
      "B. It reflects the general worldview of the period it was made",
      "C. It is only about aesthetics",
      "D. It is irrelevant to history",
    ],
    answer: "B",
  },
  {
    question:
      "What were the early sources of information on African art based on?",
    options: [
      "A. Written records from African artists",
      "B. Observations from European traders and explorers",
      "C. Modern academic research",
      "D. Social media",
    ],
    answer: "B",
  },
  {
    question:
      "What type of manuscripts provided information about African art?",
    options: [
      "A. Arabic manuscripts",
      "B. Chinese manuscripts",
      "C. American manuscripts",
      "D. Indian manuscripts",
    ],
    answer: "A",
  },
  {
    question:
      "What was a common term used to describe African art in early European accounts?",
    options: ["A. Masterpieces", "B. Crafts", "C. Fetishes", "D. Fine art"],
    answer: "C",
  },
  {
    question:
      "What was the impact of the slave trade on perceptions of African art?",
    options: [
      "A. It led to negative views of African art",
      "B. It had no impact",
      "C. It improved perceptions of African art",
      "D. It made African art irrelevant",
    ],
    answer: "A",
  },
  {
    question: "Which kingdoms' arts were taken to Europe as war booty?",
    options: [
      "A. Benin, Asante, and Dahomey",
      "B. Mali, Ghana, and Songhai",
      "C. Egypt, Nubia, and Kush",
      "D. Zulu, Xhosa, and Sotho",
    ],
    answer: "A",
  },
  {
    question:
      "What did colonial officials often downplay in their accounts of African art?",
    options: [
      "A. Artistic techniques",
      "B. Regional influences",
      "C. Cultural significance",
      "D. Historical context",
    ],
    answer: "C",
  },
  {
    question: "What was the role of missionaries regarding African art?",
    options: [
      "A. They promoted traditional art",
      "B. They destroyed traditional art",
      "C. They documented art accurately",
      "D. They ignored art completely",
    ],
    answer: "B",
  },
  {
    question: "What is one challenge faced by African art historians?",
    options: [
      "A. Abundance of written documentation",
      "B. Fewer higher institutions training art historians",
      "C. Excessive funding for research",
      "D. Overwhelming public interest",
    ],
    answer: "B",
  },
  {
    question: "Who received the first Ph.D. in African art history?",
    options: [
      "A. Arnold Rubin",
      "B. Roy Sieber",
      "C. Franz Boas",
      "D. Melville Herskovits",
    ],
    answer: "B",
  },
  {
    question: "What did Roy Sieber and Arnold Rubin investigate?",
    options: [
      "A. The influence of Western art",
      "B. Style defined by multiple factors",
      "C. The history of European art",
      "D. The decline of traditional art",
    ],
    answer: "B",
  },
  {
    question: "What was the focus of the early journals such as African Arts?",
    options: [
      "A. Popular culture",
      "B. Serious scholarship and visual documentation",
      "C. European art movements",
      "D. Fashion trends",
    ],
    answer: "B",
  },
  {
    question: "What did Frank McEwen establish in Zimbabwe?",
    options: [
      "A. A museum",
      "B. An art gallery",
      "C. A workshop for African artists",
      "D. An art school",
    ],
    answer: "C",
  },
  {
    question: "What was the aim of Ruth Schaffner's Gallery Watatu?",
    options: [
      "A. To promote academic art",
      "B. To encourage 'primitive' art",
      "C. To focus on abstract art",
      "D. To support European artists",
    ],
    answer: "B",
  },
  {
    question: "What was the significance of the Poto-Poto School in Congo?",
    options: [
      "A. It was the first art school in Africa",
      "B. It influenced attitudes towards African art education",
      "C. It focused solely on Western techniques",
      "D. It was a school for European artists",
    ],
    answer: "B",
  },
  {
    question: "What type of art did urban artists in Africa typically produce?",
    options: [
      "A. Traditional art",
      "B. Abstract art",
      "C. Art dealing with everyday life in urban settings",
      "D. Religious art",
    ],
    answer: "C",
  },
  {
    question: "What is one theme explored in the study of African art?",
    options: [
      "A. Art as a product only",
      "B. Art as a process",
      "C. Art without context",
      "D. Art devoid of culture",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of art biennials for African artists?",
    options: [
      "A. They are irrelevant",
      "B. They provide platforms for international exposure",
      "C. They focus only on traditional art",
      "D. They are exclusively for European artists",
    ],
    answer: "B",
  },
  {
    question:
      "Which biennale is known for its focus on contemporary African art?",
    options: [
      "A. Venice Biennale",
      "B. Dakar Biennale",
      "C. Sydney Biennale",
      "D. Berlin Biennale",
    ],
    answer: "B",
  },
  {
    question:
      "What is a challenge faced by contemporary African artists in the global market?",
    options: [
      "A. Overwhelming support",
      "B. Lack of recognition",
      "C. Excessive funding",
      "D. Abundance of opportunities",
    ],
    answer: "B",
  },
  {
    question:
      "What is the role of social media in promoting contemporary African artists?",
    options: [
      "A. It has no role",
      "B. It helps in visibility and outreach",
      "C. It restricts their work",
      "D. It is only for Western artists",
    ],
    answer: "B",
  },
  {
    question:
      "What is the significance of the NKA journal of contemporary art?",
    options: [
      "A. It focuses on European art",
      "B. It promotes African art scholarship",
      "C. It ignores contemporary issues",
      "D. It is a fashion magazine",
    ],
    answer: "B",
  },
  {
    question:
      "What is one of the successes in the discipline of African art studies?",
    options: [
      "A. Fewer exhibitions",
      "B. Increased participation of African scholars in global discourses",
      "C. Decreased interest in African art",
      "D. Limited publications",
    ],
    answer: "B",
  },
  {
    question: "What is a common theme in contemporary African art?",
    options: [
      "A. Exclusively traditional themes",
      "B. Socio-political issues",
      "C. Only aesthetic concerns",
      "D. Historical narratives only",
    ],
    answer: "B",
  },
  {
    question:
      "What is the impact of globalization on traditional African art forms?",
    options: [
      "A. It has no impact",
      "B. It has led to adaptation and change",
      "C. It has completely erased traditional forms",
      "D. It has only benefited Western art",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the Alexandria Biennale?",
    options: [
      "A. It is the first art biennial in Africa",
      "B. It focuses solely on literature",
      "C. It promotes European artists",
      "D. It serves as a political tool for national promotion of art",
    ],
    answer: "D",
  },
  {
    question: "What is a challenge faced by African art historians?",
    options: [
      "A. Abundance of written documentation",
      "B. Fewer higher institutions training art historians",
      "C. Overwhelming public interest",
      "D. Excessive funding for research",
    ],
    answer: "B",
  },
  {
    question:
      "What is one of the contributions of Okwui Enwezor to African art?",
    options: [
      "A. He focused solely on traditional art",
      "B. He has participated in global discourses on contemporary African art",
      "C. He ignored contemporary issues",
      "D. He only published in local journals",
    ],
    answer: "B",
  },
  {
    question: "What is the role of art workshops in Africa?",
    options: [
      "A. They discourage traditional practices",
      "B. They promote the production of 'primitive' art",
      "C. They focus solely on Western techniques",
      "D. They have no impact on artists",
    ],
    answer: "C",
  },
  {
    question:
      "What is one of the themes explored by scholars in the 1970s and 1980s regarding African art?",
    options: [
      "A. The decline of traditional art",
      "B. The relationship between art and ethnicity",
      "C. The irrelevance of art in society",
      "D. The exclusivity of Western art",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the Biennale de Bamako?",
    options: [
      "A. It is focused on European art",
      "B. It is one of the oldest art biennials in Africa",
      "C. It has no international reputation",
      "D. It is exclusively for local artists",
    ],
    answer: "B",
  },
  {
    question:
      "What is a common characteristic of contemporary African artists?",
    options: [
      "A. They all have formal academic training",
      "B. They engage with current socio-political issues",
      "C. They only produce traditional art",
      "D. They avoid using technology",
    ],
    answer: "B",
  },
  {
    question:
      "What is one of the successes noted in the discipline of African art studies?",
    options: [
      "A. Decreased interest from scholars",
      "B. Increased publications by African scholars",
      "C. Fewer exhibitions and biennials",
      "D. Limited participation in global discourses",
    ],
    answer: "B",
  },
  {
    question:
      "What is one of the primary sources of information on African art in the early accounts?",
    options: [
      "A. Written records from African artists",
      "B. Observations from European traders and explorers",
      "C. Modern art critiques",
      "D. Social media posts",
    ],
    answer: "B",
  },
  {
    question:
      "What was a common misconception about African art during the colonial period?",
    options: [
      "A. It was viewed as highly sophisticated",
      "B. It was often referred to as 'fetishes' and crafts",
      "C. It was celebrated in European galleries",
      "D. It was considered irrelevant",
    ],
    answer: "B",
  },
  {
    question:
      "What role did missionaries play in the perception of African art?",
    options: [
      "A. They promoted traditional art forms",
      "B. They encouraged the destruction or abandonment of traditional art",
      "C. They documented African art accurately",
      "D. They had no influence on art perceptions",
    ],
    answer: "B",
  },
  {
    question:
      "What is one of the methodological approaches in the study of African art history?",
    options: [
      "A. Exclusively ethnographic methods",
      "B. Interdisciplinary approaches combining various fields",
      "C. Solely historical analysis",
      "D. Focus on Western art methods only",
    ],
    answer: "B",
  },
  {
    question:
      "What is a defining characteristic of current scholarship within the discipline of art history?",
    options: [
      "A. It ignores the social context of art",
      "B. It is integrally bound to the worldview of the period it was made",
      "C. It focuses only on aesthetic qualities",
      "D. It is solely concerned with the artist's biography",
    ],
    answer: "B",
  },
  {
    question:
      "What has been a significant change in the study of African art over the last thirty years?",
    options: [
      "A. It has become less relevant",
      "B. It has become more open, interrogative, and self-critical",
      "C. It has focused exclusively on traditional art",
      "D. It has been dominated by Western perspectives",
    ],
    answer: "B",
  },
  {
    question:
      "What is one of the challenges mentioned regarding the documentation of African art?",
    options: [
      "A. Abundance of detailed records",
      "B. Lack of names of artists and provenance issues",
      "C. Excessive funding for documentation",
      "D. Overwhelming public interest in documentation",
    ],
    answer: "B",
  },
  {
    question:
      "What is the significance of the art schools established in Africa during the colonial period?",
    options: [
      "A. They focused solely on Western art techniques",
      "B. They played a role in the formal education of African artists",
      "C. They had no impact on local art practices",
      "D. They were exclusively for European students",
    ],
    answer: "B",
  },
  {
    question:
      "What is one of the contributions of Roy Sieber to African art studies?",
    options: [
      "A. He focused only on traditional art forms",
      "B. He investigated style in relation to sub-cultural and regional groupings",
      "C. He ignored the influence of ethnicity on art",
      "D. He solely published in European journals",
    ],
    answer: "B",
  },
  {
    question: "What has been a notable trend in contemporary African art?",
    options: [
      "A. A return to exclusively traditional practices",
      "B. Engagement with global issues and contemporary themes",
      "C. A decline in artistic expression",
      "D. Isolation from international art movements",
    ],
    answer: "B",
  },
  {
    question: "What is the primary focus of Week Four's lecture in UGRC 221?",
    options: [
      "A. Modern African Art",
      "B. Selected Survey of African Art Traditions",
      "C. African Literature",
      "D. African Music",
    ],
    answer: "B",
  },
  {
    question: "Which region is known as Kemet?",
    options: [
      "A. East Africa",
      "B. Northern Africa",
      "C. Egypt",
      "D. West Africa",
    ],
    answer: "C",
  },
  {
    question:
      "What type of art is primarily found in the Tassili Region of North Africa?",
    options: ["A. Sculpture", "B. Rock Art", "C. Pottery", "D. Textile Art"],
    answer: "B",
  },
  {
    question:
      "During which geological phase was the Sahara a well-watered savanna?",
    options: ["A. 5000 BC", "B. 11,000 BC", "C. 3000 BC", "D. 2000 BC"],
    answer: "B",
  },
  {
    question: "What is the Large Wild Fauna style?",
    options: [
      "A. A type of pottery",
      "B. A style of rock art depicting large animals",
      "C. A musical genre",
      "D. A textile pattern",
    ],
    answer: "B",
  },
  {
    question:
      "Which extinct species is sometimes portrayed in the rock art of the Sahara?",
    options: [
      "A. Woolly Mammoth",
      "B. Bubalous articus",
      "C. Saber-toothed Tiger",
      "D. Dodo",
    ],
    answer: "B",
  },
  {
    question: "What does the Palette of Narmer represent?",
    options: [
      "A. A burial marker",
      "B. A political unification of Egypt",
      "C. A religious artifact",
      "D. A trade item",
    ],
    answer: "B",
  },
  {
    question: "What does the term 'medu netcher' refer to?",
    options: [
      "A. The Nile River",
      "B. The words of the gods (hieroglyphs)",
      "C. A type of pottery",
      "D. A style of music",
    ],
    answer: "B",
  },
  {
    question:
      "Who is credited with the architectural work of Djoser’s funerary complex?",
    options: ["A. King Narmer", "B. Imhotep", "C. Akhenaten", "D. Tutankhamun"],
    answer: "B",
  },
  {
    question: "What is the significance of the Sphinx in Giza?",
    options: [
      "A. It is a tomb for a queen.",
      "B. It represents the sun god Ra.",
      "C. It is a military monument.",
      "D. It is a marketplace.",
    ],
    answer: "B",
  },
  {
    question: "What material were the pyramids primarily constructed from?",
    options: ["A. Wood", "B. Mud-brick", "C. Stone", "D. Metal"],
    answer: "C",
  },
  {
    question: "What was the primary function of the Great Mosque at Kilwa?",
    options: [
      "A. A marketplace",
      "B. A royal palace",
      "C. A place of worship",
      "D. A military fort",
    ],
    answer: "C",
  },
  {
    question: "Which country is associated with the Aksumite civilization?",
    options: ["A. Kenya", "B. Egypt", "C. Ethiopia", "D. Sudan"],
    answer: "C",
  },
  {
    question: "What is the architectural style of the Lalibela churches?",
    options: ["A. Byzantine", "B. Gothic", "C. Romanesque", "D. Modern"],
    answer: "A",
  },
  {
    question: "What does the term 'jumba' refer to in Swahili culture?",
    options: [
      "A. A type of food",
      "B. A stone house",
      "C. A musical instrument",
      "D. A religious festival",
    ],
    answer: "B",
  },
  {
    question: "What is a 'kiti cha enzi'?",
    options: [
      "A. A type of clothing",
      "B. A chair of power",
      "C. A musical instrument",
      "D. A burial site",
    ],
    answer: "B",
  },
  {
    question: "Which material is commonly used in Swahili tombs?",
    options: ["A. Wood", "B. Coral limestone", "C. Mud-brick", "D. Metal"],
    answer: "B",
  },
  {
    question: "What is the primary function of the mihrab in a mosque?",
    options: [
      "A. A storage area",
      "B. A decorative element",
      "C. A prayer niche",
      "D. A seating area",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following is a characteristic of Swahili architecture?",
    options: [
      "A. Use of glass",
      "B. Elaborate wooden balconies",
      "C. High-rise buildings",
      "D. Thatched roofs",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the term 'Swahili'?",
    options: [
      "A. It refers to a type of food.",
      "B. It means 'shore' in Arabic.",
      "C. It is a musical genre.",
      "D. It is a type of dance.",
    ],
    answer: "B",
  },
  {
    question: "What type of art form is commonly found in the Swahili culture?",
    options: [
      "A. Abstract painting",
      "B. Calligraphy",
      "C. Sculpture",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question: "What was the primary economic activity of the Swahili Coast?",
    options: ["A. Agriculture", "B. Fishing", "C. Trade", "D. Mining"],
    answer: "C",
  },
  {
    question:
      "Which of the following is a common decorative element in Swahili architecture?",
    options: [
      "A. Geometric patterns",
      "B. Animal motifs",
      "C. Floral designs",
      "D. Abstract shapes",
    ],
    answer: "A",
  },
  {
    question: "What is the primary purpose of the tombs in Swahili culture?",
    options: [
      "A. To serve as marketplaces",
      "B. To honor ancestors",
      "C. To store goods",
      "D. To serve as living quarters",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the Qur'an in Swahili culture?",
    options: [
      "A. It is a historical document.",
      "B. It is a religious text.",
      "C. It is a work of fiction.",
      "D. It is a scientific manual.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is a common feature of the Lalibela churches?",
    options: [
      "A. They are built from mud-brick.",
      "B. They are carved from solid rock.",
      "C. They are made of wood.",
      "D. They are constructed with glass.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary material used in the construction of the Great Mosque at Kilwa?",
    options: ["A. Wood", "B. Coral limestone", "C. Mud-brick", "D. Stone"],
    answer: "B",
  },
  {
    question: "What does the term 'zidaka' refer to in Swahili architecture?",
    options: [
      "A. A type of food",
      "B. Storage niches",
      "C. Decorative patterns",
      "D. A religious text",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is a key characteristic of the Swahili Coast's trade network?",
    options: [
      "A. It was isolated from other regions.",
      "B. It was primarily agricultural.",
      "C. It connected Africa with Arabia and India.",
      "D. It focused on local markets only.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the primary purpose of the carved doorways in Swahili homes?",
    options: [
      "A. To provide ventilation",
      "B. To indicate wealth and status",
      "C. To serve as entrances",
      "D. To protect from animals",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the siwa horn in Swahili culture?",
    options: [
      "A. It is used for decoration.",
      "B. It serves as a musical instrument.",
      "C. It is a symbol of kingship.",
      "D. It is used for cooking.",
    ],
    answer: "C",
  },
  {
    question: "What is the primary function of the jumba in Swahili culture?",
    options: [
      "A. A marketplace",
      "B. A religious site",
      "C. A noble residence",
      "D. A community center",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following best describes the architectural style of the Lalibela churches?",
    options: [
      "A. Byzantine influence",
      "B. Modernist design",
      "C. Gothic architecture",
      "D. Baroque style",
    ],
    answer: "A",
  },
  {
    question: "What is the significance of the kanga in Swahili culture?",
    options: [
      "A. It is used for cooking.",
      "B. It serves as a decorative item.",
      "C. It plays a role in life cycle ceremonies.",
      "D. It is a form of currency.",
    ],
    answer: "C",
  },
  {
    question: "Which of the following is a common theme found in Swahili art?",
    options: [
      "A. Figural representation",
      "B. Geometric and calligraphic designs",
      "C. Abstract expressionism",
      "D. Realistic portraiture",
    ],
    answer: "B",
  },
  {
    question:
      "What type of material is predominantly used in the construction of Swahili tombs?",
    options: ["A. Brick", "B. Coral limestone", "C. Wood", "D. Concrete"],
    answer: "B",
  },
  {
    question: "What is the primary role of the Mallams in Swahili culture?",
    options: [
      "A. They are traders.",
      "B. They are builders and designers.",
      "C. They are farmers.",
      "D. They are musicians.",
    ],
    answer: "B",
  },
  {
    question: "Which of the following describes the Great Mosque at Kilwa?",
    options: [
      "A. It has a central courtyard.",
      "B. It is built with fossilized coral.",
      "C. It features a large minaret.",
      "D. It is a modern structure.",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the mihrab in a mosque?",
    options: [
      "A. It serves as a decorative element.",
      "B. It indicates the direction of Mecca.",
      "C. It is a storage area.",
      "D. It is a place for social gatherings.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary purpose of the carved motifs on Swahili doorways?",
    options: [
      "A. To provide ventilation",
      "B. To indicate wealth and status",
      "C. To serve as entrances",
      "D. To protect from animals",
    ],
    answer: "B",
  },
  {
    question: "Which of the following best describes the Swahili culture?",
    options: [
      "A. Homogeneous and isolated",
      "B. A blend of Arab, Indian, and Bantu influences",
      "C. Primarily agricultural with little trade",
      "D. Focused solely on local traditions",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the Old Dispensary in Zanzibar?",
    options: [
      "A. It is a historical museum.",
      "B. It represents multicultural architecture.",
      "C. It is a religious site.",
      "D. It serves as a marketplace.",
    ],
    answer: "B",
  },
  {
    question:
      "What type of art is commonly produced by Debtera in Swahili culture?",
    options: [
      "A. Pottery",
      "B. Talisman and sacred scrolls",
      "C. Sculpture",
      "D. Textiles",
    ],
    answer: "B",
  },
  {
    question: "Which of the following is a characteristic of the siwa horn?",
    options: [
      "A. It is made of wood.",
      "B. It is used during times of war.",
      "C. It is a decorative item.",
      "D. It is a cooking utensil.",
    ],
    answer: "B",
  },
  {
    question: "What is the primary purpose of the zidaka in a jumba?",
    options: [
      "A. To serve as a storage area",
      "B. To display valuable objects",
      "C. To provide ventilation",
      "D. To act as a decorative element",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following best describes the Swahili Coast's trade network?",
    options: [
      "A. It was limited to local markets.",
      "B. It connected Africa with Arabia and India.",
      "C. It focused solely on agricultural products.",
      "D. It was primarily based on fishing.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the significance of the kiti cha enzi in Swahili culture?",
    options: [
      "A. It is a cooking tool.",
      "B. It represents power and authority.",
      "C. It is a decorative item.",
      "D. It is a religious artifact.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following describes the architectural style of the jumba?",
    options: [
      "A. Modernist design",
      "B. Traditional stone construction",
      "C. Wooden structures",
      "D. Glass buildings",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary function of the carved doorways in Swahili homes?",
    options: [
      "A. To provide ventilation",
      "B. To indicate wealth and status",
      "C. To serve as entrances",
      "D. To protect from animals",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the Qur'an in Swahili culture?",
    options: [
      "A. It is a historical document.",
      "B. It is a religious text.",
      "C. It is a work of fiction.",
      "D. It is a scientific manual.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary material used in the construction of the Great Mosque at Kilwa?",
    options: ["A. Wood", "B. Coral limestone", "C. Brick", "D. Concrete"],
    answer: "B",
  },
  {
    question:
      "Which of the following best describes the function of the jumba in Swahili culture?",
    options: [
      "A. It serves as a marketplace.",
      "B. It is a residence for women and a social hub.",
      "C. It is a place for religious ceremonies.",
      "D. It is a storage facility.",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the kanga in Swahili women's lives?",
    options: [
      "A. It is a cooking apron.",
      "B. It is a symbol of wealth.",
      "C. It plays a role in life cycle ceremonies.",
      "D. It is a religious garment.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following describes the architectural style of the Lalibela churches?",
    options: [
      "A. Built from mud bricks",
      "B. Carved from solid rock",
      "C. Constructed with steel frames",
      "D. Made from prefabricated materials",
    ],
    answer: "B",
  },
  {
    question:
      "What role did the Aksumite king Exana play in the history of Ethiopia?",
    options: [
      "A. He established trade routes.",
      "B. He introduced Christianity as the state religion.",
      "C. He built the first pyramids.",
      "D. He led military conquests in the region.",
    ],
    answer: "B",
  },
  {
    question: "What is the primary purpose of the mihrab in a mosque?",
    options: [
      "A. To serve as a decorative element.",
      "B. To indicate the direction of prayer.",
      "C. To provide seating for worshippers.",
      "D. To store religious texts.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following is a characteristic of the Swahili tombs?",
    options: [
      "A. They are built underground.",
      "B. They are often adorned with elaborate carvings.",
      "C. They are constructed from wood.",
      "D. They are simple and unadorned.",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the siwa horn in Swahili culture?",
    options: [
      "A. It is used for cooking.",
      "B. It serves as a musical instrument.",
      "C. It is a symbol of leadership and authority.",
      "D. It is a decorative item.",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following best describes the artistic influences on Swahili culture?",
    options: [
      "A. Solely African traditions",
      "B. A mix of Arab, Indian, and local influences",
      "C. Primarily European styles",
      "D. Isolated from outside influences",
    ],
    answer: "B",
  },
  {
    question: "What is the primary function of the zidaka in a jumba?",
    options: [
      "A. To serve as a decorative element",
      "B. To display valuable objects",
      "C. To provide ventilation",
      "D. To act as a storage area",
    ],
    answer: "B",
  },
  {
    question:
      "What type of art is commonly produced by Debtera in Swahili culture?",
    options: [
      "A. Pottery",
      "B. Talisman and sacred scrolls",
      "C. Sculpture",
      "D. Textiles",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following describes the significance of the Old Dispensary in Zanzibar?",
    options: [
      "A. It is a historical museum.",
      "B. It represents multicultural architecture.",
      "C. It is a religious site.",
      "D. It serves as a marketplace.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary purpose of the carved motifs on Swahili doorways?",
    options: [
      "A. To provide ventilation",
      "B. To indicate wealth and status",
      "C. To serve as entrances",
      "D. To protect from animals",
    ],
    answer: "B",
  },
  {
    question: "Which of the following best describes the Swahili culture?",
    options: [
      "A. Homogeneous and isolated",
      "B. A blend of Arab, Indian, and Bantu influences",
      "C. Primarily agricultural with little trade",
      "D. Focused solely on local traditions",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the Qur'an in Swahili culture?",
    options: [
      "A. It is a historical document.",
      "B. It is a religious text.",
      "C. It is a work of fiction.",
      "D. It is a scientific manual.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary material used in the construction of the Great Mosque at Gedi?",
    options: ["A. Wood", "B. Coral limestone", "C. Brick", "D. Concrete"],
    answer: "B",
  },
  {
    question:
      "Which of the following describes the architectural style of the jumba?",
    options: [
      "A. Modernist design",
      "B. Traditional stone construction",
      "C. Wooden structures",
      "D. Glass buildings",
    ],
    answer: "B",
  },
  {
    question: "What is the primary function of the Great Mosque at Kilwa?",
    options: [
      "A. A marketplace",
      "B. A place of worship",
      "C. A residential building",
      "D. A storage facility",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following best describes the significance of the kanga in Swahili women's lives?",
    options: [
      "A. It is a cooking apron.",
      "B. It is a symbol of wealth.",
      "C. It plays a role in life cycle ceremonies.",
      "D. It is a religious garment.",
    ],
    answer: "C",
  },
  {
    question:
      "What is the significance of the Lalibela churches in Ethiopian history?",
    options: [
      "A. They are ancient ruins.",
      "B. They represent a blend of cultures.",
      "C. They are a symbol of Christian faith in Ethiopia.",
      "D. They are modern architectural achievements.",
    ],
    answer: "C",
  },
  {
    question: "What architectural feature is common in the Lalibela churches?",
    options: [
      "A. Wooden beams",
      "B. Stone carved from solid rock",
      "C. Glass windows",
      "D. Thatched roofs",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following describes the artistic style of the murals in the Lalibela churches?",
    options: [
      "A. Abstract and modern",
      "B. Byzantine influences with dark outlines and large eyes",
      "C. Minimalist and simplistic",
      "D. Realistic and detailed",
    ],
    answer: "B",
  },
  {
    question: "What is the primary purpose of the mihrab in a mosque?",
    options: [
      "A. To serve as a decorative element",
      "B. To indicate the direction of Mecca",
      "C. To provide seating for worshippers",
      "D. To store religious texts",
    ],
    answer: "B",
  },
  {
    question:
      "What type of art is commonly associated with the Swahili culture?",
    options: [
      "A. Figural decoration",
      "B. Geometric and calligraphic designs",
      "C. Abstract expressionism",
      "D. Impressionism",
    ],
    answer: "B",
  },
  {
    question:
      "What is the significance of the kiti cha enzi in Swahili culture?",
    options: [
      "A. It is a common chair for everyday use.",
      "B. It represents power and authority.",
      "C. It is used for dining.",
      "D. It is a decorative item with no functional use.",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following best describes the role of women in Swahili domestic life?",
    options: [
      "A. They are primarily responsible for trade.",
      "B. They manage the household and social activities.",
      "C. They have no significant role.",
      "D. They are solely responsible for farming.",
    ],
    answer: "B",
  },
  {
    question: "What is the primary function of the zidaka in a jumba?",
    options: [
      "A. To serve as a sleeping area",
      "B. To display valuable objects",
      "C. To provide storage for food",
      "D. To act as a cooking space",
    ],
    answer: "B",
  },
  {
    question:
      "What type of materials were commonly used in the construction of Swahili mosques?",
    options: [
      "A. Brick and mortar",
      "B. Coral limestone",
      "C. Wood and thatch",
      "D. Steel and glass",
    ],
    answer: "B",
  },
  {
    question:
      "Which of the following describes the significance of the Great Mosque at Kilwa?",
    options: [
      "A. It is the oldest mosque in Africa.",
      "B. It is a symbol of the spread of Islam in East Africa.",
      "C. It is a modern architectural marvel.",
      "D. It serves as a tourist attraction only.",
    ],
    answer: "B",
  },
  {
    question:
      "What is the primary purpose of the carved motifs on Swahili doorways?",
    options: [
      "A. To provide ventilation",
      "B. To indicate wealth and status",
      "C. To serve as entrances",
      "D. To protect from animals",
    ],
    answer: "B",
  },
  {
    question: "Which of the following best describes the Swahili language?",
    options: [
      "A. A language with no written form",
      "B. A mix of Arabic and Bantu languages",
      "C. A language exclusive to one ethnic group",
      "D. A language that has no influence from other cultures",
    ],
    answer: "B",
  },
  {
    question: "What is the significance of the Qur'an in Swahili culture?",
    options: [
      "A. It is a historical document.",
      "B. It is a religious text.",
      "C. It is a work of fiction.",
      "D. It is a scientific manual.",
    ],
    answer: "B",
  },
  {
    question:
      "What type of art is commonly produced by Debtera in Swahili culture?",
    options: [
      "A. Pottery",
      "B. Talisman and sacred scrolls",
      "C. Sculpture",
      "D. Textiles",
    ],
    answer: "B",
  },
  {
    question: "What is the primary geographical location of the Akan people?",
    options: [
      "A. Northern Nigeria",
      "B. Southern Ghana",
      "C. Eastern Senegal",
      "D. Western Ivory Coast",
    ],
    answer: "B",
  },
  {
    question: "Which of these is a sub-group of the Akan people?",
    options: ["A. Yoruba", "B. Asante", "C. Fon", "D. Dogon"],
    answer: "B",
  },
  {
    question: "In the Akan political system, who leads a village?",
    options: ["A. Abusua Panyin", "B. Odikro", "C. Ohene", "D. Omanhene"],
    answer: "B",
  },
  {
    question: "What is the Asantehene's role in the Akan political hierarchy?",
    options: [
      "A. Village leader",
      "B. Head of a town",
      "C. Paramount chief of a state",
      "D. King over multiple states",
    ],
    answer: "D",
  },
  {
    question:
      "Which of the following is NOT a traditional reason for appointing Akan chiefs?",
    options: [
      "A. Warrior role",
      "B. Accumulation of wealth",
      "C. Religious reasons",
      "D. Reward for service",
    ],
    answer: "B",
  },
  {
    question:
      "What is the modern political structure that integrates Akan chiefs?",
    options: [
      "A. Parliament",
      "B. Council of Elders",
      "C. House of Chiefs",
      "D. Supreme Court",
    ],
    answer: "C",
  },
  {
    question: "What type of kinship system is dominant among the Akan people?",
    options: [
      "A. Patrilineal",
      "B. Matrilineal",
      "C. Bilateral",
      "D. Ambilineal",
    ],
    answer: "B",
  },
  {
    question: "How many matrilineal clans (abusua) are there in Akan society?",
    options: ["A. Five", "B. Seven", "C. Nine", "D. Twelve"],
    answer: "B",
  },
  {
    question: "What does the Akan concept of 'Ntoro' represent?",
    options: [
      "A. Bloodline",
      "B. Character",
      "C. Spiritual energy",
      "D. Ancestral spirit",
    ],
    answer: "B",
  },
  {
    question: "According to Akan belief, what is inherited from the mother?",
    options: [
      "A. Mogya (blood)",
      "B. Ntoro (character)",
      "C. Sunsum (soul)",
      "D. Abusua (clan)",
    ],
    answer: "A",
  },
  {
    question: "How is land ownership primarily structured in Akan culture?",
    options: [
      "A. Individual ownership",
      "B. Controlled by the chief",
      "C. Vested in matrilineages",
      "D. Equally distributed",
    ],
    answer: "C",
  },
  {
    question:
      "What is the Akan practice regarding marriage outside one's clan?",
    options: [
      "A. Clan endogamy (marrying within)",
      "B. Clan exogamy (marrying outside)",
      "C. Arranged marriages by elders",
      "D. No specific rules or customs",
    ],
    answer: "B",
  },
  {
    question: "What is the name of the Supreme Being in Akan religion?",
    options: ["A. Ogun", "B. Shango", "C. Onyame", "D. Orisha"],
    answer: "C",
  },
  {
    question: "What natural element is associated with the Akan Supreme Being?",
    options: ["A. Earth", "B. Fire", "C. Water", "D. Sky"],
    answer: "D",
  },
  {
    question: "Why are there no images made of the Akan Supreme Being?",
    options: [
      "A. It is considered taboo",
      "B. It is believed to be impossible",
      "C. It is seen as disrespectful",
      "D. It is regarded as a spirit",
    ],
    answer: "D",
  },
  {
    question: "What does the Akan deity, Asaase Yaa, symbolize?",
    options: [
      "A. War and conquest",
      "B. Love and beauty",
      "C. Wisdom and knowledge",
      "D. Femininity and earth's spirit",
    ],
    answer: "D",
  },
  {
    question: "What is the significance of black stools in Akan culture?",
    options: [
      "A. Seats of power for chiefs",
      "B. Representations of ancestors",
      "C. Altars for offering sacrifices",
      "D. Symbols of fertility",
    ],
    answer: "B",
  },
  {
    question: "What are 'Abosom' in Akan religious belief?",
    options: [
      "A. Malevolent spirits",
      "B. Supernatural entities or deities",
      "C. Ancestral guides",
      "D. Ritual objects",
    ],
    answer: "B",
  },
  {
    question: "What are 'Suman' in Akan culture?",
    options: [
      "A. Powerful priests",
      "B. Man-made charms or magical objects",
      "C. Sacred groves or forests",
      "D. Ritual dances or ceremonies",
    ],
    answer: "B",
  },
  {
    question: "How many days are there in an Akan 'adae' cycle?",
    options: ["A. Seven", "B. Fourteen", "C. Forty-two", "D. Fifty-two"],
    answer: "C",
  },
  {
    question: "What event marks every eighth adae cycle in the Akan calendar?",
    options: [
      "A. A new moon",
      "B. A festival",
      "C. A day of fasting",
      "D. A planting season",
    ],
    answer: "B",
  },
  {
    question: "What is the primary purpose of Akan festivals?",
    options: [
      "A. To celebrate victories in war",
      "B. To honor the gods and ancestors",
      "C. To mark rites of passage",
      "D. To entertain the community",
    ],
    answer: "B",
  },
  {
    question: "Who assisted Osei Tutu in founding the Asante kingdom?",
    options: [
      "A. Okomfo Anokye",
      "B. Abusua Panyin",
      "C. Odikro",
      "D. Omanhene",
    ],
    answer: "A",
  },
  {
    question:
      "What is the historical significance of the city of Kumasi for the Asante?",
    options: [
      "A. Birthplace of Osei Tutu",
      "B. Center of early Asante states",
      "C. Location of the first gold mine",
      "D. Burial ground for Asantehene",
    ],
    answer: "B",
  },
  {
    question:
      "Which powerful kingdom did the Asante states unite against in the 17th century?",
    options: ["A. Oyo", "B. Benin", "C. Denkyira", "D. Kongo"],
    answer: "C",
  },
  {
    question:
      "What symbolic object did Okomfo Anokye conjure to represent Asante unity?",
    options: [
      "A. Golden Stool",
      "B. Sacred Spear",
      "C. Royal Mask",
      "D. Iron Throne",
    ],
    answer: "A",
  },
  {
    question:
      "What was the main function of the council established by Osei Tutu and Okomfo Anokye?",
    options: [
      "A. Maintaining religious harmony",
      "B. Governing trade and commerce",
      "C. Resolving legal disputes",
      "D. Managing politico-military affairs",
    ],
    answer: "D",
  },
  {
    question: "Which Asante craft village is known for its brass casting?",
    options: ["A. Ntonso", "B. Krofofrom", "C. Bonwire", "D. Ahwia"],
    answer: "B",
  },
  {
    question: "What is the role of the 'Mpaboahene' in the Asante court?",
    options: [
      "A. Keeper of the swords",
      "B. Caretaker of the stools",
      "C. Responsible for clothing",
      "D. In charge of the sandals",
    ],
    answer: "D",
  },
  {
    question:
      "Why were Asante chiefs prohibited from using regalia identical to the Asantehene's?",
    options: [
      "A. To maintain social hierarchy",
      "B. To prevent imitation",
      "C. To conserve precious materials",
      "D. To avoid spiritual conflicts",
    ],
    answer: "A",
  },
  {
    question:
      "How did the Asante acquire additional regalia besides crafting it themselves?",
    options: [
      "A. Trade with other kingdoms",
      "B. Gifts from tributary states",
      "C. War spoils from conquests",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question: "What types of events showcased Asante art and creativity?",
    options: [
      "A. Installation rites",
      "B. Festivals",
      "C. Funerals",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question: "What is the meaning of the Asante term 'Asipim'?",
    options: [
      "A. Golden ornament",
      "B. Royal throne",
      "C. I stand firm",
      "D. Symbol of peace",
    ],
    answer: "C",
  },
  {
    question: "What is the primary function of an Asante palanquin?",
    options: [
      "A. Storage chest for valuables",
      "B. Ceremonial carrier for chiefs",
      "C. War drum used in battle",
      "D. Altar for religious offerings",
    ],
    answer: "B",
  },
  {
    question: "What are 'Ntuati' in Asante art?",
    options: [
      "A. Carved umbrella tops",
      "B. Golden staffs for spokespersons",
      "C. Ceremonial swords",
      "D. Royal sandals",
    ],
    answer: "A",
  },
  {
    question: "Who is the 'Okyeame' in Asante society?",
    options: [
      "A. Chief priest or spiritual leader",
      "B. Head warrior or military commander",
      "C. Spokesperson and advisor to the chief",
      "D. Master craftsman or artisan",
    ],
    answer: "C",
  },
  {
    question:
      "What object serves as the official insignia of the Asante Okyeame?",
    options: [
      "A. Asipim chair",
      "B. Golden stool",
      "C. Spokesperson's staff",
      "D. Ntuati",
    ],
    answer: "C",
  },
  {
    question: "What are the two main types of swords used by the Asante?",
    options: [
      "A. Iron and bronze",
      "B. Short and long",
      "C. Ceremonial and ritual",
      "D. Hunting and battle",
    ],
    answer: "C",
  },
  {
    question: "What does the 'abosodee' symbol on an Asante sword represent?",
    options: [
      "A. Victory in battle",
      "B. Protection from evil",
      "C. Asantehene's connection to his heritage",
      "D. Power and authority",
    ],
    answer: "C",
  },
  {
    question:
      "What is the name of the feather hat worn by the Asantehene's soul bearer?",
    options: ["A. Asipim", "B. Ntuati", "C. Ntakerakye", "D. Abosodee"],
    answer: "C",
  },
  {
    question: "What is the typical use of Asante hats?",
    options: [
      "A. Worn during festivals",
      "B. Used in coming-of-age rituals",
      "C. Part of wedding attire",
      "D. Worn for funerals",
    ],
    answer: "D",
  },
  {
    question:
      "Why are sandals particularly important in an Asante chief's regalia?",
    options: [
      "A. They symbolize wealth and status",
      "B. They protect his feet from the ground, considered sacred",
      "C. They are a gift from the Asantehene",
      "D. They are believed to hold magical powers",
    ],
    answer: "B",
  },
  {
    question: "What does a snail symbolize on Asante sandals?",
    options: [
      "A. Contentment",
      "B. Speed and agility",
      "C. Strength and power",
      "D. Wisdom and knowledge",
    ],
    answer: "A",
  },
  {
    question: "What is the significance of music for Akan chiefs?",
    options: [
      "A. Primarily for entertainment",
      "B. Accompanies important events and communication",
      "C. Performed only by religious figures",
      "D. Forbidden during ceremonies",
    ],
    answer: "B",
  },
  {
    question:
      "Which type of drum is exclusively played by the Asantehene's musicians?",
    options: ["A. Fontomfrom", "B. Djembe", "C. Bougarabou", "D. Tama"],
    answer: "A",
  },
  {
    question: "What is believed to be the origin of Adinkra symbols?",
    options: [
      "A. Carvings on a chief's stool",
      "B. Ancient cave paintings",
      "C. Designs on royal clothing",
      "D. Patterns on pottery",
    ],
    answer: "A",
  },
  {
    question: "How are Adinkra symbols traditionally applied to cloth?",
    options: ["A. Stamping", "B. Painting", "C. Embroidery", "D. Weaving"],
    answer: "A",
  },
  {
    question:
      "What distinguishes the Kongo Kingdom as a significant political entity in Africa?",
    options: [
      "A. It was the smallest kingdom in Africa.",
      "B. It is one of the best known and studied.",
      "C. It never engaged in trade.",
      "D. It had no central leadership.",
    ],
    answer: "B",
  },
  {
    question:
      "During which centuries did Bantu speaking populations begin migrating to the Kongo Kingdom?",
    options: [
      "A. 10th and 11th",
      "B. 1st and 2nd",
      "C. 5th and 6th",
      "D. 13th and 14th",
    ],
    answer: "B",
  },
  {
    question:
      "What triggered the wave of migration lasting over a century in the Kongo region?",
    options: [
      "A. Religious persecution",
      "B. Drought and famine",
      "C. Arrival of European colonists",
      "D. Need for more land for pastoral groups",
    ],
    answer: "D",
  },
  {
    question: "Who is credited with founding the Kongo Kingdom?",
    options: [
      "A. Shaka",
      "B. Nimi Lukemi",
      "C. Shyaam a-Mbul a Ngoong",
      "D. Diego Cao",
    ],
    answer: "B",
  },
  {
    question:
      "What was a major export of the Kongo Kingdom, traded to the Portuguese?",
    options: ["A. Gold", "B. Spices", "C. Slaves", "D. Coffee"],
    answer: "C",
  },
  {
    question:
      "Which European explorer first encountered the Kongo Kingdom in 1482?",
    options: [
      "A. Vasco da Gama",
      "B. Christopher Columbus",
      "C. Ferdinand Magellan",
      "D. Diego Cao",
    ],
    answer: "D",
  },
  {
    question:
      "What material did Kongo weavers produce that impressed the Portuguese king?",
    options: ["A. Cotton", "B. Silk", "C. Raffia", "D. Wool"],
    answer: "C",
  },
  {
    question:
      "What names did the King and Queen of Kongo adopt after their baptism?",
    options: [
      "A. David and Victoria",
      "B. Joao and Leonora",
      "C. Louis and Antoinette",
      "D. Ferdinand and Isabella",
    ],
    answer: "B",
  },
  {
    question:
      "What was the new name given to the capital of the Kongo Kingdom after its conversion to Christianity?",
    options: ["A. Luanda", "B. Kinshasa", "C. San Salvador", "D. Brazzaville"],
    answer: "C",
  },
  {
    question: "What is the meaning of the term 'Nkisi' in Kongo belief?",
    options: ["A. Medicine", "B. Spirit", "C. King", "D. Dance"],
    answer: "A",
  },
  {
    question: "What type of objects are used as Nkisi?",
    options: [
      "A. Paintings",
      "B. Musical instruments",
      "C. Vessels, gourds, carved works, etc.",
      "D. Only wooden statues",
    ],
    answer: "C",
  },
  {
    question: "What is the role of the 'Nganga' in relation to Nkisi?",
    options: [
      "A. They are priests who pray to them.",
      "B. They are chiefs who own them.",
      "C. They are sculptors who create and empower them.",
      "D. They are musicians who play for them.",
    ],
    answer: "C",
  },
  {
    question: "What is the purpose of driving nails into Nkisi figures?",
    options: [
      "A. To decorate them",
      "B. To activate their spiritual power",
      "C. To ward off evil spirits",
      "D. To represent ancestors",
    ],
    answer: "B",
  },
  {
    question:
      "What type of Nkisi is known for its menacing appearance and use of weapons?",
    options: ["A. Nkondi", "B. Npezo", "C. Na moganga", "D. Mbula"],
    answer: "A",
  },
  {
    question:
      "Which Nkisi is believed to protect against sickness and dangerous spirits?",
    options: ["A. Nkondi", "B. Npezo", "C. Na moganga", "D. Mbula"],
    answer: "C",
  },
  {
    question:
      "What is the name for the magical substances used to empower Nkisi?",
    options: ["A. Ashe", "B. Bilongo", "C. Nyama", "D. Mana"],
    answer: "B",
  },
  {
    question:
      "What type of textile was produced in the Kongo Kingdom and used in royal courts?",
    options: ["A. Cotton", "B. Silk", "C. Raffia", "D. Wool"],
    answer: "C",
  },
  {
    question:
      "What was the traditional purpose of the lozenge designs found on Kongo textiles and scarification?",
    options: [
      "A. To represent animals",
      "B. To ward off evil",
      "C. To denote status",
      "D. To attract good luck",
    ],
    answer: "C",
  },
  {
    question:
      "What is the Kongo term for the ritually wrapped mummies used in funerary practices?",
    options: ["A. Nkisi", "B. Nganga", "C. Niombo", "D. Bocio"],
    answer: "C",
  },
  {
    question:
      "Why were cloths and mats collected and displayed with the deceased in Kongo funerals?",
    options: [
      "A. To provide warmth for the afterlife",
      "B. To ward off evil spirits",
      "C. To show respect and commemorate the dead",
      "D. To symbolize wealth and status",
    ],
    answer: "C",
  },
  {
    question:
      "What event led to the Kongo people's initial difficulty in accepting the crucifixion of Christ?",
    options: [
      "A. Lack of understanding of Roman customs",
      "B. Belief that only criminals were crucified",
      "C. The concept of a god dying was unfamiliar",
      "D. The use of nails in crucifixes seemed strange",
    ],
    answer: "D",
  },
  {
    question:
      "How did the Kongo people reconcile their belief in Nkisi with the concept of the Christian cross?",
    options: [
      "A. They saw the cross as a powerful Nkisi.",
      "B. They rejected Christianity altogether.",
      "C. They believed Christ was a Nganga.",
      "D. They saw both nails in Nkisi and crucifixes as linking worlds.",
    ],
    answer: "D",
  },
  {
    question:
      "What was the name given to Saint Anthony of Padua in the Kongo language?",
    options: [
      "A. Saint Augustine",
      "B. Toni Malau",
      "C. Saint Francis",
      "D. Saint Peter",
    ],
    answer: "B",
  },
  {
    question:
      "How were Christian saints incorporated into Kongo belief system?",
    options: [
      "A. They were seen as ancestors.",
      "B. They were worshipped as gods.",
      "C. They were considered protective figures.",
      "D. They were ignored and forgotten.",
    ],
    answer: "C",
  },
  {
    question: "What material was commonly used to create Kongo crucifixes?",
    options: ["A. Wood", "B. Gold", "C. Ivory", "D. Copper"],
    answer: "D",
  },
  {
    question: "What event led to the dissolution of the Kongo Kingdom?",
    options: [
      "A. Internal rebellion",
      "B. Invasion by a neighboring kingdom",
      "C. Portuguese colonization",
      "D. A combination of factors",
    ],
    answer: "D",
  },
  {
    question: "What factors contributed to the rise of the Kuba Kingdom?",
    options: [
      "A. Decline of the Kongo Kingdom",
      "B. Introduction of new agricultural techniques",
      "C. Unification of smaller principalities",
      "D. All of the above",
    ],
    answer: "D",
  },
  {
    question: "Who is credited with unifying the Kuba Kingdom?",
    options: [
      "A. Nimi Lukemi",
      "B. Shaka",
      "C. Shyaam a-Mbul a Ngoong",
      "D. Mzilikazi",
    ],
    answer: "C",
  },
  {
    question:
      "What new crops from the Americas were introduced to the Kuba Kingdom?",
    options: [
      "A. Rice and wheat",
      "B. Maize, tobacco, cassava",
      "C. Coffee and sugarcane",
      "D. Potatoes and tomatoes",
    ],
    answer: "B",
  },
  {
    question: "What is the title of the Kuba king?",
    options: ["A. Oba", "B. Asantehene", "C. Nyim", "D. Mwami"],
    answer: "C",
  },
  {
    question: "What is the purpose of the raised dais used by the Kuba king?",
    options: [
      "A. To display his wealth",
      "B. To separate him from the earth",
      "C. To intimidate his subjects",
      "D. To make him taller",
    ],
    answer: "B",
  },
  {
    question:
      "What is the Kuba term for the symbolic portraits of their kings?",
    options: ["A. Nkisi", "B. Ndop", "C. Niombo", "D. Bocio"],
    answer: "B",
  },
  {
    question: "What material is typically used to create Kuba Ndop figures?",
    options: ["A. Clay", "B. Bronze", "C. Wood", "D. Ivory"],
    answer: "C",
  },
  {
    question:
      "What object serves as a symbol of each Kuba king's reign in Ndop figures?",
    options: ["A. A crown", "B. A scepter", "C. An ibol", "D. A weapon"],
    answer: "C",
  },
  {
    question:
      "What is the belief regarding the connection between the Kuba king and his Ndop figure?",
    options: [
      "A. The Ndop is a magical replica of the king.",
      "B. The Ndop contains the king's soul.",
      "C. The Ndop protects the king from harm.",
      "D. The Ndop enhances the king's power.",
    ],
    answer: "B",
  },
  {
    question:
      "What natural material is primarily used to create Kuba textiles?",
    options: ["A. Cotton", "B. Silk", "C. Raffia", "D. Wool"],
    answer: "C",
  },
  {
    question:
      "Who is responsible for weaving the raffia cloth in Kuba textile production?",
    options: ["A. Men", "B. Women", "C. Children", "D. Elders"],
    answer: "A",
  },
  {
    question: "How are Kuba raffia textiles decorated?",
    options: ["A. Embroidery", "B. Appliqué", "C. Both A and B", "D. Painting"],
    answer: "C",
  },
  {
    question:
      "What is the most common contemporary use of traditional Kuba raffia cloth?",
    options: [
      "A. Everyday clothing",
      "B. Royal ceremonies",
      "C. Funerals",
      "D. Wedding attire",
    ],
    answer: "C",
  },
  {
    question:
      "What is the largest ancient stone construction south of the Sahara Desert?",
    options: [
      "A. The Pyramids of Giza",
      "B. Lalibela Churches",
      "C. Great Zimbabwe",
      "D. Timbuktu",
    ],
    answer: "C",
  },
  {
    question: "Which people group is believed to have built Great Zimbabwe?",
    options: ["A. Zulu", "B. Shona", "C. Ndebele", "D. Kongo"],
    answer: "B",
  },
  {
    question:
      "What is the estimated time period during which Great Zimbabwe was built?",
    options: [
      "A. 1st to 5th centuries",
      "B. 6th to 10th centuries",
      "C. 12th to 15th centuries",
      "D. 16th to 19th centuries",
    ],
    answer: "C",
  },
  {
    question:
      "What are the three main architectural groupings of Great Zimbabwe?",
    options: [
      "A. Palace, Temple, Market",
      "B. Hill Complex, Valley Complex, Great Enclosure",
      "C. Royal Quarters, Commoner Housing, Sacred Space",
      "D. North Wing, South Wing, Central Tower",
    ],
    answer: "B",
  },
  {
    question:
      "What was the likely purpose of the massive stone walls at Great Zimbabwe?",
    options: [
      "A. Purely defensive fortifications",
      "B. To enclose livestock",
      "C. Symbolic display of authority and privacy",
      "D. To create a labyrinth",
    ],
    answer: "C",
  },
  {
    question:
      "What is the construction technique used to build the walls at Great Zimbabwe?",
    options: [
      "A. Bricklaying with mortar",
      "B. Dry stacking of stones",
      "C. Concrete pouring",
      "D. Wood framing with stone cladding",
    ],
    answer: "B",
  },
  {
    question: "What are the most famous artworks found at Great Zimbabwe?",
    options: [
      "A. Gold masks",
      "B. Soapstone birds",
      "C. Terracotta figures",
      "D. Bronze sculptures",
    ],
    answer: "B",
  },
  {
    question:
      "What is the symbolic significance of the soapstone birds at Great Zimbabwe?",
    options: [
      "A. Fertility and abundance",
      "B. War and conquest",
      "C. Royal authority and ancestors",
      "D. Peace and harmony",
    ],
    answer: "C",
  },
  {
    question:
      "Which animal is depicted on the monolith with the bird at Great Zimbabwe?",
    options: ["A. Lion", "B. Leopard", "C. Elephant", "D. Crocodile"],
    answer: "D",
  },
  {
    question: "What is the largest ethnic group in South Africa?",
    options: ["A. Xhosa", "B. Sotho", "C. Zulu", "D. Ndebele"],
    answer: "C",
  },
  {
    question: "Under which leader did the Zulu form a powerful state in 1816?",
    options: ["A. Mzilikazi", "B. Cetshwayo", "C. Shaka", "D. Dingane"],
    answer: "C",
  },
  {
    question: "What is the primary purpose of Zulu beadwork?",
    options: [
      "A. Decoration and adornment",
      "B. Communication and social messaging",
      "C. Religious rituals",
      "D. Both A and B",
    ],
    answer: "D",
  },
  {
    question:
      "What is the Zulu term for the beaded panels worn by married women?",
    options: ["A. Jocolo", "B. Nguba", "C. Isigolwani", "D. Isicholo"],
    answer: "C",
  },
  {
    question:
      "What type of garment do Zulu women wear for protection during pregnancy and lactation?",
    options: [
      "A. Beaded cape",
      "B. Leather apron",
      "C. Woven shawl",
      "D. Raffia skirt",
    ],
    answer: "B",
  },
  {
    question:
      "What is the Zulu term for the 'warts' motif symbolizing herds of cattle?",
    options: ["A. Indlamu", "B. Amasumpa", "C. Isicathulo", "D. Umzansi"],
    answer: "B",
  },
  {
    question:
      "What is the Zulu term for the beaded capes or shawls worn by women?",
    options: ["A. Jocolo", "B. Nguba", "C. Isigolwani", "D. Isicholo"],
    answer: "D",
  },
  {
    question:
      "What type of object do the Zulu believe facilitates ancestral intervention through dreams?",
    options: ["A. Mask", "B. Headrest", "C. Necklace", "D. Doll"],
    answer: "B",
  },
  {
    question: "Who led the Ndebele people to split from the Zulu Kingdom?",
    options: ["A. Shaka", "B. Dingane", "C. Cetshwayo", "D. Mzilikazi"],
    answer: "D",
  },
  {
    question:
      "What art form did Ndebele women develop as a response to Apartheid?",
    options: ["A. Pottery", "B. Sculpture", "C. House painting", "D. Weaving"],
    answer: "C",
  },
  {
    question:
      "What is the Ndebele term for the plain apron received by a woman upon marriage?",
    options: ["A. Jocolo", "B. Nguba", "C. Isigolwani", "D. Isicholo"],
    answer: "A",
  },
  {
    question:
      "What is the Ndebele term for the marriage blanket adorned with beadwork?",
    options: ["A. Jocolo", "B. Nguba", "C. Isigolwani", "D. Isicholo"],
    answer: "B",
  },
];

let lect1 = { start: 0, end: 98, name: "Lecture 1" };
let lect2 = { start: 99, end: 199, name: "Lecture 2" };
let lect3 = { start: 200, end: 249, name: "Lecture 3" };
let lect4 = { start: 250, end: 281, name: "Lecture 4" };
let lect5 = { start: 282, end: 328, name: "Lecture 5" };
let lect6 = { start: 329, end: 388, name: "Lecture 6" };
let lect7 = { start: 0, end: 388, name: "Lecture 7" };
let all = { start: 0, end: questions.length - 1, name: "ALL" };
