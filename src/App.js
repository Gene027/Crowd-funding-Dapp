import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useState } from 'react';
import { views, Loader } from './utils/';
import { ConnectAccount, PasteContractInfo, HomePage, CrowdFund, Donate, About } from './screens';


const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }))

function App() {
  const [account, setAccount] = useState({})
  const [contract, setContract] = useState()
  const [view, setView] = useState(views.HOMEPAGE)
  const [contractInfo, setContractInfo] = useState(`{"type":"BigNumber","hex":"0xlade"}`)
  const [expected, setExpected] = useState()
  const [donors, setDonors] = useState([
    // {address: 'Adamudanburuba', donation: 40}, 
    // {address: 'Adamudanburuba', donation: 40},
    // {address: 'Adamudanburuba', donation: 40},
    // {address: 'Adamudanburuba', donation: 40},
  ])
  const [update, setUpdate] = useState(1)
  const [progress, setProgress] = useState(0)
  const [completed, setCompleted] = useState(false)

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.HOMEPAGE); //after connecting where, pass deployer or attacher info
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {  //should all move to connect fn above
      if (deployer) {
        setView(views.CONNECT_ACCOUNT); 
      }
      else {
        setView(views.CONNECT_ACCOUNT);
      }
    },

    deploy: async () => {
      const contract = account.contract(backend);
      backend.Alice(contract, { expected, ...Alice });
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2)
      setContractInfo(`${ctcInfo}`);
      setView(views.CROWD_FUND)
    },

    attach: async (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      setContract(contract)
      // backend.Attacher(contract, Bob)
      setView(views.ATTACHING)

      try {
        const hexProgress = await contract.apis.Bob.viewProgress()
        console.log(hexProgress)
        setExpected(parseFloat(hexProgress.expected))
        setProgress(parseFloat(hexProgress.progress))
        setView(views.DONATE)
      } catch (error) {
        console.log(error)
        setView(views.HOMEPAGE)
      }
    }
  }

  const Alice = {
    //expected: UInt,
    checkBalance: () => {
      setCompleted(true)
    },

    donationAlert: (donor, amountHex, pHex) => {
      const amount = parseFloat(amountHex)
      const p = parseFloat(pHex)
      setDonors(d => {
        const copy = [...d]
        copy.push({
          address: donor,
          donation: amount
        })
        return copy
      })
      setProgress(p)
      setUpdate(Math.random())
    },
  }

  console.log(donors)


  //SCREEN RENDERS
  return (
    <div className="App">
      <header className="App-header">
        {
          view === views.CONNECT_ACCOUNT &&
          <ConnectAccount connect={reachFunctions.connect} />
        }

        {
          view === views.ABOUT &&
          <About setView ={setView} />
        }

        {
          view === views.HOMEPAGE &&
          <HomePage deploy={reachFunctions.deploy} attach={() => setView(views.PASTE_CONTRACT_INFO)} expected={expected} setExpected={setExpected} setView ={setView} />
        }

        {
          (view === views.DEPLOYING || view === views.ATTACHING) &&
          <Loader />
        }

        {
          view === views.PASTE_CONTRACT_INFO &&
          <PasteContractInfo attach={reachFunctions.attach} />
        }

        {
          view === views.CROWD_FUND &&
          <CrowdFund
            info={contractInfo}
            expected={expected}
            donors={donors}
            progress={progress}
            update={update}
            complete={completed}
          />
        }

        {
          view === views.DONATE &&
          <Donate
            contract={contract}
            progress={progress}
            expected={expected}
            setExpected={setExpected}
            setProgress={setProgress}
          />
        }
      </header>
    </div>
  );
}

export default App;
