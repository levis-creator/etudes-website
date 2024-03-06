// place files you want to import through the `$lib` alias in this folder.

import img1 from "$lib/assets/tourist-and-building.webp.png";
import img2 from "$lib/assets/windows.webp.png";
import display1 from "$lib/assets/hotel-facade.webp.png";
import display2 from "$lib/assets/Figure → art-gallery.webp.png";
import type { Gallary, Reason, SectionHead, Service } from "./types";
// Service section data
export let serviceHead: SectionHead = {
  head: "A passion for creating spaces",
  description:
    "Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.",
};

export let serviceItems: Service[] = [
  {
    id: 1,
    head: "Renovation and restoration",
    description:
      " Experience the fusion of imagination and expertise with EtudesArchitectural Solutions.",
  },
  {
    id: 2,
    head: "Countinuous Support",
    description:
      "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
  },
  {
    id: 3,
    head: "App Access",
    description:
      "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
  },

  {
    id: 4,
    head: "Consulting",
    description:
      "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
  },
  {
    id: 5,
    head: "Project Management",
    description:
      "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
  },
  {
    id: 6,
    head: "Architectural Solutions",
    description:
      "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
  },
];

// Reasons sections
/*  All the content key area is using mark up text to insert the valutes  */
export let reasonHead: SectionHead = {
  head: "An array of resources",
  description:
    "Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.",
};

export let reasonContent: Reason[] = [
  {
    content:
      "**Architect App** \n- Collaborate with fellow architects.\n - Showcase your projects.\n- Experience the world of architecture.",
    contentImage: img1,
  },
  {
    content:
      "**Newsletter** \n- A world of thought-provoking articles.  \n- Case studies that celebrate architecture.  \n- Exclusive access to design insights.",
    contentImage: img2,
  },
];

// footer links
export let aboutlinks = ["Team", "History", "Careers"];
export let socialLinks = ["Facebook", "Instagram", "TwitterX"];
export let privacyLinks = [
  "Privacy Policy",
  "Terms and Conditions",
  "Contact Us",
];
// Gallarey page
// display
export let gallery_data: Gallary[] = [
  {
    image: display1,
    description:
      "**Crafting Spaces for Creativity: Études' Latest Masterpiece**  \n Nestled in the heart of Toronto's vibrant arts district, the latest creation by Études stands not just as a building, but as a beacon of innovation and elegance in architectural design. Études, a Toronto-based architectural firm known for its avant-garde approach and commitment to sustainability, has once again redefined the urban landscape with its recent art gallery project.",
    additional_info: "nothing",
  },
  {
    image: display2,
    description:
      " **Innovative Design Meets Functionality**  \nThe Études art gallery is a testament to the firm's philosophy that architecture should both inspire and serve.",
    image_desc:
      "The revitalized art gallery is set to redefine cultural landscape.",
    additional_info:
      "<h3>A Hub for Cultural Exchange</h3>  <p>Études envisioned the gallery as more than a space for art; it is a hub for cultural exchange and community engagement. The firm achieved this by incorporating versatile exhibition areas, interactive installations, and public gathering spaces. These elements facilitate a dynamic range of activities, from high-profile art exhibitions to community workshops and educational programs, making art accessible to everyone.</p><p>The gallery's interior is a masterpiece in its own right, designed to complement the art it houses. The open, airy spaces are adaptable, allowing for the accommodation of various art forms and installations. Natural light plays a crucial role in the gallery's ambiance, with skylights and thoughtfully placed windows illuminating the artworks in a way that enhances their beauty and impact. </p> <p>With its sweeping lines and expansive glass facades, the gallery invites the city in, blurring the boundaries between the external environment and the internal exhibition spaces. This deliberate design choice fosters a unique dialogue between the artwork on display and the bustling city life outside, offering visitors an immersive experience that is both contemplative and connected. </p> <p>Sustainability sits at the core of Études' design ethos, and this project is no exception. Employing cutting-edge green technologies, the gallery boasts energy-efficient lighting, rainwater harvesting systems, and locally sourced building materials. These features not only minimize the environmental footprint but also create a space that is as responsible as it is beautiful.</p>",
  },
];
