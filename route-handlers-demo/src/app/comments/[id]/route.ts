import { comments } from "../data";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_req: Request, { params }: Context) {
  const { id } = await params;
  const comment = comments.find(comment => comment.id === parseInt(id));

  return Response.json(comment);
}
