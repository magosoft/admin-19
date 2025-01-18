export class PaletteGenerator {
    static generatePalette(baseColor: string): Record<number, string> {
        const shades = [100,80, 60, 40, 20, 0, -20, -40, -60, -100, -110];
        const toneNames = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    
        const lightenDarkenColor = (col: string, amt: number): string => {
          let num = parseInt(col.slice(1), 16);
          let r = (num >> 16) + amt;
          let g = ((num >> 8) & 0x00ff) + amt;
          let b = (num & 0x0000ff) + amt;
    
          r = Math.min(255, Math.max(0, r));
          g = Math.min(255, Math.max(0, g));
          b = Math.min(255, Math.max(0, b));
    
          return `#${((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)}`;
        };
    
        const palette: Record<number, string> = {};
        toneNames.forEach((tone, index) => {
          palette[tone] = lightenDarkenColor(baseColor, shades[index]);
        });
    
        return palette;
      }
}
