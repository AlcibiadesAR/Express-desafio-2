const db = require("../db/index");

let bandas = {
  home: function (req, res, next) {
    let listadoBanda = db.lista;
    return res.render("listadoBandas", {
      title: "Bandas Musicales",
      lista: listadoBanda,
    });
  },
  detalle: function (req, res) {
    let id = parseInt(req.params.id);
    let idBanda = db.lista.find((bandaID) => bandaID.id === id);

    if (idBanda) {
      return res.render("detalleBanda", {
        title: "Detalles",
        detalles: idBanda,
      });
    } else {
      return res
        .status(404)
        .send(`<img src="/images/error.png" alt="Imagen de error" />`);
    } 
  },
  genero: function (req, res) {
    let porGenero = req.params.genero
    let generos = db.lista.filter((gnro) => gnro.genero === porGenero )
    if (generos) {
      return res.render("porGenero", {
        title: "Bandas del genero",
        listaPorGenero: generos,
      });
    } else {
      return res
        .status(404)
        .send(`<img src="/images/error2.png" alt="Imagen de error" />`);
    } 
  }
};

module.exports = bandas;
