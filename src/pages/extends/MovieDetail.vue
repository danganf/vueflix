<template>
    <div>    
        <!-- details content -->
		<div class="container">
			<div class="row">
				<!-- title -->
				<div class="col-12">
					<h1 class="details__title">{{product.title}}</h1>
				</div>
				<!-- end title -->

                <!-- content -->
				<div class="col-10">
					<div class="card card--details card--series">
						<div class="row">
							<!-- card cover -->
							<div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
								<div class="card__cover">
									<img :src="product.poster_path" alt="poster_path">
								</div>
							</div>
							<!-- end card cover -->

                            <!-- card content -->
							<div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
								<div class="card__content">
									<div class="card__wrap">
										<span class="card__rate"><i class="icon ion-ios-star"></i>{{product.vote_average}}</span>
									</div>
                                    
                                    <ul class="card__meta">
                                        <li>
                                            <span>Gênero:</span>
                                            <router-link :to="{ name: 'media-list', force: true, params: { media: 'movie' }, query: { genre: row.id } }" v-for="(row, idx) in product.genres" :key="'genres-'+idx">{{row.name}}</router-link>
                                        </li>
                                        <li><span>Popularidade:</span> {{product.popularity}}</li>
                                        <li>
                                            <span>Produção:</span>
                                            <br/>
                                            <router-link :to="{ name: 'media-list', force: true, params: { media: 'movie' }, query: { company: row.id } }" v-for="(row, idx) in product.production_companies" :key="'production_companies-'+idx">{{row.name}}</router-link>
                                        </li>                                    
                                    </ul>

                                    <div class="card__description card__description--details">
                                        {{product.overview}}
                                    </div>
									
								</div>
							</div>
                            <!-- end card content -->

						</div>    
					</div>    
				</div>    
            </div>
        </div>
    </div>
</template>    

<script>
    export default {
        props:{
            product:{
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
    
</style>