<?php get_header(); ?>

    <main id="content">

    <?php

        //Get URL
        $url = $_SERVER['REQUEST_URI'];

        //Grab directory
        $cat_type = dirname($url);

        //Remove 'renders' from url string
        $single_cat = str_replace('images/', "", $cat_type);

        //Output final Url
        $go_back = 'photo-categories' . $single_cat;

        ?>

        <div class="x centred">

            <a href="/<?php echo $go_back; ?>" class="back-btn">

                <p><b>BACK</b></p>

            </a>

        </div>
            
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <?php the_content(); ?>

        <?php endwhile; endif; ?>
        
    </main>
    
<?php get_footer(); ?>