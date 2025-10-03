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
            description: "The largest functioning Hindu temple complex in the world, dedicated to Lord Ranganatha (Vishnu). The temple spans 156 acres and has seven concentric walls with 21 gopurams (towers). It's the foremost of the 108 Divya Desams.",
            image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
            significance: "Largest temple complex and first among 108 Divya Desams",
            bestTime: "November to February",
            festivals: "Vaikunta Ekadashi, Jyestabhishekam",
            state: "Tamil Nadu"
          },
          {
  id: "dd96",
  name: "Sri Venkateswara Swamy Temple(Tirupati)",
  location: "Tirupathi, Tirumala, Andhra Pradesh, India",
  description: "Famous temple dedicated to Lord Srinivasa Perumal (Balaji), attracting millions of pilgrims annually.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Most visited Divya Desam in Andhra Pradesh",
  bestTime: "September to January",
  festivals: "Brahmotsavam, Vaikunta Ekadashi",
  state: "Andhra Pradesh"
},
          {
  id: "dd2",
  name: "Sri Azhagiya Manavala Perumal Temple",
  location: "Thirukkozhi (Uraiyur), Trichy, Tamil Nadu, India",
  description: "Dedicated to Lord Azhagiya Manavala Perumal, renowned for Vaishnavite worship.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important Divya Desam with historic significance.",
  bestTime: "November to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Tamil Nadu"
},
{
  id: "dd3",
  name: "Sri Purushothaman Perumal Temple",
  location: "Thirukkarambanoor, Trichy, Tamil Nadu, India",
  description: "Dedicated to Lord Purushothaman Perumal, famous for its spiritual traditions.",
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
  description: "Temple dedicated to Lord Pundarikashan Perumal, celebrated for rituals and festivals.",
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
  description: "Dedicated to Lord Vadivazhagiya Nambi Perumal, famous for divine rituals.",
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
  description: "Dedicated to Lord Appakkudathaan Perumal, known for its spiritual significance.",
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
  description: "Dedicated to Lord Neelamega Perumal, famous for grand festivals and rituals.",
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
  description: "Temple dedicated to Lord Hara Saabha Vimocchana Perumal, celebrated for its spiritual rituals.",
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
  description: "Dedicated to Lord Aaduthurai Perumal, known for its rich Vaishnavite tradition.",
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
  description: "Dedicated to Lord Gajendra Varadha Perumal, famous for legends of devotion.",
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
  description: "Dedicated to Lord Valvil Ramar Perumal, known for its spiritual and cultural significance.",
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
  description: "Dedicated to Lord Aandu Alakkum Ayan Perumal, celebrated for rituals and festivals.",
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
  description: "Famous temple for Lord Saarangapani Perumal, known for its architectural grandeur.",
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
  description: "Dedicated to Lord Oppiliappa Perumal, famous for its Vaishnavite heritage.",
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
  description: "Temple dedicated to Lord Thirunarayoor Nambi Perumal, celebrated for divine legends.",
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
  description: "Dedicated to Lord Saranathan Perumal, known for spiritual significance.",
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
  description: "Famous for Lord Bhaktavatsala Perumal and Vaishnavite worship traditions.",
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
  description: "Dedicated to Lord Jaganatha Perumal, celebrated for rituals and festivals.",
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
  description: "Temple dedicated to Lord Kola Valvilli Ramar Perumal, significant in Vaishnavism.",
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
  description: "Dedicated to Lord Parimala Ranganatha Perumal, celebrated for divine rituals.",
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
  description: "Dedicated to Lord Vishnu as Brahmadesam Perumal, known for its ancient inscriptions and Dravidian architecture.",
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
  location: "Thiru Singavel Kundram, Ahobilam, Andhra Pradesh, India",
  description: "Temple dedicated to Lord Nava Narasimhar, a revered Divya Desam in Andhra Pradesh.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Significant Vaishnavite temple in Ahobilam region",
  bestTime: "September to January",
  festivals: "Vaikunta Ekadashi, Narasimha Jayanti",
  state: "Andhra Pradesh"
},
{
  id: "dd98",
  name: "Sri Kalyana Narayana Perumal Temple",
  location: "Thiru Dwaraka, Gujarat, India",
  description: "Sacred Divya Desam dedicated to Lord Kalyana Narayana Perumal, part of the Gujarat Vaishnavite shrines.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Only Gujarat-based Divya Desam",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Gujarat"
},
{
  id: "dd99",
  name: "Sri Ramar Temple",
  location: "Thiru Ayodhi, Uttar Pradesh, India",
  description: "Divya Desam dedicated to Lord Rama, known for its historical and spiritual significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Divya Desam in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Ram Navami, Vaikunta Ekadashi",
  state: "Uttar Pradesh"
},
{
  id: "dd100",
  name: "Sri Devaraja Perumal Temple",
  location: "Thiru Naimisaranyam, Uttar Pradesh, India",
  description: "Sacred Divya Desam dedicated to Lord Devaraja Perumal, known for its Vaishnavite heritage.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important pilgrimage site for devotees in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttar Pradesh"
},
{
  id: "dd101",
  name: "Sri Navamohana Krishna Perumal Temple",
  location: "Thiruvaaipadi (Aayarpadi), Uttar Pradesh, India",
  description: "Divya Desam dedicated to Lord Krishna as Navamohana Perumal, revered for its spiritual importance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Krishna temple in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Krishna Janmashtami, Vaikunta Ekadashi",
  state: "Uttar Pradesh"
},
{
  id: "dd102",
  name: "Sri Govardhana Nesa Perumal Temple",
  location: "Thiru Vadamathura, Uttar Pradesh, India",
  description: "Temple dedicated to Lord Govardhana Nesa Perumal, celebrated as a sacred Vaishnavite shrine.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Important pilgrimage site in Uttar Pradesh",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Krishna Janmashtami",
  state: "Uttar Pradesh"
},
{
  id: "dd103",
  name: "Sri Neelamega Perumal Temple",
  location: "Thirukkandam, Devaprayag, Uttarakhand, India",
  description: "Divya Desam dedicated to Lord Neelamega Perumal, located at the confluence of rivers in Devaprayag.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Prominent Vaishnavite temple in Uttarakhand",
  bestTime: "April to June",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttarakhand"
},
{
  id: "dd104",
  name: "Sri Paramapurusha Perumal Temple",
  location: "Thiruppirudhi, Joshimutt, Uttarakhand, India",
  description: "Sacred Divya Desam dedicated to Lord Paramapurusha Perumal, visited by pilgrims traveling through the Himalayas.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Key Vaishnavite shrine in Uttarakhand",
  bestTime: "April to June",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttarakhand"
},
{
  id: "dd105",
  name: "Sri Badri Narayana Perumal Temple",
  location: "Thiruvadhari Ashramam, Badrinath, Uttarakhand, India",
  description: "Temple dedicated to Lord Badri Narayana Perumal, part of the sacred Vaishnavite pilgrimage circuit in Badrinath.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Famous Divya Desam in the Himalayas",
  bestTime: "May to October",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Uttarakhand"
},
{
  id: "dd106",
  name: "Sri Moorthy Perumal Temple",
  location: "Thiru Salagramam, Mukthinath, Nepal",
  description: "Sacred Divya Desam dedicated to Lord Moorthy Perumal, one of the rare Divya Desams outside India.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Nepal-based Vaishnavite shrine celebrated by pilgrims",
  bestTime: "October to February",
  festivals: "Vaikunta Ekadashi, Brahmotsavam",
  state: "Nepal"
},
{
  id: "dd107",
  name: "Celestial Abode ThirupPaarkadal",
  location: "Vyugam (Celestial), Mythical",
  description: "Divya Desam located in the celestial realm, revered in the scriptures for its spiritual significance.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Sacred Vinnulaga Divyadesam (Celestial Abode)",
  bestTime: "N/A",
  festivals: "Spiritual observances as per Vaishnavite texts",
  state: "Celestial"
},
{
  id: "dd108",
  name: "Celestial Abode ThirupParamapadham",
  location: "Parathuvam (Celestial), Mythical",
  description: "Sacred Divya Desam in the celestial realm, praised in Vaishnavite scriptures.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147364/balaji_m7oo1u.png",
  significance: "Final Divya Desam completing the 108 sacred Vishnu shrines",
  bestTime: "N/A",
  festivals: "Spiritual observances as per Vaishnavite texts",
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
              "This modern temple is a significant pilgrimage site dedicated to Lord Matsya, the fish incarnation of Lord Vishnu. The temple features a unique and impressive idol of the Matsya avatar, along with idols of other avatars.",
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
              "While not a formal temple, Matsya Theertham is a sacred site in Rameswaram where a dip in the sea is considered highly auspicious. It is believed to be the place where Lord Matsya first appeared.",
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
            description: "Temple dedicated to Lord Kurma",
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
              "This prominent temple is dedicated to the combined form of Lord Varaha and Lord Narasimha. The deity is covered in sandalwood paste throughout the year, with the original form only revealed on one day during the annual Chandanotsavam festival.",
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
              "One of the 108 Divya Desams, this temple is located on the banks of the Vellar River. The deity, Varaha, is believed to have saved the earth from the demon Hiranyaksha at this spot. The temple is known for its intricate stone carvings and Chola and Vijayanagar architecture.",
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
              "Located on the Tirumala hills, this is one of the most ancient and revered temples. According to legend, Lord Vishnu first manifested as Varaha at this location, granting the land to Lord Venkateswara. Pilgrims traditionally visit this temple before visiting the main Venkateswara temple.",
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
              "Ahobilam is a sacred pilgrimage site in Andhra Pradesh, home to the Ahobila Lakshmi Narasimha Swami Temple. The temple complex is comprised of nine separate temples, each dedicated to a different form of Lord Narasimha.",
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
              "The Varaha Lakshmi Narasimha Temple in Simhachalam is a prominent site, known for its unique idol which is covered in sandalwood paste throughout the year, only to be removed for a single day during the annual Chandanotsavam festival.",
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
              "This temple is famous for the Panakala Narasimha Swamy, where the deity is said to consume 'panakam' (jaggery water) offered by devotees, with a distinct sound, and the offering never overflows.",
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
              "Yadadri is a significant hill temple near Hyderabad, dedicated to Lord Lakshmi Narasimha. It is believed that Lord Narasimha appeared in five different forms at this place.",
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
              "Located on the banks of the Godavari River, Dharmapuri is known for its twin temples dedicated to Lord Narasimha. The temple is famous for the Bhargava Narasimha form.",
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
              "Devarayanadurga is a hill station and pilgrimage center, home to the Yoga Narasimha temple at the top of the hill and the Bhoga Narasimha temple at the base. The temples are renowned for their serene surroundings and spiritual ambiance.",
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
              "This temple is a unique and challenging pilgrimage site. Devotees have to wade through a cave with waist-deep water to reach the idol of Lord Narasimha.",
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
              "The Guru Narasimha Temple in Saligrama is a well-known pilgrimage center. The temple has a revered history and attracts devotees from all over the country.",
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
              "The Lakshmi Narasimha Swami Temple in Nuggehalli is a notable example of Hoysala architecture. The temple is intricately carved with detailed sculptures of various deities.",
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
              "The Narasimhaswamy Temple in Namakkal is a well-known rock-cut cave temple built in the Dravidian style. The temple is located at the foot of a small hill and is a prominent site for devotees of Lord Narasimha.",
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
              "The Lakshmi Narasimha Swamy Temple is situated on a small hill and requires a climb of several steps. The temple is a popular destination for devotees seeking blessings for good health and prosperity.",
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
              "This temple is a revered pilgrimage site in Rajasthan dedicated to Lord Narasimha. The temple has a peaceful ambiance and is a popular destination for devotees.",
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
              "Located in the Thalassery town, this temple is an important pilgrimage site for the Goud Saraswat Brahmin community in Kerala. The temple is dedicated to Lord Lakshmi Narasimha.",
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
              "Located in the Eastern Group of Monuments at Khajuraho, a UNESCO World Heritage Site, this temple is dedicated to Vamana, the dwarf incarnation of Lord Vishnu. The temple features intricate carvings and a sanctum that uses an optical illusion to represent water.",
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
              "This ancient temple is a significant pilgrimage site, believed to be around two millennia old. It is one of the 108 Divya Desams (divine places) and is historically linked to the legend of King Mahabali and Lord Vamana.",
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
              "Situated near the Kamakshi Amman Temple in Kanchipuram, this temple is a Sri Vaishnava Divya Desam dedicated to Lord Vamana, also known as Ulagalnatha Perumal. The temple features an imposing idol of Lord Vamana carved from black stone.",
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
              "This is one of the most famous temples dedicated to Lord Parshuram, located on the banks of the Vashishti River. Believed to be a site where Lord Parshuram resides, it is known for its intricate stone carvings and the main sanctum containing idols of Kal, Kam, and Parshuram.",
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
              "Dedicated to Lord Parashuram, this temple is a significant pilgrimage site for performing the sacred 'Bali' ritual. This ritual is a tradition to honor departed ancestors, making it a crucial spiritual destination for devotees in Kerala.",
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
              "Located along the Lohit River, this temple is well-known for its sacred pond, or 'Kund'. It is a popular pilgrimage destination, especially during Makar Sankranti, when thousands of devotees take a holy dip to wash away their sins.",
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
              "This site is considered the birthplace of Lord Parshuram, located on a scenic hill. It is an important pilgrimage site and is also believed to be the place where the legendary sage Jamadagni, Parshuram's father, resided.",
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
              "Located deep within the Aravalli range, this temple is notable for the legend that Parshuram himself created the cave with his axe. The temple is accessible via a challenging trek and is a revered site for its unique natural setting.",
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
              "Considered the birthplace of Lord Rama, this is one of the most sacred pilgrimage sites for Hindus. The newly constructed temple stands on the site of the ancient Ram Janmabhoomi, a place of immense spiritual significance.",
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
              "This temple is believed to be the private palace of Goddess Sita, gifted to her by her stepmother Kaikeyi after her marriage to Lord Rama. The temple is known for its exquisite golden idols of Rama and Sita.",
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
              "According to tradition, this site is the ashram of the great sage Valmiki. It is here that Goddess Sita found shelter after being abandoned by Lord Rama and where her twin sons, Lava and Kusha, were born.",
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
              "The Raghunath Temple is a complex of seven temples, with the main shrine dedicated to Lord Rama. The temple is known for its intricate carvings and rich collection of ancient manuscripts, making it a prominent pilgrimage site in North India.",
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
              "Located in the Panchavati area, where Lord Rama, Sita, and Lakshmana are believed to have lived during their exile. The temple is famous for its black stone statue of Lord Rama, which is a key pilgrimage spot.",
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
              "This unique temple is revered as a palace where Lord Rama is worshipped not just as a deity but as a ruling king. He is given a royal salute by the state police every day, and the temple is a fortress-like palace.",
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
              "Situated on the banks of the Godavari River, this temple is a prominent pilgrimage site. It is believed that Lord Rama, Sita, and Lakshmana stayed here during their exile. The town is often referred to as 'Dakshina Ayodhya' (Southern Ayodhya).",
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
              "Located on the banks of the Tungabhadra River, this ancient temple is known for its beautiful idols of Lord Rama, Sita, and Lakshmana. The temple's serene setting adds to its spiritual charm.",
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
              "Built during the period of the Thanjavur Nayak kings, this temple is renowned for its magnificent sculptures depicting scenes from the Ramayana. The entire epic is carved in the temple's mandapam.",
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
              "A significant temple in a historically important town, situated near the sea. It is believed that Lord Rama performed the 'Pooja' of 'Dhanush' (his bow) before crossing over to Lanka from this point.",
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
              "Known for its classic Vijayanagar architecture, this temple is a UNESCO World Heritage site. It is believed that the idols of Lord Rama, Sita, and Lakshmana were installed by Lord Rama himself before he left for Ayodhya.",
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
              "Believed to be the exact birthplace of Lord Krishna, this is a significant pilgrimage site where devotees come to worship at the sacred prison cell where Krishna was born.",
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
              "A famous temple in Vrindavan, the place where Krishna spent his childhood. The deity here is known for its playful nature, and the curtains are opened and closed frequently during darshan.",
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
              "A modern, large temple with intricate marble carvings, dedicated to Radha and Krishna. The temple is beautifully illuminated at night and depicts various episodes from Krishna's life.",
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
              "An ancient temple built from red sandstone, another key site in Vrindavan. The temple is known for its beautiful architecture and peaceful atmosphere.",
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
              "A revered temple dedicated to Govind Dev Ji, a form of Lord Krishna, located within the City Palace complex. The deity was originally from Vrindavan but was moved to Jaipur for protection.",
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
              "A major Vaishnavite shrine dedicated to Shrinathji, a form of Lord Krishna. The temple is famous for its elaborate daily rituals and the deity's beautiful attire changes.",
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
              "An ancient monastery founded by Saint Madhvacharya, central to the worship of Lord Krishna in this region. The temple is famous for its unique idol and the Paryaya system of worship.",
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
              "A renowned temple in Kerala dedicated to Lord Krishna, famous for its sweet offering called 'Palpayasam'. The temple has rich cultural significance and beautiful Kerala architecture.",
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
              "Famous for the annual Rath Yatra festival, this temple houses Lord Jagannath (Krishna), along with his siblings Balabhadra and Subhadra. The temple's unique wooden deities are replaced every 12-19 years in a sacred ceremony called Nabakalebara.",
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
              "A magnificent Hindu temple dedicated to Lord Krishna as the King of Dwarka. This ancient temple is one of the Char Dham pilgrimage sites and holds immense spiritual significance. The temple's architecture showcases intricate carvings and the main deity is adorned with precious ornaments.",
            image:
               "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147335/k10_w3xtel.png",
            significance: "One of the four sacred Char Dham pilgrimage sites",
            bestTime: "October to March",
            festivals: "Janmashtami, Holi",
            state: "Gujarat",
          },
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
              "The first among the twelve Jyotirlinga shrines, this temple has been destroyed and rebuilt multiple times throughout history. It stands as a symbol of resilience and faith.",
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
              "One of the most sacred Shiva temples, famous for its Bhasma Aarti performed with ash from cremated bodies. This unique ritual is performed in the early morning hours.",
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
              "One of the holiest Shiva temples located in the spiritual capital of India. The temple's golden spire and dome are iconic symbols of Varanasi. It's believed that a single darshan here can liberate one from the cycle of birth and death.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147393/j3_wdzn7b.png",
            significance:
              "Located in the spiritual capital, liberation from rebirth cycle",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Sawan Somvar",
            state: "Uttar Pradesh",
          },
          {
            id: "jl4",
            name: "Kedarnath Jyotirlinga",
            location: "Kedarnath, Uttarakhand, India",
            description:
              "The highest among all Jyotirlingas, located at 3,583 meters in the Himalayas. Accessible only during summer months, this temple requires a challenging trek. It's believed to be where Lord Shiva granted salvation to the Pandavas.",
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
              "Located on the Mandhata island in the Narmada River, shaped like the sacred 'Om' symbol. It is one of the most revered Shiva shrines, where devotees believe Lord Shiva himself resides eternally.",
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
              "Located on the banks of the Krishna River, this temple is also a Shakti Peetha, making it doubly sacred. It is believed that visiting this temple grants salvation to devotees.",
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
              "Situated at the source of the Godavari River, this temple is unique as the jyotirlinga has three faces representing Brahma, Vishnu, and Shiva together.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147383/j7_vjnmh2.png",
            significance: "Three-faced lingam symbolizing the Trinity",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kumbh Mela (every 12 years)",
            state: "Maharashtra",
          },
          {
            id: "jl8",
            name: "Bhimashankar Jyotirlinga",
            location: "Pune, Maharashtra, India",
            description:
              "Surrounded by the Sahyadri hills, this temple is believed to be the place where Lord Shiva destroyed the demon Tripurasura. It is also the source of the Bhima River.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147389/j8_tlunvv.png",
            significance:
              "Associated with Tripurasura and source of Bhima River",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Maharashtra",
          },
          {
            id: "jl9",
            name: "Vaidyanath Jyotirlinga",
            location: "Deoghar, Jharkhand, India",
            description:
              "Also known as Baidyanath Dham, this shrine is where Lord Shiva is believed to have cured Ravana of his wounds after he offered his ten heads to the deity.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147379/j9_bc7wk9.png",
            significance: "Healing powers, linked to Ravana's devotion",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Shravan Mela",
            state: "Jharkhand",
          },
          {
            id: "jl10",
            name: "Nageshwar Jyotirlinga",
            location: "Dwarka, Gujarat, India",
            description:
              "Located near Dwarka, this temple is believed to be where Lord Shiva destroyed the demon Daruka. The temple features a massive Shiva statue visible from afar.",
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
              "One of the Char Dham pilgrimage sites, it is believed that Lord Rama worshipped Shiva here before building the Ram Setu to Lanka. The temple is famous for its long corridors and sacred water tanks.",
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
              "Located near the Ellora Caves, this is the smallest Jyotirlinga temple but holds immense spiritual significance. It is considered the twelfth and final Jyotirlinga in the series.",
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
              "Dedicated to Lord Shiva representing the element Earth (Prithvi). The temple has a huge Shiva Lingam and is famous for its ancient Dravidian architecture and massive gopuram.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147379/pe1_u4wqwv.png",
            significance:
              "Represents the Earth element in Pancha Bhoota Sthalams",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Panguni Uthiram",
            state: "Tamil Nadu",
          },
          {
            id: "pe2",
            name: "Jambukeswarar Temple",
            location: "Thiruvanaikaval, Tamil Nadu, India",
            description:
              "Dedicated to Lord Shiva representing the element Water (Jal). The sanctum has an underground water stream and symbolizes Shiva as the Lord of Water.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147378/pe2_rdxtao.png",
            significance:
              "Represents the Water element in Pancha Bhoota Sthalams",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Aadi Pooram",
            state: "Tamil Nadu",
          },
          {
            id: "pe3",
            name: "Annamalaiyar Temple",
            location: "Thiruvannamalai, Tamil Nadu, India",
            description:
              "Dedicated to Lord Shiva representing the element Fire (Agni). Shiva is worshipped as the infinite fire Lingam, and the temple is famous for Karthigai Deepam festival when a huge lamp is lit on the hill.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147378/pe3_abpb8x.png",
            significance:
              "Represents the Fire element in Pancha Bhoota Sthalams",
            bestTime: "October to February",
            festivals: "Karthigai Deepam, Maha Shivratri",
            state: "Tamil Nadu",
          },
          {
            id: "pe4",
            name: "Srikalahasti Temple",
            location: "Srikalahasti, Andhra Pradesh, India",
            description:
              "Dedicated to Lord Shiva representing the element Air (Vayu). The Vayu Lingam here symbolizes the omnipresence of air and is worshipped by devotees seeking spiritual liberation. The temple is famous for Rahu-Ketu prayers.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147376/pe4_bqyfxn.png",
            significance:
              "Represents the Air element in Pancha Bhoota Sthalams",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Kartik Purnima",
            state: "Andhra Pradesh",
          },
          {
            id: "pe5",
            name: "Thillai Nataraja Temple",
            location: "Chidambaram, Tamil Nadu, India",
            description:
              "Dedicated to Lord Shiva representing the element Space/Ether (Akasha). Shiva is worshipped as Nataraja performing the cosmic dance, and the sanctum represents the cosmic void with its unique architecture.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147375/pe5_tjf6e5.png",
            significance:
              "Represents the Ether element in Pancha Bhoota Sthalams",
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
              "Famous for the naturally formed ice Lingam of Shiva inside a cave, located at a high altitude in the Himalayas. The annual pilgrimage is one of the most challenging in India.",
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
              "A UNESCO World Heritage site, this Chola-era temple is dedicated to Lord Shiva and is known for its massive vimana and intricate carvings. It's a masterpiece of Dravidian architecture.",
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
              "Famous for its towering Shiva statue overlooking the Arabian Sea. The temple attracts devotees and tourists alike with its spectacular seaside location and massive Lord Shiva statue.",
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
              "A magnificent temple dedicated to Lord Shiva, known for its Kalinga-style architecture and cultural significance in Odisha. It's one of the oldest temples in Bhubaneswar.",
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
              "A UNESCO World Heritage site overlooking the Bay of Bengal, dedicated to Lord Shiva and Vishnu, famous for its rock-cut architecture and survival against sea erosion for over 1300 years.",
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
              "A monolithic rock-cut temple dedicated to Lord Shiva, part of the Ellora Caves UNESCO site, known for its architectural brilliance. The entire temple is carved out of a single rock.",
            image:
              "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147280/st6_f0hurp.png",
            significance:
              "Monolithic rock-cut temple, UNESCO Ellora Caves site",
            bestTime: "October to March",
            festivals: "Maha Shivratri, Ellora Festival",
            state: "Maharashtra",
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
    "A historic temple dedicated to Goddess Meenakshi (Parvati) and Lord Sundareshwar (Shiva).",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147391/dt1_hwfpkt.png",
  significance: "Celebrates the divine union of Parvati and Shiva.",
  bestTime: "October to March",
  festivals: "Chithirai Festival",
  state: "Tamil Nadu"
},
{
  id: "dt2",
  name: "Kamakshi Amman Temple",
  location: "Kanchipuram, Tamil Nadu, India",
  description:
    "Dedicated to Goddess Kamakshi, an important form of Parvati, symbolizing love and compassion.",
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
    "Dedicated to Goddess Annapoorna, the form of Parvati who nourishes and provides food.",
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
    "A major temple where Goddess Akilandeswari (Parvati) is worshipped alongside Jambukeswarar (Shiva).",
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
    "Located on Parvati Hill, this temple complex is dedicated to Goddess Parvati and her consort Shiva.",
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
    "Established by Adi Shankaracharya, dedicated to Goddess Sharadamba (Parvati as Goddess of learning).",
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
    "An ancient temple dedicated solely to Parvathi Devi in the temple town of Kanchipuram.",
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
    "Dedicated to Goddess Annapoorneshwari (Parvati as the giver of food), located in the Western Ghats.",
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
    "Famous for the annual Attukal Pongala festival dedicated to Bhagavathy, a form of Parvati.",
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
    "A powerful temple dedicated to Mariamman, a fierce form of Parvati Devi worshipped for protection and health.",
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
    "A famous temple dedicated to Goddess Adhiparasakthi, considered a supreme form of Parvati Devi.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147361/dt11_mct0ip.png",
  significance:
    "Devotees believe the Goddess here blesses with prosperity, healing, and spiritual power.",
  bestTime: "October to March",
  festivals: "Thai Poosam, Navratri",
  state: "Tamil Nadu"
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
    "A temple dedicated to Goddess Mahalakshmi, the presiding deity of Kolhapur. It is one of the Shakti Peethas.",
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
    "Dedicated to the eight forms of Goddess Lakshmi, this temple is located by the Bay of Bengal in Besant Nagar.",
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
    "Built in the 18th century, this temple is one of the most visited shrines in Mumbai.",
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
    "A prominent temple dedicated to Goddess Kanaka Mahalakshmi, the presiding deity of Visakhapatnam.",
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
    "An ancient temple dedicated to Goddess Lakshmi, revered by devotees across North Karnataka.",
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
    "A revered temple of Goddess Mahalakshmi located in Bandora, Goa.",
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
    "A famous temple built by the Birla family, dedicated to Goddess Lakshmi and Lord Vishnu.",
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
    "An important temple where Goddess Lakshmi is worshipped alongside Lord Narasimha.",
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
    "A popular shrine dedicated to Goddess Mahalakshmi, believed to grant wealth and prosperity.",
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
    "An ancient temple complex dedicated to Lord Vishnu and Goddess Lakshmi, built in the 10th century.",
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
  description: "A 10th-century temple dedicated to Hanuman in Ayodhya. Devotees often visit here before the Ram Temple.",
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
  description: "Founded by Tulsidas, the temple is famous for relieving devotees from troubles and obstacles.",
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
  description: "A powerful shrine of Hanuman in Rajasthan, drawing lakhs of devotees every year.",
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
  description: "Famous for rituals related to exorcism and removal of evil spirits.",
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
  description: "Located on Jakhoo Hill, this temple has the world’s tallest Hanuman statue at 108 feet.",
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
  description: "Built in the 12th century by a Kakatiya king, this temple is one of the oldest Hanuman shrines in South India.",
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
  description: "This temple features a towering 18-foot Hanuman idol without a roof above it.",
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
  description: "A famous Swaminarayan temple dedicated to Hanuman, considered powerful against negative energies.",
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
  description: "Located on an island near Dwarka, this temple is dedicated to Hanuman and his son Makardhwaja.",
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
  description: "One of the most popular temples in Bihar and Eastern India, visited by millions annually.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147345/h10_mlwi2d.png",
  significance: "Second most visited religious shrine in North India after Vaishno Devi.",
  bestTime: "October to March",
  festivals: "Hanuman Jayanti, Ram Navami",
  state: "Bihar"
},
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
          description: "The foremost Ashtavinayak temple, believed to be the starting point of all eight temples.",
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
          description: "Known for granting siddhi (success) to devotees.",
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
          description: "Famous for the story of a devotee Ballal, who built the temple with devotion.",
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
          description: "Known for granting boons to devotees.",
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
          description: "Famous for removing worries and granting peace of mind.",
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
          description: "Located inside a cave, known for its unique natural setting.",
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
          description: "Famous for removing obstacles in devotees' lives.",
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
          description: "One of the most visited Ashtavinayak temples, renowned for its architecture.",
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
          description: "Famous for its beautifully decorated idol of Lord Ganesha and large annual celebrations.",
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
          description: "A hilltop temple with panoramic views of the surrounding mountains, dedicated to Lord Ganesha.",
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
          description: "Historic temple where the idol of Lord Ganesha is believed to be growing in size.",
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
          description: "A temple known for devotees' prayers being fulfilled and regular cultural events.",
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
          description: "Part of the famous Moti Dungri complex, this temple has a unique idol of Lord Ganesha.",
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
          description: "One of the most famous Murugan temples, located on a hill.",
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
          description: "Famous for Lord Murugan teaching the meaning of Pranava (Om) to Shiva.",
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
          description: "Seaside temple famous for Murugan defeating the demon Soorapadman.",
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
          description: "Nestled in the hills, surrounded by dense forests.",
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
          description: "Situated on a hill, visited by thousands of pilgrims annually.",
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
          description: "Cave temple where Murugan defeated the demon Surapadman.",
          image:  "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147325/m6_zisylg.png",
          significance: "One of the six sacred abodes.",
          bestTime: "October to February",
          festivals: "Skanda Shasti, Panguni Uthiram",
          state: "Tamil Nadu"
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
  description: "The most famous Ayyappa temple located in the dense forests of the Western Ghats, visited by millions of devotees annually.",
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
  description: "One of the five ancient Sastha temples, believed to have been consecrated by Lord Parasurama.",
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
  description: "Here, Lord Ayyappa is worshipped as a child (Balasastha).",
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
  description: "One of the five important temples of Lord Ayyappa where he is depicted as a youthful prince.",
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
  description: "Associated with the royal family of Pandalam who are believed to have cared for young Lord Ayyappa.",
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
  description: "Located on the pilgrimage route to Sabarimala, considered sacred for the devotees en route.",
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
  description: "A small temple near the Pampa River where pilgrims take a holy bath before climbing Sabarimala hills.",
  image: "https://res.cloudinary.com/dto53p1cf/image/upload/v1759147368/ay7_nabaic.png",
  significance: "Essential stop for spiritual purification before Sabarimala pilgrimage.",
  bestTime: "November to January",
  festivals: "Mandala-Makaravilakku",
  state: "Kerala"
},
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
          description: "Dedicated to Sun God (Surya), the central deity of the Navagraha temples.",
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
          description: "Dedicated to Moon God (Chandra), believed to cure mental ailments.",
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
          description: "Dedicated to Mars (Mangal), famous for curing diseases and Mangal dosha.",
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
          description: "Dedicated to Mercury (Budha), enhances intelligence and communication skills.",
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
          description: "Dedicated to Jupiter (Guru/Brihaspati), grants wisdom and prosperity.",
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
          description: "Dedicated to Venus (Shukra), blesses with wealth, luxury and marital happiness.",
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
          description: "Dedicated to Saturn (Shani), relieves from Saturn's malefic effects.",
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
          description: "Dedicated to Rahu (North Lunar Node), removes obstacles and grants success.",
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
          description: "Dedicated to Ketu (South Lunar Node), provides spiritual liberation.",
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
