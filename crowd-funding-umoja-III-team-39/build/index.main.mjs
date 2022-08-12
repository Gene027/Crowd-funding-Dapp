// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

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
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Data({
    Bob_donate0_41: ctc1,
    Bob_viewProgress0_41: ctc1,
    Bob_viewUnitAmount0_41: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    expected: ctc0,
    progress: ctc0
    });
  
  
  const v470 = stdlib.protect(ctc0, interact.expected, 'for Alice\'s interact field expected');
  const v471 = stdlib.protect(ctc0, interact.unitAmount, 'for Alice\'s interact field unitAmount');
  
  const txn1 = await (ctc.sendrecv({
    args: [v470, v471],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v475, v476], secs: v478, time: v477, didSend: v29, from: v474 } = txn1;
      
      ;
      const v480 = stdlib.checkedBigNumberify('./index.rsh:26:25:decimal', stdlib.UInt_max, '0');
      const v481 = v477;
      const v484 = stdlib.checkedBigNumberify('./index.rsh:17:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v487 = stdlib.lt(v480, v475);
        
        return v487;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v474,
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
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v475, v476], secs: v478, time: v477, didSend: v29, from: v474 } = txn1;
  ;
  let v480 = stdlib.checkedBigNumberify('./index.rsh:26:25:decimal', stdlib.UInt_max, '0');
  let v481 = v477;
  let v484 = stdlib.checkedBigNumberify('./index.rsh:17:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v487 = stdlib.lt(v480, v475);
    
    return v487;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v535], secs: v537, time: v536, didSend: v348, from: v534 } = txn2;
    switch (v535[0]) {
      case 'Bob_donate0_41': {
        const v538 = v535[1];
        undefined /* setApiDetails */;
        const v543 = stdlib.addressEq(v534, v474);
        const v544 = v543 ? false : true;
        stdlib.assert(v544, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:28:application call to [unknown function] (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        const v546 = stdlib.mul(v476, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, '1000000'));
        const v556 = stdlib.add(v484, v546);
        ;
        stdlib.protect(ctc3, await interact.donationAlert(v534), {
          at: './index.rsh:49:39:application',
          fs: ['at ./index.rsh:49:39:application call to [unknown function] (defined at: ./index.rsh:49:39:function exp)', 'at ./index.rsh:49:39:application call to "liftedInteract" (defined at: ./index.rsh:49:39:application)', 'at ./index.rsh:48:50:application call to [unknown function] (defined at: ./index.rsh:48:50:function exp)'],
          msg: 'donationAlert',
          who: 'Alice'
          });
        
        const v562 = stdlib.add(v480, v476);
        stdlib.protect(ctc3, await interact.viewProgress(v562), {
          at: './index.rsh:50:38:application',
          fs: ['at ./index.rsh:50:38:application call to [unknown function] (defined at: ./index.rsh:50:38:function exp)', 'at ./index.rsh:50:38:application call to "liftedInteract" (defined at: ./index.rsh:50:38:application)', 'at ./index.rsh:48:50:application call to [unknown function] (defined at: ./index.rsh:48:50:function exp)'],
          msg: 'viewProgress',
          who: 'Alice'
          });
        
        const v564 = true;
        await txn2.getOutput('Bob_donate', 'v564', ctc4, v564);
        const v572 = stdlib.add(v480, v546);
        const cv480 = v572;
        const cv481 = v536;
        const cv484 = v556;
        
        v480 = cv480;
        v481 = cv481;
        v484 = cv484;
        
        continue;
        break;
        }
      case 'Bob_viewProgress0_41': {
        const v597 = v535[1];
        undefined /* setApiDetails */;
        const v607 = stdlib.addressEq(v534, v474);
        const v608 = v607 ? false : true;
        stdlib.assert(v608, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:38:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:34:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        ;
        const v637 = {
          expected: v475,
          progress: v480
          };
        await txn2.getOutput('Bob_viewProgress', 'v637', ctc5, v637);
        const cv480 = v480;
        const cv481 = v536;
        const cv484 = v484;
        
        v480 = cv480;
        v481 = cv481;
        v484 = cv484;
        
        continue;
        break;
        }
      case 'Bob_viewUnitAmount0_41': {
        const v656 = v535[1];
        undefined /* setApiDetails */;
        const v670 = stdlib.addressEq(v534, v474);
        const v671 = v670 ? false : true;
        stdlib.assert(v671, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:30:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:29:36:application call to [unknown function] (defined at: ./index.rsh:29:36:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:29:36:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        ;
        await txn2.getOutput('Bob_viewUnitAmount', 'v476', ctc0, v476);
        const cv480 = v480;
        const cv481 = v536;
        const cv484 = v484;
        
        v480 = cv480;
        v481 = cv481;
        v484 = cv484;
        
        continue;
        break;
        }
      }
    
    }
  ;
  stdlib.protect(ctc3, await interact.checkBalance(), {
    at: './index.rsh:57:34:application',
    fs: ['at ./index.rsh:57:34:application call to [unknown function] (defined at: ./index.rsh:57:34:function exp)', 'at ./index.rsh:57:34:application call to "liftedInteract" (defined at: ./index.rsh:57:34:application)'],
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
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Bob_donate0_41: ctc2,
    Bob_viewProgress0_41: ctc2,
    Bob_viewUnitAmount0_41: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const [v474, v475, v476, v480, v484] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v510 = ctc.selfAddress();
  const v512 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:45:28:application call to [unknown function] (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:26:19:application call to "runBob_donate0_41" (defined at: ./index.rsh:45:12:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
    msg: 'in',
    who: 'Bob_donate'
    });
  const v513 = stdlib.addressEq(v510, v474);
  const v514 = v513 ? false : true;
  stdlib.assert(v514, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:28:application call to [unknown function] (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:26:19:application call to "runBob_donate0_41" (defined at: ./index.rsh:45:12:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_donate'
    });
  const v519 = ['Bob_donate0_41', v512];
  
  const v525 = stdlib.mul(v476, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, '1000000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v474, v475, v476, v480, v484, v519],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v525, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v535], secs: v537, time: v536, didSend: v348, from: v534 } = txn1;
      
      switch (v535[0]) {
        case 'Bob_donate0_41': {
          const v538 = v535[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_donate"
            });
          const v546 = stdlib.mul(v476, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, '1000000'));
          const v556 = stdlib.add(v484, v546);
          sim_r.txns.push({
            amt: v546,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v564 = true;
          const v565 = await txn1.getOutput('Bob_donate', 'v564', ctc4, v564);
          
          const v572 = stdlib.add(v480, v546);
          const v913 = v572;
          const v915 = v556;
          const v916 = stdlib.lt(v572, v475);
          if (v916) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v474,
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
          const v597 = v535[1];
          
          break;
          }
        case 'Bob_viewUnitAmount0_41': {
          const v656 = v535[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v535], secs: v537, time: v536, didSend: v348, from: v534 } = txn1;
  switch (v535[0]) {
    case 'Bob_donate0_41': {
      const v538 = v535[1];
      undefined /* setApiDetails */;
      const v543 = stdlib.addressEq(v534, v474);
      const v544 = v543 ? false : true;
      stdlib.assert(v544, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:28:application call to [unknown function] (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_donate'
        });
      const v546 = stdlib.mul(v476, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, '1000000'));
      const v556 = stdlib.add(v484, v546);
      ;
      const v564 = true;
      const v565 = await txn1.getOutput('Bob_donate', 'v564', ctc4, v564);
      if (v348) {
        stdlib.protect(ctc5, await interact.out(v538, v565), {
          at: './index.rsh:45:13:application',
          fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:51:18:application call to "resolve" (defined at: ./index.rsh:48:50:function exp)', 'at ./index.rsh:48:50:application call to [unknown function] (defined at: ./index.rsh:48:50:function exp)'],
          msg: 'out',
          who: 'Bob_donate'
          });
        }
      else {
        }
      
      const v572 = stdlib.add(v480, v546);
      const v913 = v572;
      const v915 = v556;
      const v916 = stdlib.lt(v572, v475);
      if (v916) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Bob_viewProgress0_41': {
      const v597 = v535[1];
      return;
      break;
      }
    case 'Bob_viewUnitAmount0_41': {
      const v656 = v535[1];
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
  const ctc3 = stdlib.T_Data({
    Bob_donate0_41: ctc2,
    Bob_viewProgress0_41: ctc2,
    Bob_viewUnitAmount0_41: ctc2
    });
  const ctc4 = stdlib.T_Object({
    expected: ctc1,
    progress: ctc1
    });
  const ctc5 = stdlib.T_Null;
  
  
  const [v474, v475, v476, v480, v484] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v499 = ctc.selfAddress();
  const v501 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:37:34:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:26:19:application call to "runBob_viewProgress0_41" (defined at: ./index.rsh:37:12:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
    msg: 'in',
    who: 'Bob_viewProgress'
    });
  const v502 = stdlib.addressEq(v499, v474);
  const v503 = v502 ? false : true;
  stdlib.assert(v503, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:34:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:26:19:application call to "runBob_viewProgress0_41" (defined at: ./index.rsh:37:12:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_viewProgress'
    });
  const v508 = ['Bob_viewProgress0_41', v501];
  
  const txn1 = await (ctc.sendrecv({
    args: [v474, v475, v476, v480, v484, v508],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v535], secs: v537, time: v536, didSend: v348, from: v534 } = txn1;
      
      switch (v535[0]) {
        case 'Bob_donate0_41': {
          const v538 = v535[1];
          
          break;
          }
        case 'Bob_viewProgress0_41': {
          const v597 = v535[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_viewProgress"
            });
          ;
          const v637 = {
            expected: v475,
            progress: v480
            };
          const v638 = await txn1.getOutput('Bob_viewProgress', 'v637', ctc4, v637);
          
          const v929 = v480;
          const v931 = v484;
          const v932 = stdlib.lt(v480, v475);
          if (v932) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v474,
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
        case 'Bob_viewUnitAmount0_41': {
          const v656 = v535[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v535], secs: v537, time: v536, didSend: v348, from: v534 } = txn1;
  switch (v535[0]) {
    case 'Bob_donate0_41': {
      const v538 = v535[1];
      return;
      break;
      }
    case 'Bob_viewProgress0_41': {
      const v597 = v535[1];
      undefined /* setApiDetails */;
      const v607 = stdlib.addressEq(v534, v474);
      const v608 = v607 ? false : true;
      stdlib.assert(v608, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:37:34:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_viewProgress'
        });
      ;
      const v637 = {
        expected: v475,
        progress: v480
        };
      const v638 = await txn1.getOutput('Bob_viewProgress', 'v637', ctc4, v637);
      if (v348) {
        stdlib.protect(ctc5, await interact.out(v597, v638), {
          at: './index.rsh:37:13:application',
          fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)', 'at ./index.rsh:41:18:application call to "resolve" (defined at: ./index.rsh:40:31:function exp)', 'at ./index.rsh:40:31:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)'],
          msg: 'out',
          who: 'Bob_viewProgress'
          });
        }
      else {
        }
      
      const v929 = v480;
      const v931 = v484;
      const v932 = stdlib.lt(v480, v475);
      if (v932) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Bob_viewUnitAmount0_41': {
      const v656 = v535[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_viewUnitAmount3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_viewUnitAmount3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_viewUnitAmount3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Bob_donate0_41: ctc2,
    Bob_viewProgress0_41: ctc2,
    Bob_viewUnitAmount0_41: ctc2
    });
  const ctc4 = stdlib.T_Null;
  
  
  const [v474, v475, v476, v480, v484] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v488 = ctc.selfAddress();
  const v490 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:29:36:application call to [unknown function] (defined at: ./index.rsh:29:36:function exp)', 'at ./index.rsh:26:19:application call to "runBob_viewUnitAmount0_41" (defined at: ./index.rsh:29:12:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
    msg: 'in',
    who: 'Bob_viewUnitAmount'
    });
  const v491 = stdlib.addressEq(v488, v474);
  const v492 = v491 ? false : true;
  stdlib.assert(v492, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:30:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:29:36:application call to [unknown function] (defined at: ./index.rsh:29:36:function exp)', 'at ./index.rsh:26:19:application call to "runBob_viewUnitAmount0_41" (defined at: ./index.rsh:29:12:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_viewUnitAmount'
    });
  const v497 = ['Bob_viewUnitAmount0_41', v490];
  
  const txn1 = await (ctc.sendrecv({
    args: [v474, v475, v476, v480, v484, v497],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v535], secs: v537, time: v536, didSend: v348, from: v534 } = txn1;
      
      switch (v535[0]) {
        case 'Bob_donate0_41': {
          const v538 = v535[1];
          
          break;
          }
        case 'Bob_viewProgress0_41': {
          const v597 = v535[1];
          
          break;
          }
        case 'Bob_viewUnitAmount0_41': {
          const v656 = v535[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_viewUnitAmount"
            });
          ;
          const v709 = await txn1.getOutput('Bob_viewUnitAmount', 'v476', ctc1, v476);
          
          const v945 = v480;
          const v947 = v484;
          const v948 = stdlib.lt(v480, v475);
          if (v948) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v474,
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
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v535], secs: v537, time: v536, didSend: v348, from: v534 } = txn1;
  switch (v535[0]) {
    case 'Bob_donate0_41': {
      const v538 = v535[1];
      return;
      break;
      }
    case 'Bob_viewProgress0_41': {
      const v597 = v535[1];
      return;
      break;
      }
    case 'Bob_viewUnitAmount0_41': {
      const v656 = v535[1];
      undefined /* setApiDetails */;
      const v670 = stdlib.addressEq(v534, v474);
      const v671 = v670 ? false : true;
      stdlib.assert(v671, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:30:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:29:36:application call to [unknown function] (defined at: ./index.rsh:29:36:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:29:36:function exp)', 'at ./index.rsh:26:19:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_viewUnitAmount'
        });
      ;
      const v709 = await txn1.getOutput('Bob_viewUnitAmount', 'v476', ctc1, v476);
      if (v348) {
        stdlib.protect(ctc4, await interact.out(v656, v709), {
          at: './index.rsh:29:13:application',
          fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:13:function exp)', 'at ./index.rsh:33:18:application call to "resolve" (defined at: ./index.rsh:32:31:function exp)', 'at ./index.rsh:32:31:application call to [unknown function] (defined at: ./index.rsh:32:31:function exp)'],
          msg: 'out',
          who: 'Bob_viewUnitAmount'
          });
        }
      else {
        }
      
      const v945 = v480;
      const v947 = v484;
      const v948 = stdlib.lt(v480, v475);
      if (v948) {
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
export async function Bob_viewUnitAmount(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_viewUnitAmount expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_viewUnitAmount expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Bob_viewUnitAmount3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_donate()byte`, `Bob_viewProgress()(uint64,uint64)`, `Bob_viewUnitAmount()uint64`],
    pure: [],
    sigs: [`Bob_donate()byte`, `Bob_viewProgress()(uint64,uint64)`, `Bob_viewUnitAmount()uint64`]
    },
  appApproval: `BiAHAAECCPPQgpEDytq6uQ0DJgMAAQABASI1ADEYQQIzKGRJIls1ASVbNQI2GgAXSUEARCI1BCM1BkkhBAxAACVJIQUMQAAOIQUSRCg1/yo0/1BCADghBBJEKDX/gAECNP9QQgAogby1/7QCEkQoNf8pNP9QQgAWNhoCFzUENhoDNhoBF0kkDEAA6yQSRCEGNAESRDQESSISTDQCEhFEKWRJNQNJSklXACA1/4EgWzX+gShbNf2BMFs1/IE4WzX7STUFNfqABNnfPAs0+lCwNPoiVUkjDEAAZEkkDEAALCQSRDEANP8TRIAIAAAAAAAAAdw0/RZQsDT9FjUHNP80/jT9NPwyBjT7QgCtSDEANP8TRIAIAAAAAAAAAn00/hY0/BZQULA0/hY0/BZQNQc0/zT+NP00/DIGNPtCAHtIMQA0/xNENP2BwIQ9CzX5NPmIAR+ACQAAAAAAAAI0AbAqNQc0/zT+NP00/DT5CDIGNPs0+QhCAEIiEkSBoI0GiADxIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDEANP80/iIyBiJCAAA1/zX+Nf01/DX7Nfo0/TT7DEEAJTT6NPsWUDT8FlA0/RZQNP8WUClLAVcAQGdIIQY1ATIGNQJCAC+xIrIBNP+yCCOyEDT6sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v476",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v476",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T7",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_donate0_41",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_viewProgress0_41",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_viewUnitAmount0_41",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T7",
                "name": "v535",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v476",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v564",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_expected",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_progress",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v637",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_donate",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_viewProgress",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_expected",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_progress",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_viewUnitAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T7",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_donate0_41",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_viewProgress0_41",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_viewUnitAmount0_41",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T7",
                "name": "v535",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620011b1380380620011b18339810160408190526200002691620003c8565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b34156007620000e0565b620000956200025e565b8051339052602080830180515183518301525181015182516040908101919091528183018051600090819052815143940193909352510152620000d8816200010a565b505062000465565b81620001065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b805160209081015190820151511015620001fe576200015a6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b031680825282516020908101518184019081528451604090810151818601908152838701805151606080890191825291518401516080808a019182526003600055436001558551978801989098529451938601939093529051908401525192820192909252905160a082015260c00160405160208183030381529060405260029080519060200190620001f9929190620002b1565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000242573d6000803e3d6000fd5b50600080805560018190556200025b9060029062000340565b50565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001620002ac60405180606001604052806000815260200160008152602001600081525090565b905290565b828054620002bf9062000428565b90600052602060002090601f016020900481019282620002e357600085556200032e565b82601f10620002fe57805160ff19168380011785556200032e565b828001600101855582156200032e579182015b828111156200032e57825182559160200191906001019062000311565b506200033c9291506200037a565b5090565b5080546200034e9062000428565b6000825580601f106200035f575050565b601f0160209004906000526020600020908101906200025b91905b5b808211156200033c57600081556001016200037b565b604080519081016001600160401b0381118282101715620003c257634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620003dc57600080fd5b620003e662000391565b835181526040601f1983011215620003fd57600080fd5b6200040762000391565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200043d57607f821691505b602082108114156200045f57634e487b7160e01b600052602260045260246000fd5b50919050565b610d3c80620004756000396000f3fe60806040526004361061006e5760003560e01c80636ebd2b991161004b5780636ebd2b99146100bf57806383230757146100e2578063a38d1178146100f7578063ab53f2c61461010a57005b8063066eab5f146100775780631e93b0f11461009257806335759663146100a757005b3661007557005b005b61007f61012d565b6040519081526020015b60405180910390f35b34801561009e57600080fd5b5060035461007f565b6100af61015d565b6040519015158152602001610089565b6100c761018a565b60408051825181526020928301519281019290925201610089565b3480156100ee57600080fd5b5060015461007f565b6100756101053660046109ae565b6101cc565b34801561011657600080fd5b5061011f6101f0565b6040516100899291906109c6565b60006101376107e0565b60208101515160029052610149610825565b610153828261028d565b6040015192915050565b60006101676107e0565b60208101515160009052610179610825565b610183828261028d565b5192915050565b60408051808201909152600080825260208201526101a66107e0565b602081015151600190526101b8610825565b6101c2828261028d565b6020015192915050565b6101d4610825565b6101ec6101e636849003840184610ab6565b8261028d565b5050565b60006060600054600280805461020590610b7d565b80601f016020809104026020016040519081016040528092919081815260200182805461023190610b7d565b801561027e5780601f106102535761010080835404028352916020019161027e565b820191906000526020600020905b81548152906001019060200180831161026157829003601f168201915b50505050509050915091509091565b61029d600360005414600e61066e565b81516102b89015806102b157508251600154145b600f61066e565b6000808055600280546102ca90610b7d565b80601f01602080910402602001604051908101604052809291908181526020018280546102f690610b7d565b80156103435780601f1061031857610100808354040283529160200191610343565b820191906000526020600020905b81548152906001019060200180831161032657829003601f168201915b505050505080602001905181019061035b9190610bb2565b9050610365610863565b7feb31b6250f6c9f0fcfe4c5819ebfb30c7237cb22fa161da5fa3e30747da0249b3385604051610396929190610c45565b60405180910390a160006020850151515160028111156103b8576103b8610a23565b14156104bb5781516103e4906001600160a01b031633146103da5760016103dd565b60005b600861066e565b620f424082604001516103f79190610ccf565b808252610407903414600961066e565b604051600181527fc55b7c7ef375f5faee54aebdc92249fcae4e19952f8f22036f145f7260f246879060200160405180910390a160018352610447610892565b825181516001600160a01b039091169052602080840151825190910152604080840151825190910152815160608401516104819190610cee565b6020808301805192909252905143910152815160808401516104a39190610cee565b6020820151604001526104b581610693565b50610668565b60016020850151515160028111156104d5576104d5610a23565b14156105c7578151610501906001600160a01b031633146104f75760016104fa565b60005b600a61066e565b61050d3415600b61066e565b6020828101518282018051919091526060840151815183015251604080518251815291830151928201929092527f630bb86e5781cc4ae6e2ba15696266403a3ce762272b7ffcd8e243b30601a7b4910160405180910390a160208082015190840152610577610892565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608501518284018051919091528051439301929092526080850151915101526104b581610693565b60026020850151515160028111156105e1576105e1610a23565b141561066857815161060d906001600160a01b03163314610603576001610606565b60005b600c61066e565b6106193415600d61066e565b7f15ecd4ea44b3d0e5c5d6bac4bcc3bc69871109af6c743a2820bf2339de3db339826040015160405161064e91815260200190565b60405180910390a160408083015190840152610577610892565b50505050565b816101ec5760405163100960cb60e01b81526004810182905260240160405180910390fd5b805160209081015190820151511015610783576106e16040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b031680825282516020908101518184019081528451604090810151818601908152838701805151606080890191825291518401516080808a019182526003600055436001558551978801989098529451938601939093529051908401525192820192909252905160a082015260c0016040516020818303038152906040526002908051906020019061077e9291906108df565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107c6573d6000803e3d6000fd5b50600080805560018190556107dd90600290610963565b50565b6040518060400160405280600081526020016108206040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b6040518060600160405280600015158152602001610856604051806040016040528060008152602001600081525090565b8152602001600081525090565b604051806040016040528060008152602001610820604051806040016040528060008152602001600081525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161082060405180606001604052806000815260200160008152602001600081525090565b8280546108eb90610b7d565b90600052602060002090601f01602090048101928261090d5760008555610953565b82601f1061092657805160ff1916838001178555610953565b82800160010185558215610953579182015b82811115610953578251825591602001919060010190610938565b5061095f929150610999565b5090565b50805461096f90610b7d565b6000825580601f1061097f575050565b601f0160209004906000526020600020908101906107dd91905b5b8082111561095f576000815560010161099a565b600060a082840312156109c057600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156109fa578581018301518582016060015282016109de565b81811115610a0c576000606083870101525b50601f01601f191692909201606001949350505050565b634e487b7160e01b600052602160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610a6a57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff81118282101715610a6a57634e487b7160e01b600052604160045260246000fd5b80358015158114610ab157600080fd5b919050565b600081830360a0811215610ac957600080fd5b6040516040810181811067ffffffffffffffff82111715610afa57634e487b7160e01b600052604160045260246000fd5b604052833581526080601f1983011215610b1357600080fd5b610b1b610a39565b9150610b25610a70565b602085013560038110610b3757600080fd5b8152610b4560408601610aa1565b6020820152610b5660608601610aa1565b6040820152610b6760808601610aa1565b6060820152825260208101919091529392505050565b600181811c90821680610b9157607f821691505b602082108114156109c057634e487b7160e01b600052602260045260246000fd5b600060a08284031215610bc457600080fd5b60405160a0810181811067ffffffffffffffff82111715610bf557634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b0381168114610c0f57600080fd5b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160c08301919060038110610c8657634e487b7160e01b600052602160045260246000fd5b806040850152506020810151151560608401526040810151151560808401526060810151151560a0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610ce957610ce9610cb9565b500290565b60008219821115610d0157610d01610cb9565b50019056fea26469706673582212203eace89f107a22bdaeb44ce34cc369955e99ee23c6b22adf6e6105bb97e2e10f64736f6c634300080c0033`,
  BytecodeLen: 4529,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:59:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:26:19:after expr stmt semicolon',
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
  "Bob_viewProgress": Bob_viewProgress,
  "Bob_viewUnitAmount": Bob_viewUnitAmount
  };
export const _APIs = {
  Bob: {
    donate: Bob_donate,
    viewProgress: Bob_viewProgress,
    viewUnitAmount: Bob_viewUnitAmount
    }
  };
