import "./App.css";
import { loadStdlib } from "@reach-sh/stdlib";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import * as backend from "./reach/build/index.main.mjs";
import { useEffect, useState } from "react";
import { views, makeid } from "./utils";
import { ConnectingLoader } from "./screens/components/ConnectingLoader";
import { FaPowerOff } from "react-icons/fa";
import Card from "./screens/components/Card";
import { Donate } from "./screens/components/Donate";
import { SetCampaignDetails } from "./screens/SetCampaignDetails";
import { API } from "./utils/api";
import { About, CrowdFund, HomePage } from "./screens";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);

function App() {
  const { fetchAllCampaigns, addCampaign, fetchUserCampaigns } = API();
  const [allFetchError, setAllFetchError] = useState(false);
  const [account, setAccount] = useState({});
  const [address, setAddress] = useState();
  const [view, setView] = useState(views.HOMEPAGE);
  const [connecting, setConnecting] = useState(false);
  const [canConnect, setCanConnect] = useState(true);
  const [donation, setDonation] = useState(false);
  const [activeDonateCard, setActiveDonateCard] = useState();
  const [myCampaigns, setMyCampaigns] = useState([
    // {
    //   address: 1234567890,
    //   title: 'Starving kids in africa funds',
    //   description: 'To feed the starving kids in Africa',
    //   expected: 15000,
    //   progress: 5000,
    //   donors: [
    //       {address: 'Adamudanburuba', donation: 40},
    //       {address: 'Adamudanburuba', donation: 40},
    //   ],
    //   img: '/start-campaign-2.jpg',
    //   id: ''
    // },
  ]);
  const [allcampaigns, setAllCampaigns] = useState([
    // ...data
    // {
    //   title: "Crowd funding project",
    //   description: "This is a web 3.0 project aimed at building a scalable crowd funding dapp",
    //   expected: 1200,
    //   img: "/start-campaign-2.jpg",
    //   progress: 0,
    //   address: '',
    //   deployer: ''
    // }
  ]);

  const reachFunctions = {
    connect: async () => {
      let result = "";
      try {
        setConnecting(true);
        const account = await reach.getDefaultAccount();
        localStorage.setItem("connected", "yes");
        localStorage.setItem("account", JSON.stringify(account.networkAccount));
        setAccount(account);
        setAddress(account.networkAccount.addr);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      setConnecting(false);
      return result;
    },

    setAsDeployer: (deployer = true) => {
      //should all move to connect fn above
      if (deployer) {
        setView(views.CONNECT_ACCOUNT);
      } else {
        setView(views.CONNECT_ACCOUNT);
      }
    },

    deploy: async (name, description, expected, img) => {
      setConnecting(true);
      const contract = account.contract(backend);
      const id = makeid(8);
      backend.Alice(contract, { expected, id, ...Alice });
      const contractAddress = parseInt(await contract.getInfo());
      setMyCampaigns((m) => {
        const copy = [...m];
        copy.push({
          address: contractAddress,
          title: name,
          description,
          expected,
          img,
          progress: 0,
          donors: [],
          id,
        });
        return copy;
      });
      const res = await addCampaign({
        address: contractAddress,
        title: name,
        description,
        expected,
        img,
        progress: 0,
        deployer: address,
        donors: [],
        id,
      });
      console.log(res);
      setCanConnect(false);
      setConnecting(false);
      setView(views.CROWD_FUND);
      return address;
    },

    attach: async (contractInfo) => {
      const hexString = parseInt(contractInfo).toString(16);
      const ctcInfoString = `{"type":"BigNumber", "hex": "0x0${hexString}"}`;
      const contract = account.contract(backend, JSON.parse(ctcInfoString));
      // backend.Attacher(contract, Bob)
      setView(views.ATTACHING);

      try {
        const hexProgress = await contract.apis.Bob.viewProgress();
        console.log(hexProgress);
        setView(views.DONATE);
      } catch (error) {
        console.log(error);
        setView(views.HOMEPAGE);
      }
    },

    dedicatedAttach: async (contractInfo) => {
      const hexString = parseInt(contractInfo).toString(16);
      const ctcInfoString = `{"type":"BigNumber", "hex": "0x0${hexString}"}`;
      const contract = account.contract(backend, JSON.parse(ctcInfoString));
      console.log("called here");

      try {
        const hexProgress = await contract.apis.Bob.viewProgress();

        return {
          progress: parseFloat(hexProgress.progress),
          expected: parseFloat(hexProgress.expected),
          contract,
        };
      } catch (error) {
        console.log(error);
        return {
          error: error.message.includes("Not Deployer")
            ? "not deployer"
            : "Failed to fetch",
        };
      }
    },
  };

  const Alice = {
    //expected: UInt,
    checkBalance: () => {
      console.log("balance!!");
    },

    donationAlert: (donor, amountHex, pHex, id) => {
      const amount = parseFloat(amountHex);
      const progress = parseFloat(pHex);
      console.log("id!", id);
      setMyCampaigns((m) => {
        const copy = [...m];
        return copy.map((campaign) => {
          if (campaign.id === id) {
            const donors = [...campaign.donors];
            donors.push({
              address: donor,
              donation: amount,
            });
            return {
              ...campaign,
              progress,
              donors,
            };
          }
        });
      });
    },
  };

  const fetchCampaigns = () => {
    setConnecting(true);
    fetchAllCampaigns()
      .then((res) => {
        setConnecting(false);
        setAllFetchError(false);
        setAllCampaigns(res);
      })
      .catch((error) => {
        console.log(error);
        setConnecting(false);
        setAllFetchError(true);
      });
  };

  useEffect(() => {
    const connected = localStorage.getItem("connected");
    if (connected === "yes") {
      reach
        .connectAccount(JSON.parse(localStorage.getItem("account")))
        .then((acc) => {
          setAddress(acc.networkAccount.addr);
          setAccount(acc);
        });
    }
  }, []);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  useEffect(() => {
    if (!!address) {
      fetchUserCampaigns(address)
        .then((res) => {
          setMyCampaigns(res);
          if (res.length > 0) {
            setView(views.CROWD_FUND);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [address]);

  const cards = allcampaigns.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        connected={!!address}
        attach={() => {
          if (!!address) {
            setActiveDonateCard(item);
            setDonation(true);
          } else {
            reachFunctions.connect().then((result) => {
              if (result === "success") {
                setActiveDonateCard(item);
                setDonation(true);
              }
            });
          }
        }}
      />
    );
  });

  //SCREEN RENDERS
  return (
    <>
      {
        <Donate
          campaignData={activeDonateCard}
          attach={reachFunctions.dedicatedAttach}
          onClose={() => setDonation(false)}
          address={address}
          donation={donation}
          connected={!!address}
        />
      }

      {connecting && <ConnectingLoader />}

      <div>
        <div className="nav-header">
          <div
            className="left-section"
            title="Homepage"
            onClick={() => {
              if (view !== views.HOMEPAGE) {
                setView(views.HOMEPAGE);
              }
            }}
          >
            <h1>DreamFunds</h1>
            <img className="dreamfund-logo" src="/dollar.jpg" alt="" />
          </div>

          <div className="right-section">
            {view === views.CROWD_FUND && (
              <div
                onClick={() => setView(views.CREATE_CAMPAIGN)}
                className="how-it-works hover-effect"
              >
                New Campaign
              </div>
            )}
            <div
              className="how-it-works hover-effect"
              onClick={() => {
                setView(views.ABOUT);
              }}
            >
              How it works
            </div>
            <div
              className="connect-wallet hover-effect"
              title={address ? `Click to switch wallet` : ""}
              onClick={() => {
                if (canConnect) reachFunctions.connect();
              }}
            >
              {address ? (
                <span>{address}</span>
              ) : (
                <>
                  Connect Wallet
                  <FaPowerOff />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="home">
          {view === views.ABOUT && <About/>}

          {view === views.HOMEPAGE && (
            <HomePage
              setView={setView}
              connect={reachFunctions.connect}
              deploy={reachFunctions.deploy}
              attach={reachFunctions.dedicatedAttach}
              connected={!!address}
            />
          )}

          {view === views.CROWD_FUND && (
            <div className="crowd-fund">
              <div className="title-bar">My Projects</div>
              {myCampaigns.map((item, index) => (
                <CrowdFund
                  address={item.address}
                  title={item.title}
                  description={item.description}
                  donors={item.donors}
                  expected={item.expected}
                  progress={item.progress}
                  img={item.img}
                />
              ))}
            </div>
          )}

          {view === views.CREATE_CAMPAIGN && (
            <SetCampaignDetails
              deploy={reachFunctions.deploy}
              goBack={() => setView(views.CROWD_FUND)}
            />
          )}

          <hr
            style={{
              height: "1px",
              width: "100%",
            }}
          />

          <div className="campaign-grid">
            {allFetchError ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>There was an error fetching all campaigns</h2>
                <button className="button" onClick={fetchCampaigns}>
                  Retry
                </button>
              </div>
            ) : cards.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3 className="no-campaigns-yet">No Campaigns Yet</h3>
                <button className="button" onClick={fetchCampaigns}>
                  Reload
                </button>
              </div>
            ) : (
              cards
            )}
          </div>

          <div className="footer">
            &copy; 2023 dreamfunds. inc. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
