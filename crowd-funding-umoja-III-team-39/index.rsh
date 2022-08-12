'reach 0.1';

export const main = Reach.App(() => {
  const Alice =  Participant('Alice', {
    expected: UInt,
    unitAmount: UInt,
    checkBalance: Fun([], Null),
    donationAlert: Fun([Address], Null),
    viewProgress: Fun([UInt], Null)
  });
  const Bob = API('Bob', {
    viewProgress: Fun([], Object({ progress: UInt, expected: UInt})),
    donate: Fun([], Bool),
    viewUnitAmount: Fun([], UInt)
  });

  init();

  Alice.only(() => {
    const expected = declassify(interact.expected);
    const unitAmount = declassify(interact.unitAmount);
  })
  Alice.publish(expected, unitAmount);
  
  const [ counter, progress ] = 
    parallelReduce([ 0, 0 ])
      .invariant(balance() == progress)
      .while(progress < expected)
      .api_(Bob.viewUnitAmount, () => {
        check( this != Alice, "Not Deployer");

        return [ 0, (resolve) => {
          resolve(unitAmount);
          return [ counter, progress ];
        }];
      })
      .api_(Bob.viewProgress, () => {
        check( this != Alice, "Not Deployer");

        return [ 0, (resolve) => {
          resolve({ progress, expected });
          return [ counter, progress ];
        }];
      })
      .api_(Bob.donate, () => {
        check( this != Alice, "Not Deployer");

        return [ unitAmount * 1000000, (resolve) => {
          Alice.interact.donationAlert(this);
          Alice.interact.viewProgress(progress + unitAmount);
          resolve(true);
          return [ counter + 1, progress + (unitAmount * 1000000) ];
        }];
      });

      transfer(balance()).to(Alice);
      Alice.interact.checkBalance();
    
      commit();
      exit(); 
})
