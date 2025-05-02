import { ArrowRight, MoveRight } from "lucide-react";

export default function Projects() {
  return (
    <div
      className="min-h-screen w-full bg-surface flex flex-col gap-8 sm:gap-10 md:gap-16 section_custom rounded-t-[2rem] md:rounded-t-[4rem] border-t-2 border-white/30 py-10 md:py-0"
      id="projects"
    >
      <div className="flex flex-col sm:flex-row justify-between w-full mt-8 sm:mt-16 md:mt-24 h-fit items-start sm:items-center gap-4 sm:gap-0 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-semibold">
          Featured Projects
        </h1>
        <div className="hover:border-b-2 hover:border-highlight hover:text-highlight border-b-2 border-transparent">
          <a href="#" className="flex gap-2 md:gap-3 items-center">
            See All Projects <MoveRight size={18} className="sm:size-auto" />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 px-4 sm:px-0">
        <a href="#" className="group hover:text-highlight">
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full h-fit hover-target sm:gap-8 md:gap-16 lg:gap-52"
            data-cursor-img="/nutrigrowth.jpg"
          >
            <div className="mb-2 sm:mb-0 text-lg sm:text-xl">
              <p>01</p>
              NutriGrowth
            </div>
            <h1 className="font-light text-left sm:text-center order-3 sm:order-2 mb-4 sm:mb-0">
              Aplikasi mobile berbasis Flutter GetX yang berfungsi untuk
              memonitor pertumbuhan anak di Posyandu
            </h1>
            <div className="group-hover:border-b-2 group-hover:border-highlight group-hover:text-highlight border-b-2 border-transparent order-2 sm:order-3 mb-2 sm:mb-0">
              <p className="flex gap-2 items-center">
                View Project <ArrowRight size={16} className="sm:size-auto" />
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="group hover:text-highlight">
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full h-fit hover-target sm:gap-8 md:gap-16 lg:gap-52"
            data-cursor-img="/smart_iot.jpg"
          >
            <div className="mb-2 sm:mb-0 text-lg sm:text-xl">
              <p>02</p>
              S.M.A.R.T IoT
            </div>
            <h1 className="font-light text-left sm:text-center order-3 sm:order-2 mb-4 sm:mb-0">
              Sistem presensi otomatis menggunakan face recognition yang
              terintegrasi dengan kontrol AC pintar.
            </h1>
            <div className="group-hover:border-b-2 group-hover:border-highlight group-hover:text-highlight border-b-2 border-transparent order-2 sm:order-3 mb-2 sm:mb-0">
              <p className="flex gap-2 items-center">
                View Project <ArrowRight size={16} className="sm:size-auto" />
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="group hover:text-highlight">
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full h-fit hover-target sm:gap-8 md:gap-16 lg:gap-52"
            data-cursor-img="/smartgrow.jpeg"
          >
            <div className="mb-2 sm:mb-0 text-lg sm:text-xl">
              <p>03</p>
              SmartGrow
            </div>
            <h1 className="font-light text-left sm:text-center order-3 sm:order-2 mb-4 sm:mb-0">
              Sebuah sistem cerdas berbasis IoT dan aplikasi mobile untuk
              pemantauan dan otomasi tanaman hidroponik
            </h1>
            <div className="group-hover:border-b-2 group-hover:border-highlight group-hover:text-highlight border-b-2 border-transparent order-2 sm:order-3 mb-2 sm:mb-0">
              <p className="flex gap-2 items-center">
                View Project <ArrowRight size={16} className="sm:size-auto" />
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
