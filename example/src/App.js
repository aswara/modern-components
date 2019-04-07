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
