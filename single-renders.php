<?php get_header(); ?>

    <main id="content">

        <!-- Load template back button -->
        <?php $add_back_button = get_field( 'add_back_button' );
                
                if($add_back_button) : ?>

            <?php get_template_part( 'back-btn' ); ?>

        <?php endif; ?>
            
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            
            <?php the_content(); ?>

        <?php endwhile; endif; ?>

    </main>

<?php get_footer(); ?>