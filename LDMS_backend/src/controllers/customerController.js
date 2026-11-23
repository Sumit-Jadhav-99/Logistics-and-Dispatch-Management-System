const Customer =
  require("../models/Customer");

exports.createCustomer =
  async (req, res) => {

    try {

      const count =
        await Customer.countDocuments();

      const customer =
        await Customer.create({

          ...req.body,

          customerCode:
            `CUS${1000 + count + 1}`,

          createdBy:
            req.user.id
        });

      res.status(201).json(customer);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });
    }
  };

exports.getCustomers =
  async (req, res) => {

    try {

      const customers =
        await Customer.find();

      res.status(200).json(customers);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });
    }
  };

exports.getCustomerById =
  async (req, res) => {

    try {

      const customer =
        await Customer.findById(
          req.params.id
        );

      if (!customer) {
        return res.status(404).json({
          message: "Customer Not Found"
        });
      }

      res.status(200).json(customer);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });
    }
  };

exports.updateCustomer =
  async (req, res) => {

    try {

      const customer =
        await Customer.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

      res.status(200).json(customer);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });
    }
  };

exports.updateStatus =
  async (req, res) => {

    try {

      const customer =
        await Customer.findByIdAndUpdate(
          req.params.id,
          {
            status:
              req.body.status
          },
          {
            new: true
          }
        );

      res.status(200).json(customer);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });
    }
  };

