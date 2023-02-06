'reach 0.1';

export const main = Reach.App(() => {
  const Alice =  Participant('Alice', {
    expected: UInt,
    id: Bytes(8),
    checkBalance: Fun([], Null),
    donationAlert: Fun([Address, UInt, UInt, Bytes(8)], Null)
  });
  const Bob = API('Bob', {
    viewProgress: Fun([], Object({ progress: UInt, expected: UInt})),
    donate: Fun([UInt], Bool),
  });

  init();

  Alice.only(() => {
    const expected = declassify(interact.expected);
    const id = declassify(interact.id);
  })
  Alice.publish(expected, id);
  
  const [ counter, progress ] = 
    parallelReduce([ 0, 0 ])
      .invariant(balance() == progress * 1000000)
      .while(progress < expected)
      .api_(Bob.viewProgress, () => {
        check( this != Alice, "Not Deployer");

        return [ 0, (resolve) => {
          resolve({ progress, expected });
          return [ counter, progress ];
        }];
      })
      .api_(Bob.donate, (donation) => {
        check( this != Alice, "Not Deployer");

        return [ donation * 1000000, (resolve) => {
          Alice.interact.donationAlert(this, donation, progress+donation, id);
          resolve(true);
          return [ counter + 1, progress + donation ];
        }];
      });

      transfer(balance()).to(Alice);
      Alice.interact.checkBalance();
    
      commit();
      exit(); 
})
