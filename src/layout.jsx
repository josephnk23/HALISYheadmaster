import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./components/app-sidebar"; // Adjust the path to your AppSidebar
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Search } from "lucide-react";
import { format } from 'date-fns';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import AnalogClock from "./components/AnalogClock";



export function Layout() {
  const currentDate = format(new Date(), 'EEEE do MMMM yyyy');
  const [open, setOpen] = useState(false)
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <SidebarProvider className='w-screen'>
      <AppSidebar />
      <div className=" flex flex-col w-full overflow-x-hidden ">
        {/* Header */}
       
        <header className="bg-[#27348B] w-full  bg-opacity-30 h-[74px] flex items-center text-white p-3">
        {/* <SidebarTrigger />  */}
        <SidebarTrigger className="p-2 bg-[#27348B] text-white" />
          <h1 className="font-semibold ml-10 text-xl  md:text-3xl text-[#27348B]">Rynev Community School</h1>
          <div className="ml-auto flex gap-2" >
          <div className="flex-col">
          <Search onClick={() => setOpen(true)} className="md:hidden stroke-[#27348B]" size={20} />
          <p className="md:flex hidden font-semibold mb-1">{currentDate}</p>
          <div className="md:flex hidden">
          <input type="text" placeholder="Search..." class="p-1  outline-none"/>
          <div class="p-1 px-2 flex items-center  bg-[#27348B]">
            <Search size={20} />
          </div>
            </div>
          </div>
          <AnalogClock />

          </div>

          
        </header>

        <CommandDialog  open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type to search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Dashboard</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
        {/* Page Content */}
        <main className=" p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      </SidebarProvider>
     
    </div>
  );
}
