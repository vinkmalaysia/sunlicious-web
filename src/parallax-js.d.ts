/* parallax-js ships browserify-era CJS without types — minimal ambient declaration. */
declare module "parallax-js" {
  export default class Parallax {
    constructor(scene: HTMLElement, options?: Record<string, unknown>);
    disable(): void;
    destroy(): void;
  }
}
