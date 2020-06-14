<template>
<!-- filter -->
	<div class="filter">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="filter__content">
						<div class="filter__items">

							<div class="filter__item" id="filter__genre">
								<span class="filter__item-label">GÊNERO:<i v-if="preloader" class="fas fa-spinner fa-pulse preloader fa-1x"></i></span>

								<div class="filter__item-btn dropdown-toggle divDropDown"  data-action="genre" role="navigation" id="filter-genre" data-toggle="dropdown" aria-expanded="false">
									<input type="button" ref="genre" :value="storage.get('genre_name')">
									<span></span>
								</div>
								<vue-custom-scrollbar :key="'drop-genre'" tagname="ul" :settings="settings" class="dropmenu-genre filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-genre">
									<li @click="selectItemDropDown(null, 'genre')">Todos</li>
									<li v-for="genre in genres" :class="{active: genre.id === storage.get('genre')}" :key="`genre`+genre.id" @click="selectItemDropDown(genre, 'genre')">{{genre.name}}</li>
								</vue-custom-scrollbar>
							</div>

							<div class="filter__item" id="filter__sort">
								<span class="filter__item-label">ordenação:</span>

								<div class="filter__item-btn dropdown-toggle divDropDown"  data-action="sort" role="navigation" id="filter-sort" data-toggle="dropdown" aria-expanded="false">
									<input type="button" :value="storage.get('sort_name')">
									<span></span>
								</div>

								<vue-custom-scrollbar :key="'drop-sort'" tagname="ul" :settings="settings" class="dropmenu-sort filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-sort">
									<li v-for="item in sort" :key="`sort-${item.id}`" @click="selectItemDropDown(item, 'sort')">{{item.name}}</li>
								</vue-custom-scrollbar>
							</div>							

							<div class="filter__item" id="filter__year">
								<span class="filter__item-label">Ano:</span>

								<div class="filter__item-btn dropdown-toggle" role="navigation" id="filter-quality" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i @click="minus" class="icon ion-ios-arrow-back"></i>
									<input type="button" ref="year" :value="storage.get('year')" style="margin-right: 10px">
									<i @click="max" class="icon ion-ios-arrow-forward"></i>
								</div>

							</div>

							<div class="filter__item" id="filter__dir">
								<span class="filter__item-label">direção:</span>

								<div class="filter__item-btn dropdown-toggle divDropDown"  data-action="dir" role="navigation" id="filter-dir" data-toggle="dropdown" aria-expanded="false">
									<input type="button" :value="storage.get('dir_name')">
									<span></span>
								</div>

								<vue-custom-scrollbar :key="'drop-dir'" tagname="ul" :settings="settings" class="dropmenu-dir filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-dir">
									<li v-for="item in dir" :key="`sort-${item.id}`" @click="selectItemDropDown(item, 'dir')">{{item.name}}</li>
								</vue-custom-scrollbar>
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
	import {storageFilter} from '../../class/storage-filter'

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
				sort: [],
				dir: [
					{ id: 'asc' , name: 'Ascendente' },
					{ id: 'desc', name: 'Decrescente' },
				],
				preloader: false,
				storage: new storageFilter( this.media ),				
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
				this.storage.set(action     , id);
				this.storage.set(action+'_name', name);
				this.__closeOpenDropDown();
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
				this.$emit('emit-filter');
			},
			minus(){
				this.__closeOpenDropDown();
				let val = parseInt( this.storage.get('year') );
				if( val >= 1900 ){	
					this.storage.set('year', --val);
				}
			},
			max(){
				this.__closeOpenDropDown(); 
				let val = parseInt( this.storage.get('year') );
				this.storage.set('year', ++val);
			},
			__closeOpenDropDown(el){
				const elDropDown = document.getElementsByClassName('divDropDown');
				Array.from( elDropDown ).forEach( el2 => {
					if( typeof el === 'undefined' || el.getAttribute('data-action') !== el2.getAttribute('data-action') ){
						if( el2.getAttribute('aria-expanded') === 'true' ){
							document.getElementsByClassName("dropmenu-"+el2.getAttribute('data-action'))[0].classList.remove("show");
							el2.setAttribute("aria-expanded", "false");
							return;
						}
					}
				});
			}
		},

		mounted(){

			if( !this.storage.get('year') ){
				this.storage.set('genre_name', 'Selecione');
				this.storage.set('sort'      , 'popularity');
				this.storage.set('sort_name' , 'Popularidade');
				this.storage.set('dir'       , 'desc');
				this.storage.set('dir_name'  , 'Decrescente');
				this.storage.set('year', process.env.CURRENT_YEAR);
			}

			this.getGenresList();

			this.sort.push({ id: 'voto_average', name: 'Média dos Votos'});
			this.sort.push({ id: 'popularity', name: 'Popularidade'});
			this.sort.push({ id: 'release_date', name: 'Ano lançamento'});
			if( this.media === 'movie' ){
				this.sort.push({ id: 'original_title', name: 'Título'});
				this.sort.push({ id: 'revenue', name: 'Mais rentáveis'});
			}

			this.$refs.year.addEventListener("click", function() {
				this.select();
			}, false);

			const scopeVue   = this;
			const elDropDown = document.getElementsByClassName('divDropDown');
			Array.from( elDropDown ).forEach( el => {
  				el.addEventListener("click", function() {	

					scopeVue.__closeOpenDropDown(el); 
					  					  		  
					let element = document.getElementsByClassName("dropmenu-"+this.getAttribute('data-action'))[0];
					if( element.className.indexOf('show') === -1 ) {
						element.classList.add("show");
						this.setAttribute("aria-expanded", "true");
					} else {
						element.classList.remove("show");
						this.setAttribute("aria-expanded", "false");
					}
				}, false);
			});			
			
		}
    }
</script>

<style scoped>
	.ps-container {position: absolute !important;}
	.ps__thumb-x, .ps__thumb-y{background-color: red; background-image: linear-gradient(rgb(255, 85, 165) 0%, rgb(255, 88, 96) 100%) !important;width: 3px !important;}
	.preloader {font-size: 1.4em;margin-left: 5px;position: absolute;}
	i.icon {
		border: 1px solid rgba(255,255,255,0.26);
		padding: 5px 5px 4px;
		line-height: 100%;
		-webkit-border-radius: 4px;
		border-radius: 4px;
		margin-right: 10px;
		font-size: 12px;
		font-weight: 700;
		color: rgba(255,255,255,0.65);
	}
	i.icon:hover{
		background-image: -moz-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  		background-image: -webkit-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
  		background-image: -ms-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
		background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
		box-shadow: 0 0 20px 0 rgba(255,88,96,0.5);
		opacity: 0.85;
	}
	li.active{color: var(--color-gradient-btn-1);font-weight: 400;}
	.filter__item-label{text-transform: uppercase;}
</style>