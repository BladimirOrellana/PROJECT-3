const router = require("express").Router();
const usersRoutes = require("./users");
const projectsRoutes = require("./projects");
const fenceSidesRoutes = require("./fenceSides");
const gatesRoutes = require("./gates");
const rawMaterialsRoutes = require("./rawMaterials");
const miscellaneousRoutes = require("./miscellaneous");
const projectMaterialsRoutes = require("./projectMaterials");
const quote = require("./quote");
const email = require('./Email');

router.use("/projectMaterials", projectMaterialsRoutes);
router.use("/projects/state", miscellaneousRoutes);
router.use("/rawMaterials", rawMaterialsRoutes);
router.use("/gates", gatesRoutes);
router.use("/fenceSides", fenceSidesRoutes);
router.use("/projects", projectsRoutes);
router.use("/users", usersRoutes);
router.use("/quote", quote);
router.use("/send", email);

module.exports = router;
