const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
   datos = {
      nombre: "Jhon Smith",
      email: "jhon.smith@gmail.com"
   }
   res.render('dash', (err, html) => {
      res.render('templates/layout', {
         'usuario': datos,
         'tituloSeccion': 'Dashboard',
         'seccion': html
      })
   });
});

module.exports = router