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

import { Sidebar, Header, BurgerIcon, Avatar, Container, ListItem, List } from 'modern-components'

export default class App extends Component {
  state = {
    card:false
  }

  render() {
    const { card } = this.state
    const styleItem = { display: 'flex', marginBottom: 20, }
    return (
      <div>
        <Sidebar widthOpen={250} showLabel={false} shadow>
          <Header
            shadow
            right={<Avatar height={45}>MC</Avatar>}
          >
            <Container>
              <div onClick={()=>this.setState({ card: !card })}>
                Klik
              </div>
              <List card={card}>
                <ListItem row={4}  card={card} shadow style={styleItem}>
                  <Avatar>AS</Avatar> Tes
                </ListItem>
                <ListItem row={4}  card={card} style={styleItem}>
                  <Avatar>AS</Avatar> Tes
                </ListItem>
                <ListItem row={4}  card={card} shadow style={styleItem}>
                  <Avatar>AS</Avatar> Tes
                </ListItem>
                <ListItem  row={4}  card={card} shadow style={styleItem}>
                  <Avatar>AS</Avatar> Tes
                </ListItem>
              </List>
            </Container>
          </Header>
        </Sidebar>
      </div>
    )
  }
}

```

## License

MIT © [aswara](https://github.com/aswara)
