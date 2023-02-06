// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    Bob_donate0_41: ctc2,
    Bob_viewProgress0_41: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    expected: ctc0,
    progress: ctc0
    });
  
  
  const v352 = stdlib.protect(ctc0, interact.expected, 'for Alice\'s interact field expected');
  const v353 = stdlib.protect(ctc1, interact.id, 'for Alice\'s interact field id');
  
  const txn1 = await (ctc.sendrecv({
    args: [v352, v353],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v357, v358], secs: v360, time: v359, didSend: v29, from: v356 } = txn1;
      
      ;
      const v361 = stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '0');
      const v362 = stdlib.checkedBigNumberify('./index.rsh:24:25:decimal', stdlib.UInt_max, '0');
      const v363 = v359;
      const v366 = stdlib.checkedBigNumberify('./index.rsh:15:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v370 = stdlib.lt(v362, v357);
        
        return v370;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v356,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v357, v358], secs: v360, time: v359, didSend: v29, from: v356 } = txn1;
  ;
  let v361 = stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '0');
  let v362 = stdlib.checkedBigNumberify('./index.rsh:24:25:decimal', stdlib.UInt_max, '0');
  let v363 = v359;
  let v366 = stdlib.checkedBigNumberify('./index.rsh:15:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v370 = stdlib.lt(v362, v357);
    
    return v370;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v408], secs: v410, time: v409, didSend: v259, from: v407 } = txn3;
    switch (v408[0]) {
      case 'Bob_donate0_41': {
        const v411 = v408[1];
        undefined /* setApiDetails */;
        const v416 = v411[stdlib.checkedBigNumberify('./index.rsh:35:12:spread', stdlib.UInt_max, '0')];
        const v417 = stdlib.addressEq(v407, v356);
        const v418 = v417 ? false : true;
        stdlib.assert(v418, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:36:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:35:36:application call to [unknown function] (defined at: ./index.rsh:35:36:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:35:36:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        const v420 = stdlib.safeMul(v416, stdlib.checkedBigNumberify('./index.rsh:38:29:decimal', stdlib.UInt_max, '1000000'));
        const v426 = stdlib.add(v366, v420);
        ;
        const v433 = stdlib.safeAdd(v362, v416);
        stdlib.protect(ctc5, await interact.donationAlert(v407, v416, v433, v358), {
          at: './index.rsh:39:39:application',
          fs: ['at ./index.rsh:39:39:application call to [unknown function] (defined at: ./index.rsh:39:39:function exp)', 'at ./index.rsh:39:39:application call to "liftedInteract" (defined at: ./index.rsh:39:39:application)', 'at ./index.rsh:38:48:application call to [unknown function] (defined at: ./index.rsh:38:48:function exp)'],
          msg: 'donationAlert',
          who: 'Alice'
          });
        
        const v435 = true;
        await txn3.getOutput('Bob_donate', 'v435', ctc6, v435);
        const v442 = stdlib.safeAdd(v361, stdlib.checkedBigNumberify('./index.rsh:41:30:decimal', stdlib.UInt_max, '1'));
        const cv361 = v442;
        const cv362 = v433;
        const cv363 = v409;
        const cv366 = v426;
        
        v361 = cv361;
        v362 = cv362;
        v363 = cv363;
        v366 = cv366;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Bob_viewProgress0_41': {
        const v458 = v408[1];
        undefined /* setApiDetails */;
        const v469 = stdlib.addressEq(v407, v356);
        const v470 = v469 ? false : true;
        stdlib.assert(v470, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:28:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:27:34:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        ;
        const v496 = {
          expected: v357,
          progress: v362
          };
        await txn3.getOutput('Bob_viewProgress', 'v496', ctc7, v496);
        const cv361 = v361;
        const cv362 = v362;
        const cv363 = v409;
        const cv366 = v366;
        
        v361 = cv361;
        v362 = cv362;
        v363 = cv363;
        v366 = cv366;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  ;
  stdlib.protect(ctc5, await interact.checkBalance(), {
    at: './index.rsh:46:34:application',
    fs: ['at ./index.rsh:46:34:application call to [unknown function] (defined at: ./index.rsh:46:34:function exp)', 'at ./index.rsh:46:34:application call to "liftedInteract" (defined at: ./index.rsh:46:34:application)'],
    msg: 'checkBalance',
    who: 'Alice'
    });
  
  return;
  
  
  };
export async function _Bob_donate3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_donate3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_donate3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    Bob_donate0_41: ctc2,
    Bob_viewProgress0_41: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Null;
  
  
  const [v356, v357, v361, v362, v366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v382 = ctc.selfAddress();
  const v384 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:35:36:application call to [unknown function] (defined at: ./index.rsh:35:36:function exp)', 'at ./index.rsh:24:19:application call to "runBob_donate0_41" (defined at: ./index.rsh:35:12:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
    msg: 'in',
    who: 'Bob_donate'
    });
  const v385 = v384[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v387 = stdlib.addressEq(v382, v356);
  const v388 = v387 ? false : true;
  stdlib.assert(v388, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:35:36:application call to [unknown function] (defined at: ./index.rsh:35:36:function exp)', 'at ./index.rsh:24:19:application call to "runBob_donate0_41" (defined at: ./index.rsh:35:12:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_donate'
    });
  const v395 = ['Bob_donate0_41', v384];
  
  const v402 = stdlib.safeMul(v385, stdlib.checkedBigNumberify('./index.rsh:38:29:decimal', stdlib.UInt_max, '1000000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v356, v357, v361, v362, v366, v395],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v402, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v408], secs: v410, time: v409, didSend: v259, from: v407 } = txn1;
      
      switch (v408[0]) {
        case 'Bob_donate0_41': {
          const v411 = v408[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_donate"
            });
          const v416 = v411[stdlib.checkedBigNumberify('./index.rsh:35:12:spread', stdlib.UInt_max, '0')];
          const v420 = stdlib.safeMul(v416, stdlib.checkedBigNumberify('./index.rsh:38:29:decimal', stdlib.UInt_max, '1000000'));
          const v426 = stdlib.add(v366, v420);
          sim_r.txns.push({
            amt: v420,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v433 = stdlib.safeAdd(v362, v416);
          const v435 = true;
          const v436 = await txn1.getOutput('Bob_donate', 'v435', ctc5, v435);
          
          const v442 = stdlib.safeAdd(v361, stdlib.checkedBigNumberify('./index.rsh:41:30:decimal', stdlib.UInt_max, '1'));
          const v619 = v442;
          const v620 = v433;
          const v622 = v426;
          const v623 = stdlib.lt(v433, v357);
          if (v623) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Bob_viewProgress0_41': {
          const v458 = v408[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v408], secs: v410, time: v409, didSend: v259, from: v407 } = txn1;
  switch (v408[0]) {
    case 'Bob_donate0_41': {
      const v411 = v408[1];
      undefined /* setApiDetails */;
      const v416 = v411[stdlib.checkedBigNumberify('./index.rsh:35:12:spread', stdlib.UInt_max, '0')];
      const v417 = stdlib.addressEq(v407, v356);
      const v418 = v417 ? false : true;
      stdlib.assert(v418, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:36:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:35:36:application call to [unknown function] (defined at: ./index.rsh:35:36:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:35:36:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_donate'
        });
      const v420 = stdlib.safeMul(v416, stdlib.checkedBigNumberify('./index.rsh:38:29:decimal', stdlib.UInt_max, '1000000'));
      const v426 = stdlib.add(v366, v420);
      ;
      const v433 = stdlib.safeAdd(v362, v416);
      const v435 = true;
      const v436 = await txn1.getOutput('Bob_donate', 'v435', ctc5, v435);
      if (v259) {
        stdlib.protect(ctc6, await interact.out(v411, v436), {
          at: './index.rsh:35:13:application',
          fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:13:function exp)', 'at ./index.rsh:40:18:application call to "resolve" (defined at: ./index.rsh:38:48:function exp)', 'at ./index.rsh:38:48:application call to [unknown function] (defined at: ./index.rsh:38:48:function exp)'],
          msg: 'out',
          who: 'Bob_donate'
          });
        }
      else {
        }
      
      const v442 = stdlib.safeAdd(v361, stdlib.checkedBigNumberify('./index.rsh:41:30:decimal', stdlib.UInt_max, '1'));
      const v619 = v442;
      const v620 = v433;
      const v622 = v426;
      const v623 = stdlib.lt(v433, v357);
      if (v623) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Bob_viewProgress0_41': {
      const v458 = v408[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_viewProgress3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_viewProgress3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_viewProgress3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Data({
    Bob_donate0_41: ctc3,
    Bob_viewProgress0_41: ctc2
    });
  const ctc5 = stdlib.T_Object({
    expected: ctc1,
    progress: ctc1
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v356, v357, v361, v362, v366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v371 = ctc.selfAddress();
  const v373 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:27:34:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:24:19:application call to "runBob_viewProgress0_41" (defined at: ./index.rsh:27:12:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
    msg: 'in',
    who: 'Bob_viewProgress'
    });
  const v374 = stdlib.addressEq(v371, v356);
  const v375 = v374 ? false : true;
  stdlib.assert(v375, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:28:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:27:34:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:24:19:application call to "runBob_viewProgress0_41" (defined at: ./index.rsh:27:12:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_viewProgress'
    });
  const v380 = ['Bob_viewProgress0_41', v373];
  
  const txn1 = await (ctc.sendrecv({
    args: [v356, v357, v361, v362, v366, v380],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v408], secs: v410, time: v409, didSend: v259, from: v407 } = txn1;
      
      switch (v408[0]) {
        case 'Bob_donate0_41': {
          const v411 = v408[1];
          
          break;
          }
        case 'Bob_viewProgress0_41': {
          const v458 = v408[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_viewProgress"
            });
          ;
          const v496 = {
            expected: v357,
            progress: v362
            };
          const v497 = await txn1.getOutput('Bob_viewProgress', 'v496', ctc5, v496);
          
          const v634 = v361;
          const v635 = v362;
          const v637 = v366;
          const v638 = stdlib.lt(v362, v357);
          if (v638) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v356,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v408], secs: v410, time: v409, didSend: v259, from: v407 } = txn1;
  switch (v408[0]) {
    case 'Bob_donate0_41': {
      const v411 = v408[1];
      return;
      break;
      }
    case 'Bob_viewProgress0_41': {
      const v458 = v408[1];
      undefined /* setApiDetails */;
      const v469 = stdlib.addressEq(v407, v356);
      const v470 = v469 ? false : true;
      stdlib.assert(v470, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:28:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:27:34:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:24:19:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_viewProgress'
        });
      ;
      const v496 = {
        expected: v357,
        progress: v362
        };
      const v497 = await txn1.getOutput('Bob_viewProgress', 'v496', ctc5, v496);
      if (v259) {
        stdlib.protect(ctc6, await interact.out(v458, v497), {
          at: './index.rsh:27:13:application',
          fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:13:function exp)', 'at ./index.rsh:31:18:application call to "resolve" (defined at: ./index.rsh:30:31:function exp)', 'at ./index.rsh:30:31:application call to [unknown function] (defined at: ./index.rsh:30:31:function exp)'],
          msg: 'out',
          who: 'Bob_viewProgress'
          });
        }
      else {
        }
      
      const v634 = v361;
      const v635 = v362;
      const v637 = v366;
      const v638 = stdlib.lt(v362, v357);
      if (v638) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bob_donate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_donate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_donate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Bob_donate3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_viewProgress(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_viewProgress expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_viewProgress expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Bob_viewProgress3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_donate(uint64)byte`, `Bob_viewProgress()(uint64,uint64)`, `_reachp_0((uint64,uint64,byte[8]))void`, `_reachp_2((uint64,(byte,byte[8])))void`],
    pure: [],
    sigs: [`Bob_donate(uint64)byte`, `Bob_viewProgress()(uint64,uint64)`, `_reachp_0((uint64,uint64,byte[8]))void`, `_reachp_2((uint64,(byte,byte[8])))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAyYCAQAAMRhBAcApZEkiWzUBJFs1AihkggQEFJW6cwTCyoTaBNHSn9AE1y6tSjYaAI4EAXEBhQABAGAANhoBFzULJK8oNAsWUFA1CyU0ARJESVcAIDUTSYEgWzUSSYEoWzURSYEwWzUQgThbNQ40CyJbNQw0C1cICTUNgARsQUgdNAwWUDQNULA0DIgBzzQNIlWNAgFnAWpC/6CAEQAAAAAAAAAAAQAAAAAAAAAANQtC/5k0DSNbNQ0xADQTE0Q0DYHAhD0LSTUMiAF1IzULgAgAAAAAAAABszQLFlEHCFCwNAsWUQcINQQ0ESMINBA0DQgyBjQONAwINQ41DzUQNRE0EDQSDEEA/DQTNBIWUDQRFlA0EBZQNA4WUCUyBjUCNQEoTFcAQGcpNAEWNAIWUGcxGSISRIgBLjQDQAAKgAQVH3x1NARQsCNDMQA0ExNENBIWNBAWUDULgAgAAAAAAAAB8DQLULA0CzUEMgY1D0L/jzEANRM0CyJbNQw0CyRbNRKABAM2jOo0DBZQNBIWUDQLVxAIULA0DIgAwSIiMgYiNQ41DzUQNRFC/1WIAIqBoI0GNAYINQY2GgE1C0L/sogAdjYaATULQv6BIjE0EkSBAjE1EkQiMTYSRCIxNxJEiABWgUCvIiJC/zMxGSISREL/SyKyASOyELIHsgiziUL+sUL/RTQONBOIADExGYEFEkSIAFIiMgoyCYgAVkL/GUiJTAlJNQYyCYgAEYkJSUH/7kk1BogACYkjNQOJsUL/sjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJIhJMNAISEUSJNAY0B0oPQf+yQv+6sbIJQv96`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `50`,
    101: `50`,
    102: `51`,
    103: `52`,
    104: `52`,
    105: `53`,
    106: `54`,
    107: `54`,
    108: `55`,
    109: `56`,
    11: `2`,
    110: `56`,
    111: `57`,
    112: `57`,
    113: `58`,
    114: `59`,
    115: `59`,
    116: `60`,
    117: `60`,
    118: `61`,
    119: `62`,
    12: `4`,
    120: `63`,
    121: `63`,
    122: `64`,
    123: `64`,
    124: `65`,
    125: `65`,
    126: `65`,
    127: `66`,
    128: `66`,
    129: `67`,
    13: `4`,
    130: `67`,
    131: `67`,
    132: `67`,
    133: `67`,
    134: `67`,
    135: `68`,
    136: `68`,
    137: `69`,
    138: `70`,
    139: `71`,
    14: `5`,
    140: `71`,
    141: `72`,
    142: `73`,
    143: `75`,
    144: `75`,
    145: `76`,
    146: `76`,
    147: `76`,
    148: `77`,
    149: `77`,
    15: `5`,
    150: `78`,
    151: `79`,
    152: `80`,
    153: `80`,
    154: `80`,
    155: `80`,
    156: `80`,
    157: `80`,
    158: `81`,
    159: `81`,
    16: `5`,
    160: `81`,
    161: `84`,
    162: `84`,
    163: `84`,
    164: `84`,
    165: `84`,
    166: `84`,
    167: `84`,
    168: `84`,
    169: `84`,
    17: `6`,
    170: `84`,
    171: `84`,
    172: `84`,
    173: `84`,
    174: `84`,
    175: `84`,
    176: `84`,
    177: `84`,
    178: `84`,
    179: `84`,
    18: `7`,
    180: `85`,
    181: `85`,
    182: `86`,
    183: `86`,
    184: `86`,
    185: `88`,
    186: `88`,
    187: `89`,
    188: `90`,
    189: `91`,
    19: `8`,
    190: `91`,
    191: `92`,
    192: `92`,
    193: `93`,
    194: `93`,
    195: `94`,
    196: `95`,
    197: `102`,
    198: `102`,
    199: `103`,
    2: `2`,
    20: `9`,
    200: `103`,
    201: `103`,
    202: `103`,
    203: `104`,
    204: `105`,
    205: `106`,
    206: `106`,
    207: `107`,
    208: `107`,
    209: `107`,
    21: `10`,
    210: `110`,
    211: `111`,
    212: `111`,
    213: `112`,
    214: `112`,
    215: `112`,
    216: `112`,
    217: `112`,
    218: `112`,
    219: `112`,
    22: `11`,
    220: `112`,
    221: `112`,
    222: `112`,
    223: `113`,
    224: `113`,
    225: `114`,
    226: `115`,
    227: `115`,
    228: `115`,
    229: `116`,
    23: `11`,
    230: `117`,
    231: `118`,
    232: `118`,
    233: `119`,
    234: `120`,
    235: `120`,
    236: `120`,
    237: `121`,
    238: `121`,
    239: `122`,
    24: `12`,
    240: `122`,
    241: `123`,
    242: `124`,
    243: `125`,
    244: `125`,
    245: `126`,
    246: `126`,
    247: `127`,
    248: `128`,
    249: `128`,
    25: `13`,
    250: `129`,
    251: `129`,
    252: `130`,
    253: `130`,
    254: `131`,
    255: `132`,
    256: `132`,
    257: `133`,
    258: `133`,
    259: `134`,
    26: `14`,
    260: `134`,
    261: `135`,
    262: `135`,
    263: `137`,
    264: `137`,
    265: `138`,
    266: `138`,
    267: `139`,
    268: `140`,
    269: `140`,
    27: `14`,
    270: `140`,
    271: `142`,
    272: `142`,
    273: `143`,
    274: `143`,
    275: `144`,
    276: `145`,
    277: `146`,
    278: `146`,
    279: `147`,
    28: `15`,
    280: `148`,
    281: `149`,
    282: `149`,
    283: `150`,
    284: `151`,
    285: `152`,
    286: `152`,
    287: `153`,
    288: `154`,
    289: `155`,
    29: `16`,
    290: `156`,
    291: `156`,
    292: `158`,
    293: `158`,
    294: `159`,
    295: `159`,
    296: `160`,
    297: `161`,
    298: `162`,
    299: `162`,
    3: `2`,
    30: `18`,
    300: `162`,
    301: `163`,
    302: `164`,
    303: `165`,
    304: `165`,
    305: `166`,
    306: `167`,
    307: `167`,
    308: `168`,
    309: `169`,
    31: `18`,
    310: `170`,
    311: `171`,
    312: `171`,
    313: `172`,
    314: `173`,
    315: `174`,
    316: `176`,
    317: `176`,
    318: `176`,
    319: `178`,
    32: `18`,
    320: `178`,
    321: `179`,
    322: `179`,
    323: `179`,
    324: `181`,
    325: `181`,
    326: `181`,
    327: `181`,
    328: `181`,
    329: `181`,
    33: `18`,
    330: `182`,
    331: `182`,
    332: `183`,
    333: `184`,
    334: `186`,
    335: `187`,
    336: `189`,
    337: `189`,
    338: `190`,
    339: `190`,
    34: `18`,
    340: `191`,
    341: `192`,
    342: `199`,
    343: `199`,
    344: `200`,
    345: `201`,
    346: `201`,
    347: `202`,
    348: `203`,
    349: `204`,
    35: `18`,
    350: `204`,
    351: `205`,
    352: `205`,
    353: `205`,
    354: `205`,
    355: `205`,
    356: `205`,
    357: `205`,
    358: `205`,
    359: `205`,
    36: `18`,
    360: `205`,
    361: `206`,
    362: `206`,
    363: `207`,
    364: `208`,
    365: `209`,
    366: `209`,
    367: `210`,
    368: `210`,
    369: `211`,
    37: `18`,
    370: `211`,
    371: `212`,
    372: `212`,
    373: `213`,
    374: `213`,
    375: `213`,
    376: `215`,
    377: `215`,
    378: `216`,
    379: `216`,
    38: `18`,
    380: `217`,
    381: `217`,
    382: `218`,
    383: `219`,
    384: `220`,
    385: `220`,
    386: `221`,
    387: `221`,
    388: `222`,
    389: `223`,
    39: `18`,
    390: `224`,
    391: `224`,
    392: `225`,
    393: `225`,
    394: `225`,
    395: `225`,
    396: `225`,
    397: `225`,
    398: `226`,
    399: `226`,
    4: `2`,
    40: `18`,
    400: `227`,
    401: `228`,
    402: `229`,
    403: `229`,
    404: `230`,
    405: `231`,
    406: `232`,
    407: `232`,
    408: `233`,
    409: `233`,
    41: `18`,
    410: `233`,
    411: `234`,
    412: `235`,
    413: `237`,
    414: `237`,
    415: `238`,
    416: `238`,
    417: `238`,
    418: `239`,
    419: `240`,
    42: `18`,
    420: `241`,
    421: `241`,
    422: `242`,
    423: `243`,
    424: `243`,
    425: `244`,
    426: `244`,
    427: `245`,
    428: `245`,
    429: `246`,
    43: `18`,
    430: `246`,
    431: `247`,
    432: `247`,
    433: `247`,
    434: `249`,
    435: `249`,
    436: `249`,
    437: `250`,
    438: `250`,
    439: `250`,
    44: `18`,
    440: `250`,
    441: `252`,
    442: `252`,
    443: `253`,
    444: `254`,
    445: `254`,
    446: `255`,
    447: `255`,
    448: `255`,
    449: `256`,
    45: `18`,
    450: `256`,
    451: `257`,
    452: `257`,
    453: `257`,
    454: `259`,
    455: `259`,
    456: `259`,
    457: `260`,
    458: `260`,
    459: `260`,
    46: `18`,
    460: `261`,
    461: `261`,
    462: `262`,
    463: `262`,
    464: `262`,
    465: `264`,
    466: `265`,
    467: `265`,
    468: `266`,
    469: `267`,
    47: `18`,
    470: `268`,
    471: `268`,
    472: `269`,
    473: `269`,
    474: `270`,
    475: `271`,
    476: `272`,
    477: `273`,
    478: `273`,
    479: `274`,
    48: `18`,
    480: `275`,
    481: `276`,
    482: `277`,
    483: `277`,
    484: `278`,
    485: `279`,
    486: `280`,
    487: `280`,
    488: `280`,
    489: `281`,
    49: `18`,
    490: `281`,
    491: `282`,
    492: `283`,
    493: `284`,
    494: `285`,
    495: `285`,
    496: `285`,
    497: `287`,
    498: `287`,
    499: `288`,
    5: `2`,
    50: `18`,
    500: `289`,
    501: `290`,
    502: `292`,
    503: `292`,
    504: `292`,
    505: `294`,
    506: `295`,
    507: `295`,
    508: `296`,
    509: `297`,
    51: `18`,
    510: `297`,
    511: `298`,
    512: `298`,
    513: `299`,
    514: `299`,
    515: `300`,
    516: `301`,
    517: `303`,
    518: `303`,
    519: `303`,
    52: `19`,
    520: `305`,
    521: `305`,
    522: `305`,
    523: `307`,
    524: `307`,
    525: `309`,
    526: `309`,
    527: `310`,
    528: `310`,
    529: `310`,
    53: `19`,
    530: `312`,
    531: `312`,
    532: `313`,
    533: `313`,
    534: `314`,
    535: `315`,
    536: `317`,
    537: `317`,
    538: `317`,
    539: `319`,
    54: `19`,
    540: `320`,
    541: `320`,
    542: `321`,
    543: `321`,
    544: `322`,
    545: `322`,
    546: `322`,
    547: `323`,
    548: `323`,
    549: `323`,
    55: `20`,
    550: `325`,
    551: `326`,
    552: `328`,
    553: `329`,
    554: `330`,
    555: `331`,
    556: `331`,
    557: `332`,
    558: `332`,
    559: `333`,
    56: `20`,
    560: `333`,
    561: `333`,
    562: `334`,
    563: `336`,
    564: `337`,
    565: `338`,
    566: `338`,
    567: `338`,
    568: `339`,
    569: `340`,
    57: `20`,
    570: `340`,
    571: `341`,
    572: `341`,
    573: `341`,
    574: `342`,
    575: `344`,
    576: `345`,
    577: `345`,
    578: `346`,
    579: `348`,
    58: `20`,
    580: `349`,
    581: `349`,
    582: `349`,
    583: `352`,
    584: `352`,
    585: `353`,
    586: `353`,
    587: `354`,
    588: `355`,
    589: `356`,
    59: `20`,
    590: `357`,
    591: `357`,
    592: `358`,
    593: `359`,
    594: `359`,
    595: `360`,
    596: `360`,
    597: `361`,
    598: `361`,
    599: `362`,
    6: `2`,
    60: `20`,
    600: `363`,
    601: `364`,
    602: `364`,
    603: `365`,
    604: `366`,
    605: `367`,
    606: `368`,
    607: `368`,
    608: `369`,
    609: `370`,
    61: `20`,
    610: `371`,
    611: `373`,
    612: `374`,
    613: `375`,
    614: `376`,
    615: `377`,
    616: `377`,
    617: `378`,
    618: `379`,
    619: `380`,
    62: `20`,
    620: `381`,
    621: `383`,
    622: `383`,
    623: `384`,
    624: `384`,
    625: `385`,
    626: `386`,
    627: `387`,
    628: `387`,
    629: `387`,
    63: `20`,
    630: `388`,
    631: `388`,
    632: `388`,
    633: `390`,
    634: `391`,
    635: `391`,
    636: `392`,
    64: `20`,
    65: `22`,
    66: `24`,
    67: `24`,
    68: `24`,
    69: `25`,
    7: `2`,
    70: `26`,
    71: `26`,
    72: `28`,
    73: `29`,
    74: `30`,
    75: `31`,
    76: `31`,
    77: `32`,
    78: `33`,
    79: `34`,
    8: `2`,
    80: `35`,
    81: `35`,
    82: `37`,
    83: `38`,
    84: `38`,
    85: `39`,
    86: `40`,
    87: `42`,
    88: `43`,
    89: `43`,
    9: `2`,
    90: `43`,
    91: `44`,
    92: `44`,
    93: `45`,
    94: `46`,
    95: `46`,
    96: `47`,
    97: `48`,
    98: `48`,
    99: `49`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"bytes8","name":"elem2","type":"bytes8"}],"internalType":"struct T5","name":"v651","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"bytes8","name":"elem2","type":"bytes8"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"_Bob_donate0_41","type":"tuple"},{"internalType":"bool","name":"_Bob_viewProgress0_41","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v435","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"_expected","type":"uint256"},{"internalType":"uint256","name":"_progress","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v496","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v644","type":"uint256"}],"name":"Bob_donate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bob_viewProgress","outputs":[{"components":[{"internalType":"uint256","name":"_expected","type":"uint256"},{"internalType":"uint256","name":"_progress","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"_Bob_donate0_41","type":"tuple"},{"internalType":"bool","name":"_Bob_viewProgress0_41","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v654","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f196200131538819003601f81810184168501946001600160401b0393919290918287108588111762000446578160609284926040998a52833981010312620004415784519362000053856200045c565b81518552602080830151818701908152928701516001600160c01b031996909290878416840362000441578881019384526000938480554360035589516200009b816200045c565b85815285858201528a51908b82018281108b8211176200042d57908c9182528783528787840152015260049860ff8a541662000416578a513381528351868201528751818d015291511660608201527f319876aa741bafdfb0787bc73d53fef43c79870be08edd5e1644c6ad627973a690608090a151801590811562000409575b5015620003f25734620003db5787519660c088018881108882111762000325578952878301848152888a0185815260608a0186815260808b0187815260a08c01888152338d52985180855243909152909a929190156200034b578b519760a089018981108c82111762000338578d528789528689019b888d528d8a01928984528d60608c01958b875260808d01978c895260018060a01b03905116809d525190525183525183525183526003875560019a438c558c5198878a0152518c8901525160608801525160808701525160a086015260a0855260c08501858110888211176200032557895284519687116200031257506200021c60025462000478565b858111620002d6575b50819486116001146200026e5750509183949184939462000262575b50501b916000199060031b1c1916176002555b51610e469081620004cf8239f35b01519250388062000241565b600283528183209493928692918316915b88838310620002bb5750505010620002a1575b505050811b0160025562000254565b015160001960f88460031b161c1916905538808062000292565b8587015188559096019594850194879350908101906200027f565b62000301906002855283852087808a0160051c820192868b1062000308575b0160051c0190620004b5565b3862000225565b92508192620002f5565b634e487b7160e01b845260419052602483fd5b634e487b7160e01b855260418252602485fd5b634e487b7160e01b895260418652602489fd5b50505050509350808080809750809450336108fcf115620003d157828055826001556200037a60025462000478565b806200038b575b5050505062000254565b818111600114620003a7575050506002555b3880808062000381565b6001620003c49260028652848620920160051c82019101620004b5565b812081600255556200039d565b83513d84823e3d90fd5b875163100960cb60e01b8152600981890152602490fd5b875163100960cb60e01b8152600881890152602490fd5b905060015414386200011c565b8a5163100960cb60e01b81526007818c0152602490fd5b634e487b7160e01b88526041600452602488fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176200044657604052565b90600182811c92168015620004aa575b60208310146200049457565b634e487b7160e01b600052602260045260246000fd5b91607f169162000488565b818110620004c1575050565b60008155600101620004b556fe60806040818152600436101561001c575b5050361561001a57005b005b600091823560e01c9081631e93b0f1146102a35750806363a747f0146101df5780636ebd2b991461016d578063832307571461014f578063ab53f2c6146100e05763b18b0fb00361001057602091826003193601126100dd5782906100d2610082610461565b8092855161008f8161030f565b865161009a81610340565b8281528152858101906100ab610497565b8252600435815152828251525186825101526100c56104c3565b9182525185820152610549565b015115159051908152f35b80fd5b503461014b578160031936011261014b5781546100fb6103ac565b91805193849283526020828185015284518093850152815b83811061013457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610113565b5080fd5b503461014b578160031936011261014b576020906001549051908152f35b508160031936011261014b5780826101db936020835161018c8161030f565b82815201526101ce61019c610461565b80926101a66104c3565b6020810190600182515251151586825101526101c06104c3565b918252516020820152610549565b01519051918291826102bf565b0390f35b509060803660031901126100dd576101f5610461565b9180516102018161030f565b6004358152606036602319011261029f578151606081016001600160401b0381118282101761028b5783526024356002811015610283578152602036604319011261028757825161025181610340565b60443581526020820152606435801515810361028357918161027d938560209894015286820152610549565b51908152f35b8480fd5b8380fd5b634e487b7160e01b85526041600452602485fd5b8280fd5b83903461014b578160031936011261014b576020906003548152f35b9190916020806040830194805184520151910152565b90600182811c92168015610305575b60208310146102ef57565b634e487b7160e01b600052602260045260246000fd5b91607f16916102e4565b604081019081106001600160401b0382111761032a57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761032a57604052565b606081019081106001600160401b0382111761032a57604052565b60a081019081106001600160401b0382111761032a57604052565b60c081019081106001600160401b0382111761032a57604052565b6040519060006002546103be816102d5565b80855260019180831690811561044257506001146103fc575b5050829003601f01601f191682016001600160401b0381118382101761032a57604052565b60026000908152602093509183600080516020610dfa8339815191525b83851061042e575050505083010138806103d7565b805488860183015293019284908201610419565b919250506020925060ff191682850152151560051b83010138806103d7565b6040519061046e8261035b565b81600081526000602082015260408051916104888361030f565b60008352600060208401520152565b604051906104a48261035b565b600060408382815281516104b781610340565b83815260208201520152565b604051906104d08261030f565b816000815260206104df610497565b910152565b5160028110156104f15790565b634e487b7160e01b600052602160045260246000fd5b6040519060c082016001600160401b0381118382101761032a576040528160a06000918281528260208201528260408201528260608201528260808201520152565b60405192916105578461035b565b60405161056381610340565b6000815284526000602085015260405161057c8161030f565b60008152600060208201526040850152600360005403610dc95761059e6103ac565b9160a0838051810103126109d357604051926105b984610376565b6020810151906001600160a01b03821682036109d35760a09185526040810151602086015260608101516040860152608081015160608601520151608084015260ff60045416610db05760405133815281516020820152602082015180519160028310156104f157604060a0927fe8fbc969f06bfea9c9ee454f0641ba663830a675200d95b1725bc2bc0bbbff8794828401526020810151516060840152015115156080820152a180518015908115610da4575b5015610d8b5761068060208201516104e4565b60028110156104f157610a2757602090810151015184528151336001600160a01b0390911603610a205760005b15610a0757835151620f424090818102918183048114821517156109d8578204036109d35780602086015234036109ee5760206001917fc960b3bddca189f577857826af3902312e12dae28e72e5307d371b578d2d1b7c82604051858152a10152610716610507565b81516001600160a01b031681526020808301519082019081526040830151919290916001810191908281116109d85782106109d357604084019182526060810151958051518701968781116109d85787106109d357602060806060870193898552438289015201519101510160a08501968188528451116000146109265750604051956107a287610376565b6000875260208701916000835260408801936000855260608901956000875260808a01976000895260018060a01b03905116809a525184525184525184525184526003600055436001556040519560208701525160408601525160608501525160808401525160a083015260a0825261081a82610391565b81516001600160401b03811161032a576108356002546102d5565b601f81116108de575b50602092601f821160011461087b5792819293600092610870575b50508160011b916000199060031b1c191617600255565b015190503880610859565b601f19821693600260005260206000209160005b8681106108c657508360019596106108ad575b505050811b01600255565b015160001960f88460031b161c191690553880806108a2565b9192602060018192868501518155019401920161088f565b600260005261091690600080516020610dfa833981519152601f840160051c8101916020851061091c575b601f0160051c0190610de2565b3861083e565b9091508190610909565b9351949550600094859485945084935091506001600160a01b03168282156109ca575bf1156109be576000805560006001556109636002546102d5565b8061096b5750565b601f811160011461097e57506000600255565b60026000526109b190601f0160051c600080516020610dfa83398151915201600080516020610e1a833981519152610de2565b6000602081208160025555565b6040513d6000823e3d90fd5b506108fc610949565b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60016106ad565b6020610a38919592939501516104e4565b60028110156104f157600114610a4f575b50509050565b8351336001600160a01b0390911603610d845760005b15610d6b5734610d52576040809160208601518282015152606086015160208383015101527fcd10978ed152528f298e54b078fc27b649f8623de49003baaafbe8ea232e7eb2610abd838301518451918291826102bf565b0390a10151910152610acd610507565b60018060a01b0383511692838252602081015160208301918183526040810151916040850192835260608201519660806060870193898552438289015201519160a0870198838a5210600014610caf57505060405195610b2c87610376565b6000875260208701916000835260408801936000855260608901956000875260808a01976000895260018060a01b03905116809a525184525184525184525184526003600055436001556040519560208701525160408601525160608501525160808401525160a083015260a08252610ba482610391565b81516001600160401b03811161032a57610bbf6002546102d5565b601f8111610c72575b50602092601f8211600114610c0c5792819293600092610c01575b50508160011b916000199060031b1c1916176002555b803880610a49565b015190503880610be3565b601f19821693600260005260206000209160005b868110610c5a5750836001959610610c41575b505050811b01600255610bf9565b015160001960f88460031b161c19169055388080610c33565b91926020600181928685015181550194019201610c20565b6002600052610ca990600080516020610dfa833981519152601f840160051c8101916020851061091c57601f0160051c0190610de2565b38610bc8565b9091506000809697508095508094508093508215610d49575bf1156109be57600080556000600155610ce26002546102d5565b80610cee575b50610bf9565b601f8111600114610d06575060006002555b38610ce8565b6002600052610d3990601f0160051c600080516020610dfa83398151915201600080516020610e1a833981519152610de2565b6000602081208160025555610d00565b506108fc610cc8565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b6001610a65565b60405163100960cb60e01b8152600c6004820152602490fd5b9050600154143861066d565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b818110610ded575050565b60008155600101610de256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acfa164736f6c6343000811000a`,
  BytecodeLen: 4885,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:48:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:24:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_donate": Bob_donate,
  "Bob_viewProgress": Bob_viewProgress
  };
export const _APIs = {
  Bob: {
    donate: Bob_donate,
    viewProgress: Bob_viewProgress
    }
  };
