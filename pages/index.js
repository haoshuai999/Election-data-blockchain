import MissionControl from "../src/components/MissionControl";
import { allStates } from "../src/all-states";
import { mainnetContract } from "../src/mainnet/election-contract";

export async function getServerSideProps() {
  // const allWinners = {};
  // const fetchAllStates = allStates.map((state) => {
  //   return mainnetContract.methods
  //     .presidentialWinners(state)
  //     .call()
  //     .then((winner) => {
  //       allWinners[state] = {
  //         winner: winner.winner,
  //         resultNow: winner.resultNow,
  //         resultBlock: winner.resultBlock,
  //       };
  //     });
  // });


  //await Promise.all(fetchAllStates);
  const allWinners = await fetch('https://eos.hyperion.eosrio.io/v2/history/get_actions?limit=1&account=associapress&filter=associapress%3Aelection&sort=desc')
    .then((res) => res.json())
    .then((res) => {
        return res?.actions?.[0]?.act?.data?.data;
    })
    .then((res) => JSON.parse(res));

  return {
    props: { allWinners }, // will be passed to the page component as props
  };
}

const Mainnet = ({ allWinners }) => (
  <MissionControl environment="mainnet" allWinners={allWinners} />
);
export default Mainnet;
