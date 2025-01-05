type Props = {
  params: Promise<{ slug: string[] }>;
};

async function DocsPage({ params }: Props) {
  const { slug } = await params;

  if (slug.length === 2) {
    return (
      <h1>
        Docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  }

  if (slug.length === 1) {
    return <h1>Docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs Homepage</h1>;
}

export default DocsPage;
