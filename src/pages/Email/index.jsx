import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
  MoreVertical,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MailDisplay } from "@/components/mail-display";
import { MailList } from "@/components/mail-list";
import { useMail } from "@/hooks/use-mail";

export default function Mail() {
  const [selectedMail, setSelectedMail] = React.useState(null);
  const { mails } = useMail();

  return (
    <div className="-m-4 flex h-screen flex-col">
    
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden border-r bg-muted/40 sm:block sm:w-64">
          <div className="flex fixed w-64 h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-4">
              <Select className='rounded-0' defaultValue="personal">
                <SelectTrigger className="h-8 w-full justify-start border-none  p-0 ">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-0 text-sm font-medium">
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Inbox className="h-4 w-4" />
                      <span>Inbox</span>
                    </div>
                    <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">128</span>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <File className="h-4 w-4" />
                      <span>Drafts</span>
                    </div>
                    <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">9</span>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>Sent</span>
                    </div>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <ArchiveX className="h-4 w-4" />
                      <span>Junk</span>
                    </div>
                    <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">23</span>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      <span>Trash</span>
                    </div>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Archive className="h-4 w-4" />
                      <span>Archive</span>
                    </div>
                  </div>
                </Button>
                {/* <Separator className="my-2" /> */}
                {/* <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Users2 className="h-4 w-4" />
                      <span>Social</span>
                    </div>
                    <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">972</span>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>Updates</span>
                    </div>
                    <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">342</span>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <MessagesSquare className="h-4 w-4" />
                      <span>Forums</span>
                    </div>
                    <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">128</span>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Shopping</span>
                    </div>
                    <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">8</span>
                  </div>
                </Button>
                <Button variant="ghost" className="justify-start gap-2 font-normal" asChild>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <PenBox className="h-4 w-4" />
                      <span>Promotions</span>
                    </div>
                    <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">21</span>
                  </div>
                </Button> */}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2  p-2">
            <Tabs defaultValue="all" className="flex-1">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all" className="text-xs sm:text-sm">
                    All mail
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="text-xs sm:text-sm">
                    Unread
                  </TabsTrigger>
                </TabsList>
                <div className="hidden items-center gap-2 md:flex">
                  <Button variant="ghost" size="icon" disabled={!selectedMail}>
                    <Archive className="h-4 w-4" />
                    <span className="sr-only">Archive</span>
                  </Button>
                  <Button variant="ghost" size="icon" disabled={!selectedMail}>
                    <ArchiveX className="h-4 w-4" />
                    <span className="sr-only">Move to junk</span>
                  </Button>
                  <Button variant="ghost" size="icon" disabled={!selectedMail}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Move to trash</span>
                  </Button>
                  <Separator orientation="vertical" className="h-6" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" disabled={!selectedMail}>
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                      <DropdownMenuItem>Star thread</DropdownMenuItem>
                      <DropdownMenuItem>Add label</DropdownMenuItem>
                      <DropdownMenuItem>Mute thread</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <TabsContent value="all" className="m-0">
                <div className="flex h-[calc(100vh-8rem)] flex-col">
                  <div className="flex items-center gap-2 border-b p-2">
                    <div className={`w-full ${selectedMail ? 'hidden' : 'block'} relative`}>
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search" className="pl-8" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <MailList items={mails} onSelect={(id) => setSelectedMail(id)} selectedMailId={selectedMail} />
                    {selectedMail ? (
                      <MailDisplay
                        mail={mails.find((item) => item.id === selectedMail)}
                        onClose={() => setSelectedMail(null)}
                      />
                    ) : null}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <div className="flex h-[calc(100vh-8rem)] flex-col">
                  <div className="flex items-center gap-2 border-b p-2">
                    <div className={`w-full ${selectedMail ? 'hidden' : 'block'} relative`}>
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search" className="pl-8" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <MailList
                      items={mails.filter((item) => !item.read)}
                      onSelect={(id) => setSelectedMail(id)}
                      selectedMailId={selectedMail}
                    />
                    {selectedMail ? (
                      <MailDisplay
                        mail={mails.find((item) => item.id === selectedMail)}
                        onClose={() => setSelectedMail(null)}
                      />
                    ) : null}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}