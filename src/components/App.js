import React, { Component } from 'react';
import Web3 from 'web3'
import logo from '../logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json'
//import Navbar from './Navbar'

class App extends Component {

/*   async componentWillMount() {
    await this.loadWeb3()
  } */

  async loadWeb3(){
        if (window.ethereum){
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3){
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
  }

  async loadBlockchainData(){
    const web3 = window.web3

    const accounts = await web3.eth.getAccount()
    this.setState({ account : accounts[0] })
    const abi = Marketplace.abi 
    const address = Marketplace.networks[5777].address //1:49:46
    const market = web3.eth.Contract(abi,address)
    console.log(market)
    
    const marketplace = web3.eth
  }

  constructor(props){
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true
    }

   // this.createProduct = this.createProduct.bind(this)
  }
 
/*   createProduct(name, price){
    this.state.loading({loading: true})
    this.state.marketplace.methods(`createProduct`(name,price).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({loading: false})
    }
    ))
  } */

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dapp University's Blockchain Marketplace
          </a>
          <p>{this.state.account}</p>
        </nav>

        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br></br>
                  <br></br>
                  <br></br>
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <br></br>
                <br></br>
                <br></br>
                <h1>Dapp</h1>
                <h4>Vibes</h4>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
               {/*  <button>
                  name={product.id}
                  value={product.price}
                  onClick={(event) => {
                    this.props.purchaseProduct(event.target.name, event.target.value)
                  }}
                </button> */}
              </div>
            </main>
          </div>
        </div>

        <div>

        </div>
      </div>
    );
  }
}

export default App;
