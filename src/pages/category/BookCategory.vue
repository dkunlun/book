<template>
	<div>
		<section>
			<p class="category-type">男生</p>
			<ul>
				<li>
					<p class="category">玄幻</p>
					<span class="book-count">464477</span>
				</li>
				<li>
					<p>玄幻</p>
					<span>464477</span>
				</li>
				<li>
					<p>玄幻</p>
					<span>464477</span>
				</li>
			</ul>
		</section>
		<section>
			<p class="category-type">男生</p>
			<ul>
				<li>
					<p>玄幻</p>
					<span class="book-count">464477</span>
				</li>
				<li>
					<p>玄幻</p>
					<span>464477</span>
				</li>
				<li>
					<p>玄幻</p>
					<span>464477</span>
				</li>
			</ul>
		</section>
		<section>
			<p class="category-type">男生</p>
			<ul>
				<li>
					<p>玄幻</p>
					<span class="book-count">464477</span>
				</li>
				<li>
					<p>玄幻</p>
					<span>464477</span>
				</li>
				<li>
					<p>玄幻</p>
					<span>464477</span>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				category: null,
				categoryType: {

				}
			}
		},
		created () {
			
		}
	}
</script>

<style lang="scss" scoped>
	section {
		font-size: 1.2rem;
	}
	.category-type {
		margin: 0 1rem;
		border-bottom: 1px solid #f3eded;
		font-size: 1.2rem;
		line-height: 2.75rem;
	}
	.book-count {
		color: #959595;
	}
	ul {
		display: flex;
		margin-left: 1rem;
		margin-right: 1rem;
		flex-wrap: wrap;
	}
	li {
		width: 33.33%;
		text-align: center;
	}
	.category {
		font-weight: 700;
		font-size: 1.2rem;
		margin-bottom: .1rem;
		margin-top: .8rem;
		line-height: 1.2rem;
	}
</style>