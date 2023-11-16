const { request } = require("express");

const controller = {};

controller.show = (req, res) => {
    let {zodiacs} = require("../data")

    res.render("task4", {
        zodiacs
    });
}

controller.showDetails = (req, res) => {

    let {zodiacs} = require("../data");
    console.log(zodiacs.filter(item => item.name == req.params.name)[0].imagePath);
    res.render("task4-details", zodiacs.filter(item => item.name == req.params.name)[0]);
}

module.exports = controller;