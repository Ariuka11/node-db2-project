const express = require("express");
const db = require('../data/config')

const router = express.Router();

router.get("/", async (req, res, next) => {
    try{    
        const cars = await db("cars")
        res.json(cars)
    } catch (err){ 
        next(err)
    }
})
router.post("/", async (req, res, next) => {
    try{    
        const payload = {
            make : req.body.make,
            model: req.body.model,
            year: req.body.year,
            mileage: req.body.mileage
        }
        const [id] = await db("cars").insert(payload)
        const newCar = await db("cars").where("id", id).first()
        res.json(newCar)
    } catch (err){ 
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{ 
        const { id } = req.params   
        const cars = await db("cars").where({ id }).first()
        res.json(cars)
    } catch (err){ 
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try{ 
        const payload = {
            make : req.body.make,
            model: req.body.model,
            year: req.body.year,
            mileage: req.body.mileage
        }

        const { id } = req.params   
        await db("cars").where({id}).update(payload)
        const car = await db("cars").where({ id }).first()
        res.json(car)

    } catch (err){ 
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{ 
        const { id } = req.params   
        const car = await db("cars").where({ id }).del()
        res.json(car)
    } catch (err){ 
        next(err)
    }
})

module.exports = router;