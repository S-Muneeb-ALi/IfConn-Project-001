import { Card } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Card style={{marginLeft:"30%", marginRight:"30%"}}>
        <Image
          src="/logomain.png"
          alt="Vercel Logo"
          width={600}
          height={600}
          priority
        />
      </Card>
    </main>
  );
}
