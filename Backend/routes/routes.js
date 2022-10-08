// const express = require('express');
const Model = require('../models/restaurants.model')
// const router = express.Router();

// router.get('/getAll', async (req, res) => {
//     try {
//         const data = await Model.find();
//         console.log("getting");
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// router.get('/getOne/:id', async (req, res) => {
//     try {
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Model.findByIdAndDelete(id)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// router.post('/post', async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"
 
//history
import { history } from './helpers/history';
import HomePage from "./src/pages/Home/landing"
import LoginPage from "./src/components/common/login/Login"
 
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <RouteGuard
                   exact
                   path="/"
                   component={HomePage}
               />
               <Route
                   path="/login"
                   component={LoginPage}
               />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes;

// module.exports = router;