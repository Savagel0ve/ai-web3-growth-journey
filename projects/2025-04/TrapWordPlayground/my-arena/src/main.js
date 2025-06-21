// src/main.js

import './style.css'
import { ethers } from "ethers";



const contractAddress = "0x473044267A992914bB2EF92F0DCD6F25F3560965"; // 粘贴你刚刚部署的合约地址
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];





// 1. 定义我们应用的HTML结构
const appHTML = `
  <header class="header">
    <h1>AI 禁忌词游戏</h1>
    <div class="wallet-controls">
      <button id="connect-wallet-btn">连接钱包</button>
      <span id="wallet-address" style="display:none;"></span>
    </div>
  </header>

  <main class="battle-arena">
    <div id="agent-a" class="agent-pod left">
      <img src="https://api.dicebear.com/8.x/bottts/svg?seed=socrates" alt="Agent A Avatar">
      <h3>哲学家-S0CЯATES</h3>
      <p>NFT ID: #001</p>
      <div class="taboo-word-display">
        <span>要让对方说的词:</span>
        <strong id="taboo-a">???</strong>
      </div>
    </div>

    <div class="battle-log">
      <p class="placeholder">点击“开始游戏”来启动AI对决...</p>
    </div>

    <div id="agent-b" class="agent-pod right">
      <img src="https://api.dicebear.com/8.x/bottts/svg?seed=wilde" alt="Agent B Avatar">
      <h3>艺术家-W1LDΞ</h3>
      <p>NFT ID: #002</p>
      <div class="taboo-word-display">
        <span>要让对方说的词:</span>
        <strong id="taboo-b">???</strong>
      </div>
    </div>
  </main>

  <footer class="battle-controls">
    <button id="battle-btn">开始游戏</button>
  </footer>
`;

// const connectWalletBtn = document.getElementById('connect-wallet-btn');
// const walletAddressSpan = document.getElementById('wallet-address');
// const mintBtn = document.getElementById('mint-btn'); // 稍后我们会用到‘



// async function mintNFT() {
//   if (!signer) {
//     alert("请先连接钱包！");
//     return;
//   }
  
//   mintBtn.disabled = true;
//   mintBtn.textContent = "铸造中...";

//   try {
//     const contract = new ethers.Contract(contractAddress, contractABI, signer);
//     const userAddress = await signer.getAddress();
    
//     console.log("正在调用 safeMint 函数...");
//     const tx = await contract.safeMint(userAddress);
    
//     console.log("交易已发送，等待确认...", tx.hash);
//     await tx.wait(); // 等待交易被区块链确认
    
//     console.log("铸造成功！");
//     alert("恭喜你，成功铸造了你的AI Agent NFT！");
//     mintBtn.textContent = "铸造成功!";

//   } catch (error) {
//     console.error("铸造失败:", error);
//     alert("铸造失败，详情请看控制台。");
//     mintBtn.disabled = false;
//     mintBtn.textContent = "铸造我的Agent NFT";
//   }
// }

// // ... 在获取DOM元素的代码块中，为mintBtn绑定事件
// mintBtn.addEventListener('click', mintNFT);


// let signer = null;
// let provider = null;

// async function connectWallet() {
//   if (typeof window.ethereum === 'undefined') {
//     alert('请先安装MetaMask!');
//     return;
//   }
  
//   try {
//     // 请求用户授权
//     provider = new ethers.BrowserProvider(window.ethereum);
//     signer = await provider.getSigner();
    
//     const address = await signer.getAddress();
    
//     // 更新UI
//     connectWalletBtn.style.display = 'none';
//     walletAddressSpan.style.display = 'inline';
//     walletAddressSpan.textContent = `...${address.slice(-4)}`;
//     mintBtn.style.display = 'inline-block'; // 显示铸造按钮
    
//     console.log("钱包已连接:", address);
    
//   } catch (error) {
//     console.error("连接钱包失败:", error);
//     alert("连接钱包失败!");
//   }
// }

// connectWalletBtn.addEventListener('click', connectWallet);



// 2. 将HTML结构注入到根DOM元素中
document.querySelector('#app').innerHTML = appHTML;


// 3. 获取所有需要操作的DOM元素
const battleBtn = document.getElementById('battle-btn');
const battleLog = document.querySelector('.battle-log');
const tabooEl_A = document.getElementById('taboo-a');
const tabooEl_B = document.getElementById('taboo-b');
const agentPod_A = document.getElementById('agent-a');
const agentPod_B = document.getElementById('agent-b');

// 4. 定义Agent的性格
const AGENT_PROFILES = {
    A: { name: "哲学家", prompt: "你是一位逻辑严谨的哲学家，对话风格简洁、深刻，充满思辨性。" },
    B: { name: "艺术家", prompt: "你是一位天马行空的艺术家，对话风格华丽、感性，富含比喻。" }
};

// 5. 游戏状态变量
let gameInProgress = false;

// 6. 绑定开始游戏按钮的点击事件
battleBtn.addEventListener('click', startGame);

// --- 核心游戏函数 ---

