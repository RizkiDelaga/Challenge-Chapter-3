var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    layout: false,
    title: "Login Administrator"
  });
});

router.get('/dashboard', (req, res) => {
  res.render('contents/dashboard', {
    title: "Dashboard",
    menu: "DASHBOARD",
    listMenu: "Dashboard",
    listMenuLink: "/Dashboard"
  })
});

router.get('/cars', (req, res) => {
  res.render('contents/listCar', {
    title: "List Car",
    menu: "CARS",
    listMenu: "List Car",
    listMenuLink: "/cars"
  })
});

router.get('/cars/add-new-car', (req, res) => {
  res.render('contents/addNewCar', {
    title: "Add New Car",
    menu: "CARS",
    listMenu: "List Car",
    listMenuLink: "/cars"
  })
});

router.get('/cars/edit-car', (req, res) => {
  res.render('contents/editCar', {
    title: "Edit Car",
    menu: "CARS",
    listMenu: "List Car",
    listMenuLink: "/cars"
  })
});


module.exports = router;