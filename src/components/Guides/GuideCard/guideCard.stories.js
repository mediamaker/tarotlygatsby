import React from "react"
import { storiesOf } from "@storybook/react"
import { css, cx } from 'emotion'
import { action } from '@storybook/addon-actions';
import GuideCard from './guideCard';

export const guideCard = {
  id: '1',
  title: 'The Fool',
  state: 'IN_DRAW_PILE',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onChooseCard: action('onChooseCard'),
  onSwapCard: action('onSwapCard'),
};

storiesOf(`Guides/guideCard`, module).add(`default`, () => (

<div>
  <div className={css`
  font-family: "Work Sans";
  border-radius: 15px;
  margin-bottom: 13px;
  padding: 16px;
   filter: drop-shadow(0 2px 6px #314d6d);
 max-width: 195px;
 background: linear-gradient(239deg, #00eaae, #c322ff, #ff5c00);
background-size: 800% 800%;

-webkit-animation: AnimationName 4s ease infinite;
-moz-animation: AnimationName 4s ease infinite;
animation: AnimationName 4s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:92% 0%}
    50%{background-position:9% 100%}
    100%{background-position:92% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:92% 0%}
    50%{background-position:9% 100%}
    100%{background-position:92% 0%}
}
@keyframes AnimationName { 
    0%{background-position:92% 0%}
    50%{background-position:9% 100%}
    100%{background-position:92% 0%}
}
}`}>

<GuideCard guideCard={guideCard} {...actions}/>

  </div>

</div>
  
))

.add(`selected`, () => (

  
  <div>
    <div className={css`
    font-family: "Work Sans";
    border-radius: 15px;
    margin-bottom: 13px;
    padding: 16px;
     filter: drop-shadow(0 2px 6px #314d6d);
   max-width: 195px;
  background: linear-gradient(239deg, #671370, #c322ff);
background-size: 400% 400%;

-webkit-animation: AnimationName 2s ease infinite;
-moz-animation: AnimationName 2s ease infinite;
animation: AnimationName 2s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:92% 0%}
    50%{background-position:9% 100%}
    100%{background-position:92% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:92% 0%}
    50%{background-position:9% 100%}
    100%{background-position:92% 0%}
}
@keyframes AnimationName { 
    0%{background-position:92% 0%}
    50%{background-position:9% 100%}
    100%{background-position:92% 0%}
}
  }
  }`}>
  
  <GuideCard guideCard={guideCard} {...actions}/>

    </div>
  
  
  </div>
    
  ))


