const MAX_COURSE_ID = 1000;

function getRandomCourseId(max): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomCourseImage(): string {
  return `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`;
}

const courses = [
    {
      "id": "5db5a6997605146e68ffbd7d",
      "title": "labore dolor qui duis aliquip magna dolore",
      "duration": "56",
      "date": "2019-09-29",
      "description": "Sit commodo eiusmod velit elit. Ex tempor quis ex cillum ipsum duis est pariatur ex proident. Nisi voluptate exercitation anim pariatur elit ut.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Hyde",
          "lastName": "Francis"
        }
      ],
      "isTopRated": true
    },
    {
      "id": "5db5a69973813c0a0f99def4",
      "title": "officia minim Lorem est aliquip qui officia",
      "duration": "44",
      "date": "2020-05-18",
      "description": "Elit consectetur irure deserunt veniam sunt labore incididunt ut sit est reprehenderit sunt aute. Culpa ut in culpa elit deserunt commodo sit. Officia veniam magna aliqua ad enim fugiat velit incididunt.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Walton",
          "lastName": "Decker"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699e305e834cdf504e7",
      "title": "ullamco id ipsum consequat officia excepteur excepteur",
      "duration": "113",
      "date": "2019-11-05",
      "description": "Enim adipisicing ea sunt culpa fugiat labore sunt. Minim exercitation in tempor eiusmod ex aute reprehenderit veniam cupidatat eiusmod commodo minim et ipsum. Lorem proident amet enim in fugiat.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Ofelia",
          "lastName": "Battle"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a6996de48e916a8e8336",
      "title": "laboris qui labore do reprehenderit adipisicing magna",
      "duration": "154",
      "date": "2020-02-12",
      "description": "Laborum cillum irure laborum excepteur cillum commodo do consectetur ipsum. Qui eu pariatur magna ex fugiat voluptate sit exercitation pariatur elit ea culpa consequat ea. Sunt exercitation magna dolore magna aliquip adipisicing velit quis anim elit. Dolor anim cupidatat aliqua aliqua ad sunt.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Kirkland",
          "lastName": "Mathews"
        }
      ],
      "isTopRated": true
    },
    {
      "id": "5db5a6992a12da0d48e9ebb4",
      "title": "consectetur amet dolor anim veniam aliquip aute",
      "duration": "49",
      "date": "2020-12-28",
      "description": "Veniam ipsum proident officia nisi minim. Fugiat nisi et incididunt eiusmod. Adipisicing nisi nisi incididunt incididunt enim in. Et excepteur magna dolor qui do ad. Esse quis voluptate et consequat. Cillum amet sit minim Lorem sit qui fugiat consequat.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Brandi",
          "lastName": "Bright"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699dd9776a98b7a03df",
      "title": "reprehenderit minim deserunt laborum veniam laboris ipsum",
      "duration": "131",
      "date": "2021-01-18",
      "description": "Est deserunt proident cupidatat laborum ad mollit aliquip. Dolor exercitation deserunt veniam quis adipisicing enim aliquip exercitation. Minim qui commodo sit esse laborum sit adipisicing eu laboris id. Do aliqua magna sint sint. Magna veniam dolor aute ut eiusmod.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Mari",
          "lastName": "Rivera"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a69922fb3d21cbcb78ee",
      "title": "ipsum Lorem do Lorem duis laboris dolore",
      "duration": "138",
      "date": "2020-06-01",
      "description": "Adipisicing sit velit in dolore. Voluptate consectetur irure laboris labore reprehenderit tempor id. In do consectetur Lorem ullamco cupidatat ex. Irure magna laboris velit consequat reprehenderit culpa magna do enim. Deserunt laborum sint ullamco anim quis minim occaecat.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Sophia",
          "lastName": "Pacheco"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699d17eba0ece6132e8",
      "title": "velit mollit pariatur ipsum reprehenderit in irure",
      "duration": "45",
      "date": "2020-09-21",
      "description": "Commodo cillum aute ea consectetur tempor minim ad cillum excepteur labore in veniam. Laboris enim ullamco dolore excepteur adipisicing ut dolor do consequat. Magna nostrud qui cupidatat ut velit. Nulla fugiat elit non dolor qui deserunt mollit aute sunt tempor aliqua amet esse ea. Labore aliquip culpa elit ea amet non. Dolore et labore dolore consectetur esse do nulla qui incididunt ut commodo. Id Lorem do velit exercitation est do est voluptate magna officia velit sint.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Munoz",
          "lastName": "Garcia"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699f2e75ddc6f2b24aa",
      "title": "do in consequat cillum aliqua et cillum",
      "duration": "107",
      "date": "2020-06-17",
      "description": "Amet exercitation laborum labore nostrud quis quis excepteur ut consequat. Anim ex aliquip anim aute velit aute nulla. Aute labore nostrud exercitation qui consequat mollit labore minim labore aliqua. Lorem laboris enim duis veniam esse aliqua deserunt velit minim Lorem. Ex et in id nulla enim.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Margret",
          "lastName": "Vincent"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a69936c36c3bb10865af",
      "title": "officia duis commodo reprehenderit culpa nulla exercitation",
      "duration": "41",
      "date": "2021-01-14",
      "description": "Officia aliqua laboris do mollit cillum. Aliquip ea fugiat officia incididunt sit consequat nulla et ut sunt esse ex pariatur. Aliqua commodo nisi eiusmod dolore cupidatat officia excepteur sint consequat sit excepteur. Ipsum non adipisicing magna non pariatur. Dolore mollit cupidatat ad irure et aute in Lorem ullamco ut et nostrud culpa nostrud. Amet nisi in pariatur ut aliqua velit aliquip ullamco ad est reprehenderit et consequat. Ullamco officia nostrud excepteur cillum cillum commodo est in.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Alyssa",
          "lastName": "Sharpe"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a6993b66dfaafa7eddbe",
      "title": "eiusmod dolor nulla eu exercitation magna ut",
      "duration": "151",
      "date": "2020-07-27",
      "description": "Eu et ipsum cupidatat pariatur proident in dolore irure et officia sit mollit. Adipisicing aute cillum sunt culpa laboris exercitation. Officia aliqua nisi duis reprehenderit veniam ea cupidatat fugiat non consequat pariatur minim esse minim. Sunt ullamco voluptate duis incididunt et sit incididunt minim non quis ut. Sint nisi eu amet ea aliqua dolore velit anim. In reprehenderit fugiat adipisicing minim pariatur dolore deserunt irure mollit sunt ut elit eu aute. Eu in enim nisi adipisicing reprehenderit nulla culpa id mollit fugiat aute.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Kristina",
          "lastName": "Mcleod"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699b77836ff7acad74e",
      "title": "aliquip pariatur cillum eu cillum velit do",
      "duration": "131",
      "date": "2020-06-23",
      "description": "Cupidatat excepteur aliqua ipsum sunt in anim in ut pariatur fugiat. Duis minim labore nostrud aute. Velit consequat labore fugiat cupidatat. Ut consequat proident incididunt aute mollit laboris aliquip. Occaecat in excepteur sunt ut aute. Magna culpa deserunt reprehenderit cillum magna aliquip esse adipisicing amet occaecat consequat. Sunt sunt commodo culpa magna irure sunt aliquip commodo aliqua cupidatat.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Mathews",
          "lastName": "Gordon"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699b833fa0987066e86",
      "title": "esse duis aliqua non irure eiusmod pariatur",
      "duration": "146",
      "date": "2020-02-14",
      "description": "Enim consectetur cupidatat ullamco elit eiusmod. Reprehenderit ipsum ipsum velit ut nulla esse voluptate. Consequat eu Lorem dolore fugiat proident est laborum nulla ut est ad velit. Elit irure do aliqua sunt sit reprehenderit proident cillum nisi nisi. Nulla cupidatat ea enim dolor eu fugiat Lorem irure sint. Amet incididunt ullamco id aute et culpa id amet.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Helena",
          "lastName": "Hopper"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699ef19a103db059a8f",
      "title": "proident est cillum occaecat elit elit aliqua",
      "duration": "143",
      "date": "2020-09-14",
      "description": "Consequat in do esse consectetur dolor aliquip anim pariatur eiusmod. Exercitation cillum amet id excepteur dolore. Tempor aliqua est ad sit elit culpa aute deserunt sint anim excepteur. Esse velit eiusmod exercitation irure sit enim elit velit ut et Lorem laborum elit. Id aliquip veniam ullamco nostrud laboris sint cillum laborum labore consectetur enim esse veniam.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Stevens",
          "lastName": "Vaughan"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699d5ee6b47e9435b89",
      "title": "quis fugiat magna magna eiusmod sunt aliqua",
      "duration": "134",
      "date": "2020-09-26",
      "description": "In aliqua sunt ex occaecat amet deserunt ipsum esse qui culpa excepteur. Magna tempor id incididunt ex voluptate quis velit velit aliquip nulla. Sint sit consectetur proident amet pariatur aliquip incididunt tempor. Id veniam ipsum id consequat consectetur cupidatat.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Curtis",
          "lastName": "Hooper"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699cd74c7bd6cf3a2c4",
      "title": "culpa ipsum proident enim sit est et",
      "duration": "156",
      "date": "2020-02-22",
      "description": "Voluptate ullamco et quis voluptate aliquip consequat labore fugiat eiusmod. Sunt cupidatat reprehenderit esse ea ullamco enim ex adipisicing excepteur. Ut ex esse duis tempor dolor laboris commodo dolore qui in qui incididunt. Duis amet aliqua consectetur laborum. Esse est qui anim enim ad reprehenderit ipsum. In excepteur amet sint ullamco deserunt qui officia sit non. Amet eiusmod nisi elit cillum dolor irure.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Leonard",
          "lastName": "Hale"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699af9b96bd61ed5194",
      "title": "duis officia nisi deserunt dolore aliqua qui",
      "duration": "048",
      "date": "2020-06-29",
      "description": "Duis tempor anim non id tempor fugiat adipisicing et occaecat labore. Commodo non magna pariatur aute sit laborum Lorem dolor ad Lorem. Mollit occaecat qui veniam commodo voluptate nulla culpa tempor exercitation anim. Et est nostrud quis duis. Fugiat est duis eiusmod exercitation voluptate excepteur.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Nicole",
          "lastName": "Moreno"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699d61e7ce222d02509",
      "title": "occaecat ex duis in aliqua consequat ullamco",
      "duration": "56",
      "date": "2020-04-14",
      "description": "Exercitation est velit enim aliquip sint commodo amet incididunt veniam enim Lorem adipisicing id do. Sunt sit occaecat occaecat aute culpa. Minim quis sunt aute aute incididunt dolore dolore ea eu ad non. Commodo voluptate aliquip minim incididunt. Quis elit excepteur commodo aliquip eu sint excepteur laborum et. Ut laborum sit nostrud velit ea est consectetur ex incididunt nisi laboris qui.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Elise",
          "lastName": "Riley"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699df062b750fc02630",
      "title": "proident commodo occaecat mollit tempor adipisicing eu",
      "duration": "151",
      "date": "2020-04-10",
      "description": "Aute sit ea aliquip sint velit. Lorem quis cupidatat laboris ut pariatur. Et ullamco sunt consequat labore consequat adipisicing ullamco.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Kayla",
          "lastName": "Burris"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a69941d197541236c1a9",
      "title": "excepteur id voluptate ipsum Lorem culpa ullamco",
      "duration": "105",
      "date": "2020-02-08",
      "description": "Et quis velit tempor ex pariatur nostrud. Ipsum excepteur anim aliqua voluptate pariatur dolore deserunt cupidatat. Velit irure eu ad eiusmod ullamco veniam. Magna anim exercitation minim magna ad do est. Pariatur mollit labore ipsum velit sit esse ex eiusmod sit consequat. Ea minim officia reprehenderit exercitation irure dolore eu consectetur aute.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Chrystal",
          "lastName": "Strong"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699a2f21e51c288dd0d",
      "title": "irure dolore sunt laboris Lorem veniam aliqua",
      "duration": "45",
      "date": "2020-02-22",
      "description": "Exercitation occaecat pariatur velit tempor eu pariatur ut eu velit est commodo consectetur. Incididunt magna magna excepteur aliquip aliqua do nostrud eiusmod elit. Ea est sint ad eiusmod.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Lynn",
          "lastName": "Ramsey"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699ad0200b3c992251e",
      "title": "adipisicing nulla quis ea duis non velit",
      "duration": "46",
      "date": "2020-08-23",
      "description": "Mollit officia reprehenderit cupidatat velit. Commodo deserunt et irure ut id et reprehenderit enim eiusmod velit nulla eiusmod aliqua laborum. Duis non excepteur ex excepteur veniam velit occaecat cillum irure.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Kaufman",
          "lastName": "Keith"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a69987659b17fd24c6ed",
      "title": "amet voluptate sit nisi elit ad laboris",
      "duration": "119",
      "date": "2020-05-17",
      "description": "Sunt magna esse aute veniam esse eu eu. Excepteur eiusmod eiusmod nulla aute aliquip laboris excepteur voluptate sint culpa quis. Est Lorem et laborum duis. Ipsum adipisicing voluptate eiusmod tempor officia excepteur anim labore. In in ullamco aliqua aliquip deserunt ipsum anim excepteur aliqua laboris est. Incididunt ut ex tempor cupidatat anim tempor magna Lorem duis dolor. Lorem reprehenderit nulla officia minim elit sint mollit.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Heidi",
          "lastName": "Larsen"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699e460b1c46348104e",
      "title": "mollit nostrud consequat ullamco amet Lorem ut",
      "duration": "55",
      "date": "2020-05-06",
      "description": "Dolore ipsum dolore nisi reprehenderit culpa sint. Et enim incididunt velit ex commodo mollit. Commodo elit consectetur fugiat cillum eu aliqua officia ad mollit mollit sint in anim. Proident sit nisi velit est anim aute tempor voluptate proident dolore. Sunt veniam sit sit dolor minim sit consequat officia elit eu enim. Labore duis ullamco et esse occaecat labore voluptate reprehenderit sunt elit eiusmod duis id proident. Occaecat aliqua quis cillum sit minim pariatur ex voluptate.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Katheryn",
          "lastName": "Vinson"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699194a0d0bb24993a1",
      "title": "reprehenderit labore nulla incididunt qui enim aliqua",
      "duration": "36",
      "date": "2021-01-29",
      "description": "Cupidatat magna laboris velit amet eu non. Culpa ea occaecat aliquip culpa. Voluptate est veniam cillum incididunt eu culpa aliqua esse. Veniam mollit enim veniam elit amet mollit dolor aliquip esse enim proident voluptate. Et esse elit irure eu anim veniam.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "James",
          "lastName": "Estrada"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a6994186f0c0405da470",
      "title": "pariatur labore proident ex culpa ex dolore",
      "duration": "52",
      "date": "2020-07-10",
      "description": "Do elit minim reprehenderit pariatur commodo dolor aute voluptate non. Exercitation proident aliqua mollit nisi excepteur incididunt excepteur amet labore deserunt ea. Laboris esse exercitation et culpa nulla consectetur ex elit officia cillum laborum.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Angie",
          "lastName": "Baker"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699c63aa8f72c9c8cda",
      "title": "culpa veniam aliqua non officia id et",
      "duration": "101",
      "date": "2020-10-31",
      "description": "Mollit do est quis voluptate cillum. Excepteur elit velit ipsum ut incididunt excepteur ipsum sint et aliquip nulla excepteur. Velit Lorem eu et duis quis culpa veniam dolor nostrud dolor in ea dolore. Qui ut consequat pariatur enim id aute aute nostrud Lorem esse voluptate consectetur qui. Magna cupidatat cupidatat aute est commodo id aliqua labore exercitation aliqua dolore nulla. Nulla qui sint fugiat ullamco pariatur id tempor.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Jones",
          "lastName": "Berry"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699bb40d11ebe3a2759",
      "title": "aliqua adipisicing quis Lorem sunt minim veniam",
      "duration": "52",
      "date": "2020-09-22",
      "description": "Lorem officia irure ut tempor nisi est nisi enim et. Eiusmod minim ut ex aute elit eu ea nostrud cupidatat deserunt veniam nulla laboris. Consequat aute aute excepteur pariatur id laborum quis velit fugiat aliqua veniam. Aliquip enim ex officia sunt. Eiusmod nostrud laborum ex et voluptate ea. Cillum non esse dolore reprehenderit do cupidatat aliqua consectetur.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Minnie",
          "lastName": "Head"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a69943f14aeaf8550a0d",
      "title": "id mollit pariatur esse et est magna",
      "duration": "33",
      "date": "2021-01-16",
      "description": "Excepteur aliqua labore fugiat esse consectetur ea irure nostrud. Ipsum cillum in pariatur eiusmod et quis Lorem cupidatat labore veniam dolore sunt exercitation do. Exercitation quis anim consequat et sit. Nulla nostrud laborum in qui incididunt irure tempor. Aliquip consectetur laborum quis fugiat. Ut sit tempor ad proident dolor ipsum.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Bobbie",
          "lastName": "Nichols"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a6994750d4effed9de32",
      "title": "est excepteur ea veniam nisi proident do",
      "duration": "151",
      "date": "2020-11-28",
      "description": "Reprehenderit nisi dolore pariatur adipisicing ea laboris sunt aute reprehenderit ad nostrud nisi labore cillum. Reprehenderit proident aliquip voluptate voluptate deserunt et eu ullamco ut irure esse occaecat ea. Nulla quis et consectetur ipsum. Enim cillum fugiat amet elit dolore ad. Quis commodo nulla voluptate ipsum ullamco velit adipisicing officia dolor id eiusmod cupidatat. Do fugiat eu ullamco enim quis ex quis aliqua ipsum excepteur. Sunt dolor quis consectetur occaecat commodo laborum dolor.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Deirdre",
          "lastName": "Duke"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699d39d8935ec622b87",
      "title": "ullamco exercitation quis eiusmod deserunt aliqua consequat",
      "duration": "52",
      "date": "2020-05-03",
      "description": "Aute id eiusmod veniam quis pariatur occaecat dolor. Ad dolore adipisicing et nostrud id pariatur. Sunt cillum id reprehenderit ullamco. Anim ad Lorem magna veniam Lorem ullamco sint quis ullamco sint. Minim occaecat sit laborum esse eiusmod ut id.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Miranda",
          "lastName": "Short"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699ef44594731f52a9f",
      "title": "aliquip consectetur ut duis ut esse est",
      "duration": "58",
      "date": "2020-04-05",
      "description": "Aliquip eiusmod duis incididunt aliqua adipisicing irure aute eu amet dolor nisi adipisicing. Ipsum incididunt quis cillum voluptate excepteur pariatur sint cillum aliquip consectetur. Ex sint non ullamco aute. Voluptate veniam cillum voluptate non exercitation. Do elit eiusmod eu magna ea duis. Ex ex do aliquip occaecat enim commodo nisi nisi labore fugiat officia dolore ullamco. Fugiat voluptate incididunt id commodo.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Mcgee",
          "lastName": "Burton"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699d264ada6e82d0bb4",
      "title": "reprehenderit consectetur culpa velit ut ipsum officia",
      "duration": "36",
      "date": "2020-12-15",
      "description": "Sint Lorem aliqua culpa qui cillum ipsum officia nisi culpa mollit Lorem pariatur sit. Eiusmod aliquip excepteur exercitation sint dolor nulla consequat. Adipisicing anim ea sit dolore ut reprehenderit et reprehenderit aliquip.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Tia",
          "lastName": "Fields"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a6992d3793dabc8de2f7",
      "title": "dolor tempor proident sit quis esse minim",
      "duration": "43",
      "date": "2020-02-08",
      "description": "Commodo veniam aliquip voluptate mollit ex occaecat qui in voluptate adipisicing consectetur ullamco. Consequat adipisicing consectetur commodo nulla sint pariatur aliqua sit non mollit incididunt fugiat id sunt. Labore eiusmod minim irure duis deserunt laborum ut veniam nisi amet qui consectetur. Ipsum veniam adipisicing tempor minim proident non irure laboris laborum magna. Aute eiusmod commodo dolor excepteur cupidatat ut veniam excepteur.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Holden",
          "lastName": "Huber"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699f9ad62e9ad3584c7",
      "title": "cupidatat irure qui esse ex deserunt qui",
      "duration": "142",
      "date": "2021-01-19",
      "description": "Incididunt duis anim sit aliquip dolor incididunt duis dolor dolore consectetur eiusmod do consequat. Elit ut aliqua id quis elit anim ullamco dolore quis quis aliquip. Ipsum excepteur voluptate sit mollit. In consectetur et velit cillum quis eu elit. Officia ullamco velit aliqua sunt pariatur esse sit mollit esse.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Mildred",
          "lastName": "Ford"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a6995fd67c1d689ee64d",
      "title": "irure nulla laborum minim non dolor nulla",
      "duration": "134",
      "date": "2020-06-15",
      "description": "Dolor ut labore qui eu eiusmod ipsum. Sit laboris adipisicing sunt non cillum. Veniam non anim Lorem quis aliquip esse labore fugiat fugiat cupidatat mollit excepteur id. Id sit sit laborum exercitation. Magna qui elit occaecat ea in nostrud adipisicing laborum incididunt anim officia.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Johnnie",
          "lastName": "Boone"
        }
      ],
      "isTopRated": false
    },
    {
      "id": "5db5a699ed9bfc7edeaae4ec",
      "title": "culpa laboris ipsum est nulla sunt qui",
      "duration": "54",
      "date": "2020-12-15",
      "description": "Ea dolore quis adipisicing irure labore aliqua elit. Non minim enim ad commodo Lorem consequat culpa enim exercitation ullamco pariatur mollit. Exercitation velit esse dolor consequat anim culpa. Ut nostrud sunt pariatur esse cupidatat irure eiusmod mollit cupidatat dolore voluptate laboris excepteur culpa.\r\n",
      "image": `https://picsum.photos/220/150?random=${getRandomCourseId(MAX_COURSE_ID)}`,
      "authors": [
        {
          "firstName": "Angel",
          "lastName": "Mooney"
        }
      ],
      "isTopRated": false
    }
  ]

export {
  courses,
  getRandomCourseImage
};
