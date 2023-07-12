const products = [
	{
		name: 'Acer Predator Gaming Laptop',
		image: '/images/Acer.jpg',
		description:
			'Extreme Performance : Crush the competition with the impressive power.',
		brand: 'Acer',
		category: 'Electronics',
		price: 89999,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: 'Dell New Inspiron 3520 Laptop',
		image: '/images/Dell_Inspiron.jpg',
		description:
			'Intel Core i5-1235U 12th Generation (3.30 GHz up to 4.40 GHz, 12MB 10 Cores) // RAM & Storage: 8GB, 8Gx1, DDR4, 2666MHz, (2 DIMM Slots, Expandable upto 16GB) & 1TB HDD + 256GB SSD.',
		brand: 'Dell',
		category: 'Electronics',
		price: 89000,
		countInStock: 8,
		rating: 4.0,
		numReviews: 8,
	},
	{
		name: 'Alienware M15 R7 Gaming Laptop',
		image: '/images/Alienware.jpg',
		description:
			'Processor AMD Ryzen™ 7 6800H (20 MB total cache, 8 cores, 16 threads, up to 4.70 GHz Max Boost Clock) Operating System Windows 11 Home Single Language, English Video Card NVIDIA® GeForce RTX™ 3070 Ti, 8 GB GDDR6.',
		brand: 'CannonALIENWARE',
		category: 'Electronics',
		price: 186490.02,
		countInStock: 5,
		rating: 3,
		numReviews: 12,
	},
	{
		name: 'HP Pavilion X360 2-IN-1 Laptop 14-EK0088TU',
		image: '/images/HP_Pavilion.jpg',
		description:
			'12th Generation Intel® Core™ i7 processorWindows 11 Home35.6 cm (14") diagonal, FHD (1920 x 1080)Intel® Iris® Xᵉ Graphics16 GB DDR4-3200 MHz RAM (onboard)Weighs: 1.51 kg 5MPIRCam Backlit KBD FPR.',
		brand: 'HP',
		category: 'Electronics',
		price: 93999,
		countInStock: 11,
		rating: 5,
		numReviews: 12,
	},
	{
		name: 'Samsung 24-Inch(59.8CM) Curved Monitor',
		image: '/images/Samsung_24.jpg',
		description:
			'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience.',
		brand: 'Samsung',
		category: 'Electronics',
		price: 12000,
		countInStock: 7,
		rating: 3.5,
		numReviews: 10,
	},
	{
		name: 'DELL 24-Inch Gaming Monitor',
		image: '/images/Dell_24.jpg',
		description:
			'Play your best with a 1ms response time that eliminates motion blur and a 165Hz refresh rate for faster reaction times. And get built-in AMD FreeSync™ Premium and NVIDIA G-Sync Compatible that ensures fluid and tear-free gameplay.',
		brand: 'Dell',
		category: 'Electronics',
		price: 25899.01,
		countInStock: 0,
		rating: 4,
		numReviews: 12,
	}, {
		name: 'DELL 27 USB-C Monitor - S2723HC',
		image: '/images/Dell_27.jpg',
		description:
			'68.58cm (27 Inch) monitor with the USB-C single-cable solution designed to keep your desktop clutter-free. Featuring built-in speakers and In-Plane Switching (IPS) technology.',
		brand: 'Dell',
		category: 'Electronics',
		price: 30599.01,
		countInStock: 0,
		rating: 8,
		numReviews: 12,
	}, {
		name: 'NIKON D7500 20.9MP Digital Camera',
		image: '/images/Nikon_D7500.jpg',
		description:
			'For those who express themselves without labels, the D780 is capable of bringing every spectacular vision to life and inspiring completely new ways to create. Versatility through the splendor of full frame photography and 4K video, slow motion, time-lapse, remoteless long exposures and a host of impactful creative shooting tools to keep inspiration flowing.',
		brand: 'Nikon',
		category: 'Electronics',
		price: 83499.05,
		countInStock: 5,
		rating: 10,
		numReviews: 12,
	}, {
		name: 'Sony 6100L 24.2 MP Digital Camera',
		image: '/images/Sony_Alpha.jpg',
		description:
			'Play your best with a 1ms response time that eliminates motion blur and a 165Hz refresh rate for faster reaction times. And get built-in AMD FreeSync™ Premium and NVIDIA G-Sync Compatible that ensures fluid and tear-free gameplay.',
		brand: 'Sony',
		category: 'Electronics',
		price: 66990,
		countInStock: 2,
		rating: 8,
		numReviews: 2,
	}, {
		name: 'Samsung Galaxy S23 Ultra 5G',
		image: '/images/Samsung_Galaxy_S23_Ultra.jpg',
		description:
			'More innovation, less footprint Galaxy S23 Ultra striking symmetrical design returns with one major difference: recycled and eco- conscious materials.From the metal frame to the glass finish, polished with fresh new colors inspired by nature.',
		brand: 'Samsung',
		category: 'Electronics',
		price: 124999,
		countInStock: 5,
		rating: 5,
		numReviews: 50,
	}, {
		name: 'SAMSUNG Galaxy Buds 2',
		image: '/images/Samsung_Galaxy_Buds_2.jpg',
		description:
			'Active Noise Canceling: Two microphones detect ambient noise while Active Noise Canceling blocks unwanted sound. Background noise can be reduced up to 98% to keep you fully immersed. Tune into or out of the world around you with an easily adjustable three-level ambient sound option.',
		brand: 'Samsung',
		category: 'Electronics',
		price: 6486,
		countInStock: 0,
		rating: 4,
		numReviews: 15,
	}, {
		name: 'Samsung Galaxy Buds Pro',
		image: '/images/Samsung_Galaxy_Buds_Pro.jpg',
		description:
			'Voice Detect instantly switches from ANC to Ambient sound when it hears your voice. 360 Audio for theater-like multichannel sound. Dolby HeadTracking support. IPX7 Water Resistance. Auto Switch to conveniently switch between Galaxy devices.',
		brand: 'Samsung',
		category: 'Electronics',
		price: 14899,
		countInStock: 1,
		rating: 8,
		numReviews: 2,
	}, {
		name: 'Oneplus Buds Pro Bluetooth',
		image: '/images/OnePlus_Buds_Pro.jpg',
		description:
			'Smart Adaptive Noise Cancellation: Up to 40 dB hybrid noise cancelling with automated environmental noise detection & adjustment. OnePlus Audio ID: Personalize your audio via simple listening test at first time setup. This unique hearing profile ID allows one to enjoy the most optimal listening experience best suited to him or her by compensating for mild hearing loss and related aural deficiencies.',
		brand: 'Samsung',
		category: 'Electronics',
		price: 6989,
		countInStock: 0,
		rating: 5,
		numReviews: 6,
	},
]

export default products
