export type SECTIONITEMSTYPE = {
  name: string;
  content: string;
  smallImage: string;
  bigImage?: string;
  bigImagePosition?: "top" | "bottom";
  alignBottom?: boolean;
};

// Using dummy Images here
const SECTION1: SECTIONITEMSTYPE[] = [
  {
    name: "Lorem Ipsum 1",
    content:
      "Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (1).svg",
  },
  {
    name: "Lorem Ipsum 2",
    content:
      "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (2).svg",
  },
  {
    name: "Lorem Ipsum 3",
    content:
      "Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (3).svg",
    bigImage: "/Frame_1.png",
    bigImagePosition: "top",
  },
  {
    name: "Lorem Ipsum 4",
    content:
      "Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (4).svg",
  },
  {
    name: "Lorem Ipsum 5",
    content:
      "Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (4).svg",
    bigImage: "/Frame_2.png",
    bigImagePosition: "bottom",
  },
  {
    name: "Lorem Ipsum 6",
    content:
      "Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (4).svg",
    alignBottom: true,
  },
];

const SECTION2: SECTIONITEMSTYPE[] = [
  {
    name: "Lorem Ipsum 1",
    content:
      "Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (5).svg",
  },
  {
    name: "Lorem Ipsum 2",
    content:
      "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (6).svg",
    bigImage: "/Frame_3.png",
    bigImagePosition: "bottom",
  },
  {
    name: "Lorem Ipsum 3",
    content:
      "Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    smallImage: "/icon1 (7).svg",
    alignBottom: true,
  },
];

export { SECTION1, SECTION2 };
