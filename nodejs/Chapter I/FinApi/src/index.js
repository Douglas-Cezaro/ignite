const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

// Middleware
function verifyExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return res.status(404).json({ error: "Customer not Found!" });
  }

  req.customer = customer;
  return next();
}

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement []
 */

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customersAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customersAlreadyExists) {
    return res.status(400).json({ error: "Customer already Exists!" });
  }

  customers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: [],
  });

  return res.status(201).send();
});

app.get("/statement", verifyExistsAccountCPF, (req, res) => {
  const { customer } = req;
  return res.json(customer.statement);
});

app.post("/deposit", verifyExistsAccountCPF, (req, res) => {
  const { description, amount } = req.body;

  const { customer } = req;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  customer.statement.push(statementOperation);

  return res.status(201).send();
});

app.listen(3333);
