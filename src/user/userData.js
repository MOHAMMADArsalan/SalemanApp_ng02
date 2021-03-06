/// <reference path="../../typings/tsd.d.ts" />
var express = require("express");
var usermodel_1 = require("./usermodel");
var router = express.Router();
//Get comapny Detail
router.get("/getcompany", function (req, res) {
    console.log(req.query.token);
    usermodel_1.companyModel.find({ $or: [{ adminId: req.query.token }, { usersIds: req.query.token }] }, function (err, data) {
        if (err) {
            res.send("Error to load Company");
        }
        else if (!data) {
            res.send("Company not found");
        }
        else {
            res.send(data);
        }
    });
});
// Add product
router.post("/addproduct", function (req, res) {
    var product = new usermodel_1.productModel(req.body);
    product.adminId = req.query.token;
    product.companyId = req.query.token;
    req.body.adminId = req.query.token;
    req.body.companyId = req.query.token;
    product.save(function (err, success) {
        if (err) {
            res.send({ message: false, Error: "Error to add product" });
            return;
        }
        ;
        usermodel_1.companyModel.update({ adminId: req.body.adminId }, { $push: { productId: req.body.companyId } }, function (error, data) {
            if (err) {
                res.send({ message: false, Error: "Error to update company" });
            }
            else {
                res.send({ message: true, data: "product add Successfully" });
            }
        });
    });
});
//Take Order
router.post("/takeorder", function (req, res) {
    var order = new usermodel_1.OrderModel(req.body);
    console.log(req.body);
    order.save(function (err, success) {
        if (err) {
            res.send({ message: false, Error: "Error to add order" });
            return;
        }
        ;
        usermodel_1.companyModel.update({ adminId: req.body.companyId }, { $push: { orders: req.query.token } }, function (error, data) {
            if (err) {
                res.send({ message: false, Error: "Error to update company" });
            }
            else {
                res.send({ message: true, data: "product add Successfully" });
            }
        });
    });
});
//Get Order detail
router.get("/getorder", function (req, res) {
    usermodel_1.OrderModel.find({ companyId: req.query.token }, function (err, data) {
        if (err) {
            res.send("Error to load Company");
        }
        else if (!data) {
            res.send("Order not found");
        }
        else {
            res.send(data);
        }
    });
});
//Get Saleman detail
router.get("/getsaleman", function (req, res) {
    usermodel_1.AdminModel.find({ companyId: req.query.token, role_admin: false }, function (err, data) {
        if (err) {
            res.send("Error to load Company");
        }
        else if (!data) {
            res.send("saleman not found");
        }
        else {
            res.send({ data: data });
        }
    });
});
//Get only One Saleman detail
router.get("/getOnesaleman/:firebaseToken", function (req, res) {
    console.log(req.params.firebaseToken);
    usermodel_1.AdminModel.findOne({ firebaseToken: req.params.firebaseToken, role_admin: false }, function (err, data) {
        if (err) {
            res.send("Error to load Company");
        }
        else {
            res.send(data);
        }
    });
});
//Get product
router.get("/getproduct", function (req, res) {
    usermodel_1.productModel.find({ adminId: req.query.token }, function (err, data) {
        if (err) {
            res.send("Error to load Company");
        }
        else if (!data) {
            res.send("product not found");
        }
        else {
            res.send(data);
        }
    });
});
//Get Admin
router.get("/token", function (req, res) {
    usermodel_1.AdminModel.find({ firebaseToken: req.query.token }, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.send({ message: false, Error: err });
            return;
        }
        res.send({ message: true, data: data });
    });
});
//deleveryOrder request
router.post("/deliveryOrder", function (req, res) {
    console.log(req.body);
    var delivery = new usermodel_1.DeliveryModel(req.body);
    delivery.save(function (err, success) {
        if (err) {
            res.send({ message: false, Error: err });
        }
        else {
            usermodel_1.OrderModel.findOneAndRemove({ companyId: req.body.companyId, productId: req.body.productId }, function (err, data) {
                if (err) {
                    res.send({ message: false, Error: err });
                }
                else {
                    usermodel_1.OrderModel.findOneAndRemove({ companyId: req.body.companyId, productId: req.body.productId });
                    res.send({ message: true, success: "order delivered" });
                }
            });
        }
    });
});
//Get deleveryOrder request
router.get("/deliveryOrder/:companyId", function (req, res) {
    usermodel_1.DeliveryModel.find({ companyId: req.params.companyId }, function (err, data) {
        if (err) {
            res.send({ message: false, Error: err });
        }
        else {
            if (!data) {
                res.send({ message: false, data: "Data nod found" });
            }
            else {
                console.log(data);
                res.send({ message: true, success: data });
            }
        }
    });
});
module.exports = router;
