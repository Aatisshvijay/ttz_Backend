const mongoose = require("mongoose");
require("dotenv").config();
const Temple = require("../models/Temple");

const templeData = {
  "Maha Avatars of Vishnu": {
    image:
      "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147274/vishnu_hol1p1.png",
    temples: {
      "Vishnu (108 Divya Desams)": {
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
        description: "The 108 sacred temples of Lord Vishnu",
        temples: [
          {
            id: "dd1",
            name: "Srirangam Ranganathaswamy Temple",
            location: "Trichy, Tamil Nadu, India",
            description: "The idol of Lord Ranganatha, along with its celestial dome (Vimana), was gifted by Lord Rama to Vibhishana, the brother of Ravana.\nWhile traveling back to Lanka, Vibhishana placed the Vimana on the banks of the Kaveri River to perform his midday prayers. When he returned, the Vimana was stuck and could not be moved.\nLord Vishnu appeared and declared that he had chosen this spot as his eternal resting place, Bhoologa Vaikundam.\nHe agreed to grant Vibhishana darshan facing South, towards Lanka, in his reclining form on Adisesha.\n\nAlvars Who Sang (Mangalasasanam):-\nAll 12 Alvars: Poigai Alvar, Boothath Alvar, Peyalvar, Thirumalisai Alvar, Nammalvar, Madhurakavi Alvar, Kulasekara Alvar, Periyalvar, Andal, Thondaradippodi Alvar, Thiruppaan Alvar, Thirumangai Alvar",
            image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705799/dd1_beavbf.jpg",
            significance: "Largest temple complex in the world spread across 156 acres with more than 21 gopurams and first among 108 Divya Desams",
            bestTime: "November to February",
            festivals: "Vaikunta Ekadashi, Jyestabhishekam",
            state: "Tamil Nadu"
          },
          {
  id: "dd96",
  name: "Sri Venkateswara Swamy Temple (Tirupati)",
  location: "Tirupathi, Tirumala, Andhra Pradesh, India",
  description: "This is the sacred hill where Lord Vishnu is believed to have manifested in the Kali Yuga to protect humanity.\nAfter being struck on the chest by Sage Bhrigu, Lord Vishnu descended to the Earth, settling on the Tirumala hills as Srinivasa. To facilitate his marriage with Goddess Padmavathi, he took a massive loan from Kubera, the treasurer of the Devas.\nThe Lord stands here eternally in a standing posture, accepting offerings from devotees to pay off that celestial debt, earning the title Kaliyuga Prathyaksha Deivam.\n\nAlvars Who Sang (Mangalasasanam):-\nNammalvar, Andal, and Thirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705799/dd96_jciz2v.jpg",
  significance: "Most visited Divya Desam in Andhra Pradesh",
  bestTime: "September to January",
  festivals: "Brahmotsavam, Vaikunta Ekadashi",
  state: "Andhra Pradesh"
},
          {
  id: "dd2",
  name: "Sri Azhagiya Manavala Perumal Temple",
  location: "Thirukkozhi (Uraiyur), Trichy, Tamil Nadu, India",
  description: "King Nanda Chola of Uraiyur, finding a divine child in a lotus tank, raised her as his daughter, Kamalavalli (an incarnation of Goddess Lakshmi).\nKamalavalli grew up and fell deeply in love with Lord Ranganatha of Srirangam. To honor their union, Lord Vishnu, in the form of Ranganatha,\n appeared here as the supremely handsome groom, Azhagiya Manavalan, to marry her. This temple is revered as the birthplace of Kamalavalli Nachiyar and the wedding site.\nAlvars Who Sang (Mangalasasanam):-\n\nKulasekara Alvar and Thirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760707051/dd2_vuhaun.jpg",
  significance: "Important Divya Desam with historic significance.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd3",
  name: "Sri Purushothaman Perumal Temple",
  location: "Thirukkarambanoor, Trichy, Tamil Nadu, India",
  description: "This is a unique Trimurti Kshetram where the Hindu Trinity—Vishnu, Shiva, and Brahma—reside on the same premises.\nLord Shiva was wandering with the skull of Brahma stuck to his hand due to the sin of Brahmahatti.\nUpon arriving here, Lord Purushothaman (Vishnu) directed Goddess Lakshmi to give alms (food) to Shiva, which immediately ended Shiva’s extreme hunger, providing him initial relief from his curse.\nThis act of grace highlights Vishnu's compassion as the Supreme Being.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Significant Divya Desam in Trichy region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd4",
  name: "Sri Pundarikashan Perumal Temple",
  location: "Thiruvellarai, Trichy, Tamil Nadu, India",
  description: "Legend traces this temple to the time of King Sibi Chakravarthi, an ancestor of Lord Rama.\nWhile hunting, the King chased a white boar that disappeared into a deep hole in the ground. Following the guidance of Sage Markandeya, the King poured milk into the hole, and Lord Vishnu appeared, sitting under the Vimala Kruti Vimanam.\nThe Lord instructed the King to construct a temple here, built upon the large white rock (Vellarai), which forms the core of the shrine.\n\nAlvars Who Sang (Mangalasasanam):-\nPeriyalvar and Thirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam revered by devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd5",
  name: "Sri Vadivazhagiya Nambi Perumal Temple",
  location: "Thiru Anbil, Trichy, Tamil Nadu, India",
  description: "Sage Suthaba was performing penance under the water when he failed to notice the arrival of the short-tempered Sage Durvasa.\nInfuriated by the perceived disrespect, Durvasa cursed Suthaba to be reborn as a frog (Manduka). The cursed sage prayed intensely to Lord Vishnu at this spot on the banks of the Kollidam River.\n Lord Vishnu then appeared as the supremely beautiful Lord, Vadivazhagiya Nambi, and relieved Suthaba of his curse.\nAlvars Who Sang (Mangalasasanam):-\n\nThirumalisai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam celebrated for Vaishnavite worship.",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd6",
  name: "Sri Appakkudathaan Perumal Temple",
  location: "Thirupper Nagar, Trichy, Tamil Nadu, India",
  description: "King Uparamanyu was cursed by a sage and had to feed thousands of people daily to regain his strength.\nOne day, Lord Vishnu appeared as an old, perpetually hungry Brahmin and demanded a pot (Kudam) of Appam (sweet cakes) and water from the king.\nAfter the Brahmin ate the entire offering, he reclined contentedly, holding the empty pot. Because of this divine act, the Lord is known as Appakkudathaan, the one who took the Appam pot.\nAlvars Who Sang (Mangalasasanam):-\n\nPeriyalvar, Thirumangai Alvar, Thirumalisai Alvar, and Nammalvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Trichy region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd7",
  name: "Sri Neelamega Perumal Temple",
  location: "Thiru Thanjaimaamani Koil, Thanjavur, Tamil Nadu, India",
  description: "This Divya Desam is unique, comprising three separate temples in close proximity—Neelamega Perumal, Manikkunda Perumal, and Veera Narasimha Perumal—counted as one.\nThe combined legend revolves around three demons (Tanjakan, Tantakan, and Tarakan) who wreaked havoc in the region.\nLord Vishnu appeared in these three distinct forms to subdue all three demons, offering them salvation and thus purifying the land of Thanjavur.\nAlvars Who Sang (Mangalasasanam):-\n\nBoothath Alvar, Nammalvar, and Thirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Thanjavur region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd8",
  name: "Sri Hara Saabha Vimocchana Perumal Temple",
  location: "Thirukkandiyur, Thanjavur, Tamil Nadu, India",
  description: "This is the final and crucial place where Lord Shiva was completely absolved of the Brahmahatti Dosha he had incurred.\nFollowing his partial relief at Uthamar Kovil, Lord Shiva came to Thirukkandiyur. Lord Vishnu appeared and directed Shiva to take a holy dip in the temple tank, Kapala Theertham.\nUpon dipping, the skull of Brahma, which had been permanently stuck to Shiva's hand, detached itself, relieving (Vimochana) Shiva (Hara) of his sin (Saabha).\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Famous Divya Desam with historic importance.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd9",
  name: "Sri Aaduthurai Perumal Temple",
  location: "Thirukkoodaloor, Thanjavur, Tamil Nadu, India",
  description: "The name Thirukkoodaloor, meaning place of congregation, originated because all the Devas and great sages, led by Nandaka Rishi, gathered (Koodi) here on the banks of the Cauvery River.\nThey collectively prayed to Lord Vishnu to protect the universe from a destructive demon.\nResponding to their unified plea, the Lord appeared as Vaiyam Katha Perumal (the Protector of the World), assuring their safety and establishing his protective presence here.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Thanjavur.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd10",
  name: "Sri Gajendra Varadha Perumal Temple",
  location: "Thirukkavithalam (Kabisthalam), Thanjavur, Tamil Nadu, India",
  description: "This temple is famous for the Gajendra Moksha legend, where Lord Vishnu appeared to save the elephant king, Gajendra, from a crocodile.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam celebrated for Vishnu worship.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd11",
  name: "Sri Valvil Ramar Perumal Temple",
  location: "Thiruppullam Boothankudi, Thanjavur, Tamil Nadu, India",
  description: "Dedicated to Lord Rama in a rare reclining posture (Bhujanga Sayanam). The Valvil (bow) in his name signifies his prowess.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam for pilgrims.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd12",
  name: "Sri Aandu Alakkum Ayan Perumal Temple",
  location: "Thiru Aadhanoor, Thanjavur, Tamil Nadu, India",
  description: "Dedicated to Lord Aandu Alakkum Ayan Perumal, the presiding deity is seen in a distinctive reclining posture (Bhujanga Sayanam), appearing to the great sage Markandeya and the Goddess Kaveri.\nThe Lord is uniquely seen holding a measuring jar (Aandu Alakkum) of rice near His head, as He promised to feed the Goddess Kaveri (also known as Kamala Valli), who worshipped Him here\n This posture symbolizes His role as the eternal protector and provider who sustains all life in the universe.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Thanjavur.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd13",
  name: "Sri Saarangapani Perumal Temple",
  location: "Thirukkudanthai, Thanjavur, Tamil Nadu, India",
  description: " Famous for Lord Saarangapani, this temple is regarded as one of the most important Divya Desams in South India, with immense architectural and religious grandeur.\nLegend states that during the Great Deluge, the Lord appeared here from the Mahamaham tank after an earthen pot containing the seeds of creation floated there.\nHe is seen in an upward-moving posture (known as utthana sayanam or rising posture), symbolizing His emergence from the garbha griha (sanctum) to bless and protect His devotees.\n\nAlvars Who Sang (Mangalasasanam):-\nPoigai Alvar, Boothathalvar, Peiyalwar, Nammalwar, Periyalwar, Sri Andal, Thirumizhisai Alwar, Thirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam attracting thousands of pilgrims.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd14",
  name: "Sri Oppiliappa Perumal Temple",
  location: "Thiru Vinnagar, Thanjavur, Tamil Nadu, India",
  description: "Dedicated to Lord Oppiliappa, this temple is uniquely revered as the 'second Srirangam' and is steeped in Vaishnavite heritage.\nThe sacred tradition here is rooted in the Lord's promise to the sage Markandeya, swearing that He would never accept any food with salt in this shrine.\nThis promise was made when the sage offered his young daughter, Bhumi Devi, for marriage, and the Lord declared that He would accept her despite her youth. Consequently, devotees offer and consume only unsalted food (Uppu Illa Appan or Lord without salt) as prasad to honor this divine vow.\n\nAlvars Who Sang (Mangalasasanam):-\nPeriyalwar, Thirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam for worshipers.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd15",
  name: "Sri Thirunarayoor Nambi Perumal Temple",
  location: "Thirunarayoor (Naachchiyaar Koil), Thanjavur, Tamil Nadu, India",
  description: "his temple is unique among the Divya Desams as the Goddess, known as Nachiyar (Vanjuḷa Valli), is given prominence in all rituals, receiving the first honors.\nThe primary deity is Lord Thirunarayoor Nambi (Srinivasa Perumal). It is historically significant as it is believed to be the place where Lord Vishnu initiated Pancha Samskara (religious initiation) to Thirumangai Alvar, who went on to become one of the greatest Alvar saints, cementing the temple's role in the lineage of Vaishnavism.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam with historic importance.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd16",
  name: "Sri Saranathan Perumal Temple",
  location: "Thiruccherai, Thanjavur, Tamil Nadu, India",
  description: "Dedicated to Lord Saranathan, the temple is known for the Lord being the protector (Sarana). Legend states that the Lord appeared here in a magnificent form to grant darshan (sacred sight) to a king who was seeking the most beautiful deity.\nThe Lord is also credited with protecting the Goddess Kaveri from the great floods, assuring her that He is the ultimate refuge (Sarana) for all creation, and hence is seen holding her in a special posture, signifying divine protection.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Trichy-Thanjavur region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd17",
  name: "Sri Bhaktavatsala Perumal Temple",
  location: "Thirukkannamangai, Thanjavur, Tamil Nadu, India",
  description: "This temple is considered one of the Pancha Krishna Kshetrams (five Krishna temples) in the region and is highly revered as an equal to Thirupathi and Srirangam.\nThe deity, Lord Bhaktavatsala Perumal, is known as the 'Lover of Devotees,' a name that signifies His boundless affection for His followers.\nLegend claims that Lord Vishnu married Goddess Lakshmi here, and all the celestial beings, including the Trinity, gathered to witness the divine wedding, making the place eternally sacred.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam attracting devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd18",
  name: "Sri Jaganatha Perumal Temple",
  location: "Thirunandhipura Vinnagaram (Nathan Koil), Thanjavur, Tamil Nadu, India",
  description: "Dedicated to Lord Jaganatha Perumal, this site is historically named Thirunandhipura Vinnagaram because Lord Vishnu appeared here to grant darshan (sacred sight) to Nandhi, the sacred bull-vehicle of Lord Shiva.\nNandhi performed severe penance at this spot after inadvertently insulting a sage. Lord Vishnu blessed him, granting him the view of His divine form, hence the name 'Nandhipura' (Nandhi's place) and cementing the harmony between Vaishnavism and Shaivism traditions here.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Trichy-Thanjavur region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd19",
  name: "Sri Kola Valvilli Ramar Perumal Temple",
  location: "Thiruvelliyankudi, Thanjavur, Tamil Nadu, India",
  description: "Temple dedicated to Lord Kola Valvilli Ramar Perumal, who holds immense significance in Vaishnavism.\nThe Lord, wielding his magnificent bow (Valvilli), appeared here in a reclining posture (Bhujanga Sayanam) to bless the Devas and the great Sage Parasara, who worshipped Him to attain enlightenment.\nLegend also states that Venus (Shukra, or Velli in Tamil) worshipped the Lord here, giving the town its name, Thiruvelliyankudi.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam with historic legends.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd20",
  name: "Sri Parimala Ranganatha Perumal Temple",
  location: "Thiru Indhaloor, Mayiladuturai, Tamil Nadu, India",
  description: "Dedicated to Lord Parimala Ranganatha Perumal, this is one of the important Pancha Ranga Kshetrams on the Kaveri river.\nThe Lord is in a majestic reclining posture (Bhujanga Sayanam). The temple gets its unique name 'Parimala' (fragrant) because the deity is believed to have been worshipped by Chandran (the Moon-god) with 1008 lotus flowers, and it is here that the sacred Vedas were restored to their full sanctity after being recovered from the Asuras.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Mayiladuturai region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd21",
  name: "Tirukannamangai Sri Brahmadesam Perumal Temple",
  location: "Tirukannamangai, Tamil Nadu, India",
  description: "Dedicated to Lord Devaadi Raja Perumal, who is known for his beautiful architecture and spiritual importance.\nThe Lord gave darshan (sacred sight) to King Uparisaravasu and the celestial beings who gathered here to worship Him.\nThe temple's vimana (tower above the sanctum) is known as the Jagannatha Vimana, and the temple is praised as the site where Lord Vishnu came down to earth to bless the devotees with His divine presence.\n\nAlvars Who Sang (Mangalasasanam):-\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "A historically significant Divya Desam",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd21",
  name: "Sri Devaadi Raja Perumal Temple",
  location: "Thiruvazhunthoor, Mayiladuturai, Tamil Nadu, India",
  description: "Dedicated to Lord Devaadi Raja Perumal, known for its beautiful architecture and spiritual importance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam in Mayiladuturai region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd22",
  name: "Sri Arulmaakadal Perumal Temple",
  location: "Thiru Sirupuliyur, Mayiladuturai, Tamil Nadu, India",
  description: "Temple dedicated to Lord Arulmaakadal Perumal, celebrated for Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Mayiladuturai.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd23",
  name: "Sri Sowrirajan Neelamega Perumal Temple",
  location: "Thirukkannapuram, Mayiladuturai, Tamil Nadu, India",
  description: "Dedicated to Lord Sowrirajan Neelamega Perumal, famous for its historic and spiritual significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Mayiladuturai.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd24",
  name: "Sri Soundararajaperumal Temple",
  location: "Thiru Naagai, Nagapattinam, Tamil Nadu, India",
  description: "Temple dedicated to Lord Soundararajaperumal, significant for spiritual practices and festivals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam celebrated for Vishnu worship.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd25",
  name: "Sri Loganatha Perumal Temple",
  location: "Thirukkannankudi, Mayiladuturai, Tamil Nadu, India",
  description: "Dedicated to Lord Loganatha Perumal, known for divine rituals and Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Mayiladuturai.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd26",
  name: "Sri Naan Madhiya Perumal Temple",
  location: "Thiru Thalaicchanga Naanmathiyam, Mayiladuturai, Tamil Nadu, India",
  description: "Temple dedicated to Lord Naan Madhiya Perumal, celebrated for spiritual and cultural importance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam attracting many devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd27",
  name: "Sri Thadalar Seerkazhi Thirivikaraman Perumal Temple",
  location: "Kaazhicheeraama Vinnagaram, Sirkazhi, Tamil Nadu, India",
  description: "Dedicated to Lord Thirivikaraman Perumal, famous for festivals and rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Sirkazhi region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd28",
  name: "Sri Srinivasa Perumal Temple",
  location: "Thiruvellakkulam (Annan Kovil), Sirkazhi, Tamil Nadu, India",
  description: "Temple dedicated to Lord Srinivasa Perumal, celebrated for spiritual and cultural traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Sirkazhi.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd29",
  name: "Sri Deiva Naayaga Perumal Temple",
  location: "Thiru Devanaar Thogai, Sirkazhi, Tamil Nadu, India",
  description: "Dedicated to Lord Deiva Naayaga Perumal, renowned for its religious significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam in Sirkazhi region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd30",
  name: "Sri Lakshmi Narashima Perumal Temple",
  location: "Thiruvaali Thirunagari, Sirkazhi, Tamil Nadu, India",
  description: "Temple dedicated to Lord Lakshmi Narashima Perumal, known for its divine legends.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Sirkazhi Divya Desam celebrated widely.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd31",
  name: "Sri Gopala Krishna Perumal Temple",
  location: "Thiru Kavalampaadi, Sirkazhi, Tamil Nadu, India",
  description: "Dedicated to Lord Gopala Krishna Perumal, significant for Vaishnavite worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Sirkazhi.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd32",
  name: "Sri Varadharaja Perumal Temple",
  location: "Thiru Manikkoodam, Sirkazhi, Tamil Nadu, India",
  description: "Temple dedicated to Lord Varadharaja Perumal, famous for rituals and festivals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam in Sirkazhi.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd33",
  name: "Sri Thamaraiyal Kelvan Perumal Temple",
  location: "Thiru Paarthanpalli, Sirkazhi, Tamil Nadu, India",
  description: "Dedicated to Lord Thamaraiyal Kelvan Perumal, known for spiritual rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam attracting devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd34",
  name: "Sri Narayana Perumal Temple",
  location: "Thiru Manimaada Kovil, Sirkazhi, Tamil Nadu, India",
  description: "Temple dedicated to Lord Narayana Perumal, celebrated for its religious significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Sirkazhi.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd35",
  name: "Sri Kuda Maadu Koothan Perumal Temple",
  location: "Thiru Arimeya Vinnagaram, Sirkazhi, Tamil Nadu, India",
  description: "Dedicated to Lord Kuda Maadu Koothan Perumal, known for Vaishnavite worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam celebrated for Vishnu rituals.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd36",
  name: "Sri Seganmaal Ranganatha Perumal Temple",
  location: "Thiru Thetri Aambalam, Sirkazhi, Tamil Nadu, India",
  description: "Temple dedicated to Lord Seganmaal Ranganatha Perumal, celebrated for divine rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Sirkazhi region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd37",
  name: "Sri Per Arulaalan Perumal Temple",
  location: "Thiru Sempon Sei Kovil, Sirkazhi, Tamil Nadu, India",
  description: "Dedicated to Lord Per Arulaalan Perumal, known for rituals and festivals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam attracting many devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd38",
  name: "Sri Purushothama Perumal Temple",
  location: "Thiru Vann Purushothamam, Sirkazhi, Tamil Nadu, India",
  description: "Temple dedicated to Lord Purushothama Perumal, celebrated for Vaishnavite worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam in Sirkazhi.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd39",
  name: "Sri Vaigundha Nathan Perumal Temple",
  location: "Thiru VaiKunda Vinnagaram, Sirkazhi, Tamil Nadu, India",
  description: "Dedicated to Lord Vaigundha Nathan Perumal, significant in Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam attracting devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd40",
  name: "Sri Govindaraja Perumal Temple",
  location: "Thiruchitrakootam (Chidambaram), Cuddalore, Tamil Nadu, India",
  description: "Temple dedicated to Lord Govindaraja Perumal, famous for architecture and rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Cuddalore-Chidambaram region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd41",
  name: "Sri Deyva Nayaga Perumal Temple",
  location: "Thiruvaheendrapuram, Cuddalore, Tamil Nadu, India",
  description: "Temple dedicated to Lord Deyva Nayaga Perumal, known for its historic significance and traditional rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Cuddalore.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd42",
  name: "Sri Thiruvikrama Perumal Temple",
  location: "Thirukkoviloor, Cuddalore, Tamil Nadu, India",
  description: "Dedicated to Lord Thiruvikrama Perumal, celebrated for divine rituals and architectural beauty.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam attracting devotees from across Tamil Nadu.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd43",
  name: "Sri Varadharaja Perumal Temple",
  location: "Thirukkachchi, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Varadharaja Perumal, one of the oldest and most revered Divya Desams in Kanchipuram.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Historic Divya Desam, famous for Vaishnavite festivals.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd44",
  name: "Sri Aadhikesava Perumal Temple",
  location: "Ashtabhuyakaram, Kanchipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Aadhikesava Perumal, known for its sacred idol and rich cultural heritage.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam celebrated for its ancient rituals.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd45",
  name: "Sri Yathothakaari Perumal Temple",
  location: "Thiru Vekka, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Yathothakaari Perumal, famous for its architectural elegance and worship traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Kanchipuram Divya Desam with Vaishnavite heritage.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd46",
  name: "Sri Azhagiya Singar Perumal Temple",
  location: "Thiru Velukkai, Kanchipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Azhagiya Singar Perumal, known for traditional rituals and festival celebrations.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam revered by Vaishnavites.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd47",
  name: "Sri Deepa Prakasar Perumal Temple",
  location: "Thiruthanka, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Deepa Prakasar Perumal, celebrated for its spiritual and cultural significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Kanchipuram Divya Desam.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd48",
  name: "Sri Aadhi Varaha Perumal Temple",
  location: "ThirukKalvanoor, Kanchipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Aadhi Varaha Perumal, renowned for unique rituals and Vaishnavite worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Kanchipuram.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd49",
  name: "Sri Ulagalantha Perumal Temple",
  location: "Thiru Ooragam, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Ulagalantha Perumal, celebrated for its spiritual and architectural grandeur.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Historic Divya Desam known for Vaishnavite festivals.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd50",
  name: "Sri Jagadeeshwarar Temple",
  location: "Thiru Neeragam, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Jagadeeshwarar, known for its sacred rituals and traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Kanchipuram Divya Desam.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd51",
  name: "Sri Karunakara Perumal Temple",
  location: "Thiru Kaaragam, Kanchipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Karunakara Perumal, celebrated for Vaishnavite rituals and cultural significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Kanchipuram.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd52",
  name: "Sri Thirukkaar Vaanar Temple",
  location: "Thirukkaar Vaanam, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Thirukkaar Vaanar, known for spiritual traditions and festival celebrations.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Kanchipuram.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd53",
  name: "Sri Vaikunda Perumal Temple",
  location: "Thiruparameshwara Vinnagaram, Kanchipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Vaikunda Perumal, famous for spiritual importance and Vaishnavite heritage.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Kanchipuram Divya Desam.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd54",
  name: "Sri Pavala Vannar Temple",
  location: "Thiru Pavala Vannan, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Pavala Vannar, celebrated for rituals and Vaishnavite worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Kanchipuram.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd55",
  name: "Sri Nilathingal Thundathan Perumal Temple",
  location: "Thiru Nilathingal Thundam, Kanchipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Nilathingal Thundathan Perumal, famous for its sacred rituals and festivals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Kanchipuram.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd56",
  name: "Sri Pandava Thoodhar Temple",
  location: "Thiru Paadagam, Kanchipuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Pandava Thoodhar, celebrated for Vaishnavite rituals and heritage.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Kanchipuram Divya Desam.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd57",
  name: "Sri Vijayaraghava Perumal Temple",
  location: "Thiruputkuzhi, Kanchipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Vijayaraghava Perumal, known for spiritual significance and Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam attracting devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd58",
  name: "Sri Parthasarathy Temple",
  location: "Thiruvallikkeni, Chennai, Tamil Nadu, India",
  description: "Temple dedicated to Lord Krishna as Parthasarathy, famous in Chennai for its Vaishnavite heritage.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam and Krishna temple.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Krishna Janmashtami",
  state: "Tamil Nadu"
},
{
  id: "dd59",
  name: "Sri Neervanna Perumal Temple",
  location: "Thiruneermalai, Chennai, Tamil Nadu, India",
  description: "Dedicated to Lord Neervanna Perumal, revered for traditional Vaishnavite rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Chennai Divya Desam.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd60",
  name: "Sri Nithya Kalyana Perumal Temple",
  location: "Thiruvedanthai, Chennai, Tamil Nadu, India",
  description: "Temple dedicated to Lord Nithya Kalyana Perumal, celebrated for Vaishnavite worship and rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in the Chennai region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},{
  id: "dd61",
  name: "Sri Sthala Sayana Perumal Temple",
  location: "Thiru Kadalmalai, Mahabalipuram, Tamil Nadu, India",
  description: "Dedicated to Lord Sthala Sayana Perumal, known for its serene ambiance and Vaishnavite worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam near Mahabalipuram.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd62",
  name: "Sri Bhatavatsala Perumal Temple",
  location: "Thiru Nindravoor, Thirunindravur, Tamil Nadu, India",
  description: "Temple dedicated to Lord Bhatavatsala Perumal, celebrated for traditional Vaishnavite rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Major Divya Desam in the Thirunindravur region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd63",
  name: "Sri Veeraraghava Perumal Temple",
  location: "Thiruevvuloor, Tiruvallur, Tamil Nadu, India",
  description: "Dedicated to Lord Veeraraghava Perumal, famous for its sacred rituals and spiritual significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Tiruvallur.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd64",
  name: "Sri Yoga Narasimha Swamy Temple",
  location: "Thirukkadigai, Sholingur, Tamil Nadu, India",
  description: "Temple dedicated to Lord Narasimha in his yogic form, revered for unique rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Divya Desam with distinct yogic traditions.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Narasimha Jayanti",
  state: "Tamil Nadu"
},
{
  id: "dd65",
  name: "Sri Koodal Azhagar Perumal Temple",
  location: "Thirukkoodal, Madurai, Tamil Nadu, India",
  description: "Dedicated to Lord Koodal Azhagar Perumal, a major temple in Madurai with architectural grandeur.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Historic Divya Desam celebrated by Vaishnavites.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd66",
  name: "Sri Kaalamegha Perumal Temple",
  location: "Thiru Moghur, Madurai, Tamil Nadu, India",
  description: "Temple dedicated to Lord Kaalamegha Perumal, known for its ancient heritage and rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in the Madurai region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd67",
  name: "Sri Kallazhagar Perumal Temple",
  location: "Thirumaalirunsolai (Alagar Kovil), Madurai, Tamil Nadu, India",
  description: "Dedicated to Lord Kallazhagar Perumal, celebrated during annual Alagar festival.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam with grand festival celebrations.",
  bestTime: "April to May",
  festivals: "Chithirai Festival, Vaikunta Ekadashi",
  state: "Tamil Nadu"
},
{
  id: "dd68",
  name: "Sri Uraga Mellanayaan Perumal Temple",
  location: "Thirukkotiyoor, Madurai, Tamil Nadu, India",
  description: "Temple dedicated to Lord Uraga Mellanayaan Perumal, famous for spiritual and cultural traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Historic Divya Desam visited by thousands annually.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd69",
  name: "Sri Sathyagiri Natha Perumal Temple",
  location: "Thirumeyyam, Madurai, Tamil Nadu, India",
  description: "Temple dedicated to Lord Sathyagiri Natha Perumal, renowned for its ancient architecture.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Madurai.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd70",
  name: "Sri Kalyana Jagannatha Perumal Temple",
  location: "Thiruppullanni, Ramanathapuram, Tamil Nadu, India",
  description: "Temple dedicated to Lord Kalyana Jagannatha Perumal, celebrated for divine rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Divya Desam with unique spiritual traditions.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd71",
  name: "Sri Nindra Narayana Perumal Temple",
  location: "Thiruthankaal, Sivakasi, Tamil Nadu, India",
  description: "Temple dedicated to Lord Nindra Narayana Perumal, known for traditional rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Sivakasi region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd72",
  name: "Sri Vadabhatra Saayi Perumal Temple",
  location: "Thiruvilliputtur, Tamil Nadu, India",
  description: "Dedicated to Lord Vadabhatra Saayi Perumal, famous for Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in Tamil Nadu.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd73",
  name: "Sri Vaikundanatha Perumal Temple",
  location: "Thiruvaikuntham, Tirunelveli, Tamil Nadu, India",
  description: "Temple dedicated to Lord Vaikundanatha Perumal, known for sacred rituals and festivals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Tirunelveli district.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd74",
  name: "Sri Vijayaasana Perumal Temple",
  location: "Thiruvaragunamangai, Tirunelveli, Tamil Nadu, India",
  description: "Dedicated to Lord Vijayaasana Perumal, celebrated for spiritual and Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam visited by devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd75",
  name: "Sri Kaaichina Vendha Perumal Temple",
  location: "Thiruppulingudu, Tirunelveli, Tamil Nadu, India",
  description: "Temple dedicated to Lord Kaaichina Vendha Perumal, known for traditional rituals and spiritual significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Divya Desam in Tirunelveli district.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd76",
  name: "Sri Srinivasa Perumal Temple",
  location: "Thirukkulanthai, Tirunelveli, Tamil Nadu, India",
  description: "Dedicated to Lord Srinivasa Perumal, celebrated for Vaishnavite worship and cultural heritage.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Revered Divya Desam in Tamil Nadu.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd77",
  name: "Sri Aravindha Lochana Perumal Temple",
  location: "Thiruttholai Villimangalam, Tirunelveli, Tamil Nadu, India",
  description: "Temple dedicated to Lord Aravindha Lochana Perumal, known for sacred rituals and Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam for local devotees.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state:"Tamil Nadu"
},
{
  id: "dd78",
  name: "Sri Magara NedungKuzhai Kaathar Perumal Temple",
  location: "Thirupperai, Tirunelveli, Tamil Nadu, India",
  description: "Temple dedicated to Lord Magara NedungKuzhai Kaathar Perumal, celebrated for Vaishnavite worship and traditional rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Tirunelveli region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd79",
  name: "Sri Vaitha Maanitha Perumal Temple",
  location: "Thirukkoloor, Tirunelveli, Tamil Nadu, India",
  description: "Dedicated to Lord Vaitha Maanitha Perumal, revered for its sacred rituals and architectural beauty.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam in the Tirunelveli district.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd80",
  name: "Sri Aadhinatha Swamy Temple",
  location: "Thirukkurugur, Alwar Thirunagiri, Tamil Nadu, India",
  description: "Temple dedicated to Lord Aadhinatha Swamy, celebrated for its Vaishnavite traditions and rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Historic Divya Desam in Alwar Thirunagiri region.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},{
  id: "dd81",
  name: "Sri Thothatrinatha Perumal Temple",
  location: "Thiruvaramangai Vaanamaamalai, Nanguneri, Tamil Nadu, India",
  description: "Temple dedicated to Lord Thothatrinatha Perumal, an important Vaishnavite shrine in the region.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam of Nanguneri",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd82",
  name: "Sri Nindra Nambi Perumal Temple",
  location: "Thirukkurungudi, Tamil Nadu, India",
  description: "Dedicated to Lord Nindra Nambi Perumal, celebrated for its spiritual significance and Vaishnavite traditions.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Prominent Divya Desam in southern Tamil Nadu",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd83",
  name: "Sri Kuralappa Perumal Temple",
  location: "Thiruvanparisaaram, Nagercoil, Tamil Nadu, India",
  description: "Temple dedicated to Lord Kuralappa Perumal, known for its Vaishnavite practices and annual celebrations.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important pilgrimage site in Nagercoil",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd84",
  name: "Sri Aadhikesava Perumal Temple",
  location: "Thiru Vattaaru, Marthandam, Tamil Nadu, India",
  description: "A sacred Divya Desam dedicated to Lord Aadhikesava Perumal, with a rich tradition of worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key temple in the Kanyakumari region",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd85",
  name: "Sri Anantha Padmanabhaswamy Temple",
  location: "Thiruvananthapuram, Kerala, India",
  description: "Famous temple dedicated to Lord Anantha Padmanabhaswamy, known for its rich history and intricate architecture.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Most important Divya Desam in Kerala",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Alpasi Utsavam",
  state: "Kerala"
},
{
  id: "dd86",
  name: "Sri Maayapiran Perumal Temple",
  location: "Thirupuliyoor, Chengannur, Kerala, India",
  description: "Temple dedicated to Lord Maayapiran Perumal, part of the sacred Kerala Divya Desams.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Celebrated for its spiritual importance in Chengannur",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd87",
  name: "Sri Imayavarappa Perumal Temple",
  location: "Thirucchenkundroor, Chengannur, Kerala, India",
  description: "Dedicated to Lord Imayavarappa Perumal, a revered Divya Desam in the region.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Part of the 108 Divya Desams in Kerala",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd88",
  name: "Sri Parthasarathy Perumal Temple",
  location: "Thiruvaaran Vilai, Aranmulla, Kerala, India",
  description: "Temple dedicated to Lord Krishna as Parthasarathy, celebrated for its religious and historical significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Vaishnavite shrine in Kerala",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Krishna Janmashtami",
  state: "Kerala"
},
{
  id: "dd89",
  name: "Sri Paambanaiyappa Perumal Temple",
  location: "Thiruvanvandoor, Chengannur, Kerala, India",
  description: "Temple dedicated to Lord Paambanaiyappa Perumal, known for its ancient rituals and festivals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Famous Divya Desam in Chengannur",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd90",
  name: "Sri Kolapira Perumal Temple",
  location: "Thiruvalvaazh, Thiruvalla, Kerala, India",
  description: "Temple dedicated to Lord Kolapira Perumal, part of the Kerala Divya Desams.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Sacred site for Vaishnavites in Kerala",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd91",
  name: "Sri Athpudha Narayana Perumal Temple",
  location: "Thirukkadithaanam, Changanassery, Kerala, India",
  description: "A revered Divya Desam dedicated to Lord Athpudha Narayana Perumal.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Celebrated for its Vaishnavite traditions in Changanassery",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd92",
  name: "Sri Kaatkarai Appa Perumal Temple",
  location: "Thirukkaatkarai, Near Ernakulam, Kerala, India",
  description: "Temple dedicated to Lord Kaatkarai Appa Perumal, famous for its Vaishnavite rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Significant Divya Desam near Ernakulam",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd93",
  name: "Sri Moozhikkalathaan Perumal Temple",
  location: "Thirumoozhikkalam, Near Cochin International Airport, Kerala, India",
  description: "Temple dedicated to Lord Moozhikkalathaan Perumal, an important shrine for pilgrims.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Divya Desam known for its architecture and rituals",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd94",
  name: "Sri Uyyavantha Perumal Temple",
  location: "Thiruvithuvakkodu, Near Thrissur, Pattambi, Kerala, India",
  description: "Sacred Divya Desam dedicated to Lord Uyyavantha Perumal, celebrated for its Vaishnavite rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Popular pilgrimage site in Thrissur region",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},
{
  id: "dd95",
  name: "Sri Naavaay Mugundha Perumal Temple",
  location: "Thiru Naavaay, Near Kuttippuram, Kerala, India",
  description: "Temple dedicated to Lord Naavaay Mugundha Perumal, part of the sacred Kerala Divya Desams.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Vaishnavite shrine in Kuttippuram area",
  bestTime: "October to March",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Kerala"
},

{
  id: "dd97",
  name: "Sri Nava Narasimhar Temple",
  location: "Ahobilam, Andhra Pradesh, India",
  description: "Ahobilam is the exact, mountainous site where Lord Vishnu manifested as Narasimha to annihilate the demon king Hiranyakashipu and protect his pure devotee, Prahlada.\nThe name Ahobilam is exclaimed from the Sanskrit words Aho (great) and Balam (strength), witnessing the Lord's immense power. The temple complex is unique, featuring nine distinct shrines—the Nava Narasimhas—scattered across caves and hills, each depicting a different aspect of his fury or compassion, such as Jwala (furious) and Malola (with Lakshmi).\n\nAlvars who sang Mangalaasasanam here:\nThirumangai Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706520/dd97_we9gks.jpg",
  significance: "Significant Vaishnavite temple in Ahobilam region",
  bestTime: "September to January",
  festivals: "Vaikunta Ekadashi, Narasimha Jayanti",
  state: "Andhra Pradesh"
},
{
  id: "dd98",
  name: "Dwarkadhish Temple (Sri Kalyana Narayana Perumal)",
  location: "Dwaraka, Gujarat, India",
  description: "This Divya Desam is the sacred city of Dwarka—meaning Gateway to Heaven—founded by Lord Krishna after he left Mathura to establish his regal kingdom. He miraculously reclaimed 96 square kilometers of land from the sea for this purpose, where he reigned as Dwarkadhish (King of Dwarka). The current five-story temple stands on the site of his personal residence, Hari-Griha, believed to have been built by his great-grandson, Vajranabha. It is one of India's four most sacred pilgrimage destinations, the Char Dham.\n\nAlvars who sang Mangalaasasanam here:\nPeriyalvar, Thirumalisai Alvar, Nammalvar, and Thirumangai Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706520/dd98_pc16x9.jpg",
  significance: "Only Gujarat-based Divya Desam",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Gujarat"
},
{
  id: "dd99",
  name: "Sri Ram Temple",
  location: "Ayodhya, Uttar Pradesh, India",
  description: "This Divya Desam is the most sacred site of Ayodhya, the capital of the ancient Kosala Kingdom and the Janmabhoomi (birthplace) of Lord Rama, the seventh avatar of Vishnu and the hero of the Ramayana. Rama's life is celebrated as the epitome of righteousness, characterized by his adherence to truth (Ek Vachan), a single arrow (Ek Baan), and a single wife (Ek Patni). Ayodhya is considered the head of the seven Mukti Kshetrams (cities of liberation) and is where Brahma is said to have embraced Lord Vishnu.\n\nAlvars who sang Mangalaasasanam here:\nKulasekhara Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706520/dd99_juy5oh.jpg",
  significance: "Key Divya Desam in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Ram Navami, Vaikunta Ekadashi",
  state: "Uttar Pradesh"
},
{
  id: "dd100",
  name: "Shri Naimishnath Vishnu Temple (Sri Devaraja Perumal)",
  location: "naimisharanya, Uttar Pradesh, India",
  description: "This Divya Desam is dedicated to Sri Devaraja Perumal and is one of the eight self-manifested Vishnu temples. The sacred forest (aranya) of Naimisharanya is named from the rim (nemi) of the mental chakra (discus) released by Brahma to find the ideal spot for sages to perform penance.\nThe most famous legend involves the devas who sought Vishnu's help against the asura Vritra. Vishnu appeared here, revealing that only a weapon made from the bones of Sage Dadhichi would suffice. The sage willingly sacrificed his life, leading to the creation of the powerful Vajrayudha (thunderbolt) from his spine.\n\nAlvars who sang Mangalaasasanam here:\nThirumangai Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706520/dd100_tp2qxd.jpg",
  significance: "Important pilgrimage site for devotees in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttar Pradesh"
},
{
  id: "dd101",
  name: "Navamohana Krishna Temple (Sri Navamohana Krishna Perumal)",
  location: "Gokul, Mathura district, Uttar Pradesh, India",
  description: "This Divya Desam is the hallowed spot of Gokul, where Lord Krishna was raised by his foster parents, Nandagopan and Yasodha.\nThe main deity, Navamohana Krishna, is worshipped here in his enchanting childhood form, echoing his playful activities (leelas) such as subduing the serpent Kaliya and his dances with the Gopis.\nThough the current structure is modern due to historical destruction, the spiritual sanctity of this location, often called Ayarpadi (the cowherd's village), remains paramount.\n\nAlvars who sang Mangalaasasanam here:\nPeriyalvar, Andal,Thirumangai Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706520/dd101_hlharp.jpg",
  significance: "Key Krishna temple in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Krishna Janmashtami, Vaikunta Ekadashi",
  state: "Uttar Pradesh"
},
{
  id: "dd102",
  name: "Govardhan Mandir (Sri Govardhana Nesa Perumal)",
  location: "Mathura, Uttar Pradesh, India",
  description: "This Divya Desam is profoundly connected to the childhood leelas (divine plays) of Lord Krishna.\nThe most famous legend tells of a time when, to protect the residents of Vraja from a torrential flood unleashed by the wrathful God Indra, Krishna lifted the colossal Govardhan Hill and held it up like an umbrella for seven days on his little finger.\nThe main deity, Govardhana Nesa Perumal, is celebrated here as non-different from the hill itself. This entire holy land is known as Tiruvadamadurai in the ancient Tamil hymns.\n\nAlvars who sang Mangalaasasanam here:\nPeriyalvar, Andal, Nammalvar, Thirumangai Alvar, and Thondaradippodi Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706520/dd102_lqflqx.jpg",
  significance: "Important pilgrimage site in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Krishna Janmashtami",
  state: "Uttar Pradesh"
},
{
  id: "dd103",
  name: "Raghunathji Mandir (Sri Neelamega Perumal)",
  location: "Devprayag, Uttarakhand, India",
  description: "The Raghunathji Temple is dedicated to Lord Rama (Raghunathji) and his consort Sita. Legend states that after defeating the Brahmin demon king Ravana, Lord Rama came to this sacred confluence, known as Prayaga (the best place for penance), to absolve himself of the sin of Brahmahatya (killing a Brahmin).\nHe performed intense penance here before returning to Ayodhya. The temple, which houses the deity Neelamega Perumal, is one of the 108 Divya Desams and is mentioned across four major Puranas.\n\nAlvars who sang Mangalaasasanam here:\nPeyalvar, Nammalvar, Thirumangai Alvar, and Thirumalisai Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706519/dd103_f19amk.jpg",
  significance: "Prominent Vaishnavite temple in Uttarakhand",
  bestTime: "April to June",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttarakhand"
},
{
  id: "dd104",
  name: "Shri Narsingh Mandir (Sri Paramapurusha Perumal)",
  location: "Joshimutt, Uttarakhand, India",
  description: "The temple is dedicated to Lord Narasimha, the man-lion avatar of Vishnu, and serves as the winter abode for the idol of Badrinath. An important prophecy is connected to the deity's right arm, which is believed to be shrinking day by day.\nLegend states that when this arm falls off, the route to Badrinath will be permanently blocked by a landslide, signaling the end of the Kali Yuga. The main temple is also revered as Thiruppirudhi, one of the 108 Divya Desams, making it a powerful spiritual center.\n\nAlvars who sang Mangalaasasanam here:\nThirumangai Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706519/dd104_mbjnkj.jpg",
  significance: "Key Vaishnavite shrine in Uttarakhand",
  bestTime: "April to June",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttarakhand"
},
{
  id: "dd105",
  name: "Shri Badarinath Dham (Sri Badri Narayana Perumal)",
  location: "Badrinath, Uttarakhand, India",
  description: "This sacred site is revered as Badrika Ashrama, where Lord Vishnu performed intense penance for thousands of years. Unaware of the harsh cold, his consort, Goddess Lakshmi, transformed into the nearby Badri (Jujube/Indian Date) tree to shield him from the snow.\nPleased by her devotion, Vishnu named the spot after her. The temple houses a black stone idol of Lord Badrinarayana seated in a meditative posture, which is said to have been recovered from the Alaknanda River by Adi Shankaracharya in the 8th century CE and re-enshrined here.\n\nAlvars who sang Mangalaasasanam here:\nThirumangai Alvar.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706892/dd105_svznf8.jpg",
  significance: "Famous Divya Desam in the Himalayas",
  bestTime: "May to October",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttarakhand"
},
{
  id: "dd106",
  name: "Muktinath Temple (Sri Moorthy Perumal Temple)",
  location: "Mukthinath, Nepal",
  description: "The Muktinath Temple in Nepal is celebrated as Mukti Kshetra (the Place of Liberation), where devotees seek moksha (salvation). As the 105th of the 108 Divya Desams, its ancient Sri Vaishnava name is Thiru Saligramam.\nThe temple's origin is tied to the curse of a virtuous woman named Vrinda, whose devotion was broken by a trick of Lord Vishnu. Vrinda cursed Vishnu to turn into a stone, leading him to manifest here as the Saligrama Shila.\nThis black stone, revered as a non-anthropomorphic form of Vishnu, is naturally found in the nearby Gandaki River. The temple features a gold murti of Lord Vishnu and is famous for the 108 Mukti Dhara (water spouts), where pilgrims bathe to cleanse their sins.\n\nAlvar who sang Mangalaasasanam here:\nThirumangai Alvar",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760706892/dd106_wl90kf.jpg",
  significance: "Nepal-based Vaishnavite shrine celebrated by pilgrims",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Nepal"
},
{
  id: "dd107",
  name: "Celestial Abode (ThirupPaarkadal)",
  location: "Vyugam (Celestial), Mythical",
  description: "Divya Desam located in the celestial realm, revered in the scriptures for its spiritual significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Sacred Vinnulaga Divyadesam (Celestial Abode)",
  bestTime: "N/A",
  festivals: "N/A",
  state: "Celestial"
},
{
  id: "dd108",
  name: "Celestial Abode (ThirupParamapadham)",
  location: "Parathuvam (Celestial), Mythical",
  description: "Sacred Divya Desam in the celestial realm, praised in Vaishnavite scriptures.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Final Divya Desam completing the 108 sacred Vishnu shrines",
  bestTime: "N/A",
  festivals: "N/A",
  state: "Celestial"
}
      ]
      },
      "Matsya Avatar": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147315/matsya_nr5z9h.png",
        description:
          "The Fish incarnation that saved the world from the great flood",
        temples: [
          {
            id: "ma1",
            name: "Matsya Narayana Temple",
            location: "Bangalore, Karnataka, India",
            description:
              "This modern temple is a significant pilgrimage site dedicated to Lord Matsya, the rare and prominent fish incarnation of Lord Vishnu.\nThe Matsya avatar's purpose was to save the first man, Manu, and the sacred Vedas during the great deluge (Pralaya). The temple features a unique and impressive idol of the Matsya form, along with idols of Vishnu's other nine avatars.\nWorshipping here is believed to bring divine protection and guidance through life's challenging 'floods'.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147319/mat1_gahypy.png",
            significance:
              "A rare and prominent temple dedicated to the Matsya avatar, symbolizing divine protection during the great flood.",
            bestTime: "October to March",
            festivals: "Matsya Jayanti, Vaikuntha Ekadashi",
            state: "Karnataka",
          },
          {
            id: "ma2",
            name: "Matsya Theertham",
            location: "Dhanushkodi, Tamil Nadu, India",
            description:
              "Matsya Theertham is not a formal structure but a highly sacred spot in the holy region of Rameswaram, associated with the Matsya avatar.\nThe Theertham is believed to be the precise location where Lord Matsya first appeared to initiate the cosmic rescue. Taking a holy dip in the sea at this spot is considered highly auspicious by pilgrims.\nIt is believed that a dip here can cleanse one of sins and lead to spiritual purification.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147318/mat2_w3v8ur.png",
            significance:
              "A sacred spot associated with the Matsya avatar, where pilgrims take a holy dip for spiritual purification.",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Theertham festival",
            state: "Tamil Nadu",
          },
        ],
      },
      "Kurma Avatar": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147338/kurmam_clsc26.png",
        description: "The Turtle incarnation that supported Mount Mandara",
        temples: [
          {
            id: "kurma1",
            name: "Kurma Temple",
            location: "Srikakulam, Andhra Pradesh, India",
            description: "This is a unique and ancient temple dedicated to Lord Kurma, the tortoise incarnation of Lord Vishnu.\nThe Kurma avatar is celebrated for its role in the Samudra Manthan (churning of the cosmic ocean), where Vishnu took the form of a gigantic tortoise to support the Mandara mountain when it was used as the churning rod.\nThis temple is one of the very few shrines in the world dedicated specifically to the Kurma avatar. The deity is worshipped in a distinctive tortoise-shaped form, signifying stability and support to the cosmos.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147336/ku1_soe7rq.png",
            significance: "Second avatar temple",
            bestTime: "November to February",
            festivals: "Kurma Jayanti",
            state: "Andhra Pradesh",
          },
        ],
      },
      "Lord Varaha": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147273/varaha_dbildy.png",
        description:
          "The Boar Incarnation, rescued the Earth from the demon Hiranyaksha.",
        temples: [
          {
            id: "va1",
            name: "Sri Varaha Lakshmi Narasimha Swamy Temple",
            location: "Simhachalam, Andhra Pradesh, India",
            description:
              "This unique temple is dedicated to the merged form of Lord Varaha (the boar) and Lord Narasimha (the man-lion), embodying two of Vishnu's most powerful saviour avatars.\nThe legend suggests the deity here took this composite form to save the devotee Prahlada and is worshipped in a unique posture.\nTo mitigate the immense power and heat emanating from the deity, the idol is completely covered in a thick layer of sandalwood paste throughout the year.\nThe original, magnificent form of the deity is revealed for darshan only on one sacred day during the annual Chandanotsavam festival.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147309/nr2_uprkey.png",
            significance:
              "A unique temple where the deity is a combination of Lord Varaha and Lord Narasimha.",
            bestTime: "October to March",
            festivals: "Chandanotsavam, Kalyanam",
            state: "Andhra Pradesh",
          },
          {
            id: "va2",
            name: "Sri Bhu Varaha Swamy Temple",
            location: "Srimushnam, Tamil Nadu, India",
            description:
              "This ancient temple is revered as one of the 108 Divya Desams, marking a place where Lord Varaha is said to have physically manifested.\nThe story originates from the great deluge where the demon Hiranyaksha dragged the Earth (Bhoodevi) into the ocean, and Varaha Swamy plunged into the waters to save her. Having defeated the demon and rescued the Earth, the Lord settled at this spot, near the Vellar River.\nThe temple is known for its exquisite Chola and Vijayanagar architecture and the presiding deity is a beautiful self-manifested idol facing west.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147277/v2_vbnynd.png",
            significance:
              "A Divya Desam where Lord Varaha is said to have manifested to save the Earth.",
            bestTime: "October to March",
            festivals: "Brahmotsavam, Vaikuntha Ekadashi",
            state: "Tamil Nadu",
          },
          {
            id: "va3",
            name: "Sri Adi Varaha Swamy Temple",
            location: "Tirumala, Andhra Pradesh, India",
            description:
              "This is considered the most ancient and primary temple on the sacred Tirumala hills, predating even the famous Venkateswara temple.\nAccording to the regional legend, Lord Vishnu first manifested on the Tirumala hill in his Varaha form, making this his original abode. When Lord Venkateswara arrived on the hill, he asked Varaha Swamy for permission to reside there.\nAs a mark of respect, a tradition dictates that pilgrims must first visit and take the blessings of Sri Adi Varaha Swamy before visiting the main Venkateswara temple.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147282/v3_tpcdhl.png",
            significance:
              "The most ancient temple on the Tirumala hills, believed to be the first abode of Lord Vishnu in the form of Varaha.",
            bestTime: "September to February",
            festivals: "Brahmotsavam, Vaikuntha Ekadashi",
            state: "Andhra Pradesh",
          },
        ],
      },
      "Lord Narasimha": {
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147309/narasimha_zuqnth.png",
        description:
          "The Man-Lion Incarnation, protected his devotee Prahlada and killed the demon Hiranyakashipu.",
        temples: [
          {
            id: "ap1",
            name: "Ahobilam",
            location: "Allagadda, Kurnool District, Andhra Pradesh, India",
            description:
              "Ahobilam is a paramount pilgrimage site, known as one of the Nava Narasimha Kshetras, where it is believed Lord Narasimha manifested to slay the demon Hiranyakashipu.\nThe complex is spread across the Nallamala hills and houses nine separate temples, each dedicated to a different manifestation of the Lord, making it one of the most comprehensive sites of Narasimha worship.\nThis is the only place where all nine forms of the Lord are worshipped in one complex. The entire area is considered deeply sacred for its association with the central event of the avatar's legend.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147307/nr1_jve7ic.png",
            significance:
              "One of the Nava Narasimha Kshetras, it's believed to be the place where Lord Narasimha killed the demon Hiranyakashipu.",
            bestTime: "October to March",
            festivals: "Brahmotsavam, Narasimha Jayanti",
            state: "Andhra Pradesh",
          },
          {
            id: "ap2",
            name: "Simhachalam",
            location: "Visakhapatnam, Andhra Pradesh, India",
            description:
              "This temple is dedicated to a unique combined form: Sri Varaha Lakshmi Narasimha Swamy, also affectionately known as Simhadri Appanna.\nLegend states the deity's original form is fierce and radiant, and to mitigate this intense heat and power, the idol is completely covered in a thick layer of cooling sandalwood paste throughout the year.\nThe original, magnificent idol is revealed to devotees for only one sacred day during the annual Chandanotsavam festival.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147309/nr2_uprkey.png",
            significance:
              "Dedicated to the combined form of Lord Narasimha and Lord Varaha. The deity is also known as Simhadri Appanna.",
            bestTime: "October to March",
            festivals: "Chandanotsavam, Kalyanam",
            state: "Andhra Pradesh",
          },
          {
            id: "ap3",
            name: "Mangalagiri",
            location: "Guntur District, Andhra Pradesh, India",
            description:
              "Mangalagiri is famous for the Panakala Narasimha Swamy temple, where the deity is worshipped in a self-manifested form on a hill.\nThe temple is unique because the main offering is panakam (jaggery water), and the belief is that the deity literally consumes half the offering, with a distinct audible gulping sound.\nMiraculously, the other half is returned to devotees, and the vessel holding the panakam never overflows, confirming the Lord’s physical presence at this site.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147305/nr3_pytla5.png",
            significance:
              "It is believed that the deity here is self-manifested (Swayambhu). Part of the Pancha Narasimha Kshetras.",
            bestTime: "October to March",
            festivals: "Brahmotsavam, Dasara",
            state: "Andhra Pradesh",
          },
          {
            id: "ts1",
            name: "Yadagirigutta (Yadadri)",
            location: "Yadadri Bhuvanagiri District, Telangana, India",
            description:
              "Yadadri is a major hill temple where the sage Yada, the son of Rishyasringa, performed penance to Lord Narasimha.\nLord Narasimha appeared to the sage in five distinct forms—Jwala, Yogananda, Gandabherunda, Ugra, and Lakshmi Narasimha—which are now the focus of worship here.\nThe temple is famed for its unique cave shrine and has recently undergone massive reconstruction, emerging as one of the most significant pilgrimage centers in Telangana.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147305/nr4_elqgdm.png",
            significance:
              "A major pilgrimage site in Telangana, known for its unique cave temple and rich spiritual history.",
            bestTime: "October to March",
            festivals: "Narasimha Jayanti, Brahmotsavam",
            state: "Telangana",
          },
          {
            id: "ts2",
            name: "Dharmapuri",
            location: "Jagtial District, Telangana, India",
            description:
              "Dharmapuri, often called the 'Dakshina Kashi' (Kashi of the South), is a revered ancient pilgrimage site on the banks of the Godavari River.\nIt is known for its twin temples dedicated to Lord Narasimha in two forms: Yoga Narasimha and Ugra Narasimha. The temple also hosts the rare Bhargava Narasimha form, established by the sage Parasurama.\nThis religious center maintains a rich spiritual history associated with Vedic learning and the powerful Narasimha avatar.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147309/nr5_yarqp2.png",
            significance:
              "One of the ancient pilgrimage centers of Telangana, often referred to as 'Dakshina Kashi'.",
            bestTime: "October to March",
            festivals: "Narasimha Jayanti, Kalyanam",
            state: "Telangana",
          },
          {
            id: "ka1",
            name: "Devarayanadurga",
            location: "Tumkur District, Karnataka, India",
            description:
              "Devarayanadurga is a picturesque hill station hosting two major Narasimha temples: the Yoga Narasimha shrine at the hilltop and the Bhoga Narasimha temple at the base.\nThe Yoga Narasimha deity is shown in a meditative posture, symbolizing deep spiritual focus and tranquility. The temples are renowned for their serene surroundings and spiritual ambiance, drawing devotees who seek blessings for peace and meditation.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147306/nr6_mncx2v.png",
            significance:
              "The deity is in the 'Yoga' posture, signifying deep meditation and peace.",
            bestTime: "September to February",
            festivals: "Jatra Mahotsava",
            state: "Karnataka",
          },
          {
            id: "ka2",
            name: "Narasimha Jharni Cave Temple",
            location: "Bidar, Karnataka, India",
            description:
              "This temple offers one of the most unique and challenging pilgrimages in India.\nDevotees must wade through a narrow cave passage filled with waist-deep water for nearly 300 meters to reach the self-manifested idol of Lord Narasimha.\nThe temple is believed to be the spot where Lord Narasimha killed the demon Jalasura, and the flowing water is said to be the purified blood of the demon. It is truly the only known underwater Narasimha temple in the world.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147303/nr7_qae49x.png",
            significance:
              "The only underwater Narasimha temple in the world, believed to be the spot where Lord Narasimha killed the demon Jalasura.",
            bestTime: "October to March",
            festivals: "Jatra Mahotsava",
            state: "Karnataka",
          },
          {
            id: "ka3",
            name: "Saligrama",
            location: "Udupi District, Karnataka, India",
            description:
              "The Guru Narasimha Temple in Saligrama is a well-known pilgrimage center dedicated to Lord Narasimha in his 'Guru' form, symbolizing wisdom and divine instruction.\nThe idol here is believed to have been self-manifested from a saligrama stone, which gives the place its name. Worshipping the Lord in this Guru aspect is believed to bless devotees with knowledge, clear thinking, and spiritual protection.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147302/nr8_z6skcx.png",
            significance:
              "Dedicated to Lord Narasimha in his 'Guru' form, symbolizing wisdom and protection.",
            bestTime: "September to February",
            festivals: "Narasimha Jayanti",
            state: "Karnataka",
          },
          {
            id: "ka4",
            name: "Nuggehalli",
            location: "Hassan District, Karnataka, India",
            description:
              "The Lakshmi Narasimha Swami Temple in Nuggehalli is not just a place of worship but a spectacular example of the intricate Hoysala architecture.\nBuilt by a commander of the Hoysala dynasty in the 13th century, the temple is famed for its detailed, lathe-turned stone pillars and exquisitely carved sculptures.\nThe temple walls depict stories from the Hindu epics, making it a major attraction for those appreciating the sculptural brilliance of the era.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147302/nr9_t6lau3.png",
            significance:
              "A masterpiece of Hoysala art, showcasing the architectural and sculptural brilliance of the era.",
            bestTime: "October to March",
            festivals: "Lakshmi Narasimha Jayanti",
            state: "Karnataka",
          },
          {
            id: "tn1",
            name: "Namakkal",
            location: "Namakkal District, Tamil Nadu, India",
            description:
              "The Narasimhaswamy Temple in Namakkal is an impressive rock-cut cave temple situated at the foot of a small hill, showcasing ancient Dravidian architecture.\nThe presiding deity is a colossal, self-manifested form of Lord Narasimha carved directly into the rock face of the cave.\nThe temple is notable for its historical age and the unique form of the Lord, sitting under a five-headed serpent, making it a prominent pilgrimage site in the state.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147302/nr10_sl4sm6.png",
            significance:
              "The presiding deity is a self-manifested form of Lord Narasimha. The temple is known for its architectural beauty.",
            bestTime: "September to February",
            festivals: "Vaikunta Ekadasi, Narasimha Jayanti",
            state: "Tamil Nadu",
          },
          {
            id: "tn2",
            name: "Sholinghur",
            location: "Vellore District, Tamil Nadu, India",
            description:
              "The Lakshmi Narasimha Swamy Temple is uniquely situated on a small hill, requiring devotees to climb a daunting 1,305 steps to reach the main shrine.\nIt is believed that Lord Narasimha appeared here for a short kadigai (a period of time) to grant darshan to the Sapta Rishis (seven sages) and Lord Hanuman.\nA dip in the temple tank (Thiru Kadigai) is believed to grant immense blessings, as the deity here is known to grant the wishes of sincere devotees almost instantly.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147300/nr11_pkbdd7.png",
            significance:
              "It is believed that a dip in the temple tank (Thiru Kadigai) grants immense blessings. The deity is known to grant wishes of devotees instantly.",
            bestTime: "October to March",
            festivals: "Brahmotsavam, Vaikunta Ekadasi",
            state: "Tamil Nadu",
          },
          {
            id: "rj1",
            name: "Narsinghji Temple",
            location: "Nathdwara, Rajasthan, India",
            description:
              "The Narsinghji Temple in Nathdwara is a revered pilgrimage site and one of the prominent Narasimha temples in North India.\nSituated near the famed Shrinathji temple, it holds significant spiritual sanctity and historical importance within the region.\nThe temple offers a peaceful and deeply devotional ambiance, attracting devotees who seek protection and strength from the fierce but benevolent Narasimha avatar.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147300/nr12_uqivrc.png",
            significance:
              "A prominent Narasimha temple in North India, known for its spiritual sanctity and historical importance.",
            bestTime: "October to March",
            festivals: "Holi, Janmashtami",
            state: "Rajasthan",
          },
          {
            id: "kl1",
            name: "Lakshmi Narasimha Temple",
            location: "Thalassery, Kerala, India",
            description:
              "Located in the coastal town of Thalassery, this temple is an important center for the Goud Saraswat Brahmin community in Kerala.\nThe temple is dedicated to Lord Lakshmi Narasimha, representing the Lord in his calmer, gentler form with his consort Lakshmi.\nThe main idol of Lord Narasimha is believed to have been consecrated by the respected Dvaita saint, Sudhindra Tirtha, adding immense spiritual weight to the shrine.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147299/nr13_kgcnar.png",
            significance:
              "The temple houses an idol of Lord Narasimha, which is believed to be consecrated by the saint Sudhindra Tirtha.",
            bestTime: "September to March",
            festivals: "Narasimha Jayanti, Deepavali",
            state: "Kerala",
          },
        ],
      },
      "Lord Vamana": {
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147283/vamana_bfz0nq.png",
        description:
          "The Dwarf Incarnation, tricked the demon king Mahabali to restore the rule of the gods.",
        temples: [
          {
            id: "vt1",
            name: "Vamana Temple",
            location: "Khajuraho, Madhya Pradesh, India",
            description:
              "Located in the Eastern Group of Monuments at the UNESCO World Heritage Site of Khajuraho, this temple is dedicated to Vamana, the dwarf Brahmin incarnation of Lord Vishnu.\nThe temple stands on a high plinth and is renowned for its exceptional, intricate carvings of celestial beings and deities on its exterior walls.\nNotably, the sanctum features a unique architectural element that uses an optical illusion, possibly to symbolize the primordial waters associated with the Vamana legend.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147274/va1_d8vrb9.png",
            significance:
              "Dedicated to Vamana, the dwarf incarnation of Lord Vishnu; known for its intricate carvings and unique architectural elements.",
            bestTime: "October to March",
            festivals: "Khajuraho Dance Festival, Janmashtami",
            state: "Madhya Pradesh",
          },
          {
            id: "vt2",
            name: "Thrikkakara Vamanamoorthy Temple",
            location: "Thrikkakara, Kochi, Kerala, India",
            description:
              "This ancient temple is considered the central shrine related to the legend of King Mahabali and Lord Vamana, and it is revered as one of the 108 Divya Desams.\nThe site is believed to be the exact location where Lord Vamana placed his third foot on King Mahabali's head, sending him to the netherworld after the King granted him three paces of land.\nDue to this association, the temple plays a central and critical role in the annual celebration of the Onam festival in Kerala.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147282/va2_cswiwg.png",
            significance:
              "One of the 108 Divya Desams, highly revered for its antiquity and spiritual importance, and central to the Onam festival.",
            bestTime: "September to March",
            festivals: "Onam, Vamana Jayanti",
            state: "Kerala",
          },
          {
            id: "vt3",
            name: "Sri Ulagalandar Temple",
            location: "Kanchipuram, Tamil Nadu, India",
            description:
              "This temple is a revered Sri Vaishnava Divya Desam dedicated to Lord Vamana, who is worshipped here as Ulagalnatha Perumal (The Lord who measured the world).\nThe main sanctum houses an impressive and imposing black stone idol of the Lord in his gigantic, cosmic form (Trivikrama), with one foot raised to measure the universe.\nThe temple commemorates the Lord's feat of covering the Earth and the heavens in two strides, asking Mahabali for the third space on his head.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147283/va3_os4lyq.png",
            significance:
              "A Divya Desam dedicated to Lord Vamana (Ulagalnatha Perumal); known for its imposing black stone idol.",
            bestTime: "October to March",
            festivals: "Brahmotsavam, Vaikunta Ekadasi",
            state: "Tamil Nadu",
          },
        ],
      },
      "Lord Parshuram": {
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147298/parshurama_jrryj4.png",
        description:
          "The Warrior Sage Incarnation, annihilated the corrupt Kshatriyas 21 times.",
        temples: [
          {
            id: "pt1",
            name: "Parshuram Temple",
            location: "Chiplun, Maharashtra, India",
            description:
              "This is one of the most famous temples dedicated to the warrior sage Lord Parshuram, the sixth incarnation of Vishnu, who is believed to eternally reside here on the banks of the Vashishti River.\nLegend holds that after conquering the world and gifting the land to Brahmins, Parshuram used his axe to push the sea back from the Western Ghats to create the Konkan region.\nThe main sanctum is unique as it houses idols of three forms: Kal (time), Kam (desire), and Parshuram himself, making it a powerful spiritual center in Maharashtra.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147297/pa1_pxvhiv.png",
            significance:
              "An ancient temple believed to be a site where Lord Parshuram resides, known for its intricate carvings and unique idols.",
            bestTime: "October to March",
            festivals: "Parshuram Jayanti, Mahashivratri",
            state: "Maharashtra",
          },
          {
            id: "pt2",
            name: "Parashurama Swamy Temple",
            location: "Thiruvallam, Thiruvananthapuram, Kerala, India",
            description:
              "This ancient temple is considered one of the holiest sites associated with Lord Parshuram, who is revered in Kerala as the legendary creator of the region itself.\nThe temple's most significant tradition is the performance of the sacred 'Bali' ritual, or Bali Tharpanam, a highly crucial spiritual ritual to honor and seek blessings for departed ancestors.\nIts location at the confluence of rivers and its focus on ancestral rites make it a vital spiritual destination for devotees in Kerala, especially during the Karkidaka Vavu festival.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147302/pa2_pkldr5.png",
            significance:
              "A significant pilgrimage site for performing the sacred 'Bali' ritual to honor departed ancestors.",
            bestTime: "September to March",
            festivals: "Karkidaka Vavu Bali, Bali Tharpanam",
            state: "Kerala",
          },
          {
            id: "pt3",
            name: "Parshuram Kund Mandir",
            location: "Lohit District, Arunachal Pradesh, India",
            description:
              "This site is revered for its sacred pond, or 'Kund', located along the wild Lohit River, where the legend states that Lord Parshuram purified himself of the sin of matricide.\nWhen Parshuram killed his mother on his father's command, his axe stuck to his hand, only detaching when he dipped his hands in this Kund.\nThousands of devotees gather here, especially during Makar Sankranti, to take a holy dip in the frigid waters, believing it washes away all sins.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147296/pa3_hvog63.png",
            significance:
              "Well-known for its sacred pond, where pilgrims take a holy dip to wash away sins, located along the Lohit River.",
            bestTime: "October to February",
            festivals: "Makar Sankranti Mela, Parshuram Jayanti",
            state: "Arunachal Pradesh",
          },
          {
            id: "pt4",
            name: "Janapav Kuti",
            location: "Mhow, Indore District, Madhya Pradesh, India",
            description:
              "Janapav Kuti is deeply revered as the birthplace of Lord Parshuram, situated on a scenic hill that is also believed to have been the hermitage of his legendary father, the sage Jamadagni.\nThe hill is distinguished by numerous perennial streams that flow down from the peak, which are believed to be the source of several major rivers in the region.\nThis important pilgrimage site draws crowds seeking blessings and is noted for its beautiful natural setting and spiritual sanctity.",
            image:
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147295/pa4_rtuzow.png",
            significance:
              "Considered the birthplace of Lord Parshuram, located on a scenic hill known for its natural beauty and spiritual importance.",
            bestTime: "October to March",
            festivals: "Parshuram Jayanti, Maha Shivratri",
            state: "Madhya Pradesh",
          },
          {
            id: "pt5",
            name: "Parshuram Mahadev Cave Temple",
            location: "Aravalli Range, Pali District, Rajasthan, India",
            description:
              "This temple is remarkably located deep within a cave in the Aravalli range, where the unique legend holds that Lord Parshuram himself carved the cave into the rock face using his divine axe.\nThe journey to the temple involves a challenging trek through the hilly terrain, adding to the spiritual significance of the visit. The site features a natural Shiva Lingam formed by a rock fissure, creating a natural confluence of the Parshuram and Shiva legends.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147296/pa5_tetrwp.png",
            significance:
              "A unique cave temple located in the Aravalli range, believed to have been carved out by Lord Parshuram with his axe.",
            bestTime: "September to March",
            festivals: "Sawan (Shravan) Mela, Parshuram Jayanti",
            state: "Rajasthan",
          },
        ],
      },
      "Lord Sri Rama": {
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147283/rama_jb7c67.png",
        description:
          "The King of Ayodhya, a perfect human being and warrior, who vanquished the demon king Ravana.",
        temples: [
          {
            id: "rt1",
            name: "Ram Mandir",
            location: "Ayodhya, Uttar Pradesh, India",
            description:
              "The Ram Mandir is built at the revered site of Ram Janmabhoomi, the believed birthplace of Lord Rama, making it the most sacred pilgrimage site for Hindus worldwide.\nThe site is a location of immense historical and spiritual significance, symbolizing the core of the Ramayana epic. After centuries of reverence and conflict, the newly constructed temple stands as a monumental center of faith.\nThe inauguration of the temple marks a profound and joyous milestone for devotees, affirming Ayodhya's status as the spiritual capital of the Lord's kingdom.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147289/ram1_ghx3m6.png",
            significance:
              "The revered birthplace of Lord Rama and a central pilgrimage site for Hindus.",
            bestTime: "October to March",
            festivals: "Ram Navami, Diwali",
            state: "Uttar Pradesh",
          },
          {
            id: "rt2",
            name: "Kanak Bhavan",
            location: "Ayodhya, Uttar Pradesh, India",
            description:
              "Kanak Bhavan, meaning 'House of Gold', is a beautiful temple complex believed to be the private palace of Goddess Sita, gifted to her by Rama's stepmother, Kaikeyi, immediately following the divine couple's marriage.\nThe current structure was renovated by the Queen of Tikamgarh and is famous for its three sets of exquisite golden-crowned idols of Lord Rama and Goddess Sita.\nThe temple is a place of deep devotion, commemorating the joyous early life of the royal couple in Ayodhya.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147290/ram2_aroqcu.png",
            significance:
              "Believed to be the private palace of Sita, adorned with beautiful idols on a golden throne.",
            bestTime: "October to March",
            festivals: "Ram Navami, Diwali",
            state: "Uttar Pradesh",
          },
          {
            id: "rt3",
            name: "Shri Ram Tirth Temple",
            location: "Amritsar, Punjab, India",
            description:
              "According to ancient tradition, this revered site is the ashram of the great sage Valmiki, the author of the original Ramayana.\nIt is here that Goddess Sita found shelter after being abandoned by Lord Rama and where she gave birth to their twin sons, Lava and Kusha.\nThe twins grew up in the hermitage and later famously challenged Lord Rama's army without knowing his true identity. The temple includes a well believed to have been dug by Lord Hanuman.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147287/ram3_juavyj.png",
            significance:
              "Said to be the ashram of sage Valmiki and the birthplace of Lava and Kusha.",
            bestTime: "October to March",
            festivals: "Ram Navami, Diwali",
            state: "Punjab",
          },
          {
            id: "rt4",
            name: "Raghunath Temple",
            location: "Jammu, Jammu and Kashmir, India",
            description:
              "The Raghunath Temple is not a single shrine but a vast complex of seven temples built by the Dogra rulers, with the central and main shrine dedicated to Lord Rama (Raghunath).\nThe temple complex is renowned for its intricate carvings and its stunning display of gold plating on its interiors.\nFurthermore, the temple is known for housing a massive and rich collection of ancient Sanskrit manuscripts, solidifying its prominence as a major historical and pilgrimage center in North India.",
            image:  
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147287/ram4_yuue2y.png",  
            significance:
              "A significant temple complex dedicated to Lord Rama, renowned for its intricate architecture and historical value.",
            bestTime: "March to October",
            festivals: "Ram Navami, Janmashtami",
          },
          {
            id: "rt5",
            name: "Kalaram Mandir",
            location: "Nashik, Maharashtra, India",
            description:
              "This temple is situated in the Panchavati area of Nashik, a region deeply significant as the part of the Dandakaranya forest where Lord Rama, Sita, and Lakshmana are believed to have lived during a large portion of their fourteen-year exile.\nThe temple is famously known for its unique idol of Lord Rama carved from a black stone (hence the name Kalaram). The sanctity of the location draws pilgrims who wish to walk the very ground where the divine trio spent their time in the forest.",
            image: 
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147286/ram5_ptuj21.png",
              significance:
              "Located in Panchavati, a part of the Dandakaranya forest; features a unique black idol of Lord Rama.",
            bestTime: "October to March",
            festivals: "Ram Navami, Rath Yatra",
          },
          {
            id: "rt6",
            name: "Ram Raja Temple",
            location: "Orchha, Madhya Pradesh, India",
            description:
              "The Ram Raja Temple is unique in that Lord Rama is not worshipped merely as a deity, but as the ruling king of Orchha.\nLegend holds that the Goddess Lakshmi, in a dream, convinced the local queen that Rama would permanently reside in the palace, which was then consecrated as the temple.\nThe deity is given a daily royal salute by the state police as a guard of honor, signifying the Lord's continuing sovereign status over the town.",
            image: 
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147289/ram6_bd7njv.png",
              significance:
              "Unique for worshipping Lord Rama as a king, complete with daily rituals and a police guard of honor.",
            bestTime: "October to March",
            festivals: "Ram Navami, Deepawali",
          },
          {
            id: "rt7",
            name: "Sita Ramachandraswamy Temple",
            location: "Bhadrachalam, Telangana, India",
            description:
              "Situated majestically on the banks of the mighty Godavari River, this temple is a prominent pilgrimage site in South India, affectionately known as 'Dakshina Ayodhya' (Southern Ayodhya).\nt is believed that Lord Rama, Sita, and Lakshmana stayed in the surrounding area during their exile. The temple's construction is attributed to the 17th-century devotee Kancherla Gopanna,\nknown as Bhakta Ramadasu, making it a place revered both for its connection to the epic and its history of intense devotion.",
            image: 
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147289/ram7_z0hxyt.png",
              significance:
              "A prominent temple on the banks of the Godavari River, considered a significant site where Lord Rama stayed during his exile.",
            bestTime: "October to March",
            festivals: "Vaikuntha Ekadashi, Sitarama Kalyanam",
          },
          {
            id: "rt8",
            name: "Kodanda Ramaswami Temple",
            location: "Chikmagalur, Karnataka, India",
            description:
              "This historical temple is beautifully situated on the banks of the Tungabhadra River and is an ancient site associated with the travels of Lord Rama.\nThe temple is known for its serene setting and its striking idols of Lord Rama, Sita, and Lakshmana.\nThe unique feature is that the figures are depicted standing straight, with Lakshmana often placed close to Rama, symbolizing their journey through the forests.",
            image: 
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147285/ram8_xtnr7s.png",
              significance:
              "A historical temple situated on the banks of the Tungabhadra River, known for its beautiful idols of Rama, Sita, and Lakshmana.",
            bestTime: "October to March",
            festivals: "Ram Navami, Brahmotsavam",
          },
          {
            id: "rt9",
            name: "Ramaswamy Temple",
            location: "Kumbakonam, Tamil Nadu, India",
            description:
              "Built during the reign of the Thanjavur Nayak kings, the Ramaswamy Temple is renowned as an architectural jewel.\nIts main distinction lies in the magnificent and intricate sculptures carved throughout the temple's mandapam (hall). These carvings narrate the entire Ramayana epic in sequential order, making the temple a visual textbook of the classic Hindu story.\nThe temple provides a unique experience of walking through the visual history of Lord Rama's life.",
            image: 
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147286/ram9_z5z3dm.png",
              significance:
              "Famous for its stunning sculptures and intricate carvings that narrate the entire Ramayana epic.",
            bestTime: "October to March",
            festivals: "Brahmotsavam, Ram Navami",
          },
          {
            id: "rt10",
            name: "Kothandaramaswamy Temple",
            location: "Rameswaram, Tamil Nadu, India",
            description:
              "This historically significant temple is located at Dhanushkodi, near Rameswaram, situated close to the sea where the mythical Rama Setu bridge to Lanka is believed to have begun.\nLegend holds that Lord Rama worshipped his bow (Kothanda) here before embarking on his campaign to Lanka to rescue Sita.\nThe site is also believed to be the spot where Rama crowned Vibhishana, Ravana's brother, as the new King of Lanka, making it a location tied to both the beginning and the end of the war.",
            image: 
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147313/ram10_mewfnd.png",
              significance:
              "A historically important temple in Rameswaram, believed to be the place where Lord Rama prayed to his bow before the war with Ravana.",
            bestTime: "October to March",
            festivals: "Ram Navami, Maha Shivratri",
          },
          {
            id: "rt11",
            name: "Kodandarama Temple",
            location: "Vontimitta, Andhra Pradesh, India",
            description:
              "This grand temple is a masterpiece of classic Vijayanagar architecture and is currently recognized as a UNESCO World Heritage site.\nLocal legend asserts that the idols of Lord Rama, Sita, and Lakshmana were installed not by human hands, but by Lord Rama himself before he returned to Ayodhya.\nThe temple's majestic architecture and historical integrity make it a cultural landmark, and it holds the distinction of hosting the official state celebration of Sitarama Kalyanam (Rama's wedding).",
            image: 
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147283/ram11_di63qz.png",
              significance:
              "Known for its classic Vijayanagar architecture and idols believed to have been installed by Lord Rama himself.",
            bestTime: "October to March",
            festivals: "Sitarama Kalyanam, Brahmotsavam",
          },
        ],
      },

      "Lord Krishna": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147334/krishna_cwqrsj.png",
        description:
          "The complete incarnation of Lord Vishnu, a divine statesman and philosopher who delivered the Bhagavad Gita.",
        temples: [
          {
            id: "kr1",
            name: "Shri Krishna Janmabhoomi Temple",
            location: "Mathura, Uttar Pradesh, India",
            description:
              "This profoundly sacred site is revered as the exact birthplace of Lord Krishna, situated in the ancient city of Mathura.\nThe temple complex is built around the sacred prison cell, or Garbha Griha, where Krishna was famously born to Devaki and Vasudeva. The current magnificent structure stands as a symbol of immense devotion, overcoming centuries of destruction and reconstruction.\nDevotees visit here to seek the blessings of the Lord born in divine darkness to bring light to the world.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147341/k1_wmomoz.png",
            significance: "Exact birthplace of Lord Krishna",
            bestTime: "October to March",
            festivals: "Janmashtami, Holi",
            state: "Uttar Pradesh",
          },
          {
            id: "kr2",
            name: "Banke Bihari Temple",
            location: "Vrindavan, Uttar Pradesh, India",
            description:
              "Banke Bihari Temple is one of Vrindavan's most famous and beloved shrines, housing the captivating image of Lord Krishna that was discovered by the saint Swami Haridas.\nThe deity, known as Banke Bihari (the Supreme Enjoyer), is famous for its playful nature, which is why the temple curtains are frequently opened and closed to prevent devotees from being overpowered by the Lord's intense beauty.\nThe temple remains a powerful center of pure, sweet devotion (Madhurya Bhava).",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147341/k2_buzu9x.png",
            significance: "Childhood Krishna temple with unique darshan style",
            bestTime: "October to March",
            festivals: "Janmashtami, Holi, Radhashtami",
            state: "Uttar Pradesh",
          },
          {
            id: "kr3",
            name: "Prem Mandir",
            location: "Vrindavan, Uttar Pradesh, India",
            description:
              "Prem Mandir, literally meaning 'Temple of Divine Love', is a spectacular modern marble complex dedicated to Radha and Krishna (Radha Krishna) and Sita Ram (Sita Ram).\nCommissioned by Jagadguru Kripalu Parishat, the temple is renowned for its intricate marble carvings that depict various episodes from Lord Krishna’s life, especially his loving pastimes in Vrindavan.\nThe temple is especially famous for its magnificent illumination at night, which draws visitors from around the world to witness its architectural splendor.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147342/k3_a1bwzf.png",
            significance: "Modern temple with intricate Radha-Krishna carvings",
            bestTime: "October to March",
            festivals: "Janmashtami, Radhashtami",
            state: "Uttar Pradesh",
          },
          {
            id: "kr4",
            name: "Jugal Kishore Temple",
            location: "Vrindavan, Uttar Pradesh, India",
            description:
              "The Jugal Kishore Temple is one of the oldest surviving temples in Vrindavan, dedicated to the divine couple, Radha and Krishna.\nIt is built majestically from red sandstone and is an architectural marvel from the early Mughal period, showcasing classic Hindu temple design.\nThe temple is believed to have been established at a spot associated with Krishna's boyhood and is known for its peaceful, serene atmosphere, providing a deep sense of historical connection to the Lord's leelas (playful acts).",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147339/k4_kg0mjm.png",
            significance: "Ancient red sandstone temple dedicated to Krishna",
            bestTime: "October to March",
            festivals: "Janmashtami, Holi",
            state: "Uttar Pradesh",
          },
          {
            id: "kr5",
            name: "Govind Dev Ji Temple",
            location: "Jaipur, Rajasthan, India",
            description:
              "This revered Vaishnavite temple is situated within the expansive City Palace complex and is dedicated to Govind Dev Ji, a manifestation of Lord Krishna.\nThe original beautiful idol of Govind Dev Ji was brought from Vrindavan to Jaipur by the Rajput King Sawai Jai Singh II to protect it from destruction.\nThe temple is famous for its unique structure, which allows an unobstructed view of the deity from the royal residence above, and for its elaborate, strict adherence to the traditional sevā (worship) rituals.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147340/k5_ilupoz.png",
            significance: "Major Vaishnavite temple in Jaipur City Palace",
            bestTime: "October to March",
            festivals: "Janmashtami, Holi",
            state: "Rajasthan",
          },
          {
            id: "kr6",
            name: "Shreenathji Temple",
            location: "Nathdwara, Rajasthan, India",
            description:
              "Shreenathji Temple is a major shrine dedicated to Shrinathji, a seven-year-old child manifestation of Lord Krishna, who is particularly revered by followers of the Pushtimarg sect.\nThe deity's self-manifested form was originally transported from Vrindavan and established here to protect it from destruction, making Nathdwara a powerful refuge of faith.\nThe temple is globally famous for its elaborate daily rituals, known as Ashta-yama sevā, and the magnificent, vibrant changes of the deity's elaborate attire.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147337/k6_retoxr.png",
            significance:
              "Famous Shrinathji temple with elaborate daily rituals",
            bestTime: "October to March",
            festivals: "Janmashtami, Annakut",
            state: "Rajasthan",
          },
          {
            id: "kr7",
            name: "Udupi Sri Krishna Matha",
            location: "Udupi, Karnataka, India",
            description:
              "This ancient matha (monastery) was famously founded by the great Dvaita philosopher, Saint Madhvacharya, in the 13th century.\nThe temple's unique feature is that Lord Krishna is worshipped through a tiny, nine-holed window called the Navagraha Kindi. The temple is also renowned for its Paryaya system,\na cyclical transfer of temple management duties among the heads of the eight surrounding mathas every two years, maintaining a unique tradition of rigorous worship.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147347/k7_eibwi7.png",
            significance:
              "Central Krishna temple in Udupi tradition with Paryaya system",
            bestTime: "October to March",
            festivals: "Janmashtami, Ratha Yatra",
            state: "Karnataka",
          },
          {
            id: "kr8",
            name: "Ambalapuzha Sree Krishna Swamy Temple",
            location: "Ambalapuzha, Kerala, India",
            description:
              "This renowned temple, dedicated to Lord Krishna in his Parthasarathy (charioteer) form, is famous across Kerala for its sweet and delicious rice pudding, or Palpayasam.\nLegend states that the Lord himself appeared before a great devotee and offered a small amount of the dish, giving it divine significance.\nThe temple features beautiful and distinctive Kerala architectural style and remains a powerful center of local tradition, art, and devotion, especially during the festival season.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147336/k8_t5jgfs.png",
            significance:
              "Famous Kerala Krishna temple, known for Palpayasam prasadam",
            bestTime: "October to March",
            festivals: "Janmashtami, Zamorin's Guruvayur",
            state: "Kerala",
          },
          {
            id: "jtp",
            name: "Jagannath Temple",
            location: "Puri, Odisha, India",
            description:
              "This magnificent temple is famous worldwide for its annual Rath Yatra festival, where the unique wooden deities of Lord Jagannath (Krishna), his elder brother Balabhadra, and his sister Subhadra are pulled on massive chariots.\nThe deities are unique because they are incomplete and are made of wood, requiring them to be ritually replaced every 12 to 19 years in a sacred ceremony called Nabakalebara.\nThe temple is one of the four Char Dham pilgrimage sites, known for its huge communal kitchen, or Ananda Bazar.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147344/k9_vxorij.png",
            significance:
              "Famous for the grand Rath Yatra festival and unique wooden deities",
            bestTime: "October to February",
            festivals: "Rath Yatra, Snana Yatra",
            state: "Odisha",
          },
          {
            id: "cd3",
            name: "Dwarkadhish Temple",
            location: "Dwarka, Gujarat, India",
            description:
              "The Dwarkadhish Temple is a magnificent and ancient structure dedicated to Lord Krishna in his role as the King of Dwarka (Dwarkadhish), the city he founded.\nThis temple is one of the four sacred Char Dham pilgrimage sites, holding immense spiritual significance for all Hindus.\nThe temple's five-story architecture, supported by 72 pillars, showcases intricate carvings, and the main deity is adored with precious ornaments, symbolizing Krishna's royal status.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147335/k10_w3xtel.png",
            significance: "One of the four sacred Char Dham pilgrimage sites",
            bestTime: "October to March",
            festivals: "Janmashtami, Holi",
            state: "Gujarat",
          },
          {
    id: "kr9",
    name: "Guruvayur Sree Krishna Temple",
    location: "Guruvayur, Thrissur, Kerala, India",
    description:
      "The deity's idol, representing the full form of Lord Vishnu, was originally worshipped by Lord Brahma and later passed to Lord Shiva and his wife, Parvati.\nWhen the city of Dwarka was about to be submerged, Lord Krishna asked his disciple Uddhava to rescue the idol.\nUddhava, along with the divine sage Brihaspati (Guru) and the wind-god Vayu, sailed to the current spot in Kerala.\nLord Shiva appeared and directed them to install the idol here, on the serene bank of a lake.\nSince the installation was done by Guru and Vayu, the place came to be known as Guruvayoor.\nThe idol is believed to possess immense sanctity and is considered one of the most sacred representations of Vishnu in India.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760707517/guru_tivcfs.jpg",
    significance: "Explains the origin and naming of the temple ('Guru' + 'Vayu' = Guruvayoor).",
    bestTime: "October to March",
    festivals: "Guruvayur Ekadasi, Utsavam",
    state: "Kerala",
}
        ],
      },
    },
  },
  "Lord Shiva": {
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147279/shiva_h9u69h.png", 
  temples: {
    "Jyotirlingas": {
      image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147342/jyotirlingas_dpmmxs.png", // Fixed Jyotirlinga image
      description: "The 12 sacred self-manifested shrines of Lord Shiva across India",
      temples: [
          {
            id: "jl1",
            name: "Somnath Jyotirlinga",
            location: "Somnath, Gujarat, India",
            description:
              "Lord of the Moon (Soma = Moon, Nath = Lord)\nThe Moon God, Chandra (Soma), was cursed by his father-in-law, Daksha Prajapati, to lose his radiance due to showing favoritism to one of his wives (Rohini).\nTo be relieved of the curse, Soma performed severe penance and prayed to Lord Shiva at this spot. Pleased by his devotion, Shiva appeared and lifted the curse\nallowing the Moon to wax and wane (Shukla and Krishna Paksha), thus earning Shiva the name Somnath (Protector of the Moon).",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147388/j1_t07hmo.png",
            significance: "First of the 12 sacred Jyotirlingas",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Gujarat",
          },
          {
            id: "jl2",
            name: "Mahakaleshwar Jyotirlinga",
            location: "Ujjain, Madhya Pradesh, India",
            description:
            "A pious King Chandrasena of Ujjain, a great devotee of Lord Shiva, was once threatened by a demon named Dushanan. A young boy named Shrikhar and the king's other subjects prayed fervently to Lord Shiva to protect their city.\nAnswering their devotion, Lord Shiva manifested from the ground in the form of the Mahakaleshwar Jyotirlinga, vanquishing the demon and agreeing to reside there eternally to protect his devotees.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147386/j2_mh6gnn.png",
            significance: "Famous for unique Bhasma Aarti ritual",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Sawan Month",
            state: "Madhya Pradesh",
          },
          {
            id: "jl3",
            name: "Kashi Vishwanath Temple",
            location: "Varanasi, Uttar Pradesh, India",
            description:
              "Kashi is believed to be the location where the original pillar of light (Jyotirlinga) first pierced the earth after the argument between Brahma and Vishnu over supremacy.\n Lord Shiva made Kashi his eternal residence, declaring that the city would remain on his trident even during the dissolution of the universe.\n It is believed that dying in Kashi and having the darshan of the Vishwanath Linga grants Moksha (liberation).",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147393/j3_wdzn7b.png",
            significance:
              "Considered the holiest spot on Earth for Shiva devotees. The temple is on the western bank of the sacred Ganga river.",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Sawan Somvar",
            state: "Uttar Pradesh",
          },
          {
            id: "jl4",
            name: "Kedarnath Jyotirlinga",
            location: "Kedarnath, Uttarakhand, India",
            description:
              "After the Kurukshetra War, the Pandavas sought Lord Shiva's blessings for atonement for killing their kith and kin.\nShiva, however, wished to avoid them and took the form of a bull at Guptakashi. When the Pandavas pursued him, Shiva dived into the ground, leaving his hump at Kedarnath.\nThe remaining body parts appeared at four other places, completing the Panch Kedar circuit.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147383/j4_acpcuh.png",
            significance:
              "Highest Jyotirlinga, pilgrimage requires mountain trek",
            bestTime: "May to October",
            festivals: "Maha Shivratri, Kedarnath Yatra",
            state: "Uttarakhand",
          },
          {
            id: "jl5",
            name: "Omkareshwar Jyotirlinga",
            location: "Khandwa, Madhya Pradesh, India",
            description:
              "According to one legend, the Vindhya mountain range deity prayed to Shiva to become greater than Mount Meru. Shiva was pleased and manifested as a Jyotirlinga.\nAt the request of the gods and sages, Shiva split the lingam into two parts: Omkareshwar (on the island) and Mamleshwar or Amareshwar (on the mainland) and granted the boon to Vindhya, with the condition that it would not cause trouble to devotees.\nAnother story relates to King Mandhata's penance, after whom the island is named.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147383/j5_qsf3jk.png",
            significance: "Island shaped like 'Om', eternal presence of Shiva",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Madhya Pradesh",
          },
          {
            id: "jl6",
            name: "Mallikarjuna Jyotirlinga",
            location: "Srisailam, Andhra Pradesh, India",
            description:
              "After a contest set by their parents (Shiva and Parvati) to determine who would marry first, Lord Kartikeya became upset when his brother Ganesha was declared the winner. Kartikeya left home and went to reside on Mount Krauncha.\nShiva and Parvati followed him to Srisailam to console him. Shiva manifested as the Jyotirlinga (Mallikarjuna) and Parvati as Goddess Bhramaramba (a Shakti Peetha) at this spot to permanently reside close to their son.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147381/j6_d6av4p.png",
            significance: "Both Jyotirlinga and Shakti Peetha",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Karthika Masam",
            state: "Andhra Pradesh",
          },
          {
            id: "jl7",
            name: "Trimbakeshwar Jyotirlinga",
            location: "Nashik, Maharashtra, India",
            description:
              "The sage Gautam Rishi and his wife Ahilya resided here. To remove a sin (Gautam Rishi accidentally killed a cow - which was actually a friend of Parvati in disguise), the Rishi performed severe penance to Lord Shiva.\nPleased, Shiva brought the River Ganga down from his locks, which became the Godavari river. On the request of the gods and the sage, Shiva agreed to reside there in the form of the Trimbakeshwar Jyotirlinga.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147383/j7_vjnmh2.png",
            significance: "Three-faced lingam symbolizing the Trinity: Brahma, Vishnu, and Mahesh (Shiva)",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kumbh Mela (every 12 years)",
            state: "Maharashtra",
          },
          {
            id: "jl8",
            name: "Bhimashankar Jyotirlinga",
            location: "Pune, Maharashtra, India",
            description:
              "A powerful demon named Bhima, the son of Kumbhakarna (Ravana's brother), terrorized the world, believing his immense strength was unstoppable. He even imprisoned King Kamrupeshwar, a great devotee of Shiva.\nWhen Bhima attempted to destroy the Shivalinga being worshipped by the king, Lord Shiva manifested in a fierce form and reduced the demon to ashes.\nThe gods requested Shiva to reside there permanently, and he did so as the Bhimashankar Jyotirlinga.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147389/j8_tlunvv.png",
            significance:
              "It is the source of the Bhima River, which flows into the Krishna River. The area is a dense forest and a wildlife sanctuary.",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Maharashtra",
          },
          {
            id: "jl9",
            name: "Vaidyanath Jyotirlinga",
            location: "Deoghar, Jharkhand, India",
            description:
              "The mighty demon king Ravana, an ardent devotee of Shiva, performed intense penance to bring Shiva to Lanka. Shiva, pleased, gave him one of the heavenly lingas with the condition that he must not place it on the ground until he reached Lanka.\nOn his way, Ravana felt the need to relieve himself. Lord Vishnu, disguised as a cowherd boy, temporarily held the linga. As soon as Ravana handed it over, the boy placed it on the ground.\nRavana tried his best to lift it but could not, and it was permanently established there. Shiva, later, is said to have appeared as a healer (Vaidya) to tend to Ravana's severe injuries from the effort, hence the name Vaidyanath.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147379/j9_bc7wk9.png",
            significance: "Healing powers, linked to Ravana's devotion,\nalso considered a Shakti Peetha, believed to be where the heart of Goddess Sati fell.",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Shravan Mela",
            state: "Jharkhand",
          },
          {
            id: "jl10",
            name: "Nageshwar Jyotirlinga",
            location: "Dwarka, Gujarat, India",
            description:
              "A demon named Daruka and his wife Daruki captured a Shiva devotee named Supriya and many others in their underwater city, Darukavana.\nSupriya encouraged the prisoners to chant the 'Om Namah Shivaya' mantra. Hearing the intense devotion, Lord Shiva appeared and defeated the demon.\nThe gods requested Shiva to reside there, and he did so as the Nageshwar Jyotirlinga.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147383/j10_yoahaq.png",
            significance: "Associated with the slaying of demon Daruka",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Gujarat",
          },
          {
            id: "jl11",
            name: "Rameshwaram Jyotirlinga",
            location: "Rameswaram, Tamil Nadu, India",
            description:
              "After defeating the demon king Ravana (a Brahmin), Lord Rama sought to absolve himself of the sin of Brahmahatya (killing a Brahmin) by worshipping Lord Shiva. He instructed Hanuman to bring the Lingam from Mount Kailash.\nAs Hanuman was delayed, Sita Devi crafted a Shiva Lingam from the sand, and the worship was performed on an auspicious time. When Hanuman returned with the original Lingam,\nRama installed that one too (Viswanathar) and decreed that all devotees must first worship the one brought by Hanuman (Viswanathar) before worshipping the one made by Sita (Ramalingam).",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147382/j11_r9mfpz.png",
            significance:
              "Associated with Lord Rama and Ramayana, Char Dham site",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Ramalinga Pratishtha Utsav",
            state: "Tamil Nadu",
          },
          {
            id: "jl12",
            name: "Grishneshwar Jyotirlinga",
            location: "Aurangabad, Maharashtra, India",
            description:
              "A devout woman named Ghushma (or Grishma), who was the second wife of a Brahmin named Sudharma, used to worship Lord Shiva by making 101 Shiva Lingams out of clay, worshipping them, and immersing them in a local lake.\n Her son was tragically killed by Sudharma's jealous first wife, Sudeha. Yet, Ghushma maintained her faith and continued her daily ritual. Lord Shiva was so pleased with her unwavering devotion that he resurrected her son.\nWhen Shiva offered her a boon, Ghushma requested him to reside there eternally for the welfare of mankind. Shiva agreed and manifested as the Ghushmeshwar or Grishneshwar Jyotirlinga.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147378/j12_ltjdhq.png",
            significance: "Last of the 12 Jyotirlingas, near Ellora caves",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Shravan Month",
            state: "Maharashtra",
          },
        ],
      },
      "Pancha Bhoota Sthalams": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147292/pb_ng5jll.png",
        description: "Five temples representing the five elements of nature",
        temples: [
          {
            id: "pe1",
            name: "Ekambareswarar Temple",
            location: "Kanchipuram, Tamil Nadu, India",
            description:
              "Goddess Parvati, performing penance, molded a Shiva Lingam from the sand (Prithvi) at Kanchipuram. To test her, Lord Shiva sent a massive flood from the Kampa River.\nTo protect her fragile idol, Parvati lovingly embraced the sand Lingam, shielding it with her own body. Moved by this ultimate act of devotion, Shiva appeared and accepted her penance.\nThis Prithvi Lingam is a symbol of stability, and the indentations from her embrace are said to still be visible on the idol today.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147379/pe1_u4wqwv.png",
            significance:
              "Represents the Earth element",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Panguni Uthiram",
            state: "Tamil Nadu",
          },
          {
            id: "pe2",
            name: "Jambukeswarar Temple",
            location: "Thiruvanaikaval, Tamil Nadu, India",
            description:
              "At Thiruvanaikaval, Parvati, as Akilandeswari, continued her spiritual journey to gain divine knowledge from Shiva. She fashioned a Lingam using pure water (Appu) from the River Cauvery.\nThis established the Appu Lingam, which is perpetually submerged or surrounded by water from a constant subterranean spring. Lord Shiva appeared as a Guru (teacher), bestowing the ultimate wisdom upon her.\nThe temple symbolizes the sacred guru-disciple relationship and the cleansing power of the element water.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147378/pe2_rdxtao.png",
            significance:
              "Represents the Water element",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Aadi Pooram",
            state: "Tamil Nadu",
          },
          {
            id: "pe3",
            name: "Annamalaiyar Temple",
            location: "Thiruvannamalai, Tamil Nadu, India",
            description:
              "When Lord Brahma and Lord Vishnu quarreled over who was the superior deity, Lord Shiva manifested as an infinite column of blazing Fire (Agni), the Jyotirlinga.\n He challenged them to find its origin or end, which both gods failed to do, thus humbling their egos. The boundless pillar of light later solidified into the majestic Arunachala Hill itself.\nAt Tiruvannamalai, the Arunachala Hill is worshipped as the Agni Lingam, representing Shiva’s infinite and incomprehensible power.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147378/pe3_abpb8x.png",
            significance:
              "Represents the Fire element",
            bestTime: "October to February",
            festivals: "Karthigai Deepam, Maha Shivratri",
            state: "Tamil Nadu",
          },
          {
            id: "pe4",
            name: "Srikalahasti Temple",
            location: "Srikalahasti, Andhra Pradesh, India",
            description:
              "This temple embodies Air (Vayu), the element of cosmic breath. The Lingam here is a naturally-formed, self-manifested one.\nThe miracle of this shrine is visible in the inner sanctum: a lamp's flame constantly flickers and dances intensely, even though the space is completely shielded from any external air currents.\nThis perpetual movement is proof of the Vayu Lingam—Shiva’s presence as the subtle, life-giving force of wind and breath throughout the universe.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147376/pe4_bqyfxn.png",
            significance:
              "Represents the Air element",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Andhra Pradesh",
          },
          {
            id: "pe5",
            name: "Thillai Nataraja Temple",
            location: "Chidambaram, Tamil Nadu, India",
            description:
              "Chidambaram is the place where Lord Shiva performed his cosmic dance, the Ananda Tandava. The temple is dedicated to the most subtle element, Sky or Ether (Akasha).\nThe main shrine, the Chidambara Rahasyam, does not house a stone idol but is an empty, sacred space hidden behind a curtain.\nThis void, or formless space, is the Akasha Lingam. It signifies that the ultimate reality of Shiva is pure consciousness, intangible, all-pervading, and beyond all physical form.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147375/pe5_tjf6e5.png",
            significance:
              "Represents the Ether element",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Natyanjali Dance Festival",
            state: "Tamil Nadu",
          },
        ],
      },
      "Other Famous Shiva Temples": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147363/bh_y9yjn1.png",
        description:
          "Other significant temples dedicated to Lord Shiva across India",
        temples: [
          {
            id: "st1",
            name: "Amarnath Temple",
            location: "Jammu and Kashmir, India",
            description:
              "In this Himalayan cave, Lord Shiva began to reveal the secret of immortality, the Amar Katha, to Goddess Parvati.He took care to clear the cave of all life so no one could overhear the secret.\nHowever, a pair of pigeon eggs remained hidden and hatched, and the pigeons gained immortality.The most miraculous feature is the naturally forming Ice Lingam of Shiva.\nThis Lingam waxes and wanes along with the phases of the moon.The annual Amarnath Yatra pilgrimage to this high-altitude shrine is one of the most arduous in India.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147375/st1_i08jz1.png",
            significance:
              "Natural ice Lingam and high-altitude pilgrimage site",
            bestTime: "July to August",
            festivals: "Amarnath Yatra, Maha Shivratri",
            state: "Jammu and Kashmir",
          },
          {
            id: "st2",
            name: "Brihadeeswara Temple",
            location: "Thanjavur, Tamil Nadu, India",
            description:
              "The Brihadeeswara Temple was built by the great Chola King Rajaraja I in the 11th century.It was constructed to showcase the military power and spiritual devotion of the Chola Empire.The entire complex is a masterpiece of Dravidian architecture and a UNESCO World Heritage site.\nIts most remarkable feature is the massive, 216-foot tall Vimana (tower) over the main shrine.The 80-tonne Kumbam (cupola stone) atop the tower was painstakingly hauled up a long ramp.\nLegend states that the shadow of the main Vimana never falls upon the ground at noon, a feat of genius engineering.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147373/st2_abdlti.png",
            significance:
              "UNESCO World Heritage site with grand Chola architecture",
            bestTime: "October to February",
            festivals: "Maha Shivratri, Natyanjali Dance Festival",
            state: "Tamil Nadu",
          },
          {
            id: "st3",
            name: "Murudeshwar Temple",
            location: "Murudeshwar, Karnataka, India",
            description:
              "The story of this temple is linked to Ravana's attempt to carry the Atma Linga of Shiva to Lanka.The gods tricked Ravana into placing the Linga on the ground, rooting it to the spot.\nIn his fury, Ravana broke the Linga and scattered the pieces across the region.It is believed that a piece of the Linga fell at Murudeshwar, consecrating the location.\nThe modern temple is famous for its towering Gopura and colossal Lord Shiva statue.The majestic statue sits overlooking the Arabian Sea, making it a spectacular coastal pilgrimage site.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147378/st3_gzgkgv.png",
            significance:
              "Iconic seaside temple with world's second-tallest Shiva statue",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Karnataka",
          },
          {
            id: "st4",
            name: "Lingaraj Temple",
            location: "Bhubaneswar, Odisha, India",
            description:
              "The Lingaraj Temple is rooted in the legend of Lord Shiva coming to the Ekamra Kshetra (Bhubaneswar), where he appeared as the Kritivasa because he loved the dense mango groves of the area.\nThe presiding deity is a unique Hari-Hara Lingam, representing the combined form of Shiva (Hara) and Vishnu (Hari), a profound symbol of the philosophical unity of the two major Hindu deities.\nThe massive 11th-century structure is a stunning example of the indigenous Kalinga style of architecture, making it the most prominent and historically significant temple in the city of Bhubaneswar.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147374/st4_frkcwc.png",
            significance:
              "Major Shiva temple in Odisha with Kalinga architecture",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Ashokastami",
            state: "Odisha",
          },
          {
            id: "st5",
            name: "Shore Temple",
            location: "Mahabalipuram, Tamil Nadu, India",
            description:
              "Built by the Pallava dynasty in the 8th century, this UNESCO World Heritage site overlooks the Bay of Bengal and is famous for its intricate rock-cut structure.\nThe temple is unique as it houses shrines dedicated to both Lord Shiva and Lord Vishnu, and legend suggests it is one of the remnants of the ancient Seven Pagodas, most of which are submerged in the sea.\nThe structure has miraculously survived centuries of severe sea erosion and natural disasters, a testament to the advanced architectural and engineering skills of the Pallava builders.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147378/st5_ai6qvm.png",
            significance: "UNESCO site, ancient rock-cut temple by the sea",
            bestTime: "October to February",
            festivals: "Maha Shivratri, Mahabalipuram Dance Festival",
            state: "Tamil Nadu",
          },
          {
            id: "st6",
            name: "Kailash Temple",
            location: "Ellora, Maharashtra, India",
            description:
              "The Kailash Temple is an engineering and artistic marvel, part of the Ellora Caves UNESCO site, commissioned by the Rashtrakuta King Krishna I to replicate Shiva's abode, Mount Kailash.\nThe entire structure was carved out of a single, colossal basalt rock from the cliff face, using a unique top-down technique that is estimated to have involved the removal of over 400,000 tonnes of rock.\nThe temple features incredible carvings and grand courtyards, depicting detailed scenes from the Ramayana and Mahabharata stories.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147280/st6_f0hurp.png",
            significance:
              "Monolithic rock-cut temple, UNESCO Ellora Caves site",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Ellora Festival",
            state: "Maharashtra",
          },
          {
        id: "st7",
        name: "Shankaracharya Temple, Srinagar",
        location: "Srinagar, Jammu & Kashmir, India",
        description: "The temple is one of the oldest shrines in the Kashmir Valley, situated on the Gopadari Hill, with the original structure believed to date back as far as 371 BC, built by King Gopaditya.\nThe temple gained its current name after the great philosopher, Adi Shankaracharya, who is said to have visited the temple in the 8th century AD, achieving enlightenment and consecrating the site.\nThe structure is a symbol of the region's spiritual history and provides breathtaking panoramic views of the entire city of Srinagar.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094474/new2_bevcep.jpg",
        significance: "Believed to be the place where Adi Shankaracharya visited.",
        bestTime: "April to October",
        festivals: "Maha Shivaratri",
        state: "Jammu & Kashmir"
      },
      {
        id: "st8",
        name: "Sthaneshwar Mahadev Temple, Kurukshetra",
        location: "Kurukshetra, Haryana, India",
        description: "This ancient temple holds deep spiritual significance related to the epic Mahabharata, as the Pandavas and Lord Krishna came here to perform puja and seek blessings from Lord Shiva before the Kurukshetra war, a blessing that led to their victory.\nThe temple's large holy tank is said to possess curative and wish-fulfilling properties, with a local legend recounting how its waters healed a king of his leprosy. Its profound history makes it one of the most revered and historically vital temples in the Haryana region.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094473/new4_omtd0e.jpg",
        significance: "Believed to be the place where Lord Shiva blessed the Pandavas for victory.",
        bestTime: "October to March",
        festivals: "Maha Shivaratri",
        state: "Haryana"
      },
       {
        id: "st9",
        name: "Jageshwar Dham",
        location: "Almora, Uttarakhand, India",
        description: "Jageshwar is a significant pilgrimage site, comprising a cluster of over 100 stone temples dedicated to Shiva, where mythology suggests that this is the place where Lord Shiva first descended to earth from Mount Kailash to meditate.\nHe is worshipped here in the form of 'Bal Jageshwar', or Child Shiva, and the temples date back to the 9th to 13th centuries, showcasing stunning Katyuri architecture. The entire valley is considered a place of profound spiritual energy, guarded by a ring of powerful protector deities.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094473/new8_rqgjqy.jpg",
        significance: "One of the twelve Jyotirlingas, according to some local traditions.",
        bestTime: "September to November",
        festivals: "Maha Shivaratri",
        state: "Uttarakhand"
      },
      {
        id: "st10",
        name: "Tungnath Temple",
        location: "Rudraprayag, Uttarakhand, India",
        description: "Tungnath is famously known as the highest Shiva temple in the world, located at an altitude of 12,073 feet, and is the third of the Panch Kedar temples.\nThe Panch Kedar temples were built by the Pandavas to atone for their sins in the Mahabharata, and Tungnath specifically represents the Bahu or arms of Lord Shiva's bull form.\nThe ancient stone structure endures the harsh high-altitude climate, making the trek to this site one of the most rewarding pilgrimages in the Himalayas.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094472/new9_nt9hu1.jpg",
        significance: "The highest of the five Panch Kedar temples.",
        bestTime: "May to October",
        festivals: "Maha Shivaratri",
        state: "Uttarakhand"
      },
        ],
      },
    },
  },
  "Goddess Shakti": {
    image:
      "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
    temples: {
      "Shakti Peethas": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
        description:
          "The 51 sacred shrines where parts of Goddess Sati's body fell",
        temples: [
          {
            id: "sp1",
            name: "Kalighat Kali Temple",
            location: "Kolkata, West Bengal, India",
            description:
              "One of the most famous Shakti Peethas, believed to be the site where Goddess Sati's right toes fell. This ancient temple is dedicated to Goddess Kali and is a major pilgrimage site.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Right Toes of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Durga Puja, Kali Puja",
            state: "West Bengal",
          },
          {
            id: "sp2",
            name: "Kamakhya Temple",
            location: "Guwahati, Assam, India",
            description:
              "One of the most revered Shakti Peethas, where the genital organ of Goddess Sati is believed to have fallen. Famous for the annual Ambubachi Mela.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Genital organ of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Ambubachi Mela, Navratri",
            state: "Assam",
          },
          {
            id: "sp3",
            name: "Vishalakshi Temple",
            location: "Varanasi, Uttar Pradesh, India",
            description:
              "This temple marks the place where the earrings of Goddess Sati are believed to have fallen. Located in the holy city of Varanasi.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Earrings of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Navratri, Diwali",
            state: "Uttar Pradesh",
          },
          {
            id: "sp4",
            name: "Taratarini Temple",
            location: "Brahmapur, Odisha, India",
            description:
              "A prominent Shakti Peetha where the breasts of Goddess Sati are said to have fallen. Located atop Taratarini Hill.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Breasts of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Chaitra Mela, Navratri",
            state: "Odisha",
          },
          {
            id: "sp5",
            name: "Bimala Temple",
            location: "Puri, Odisha, India",
            description:
              "Located within Jagannath Temple complex, believed to be the place where Goddess Sati's feet fell. An integral part of the Puri pilgrimage.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Feet of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Rath Yatra, Navratri",
            state: "Odisha",
          },
          {
            id: "sp6",
            name: "Kankalitala Temple",
            location: "Birbhum, West Bengal, India",
            description:
              "Believed to be the site where the pelvis of Goddess Sati fell. A significant temple for Shakti worship in Bengal.",
            image:
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Pelvis of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Navratri, Kali Puja",
            state: "West Bengal",
          },
          {
            id: "sp7",
            name: "Saptashrungi Temple",
            location: "Vani, Maharashtra, India",
            description:
              "A revered Shakti Peetha where the right arm of Goddess Sati is believed to have fallen. Located on the Saptashrungi hills.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Right Arm of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Navratri, Chaitra Festival",
            state: "Maharashtra",
          },
          {
            id: "sp8",
            name: "Shondesh Temple",
            location: "Near Midnapore, West Bengal, India",
            description:
              "One of the Shakti Peethas where the bones of Goddess Sati are believed to have fallen. A lesser-known but significant pilgrimage site.",
            image:
             "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Bones of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Navratri, Durga Puja",
            state: "West Bengal",
          },
          {
            id: "sp9",
            name: "Jwalamukhi Temple",
            location: "Kangra, Himachal Pradesh, India",
            description:
              "Known for its eternal flame, believed to mark the place where Goddess Sati's tongue fell. The natural flames emerge from the rock crevices.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Tongue of Goddess Sati fell here",
            bestTime: "April to October",
            festivals: "Navratri, Jwalamukhi Fair",
            state: "Himachal Pradesh",
          },
          {
            id: "sp10",
            name: "Hinglaj Mata Temple",
            location: "Hingol National Park, Balochistan, Pakistan",
            description:
              "One of the holiest Shakti Peethas, where the Brahmarandhra (part of the head) of Goddess Sati is believed to have fallen. A challenging pilgrimage site.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Brahmarandhra (head) of Goddess Sati fell here",
            bestTime: "October to March",
            festivals: "Navratri, Hinglaj Yatra",
            state: "Balochistan",
          },
          {
            id: "sp11",
            name: "Shrinagar Shakti Peeth",
            location: "Shrinagar, Jammu and Kashmir, India",
            description:
              "A Shakti Peetha where the anklets of Goddess Sati are believed to have fallen.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Anklets of Goddess Sati",
            bestTime: "April to October",
            festivals: "Navratri",
            state: "Jammu and Kashmir",
          },
          {
            id: "sp12",
            name: "Naina Devi Temple",
            location: "Bilaspur, Himachal Pradesh, India",
            description:
              "One of the 51 Shakti Peethas, believed to be where the eyes of Goddess Sati fell.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Eyes of Goddess Sati",
            bestTime: "March to October",
            festivals: "Navratri",
            state: "Himachal Pradesh",
          },
          {
            id: "sp13",
            name: "Katyayani Temple",
            location: "Vrindavan, Uttar Pradesh, India",
            description:
              "A Shakti Peetha dedicated to Goddess Katyayani, where the back of Goddess Sati is said to have fallen.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Back of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Katyayani Vrata",
            state: "Uttar Pradesh",
          },
          {
            id: "sp14",
            name: "Chamundeshwari Temple",
            location: "Mysore, Karnataka, India",
            description:
              "One of the Shakti Peethas where the hair of Goddess Sati is believed to have fallen.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Hair of Goddess Sati",
            bestTime: "October to March",
            festivals: "Dussehra, Navratri",
            state: "Karnataka",
          },
          {
            id: "sp15",
            name: "Jogulamba Temple",
            location: "Alampur, Telangana, India",
            description:
              "A Shakti Peetha where the upper teeth of Goddess Sati are believed to have fallen.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Upper teeth of Goddess Sati",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Navratri",
            state: "Telangana",
          },
          {
            id: "sp16",
            name: "Brahmaramba Temple",
            location: "Srisailam, Andhra Pradesh, India",
            description:
              "One of the 18 Maha Shakti Peethas, believed to be where the neck of Goddess Sati fell.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Neck of Goddess Sati",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Navratri",
            state: "Andhra Pradesh",
          },
          {
            id: "sp17",
            name: "Sugandha Shakti Peeth",
            location: "Shikarpur, Bangladesh",
            description:
              "A Shakti Peetha where the nose of Goddess Sati is believed to have fallen.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Nose of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "Bangladesh",
          },
          {
            id: "sp18",
            name: "Karatal Shakti Peeth",
            location: "Nepal",
            description:
              "One of the sacred Shakti Peethas where the hands of Goddess Sati are believed to have fallen.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Hands of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "Nepal",
          },
          {
            id: "sp19",
            name: "Bahula Shakti Peeth",
            location: "Ketugram, West Bengal, India",
            description:
              "A Shakti Peetha where the left arm of Goddess Sati is said to have fallen.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Left Arm of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "West Bengal",
          },
          {
            id: "sp20",
            name: "Kalmadhava Shakti Peeth",
            location: "Amarkantak, Madhya Pradesh, India",
            description:
              "Believed to be the site where the right arm of Goddess Sati fell.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Right Arm of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "Madhya Pradesh",
          },
          {
            id: "sp21",
            name: "Kankalitala Shakti Peeth",
            location: "Birbhum, West Bengal, India",
            description:
              "This Shakti Peetha is believed to be the place where the bones (Kankal) of Goddess Sati fell.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Bones of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Durga Puja",
            state: "West Bengal",
          },
          {
            id: "sp22",
            name: "Mithila Shakti Peeth",
            location: "Janakpur, Nepal",
            description:
              "Considered the place where the left shoulder of Goddess Sati fell.",
            image:
 "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
             significance: "Left Shoulder of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Ram Navami",
            state: "Nepal",
          },
          {
            id: "sp23",
            name: "Jwalamukhi Temple",
            location: "Kangra, Himachal Pradesh, India",
            description:
              "One of the 51 Shakti Peethas where the tongue of Goddess Sati is said to have fallen. The temple has eternal flames burning naturally.",
            image:
 "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
             significance: "Tongue of Goddess Sati",
            bestTime: "March to June, September to November",
            festivals: "Navratri",
            state: "Himachal Pradesh",
          },
          {
            id: "sp24",
            name: "Kalika Mata Temple",
            location: "Pavagadh, Gujarat, India",
            description:
              "Believed to be where the toe of Goddess Sati fell. The temple is atop the Pavagadh hill.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Toe of Goddess Sati",
            bestTime: "October to February",
            festivals: "Navratri",
            state: "Gujarat",
          },
          {
            id: "sp25",
            name: "Kalipeeth Temple",
            location: "Kalighat, Kolkata, West Bengal, India",
            description:
              "One of the most famous Shakti Peethas where the toes of the right foot of Goddess Sati are believed to have fallen.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Toes of Goddess Sati",
            bestTime: "October to March",
            festivals: "Kali Puja, Navratri",
            state: "West Bengal",
          },
          {
            id: "sp26",
            name: "Lalita Devi Temple",
            location: "Prayagraj, Uttar Pradesh, India",
            description:
              "A Shakti Peetha believed to mark the site where the fingers of the left hand of Goddess Sati fell.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Fingers of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Kumbh Mela",
            state: "Uttar Pradesh",
          },
          {
            id: "sp27",
            name: "Goddess Sunanda Temple",
            location: "Sunandeswari, Birbhum, West Bengal, India",
            description:
              "Believed to be where the ornaments of Goddess Sati fell, making it a significant Shakti Peeth.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Ornaments of Goddess Sati",
            bestTime: "October to March",
            festivals: "Durga Puja, Navratri",
            state: "West Bengal",
          },
          {
            id: "sp28",
            name: "Vimala Temple",
            location: "Puri, Odisha, India",
            description:
              "A revered Shakti Peeth where the navel of Goddess Sati is believed to have fallen.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Navel of Goddess Sati",
            bestTime: "October to March",
            festivals: "Rath Yatra, Navratri",
            state: "Odisha",
          },
          {
            id: "sp29",
            name: "Tripura Sundari Temple",
            location: "Udaipur, Tripura, India",
            description:
              "A Shakti Peetha where the right foot of Goddess Sati is said to have fallen.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Right Foot of Goddess Sati",
            bestTime: "October to March",
            festivals: "Durga Puja, Navratri, Diwali",
            state: "Tripura",
          },
          {
            id: "sp30",
            name: "Manibandh Shakti Peeth",
            location: "Pushkar, Rajasthan, India",
            description:
              "This Shakti Peeth is believed to be the place where the wrist of Goddess Sati fell.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Wrist of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Pushkar Fair",
            state: "Rajasthan",
          },
          {
            id: "sp31",
            name: "Chintpurni Temple",
            location: "Una, Himachal Pradesh, India",
            description:
              "This Shakti Peeth is believed to be where the feet of Goddess Sati fell. It is a major pilgrimage destination in Himachal Pradesh.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Feet of Goddess Sati",
            bestTime: "March to June, September to November",
            festivals: "Navratri, Sawan Ashtami",
            state: "Himachal Pradesh",
          },
          {
            id: "sp32",
            name: "Ramgiri Shakti Peeth",
            location: "Chitrakoot, Uttar Pradesh, India",
            description:
              "It is said to be the place where the right breast of Goddess Sati fell, making it a revered Shakti Peeth.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Right Breast of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "Uttar Pradesh",
          },
          {
            id: "sp33",
            name: "Purnagiri Shakti Peeth",
            location: "Champawat, Uttarakhand, India",
            description:
              "This temple is considered the site where the navel of Goddess Sati fell. It is one of the most sacred places in Uttarakhand.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Navel of Goddess Sati",
            bestTime: "March to June, September to November",
            festivals: "Navratri, Purnima Fairs",
            state: "Uttarakhand",
          },
          {
            id: "sp34",
            name: "Mangalagauri Temple",
            location: "Gaya, Bihar, India",
            description:
              "A sacred Shakti Peeth where the breast of Goddess Sati is believed to have fallen. It is also an important site for ancestral rituals.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Breast of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Shraddh rituals",
            state: "Bihar",
          },
          {
            id: "sp35",
            name: "Bhadrakali Temple",
            location: "Kurukshetra, Haryana, India",
            description:
              "This temple is believed to mark the site where the ankle of Goddess Sati fell. It is closely connected with the Mahabharata.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Ankle of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Diwali",
            state: "Haryana",
          },
          {
            id: "sp36",
            name: "Ujjaini Mahakali Temple",
            location: "Hyderabad, Telangana, India",
            description:
              "A Shakti Peeth where the right arm of Goddess Sati is said to have fallen. It is one of the most important temples in Telangana.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Right Arm of Goddess Sati",
            bestTime: "October to March",
            festivals: "Bonalu, Navratri",
            state: "Telangana",
          },
          {
            id: "sp37",
            name: "Bhuvaneshwari Temple",
            location: "Guhagar, Maharashtra, India",
            description:
              "This Shakti Peeth is associated with the left arm of Goddess Sati. It is an important temple dedicated to Goddess Bhuvaneshwari.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Left Arm of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Diwali",
            state: "Maharashtra",
          },
          {
            id: "sp38",
            name: "Ambaji Temple",
            location: "Banaskantha, Gujarat, India",
            description:
              "One of the 51 Shakti Peethas, believed to be the place where the heart of Goddess Sati fell. It is one of Gujarat’s most visited temples.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Heart of Goddess Sati",
            bestTime: "September to March",
            festivals: "Bhadarvi Purnima, Navratri",
            state: "Gujarat",
          },
          {
            id: "sp39",
            name: "Shakambari Temple",
            location: "Sambhar, Rajasthan, India",
            description:
              "This temple is associated with the head of Goddess Sati and is dedicated to Goddess Shakambari, the mother of vegetation.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Head of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "Rajasthan",
          },
          {
            id: "sp40",
            name: "Chhinnamasta Temple",
            location: "Ramgarh, Jharkhand, India",
            description:
              "A powerful Shakti Peeth where the head of Goddess Sati is believed to have fallen. The temple is dedicated to Goddess Chhinnamasta.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Head of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Chhath Puja",
            state: "Jharkhand",
          },
          {
            id: "sp41",
            name: "Kankalitala Temple",
            location: "Birbhum, West Bengal, India",
            description:
              "This Shakti Peeth is believed to be where the pelvis of Goddess Sati fell. A significant pilgrimage site in West Bengal.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Pelvis of Goddess Sati",
            bestTime: "October to March",
            festivals: "Durga Puja, Kali Puja",
            state: "West Bengal",
          },
          {
            id: "sp42",
            name: "Saptashrungi Temple",
            location: "Vani, Maharashtra, India",
            description:
              "A revered Shakti Peeth where the right arm of Goddess Sati is believed to have fallen. It is one of the most important temples in Maharashtra.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Right Arm of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri, Chaitra Navratri",
            state: "Maharashtra",
          },
          {
            id: "sp43",
            name: "Shondesh Temple",
            location: "Near Midnapore, West Bengal, India",
            description:
              "This temple marks the place where the bones of Goddess Sati are believed to have fallen. It is a significant spiritual site in West Bengal.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Bones of Goddess Sati",
            bestTime: "October to March",
            festivals: "Durga Puja",
            state: "West Bengal",
          },
          {
            id: "sp44",
            name: "Jwalamukhi Temple",
            location: "Kangra, Himachal Pradesh, India",
            description:
              "A Shakti Peeth famous for the natural eternal flames, representing the tongue of Goddess Sati that fell here.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Tongue of Goddess Sati",
            bestTime: "September to November",
            festivals: "Navratri",
            state: "Himachal Pradesh",
          },
          {
            id: "sp45",
            name: "Hinglaj Mata Temple",
            location: "Balochistan, Pakistan",
            description:
              "This Shakti Peeth is believed to be the Brahmarandhra (part of the head) of Goddess Sati. It is a sacred pilgrimage site for Hindus.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Brahmarandhra (Head) of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "Balochistan, Pakistan",
          },
          {
            id: "sp46",
            name: "Shrinagar Shakti Peeth",
            location: "Shrinagar, Jammu and Kashmir, India",
            description:
              "This temple is associated with the anklets of Goddess Sati. It is an important spiritual site in the Kashmir region.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Anklets of Goddess Sati",
            bestTime: "April to October",
            festivals: "Navratri",
            state: "Jammu and Kashmir",
          },
          {
            id: "sp47",
            name: "Naina Devi Temple",
            location: "Bilaspur, Himachal Pradesh, India",
            description:
              "This temple is said to be the spot where the eyes of Goddess Sati fell. It is a revered pilgrimage destination in Himachal Pradesh.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Eyes of Goddess Sati",
            bestTime: "March to June, September to November",
            festivals: "Navratri",
            state: "Himachal Pradesh",
          },
          {
            id: "sp48",
            name: "Katyayani Temple",
            location: "Vrindavan, Uttar Pradesh, India",
            description:
              "A Shakti Peeth where the back of Goddess Sati is said to have fallen. The temple is an important center for worship in Vrindavan.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Back of Goddess Sati",
            bestTime: "October to March",
            festivals: "Holi, Janmashtami",
            state: "Uttar Pradesh",
          },
          {
            id: "sp49",
            name: "Chamundeshwari Temple",
            location: "Mysore, Karnataka, India",
            description:
              "The hair of Goddess Sati is believed to have fallen here. This temple is one of the major centers of worship in Karnataka.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Hair of Goddess Sati",
            bestTime: "October to March",
            festivals: "Dasara",
            state: "Karnataka",
          },
          {
            id: "sp50",
            name: "Jogulamba Temple",
            location: "Alampur, Telangana, India",
            description:
              "This temple marks the place where the upper teeth of Goddess Sati fell. It is a revered site in Telangana.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Upper Teeth of Goddess Sati",
            bestTime: "October to March",
            festivals: "Navratri",
            state: "Telangana",
          },
          {
            id: "sp51",
            name: "Brahmaramba Temple",
            location: "Srisailam, Andhra Pradesh, India",
            description:
              "A Shakti Peeth where the neck of Goddess Sati is said to have fallen. The temple is one of the most prominent pilgrimage sites in Andhra Pradesh.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
            significance: "Neck of Goddess Sati",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Navratri",
            state: "Andhra Pradesh",
          },
        ],
      },
      "Devi Temples": {
        image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147281/shakti_e7kaaz.png",
        description:
          "Famous temples dedicated to various forms of Goddess Durga and Devi",
        temples: [
        {
  id: "dt1",
  name: "Meenakshi Amman Temple",
  location: "Madurai, Tamil Nadu, India",
  description:
    "The temple celebrates the divine union of Goddess Meenakshi (Parvati) and Lord Sundareshwar (Shiva), chronicled in the Tiruvilaiyadal Puranam. Legend says Meenakshi, born as a princess with three breasts, ruled Madurai after conquering the world with her armies.\nHer third breast vanished upon seeing Lord Shiva, who appeared as Sundareshwar to marry her. The divine wedding of the royal warrior-princess and the Lord of the Dance is celebrated annually.\nThe temple is a magnificent masterpiece of Dravidian architecture, famed for its towering, colorful gopurams.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147391/dt1_hwfpkt.png",
  significance: "Celebrates the divine union of Parvati and Shiva.",
  bestTime: "October to March",
  festivals: "Chithirai Festival",
  state: "Tamil Nadu"
},
 {
        id: "dt12",
        name: "Vaishno Devi Temple",
        location: "Katra, Jammu & Kashmir, India",
        description: "This shrine in the Trikuta Mountains is where Vaishno Devi, a manifestation of Goddess Durga, performed her penance. The goddess was pursued by the demon Bhairon Nath, whom she eventually slew near the holy cave, granting him a boon of salvation before his death.\n Pilgrims must visit Bhairon Nath’s temple after Vaishno Devi for their journey to be complete. Inside the cave, the Goddess is worshipped in the form of three natural rock formations, or pindis, which represent her three great powers: Maha Kali, Maha Lakshmi, and Maha Saraswati.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094475/new1_o0trh1.jpg",
        significance: "One of the most revered Shakti Peethas.",
        bestTime: "March to October",
        festivals: "Navratri",
        state: "Jammu & Kashmir"
      },
      {
        id: "dt14",
        name: "Gangotri Temple",
        location: "Uttarkashi, Uttarakhand, India",
        description: "The temple marks the sacred source of the River Ganga (known here as Bhagirathi), a key destination in the Char Dham Yatra pilgrimage.\nThe story begins with King Bhagiratha, who performed severe penance at this spot for thousands of years with the sole aim of bringing the Goddess Ganga down from the heavens.\nGanga's immense force required Lord Shiva to cushion her descent in his matted locks, successfully bringing the river to Earth to purify the ashes and sins of Bhagiratha's ancestors.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094473/new6_b1rmhy.jpg",
        significance: "One of the four Char Dham pilgrimage sites and the origin of the Ganga river.",
        bestTime: "May to November",
        festivals: "Ganga Dussehra",
        state: "Uttarakhand"
      },
      {
        id: "dt15",
        name: "Yamunotri Temple",
        location: "Uttarkashi, Uttarakhand, India",
        description: "Yamunotri is dedicated to Goddess Yamuna, the daughter of the Sun God, Surya, and sister of Yama, the God of Death. It is said that worshipping Yamuna relieves devotees of the fear of death and grants salvation.\nThe temple marks the origin point of the holy River Yamuna, situated near a hot water thermal spring where pilgrims prepare rice and potatoes. The deity, a black marble idol, is moved to Kharsali village for worship during the harsh winter months.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094473/new7_ttnns0.jpg",
        significance: "The first stop in the Chota Char Dham Yatra.",
        bestTime: "May to November",
        festivals: "Yamuna Jayanti",
        state: "Uttarakhand"
      },
{
  id: "dt2",
  name: "Kamakshi Amman Temple",
  location: "Kanchipuram, Tamil Nadu, India",
  description:
    "This temple is one of the most vital centers for the worship of Goddess Kamakshi in South India. Legend states the Goddess once playfully closed Lord Shiva's eyes, plunging the universe into darkness, and to atone, Kamakshi performed penance under a mango tree at Kanchipuram.\nShiva, pleased with her devotion, later married her at the nearby Ekambareswarar Temple. Kamakshi is worshipped here in a seated pose of meditation, holding a sugarcane bow and floral arrows, symbolizing love and compassion.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147392/dt2_oyytsm.png",
  significance: "One of the three powerful Shakti temples of Tamil Nadu.",
  bestTime: "November to February",
  festivals: "Navratri, Aadi Festival",
  state: "Tamil Nadu"
},
{
  id: "dt3",
  name: "Annapoorna Devi Temple",
  location: "Varanasi, Uttar Pradesh, India",
  description:
    "The temple is dedicated to Goddess Annapoorna, an avatar of Parvati who is revered as the giver of food and nourishment.\n According to mythology, Lord Shiva once debated the role of material creation with Parvati, who, to prove its importance, temporarily vanished, causing a severe famine across the world.\nShiva finally realized his error and asked her to return, recognizing her power as the source of sustenance. Devotees believe that no one goes hungry after seeking the Goddess's blessings here in the sacred city of Varanasi.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147390/dt3_yvwfod.png",
  significance: "Belief that no one goes hungry after seeking her blessings.",
  bestTime: "October to March",
  festivals: "Annapoorna Jayanti, Navratri",
  state: "Uttar Pradesh"
},
{
  id: "dt4",
  name: "Akilandeswari Temple",
  location: "Thiruvanaikaval, Tamil Nadu, India",
  description:
    "This temple is one of the Pancha Bhoota Sthalas, representing the element of Water, where Goddess Akilandeswari (Parvati) worshipped Lord Shiva.\nThe Goddess, in the form of a female saint, performed penance here, fashioning a Lingam from the water of the Cauvery River. A perennial underground stream still flows around the shrine's base,\nconfirming its association with the water element. Akilandeswari is traditionally worshipped in the form of a student worshipping her Guru (Shiva), symbolizing spiritual learning.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147395/dt4_tlnbxu.png",
  significance: "One of the Pancha Bhoota Sthalas, representing water element.",
  bestTime: "November to March",
  festivals: "Aadi Pooram, Navratri",
  state: "Tamil Nadu"
},
{
  id: "dt5",
  name: "Parvati Temple",
  location: "Pune, Maharashtra, India",
  description:
    "Located atop Parvati Hill, this temple complex provides a sweeping view of Pune city. The site was once the private shrine of the Peshwa dynasty, who built several temples on the hill dedicated to Parvati and her consort, Shiva, along with Ganesh and Vishnu.\nThe main temple is dedicated to Goddess Parvati, and the entire complex is steeped in Maratha history and architecture. Climbing the 103 steps to the top is a popular activity for both devotees and tourists.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147389/dt5_trid1u.png",
  significance: "Built during the Peshwa dynasty, overlooking Pune city.",
  bestTime: "October to February",
  festivals: "Navratri, Shravan Mondays",
  state: "Maharashtra"
},
{
  id: "dt6",
  name: "Sharada Amman Temple",
  location: "Sringeri, Karnataka, India",
  description:
    "This revered temple was established by the great philosopher and saint Adi Shankaracharya in the 8th century AD.\nIt is dedicated to Goddess Sharadamba (Saraswati/Parvati), the Goddess of learning and wisdom. The temple is the primary shrine of the Sringeri Sharada Peetham, one of the four cardinal monasteries established by Shankaracharya.\nIt serves as a vital center for Vedic knowledge, wisdom, and Shakti worship in South India.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147386/dt6_rq7g56.png",
  significance: "Center of wisdom and Shakti worship in South India.",
  bestTime: "October to March",
  festivals: "Navratri, Sharada Navaratri",
  state: "Karnataka"
},
{
  id: "dt7",
  name: "Parvathi Temple",
  location: "Kanchipuram, Tamil Nadu, India",
  description:
    "This ancient temple in the sacred town of Kanchipuram is uniquely dedicated solely to Parvathi Devi, highlighting her power as the divine feminine energy.\nWhile Kanchipuram is famous for its association with Goddess Kamakshi, this temple offers devotees a specific focus on the motherly and powerful aspect of Parvathi Devi.\nIt provides a vital spiritual anchor within the city, particularly during festivals celebrating the Goddess's fierce and compassionate forms.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147388/dt7_ut6g6x.png",
  significance: "Highlights the divine feminine energy of Parvati.",
  bestTime: "November to February",
  festivals: "Aadi Pooram, Navratri",
  state: "Tamil Nadu"
},{
  id: "dt8",
  name: "Horanadu Annapoorneshwari Temple",
  location: "Chikkamagaluru, Karnataka, India",
  description:
    "This temple is nestled in the thick, beautiful Western Ghats and is dedicated to Goddess Annapoorneshwari, the giver of food and abundance.\nA key feature is the ritualistic practice where every visitor, regardless of caste, creed, or religion, is provided with free meals (breakfast, lunch, and dinner) and shelter.\nThis practice symbolizes the Goddess's unwavering commitment to nourishing the world, fulfilling the belief that devotees here are blessed with abundance and never face scarcity.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/dt8_smaecz.png",
  significance: "Belief that devotees are blessed with abundance and nourishment.",
  bestTime: "October to March",
  festivals: "Akshaya Tritiya, Navratri",
  state: "Karnataka"
},
{
  id: "dt9",
  name: "Attukal Bhagavathy Temple",
  location: "Thiruvananthapuram, Kerala, India",
  description:
    "Dedicated to Bhagavathy, a form of Goddess Parvati, the temple is often called the 'Sabarimala of Women' due to its unique ritual.\nIt is renowned for hosting the annual Attukal Pongala festival, where millions of women gather to cook a sweet offering for the Goddess.\nThis festival has earned the temple a Guinness World Record for the single largest annual gathering of women for a religious activity. The Goddess here is believed to grant wishes and cure diseases.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147365/dt9_if45vd.png",
  significance: "Known as the ‘Sabarimala of Women’.",
  bestTime: "October to March",
  festivals: "Attukal Pongala, Navratri",
  state: "Kerala"
},
{
  id: "dt10",
  name: "Arulmigu Mariamman Temple",
  location: "Samayapuram, Tamil Nadu, India",
  description:
    "This powerful temple is dedicated to Mariamman, a fierce yet benevolent form of Goddess Parvati worshipped primarily for protection and health.\nThe Goddess is believed to cure devotees of various diseases, particularly smallpox and cholera, leading many to offer specific rituals in exchange for healing.\nUnlike many temples, the Goddess is made of sand and clay, requiring the oil application to be done only on the kavasam (covering), and the temple draws massive crowds seeking strength and freedom from illness.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147361/dt10_gaidoe.png",
  significance: "Devotees believe she cures diseases and grants strength.",
  bestTime: "December to March",
  festivals: "Chithirai Festival, Navratri",
  state: "Tamil Nadu"
},
{
  id: "dt11",
  name: "Melmaruvathur Adhiparasakthi Temple",
  location: "Melmaruvathur, Tamil Nadu, India",
  description:
    "This is a modern but highly significant temple dedicated to Goddess Adhiparasakthi, considered the supreme form of the divine feminine energy.\nThe unique aspect of this temple is that women are allowed to perform priestly duties, marking a progressive departure from traditional norms.\nDevotees wear red clothing and believe that the Goddess here blesses them with prosperity, healing, and profound spiritual power.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147361/dt11_mct0ip.png",
  significance:
    "Devotees believe the Goddess here blesses with prosperity, healing, and spiritual power.",
  bestTime: "October to March",
  festivals: "Thai Poosam, Navratri",
  state: "Tamil Nadu"
}, {
        id: "dt13",
        name: "Mata Mansa Devi Temple, Panchkula",
        location: "Panchkula, Haryana, India",
        description: "Dedicated to Mansa Devi, a popular form of Shakti, the name 'Mansa' literally refers to the fulfillment of desires (Mansa).\nThis revered temple is a significant pilgrimage site near Chandigarh, where it is widely believed that the Goddess fulfills the wishes of her devotees who visit the shrine.\nThe temple complex is also a key stop on the route to the nearby Naina Devi Temple and draws massive crowds, especially during the Navratri festivals.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094474/new3_eiqg1d.jpg",
        significance: "Revered for fulfillment of wishes (Mansa).",
        bestTime: "October to March",
        festivals: "Navratri",
        state: "Haryana"
      },
      {
        id: "dt14",
        name: "Bhim Devi Temple, Pinjore",
        location: "Pinjore, Haryana, India",
        description: "Dedicated to Goddess Bhim Devi, a form of Durga, this temple is located in the historically rich Pinjore region.\nThe temple site is known for its archaeological ruins, suggesting a long and deep history of worship. Legend states that the Pandavas, during their period of exile, spent time in the Pinjore region and established this shrine to worship the Goddess for strength and protection, forging an association with the Mahabharata epic.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094474/new5_e2xnsa.jpg",
        significance: "Associated with the Pandavas during their exile.",
        bestTime: "October to March",
        festivals: "Navratri",
        state: "Haryana"
      },
       
      {
        id: "dt17",
        name: "Hadimba Devi Temple, Manali",
        location: "Manali, Himachal Pradesh, India",
        description: "The temple is famous for its distinct wooden pagoda-style architecture.\nDedicated to Goddess Hadimba, wife of Bhima from the Mahabharata.she was a Rakshasi (demoness) who vowed to marry the man who could defeat her brother, Hadimba. Bhima killed her brother and married her\nshe later performed intense meditation to attain the status of a Goddess.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094472/new11_ebql1g.jpg",
        significance: "Dedicated to a local deity and a figure from the Mahabharata.",
        bestTime: "May to October",
        festivals: "Bahidra Duja",
        state: "Himachal Pradesh"
      },
      {
        id: "dt18",
        name: "Kalka Mandir, Kalkaji",
        location: "Kalkaji, New Delhi, Delhi, India",
        description: "Dedicated to Goddess Kali/Kalka Devi, It is a very old and revered temple in the capital.\nLegend holds that the Goddess Kali was born here on the hill, known as 'Suryakoot', to slay the giant demon Raktabija. The temple is believed to have been established at the very spot where she manifested.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094472/new13_w6n3vf.jpg",
        significance: "Believed to be one of the Siddh Peethas.",
        bestTime: "October to March",
        festivals: "Navratri",
        state: "Delhi"
      },
      {
        id: "dt19",
        name: "Chattarpur Temple",
        location: "Chhatarpur, New Delhi, Delhi, India",
        description: "Dedicated to Goddess Durga (Maa Katyayani). The vast complex was founded by Baba Sant Nagpal Ji in 1974.\nThe main shrine is dedicated to Goddess Katyayani, who is one of the Navadurga forms of Goddess Durga, revered for her power and protection.",
        image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760094472/news14_rjlu7e.jpg",
        significance: "Second largest temple complex in India after Akshardham.",
        bestTime: "October to March",
        festivals: "Navratri",
        state: "Delhi"
      },
        ],
      },
    },
  },
  "Goddess Lakshmi": {
    image:
      "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147323/laxmi_su1sgk.png",
    temples: {
      "Lakshmi Temples": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147323/laxmi_su1sgk.png",
        description:
          "Sacred temples dedicated to the Goddess of Wealth and Prosperity",
        temples: [
          {
  id: "l1",
  name: "Mahalakshmi Temple",
  location: "Kolhapur, Maharashtra, India",
  description:
    "This ancient temple is a revered Shakti Peetha, believed to be the spot where the three eyes of Goddess Sati fell after her body was dismembered.\nThe presiding deity is Goddess Mahalakshmi (Ambabai), who is famously depicted with four hands, standing on a stone platform. Legend holds that the Goddess fought and defeated the demon Kolhasura here, saving the land and granting the city the name Kolhapur.\nThe temple is famous for the Kirnotsav festival, where sun rays fall directly onto the deity's face for a few minutes on specific dates.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147331/l1_i7arfc.png",
  significance: "One of the Shakti Peethas.",
  bestTime: "October to March",
  festivals: "Navratri, Kirnotsav",
  state: "Maharashtra"
},
{
  id: "l2",
  name: "Ashtalakshmi Temple",
  location: "Chennai, Tamil Nadu, India",
  description:
    "This temple is uniquely dedicated to the eight forms (Ashtalakshmi) of Goddess Lakshmi, representing all aspects of wealth, prosperity, knowledge, courage, and power.\nSituated beautifully by the Bay of Bengal in Besant Nagar, the temple's architecture is a multi-tiered structure, allowing devotees to progress through the shrines of the eight different Lakshmis.\nDevotees believe that worshipping all eight forms consecutively ensures holistic prosperity and fulfillment in life.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147331/l2_yqcive.png",
  significance: "Represents all eight manifestations of Goddess Lakshmi.",
  bestTime: "November to February",
  festivals: "Varalakshmi Vratam, Navratri",
  state: "Tamil Nadu"
},
{
  id: "l3",
  name: "Mahalakshmi Temple",
  location: "Mumbai, Maharashtra, India",
  description:
    "This temple is one of the most famous and frequented shrines in Mumbai, built in the 18th century by a Hindu merchant.\nThe legend associated with its construction involves the miraculous recovery of sunken treasures used to build the temple after the British failed to connect the two islands of Mumbai. The temple houses the beautiful idols of the three sister goddesses: Mahalakshmi, Mahakali, and Mahasaraswati.\nDevotees deeply believe that the Goddess Mahalakshmi here directly blesses the city and grants wealth to those who pray sincerely.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147329/l3_yy1aoj.png",
  significance: "Associated with Goddess Mahalakshmi blessing Mumbai.",
  bestTime: "October to March",
  festivals: "Navratri, Diwali",
  state: "Maharashtra"
},
{
  id: "l4",
  name: "Kanaka Mahalakshmi Temple",
  location: "Visakhapatnam, Andhra Pradesh, India",
  description:
    "This prominent temple is dedicated to Goddess Kanaka Mahalakshmi, who is revered as the presiding deity and protector of the city of Visakhapatnam.\nThe idol is unique as it is installed not in a structure, but in the open air, representing its self-manifested nature.\n Legend holds that the idol was submerged and later re-established in the 17th century, where the Goddess promised to protect the city from epidemics and famine. Devotees flock here for the major festival of Margasira Masa Mahotsavam.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147330/l4_vtdmil.png",
  significance: "Believed to protect the city and its people.",
  bestTime: "October to February",
  festivals: "Margasira Masa Mahotsavam",
  state: "Andhra Pradesh"
},
{
  id: "l5",
  name: "Mahalakshmi Temple",
  location: "Dharwad, Karnataka, India",
  description:
    "This is an ancient and powerful temple dedicated to Goddess Lakshmi, serving as a major spiritual center for devotees across North Karnataka.\nThe temple has a revered history and is believed to have been established by royal dynasties over centuries.\n The Goddess here is considered a highly powerful granter of wealth and prosperity. The shrine is a central location for celebrating Lakshmi Puja and Navratri, drawing pilgrims seeking financial stability and success.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147329/l5_c5r7nf.png",
  significance: "Considered a powerful Lakshmi shrine of Karnataka.",
  bestTime: "November to February",
  festivals: "Navratri, Lakshmi Puja",
  state: "Karnataka"
},
{
  id: "l6",
  name: "Shree Mahalakshmi Ambabai Temple",
  location: "Goa, India",
  description:
    "Located in Bandora, this is considered one of the oldest surviving temples in Goa, with its origin linked to the migration of Saraswat Brahmins to the region.\nThe original deity idol had to be moved and hidden during the Portuguese inquisition to protect it from destruction. The current idol is a beautiful depiction of Goddess Mahalakshmi who is revered as the mother of the land.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147327/l6_dkrby6.png",
  significance: "One of the oldest temples in Goa.",
  bestTime: "October to February",
  festivals: "Navratri, Diwali",
  state: "Goa"
},
{
  id: "l7",
  name: "Lakshmi Narayan Temple (Birla Mandir)",
  location: "New Delhi, India",
  description:
    "This famous temple, commonly known as Birla Mandir, was built by the influential Birla family in 1939 and was inaugurated by Mahatma Gandhi.\nThe temple is dedicated primarily to Goddess Lakshmi and Lord Vishnu (Lakshmi Narayan). Gandhi agreed to inaugurate the temple on the condition that people of all castes and creeds would be allowed entry.\nIt is considered a modern architectural marvel, standing as a beautiful synthesis of traditional and modern design in the heart of the capital.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147326/l7_nj7f76.png",
  significance: "A modern architectural marvel and a spiritual hub.",
  bestTime: "October to March",
  festivals: "Janmashtami, Diwali",
  state: "Delhi"
},
{
  id: "l8",
  name: "Lakshmi Narasimha Temple",
  location: "Andhra Pradesh, India",
  description:
    "This is an important Vaishnava temple where Goddess Lakshmi is worshipped alongside her consort, Lord Narasimha, the man-lion avatar of Vishnu.\nThe worship of Lakshmi with Narasimha is significant because it represents the Lord in his calm, benevolent form, as Lakshmi is seated on his lap, pacifying his fierce anger after defeating the demon Hiranyakashipu.\nThe combined worship here symbolizes divine protection from all evils and the granting of prosperity to devotees.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147327/l8_gmqpev.png",
  significance: "Symbol of divine protection and prosperity.",
  bestTime: "November to March",
  festivals: "Narasimha Jayanti, Lakshmi Puja",
  state: "Andhra Pradesh"
},
{
  id: "l9",
  name: "Mahalakshmi Temple",
  location: "Goravanahalli, Karnataka, India",
  description:
    "This popular shrine in Karnataka is dedicated to Goddess Mahalakshmi, gaining fame due to the belief that prayers offered here effectively remove financial problems and grant immense prosperity.\nThe temple became prominent due to the devotion of a man named Iddalamma, who is believed to have been instrumental in establishing the shrine.\nThe Goddess here is often depicted in her standing posture, actively bestowing blessings and abundance upon her devotees.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147331/l9_fmhz6y.png",
  significance: "Famous for the belief that prayers here remove financial problems.",
  bestTime: "October to February",
  festivals: "Varalakshmi Vratam, Navratri",
  state: "Karnataka"
},
{
  id: "l10",
  name: "Lakshmi Narayan Temple",
  location: "Chamba, Himachal Pradesh, India",
  description:
    "This magnificent temple complex is one of the oldest surviving temples in Himachal Pradesh, dating back to the 10th century, built by the rulers of the Chamba kingdom.\nIt is dedicated to Lord Vishnu and Goddess Lakshmi (Lakshmi Narayan). The complex comprises six major shrines, each dedicated to a different form of Vishnu or Shiva.\n The main shrine is particularly famous for its beautiful and intricate wood carvings and stone sculptures, showcasing the unique hill architecture of the time.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147325/l10_auuclh.png",
  significance: "One of the oldest surviving temples in Himachal Pradesh.",
  bestTime: "April to June, September to October",
  festivals: "Diwali, Navratri",
  state: "Himachal Pradesh"
},
        ],
      },
    },
  },
  "Lord Hanuman": {
    image:
      "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147343/hanuman_smnyyx.png",
    temples: {
      "Hanuman Temples": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147343/hanuman_smnyyx.png",
        description:
          "Famous temples dedicated to the devoted follower of Lord Rama",
        temples: [
         {
  id: "h1",
  name: "Hanuman Garhi",
  location: "Ayodhya, Uttar Pradesh, India",
  description: "Hanuman Garhi is an important 10th-century fortress-like temple dedicated to Lord Hanuman, famously believed to be the spot where Hanuman resides to guard Ayodhya.\nAs tradition dictates, devotees must visit this temple first and take the blessings of Hanuman before proceeding to the Ram Mandir.\nThe temple is located atop a hill and requires a climb of about 76 steps, rewarding pilgrims with a panoramic view of the town. The statue of the Lord here is often depicted resting with his mother, Anjani, symbolizing his devotion to his birthplace.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147352/h1_jjehih.png",
  significance: "Believed to be the residence of Lord Hanuman.",
  bestTime: "October to March",
  festivals: "Hanuman Jayanti",
  state: "Uttar Pradesh"
},
{
  id: "h2",
  name: "Sankat Mochan Hanuman Temple",
  location: "Varanasi, Uttar Pradesh, India",
  description: "This temple is one of the most visited Hanuman shrines in India, famously founded by the great saint-poet Tulsidas, the author of the Ramcharitmanas.and obstacles.\nLegend states that Tulsidas, while performing penance, received a divine vision of Lord Hanuman at this spot.\nThe temple is known as Sankat Mochan (Reliever of troubles), and devotees believe that worshipping here helps relieve all troubles, obstacles, and diseases.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147354/h2_fhrh4k.png",
  significance: "One of the most visited Hanuman temples in India.",
  bestTime: "November to March",
  festivals: "Hanuman Jayanti",
  state: "Uttar Pradesh"
},
{
  id: "h3",
  name: "Salasar Balaji",
  location: "Churu, Rajasthan, India",
  description: "Salasar Balaji is a powerful shrine dedicated to Lord Hanuman in Rajasthan, drawing lakhs of devotees every year for its unique significance.\nThe deity is worshipped as Balaji and is notable for its unique idol depicting the Lord with a full beard and mustache, unlike the common monkey-faced or youthful representations.\nThe idol is believed to have been self-manifested from a rock, establishing the temple's sanctity.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147351/h3_lq9hbl.png",
  significance: "Worshipped as Balaji with a unique idol having a beard and mustache.",
  bestTime: "October to February",
  festivals: "Hanuman Jayanti, Chaitra Purnima Mela",
  state: "Rajasthan"
},
{
  id: "h4",
  name: "Mehandipur Balaji Temple",
  location: "Dausa, Rajasthan, India",
  description: "This highly unique temple is famous nationwide as a center for faith healing and rituals related to the removal of evil spirits, black magic, and other negative energies.\n Dedicated to Balaji (Lord Hanuman), it draws crowds seeking solace from psychological or spiritual afflictions.\nThe practices here are intense and often debated, yet the strong belief in the Lord's power to conquer negative forces makes it a compelling site of faith.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147360/h4_g3unli.png",
  significance: "Known as a center of faith and healing.",
  bestTime: "October to March",
  festivals: "Hanuman Jayanti",
  state: "Rajasthan"
},
{
  id: "h5",
  name: "Jakhoo Temple",
  location: "Shimla, Himachal Pradesh, India",
  description: "Perched atop Jakhoo Hill, this temple is associated with the Ramayana episode where Lord Hanuman paused here while searching for the Sanjeevani medicinal herb to save Lakshmana.\nThe temple site is marked by the world's tallest Hanuman statue, which stands at a towering 108 feet. It is believed that a small temple existed here after Hanuman's footprint was discovered on the hill.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147348/h5_taslwn.png",
  significance: "Associated with the Ramayana episode of Sanjeevani mountain.",
  bestTime: "March to June, September to November",
  festivals: "Dussehra, Hanuman Jayanti",
  state: "Himachal Pradesh"
},
{
  id: "h6",
  name: "Karmanghat Hanuman Temple",
  location: "Hyderabad, Telangana, India",
  description: "This ancient temple, built by a Kakatiya king in the 12th century, is one of the oldest Hanuman shrines in South India.\nLegend says the king was told by Lord Hanuman to build the temple on the spot where he saw Hanuman in meditation.\nThe temple's name is associated with the phrase 'Dheera, Karo Man Ghat', meaning 'Make your heart strong,' which the Lord told a later emperor when he tried to demolish the shrine.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147347/h6_f42x7x.png",
  significance: "Known for the phrase ‘Dheera, Karo Man Ghat’ which means ‘make your heart strong.’",
  bestTime: "October to March",
  festivals: "Hanuman Jayanti",
  state: "Telangana"
},
{
  id: "h7",
  name: "Namakkal Anjaneyar Temple",
  location: "Namakkal, Tamil Nadu, India",
  description: "This temple is renowned for its towering, magnificent idol of Lord Hanuman (Anjaneyar), which stands at an impressive height of 18 feet.\nUnusually, the shrine has no roof above the main idol, a distinctive feature suggesting that Hanuman is always ready to fly and serve Lord Rama.\nThe temple is historically linked to the nearby Narasimha temple, as Hanuman is traditionally revered for carrying the goddess Lakshmi.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147349/h7_x2ptvu.png",
  significance: "Believed to be one of the tallest Hanuman idols in India.",
  bestTime: "December to February",
  festivals: "Hanuman Jayanti, Vaikunta Ekadasi",
  state: "Tamil Nadu"
},
{
  id: "h8",
  name: "Shri Kashtbhanjan Hanuman Mandir",
  location: "Salangpur, Gujarat, India",
  description: "This powerful shrine, located in the Saurashtra region, is dedicated to Lord Hanuman who is worshipped here specifically as Kashtbhanjan (the Remover of sorrows and pains).\nThe temple is famous for its association with the Swaminarayan Sampraday and is highly regarded as a place where negative energies and afflictions are dispelled.\nThe idol is adorned with beautiful gold and silver ornaments, and Tuesday is the day when special prayers are offered for exorcism rituals.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147349/h8_gcpgdz.png",
  significance: "Worshipped as Kashtbhanjan (Remover of sorrows).",
  bestTime: "October to February",
  festivals: "Hanuman Jayanti",
  state: "Gujarat"
},
{
  id: "h9",
  name: "Bet Dwarka Hanuman Dandi",
  location: "Dwarka, Gujarat, India",
  description: "Located on the island of Bet Dwarka, this is a unique and extremely rare temple dedicated to Lord Hanuman and his son Makardhwaja, marking the only place where the two are worshipped together.\nThe legend of Makardhwaja's birth occurred during Hanuman's journey to Lanka, and this temple is believed to commemorate their divine meeting.\nPilgrims visit this temple as part of the Dwarka pilgrimage circuit to seek blessings from both the father and son.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147350/h9_ktkag8.png",
  significance: "Only temple where Hanuman and his son are worshipped together.",
  bestTime: "October to March",
  festivals: "Hanuman Jayanti, Janmashtami",
  state: "Gujarat"
},
{
  id: "h10",
  name: "Mahavir Mandir",
  location: "Patna, Bihar, India",
  description: "The Mahavir Mandir is one of the most popular and sacred temples in Bihar and Eastern India, drawing millions of devotees annually, and is often cited as the second most visited religious shrine in North India after Vaishno Devi.\nThe temple houses two idols of Lord Hanuman, both facing the west. The temple is famous for its massive and successful trust that runs several charitable projects, making it a prominent hub of faith and philanthropy.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147345/h10_mlwi2d.png",
  significance: "Second most visited religious shrine in North India after Vaishno Devi.",
  bestTime: "October to March",
  festivals: "Hanuman Jayanti, Ram Navami",
  state: "Bihar"
},
{
    id: "h11",
    name: "Shri Bade Hanuman Ji Temple",
    location: "Prayagraj, Uttar Pradesh, India",
    description: "This temple is exceptionally famous for its unique idol of Lord Hanuman in a reclining (sleeping) posture, which is a very rare depiction.\nThe temple is strategically located near the Triveni Sangam (the confluence of Ganga, Yamuna, and the mythical Saraswati rivers), making it highly sacred.\nThe unique tradition here is that the idol is partially submerged by the floodwaters of the Ganga River every monsoon, an event that is revered by devotees as the River Goddess coming to touch the Lord's feet.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705799/h11_rcb944.jpg",
    significance: "Only temple in India with a reclining idol of Hanuman; located near the Triveni Sangam.",
    bestTime: "October to March",
    festivals: "Kumbh Mela, Hanuman Jayanti",
    state: "Uttar Pradesh"
  },
  {
    id: "h12",
    name: "Panchamukhi Hanuman Temple",
    location: "Rameswaram, Tamil Nadu, India",
    description: "Located in the holy town of Rameswaram, this temple is dedicated to Panchamukhi Hanuman (five-faced Hanuman), a rare form representing strength, courage, and power.\nThe five faces are those of Hayagriva, Narasimha, Garuda, Varaha, and the original Hanuman, each symbolizing a distinct quality or power.\nThe temple is also believed to have stones floating in the water, which are said to be the remnants of the Rama Setu bridge built by Hanuman's army to reach Lanka.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705799/h12_zuwm7v.jpg",
    significance: "Dedicated to the five-faced (Panchamukhi) form of Hanuman; associated with Rama Setu.",
    bestTime: "October to March",
    festivals: "Hanuman Jayanti, Ram Navami",
    state: "Tamil Nadu"
  },
  {
    id: "h13",
    name: "Yantrodharaka Hanuman Temple",
    location: "Hampi, Karnataka, India",
    description: "This powerful and ancient temple is located on the Anjaneya Hill in Hampi, which many believe is the actual birthplace of Lord Hanuman.\nThe name Yantrodharaka refers to the main idol, a circular yantra (mystical diagram) that features a figure of Hanuman seated in a meditative posture surrounded by twelve monkeys.\nThe temple commemorates the meeting of Lord Rama and Hanuman and is a key pilgrimage spot within the UNESCO World Heritage site of Hampi.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705798/h13_and0nx.jpg",
    significance: "Believed to be the birthplace of Hanuman; known for its Yantrodharaka (meditative) form.",
    bestTime: "October to March",
    festivals: "Hanuman Jayanti, Vijayadashami",
    state: "Karnataka"
  }
        ],
      },
    },
  },

