import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id;

  const users = [
    { id: 1, name: "Douglas" },
    { id: 2, name: "Diego" },
    { id: 3, name: "Dani" },
  ];
  return response.json(users);
};

