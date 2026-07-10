export interface ISlide {
	id: string | number;
	img: string;
	badge: string;
	title: string;
	cta: string;
	textAlign?: 'left' | 'center' | 'right';
	path?: string;
}
