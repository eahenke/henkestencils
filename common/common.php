<!DOCTYPE html>

<?php

function head() { ?>
	<html lang="en">
		<head>
		    <title>Henke Stencils</title>
		    <meta charset="utf-8" />
		    <meta name="author" content="Eric Henke" />
		    <meta name="description" content="Hand-cut stenciled artwork by Eric Henke" />
		    <meta name="viewport" content="width=device-width" /> 

		 	<link rel="shortcut icon" href="/images/icons/favicon.png" type="image/x-icon" />  
		 	<link href='http://fonts.googleapis.com/css?family=Roboto+Slab' rel='stylesheet' type='text/css'>
		 	<link href="css/grid.css" rel="stylesheet" type="text/css" />
		    <link href="css/main.css" rel="stylesheet" type="text/css" />
		    <link rel="stylesheet" href="css/mobilefonts.css">
		</head>
		<body>
			<div class="wrap">
				<div class="brand">Henke Stencils</div>
				<aside class="col-2">
					<ul class="nav">
						<li><a href="index.php">Work</a></li>
						<li><a href="about.php">Eric Henke</a></li>
					</ul>
					<hr />
					<ul class="social">
						<li><a href="http://www.facebook.com/henkestencils">Facebook</a></li>
						<li><a href="http://www.twitter.com/henkestencils">Twitter</a></li>
						<li><a href="http://www.instagram.com/henkestencils">Instagram</a></li>

					</ul>
				</aside>
				<div class="grid-container">							
<?php }

function foot() { ?>
									
		</div><!--GRID CONTAINER-->
	
<!-- MORE FOOTER STUFF -->
		<div class="copyright">
			<p>&copy; <?= date("Y") ?> &middot; Eric Henke &middot; All Rights Reserved</p>
		</div>
	 </div><!--WRAP -->
		    
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="js/stencil.js" type="text/javascript"></script>

</body>

<?php } ?>