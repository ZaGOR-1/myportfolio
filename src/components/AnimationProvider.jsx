import { LazyMotion } from 'framer-motion';

const loadFeatures = () => import('framer-motion').then((mod) => mod.domAnimation);

const AnimationProvider = ({ children }) => (
  <LazyMotion features={loadFeatures} strict>
    {children}
  </LazyMotion>
);

export default AnimationProvider;
