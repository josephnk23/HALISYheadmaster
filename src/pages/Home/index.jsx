import React, {useState} from 'react'
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '@/components/ui/card'
import { ArrowUp, ArrowDown, ChevronRight, EllipsisVertical, Mail, Star, MessageSquare, MessageSquareIcon } from 'lucide-react'
import { Line, LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { DailyActiveStudentsChart } from '@/components/RadialActiveChart'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from '@/components/ui/calendar'


const data = [
  { week: "Wk1", attendance: 40 },
  { week: "Wk2", attendance: 45 },
  { week: "Wk3", attendance: 35 },
  { week: "Wk4", attendance: 42 },
  { week: "Wk5", attendance: 38 },
  { week: "Wk6", attendance: 55 },
  { week: "Wk7", attendance: 70 },
]

const KeywordData = [
  { keyword: "Anatomy", count: 30 },
  { keyword: "Robotics", count: 25 },
  { keyword: "AI Tools", count: 20 },
  { keyword: "Farming", count: 15 },
  { keyword: "Careers", count: 10 },
  { keyword: "New Energy", count: 10 },
  { keyword: "Animals", count: 10 },
]

const recentActivities = [
  {
    name: "Mrs. Valerie Crenstil",
    title: "Head of UN Educational Development in Africa",
    image: "/images/avatar1.jpg",
  },
  {
    name: "Hon Darkwa Darko",
    title: "Dir -Ministry of Education Private Schols Supervision",
    image: "/images/avatar2.jpg",
  },
  {
    name: "Sister Catherine Munkumi",
    title: "Community Parish Visitation",
    image: "/images/avatar3.jpg",
  },
 
];

const events = [
  {
    name: "First Time Excursion",
    attendance: 123,
 
  },
  {
    name: "Teacher - Parents Days",
    attendance: 315,

  },
  {
    name: "First term PTA Meeting",
    attendance: 740,
   
  },
  {
    name: "Speech and Prize Giving Day",
    attendance: 689,
  },
  {
    name: "Carol's Night Procession",
    attendance: 420,
  },
  {
    name: "Career Day",
    attendance: 714,
  },
  {
    name: "Sporting Event",
    attendance: 572,
  },
  
];

const announcements = [
  {
    title: "Mid-Term Exams",
    description:
      "The English Language mid-term exams for Senior High School students have been postponed to the last Friday of November, 2024.",
    color: "border-b-red-400",
  },
  {
    title: "PTA Meeting",
    description:
      "A PTA meeting for the academic year 2024 is scheduled for December 2024. Students should remind their parents.",
    color: "border-b-blue-400",
  },
  {
    title: "Examination Results",
    description:
      "Final year examination results will be updated on the school's website this week.",
    color: "border-b-green-400",
  },
  {
    title: "End of year students party",
    description:
      "End of year celebration party will take place at the school's auditorium. The regional minister is our special guest.",
    color: "border-b-yellow-400",
  },
];

function Home() {
  const [date, setDate] = useState(new Date())
  return (
    <>
    <div className="flex flex-row gap-2 ">
    <div className='flex flex-col w-full overflow-x-hidden'>
    <div className="flex flex-row xl:w-full   xl:flex-nowrap flex-wrap   gap-2">
      <Card className="rounded-none flex-grow  lg:w-[25%] bg-[#8bc34a]">
        <CardContent className="p-6">
          <div className="text-white">
            <div className="text-xl text-center w-full mb-2">Enquiries</div>
            <div className="text-2xl justify-center font-bold flex items-center gap-2">
              337 <ArrowUp className="h-6 w-6" /> 7%
            </div>
            <div className="text-sm w-full text-center mt-2">Second Term - Week 4</div>
          </div>
        </CardContent>
      </Card>
      <Card className=" rounded-none flex-grow  lg:w-[25%] bg-[#ffa726]">
        <CardContent className="p-6">
          <div className="text-white">
            <div className="text-xl text-center w-full mb-2">Enrollment</div>
            <div className="text-2xl justify-center font-bold flex items-center gap-2">
              875 <ArrowUp className="h-6 w-6" /> 11%
            </div>
            <div className="text-sm w-full text-center mt-2">2024/25 Academic Year</div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-none flex-grow  lg:w-[25%] bg-[#26c6da]">
        <CardContent className="p-6">
          <div className="text-white">
            <div className="text-xl text-center w-full  mb-2">Incidence</div>
            <div className="text-2xl justify-center font-bold flex items-center gap-2">
              0009 <ArrowDown className="h-6 w-6" /> 3%
            </div>
            <div className="text-sm w-full text-center mt-2">Second Term - Week 4</div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-none flex-grow  lg:w-[25%] bg-purple-600">
        <CardContent className="p-2">
          <div className="text-white">
            <div className="text-xl text-left w-full flex items-center mt-4  mb-2">People Today</div>
           <table className="table-auto w-full justify-center">
            <thead>
              <tr>
                <th className=" border px-1 py-2">Teachers</th>
                <th className="border px-1 py-2">Students</th>
                <th className="border px-1 py-2">Others</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-1 py-2">12</td>
                <td className="border px-1 py-2">345</td>
                <td className="border px-1 py-2">23</td>
              </tr> 
            </tbody>
           </table>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="flex flex-row mt-2  xl:flex-nowrap flex-wrap xl:w-full  gap-2">
        <Card className='rounded-none   lg:w-[33.33%] '>
            <CardHeader className='bg-gray-200 py-2 px-2'>
             <CardTitle className='flex items-center gap-1'>USER ACTIVITY - Weekly Students Attendance <ChevronRight className='ml-auto'/> </CardTitle>
             
            </CardHeader>
            <CardContent className='p-2 '>
            <ChartContainer
          config={{
            attendance: {
              label: "Attendance",
              color: "hsl(25, 95%, 53%)",
            },
          }}
          className="lg:min-h-[200px] w-[100%]"
        >
       
            <LineChart data={data} margin={{ top: 15, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, 80]}
                ticks={[0, 25, 50, 75, 100]}
              />
              <ChartTooltip />
              <Line
                type="monotone"
                dataKey="attendance"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "hsl(25, 95%, 53%)",
                  strokeWidth: 0,
                }}
                activeDot={{
                  r: 6,
                  fill: "hsl(25, 95%, 53%)",
                  strokeWidth: 0,
                }}
              />
            </LineChart>
         
        </ChartContainer>
            </CardContent>
        </Card>

        <Card className='rounded-none flex-grow  lg:w-[33.33%]   '>
            <CardHeader className='bg-gray-200 py-2 px-2'>
             <CardTitle className='flex items-center gap-1'>Keyword Search Trends <ChevronRight className='ml-auto'/> </CardTitle>
             
            </CardHeader>
            <CardContent className='p-2 '>
            <ChartContainer
          config={{
            count: {
              label: "Keyword",
              color: "hsl(25, 95%, 53%)",
            },
          }}
          className="lg:min-h-[200px] w-[100%]"
        >
          
            <BarChart data={KeywordData} margin={{ top: 15, right: 10, left: -20, bottom: 30 }}  barGap={2} barCategoryGap="10%" >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="keyword"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, angle: -45, textAnchor: "end" }}
                padding={{ left: 10,  right: 10 }}
                 interval={0}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, 80]}
                ticks={[0, 25, 50,  75, 100]}
              />
              <ChartTooltip />
             <Bar dataKey="count" barSize={10} radius={1} fill="hsl(25, 95%, 53%)" />   

            </BarChart>
         
        </ChartContainer>
            </CardContent>
        </Card>

        <DailyActiveStudentsChart />
    </div>
    <div className="flex mt-2 flex-row flex-wrap xl:flex-nowrap xl:w-full gap-2">

    <div className='flex flex-col'>
   <div className='flex flex-wrap xl:flex-nowrap   gap-2'>
     <Card className='rounded-none lg:w-[50%] '> 
     <CardHeader className='bg-gray-200 py-2 px-2'>
             <CardTitle className='flex items-center gap-1'>Recent Activities <EllipsisVertical className='ml-auto' />  </CardTitle>
             <CardDescription className='text-sm'>Visiting Personalities</CardDescription>
            </CardHeader>
            <CardContent className='p-2 '>
            <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={activity.image} alt={activity.name} />
                <AvatarFallback>
                  {activity.name.split(" ").map((word) => word.charAt(0)).join("")}
                </AvatarFallback>
              </Avatar>
              <div className=''>
                <div className="font-medium">{activity.name}</div>
                <div className="text-muted-foreground ">{activity.title}</div>
              </div>
            </div>
          ))}
        </div>
            </CardContent>
    </Card>

    <Card className='rounded-none lg:w-[50%] flex-grow  '>
      <CardHeader className='bg-gray-200 py-2 px-2'>
        <CardTitle className='flex items-center gap-1'>Annual Report <EllipsisVertical className='ml-auto' />  </CardTitle>
        <CardDescription className='text-sm'>Events Attendance</CardDescription>
      </CardHeader>
      <CardContent className='p-2 '>
      <div className="space-y-3">
          {events.map((event, index) => (
            <div key={index} className="flex items-center ">
              <div className="flex w-full">
                <div className="font-medium">{event.name}</div>
                <div className="text-muted-foreground ml-auto  ">{event.attendance}</div>
                <ChevronRight/>
              </div>
            </div>
          ))}
        </div>
        </CardContent>
      </Card>

      </div>
      <div className='mt-2 flex gap-2'>
      <div className='flex  p-4 gap-2 items-center bg-blue-950'>
        <Mail fill='orange' stroke='#172554' color='white' /> <p className='text-white'>24</p> 
      </div>
      <div className='flex  p-4 gap-2 items-center bg-blue-950'>
        <Star  fill='green' strokeWidth={0} color='white' /> <p className='text-white'>10</p> 
      </div>
      <div className='flex  p-4 gap-2 items-center bg-blue-950'>
        <MessageSquareIcon fill='white' color='white' /> <p className='text-white'>42</p> 
      </div>
      <div className='lg:flex hidden   lg:flex-1  bg-green-300 '>
       <img src="/images/rynev-logo.png" alt="" className="" />
       <div className="flex flex-col px-2 pb-1 ">
          <p className="">Edward Abrakum</p>
          <p className="text-xs">Systems Administrator</p>
          <p className="text-xs">Current 1 on: Upper Primary 3</p>
  
        
       </div>

      </div>
    </div>

      </div>

      <Card className='rounded-none bg-green-50 lg:w-[50%] flex-grow '>
      <CardHeader className='bg-green-400 text-gray-700 py-2 px-2'>
                <CardTitle className='flex items-center gap-1' >Personality of the Term <ChevronRight className='ml-auto'/> </CardTitle>
              </CardHeader>
              <CardContent className='p-0'>
                <div className="grid mt-0 grid-cols-3 ">
                  <div className="space-y-2 bg-green-50 border-r-2 border-r-white ">
                   <div className='w-full px-3 py-3 bg-green-200'>
                    <h3 className="font-semibold ">Teacher Category</h3>
                    </div>
                    <Avatar className="w-20 rounded-none mx-3 h-20">
                      <AvatarImage className='rounded-none' src="/placeholder.svg" alt="Teacher" />
                      <AvatarFallback className='rounded-none'>TC</AvatarFallback>
                    </Avatar>
                    <div className='mx-3'>
                      <p className="font-medium">Name: Darkwa Cythia</p>
                      <p className="font-medium">Score Points: </p>
                      <p className="text-sm text-gray-500">Department: Science</p>
                      <p className="text-sm text-gray-500">Punctuality: 92%</p>
                      <p className="text-sm text-gray-500">Class Code: 74%</p>
                      <p className="text-sm text-gray-500">Commitment: 82%</p>
                    </div>
                  </div>
                  <div className="space-y-2 border-r-2 border-r-white ">
                  <div className='w-full pl-3 py-3 placeholder-gray-300 bg-green-200'>
                    <h3 className="font-semibold">Student Category</h3>
                    </div>
                    <Avatar className="w-20 mx-3 rounded-none h-20">
                      <AvatarImage className='rounded-none' src="/placeholder.svg" alt="Student" />
                      <AvatarFallback className='rounded-none'>SC</AvatarFallback>
                    </Avatar>
                    <div className='mx-3'>
                      <p className="">Name: Kingsley Aubyn</p>
                      <p className="">Department: Science</p>
                      <p className="text-sm text-gray-500">Score Points: </p>
                   
                      <p className="text-sm text-gray-500">Attendance: 100%</p>
                      <p className="text-sm text-gray-500">Academics: 98%</p>
                      <p className="text-sm text-gray-500">Punctuality: 100%</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                  <div className='w-full pl-3 py-3 placeholder-gray-300 bg-green-200'>
                    <h3 className="font-semibold">Over All Personality</h3>
                    </div>
                    <Avatar className="w-20 rounded-none  mx-3 h-20">
                      <AvatarImage className='rounded-none' src="/placeholder.svg" alt="Overall" />
                      <AvatarFallback className='rounded-none'>OA</AvatarFallback>
                    </Avatar>
                    <div className='mx-3'>
                      <p className="">Name: Beryl Abba Koomson</p>
                      <p className="font-medium">Department: Technical</p>
                      <p className=" text-sm text-gray-500">Score Points: </p>
                      
                      <p className="text-sm text-gray-500">Attendance: 100%</p>
                      <p className="text-sm text-gray-500">Academics: 98%</p>
                      <p className="text-sm text-gray-500">Commitment: 95%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
        </Card>
 
    </div>

