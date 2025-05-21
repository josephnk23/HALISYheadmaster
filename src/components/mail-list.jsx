
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function MailList({ items, onSelect, selectedMailId }) {
  if (!items.length) {
    return <div className="p-8 text-center text-muted-foreground">No emails found.</div>;
  }

  return (
    <div className="flex-1 overflow-auto">
      {items.map((mail) => (
        <div
          key={mail.id}
          className={cn(
            "flex cursor-pointer items-start gap-2 border-b p-3 hover:bg-muted/50",
            selectedMailId === mail.id && "bg-muted/50",
          )}
          onClick={() => onSelect(mail.id)}
        >
          <Avatar className="mt-1 h-8 w-8">
            <AvatarImage src={mail.avatarSrc || "/placeholder.svg"} alt={mail.name} />
            <AvatarFallback>{mail.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 gap-1">
            <div className="flex items-start justify-between gap-2">
              <div className="font-semibold">{mail.name}</div>
              <div className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(mail.date), { addSuffix: true })}
              </div>
            </div>
            <div className="text-sm font-medium">{mail.subject}</div>
            <div className="text-xs text-muted-foreground line-clamp-1">{mail.text}</div>
            <div className="flex items-center gap-2 pt-1">
              {mail.labels.map((label) => (
                <Badge key={label} variant="outline" className="text-xs">
                  {label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}