import NextHead from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  ogImage?: string;
};

export default function Head({
  title = "Faisal Nur Hakim - Software Engineer",
  description = "Hi, I’m Faisal Nur Hakim — a software engineer, creator, and lifelong learner. Here you’ll find my projects, skills, and ideas brought to life. Let’s build something great together!",
  keywords = [
    "Faisal Nur Hakim",
    "software engineer",
    "web development",
    "portfolio",
    "programming",
    "developer",
    "software solutions",
    "technology",
    "coding",
    "faisalhakim.com",
  ],
  url = "https://faisalhakim.com",
  ogImage = "https://faisalhakim.com/images/logo.webp",
}: HeadProps) {
  const keywordsContent = keywords.join(", ");
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsContent} />
      <meta name="author" content="Faisal Nur Hakim" />
      <meta name="copyright" content="Faisal Nur Hakim" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />

      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
