var express = require("express");
var authorsRouter = express.Router();
function router(nav) {
    var authors = [
        {
            Name: "Suzanne Collins",
            Bestbooks: "The Hunger Games",
            age: " 50",
            image: "suzanne.jpg"

        },
        {
            Name: "Madeleine",
            Bestbooks: " Wrinkle In Time ",
            age: "48",
            image: "madeleine.jpg"
        },
        {

            Name: "Richard Adams",
            Bestbooks: " Water Ship Down ",
            age: "57",
            image: "Richard.jpg"

        },
        {

            Name: "J.K Rowling",
            Bestbooks: " Harry Potter ",
            age: "60",
            image: "J.Kr.jpg"
        },

    ]
    authorsRouter.route('/')
        .get((req, res) => {
            res.render(
                'authors',
                {
                    nav,
                    title: 'Authors',
                    authors

                }
            );
        });
    authorsRouter.route('/:id')
        . get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "Authors",
                    author: authors[id],
                })

        });

    return authorsRouter;
}
module.exports = router;
















