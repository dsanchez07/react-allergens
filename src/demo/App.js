import React from 'react';
import {
  CrustaceanIcon,
  EggIcon,
  FishIcon,
  GlutenIcon,
  PeanutIcon,
  SoyaIcon,
  MilkIcon,
  NutsIcon,
  CeleryIcon,
  MustardIcon,
  SesameIcon,
  SulphiteIcon,
  LupinIcon,
  MolluscIcon,
} from '../lib';

const App = () => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
      flexFlow: 'row wrap',
    }}
  >
    <GlutenIcon width={100} height={100} />
    <CrustaceanIcon width={100} height={100} />
    <EggIcon width={100} height={100} />
    <FishIcon width={100} height={100} wrapperStyle={{ float: 'left' }} />
    <PeanutIcon width={100} height={100} />
    <SoyaIcon width={100} height={100} />
    <MilkIcon width={100} height={100} />
    <NutsIcon width={100} height={100} />
    <CeleryIcon width={100} height={100} />
    <MustardIcon width={100} height={100} />
    <SesameIcon width={100} height={100} />
    <SulphiteIcon width={100} height={100} />
    <LupinIcon width={100} height={100} />
    <MolluscIcon width={100} height={100} />
  </div>
);

export default App;
