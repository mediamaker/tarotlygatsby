import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion'

export default function GuideCard({ guideCard: { id, title, state }, onSwapCard , onChooseCard }) {  
    
    return (
        <div className={`drawCard ${state}`} onClick={() => onChooseCard(id) }>
                <h1 className={css`
    text-align: center;
    `}>🔥🌬️⛰️💧</h1>
      </div>
    );
  }


  
  GuideCard.propTypes = {
    guideCard: PropTypes.shape({
     id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onChooseCard: PropTypes.func,
    onSwapCard: PropTypes.func,
};