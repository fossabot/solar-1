import * as React from 'react';
import { Button } from './index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import '../../scss/solar.scss';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const themes = {
  Primary: 'primary',
  Default: 'default',
  Danger: 'danger',
  Success: 'success'
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Button theme={select("theme", themes, 'default') as any} onClick={action('onClick')} >
      <i className="ri-check-double-line"/>
      {text('text', 'Simple Button')}
    </Button>
  ));
