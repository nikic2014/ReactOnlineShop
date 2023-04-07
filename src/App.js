import React from "react";
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import ShowFullItem from "./ShowFullItem";

class App extends React.Component {
  constructor(property){
    super(property)
    this.state = {
      orders:[],
      showFullItem: false,
      fullItem: {},
      items: [
        {
          id: 1,
          title: 'Переварка корыта',
          img: 'test1.jpg',
          desc: 'Переварка переднего карыта днища машины',
          category: 'дно',
          price: '5000'
        },
        {
          id: 2,
          title: 'Переварка порога',
          img: 'test2.jpg',
          desc: 'Переварка порога',
          category: 'пороги',
          price: '5000'
        },
        {
          id: 3,
          title: 'Переварка усилителей порогов',
          img: 'test3.jpg',
          desc: 'Переварка усилителей порогов',
          category: 'пороги',
          price: '5000'
        }
      ]
    }
    
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder}/>
        
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArry = false

    this.state.orders.forEach(element => {
      if (element.id === item.id)
        isInArry = true
    })
    
    if (!isInArry)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
