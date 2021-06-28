<?php
	function checkString($s) {
        return (strlen($s) > 0);
    };
    function checkMail($s) {
        return preg_match("/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", $s);
    };
    function checkPhone($s) {
        return preg_match("/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\.0-9]*$/", $s);
    };

	$trafPosts = [
		"fname" => [
			"check" => "checkString",
			"val" => filter_input(INPUT_POST,'fname',FILTER_SANITIZE_SPECIAL_CHARS)
		],
		"lname" => [
			"check" => "checkString",
			"val" => filter_input(INPUT_POST,'lname',FILTER_SANITIZE_SPECIAL_CHARS)
		],
		"email" => [
			"check" => "checkMail",
			"val" => filter_input(INPUT_POST,'email',FILTER_SANITIZE_EMAIL)
		],
		"phone" => [
			"check" => "checkPhone",
			"val" => filter_input(INPUT_POST,'phone',FILTER_SANITIZE_NUMBER_INT)
		],
		"message" => [
			"check" => "checkString",
			"val" => filter_input(INPUT_POST,'message',FILTER_SANITIZE_SPECIAL_CHARS)
		],
	];
	$trafcomplete = false;
	function formCheckPosts($trafPosts){
		$errors = [];
		foreach($trafPosts as $k => $v){
			if (!$v["check"]($v["val"])){
				$errors[] = $k;
			};
		};
		return $errors;
	};
	$errs = formCheckPosts($trafPosts);
	$inputClasses = [];
	if (count($errs) > 0 && !count($errs) === count($trafPosts)) {
		foreach($trafPosts as $k => $v){
			$inputClasses[$k] = " class='success' ";
		};
		foreach($errs as $v){
			$inputClasses[$k] = " class='error' ";
		}

	} elseif (count($errs) === count($trafPosts)) {
		foreach($trafPosts as $k => $v){
			$inputClasses[$k] = "";
		};
	} else {
		foreach($trafPosts as $k => $v){
			$inputClasses[$k] = " class='success' disabled ";
		};
		$trafcomplete = true;
		//global $wpdb;
		$table = $wpdb->prefix.'contactform';
		$data = array('first_name' => $trafPosts['fname']['val'],
			'last_name' => $trafPosts['lname']['val'],
			'email' => $trafPosts['email']['val'],
			'phone' => $trafPosts['phone']['val'],
			'message' => $trafPosts['message']['val'],);
		$format = array('%s','%s','%s','%s','%s');
		$wpdb->insert($table,$data,$format);
		$my_id = $wpdb->insert_id;
	};

?> 


<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<main id="main" class="cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<header class="article-header">

									<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>

									<p class="byline vcard">
										<?php printf( __( 'Posted', 'bonestheme').' <time class="updated" datetime="%1$s" itemprop="datePublished">%2$s</time> '.__( 'by',  'bonestheme').' <span class="author">%3$s</span>', get_the_time('Y-m-j'), get_the_time(get_option('date_format')), get_the_author_link( get_the_author_meta( 'ID' ) )); ?>
									</p>

								</header> <?php // end article header ?>

								<section class="entry-content cf" itemprop="articleBody">
									<?php
										// the content (pretty self explanatory huh)
										the_content();
										?>
										<script src="<?= get_template_directory_uri() ?>/js/contactForm.js" defer></script>
										<form action="" method="post" id="contactForm">

											<fieldset>
												<legend>Full Name</legend>
												<label for="fname">First name:</label>
												<input value='<?php if (isset($_POST["fname"])) {echo $_POST["fname"];}; ?>' <?= $inputClasses["fname"] ?> type="text" id="fname" name="fname" placeholder="John">
												<label for="lname">Last name:</label>
												<input value='<?php if (isset($_POST["lname"])) {echo $_POST["lname"];}; ?>' <?= $inputClasses["lname"] ?> type="text" id="lname" name="lname" placeholder="Doe">
											</fieldset>

											<fieldset>
												<legend>Contact Details</legend>
												<label for="email">Email:</label>
												<input value='<?php if (isset($_POST["email"])) {echo $_POST["email"];}; ?>'  <?= $inputClasses["email"] ?> type="email" id="email" name="email" placeholder="example@example.com">
												<label for="phone">Phone:</label>
												<input value='<?php if (isset($_POST["phone"])) {echo $_POST["phone"];}; ?>'  <?= $inputClasses["phone"] ?> type="number" id="phone" name="phone" placeholder="00000 000000">
											</fieldset>

											<fieldset>
												<legend>Message</legend>
												<textarea <?= $inputClasses["message"] ?> name="message" id="message" cols="30" rows="10"><?php if (isset($_POST["message"])) {echo $_POST["message"];}; ?></textarea>
												<input type="submit" value="Submit" id="subButton" <?php if ($trafcomplete) {echo 'disabled';}?>>
											</fieldset>
				


										</form>
										<?php

										/*
										 * Link Pages is used in case you have posts that are set to break into
										 * multiple pages. You can remove this if you don't plan on doing that.
										 *
										 * Also, breaking content up into multiple pages is a horrible experience,
										 * so don't do it. While there are SOME edge cases where this is useful, it's
										 * mostly used for people to get more ad views. It's up to you but if you want
										 * to do it, you're wrong and I hate you. (Ok, I still love you but just not as much)
										 *
										 * http://gizmodo.com/5841121/google-wants-to-help-you-avoid-stupid-annoying-multiple-page-articles
										 *
										*/
										wp_link_pages( array(
											'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'bonestheme' ) . '</span>',
											'after'       => '</div>',
											'link_before' => '<span>',
											'link_after'  => '</span>',
										) );
									?>
								</section> <?php // end article section ?>

								<footer class="article-footer cf">

								</footer>

								<?php comments_template(); ?>

							</article>

							<?php endwhile; endif; ?>

						</main>

						<?php /*get_sidebar();*/ ?>

				</div>

			</div>

<?php get_footer(); ?>
