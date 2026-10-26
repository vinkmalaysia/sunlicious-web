/* parallax-js ships browserify-era CJS without types — minimal ambient
   declaration covering the surface this site uses. */
declare module "parallax-js" {
  export default class Parallax {
    constructor(scene: HTMLElement, options?: Record<string, unknown>);
    disable(): void;
    destroy(): void;
  }
}
