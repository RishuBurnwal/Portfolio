/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'shadow-intensity'?: string | number;
      'camera-controls'?: boolean;
      'auto-rotate'?: boolean;
      ar?: boolean;
      autoplay?: boolean;
      'animation-name'?: string;
      style?: React.CSSProperties;
    };
  }
}