<div className='flex mt-2 gap-2 '>
    <div className='flex flex-grow bg-green-300 '>
       <img src="/images/rynev-logo.png" alt="" className="" />
       <div className="flex flex-col px-2 pb-1 ">
          <p className="">Edward Abrakum</p>
          <p className="text-xs">Systems Administrator</p>
          <p className="text-xs">Current 1 on: Upper Primary 3</p>
  
        
       </div>

      </div>

      <div className='flex flex-grow  bg-green-300 '>
       <img src="/images/rynev-logo.png" alt="" className="" />
       <div className="flex flex-col px-2 pb-1 ">
          <p className="">Edward Abrakum</p>
          <p className="text-xs">Systems Administrator</p>
          <p className="text-xs">Current 1 on: Upper Primary 3</p>
  
        
       </div>

      </div>

      <div className='flex flex-grow  bg-green-300 '>
       <img src="/images/rynev-logo.png" alt="" className="" />
       <div className="flex flex-col px-2 pb-1 ">
          <p className="">Edward Abrakum</p>
          <p className="text-xs">Systems Administrator</p>
          <p className="text-xs">Current 1 on: Upper Primary 3</p>
  
        
       </div>

      </div>
  
    </div>
    </div>
  
      <div className=" flex-col hidden lg:flex max-w-[404px] gap-2">
        <Card className='rounded-none  '>
          <CardHeader className='bg-gray-200 py-2 px-2'>
            <CardTitle className='flex items-center gap-1'>Notice Board  </CardTitle>
            </CardHeader>
          <CardContent className='p-2 flex flex-col gap-y-4 '>
          {announcements.map((announcement, index) => (
        <Card key={index}>
          <CardContent className={`p-2 border-b-4  rounded-b-lg ${announcement.color}`}>
            <div className="text-sm">
              <div className="text-sm font-bold">{announcement.title}</div>
              <div className="text-muted-foreground">{announcement.description}</div>
            </div>
          </CardContent>
        </Card>
      ))}
            </CardContent>                                                                                                                                                                                                                                                                       
          
           </Card>

           <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
            }}
          />
           </div>
    </div>


    </>
  )
}

export default Home
