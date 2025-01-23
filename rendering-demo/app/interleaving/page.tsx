import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";
import { ServerComponentTwo } from "@/components/server-component-two";

function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      <ServerComponentOne />
      <ClientComponentOne>
        <ServerComponentTwo />
      </ClientComponentOne>
    </>
  );
}

export default InterleavingPage;
