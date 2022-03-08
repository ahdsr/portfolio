import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function FancyImage({
  alt,
  src,
  layout,
  quality,
  placeholder,
  overlayBgColorEnd,
  transitionDuration,
  zoomMargin,
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{
          scale: 0.95,
          transition: { duration: 0.2 },
        }}
      >
        <Zoom
          overlayBgColorEnd={overlayBgColorEnd}
          transitionDuration={transitionDuration}
          zoomMargin={zoomMargin}
        >
          <div>
            <Image
              alt={alt}
              src={src}
              layout={layout}
              quality={quality}
              placeholder={placeholder}
            />
          </div>
        </Zoom>
      </m.div>
    </LazyMotion>
  );
}
