// Initializing the router for contact
const express = require("express");
const router = express.Router();

const contactController = require("./contact.controllers");

/* Routes
1. create (POST) => PayLoad
2. list (GET) => X
3. getById (GET) => id params
4. update (PUT) => id params, payload
5. delete (DELETE) => id params

*/
router.post("/", (req, res, next) => {
  contactController
  .create(req.body)
  .then((d) => res.json(d))
  .catch((e) => next(e))
});

// List
router.get("/", async (req, res, next) => {
  try{
    const list = await contactController.list();
    res.json(list);
  } catch (e){
    next(e);
  }
});

// ID
router.get("/:id", async (req, res, next) => {
  try{
    const result = await contactController.getIdBy(req.params.id);
    res.json(result);
  } catch (e){
    console.log("err",e);
    next(e);
  }
});

router.put("/:id",async (req, res, next)=>{
  try{
    const id = req.params.id;
    const payload = req.body;
    const result = await contactController.update(id, payload);
    res.json(result);
  }catch(e){
    next(e);
  }
});

router.delete("/:id",async (req, res, next)=>{
  try{
    const id = req.params.id;
    const result = await contactController.remove(id);
    res.json(result);
  }catch(e){
    next(e);
  }
});

module.exports = router;