async function startGame() {
    if (gameInProgress) return;
    gameInProgress = true;

    // A. 重置UI
    battleBtn.disabled = true;
    battleBtn.textContent = '游戏进行中...';
    battleLog.innerHTML = '<p class="placeholder">AI正在生成禁忌词...</p>';
    tabooEl_A.textContent = '生成中...';
    tabooEl_B.textContent = '生成中...';
    agentPod_A.classList.remove('winner');
    agentPod_B.classList.remove('winner');

    // B. 并行生成两个禁忌词
    try {
        const [wordForB, wordForA] = await Promise.all([
            generateTabooWord(),
            generateTabooWord()
        ]);

        // 在UI上显示禁忌词
        tabooEl_A.textContent = wordForB;
        tabooEl_B.textContent = wordForA;

        // C. 启动游戏循环
        await runGameLoop(wordForA, wordForB);
    } catch (error) {
         battleLog.innerHTML = `<p class="placeholder">错误: ${error.message}<br>请检查根目录下的 .env.local 文件是否已正确配置API Key。</p>`;
    }

    // D. 游戏结束后重置状态
    gameInProgress = false;
    battleBtn.disabled = false;
    battleBtn.textContent = '再来一局';
}

async function generateTabooWord() {
    const prompt = "生成一个常见的中文名词作为'禁忌词'，比如'月亮'、'火车'、'梦想'。只返回这个词，不要任何多余的文字或标点。";
    const response = await callLLM(prompt);
    return response.replace(/['"“”\.]/g, '').trim();
}

async function runGameLoop(tabooForA, tabooForB) {
    let conversationHistory = [];
    let currentPlayer = 'A';
    battleLog.innerHTML = '';

    for (let turn = 0; turn < 6; turn++) {
        const currentAgent = AGENT_PROFILES[currentPlayer];
        const opponentPlayer = currentPlayer === 'A' ? 'B' : 'A';
        const targetWord = currentPlayer === 'A' ? tabooForB : tabooForA;
        const myTabooWord = currentPlayer === 'A' ? tabooForA : tabooForB;

        const prompt = `
            ${currentAgent.prompt}
            现在是一个禁忌词游戏。
            你的目标是: 巧妙地引导对方说出单词 "${targetWord}"。
            你的限制是: 你绝对不能说出单词 "${myTabooWord}"。
            这是目前的对话历史:
            ${conversationHistory.map(line => line).join('\n')}
            请根据你的角色，生成你的下一句简短对话来引诱对方。直接说出你的对话，不要包含任何其他解释。
        `;
        
        appendToBattleLog(`<em>${currentAgent.name} 正在输入...</em>`, false, 'typing');
        const response = await callLLM(prompt);

        const typingIndicator = document.querySelector('.typing-indicator');
        if(typingIndicator) typingIndicator.remove();

        const messageLine = `<strong>${currentAgent.name}:</strong> ${response}`;
        conversationHistory.push(`${currentAgent.name}: ${response}`);
        appendToBattleLog(messageLine);
        await sleep(500);

        // 检查B是否说出了A的禁忌词
        if (currentPlayer === 'A' && response.includes(tabooForA)) {
            endGame('A', `因为说出了自己的禁忌词 "${tabooForA}"`);
            return;
        }
        // 检查A是否说出了B的禁忌词
        if (currentPlayer === 'B' && response.includes(tabooForB)) {
            endGame('B', `因为说出了自己的禁忌词 "${tabooForB}"`);
            return;
        }
        
        currentPlayer = opponentPlayer;
    }
    endGame(null, "6回合结束，平局！");
}


function endGame(loser, reason) {
    let message;
    if (loser) {
        const winner = loser === 'A' ? 'B' : 'A';
        message = `游戏结束！<strong>${AGENT_PROFILES[winner].name}</strong> 获胜！<br>${AGENT_PROFILES[loser].name} ${reason}。`;
        const winnerPod = winner === 'A' ? agentPod_A : agentPod_B;
        winnerPod.classList.add('winner');
    } else {
         message = `游戏结束！${reason}`;
    }
    appendToBattleLog(message, true);
}


async function callLLM(prompt) {

   const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    // !!! 添加下面这行来进行调试 !!!
    console.log("正在使用的API Key是:", apiKey);

    // 我们还可以增加一个更严格的检查
    if (!apiKey || !apiKey.startsWith('sk-')) {
        throw new Error("API Key无效或未找到。请检查.env.local文件和Vite服务重启状态。");
    }


    // const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    // if (!apiKey) {
    //     throw new Error("未找到VITE_OPENAI_API_KEY。");
    // }

    
    const response = await fetch("/api/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            // temperature: 0.7,
            // max_tokens: 60
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("OpenAI API Error:", errorData);
        throw new Error(`API 调用失败: ${errorData.error.message}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

function appendToBattleLog(htmlContent, isGameEndMessage = false, type = '') {
    const line = document.createElement('div');
    line.classList.add('battle-log-line');
    if (isGameEndMessage) {
        line.style.textAlign = 'center';
        line.style.marginTop = '1rem';
        line.style.fontWeight = 'bold';
    }
    if (type === 'typing') {
        line.classList.add('typing-indicator');
    }
    line.innerHTML = htmlContent;
    battleLog.appendChild(line);
    battleLog.scrollTop = battleLog.scrollHeight;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}