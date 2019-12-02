var express=require("express")
var booksRouter=express.Router()
function router(nav){
var books =[
    {
        title:"The Hunger Games",
        genre:" Fiction",
        author:"Suzanne collins",
        image:"im1.jpg"

    },
    {
        title:" Wrinkle In Time ",
        genre:" Fiction",
        author:"Madeleine",
        image:"im2.jpg"

    },
    {
        title:"Water Ship Down",
        genre:"Fiction",
        author:"Richard Adams",
        image:"im3.jpg"

    },
    {
        title:"Harry Potter",
        genre:"Fiction",
        author:"J.K Rowling",
        image: "im4.jpg"
    },
   
]

booksRouter.route('/')
    .get((req, res) => {
        res.render(
            'books',
            {
                nav,
                title: "Books",
                books                
            }
        );
    });
    booksRouter.route('/add')
    .get((req, res) => {
        res.render(
            'addbooks',
            {
                nav,
                title: "Add Books",
                books                
            }
        );
    });
    booksRouter.route('/save')
    .post((req, res) => {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS")
        // res.send('form submit');
        console.log(req.body);
    });

    booksRouter.route('/:id')
    .get((req, res) => {
        const id =req.params.id;
        res.render(
            'book',
            {
                nav,
                title: "Books",
                book:books[id]               
            })
        });
        return booksRouter;
    }
     module.exports=router;