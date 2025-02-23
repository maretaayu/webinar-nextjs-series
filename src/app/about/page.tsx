import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "About",
  description: "ini about",
});

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default About;
