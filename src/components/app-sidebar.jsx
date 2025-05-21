

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Home,BarChartBigIcon,
  Star,
  MessageSquare,
  Mail,
  MapPin
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "Sch. Principal",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
      isActive: true,
      isCollapsible: false,
     
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChartBigIcon,
      isCollapsible: false,
    },
    {
      title: "Apps",
      url: "#",
      icon: Star,
      isCollapsible: true,
    },
    {
      title: "New Admission Form",
      url: "#",
      icon: MessageSquare,
      isCollapsible: false,
      badge: "7"
    },
    {
      title: "Maps",
      url: "#",
      icon: MapPin,
      isCollapsible: true,
    },
    {
      title: "Email",
      url: "#",
      icon: Mail,
      isCollapsible: false,
      badge: "8"
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isCollapsible: true,
      items: [
        {
          title: "Staff Profiles",
          url: "#",
        },
        {
          title: "Student Profiles",
          url: "#",
        },
        
        {
          title: "Parents and Others Profiles",
          url: "#",
        
        } ],
    },
  ],
  
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar  collapsible="icon" {...props}>
      <SidebarHeader className='bg-[#27348B] py-3 px-5'>
      <SidebarMenu>
      <SidebarMenuItem>
     <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className=" w-[45px]  md:w-[45px] md:h-[40px] group-data-[collapsible=icon]:w-[80px] group-data-[collapsible=icon]:h-[50px] transition-all  h-[40px]" viewBox="0 0 423.000000 414.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,414.000000) scale(0.100000,-0.100000)" fill="white" stroke="none"><path d="M1870 3996 c-358 -52 -689 -194 -960 -413 -80 -65 -271 -257 -308 -310 l-23 -32 137 -153 c75 -84 138 -155 140 -156 1 -2 33 29 71 69 250 266 591 459 928 525 124 24 341 25 455 1 306 -65 651 -254 969 -531 l74 -64 129 154 128 155 -22 29 c-12 16 -60 65 -107 108 -353 322 -695 515 -1056 598 -100 22 -148 27 -290 30 -107 2 -205 -2 -265 -10z"></path><path d="M1902 3155 c-214 -39 -384 -119 -555 -263 -69 -59 -187 -188 -187 -206 0 -4 55 -75 123 -160 l123 -153 49 45 c154 138 324 236 475 273 252 63 567 -40 805 -263 57 -52 68 -59 80 -47 34 35 245 294 245 300 0 4 -37 46 -82 94 -192 203 -431 334 -692 380 -106 18 -283 18 -384 0z"></path><path d="M1983 2335 c-99 -27 -207 -95 -262 -164 l-31 -38 211 -249 c117 -137 213 -250 214 -252 1 -1 93 110 204 249 160 200 199 254 191 268 -16 31 -90 102 -138 132 -102 65 -265 87 -389 54z"></path><path d="M3525 1993 c-149 -13 -456 -57 -554 -79 -252 -56 -467 -144 -713 -291 l-128 -76 1 -526 c0 -327 4 -517 9 -503 16 39 86 135 127 173 225 211 819 387 1620 479 144 16 267 30 272 30 22 0 -223 416 -366 623 -96 138 -126 173 -80 95 80 -140 348 -618 353 -632 5 -14 -3 -16 -67 -16 -95 0 -330 -16 -539 -35 -496 -47 -992 -226 -1218 -439 -29 -27 -54 -47 -56 -45 -3 2 -6 162 -7 354 l-2 350 109 67 c174 108 406 221 549 268 72 23 279 80 460 126 182 45 317 82 300 82 -16 -1 -48 -3 -70 -5z"></path><path d="M670 1968 c272 -63 660 -162 755 -193 126 -41 300 -125 498 -240 l137 -80 0 -352 c0 -194 -3 -353 -6 -353 -3 0 -36 26 -72 57 -88 74 -154 116 -276 174 -193 91 -402 157 -661 208 -120 24 -362 46 -660 62 -121 6 -221 12 -221 13 -1 0 62 116 140 256 255 460 257 463 150 310 -86 -122 -163 -247 -281 -454 -90 -157 -101 -182 -86 -188 10 -4 146 -20 303 -37 279 -30 464 -60 745 -121 263 -58 435 -115 640 -216 153 -74 227 -139 300 -260 l35 -58 0 521 0 522 -89 55 c-298 184 -604 296 -946 345 -129 19 -454 52 -479 50 -6 -1 27 -10 74 -21z"></path><path d="M225 1030 c59 -28 248 -92 670 -225 287 -91 485 -165 642 -240 188 -90 249 -134 470 -341 l121 -114 87 94 c262 286 529 443 1015 596 329 104 790 254 787 256 -4 5 -234 -14 -392 -32 -163 -18 -580 -92 -725 -129 -344 -87 -640 -274 -740 -468 l-34 -64 -28 59 c-34 73 -111 156 -192 207 -319 201 -829 342 -1470 406 -138 14 -255 25 -260 24 -6 0 16 -14 49 -29z"></path></g></svg>
      <div class=" group-data-[collapsible=icon]:hidden bg-white border-r-[2.0px] w-0 h-[50px] ml-2.5  mr-2.5"></div>
      <div class="-mt-2 group-data-[collapsible=icon]:hidden -mb-2"><span class="block text-left text-2xl sm:text-3xl text-white   font-semibold">HALISY</span><span class="sm:text-lg text-white">Edcosystem</span></div>
      </div>
    
      </SidebarMenuItem>
      </SidebarMenu>
      </SidebarHeader>
      <NavUser user={data.user} />
      <SidebarContent>
        <NavMain items={data.navMain} />
       
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>)
  );
}
