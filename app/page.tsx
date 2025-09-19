import Image from "next/image";
import Avatar from "@/components/Avatar";
import "./page.css";

export default function Home() {
  return (
    <>
      <main>
        <h1>secureWebDev</h1>
        <a href="/about">
          <Avatar imageUrl="https://images6.alphacoders.com/128/1286917.jpg" />
          <p className="center-par">About Me</p>
        </a>
        <div className="divider divider-primary">Profiles</div>
        <a className="btn btn-block btn-neutral" href="/blog">Blog</a>
        <a className="btn btn-block btn-neutral" href="https://github.com/YaJeUlB">GitHub</a>
        <div className="divider divider-primary">Side Project</div>
        <button className="btn btn-block btn-neutral">Project_1</button>
        <button className="btn btn-block btn-neutral">Project_2</button>
      </main>
    </>
  );
}
