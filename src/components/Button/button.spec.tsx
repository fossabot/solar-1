import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from './index'

test('Primary button should be sl-button--primary', async () => {
  const {getByRole} = render(<Button theme="primary">Sample name</Button>)

  expect(getByRole('button'))
    .toHaveClass('sl-button', 'sl-button--primary');
});
