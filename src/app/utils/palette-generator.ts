export class PaletteGenerator {
	static generatePalette(baseColor: string): Record<number, string> {
		const shades = [220, 170, 130, 90, 50, 0, -55, -105, -155, -205, -255];
		const toneNames = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

		const lightenDarkenColor = (col: string, amt: number): string => {
			let num = parseInt(col.slice(1), 16);
			//22c55e   2278750
			console.log(num & 0x0000ff);
			let r = Math.min(255, Math.max(0, (num >> 16) + amt));
			let g = Math.min(255, Math.max(0,((num >> 8) & 0x00ff) + amt));
			let b = Math.min(255, Math.max(0,(num & 0x0000ff) + amt));
			return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;			
		};

		const palette: Record<number, string> = {};
		toneNames.forEach((tone, index) => {			
			palette[tone] = lightenDarkenColor(baseColor, shades[index]);
		});

		return palette;
	}
}
