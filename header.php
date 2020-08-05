<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>

    
	<body>     

		<header class="nav-container clear" role="banner">

			<div class="menu-wrapper">
		
			<!-- Mobile menu button -->

				<div class="mobile-header">

				<!-- Mobile menu button -->

					<div id="menu-open">

						<div class="menu-button">

							<span></span>
							<span></span>
							<span></span>

						</div>

					</div>

					<!-- logo -->
						
						<div class="logo">
						
							<a href="<?php echo home_url(); ?>">
						
								<img src="/wp-content/uploads/logo.png" alt="Logo" class="logo-img">
						
							</a>
						
						</div>
					
					<!-- /logo -->

				</div> <!-- mobile header -->	
				
				<!-- nav -->
				
				<nav class="nav" role="navigation">
				
					<hr>
				
						<?php wp_nav_menu(); ?>
				
					<hr>
					
				</nav>
				
				<!-- /nav -->
				
				<!-- social links -->
				
				<div class="social-menu">
						
						<ul class="icon-list">
							
							<li class="social"><a href="https://www.facebook.com/PrimeOak" class="fb"><img src="/wp-content/uploads/facebook.svg"></a></li>
							<li class="social"><a href="https://twitter.com/PrimeOakUK" class="twitter"><img src="/wp-content/uploads/twitter.svg"></a></li>
							<li class="social"><a href="https://www.pinterest.co.uk/primeoak/" class="pinterest"><img src="/wp-content/uploads/pinterest.svg"></a></li>
							<li class="social"><a href="https://www.houzz.co.uk/professionals/design-and-build/prime-oak-ltd-pfvwgb-pf~1133562070" class="houzz"><img src="/wp-content/uploads/houzz.svg"></a></li>
						
						</ul>
					
				</div>
					
				<!-- /social links -->
			
			</div>	
		
		</header>
