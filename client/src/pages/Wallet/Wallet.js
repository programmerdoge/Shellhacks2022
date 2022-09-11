import { useState } from 'react'
import { ethers } from "ethers"
import MusicNFTMarketplaceAbi from '../../frontend/contractsData/MusicNFTMarketplace.json'
import MusicNFTMarketplaceAddress from '../../frontend/contractsData/MusicNFTMarketplace-address.json'
import { Spinner, Navbar, Nav, Button, Container } from 'react-bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Wallet()
{
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [contract, setContract] = useState({})

  const web3Handler = async () => 
  {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])

    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // Get signer
    const signer = provider.getSigner()
    loadContract(signer)
  }

  const loadContract = async (signer) => 
  {
    // Get deployed copy of music nft marketplace contract
    const contract = new ethers.Contract(MusicNFTMarketplaceAddress.address, MusicNFTMarketplaceAbi.abi, signer)
    setContract(contract)
    setLoading(false)
  }
  return (<BrowserRouter>
    <div className="App">
      <>
        <Navbar expand="lg" bg="secondary" variant="dark">
          <Container>
              <Nav>
                {account ? (
                  <Nav.Link
                    href={`https://etherscan.io/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button nav-button btn-sm mx-4">
                    <Button variant="outline-light">
                      {account.slice(0, 5) + '...' + account.slice(38, 42)}
                    </Button>

                  </Nav.Link>
                ) : (
                  <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                )}
              </Nav>
          </Container>
        </Navbar>
      </>
      <div>
      </div>
    </div>
  </BrowserRouter>

);
} export default Wallet;