"Lord Ganesha": {
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147355/ganesha_xgclup.png",
  temples: {
    "Ganesha Temples": {
      image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147355/ganesha_xgclup.png",
      description: "Sacred temples dedicated to the Remover of Obstacles",
      temples: [
        {
          id: "av1",
          name: "Mayureshwar Temple",
          location: "Morgaon, Pune, Maharashtra, India",
          description: "The Mayureshwar Temple is the foremost and traditionally the starting point of the Ashtavinayak Yatra, the pilgrimage circuit of eight revered Ganesha temples in Maharashtra.\nLegend describes that Lord Ganesha, in his form as Mayureshwar, rode a peacock (Mayura) to defeat the formidable demon Sindhu. This victory established Ganesha's power as the remover of obstacles and ensured that all undertakings would begin with his worship.\nThe temple's central location in the Bhima River valley solidifies its status as the most important shrine in the Ashtavinayak group.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147360/g1_lhfyjh.png",
          significance: "Lord Ganesha here is known as Mayureshwar, riding a peacock.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "av2",
          name: "Siddhivinayak Temple",
          location: "Siddhatek, Ahmednagar, Maharashtra, India",
          description: "This temple, dedicated to Siddhivinayak, is believed to be the place where Lord Vishnu achieved siddhi (perfection or success) before battling the demons Madhu and Kaitabha.\nThe idol of Ganesha here is uniquely positioned with its trunk turned to the right, a rare form known as Siddhi Vinayak, considered exceptionally powerful and rigorous to worship.\nDevotees visit this shrine specifically to achieve success and fulfillment in their personal and professional endeavors.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147359/g2_u8wwqo.png",
          significance: "Worshipped by many for achieving success in endeavors.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "av3",
          name: "Ballaleshwar Temple",
          location: "Pali, Raigad, Maharashtra, India",
          description: "The Ballaleshwar Temple is the only Ganesha shrine in the Ashtavinayak group named after a devotee, signifying the Lord's deep love for his followers.\nThe story tells of a boy named Ballal whose unwavering devotion to Ganesha angered his family, leading them to tie him to a tree. Ganesha, pleased by Ballal's faith, appeared before him and stayed there in the form of the deity.\nThe temple structure and idol are shaped to resemble the mountain upon which Ballal was left, honoring his persistent devotion.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147363/g3_lgy5lk.png",
          significance: "Represents unwavering devotion and faith.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "av4",
          name: "Varadavinayak Temple",
          location: "Mahad, Raigad, Maharashtra, India",
          description: "The Varadavinayak (Giver of Boons) Temple is famous for granting boons and fulfilling the sincere wishes of its devotees.\nThe legend is centered around the deity's self-manifested form found in a lake. A unique aspect of this temple is the Nandadeep, an oil lamp that is said to have been continuously burning inside the shrine since 1892.\nThis temple is considered especially auspicious for those seeking to start a new life, marriage, or family.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147358/g4_ntc9eg.png",
          significance: "Ganesha here is called Varadavinayak, giver of blessings.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "av5",
          name: "Chintamani Temple",
          location: "Theur, Pune, Maharashtra, India",
          description: "The Chintamani Temple in Theur is renowned for its power to remove the worries (Chinta) and anxieties of the devotees, granting them profound peace of mind.\nLegend states that Lord Ganesha recovered the mythical Chintamani jewel from the greedy sage Gana, a jewel that could grant wishes and remove worry.\nGanesha is said to have rested at this spot after the recovery. The shrine is a tranquil destination, widely sought after by those burdened by stress and seeking mental clarity.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147358/g5_dzbx60.png",
          significance: "Also called Chintamani Vinayak, giver of peace.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "av6",
          name: "Girijatmaj Temple",
          location: "Lenyadri, Pune, Maharashtra, India",
          description: "The Girijatmaj Temple is uniquely located within a Buddhist cave complex atop a hill, blending spiritual traditions and architectural heritage.\nThe name Girijatmaj means the 'son of Girija' (Parvati), referring to the belief that Goddess Parvati performed penance in this cave to become Ganesha's mother. The main deity is carved directly into the rock wall of the cave.\nThe climb of nearly 300 steps is an essential part of the pilgrimage, leading to the serene, natural setting of the Lord's supposed childhood.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147357/g6_v7d3df.png",
          significance: "Ganesha worshipped here is called Girijatmaj, son of Parvati.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "av7",
          name: "Vighneshwar Temple",
          location: "Ozar, Pune, Maharashtra, India",
          description: "The Vighneshwar Temple is dedicated to Vighneshwar (Lord of Obstacles), revered for his power to remove all difficulties (Vighna) from a devotee's path.\nThe temple's legend involves Lord Ganesha defeating the demon Vighnasura, who was sent by Indra to destroy the sacrifices of the sages.\nAfter his defeat, the demon pleaded with Ganesha to adopt his name, thus giving the Lord the title Vighneshwar. The beautiful structure features a golden dome and intricate carvings.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147356/g7_bkrqcu.png",
          significance: "Also called Vighneshwar Vinayak, remover of obstacles.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "av8",
          name: "Mahaganapati Temple",
          location: "Ranjangaon, Pune, Maharashtra, India",
          description: "The Mahaganapati Temple is associated with the story of Lord Shiva worshipping Ganesha before defeating the powerful demon Tripurasura.\nGanesha, in the form of Mahaganapati, is depicted with ten hands and is considered one of his most powerful manifestations. The architecture of the temple is stunning, with the original structure believed to have been built by Shiva himself.\nThe sheer size and grandeur make it a major spiritual center, symbolizing Ganesha's cosmic power.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147357/g8_cw2ixf.png",
          significance: "Known as Mahaganapati Vinayak, a powerful form of Ganesha.",
          bestTime: "Ganesh Chaturthi",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "g1",
          name: "Dagdusheth Halwai Ganpati Temple",
          location: "Pune, Maharashtra, India",
          description: "This temple is one of the most famous and highly respected Ganesha shrines outside the Ashtavinayak circuit, built by the rich sweetmeat vendor (Halwai), Dagdusheth.\nThe temple is renowned for its stunning, beautifully adorned gold idol of Lord Ganesha, which is displayed during the massive annual Ganesh Chaturthi celebrations.\nIt is a major center of devotion, philanthropy, and civic activity, becoming a symbol of Pune's cultural and spiritual identity.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147367/g9_voqkq4.png",
          significance: "A major center of devotion and philanthropy.",
          bestTime: "Ganesh Chaturthi (August-September)",
          festivals: "Ganesh Chaturthi",
          state: "Maharashtra"
        },
        {
          id: "g2",
          name: "Ganesh Tok Temple",
          location: "Gangtok, Sikkim, India",
          description: "Perched atop a small hill, the Ganesh Tok Temple is famous not only as a shrine to Lord Ganesha but also for offering panoramic and breathtaking views of the city of Gangtok and the majestic Kanchenjunga mountain range.\nThe temple is small and devotees often have to crawl to get a darshan (view) of the deity. Its unique setting and altitude make it a spiritually uplifting experience, where Ganesha is worshipped amidst the natural beauty of the Himalayas.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147356/g10_yesouu.png",
          significance: "Popular among devotees for blessings and scenic views.",
          bestTime: "October to March",
          festivals: "Ganesh Chaturthi",
          state: "Sikkim"
        },
        {
          id: "g3",
          name: "Kanipakam Vinayaka Temple",
          location: "Chittoor, Andhra Pradesh, India",
          description: "The Kanipakam Vinayaka Temple is an ancient and historic shrine where the idol of Lord Ganesha is widely believed to be miraculously growing in size.\nThe story of its origin involves three brothers whose wells dried up until their tools hit a stone, from which blood flowed, turning the water into a sacred stream.\nThe idol is self-manifested (Swayambhu), and the temple is a sacred center where devotees take a holy dip in the tank to absolve their sins and perform self-oaths.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147354/g11_nu4rk9.png",
          significance: "Devotees believe in miracles and divine blessings.",
          bestTime: "September to February",
          festivals: "Ganesh Chaturthi, Vinayaka Chaviti",
          state: "Andhra Pradesh"
        },
        {
          id: "g4",
          name: "Varasiddhi Vinayaka Temple",
          location: "Bengaluru, Karnataka, India",
          description: "The Varasiddhi Vinayaka Temple is one of the most prominent Ganesha shrines in Bengaluru, where Ganesha is worshipped as the grantor of wishes (Vara) and success (Siddhi).\nThe temple is renowned among locals for the belief that sincere prayers offered here are quickly fulfilled.\nThe structure is built in the traditional Dravidian style and is a major hub of religious and cultural activity, especially during the annual Ganesh Chaturthi festival.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147354/g12_li4a5l.png",
          significance: "Famous among locals and tourists alike for blessings.",
          bestTime: "August to October",
          festivals: "Ganesh Chaturthi",
          state: "Karnataka"
        },
        {
          id: "g5",
          name: "Moti Dungri Ganesh Temple",
          location: "Jaipur, Rajasthan, India",
          description: "Located within the complex of the Moti Dungri fort and palace, this temple is a highly significant pilgrimage site in Jaipur.\nThe unique idol of Lord Ganesha is believed to be over 500 years old, brought from Udaipur by the royal family. The temple is known for its beautiful structure resembling a small, modern castle and is revered as the guardian of the city.\nTuesdays are considered highly auspicious for worship here, drawing large crowds of devotees.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147355/g13_o6xiqo.png",
          significance: "Significant pilgrimage site in Rajasthan.",
          bestTime: "September to November",
          festivals: "Ganesh Chaturthi",
          state: "Rajasthan"
        }
      ]
    },
  }
},
"Lord Murugan": {
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147315/murugan_djfmgk.png",
  temples: {
    "Aarupadai Veedu Temples": {
      image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147315/murugan_djfmgk.png",
      description: "Famous temples dedicated to the God of War and Victory",
      temples: [
        {
          id: "aru1",
          name: "Palani Murugan Temple",
          location: "Palani, Tamil Nadu, India",
          description: "The Palani Murugan Temple is one of the most famous and highly revered shrines, dedicated to Lord Murugan in his ascetic form as Dandayuthapani.\n Legend says Murugan came to Palani after a dispute with his family over a divine fruit, abandoning his worldly possessions and standing here as a renunciate.\nPilgrims often climb the sacred hill, some even carrying kavadi (ceremonial burdens), to seek the Lord's blessings and experience his powerful presence as the embodiment of wisdom and austerity.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147323/m1_vrxbv9.png",
          significance: "Pilgrims climb the hill to seek Lord Murugan's blessings.",
          bestTime: "November to February",
          festivals: "Thai Poosam, Panguni Uthiram",
          state: "Tamil Nadu"
        },
        {
          id: "aru2",
          name: "Swamimalai Murugan Temple",
          location: "Swamimalai, Tamil Nadu, India",
          description: "The Swamimalai Murugan Temple is unique and profoundly significant as it is believed to be the place where Lord Murugan, as a child, initiated his father Lord Shiva into the meaning of the sacred Pranava Mantra (Om).\n Due to this act, Murugan is revered as Swaminatha (Teacher of Shiva) and Gurumoorthy. This profound legend highlights Murugan's deep wisdom and makes the temple a powerful spiritual center for those seeking divine knowledge and understanding.",
          image:  "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147321/m2_y99ebg.png",
          significance: "One of the six holy abodes of Murugan.",
          bestTime: "November to February",
          festivals: "Skanda Shasti, Panguni Uthiram",
          state: "Tamil Nadu"
        },
        {
          id: "aru3",
          name: "Thiruchendur Murugan Temple",
          location: "Thiruchendur, Tamil Nadu, India",
          description: "SThe Thiruchendur Murugan Temple is a stunning seaside temple, uniquely located on the shores of the Bay of Bengal.\nThis site is revered as the actual battleground where Lord Murugan defeated the powerful demon Soorapadman, fulfilling his divine purpose. The temple complex is built right on the beach, creating a magnificent backdrop for devotion.\n Its location and historical significance make it a vital pilgrimage site, particularly during the Skanda Shasti festival, which commemorates Murugan's victory.",
          image:  "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147320/m3_y4jzta.png",
          significance: "Known as the battleground of good versus evil.",
          bestTime: "October to February",
          festivals: "Skanda Shasti, Panguni Uthiram",
          state: "Tamil Nadu"
        },
        {
          id: "aru4",
          name: "Pazhamudircholai Murugan Temple",
          location: "Madurai, Tamil Nadu, India",
          description: "Pazhamudircholai Murugan Temple is nestled in a lush green valley amidst hills and dense forests, creating a serene and picturesque spiritual environment.\n It is the sixth of the six holy abodes (Arupadaiveedu) of Lord Murugan. Legend has it that Murugan, disguised as an old man, once tested the wisdom and devotion of the great poetess Avvaiyar here.\nThe temple is famed for its natural beauty, abundant fruit trees, and the clear spring waters, offering devotees a tranquil pilgrimage experience.",
          image:  "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147330/m4_ie62i0.png",
          significance: "Popular for nature walks and divine blessings.",
          bestTime: "October to March",
          festivals: "Skanda Shasti, Panguni Uthiram",
          state: "Tamil Nadu"
        },
        {
          id: "aru5",
          name: "Thiruthani Murugan Temple",
          location: "Thiruthani, Tamil Nadu, India",
          description: "The Thiruthani Murugan Temple is majestically situated atop a hill, visited by thousands of pilgrims annually and considered one of the six sacred abodes (Arupadaiveedu) of Lord Murugan.\nThis is believed to be the spot where Lord Murugan's anger subsided after his battle with the demon Soorapadman, finding peace and tranquility.\nThe name Thiruthani itself signifies a place of peace and calm. The temple is especially revered for granting peace of mind and curing illnesses.",
          image:  "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147328/m5_w6w69b.png",
          significance: "Part of the sacred Arupadaiveedu pilgrimage.",
          bestTime: "October to March",
          festivals: "Skanda Shasti, Panguni Uthiram",
          state: "Tamil Nadu"
        },
        {
          id: "aru6",
          name: "Thiruparankundram Murugan Temple",
          location: "Thiruparankundram, Tamil Nadu, India",
          description: "Thiruparankundram Murugan Temple is an ancient rock-cut cave temple, believed to be the site where Lord Murugan married Deivanai, the daughter of Indra, after his victory over the demon Surapadman.\nThis makes it a sacred site for unions and celebrations. The temple is one of the six holy abodes (Arupadaiveedu) and features a unique blend of rock-cut architecture with later additions.\n It is a major pilgrimage center, particularly for newlyweds and those seeking blessings for marriage.",
          image:  "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147325/m6_zisylg.png",
          significance: "One of the six sacred abodes.",
          bestTime: "October to February",
          festivals: "Skanda Shasti, Panguni Uthiram",
          state: "Tamil Nadu"
        },
        {
    id: "aru7",
    name: "Batu Caves Murugan Temple",
    location: "Selangor, Kuala Lumpur, Malaysia",
    description: "One of the most famous Hindu shrines outside India, the complex features a massive 42.7-meter-tall golden statue of Lord Murugan at the entrance.\nThe temple is situated within a limestone hill, and pilgrims must climb 272 steps to reach the Cathedral Cave, which houses the main shrine.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705798/m7_cay94e.jpg",
    significance: "Site of the world's second-tallest Murugan statue and main focus of the spectacular Thaipusam festival in Malaysia.",
    bestTime: "January to March, especially during Thaipusam",
    festivals: "Thaipusam",
    state: "Selangor (Malaysia)"
  },
  {
    id: "aru8",
    name: "Sri Thendayuthapani Temple",
    location: "Tank Road, Singapore",
    description: "Also known as the Chettiar Temple, this is one of Singapore's oldest and most historically significant Hindu temples, founded by the Nattukottai Chettiar community in 1859.\nThe temple is dedicated to Lord Murugan, here worshipped as Thendayuthapani (the one wielding a staff).",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705798/m8_qffbbo.jpg",
    significance: "A key religious institution for the Tamil community in Singapore and the end point of the annual Thaipusam procession.",
    bestTime: "October to March",
    festivals: "Thaipusam",
    state: "Singapore"
  },
  {
    id: "aru9",
    name: "Marudamalai Murugan Temple",
    location: "Coimbatore, Tamil Nadu, India",
    description: "This popular temple is situated on a picturesque hill, part of the Western Ghats, overlooking the city of Coimbatore.\nIt is dedicated to Murugan as Dhandayuthapani and is famed for the medicinal properties of the sacred water source (Theertham) found here, believed to cure various ailments.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705798/m9_whc80a.jpg",
    significance: "Known for the deity's power to cure diseases; a highly revered hilltop shrine outside the Arupadaiveedu.",
    bestTime: "October to March",
    festivals: "Skanda Shasti, Thai Poosam",
    state: "Tamil Nadu"
  },
  {
    id: "aru10",
    name: "Arulmigu Balathandayuthapani Temple",
    location: "Penang, Malaysia",
    description: "Perched atop a hill (Thanneermalai or Waterfall Hill), this is the largest Murugan temple in Malaysia.\nThe temple complex is a modern marvel of Dravidian architecture, involving a climb of over 500 steps. It is a major focal point for the annual Thaipusam festival in Penang.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760705798/m10_gdlbiv.jpg",
    significance: "Known as the largest Murugan temple in Malaysia and a primary site for Thaipusam rituals.",
    bestTime: "January to March, especially during Thaipusam",
    festivals: "Thaipusam, Skanda Shasti",
    state: "Penang (Malaysia)"
  }
      ]
    },
    
  }
},
  "Lord Ayyappa": {
    image:
      "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147367/ayyapa_btcxp1.png",
    temples: {
      "Ayyappa Temples": {
        image:
          "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147367/ayyapa_btcxp1.png",
        description:
          "Sacred temples dedicated to Lord Ayyappa across South India",
        temples: [
         {
  id: "ay1",
  name: "Sabarimala Ayyappa Temple",
  location: "Pathanamthitta, Kerala, India",
  description: "The most famous shrine, Sabarimala, is dedicated to Lord Ayyappa in his Brahmachari (celibate) form after defeating the demoness Mahishi.\nThe primary legend recounts that the Lord, as the foster son of the Pandalam King, went to the forest to fetch a tigress's milk to cure the Queen. Upon realizing his divine nature,\nhe retreated to Sabarimala to meditate, instructing his devotees to reach him by enduring the strict Vratham (vow) and ascending the sacred 18 steps.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147371/ay1_nkzhjy.png",
  significance: "Main pilgrimage site of Lord Ayyappa, symbolizing unity and devotion.",
  bestTime: "November to January (Mandala-Makaravilakku season)",
  festivals: "Mandala Pooja, Makaravilakku",
  state: "Kerala"
},
{
  id: "ay2",
  name: "Achankovil Sastha Temple",
  location: "Kerala, India",
  description: "The ancient Achankovil temple is one of the five major sacred abodes of Lord Sastha (Ayyappa), believed to have been consecrated by the legendary sage Parasurama.\nThe deity here is revered as Grihastha Ayyappa (Householder Ayyappa), worshipped with his consorts, Purna and Pushkala.\nA significant feature is that the idol holds a special sandal paste and a medicinal preparation believed to cure snake bites. This temple is deeply tied to indigenous traditions and medicinal folklore.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147372/ay2_jahtmn.png",
  significance: "Important shrine of Lord Ayyappa known for medicinal traditions.",
  bestTime: "December to February",
  festivals: "Annual Festival in Dhanu month",
  state: "Kerala"
},
{
  id: "ay3",
  name: "Kulathupuzha Sastha Temple",
  location: "Kollam, Kerala, India",
  description: "The Kulathupuzha temple is a unique shrine where Lord Ayyappa is worshipped exclusively as a child, known as Bala Sastha.\nLegend suggests that the young Ayyappa was once found by the King of Pandalam near the river at this spot. Devotees primarily visit this temple seeking blessings for their children's well-being and education.\nThe temple's presence near the river also features a unique custom of offering fish to a pond believed to be sacred to the deity.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147371/ay3_explm6.png",
  significance: "Unique form of Ayyappa worshipped as a child deity.",
  bestTime: "April to June",
  festivals: "Vishu Mahotsavam",
  state: "Kerala"
},
{
  id: "ay4",
  name: "Aryankavu Sastha Temple",
  location: "Kollam, Kerala, India",
  description: "Aryankavu is celebrated for depicting Lord Ayyappa in his youthful form, known as Tirukkalyanam or royal consort.\nThe central story here focuses on Ayyappa's divine marriage proposal to a woman from the Saurashtra community. The elaborate Thrikkalyanam festival recreates this marriage ritual annually, which also involves rituals reflecting the deity's journey.\nThis temple represents Ayyappa's life stage between childhood (Kulathupuzha) and asceticism (Sabarimala).",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147368/ay4_fsvvgy.png",
  significance: "Lord Ayyappa is worshipped as a teenager here, highlighting his different life stages.",
  bestTime: "November to January",
  festivals: "Thrikkalyanam Festival",
  state: "Kerala"
},
{
  id: "ay5",
  name: "Pandalam Palace Ayyappa Temple",
  location: "Pandalam, Kerala, India",
  description: "The Pandalam Palace Temple is the ancestral house of the royal family who discovered and raised Lord Ayyappa, known here as Manikandan.\nThis is the place from where Ayyappa began his journey to the forest. The sacred casket (Thiruvabharanam) containing the Lord's ornaments and clothes is stored here and is carried in a grand procession to Sabarimala for the Makaravilakku festival.\n It serves as a crucial ceremonial starting point for the final leg of the pilgrimage.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147367/ay5_lqimyp.png",
  significance: "Important for devotees performing the pilgrimage to Sabarimala.",
  bestTime: "November to January",
  festivals: "Makaravilakku, Mandala Pooja",
  state: "Kerala"
},
{
  id: "ay6",
  name: "Nilakkal Sabarimala Temple",
  location: "Pathanamthitta, Kerala, India",
  description: "Nilakkal is a historically important shrine, now serving as a major base camp and staging area on the route to Sabarimala.\nAncient belief holds that the original Nilakkal temple was lost in the forest and rediscovered in recent history. Pilgrims performing the initial part of the Sabarimala pilgrimage often break coconuts and offer prayers here.\n It acts as an essential spiritual and logistical stop, preparing the devotee for the strenuous trek ahead.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147367/ay6_exjyll.png",
  significance: "Helps devotees spiritually prepare for Sabarimala pilgrimage.",
  bestTime: "November to January",
  festivals: "Mandala-Makaravilakku",
  state: "Kerala"
},
{
  id: "ay7",
  name: "Pampa River Temple",
  location: "Pathanamthitta, Kerala, India",
  description: "The Pampa River is considered the holy Ganga of the South, and the small temple on its banks is a vital stop for all Sabarimala pilgrims.\nLegend holds that Lord Ayyappa was discovered as an infant on the river bank by the King of Pandalam.\nDevotees take a sacred dip in the Pampa River for purification before ascending the final leg to Sabarimala, believing the bath washes away their sins.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147368/ay7_nabaic.png",
  significance: "Essential stop for spiritual purification before Sabarimala pilgrimage.",
  bestTime: "November to January",
  festivals: "Mandala-Makaravilakku",
  state: "Kerala"
},{
    id: "ay8",
    name: "Erumely Sree Dharma Sastha Temple",
    location: "Kottayam, Kerala, India",
    description: "Erumely holds a pivotal place in the Ayyappa mythology as the spot where Lord Manikandan fought and defeated the demoness Mahishi before proceeding to Sabarimala.\nThe temple complex uniquely houses shrines for both Lord Ayyappa (Dharma Sastha) and his trusted Muslim companion, Vavar Swamy, symbolizing profound religious harmony.\nThis location is famous for the vibrant Petta Thullal ritual, a ceremonial, ecstatic dance performed by pilgrims to commemorate the Lord's victory and his joyous return with the captured demoness's associates.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760707245/ay8_vdfo1d.jpg",
    significance: "Site of Ayyappa's fight with the demoness Mahishi; symbolizes Hindu-Muslim unity (Vavar Shrine nearby).",
    bestTime: "November to January (Mandala-Makaravilakku season)",
    festivals: "Petta Thullal",
    state: "Kerala"
  },
  {
    id: "ay9",
    name: "Thamaramkulangara Sree Dharma Sastha Temple",
    location: "Tripunithura, Ernakulam, Kerala, India",
    description: "This venerable urban Sastha temple, situated near the royal town of Tripunithura, is one of the oldest in the region, believed to have been established by a devotee who was unable to undertake the arduous pilgrimage to Sabarimala.\nThe deity, consecrated facing west, is known for granting wishes and removing obstacles for those starting their fast for the main pilgrimage\nThe temple's serene atmosphere and regular traditional rituals, including the special Udayasthamana Pooja, make it a spiritual beacon for local Ayyappa devotees.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760707245/ay9_veb88w.jpg",
    significance: "Known for the Udayasthamana Pooja (dawn-to-dusk worship) and its unique architectural style.",
    bestTime: "October to March",
    festivals: "Annual Utsavam in Kumbham (Feb/Mar)",
    state: "Kerala"
  },
  {
    id: "ay10",
    name: "Mahalingapuram Ayyappan Temple",
    location: "Chennai, Tamil Nadu, India",
    description: "Founded in the mid-20th century, the Mahalingapuram temple was established to provide a spiritual focal point for the massive community of Ayyappa devotees residing outside Kerala, particularly in Chennai.\nConstructed in the authentic traditional Kerala architectural style, including the eighteen sacred steps (Pathinettam Padi), it serves as a crucial ceremonial center.\nFor many pilgrims in Tamil Nadu, this temple acts as the primary location to observe the 41-day Mandala Vratham before embarking on the journey to Sabarimala.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760707245/ay10_ewl1yv.jpg",
    significance: "A central hub for Ayyappa devotees in Tamil Nadu, facilitating the vratham (vow) for Sabarimala pilgrims.",
    bestTime: "Throughout the year",
    festivals: "Mandala Pooja, Makaravilakku",
    state: "Tamil Nadu"
  },
  {
    id: "ay11",
    name: "Ponnambalamedu",
    location: "Periyar Tiger Reserve, Kerala, India",
    description: "Ponnambalamedu is a secluded, sacred hill located deep within the forest, shrouded in mystery and accessible only to a limited few.\nAccording to tradition, this remote spot is the eternal abode where Lord Ayyappa, in his Yogic form (Vanaprastha Sastha), meditates after his earthly mission was complete.\nThis hill is significant because it is the location of the celestial flame, the Makarajyothi, a star-like light visible to pilgrims from the Sabarimala Sannidhanam during the annual Makaravilakku festival, signifying the presence of the Lord.",
    image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1760707243/ay11_mw3o3o.jpg",
    significance: "The traditional spot from where the auspicious celestial light (Makarajyothi) is witnessed during the Makaravilakku festival.",
    bestTime: "Only visible during Makaravilakku festival (January)",
    festivals: "Makaravilakku",
    state: "Kerala"
  }
      ],
      },
    },
  },
  "Navagraha Temples": {
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147307/navagraha_v5uk7h.png",
  temples: {
    "Navagraha Temples": {
      image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147307/navagraha_v5uk7h.png",
      description: "The nine temples in Tamil Nadu dedicated to the nine celestial bodies",
      temples: [
        {
          id: "ng1",
          name: "Suryanar Temple",
          location: "Thanjavur, Tamil Nadu, India",
          description: "The Suryanar Temple is unique among the Navagraha shrines as it is exclusively dedicated to the Sun God, Surya, with separate sub-shrines for the other eight planets.\nThe central legend here involves a group of sages who incurred the wrath of Lord Brahma and were cursed to suffer various ailments on Earth.\nFollowing Lord Shiva's advice, they worshipped Surya and the other eight planets here, receiving liberation from their afflictions. Hence, devotees flock to this temple to mitigate negative planetary effects and seek health and fortune from the primary source of life and energy, Lord Surya.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147315/n1_f5ttwo.png",
          significance: "Central temple for Sun worship and all nine planetary deities",
          bestTime: "November to February",
          festivals: "Ratha Saptami, Solar eclipses",
          state: "Tamil Nadu"
        },
        {
          id: "ng2", 
          name: "Chandran Temple",
          location: "Thingalur, Tamil Nadu, India",
          description: "Dedicated to Chandra (The Moon God), this ancient Shiva temple is specifically known for worshipping the lunar deity who represents the mind, emotions, and mother.\nThe temple's legend is tied to the sage Markandeya, who was saved from the cycle of rebirth by Lord Shiva at this site, leading to the lunar deity being honored here.\nWorshipping Chandra at Thingalur is believed to calm the mind, ward off mental distress, and restore emotional and physical well-being, particularly for those whose horoscope is affected by an unfavorable Moon position.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147317/n2_umycef.png",
          significance: "Worship for mental peace and emotional stability",
          bestTime: "November to February", 
          festivals: "Pradosham, Full moon days",
          state: "Tamil Nadu"
        },
        {
          id: "ng3",
          name: "Angarakan Temple", 
          location: "Vaitheeswaran Koil, Tamil Nadu, India",
          description: "This prominent shrine is primarily a Shiva temple, but the unique significance lies in the separate sanctum dedicated to Angaraka (Mars/Mangal).\nThe mythology states that Angaraka, who suffered from leprosy, was cured by the presiding deity, Lord Shiva (known here as Vaitheeswaran, the 'God of Healing').\n Therefore, the temple is famed for its sacred tank, believed to cure all ailments, and for mitigating the severe Mangal Dosha in one's horoscope, ensuring good health, wealth, and marriage prospects for its fervent devotees.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147314/n3_vfzuig.png",
          significance: "Removes Mangal dosha and cures skin diseases",
          bestTime: "November to February",
          festivals: "Maha Shivratri, Tuesdays",
          state: "Tamil Nadu"
        },
        {
          id: "ng4",
          name: "Budhan Temple",
          location: "Thiruvenkadu, Tamil Nadu, India", 
          description: "The Budhan (Mercury) shrine is found within the vast precincts of the ancient Shiva temple at Thiruvenkadu.\nAccording to the sthala puranam (local mythology), Lord Shiva, in a fierce form, performed a cosmic dance called the Tripura Samhara Tandava at this site.\n Lord Budha, the deity of intellect and wisdom, is said to have gained his divine status and powers after intense meditation here.\nPilgrims visit this temple specifically to seek blessings for sharp memory, eloquence, success in education, and prosperity in business endeavors.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147312/n4_pixsvk.png",
          significance: "Improves knowledge, speech, and business acumen",
          bestTime: "November to February",
          festivals: "Wednesdays, Maha Shivratri",
          state: "Tamil Nadu"
        },
        {
          id: "ng5", 
          name: "Guru Temple",
          location: "Alangudi, Tamil Nadu, India",
          description: "Alangudi is famous as the temple dedicated to Guru (Jupiter/Brihaspati), the celestial preceptor of the Gods.\nThe legend of this site focuses on the great deluge (Pralaya), where the entire world was submerged, but the boat (Al) carrying the presiding deity miraculously landed safely here (Kudi).\nThe temple is hence known as Alangudi. Worshipping Guru here is particularly powerful during the Guru Peyarchi (Jupiter's transit) to counter afflictions, granting success in profession, knowledge, and providing the blessing of progeny.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147311/n5_ezo89a.png",
          significance: "Blesses with knowledge, children, and spiritual growth",
          bestTime: "November to February",
          festivals: "Guru Peyarchi, Thursdays",
          state: "Tamil Nadu"
        },
        {
          id: "ng6",
          name: "Sukran Temple",
          location: "Kanjanur, Tamil Nadu, India",
          description: "Kanjanur is dedicated to Sukra (Venus), the celestial preceptor of the demons, who governs material wealth, luxury, and fine arts.\nThe presiding deity is Lord Shiva, and the sthala puranam narrates that Shukra was cursed to take the form of the Sivalingam (phallic idol) here.\nTherefore, the veneration of Shukra is conducted through the worship of Lord Shiva himself. Devotees visit this shrine seeking relief from planetary imbalances related to Venus, hoping for blessings of prosperity, happiness, artistic talent, and fulfilling marital life.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147318/n6_j8xxx8.png",
          significance: "Brings prosperity, love, and material comforts",
          bestTime: "November to February",
          festivals: "Fridays, Shukra Peyarchi",
          state: "Tamil Nadu"
        },
        {
          id: "ng7",
          name: "Sani Temple",
          location: "Thirunallar, Tamil Nadu, India",
          description: "Thirunallar is the foremost temple dedicated to Sani (Saturn), the planet of discipline, justice, and detachment.\nThe most famous legend tells the story of King Nala, who suffered immense hardships due to the adverse transit of Saturn but was finally relieved of all his sorrows after bathing in the sacred temple tank and worshipping Lord Sani here.\n Due to this history, millions of pilgrims come here to mitigate the intense periods of Sani Dosha or Sani's seven-and-a-half-year cycle (Sade Sati), seeking relief and spiritual fortitude.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147312/n7_gdpcny.png",
          significance: "Reduces Saturn dosha and brings justice",
          bestTime: "November to February", 
          festivals: "Saturdays, Sani Peyarchi",
          state: "Tamil Nadu"
        },
        {
          id: "ng8",
          name: "Rahu Temple", 
          location: "Thirunageswaram, Tamil Nadu, India",
          description: "This temple is primarily a shrine for Lord Shiva, but it is one of the most significant places for worshipping the shadow planet Rahu (North Lunar Node).\n The legend states that Rahu worshipped Lord Shiva here and was granted the blessing of an independent shrine.\nThe miraculous aspect of this temple is that during the Abhishekam (ritual bathing), the milk poured over the Rahu idol miraculously turns blue, confirming the deity's presence.\nDevotees visit during Rahu Kalam (Rahu's time) to remove snake curses, obstacles, and to gain success in unexpected endeavors.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147312/n8_jwg8gs.png",
          significance: "Mitigates Rahu dosha and brings sudden gains",
          bestTime: "November to February",
          festivals: "Rahu Kalam prayers, eclipses",
          state: "Tamil Nadu"
        },
        {
          id: "ng9",
          name: "Ketu Temple",
          location: "Keezhperumpallam, Tamil Nadu, India", 
          description: "Keezhperumpallam is the sacred abode of the shadow planet Ketu (South Lunar Node), who governs spiritual progress and liberation.\nThe legend of this temple recounts that Ketu, afflicted by a curse, worshipped the presiding deity, Lord Shiva, in the form of the Naganatha Swamy (Lord of Snakes).\nPleased with his devotion, Shiva granted him absolution and a prominent place of worship. Pilgrims visit to alleviate Ketu Dosha, seeking profound spiritual knowledge, renunciation, and ultimate salvation from the cycle of birth and death.",
          image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147310/n9_xenow1.png",
          significance: "Removes Ketu dosha and enhances spirituality",
          bestTime: "November to February",
          festivals: "Ketu prayers, eclipses", 
          state: "Tamil Nadu"
        }
      ]
    },
  }
},
};

