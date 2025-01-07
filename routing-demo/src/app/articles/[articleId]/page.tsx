"use client";

import { use } from "react";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: "en" | "it" }>;
};

function NewsPage({ params, searchParams }: Props) {
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <h2>Article: {articleId}</h2>
      <h3>Language: {lang}</h3>
    </div>
  );
}

export default NewsPage;
