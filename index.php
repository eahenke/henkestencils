<?php
	include("common/common.php");

	head();

/*	get_json();*/
	fill_content();

	foot();



#FUNCTIONS

function get_json() {
	$json = file_get_contents("json/artinfo.json");

	//print $json;
	$json = json_decode($json);

	return $json;
}

function fill_content() { 

	$json = get_json();	
	$gallery = [];
	$newwork = [];
	
	foreach($json->pieces as $piece) {
		$new = $piece->new;
		if($new) {
			array_push($newwork, $piece);
		} else {
			array_push($gallery, $piece);
		}
		
	}

	//add functions for new and gallery
	fill_new($newwork);
	fill_gallery($gallery);
}

function fill_new($newwork) { 
	$count = 1;
	?>
	
	<div class="row">
		<div class="new-work col-9">
			<p><em>New Work</em></p>

	<?php foreach($newwork as $piece) {
		image_content($piece, $count);
		$count++;
	} ?>

		</div><!--end new-work wrap-->
	</div> <!--end "new" row --> 

<?php }

function fill_gallery($gallery) { 
	$count = 1; 
	?>
	<div class="row">
		<div class="gallery col-9">
			<p><em>Gallery</em>	</p>
			<div class="row">
				<?php foreach($gallery as $piece) {
					image_content($piece, $count);
					$count++;
				} ?>
			</div> <!--end row-->
		</div><!--end gallery-->
	</div><!--end row gallery-->

<?php }

function image_content($piece, $count) {
	$title = $piece->title;
	$medium = $piece->medium;
	$size = $piece->size;
	$available = $piece->available;
	$url = $piece->filename;

	if($available) {
		$available = "Available";
	} else {
		$available = "Not available";
	}

?>
	<div class="col-4">
		<div class="img-container">
			<img src="images/thumb/<?= $url ?>" alt="<?= $title ?>" />
			<div class="title hidden"><p><?= $title ?></p></div>
			<div class="info hidden">
				<p class="avail"><?= $available ?></p>
				<p class="medium-size"><?= $medium ?>, <?= $size ?></p>
			</div>	
		</div>
	</div>

	<?php
	if($count % 3 == 0) { ?>
		</div> <!--end row-->
		<div class="row">
	<?php }
} ?>	