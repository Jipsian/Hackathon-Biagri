import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    produit: String,
    prixLivre: Number,
    quantite: Number,
    villeOrigine: String,
    villeDestination: String,
    prixNet: Number
});

let model = mongoose.model('Todo', todoSchema);

export default class Todo {

    findAll(req, res) {
        model.find({}, (err, todos) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(todos);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, todo) => {
            if (err || !todo) {
                res.sendStatus(403);
            } else {
                res.json(todo);
            }
        });
    }

    create(req, res) {
      console.log(req.body);
        model.create({
                produit: req.body.produit,
                prixLivre: req.body.prixLivre,
                quantite: req.body.quantite,
                villeOrigine: req.body.villeOrigine,
                villeDestination: req.body.villeDestination
            },
            (err, todo) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(todo);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
          produit: req.body.produit,
          prixLivre: req.body.prixLivre,
          quantite: req.body.quantite,
          villeOrigine: req.body.villeOrigine,
          villeDestination: req.body.villeDestination
        }, (err, todo) => {
            if (err || !todo) {
                res.status(500).send(err.message);
            } else {
                res.json(todo);
                console.log(todo);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
