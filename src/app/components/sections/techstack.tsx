import {
  Bell,
  FileLineChart,
  Home,
  Mail,
  Search,
  Settings,
  User,
} from "lucide-react";
import ScrollVelocity, {
  GlassIconsItem,
  ScrollVelocityWithGlassIcons,
} from "../ui/scroll_velocity";

export default function TechStack() {
  const pngIconItems: GlassIconsItem[] = [
    {
      iconSrc: "/icons/AdobeIllustrator.svg",
      iconAlt: "Adobe Illustrator Icon",
      color: "white",
      label: "Adobe Illustrator",
    },
    {
      iconSrc: "/icons/AdobeXD.svg",
      iconAlt: "Adobe XD Icon",
      color: "purple",
      label: "Adobe XD",
    },
    {
      iconSrc: "/icons/Bootstrap.svg",
      iconAlt: "Bootstrap Icon",
      color: "indigo",
      label: "Bootstrap",
    },
    {
      iconSrc: "/icons/C++.svg",
      iconAlt: "C++ Icon",
      color: "green",
      label: "C++",
    },
    {
      iconSrc: "/icons/Canva.svg",
      iconAlt: "Canva Icon",
      color: "orange",
      label: "Canva++",
    },
    {
      iconSrc: "/icons/CSS3.svg",
      iconAlt: "CSS3 Icon",
      color: "blue",
      label: "CSS3",
    },
    {
      iconSrc: "/icons/Dart.svg",
      iconAlt: "Dart Icon",
      color: "red",
      label: "Dart",
    },
    {
      iconSrc: "/icons/Electron.svg",
      iconAlt: "Electron Icon",
      color: "yellow",
      label: "Electron",
    },
    {
      iconSrc: "/icons/Figma.svg",
      iconAlt: "Figma Icon",
      color: "pink",
      label: "Figma",
    },
    {
      iconSrc: "/icons/Firebase.svg",
      iconAlt: "Firebase Icon",
      color: "teal",
      label: "Firebase",
    },
  ];
  const pngIconItems2: GlassIconsItem[] = [
    {
      iconSrc: "/icons/Flutter.svg",
      iconAlt: "Flutter Icon",
      color: "indigo",
      label: "Flutter",
    },
    {
      iconSrc: "/icons/HTML5.svg",
      iconAlt: "HTML5 Icon",
      color: "red",
      label: "HTML5",
    },
    {
      iconSrc: "/icons/Java.svg",
      iconAlt: "Java Icon",
      color: "orange",
      label: "Java",
    },
    {
      iconSrc: "/icons/JavaScript.svg",
      iconAlt: "JavaScript Icon",
      color: "yellow",
      label: "JavaScript",
    },
    {
      iconSrc: "/icons/Laravel.svg",
      iconAlt: "Laravel Icon",
      color: "teal",
      label: "Laravel",
    },
    {
      iconSrc: "/icons/MySQL.svg",
      iconAlt: "MySQL Icon",
      color: "blue",
      label: "MySQL",
    },
    {
      iconSrc: "/icons/Next.js.svg",
      iconAlt: "Next Icon",
      color: "green",
      label: "Next",
    },
    {
      iconSrc: "/icons/PHP.svg",
      iconAlt: "PHP Icon",
      color: "purple",
      label: "PHP",
    },
    {
      iconSrc: "/icons/Python.svg",
      iconAlt: "Python Icon",
      color: "red",
      label: "Python",
    },
    {
      iconSrc: "/icons/TailwindCSS.svg",
      iconAlt: "TailwindCSS Icon",
      color: "indigo",
      label: "TailwindCSS",
    },
  ];

  const iconSets = [
    {
      items: pngIconItems,
      className: "justify-center",
      iconSize: "1.8em",
      gridCols: "grid-flow-col auto-cols-max",
    },
    {
      items: pngIconItems2,
      className: "justify-center",
      iconSize: "1.8em",
      gridCols: "grid-flow-col auto-cols-max",
    },
  ];

  return (
    <div className="h-screen w-full bg-background flex flex-col gap-10 px-28 py-36 rounded-t-[4rem] border-t-2 border-white/30">
      <h1 className="text-4xl font-semibold text-center">My Developer DNA</h1>
      <p className="text-center px-36">
        These are the core technologies that make up my identity as a developer.
        From the frontlines of user interfaces to the depths of backend logic,
        this is the stack I’m built on.
      </p>

      <div className="w-full mt-10">
        <ScrollVelocityWithGlassIcons
          iconSets={[iconSets[0]]}
          scrollVelocityProps={{
            velocity: 70,
            numCopies: 2,
          }}
        />
        <ScrollVelocityWithGlassIcons
          iconSets={[iconSets[1]]}
          scrollVelocityProps={{
            velocity: 70,
            reverseDirection: true,
            numCopies: 2,
          }}
        />
      </div>
    </div>
  );
}
