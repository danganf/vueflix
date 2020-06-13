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
								<span class="filter__item-label">GÊNERO:</span>

								<div class="filter__item-btn dropdown-toggle" ref="divDropDown"  data-action="genre" role="navigation" id="filter-genre" data-toggle="dropdown" aria-expanded="false">
									<input type="button" value="Ação/Aventura">
									<span></span>
								</div>
								<vue-custom-scrollbar tagname="ul" :settings="settings" class="dropmenu-genre filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-genre">
									<li @click="selectItemDropDown(item, 'genre')">Ação/Aventura</li>
									<li @click="selectItemDropDown(item, 'genre')">Animals</li>
									<li @click="selectItemDropDown(item, 'genre')">Animation</li>
									<li @click="selectItemDropDown(item, 'genre')">Biography</li>
								</vue-custom-scrollbar>
							</div>
							<!-- end filter item -->

							<!-- filter item -->
							<div class="filter__item" id="filter__quality">
								<span class="filter__item-label">Ano:</span>

								<div class="filter__item-btn dropdown-toggle" role="navigation" id="filter-quality" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<input type="number" min="1900" ref="year" name="year" value="2020" style="width: 23%" maxlength="4" required>
								</div>

							</div>
							
						</div>
						
						<!-- filter btn -->
						<button class="filter__btn" type="button">filtrar</button>
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
		
		},

		components: { vueCustomScrollbar },

		data(){
			return {
				settings: {
					suppressScrollX : true,
					wheelPropagation : false,
					scrollingThreshold: 500,
                }
			}
		},

		methods:{
			selectItemDropDown( item, action ){
				console.log( action, item );
			}
		},

		mounted(){
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
</style>