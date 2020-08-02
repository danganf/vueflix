<template>
    <div>    
        <!-- details content -->
		<div class="container">
			<div class="row">
				<!-- title -->
				<div class="col-12">
					<h1 class="details__title">{{product.name}}</h1>
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
                                            <router-link :to="{ name: 'media-list', force: true, params: { media: 'tv' }, query: { genre: row.id } }" v-for="(row, idx) in product.genres" :key="'genres-'+idx">{{row.name}}</router-link>
                                        </li>
                                        <li><span>Popularidade:</span> {{product.popularity}}</li>                                                                    
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
                <!-- end content -->

                <!-- player -->
				<div class="col-12 col-xl-5">
                    <div class="row">
                        <section class="col-12 create_by_prod">
                            <div class="accordion" id="accordion">
                                <h4 class="create_by">Criado por:</h4>
                                <div class="accordion__card col-xl-6" v-for="(row, idx) in product.created_by" :key="`created_by${idx}`">
                                    <div class="card-header" id="headingOne">
                                        <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">                                    
                                            <span>
                                                <img v-if="row.profile_path" class="poster_path" :src="`${profile_sizes}${row.profile_path}`" alt="profile_path">
                                                {{row.name}}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <h4 class="create_by">Produção:</h4>
                                <div class="accordion__card col-xl-6 production_companies" v-for="(row, idx) in product.production_companies" :key="`production_companies${idx}`">
                                    <div class="card-header" id="headingOne">
                                        <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">                                    
                                            <span>
                                                <img v-if="row.logo_path" class="poster_path" :src="`${profile_sizes}${row.logo_path}`" :title="row.name" :alt="row.name">
                                            </span>
                                        </button>
                                    </div>
                                </div>                               

                            </div>
                        </section>

                    </div>					
				</div>
				<!-- end player -->

                <!-- accordion -->
				<div class="col-12 col-xl-7">
					<vue-custom-scrollbar :key="'drop-sessions'" tagname="section" :settings="settings" class="accordion sessions" id="accordion">

						<div class="accordion__card col-xl-6" v-for="(row, idx) in product.seasons" :key="`sessions${idx}`">
							<div class="card-header" id="headingOne">
								<button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">                                    
									<span>
                                        <img class="poster_path" :src="`${profile_sizes}${row.poster_path}`" alt="poster_path">
                                        {{row.name}}
                                    </span>
									<span>
                                        {{row.episode_count}} Episódios, lançados desde {{row.air_date}}                                      
                                    </span>
								</button>
							</div>
						</div>

					</vue-custom-scrollbar>
				</div>
				<!-- end accordion -->

            </div>
        </div>
    </div>
</template> 

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import {IMG_SIZE_185} from '../../configs/configs'

    export default {
        props:{
            product:{
                type: Object,
                required: true,
            }
        },
        components: { vueCustomScrollbar },
        data () {
            return {
                settings: {
                        suppressScrollX: true,
                        wheelPropagation: false,
                        scrollingThreshold: 500
                },
                profile_sizes: IMG_SIZE_185
            }
        },
        computed:{
           
        }
    }
</script>

<style scoped>
    .create_by{color: #ff55a5;}
    .poster_path{width: 32%;float: left;margin-right: 10px;}
    .accordion {max-height: 530px;height: 530px;}
    .accordion__card .card-header button:before {display: none;}
    .accordion__card{display: inline-block;padding-right: 0;}    
    .accordion__card .card-header button{padding: 0;}
    section.create_by_prod{display: inline-table;}
    section.create_by_prod .accordion{display: inline-table;}
    section.create_by_prod .production_companies{background-color: #28282D;}
    .production_companies img{width: 100%;background-color: #FFF;padding: 10px;}
</style>