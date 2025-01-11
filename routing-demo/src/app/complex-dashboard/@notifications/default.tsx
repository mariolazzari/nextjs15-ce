import Card from "@/components/card";
import Link from "next/link";

function NotificationsDefault() {
  return (
    <Card>
      <div>Notifications Default</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}

export default NotificationsDefault;
