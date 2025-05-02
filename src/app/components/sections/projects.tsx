import { ArrowRight, MoveRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="h-screen w-full bg-surface flex flex-col gap-16 section_custom rounded-t-[4rem] border-t-2 border-white/30">
      <div className="flex justify-between w-full mt-24 h-fit items-center">
        <h1 className="text-4xl uppercase font-semibold">Featured Projects</h1>
        <div className="hover:border-b-2 hover:border-highlight hover:text-highlight border-b-2 border-transparent">
          <a href="#" className="flex gap-3 items-center">
            See All Projects <MoveRight />
          </a>
        </div>
      </div>
      <a href="#" className="group hover:text-highlight">
        <div
          className="flex justify-between items-center w-full h-fit hover-target gap-52"
          data-cursor-img="/nutrigrowth.jpg"
        >
          <div>
            <p>01</p>
            NutriGrowth
          </div>
          <h1 className="font-light text-center">
            Aplikasi mobile berbasis Flutter GetX yang berfungsi untuk memonitor
            pertumbuhan anak di Posyandu
          </h1>
          <div className="group-hover:border-b-2 group-hover:border-highlight group-hover:text-highlight border-b-2 border-transparent">
            <p className="flex gap-3 items-center">
              View Project <ArrowRight />
            </p>
          </div>
        </div>
      </a>
      <a href="#" className="group hover:text-highlight">
        <div
          className="flex justify-between items-center w-full h-fit hover-target gap-52"
          data-cursor-img="/smart_iot.jpg"
        >
          <div>
            <p>02</p>
            S.M.A.R.T IoT
          </div>
          <h1 className="font-light text-center">
            Sistem presensi otomatis menggunakan face recognition yang
            terintegrasi dengan kontrol AC pintar.
          </h1>
          <div className="group-hover:border-b-2 group-hover:border-highlight group-hover:text-highlight border-b-2 border-transparent">
            <p className="flex gap-3 items-center">
              View Project <ArrowRight />
            </p>
          </div>
        </div>
      </a>
      <a href="#" className="group hover:text-highlight">
        <div
          className="flex justify-between items-center w-full h-fit hover-target gap-52"
          data-cursor-img="/smartgrow.jpeg"
        >
          <div>
            <p>03</p>
            SmartGrow
          </div>
          <h1 className="font-light text-center">
            Sebuah sistem cerdas berbasis IoT dan aplikasi mobile untuk
            pemantauan dan otomasi tanaman hidroponik
          </h1>
          <div className="group-hover:border-b-2 group-hover:border-highlight group-hover:text-highlight border-b-2 border-transparent">
            <p className="flex gap-3 items-center">
              View Project <ArrowRight />
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
