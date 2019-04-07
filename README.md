# modern-components

> Modern UI for React

[![NPM](https://img.shields.io/npm/v/modern-components.svg)](https://www.npmjs.com/package/modern-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modern-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { Sidebar } from 'modern-components'

class Example extends Component {
  render () {
    const menus = [
        {
            to: 'dashboard',
            label: 'Dashboard',
            icon: 'D',
        }, {
            to: 'user',
            label: 'User',
            icon: 'U'
        }
    ]

    return (
      <Sidebar
        active='dashboard'
        logo='AS'
        menus={menus}
      >
        <div>
          <h1>Dashboard</h1>
        </div>
      </Sidebar>
    )
  }
}
```

## License

MIT © [aswara](https://github.com/aswara)
