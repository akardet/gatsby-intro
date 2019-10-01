import React, { useState } from 'react';
import { css } from '@emotion/core';

const wave = () => {
  const [waves, setWaves] = useState(0);

  const label = `👋🏽 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
        font-variant-numeric: tabular-nums;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default wave;