function flattenTempleData(data) {
  const temples = [];

  Object.entries(data).forEach(([deityName, deityData]) => {
    if (deityData.temples) {
      Object.entries(deityData.temples).forEach(([categoryName, categoryData]) => {
        if (categoryData.temples && Array.isArray(categoryData.temples)) {
          categoryData.temples.forEach((temple) => {
            temples.push({
              ...temple,
              deity: deityName,
              category: categoryName, // This is key - "Arupadaiveedu" or "Murugan Temples"
              subcategory: null,
              state: temple.state || extractState(temple.location),
            });
          });
        }
      });
    }
  });

  return temples;
}

function extractState(location) {
  if (!location) return null;
  const parts = location.split(",").map((part) => part.trim());
  if (parts.length >= 2) {
    return parts[parts.length - 2];
  }
  return null;
}

async function seedDatabase() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/temple-discovery",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB");

    // Clear existing data
    await Temple.deleteMany({});
    console.log("Cleared existing temple data");

    // Flatten and insert temples
    const temples = flattenTempleData(templeData);
    console.log(`Preparing to insert ${temples.length} temples`);

    // Insert temples one by one to handle any errors
    const insertedTemples = [];
    for (const templeData of temples) {
      try {
        const temple = new Temple(templeData);
        const saved = await temple.save();
        insertedTemples.push(saved);
        console.log(
          `✓ Inserted: ${templeData.name} (ID: ${saved._id}, Custom ID: ${saved.id})`
        );
      } catch (error) {
        console.error(`✗ Failed to insert ${templeData.name}:`, error.message);
      }
    }

    console.log(`\n✓ Successfully inserted ${insertedTemples.length} temples`);

    // Verification - show actual IDs
    const verification = await Temple.find({});
    console.log(`\n=== DATABASE VERIFICATION ===`);
    console.log(`Total temples in database: ${verification.length}`);

    verification.forEach((temple) => {
      console.log(`- ${temple.name}`);
      console.log(`  MongoDB _id: ${temple._id}`);
      console.log(`  Custom id: ${temple.id || "NONE"}`);
      console.log(`  Deity: ${temple.deity}`);
      console.log(`  Category: ${temple.category}\n`);
    });

    // Test Divya Desam query specifically
    const divyaDesamsTest = await Temple.find({
      deity: "Maha Avatars of Vishnu",
      category: "Vishnu (108 Divya Desams)",
    });
    console.log(`\n=== DIVYA DESAM TEST ===`);
    console.log(`Divya Desam temples found: ${divyaDesamsTest.length}`);
    divyaDesamsTest.forEach((temple) => {
      console.log(
        `- ${temple.name} (MongoDB ID: ${temple._id}, Custom ID: ${temple.id})`
      );
    });

    console.log("\n✓ Database seeding completed successfully!");
  } catch (error) {
    console.error("✗ Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

if (require.main === module) {
  seedDatabase();
}

async function fixImageUrls() {
  try {
    console.log('=== FIXING IMAGE URLS ===');
    
    // Fix Shiva temple images
    await Temple.updateMany(
      { deity: "Lord Shiva" },
      { $set: { "image": "https://i.pinimg.com/736x/db/7a/73/db7a73fb2a6d070099b8ae524f04bbd9.jpg" } }
    );
    
    // Fix Lakshmi temple images
    await Temple.updateMany(
      { deity: "Goddess Lakshmi" },
      { $set: { "image": "https://i.pinimg.com/736x/fd/fb/18/fdfb180e8f7f859824299e43dd1a37ab.jpg" } }
    );
    
    // Fix Ganesha temple images
    await Temple.updateMany(
      { deity: "Lord Ganesha" },
      { $set: { "image": "https://i.pinimg.com/736x/d4/e5/f6/d4e5f6789a0b1c2d3e4f567890123456.jpg" } }
    );
    
    // Fix Murugan temple images
    await Temple.updateMany(
      { deity: "Lord Murugan" },
      { $set: { "image": "https://i.pinimg.com/736x/e5/f6/78/e5f6789a0b1c2d3e4f56789012345678.jpg" } }
    );
    
    console.log('Image URLs fixed successfully');
  } catch (error) {
    console.error('Failed to fix image URLs:', error);
  }
}
module.exports = { seedDatabase, flattenTempleData };
