<template>
<!-- filter -->
	<div class="filter">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="filter__content">
						<div class="filter__items">
							<!-- filter item -->
							<div class="filter__item" id="filter__genre">
								<span class="filter__item-label">GÊNERO:<i v-if="preloader" class="fas fa-spinner fa-pulse preloader fa-1x"></i></span>

								<div class="filter__item-btn dropdown-toggle" ref="divDropDown"  data-action="genre" role="navigation" id="filter-genre" data-toggle="dropdown" aria-expanded="false">
									<input type="button" ref="genre" value="Selecione">
									<span></span>
								</div>
								<vue-custom-scrollbar tagname="ul" :settings="settings" class="dropmenu-genre filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-genre">
									<li @click="selectItemDropDown(null, 'genre')">Todos</li>
									<li v-for="genre in genres" :key="`genre`+genre.id" @click="selectItemDropDown(genre, 'genre')">{{genre.name}}</li>
								</vue-custom-scrollbar>
							</div>
							<!-- end filter item -->

							<!-- filter item -->
							<div class="filter__item" id="filter__year">
								<span class="filter__item-label">Ano:</span>

								<div class="filter__item-btn dropdown-toggle" role="navigation" id="filter-quality" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<input type="number" min="1900" ref="year" name="year" value="2020" style="width: 23%" maxlength="4" required>
								</div>

							</div>
							
						</div>
						
						<!-- filter btn -->
						<button class="filter__btn" @click="filtering()" type="button">filtrar</button>
						<!-- end filter btn -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end filter -->    
</template>

<script>
	import vueCustomScrollbar from 'vue-custom-scrollbar'
    export default {
		props:{
			media:{
				type: String,
				required: true,
			}
		},

		components: { vueCustomScrollbar },

		data(){
			return {
				settings: {
					suppressScrollX : true,
					wheelPropagation : false,
					scrollingThreshold: 500,
				},
				genres: [],
				preloader: false,
				filter: {
					genre: null,
					year: process.env.CURRENT_YEAR
				}
			}
		},

		methods:{
			selectItemDropDown( item, action ){
				let name = 'Selecione';
				let id   = null;
				if( item !== null ){
					id   = item.id;
					name = item.name;
				}
				this.$refs[action].value = name;
				this.filter.genre        = id;

				this.$refs.divDropDown.click();
			},
			async getGenresList(){
                this.preloader = true;
                await window.axios.get( `${process.env.URL_API_BACKEND}genres/${this.media}` )
                    .then(( result ) => {
                        this.preloader = false;
                        this.genres    = result.data;

                    }).catch(error => {
                        this.preloader = false;
                    });
			},
			filtering(){
				this.$emit('emit-filter', this.filter);
			}
		},

		mounted(){
			this.getGenresList();
			this.$refs.year.addEventListener("click", function() {
				this.select();
			}, false);

			this.$refs.divDropDown.addEventListener("click", function() {
                let element = document.getElementsByClassName("dropmenu-"+this.getAttribute('data-action'))[0];
                if( element.className.indexOf('show') === -1 ) {
                    element.classList.add("show");
					this.setAttribute("aria-expanded", "true");
                } else {
                    element.classList.remove("show");
                    this.setAttribute("aria-expanded", "false");
                }
			}, false);
		}
    }
</script>

<style scoped>
	.ps-container {position: absolute !important;}
	.ps__thumb-x, .ps__thumb-y{background-color: red; background-image: linear-gradient(rgb(255, 85, 165) 0%, rgb(255, 88, 96) 100%) !important;width: 3px !important;}
	.preloader {font-size: 1.4em;margin-left: 5px;position: absolute;}
</style>