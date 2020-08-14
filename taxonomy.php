<?php get_header(); ?>

    <main id="content">

        <?php 
        
            $url = $_SERVER['REQUEST_URI'];
            $terms = basename($url);
            //remove dashes from titles and replace with spaces
            $title = str_replace("-", " ", $terms);

            if(preg_match('/photo/', $url)) {
                $post_type = 'images';
                $taxonomy = 'photo_categories';
                $go_back = 'photo-categories';
            } elseif (preg_match('/render/', $url)) {
                $post_type = 'renders';
                $taxonomy = 'render_categories';
                $go_back = 'render-categories';
            }
        ?>

        <div class="x centred">

            <a href="/<?php echo $go_back; ?>" class="back-btn">

                <p><b>BACK</b></p>

            </a>

        </div>

        <h2 class="capitalise title white-title"><?=$title; ?></h2>        

        <ul class="postlist auto-grid">

            <?php 

            if($post_type === 'images') {

                $args = array(  
                    'posts_per_page'    => -1, 
                    'post_type'         => $post_type,
                    'orderby'           => 'name',
                    'order'             => 'ASC',
                    'post_status'       => 'publish',
                    'tax_query'         => array(
                        array(
                            'taxonomy'  => $taxonomy,
                            'field'     => 'slug',
                            'terms'     => $terms,
                        ),
                    ),
                );
            } elseif($post_type === 'renders') {

                $args = array(  
                    'posts_per_page'    => -1, 
                    'post_type'         => $post_type,
                    'post_status'       => 'publish',
                    'meta_key'			=> 'price',
                    'order'				=> 'ASC',
                    'orderby'			=> 'meta_value_num',
                    'tax_query'         => array(
                        array(
                            'taxonomy'  => $taxonomy,
                            'field'     => 'slug',
                            'terms'     => $terms,
                        ),
                    ),
                );
            }

            $loop = new WP_Query( $args ); 
                
            while ( $loop->have_posts() ) : $loop->the_post(); 
                
            ?>
                        
                <div class="category-container">

                    <li>

                        <a href="<?=the_permalink(); ?>">

                            <?php $thumb = get_the_post_thumbnail_url(); ?>

                            <img src="<?=$thumb ;?>" alt="">

                        </a>

                    </li>

                    <?php $job_number = get_field( 'job_number' );
                    
                        if($job_number) : ?>

                            <h2><?php the_title(); ?> (<?=$job_number; ?>)</h2>

                        <?php else : ?>

                            <h2><?php the_title(); ?></h2>

                        <?php endif; ?>

                </div>

            <?php endwhile; ?>

        </ul>

        <?php wp_reset_postdata();  ?>

    </main>

<?php get_footer(); ?>