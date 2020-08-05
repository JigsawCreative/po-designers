<?php 
		$page_url = $_SERVER['REQUEST_URI'];
		//get url for slider back button
        $go_back = htmlspecialchars($_SERVER['HTTP_REFERER']);
	?>

    <div class="x centred">

        <a href="<?php echo $go_back; ?>" class="back-btn">
        
            <p><b>BACK</b></p>

        </a>
        
    </div>