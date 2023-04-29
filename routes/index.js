import apiRoute from './reg_routes.js'
const constructorMethod = (app) => {
  app.use("/", );

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

export default constructorMethod;