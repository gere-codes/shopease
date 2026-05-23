import type { ISlide } from '../types';
import '../style.css';
import { memo } from 'react';

type alignment = 'items-start' | 'items-center' | 'items-end' | 'text-left' | 'text-center' | 'text-right';

const mapAlign: Record<NonNullable<ISlide['textAlign']>, alignment[]> = {
	left: ['items-start', 'text-left'],
	center: ['items-center', 'text-center'],
	right: ['items-end', 'text-right'],
};

interface Props extends ISlide {
	isActive: boolean;
}
export const HeroSlide = memo(({ img, badge, title, cta, textAlign = 'left', isActive }: Props) => {
	const [alignItems, textAlignClass] = mapAlign[textAlign];

	return (
		<section
			className={`relative h-full w-full overflow-hidden text-black capitalize font-heading ${isActive ? 'is-active' : ''}`}
		>
			{/* BG image */}

			<img
				src={img}
				alt=""
				loading="lazy"
				className="absolute inset-0 h-full w-full object-cover scale-105 opacity-0 animate-heroImage"
			/>

			{/* Gradient overlay */}

			<div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/10 to-transparent" />

			{/* Content */}

			<div
				className={`relative z-10 flex flex-col gap-6 justify-center h-full p-6 mx-auto max-w-7xl text-white ${alignItems} ${textAlignClass}`}
			>
				<small className="text-white bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide animate-fadeUp">
					{badge}
				</small>

				<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeUp delay-150 text-black">
					{title}
				</h2>

				<button
					type="button"
					aria-label={`Go to ${title}`}
					className="bg-black text-white font-semibold px-6 py-3 uppercase text-sm tracking-wide w-fit cursor-pointer"
				>
					{cta}
				</button>
			</div>
		</section>
	);
});
