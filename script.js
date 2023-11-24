
let http = new XMLHttpRequest();
http.open('get', 'books.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);
		let output = "";
		for(let item of products){
			output += `
				<div class="product">
					<img src="${item.cover_image}" alt="">
					<p class="title">${item.title}</p>
					<p class="description">${item.description}</p>
					<p class="price">
						<span>${item.price}</span>
						<span>&euro;</span>
					</p>
					<a href="cart.html"><button>Add To Cart</button></a>
				</div>
			`;
}
		document.querySelector(".products").innerHTML = output;
	}
} 