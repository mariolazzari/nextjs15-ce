import { comments } from "../data";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_req: Request, { params }: Context) {
  const { id } = await params;
  const comment = comments.find(comment => comment.id === parseInt(id));

  return Response.json(comment);
}

export async function PATCH(req: Request, { params }: Context) {
  const { id } = await params;
  const { text } = await req.json();

  const idx = comments.findIndex(comment => comment.id === +id);
  comments[idx].text = text;

  return Response.json(comments[idx]);
}

export async function DELETE(_req: Request, { params }: Context) {
  const { id } = await params;

  const idx = comments.findIndex(comment => comment.id === +id);
  const deleted = comments[idx];
  comments.splice(idx, 1);

  return Response.json(deleted);
}
