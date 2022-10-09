import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const session = await unstable_getServerSession(req, res, authOptions);
      if (session) {
        const stripeCustomer = await stripe.customers.create({
          email: session.user.email,
          // metadata:
        });

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
          customer: stripeCustomer.id,
          payment_method_types: ["card"],
          billing_address_collection: "required",
          line_items: [
            {
              price: "price_1LqoemCqXaBE3cpEP46APorX",
              quantity: 1,
            },
          ],
          mode: "subscription",
          allow_promotion_codes: true,
          success_url: process.env.STRIPE_SUCCESS_URL,
          cancel_url: process.env.STRIPE_CANCEL_URL,
        });
        return res.status(200).json({ sessionId: stripeCheckoutSession.id });
      }
      res.status(401).json({ error: "Usuário não está autenticado" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: e.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};

