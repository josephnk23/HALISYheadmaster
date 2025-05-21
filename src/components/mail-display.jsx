
import { ArrowLeft, MoreVertical, Reply, ReplyAll, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

export function MailDisplay({ mail, onClose }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-2 border-b">
        <Button variant="ghost" size="icon" onClick={onClose} className="">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon">
            <Reply className="h-4 w-4" />
            <span className="sr-only">Reply</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ReplyAll className="h-4 w-4" />
            <span className="sr-only">Reply all</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">{mail.subject}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={mail.avatarSrc || "/placeholder.svg"} alt={mail.name} />
                    <AvatarFallback>{mail.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{mail.name}</div>
                    <div className="text-xs">{mail.email}</div>
                  </div>
                </div>
                <div>{format(new Date(mail.date), "PPP 'at' p")}</div>
              </div>
            </div>
            <Separator />
            <div className="text-sm leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: mail.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}