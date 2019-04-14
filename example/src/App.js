import React, { Component } from 'react'

import { Sidebar, Header, BurgerIcon, Avatar, Container, ListItem, List } from 'modern-components'

export default class App extends Component {
  state = {
    card:false
  }

  handleLink = (menu) => {
    console.log(menu)
  }

  render() {
    const { card } = this.state
    const styleItem = { display: 'flex', marginBottom: 20, }
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
      <div>
        <Sidebar
          shadow={true}
          width={60}
          widthHover={150}
          mobile={700}
          widthOpen={200}
          background='white'
          colorActive='#2B43A4'
          colorBurger='#2B43A4'
          showLabel={true}
          logo='AS'
          active='dashboard'
          styleLabel={{
              marginLeft: 10,
              fontSize: 14,
              fontWeight: 550,
          }}
          >
          <Header
            shadow
            right={<Avatar height={45}>MC</Avatar>}
          >
            <Container>
              <div style={{marginBottom: 10, cursor:'pointer'}} onClick={()=>this.setState({ card: !card })}>
                Change List 
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
