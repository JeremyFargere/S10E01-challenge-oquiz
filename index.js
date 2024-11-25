// Toujours commencer par importer les variables d'environnement !
import 'dotenv/config';
import { join } from 'node:path';
import express from 'express';
import { router } from './app/router.js';
const app = express();

// //On importe le router
//import { router } from './app/router.js';

//On déclare le moteur de rendu et le dossier des vues
app.set('view engine', 'ejs');
// ! faille de sécu
////app.set('views', 'app/views');
app.set('views', join(import.meta.dirname, 'app/views'));

// On défini les fichiers statiques qui sont dans "integration"
// on dit à express ou se trouve les fichiers css, js front, images, favicon etc etc
app.use(express.static(join(import.meta.dirname, 'integration')));
//// app.use(express.static('integration'));


// // On déclare les middlewares
// app.use(express.urlencoded({ extended: true }));

// // Favicon static route
// app.use("/favicon.ico", express.static("./integration/img/logo.svg"));

// routage !
app.use(router);

// // erreur 404
// app.use((req, res) => {
//     res.status(404).render('error404');
// });

// On déclare le port d'écoute
////const BASE_URL = process.env.BASE_URL || 'http://localhost';
////const PORT = process.env.PORT || 3000;
// On lance le serveur
// * app.set : on ajoute un clé sur l'objet app
app.set('port', process.env.PORT || 3000);
app.set('baseUrl', process.env.BASE_URL || 'http://localhost');

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('baseUrl')}:${app.get('port')}`);
});
////app.listen(PORT, () => {
    ////console.log(`Server started on ${BASE_URL}:${PORT}`);
////});
