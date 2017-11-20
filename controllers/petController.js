var db = require('../models/');

module.exports = (app) => {

// INDEX
app.get('/', (req, res) => {
  db.Pet.findAll().then(pets => {
    res.render('pets-index', {pets: pets})
  })

})

// NEW
app.get('/new', (req, res) => {
  res.render('pets-new', {})
})

// CREATE
app.post('/create', (req, res) => {
  const data = req.body

  db.Pet.create(data).then((pet) => {
    console.log("Created pet successfully!")
    res.redirect('/')
  }).catch(err => {
    console.log("There was an error saving", err)
  })

})

// SHOW


  // INDEX
  // app.get('/', function(req, res) {
  //   db.Pet.find().sort({'_id': -1}).exec((err, consultants) => {
  //     res.json(consultants)
  //   })
  // })


  // //POST SHOW
  // app.get('/post/:id', function (req, res) {
  //   var post = Post.findById(req.params.id).populate('comments').exec(function(err, post){
  //     res.render('post-show', {post: post});
  //   });
  // });
  //
  // //POST CREATE
  // app.post('/posts', function (req, res) {
  //   var post = new Post(req.body);
  //
  //   post.save(function (err) {
  //     console.log(post);
  //     res.send(post);
  //   });
  // });
  //
  // //POST DELETE
  // app.delete('/post/:id', function (req, res) {
  //   Post.findById(req.params.id).exec(function (err, post) {
  //     post.remove();
  //     res.status(200).json({});
  //   });
  // });
  //
  // //POST EDIT
  // app.get('/post/edit/:id', function (req, res) {
  //   var post = Post.findById(req.params.id).exec(function(err, post){
  //     res.render('post-edit', {post: post});
  //   });
  // });
  //
  // //POST UPDATE
  // app.put('/post/:id', function(req, res) {
  //   Post.findById(req.params.id).exec(function(err, post) {
  //     if (err) { return res.send(err) }
  //     post.title = req.body.title;
  //     post.category = req.body.category;
  //     post.content = req.body.content;
  //
  //     post.save(function(err, post) {
  //       if (err) { return res.send(err) }
  //       res.send(post)
  //     })
  //   })
  // })
}
