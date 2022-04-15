import React from "react";
import "./product.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ButtonExtend from "../components/ButtonExtend";
import Image1 from "../img/pexels-ryutaro-tsukata-5472415.jpg";
import Image2 from "../img/wallpaperflare.com_wallpaper (5).jpg";
import Image3 from "../img/wallpaperflare.com_wallpaper (2).jpg";

function Product() {
	return (
		<div className="product">
			<ButtonExtend />
			<Hero />

			<h1 className="title">Product</h1>

			<div className="product-body">
				<div className="product-content">
					<div className="product-group">
						<img
							className="product-img"
							src={Image1}
							alt="coffee"
						/>
					</div>
					<div className="product-group alig-left center">
						<div className="product-desc">
							<h2 className="sub-title">Coffee</h2>
							<p className="text font-nunito">
								Bali Bean Spice supplies both Arabica and
								Robusta Indonesian coffee beans which include
								varieties from Bali, Java, Sulawesi, Sumatra and
								Papua New Guinea. It’s available in the form of
								green beans, roasted, or powder. Our coffee
								beans are available in both organic and
								non-organic varieties.
							</p>
						</div>
					</div>
				</div>
				<div className="product-content">
					<div className="product-group alig-right center">
						<div className="product-desc">
							<h2 className="sub-title">Vanilla</h2>
							<p className="text font-nunito">
								For culinary industry players, vanilla is a
								staple required for making cakes, ice cream and
								various drinks. Over time, vanilla has also been
								used in aromatherapy as well as spa and beauty
								products. Our vanilla is harvested from various
								regions in the archipelago such as Sumatra,
								Sulawesi, Flores and Papua. Bali Bean Spice
								provides a variety of vanilla variants which are
								hand-picked to obtain quality vanilla fruit. Our
								vanilla products include: Vanilla Planifolia
								Grade A+, Vanilla Planifolia Grade A Humidity
								22-30%, size up to 20cm with vanilla content
								1.2-1.5%. It has a gentle aroma suitable for
								cakes and ice cream. Vanilla Tahitian Grade A,
								B, C Humidity 20-30%, size up to 30cm with
								vanilla content of 1-1.5% with a very strong
								aroma.
							</p>
						</div>
					</div>
					<div className="product-group">
						<img
							className="product-img"
							src={Image2}
							alt="vanilla"
						/>
					</div>
				</div>

				<div className="product-content">
					<div className="product-group">
						<img className="product-img" src={Image3} alt="cocoa" />
					</div>
					<div className="product-group alig-left center">
						<div className="product-desc">
							<h2 className="sub-title">Cocoa</h2>
							<p className="text font-nunito">
								Bali Bean Spice offers the highest quality
								premium cocoa from small Indonesian farmers to
								the world's chocolate makers. Bali Bean Spice
								products include fermented cocoa beans,
								fermented cocoa nibs, raw cocoa beans, roasted
								cocoa beans and cocoa powder. We offer both
								organic or non-organic cocoa.
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Product;
