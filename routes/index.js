var express = require('express');
var router = express.Router();

// Bantahs
router.get('/lad/kg', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=hqDinxaPUK4');
});

router.get('/lad/raghav', function (req, res) {
	res.redirect('https://www.instagram.com/aduititulsi');
});

router.get('/lad/jyotir', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=uD_P8giGSDc');
});

router.get('/lad/deswal', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=GXV5rsivZys');
});

router.get('/lad/srivastva', function (req, res) {
	res.redirect('https://www.youtube.com/watch?app=desktop&v=DcvrNVJnRBo&list=PLhtgvCxzPerG1n8oSLxsaHGAZyopEcnVP&index=4');
});

router.get('/lad/aku', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=wiF4nTv8G7M');
});

router.get('/lad/omu', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=mJolFKG39_4');
});

router.get('/lad/harami', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=4l00yFHv_ig');
});

router.get('/lad/vegetariandwarkian', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=mA_z6L4qwjE');
});

router.get('/lad/ridhi', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=N6SQ9QoSjCI');
});

router.get('/lad/navaiya', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=L1cZuzTeWv8');
});

router.get('/lad/lavaniya', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=mo2GTFzH514');
});

router.get('/lad/jalaj', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=jURo-_lj9yk');
});

router.get('/lad/kanudia', function (req, res) {
	res.redirect('https://www.youtube.com/watch?v=nIlv9CHem6A');
});

// router.get('/lad/', function (req, res) {
// 	res.redirect('');
// });

// GET home page 
router.get('/', function (req, res, next) {
	res.render('index', {
		title: "Krish Goel · KrishSkywalker"
	});
});

// Projects routing
router.get('/projects/binarybox', function (req, res) {
	res.render('projects/binarybox/index', {});
});

router.get('/projects/eyena', function (req, res) {
	res.render('projects/eyena/index', {});
});

router.get('/projects/gyaanacademy', function (req, res) {
	res.render('projects/gyaanacademy/index', {});
});

// Details pages routing
router.get('/projects', function (req, res, next) {
	res.render('detailPages/projects', {
		title: "Projects | Krish Goel · KrishSkywalker"
	});
});

// Subsections # routing
router.get('/:section', function (req, res) {
	if (["repertoire", "experience", "blog", "reachMe"].includes(req.params.section)) {
		res.redirect('/#' + req.params.section);
	}
});

// Blog articles routing
router.get('/blog/:blogTitle', function (req, res) {
	var blogTitle = req.params.blogTitle;
	console.log(blogTitle);
	res.render(('blog/' + blogTitle), {});
});


module.exports = router;