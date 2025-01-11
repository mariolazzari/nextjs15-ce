import Card from "@/components/card";
import Link from "next/link";

function Archived() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}

export default Archived;
