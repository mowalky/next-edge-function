// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "edge",
};
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const getJSON = await fetch(
    "https://3d.bk.tudelft.nl/opendata/cityjson/simplegeom/v1.1/cube.city.json"
  );

  const results = await getJSON.json();

  res.status(200).json(results);
}
