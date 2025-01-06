import Counter from "./Counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
};

function CounterPage() {
  return <Counter />;
}

export default CounterPage;
