# Arc Lepton Agent: Autonomous Financial Orchestration 🤖💳

An autonomous financial orchestration agent built for the **Lepton Agents Hackathon**. This project enables AI-to-AI economic interactions by processing high-speed, sub-cent stablecoin nanopayments safely and predictably.

## 🧠 The Concept: Machine-to-Machine Micro-Budgets
As AI agents become independent economic actors, they must constantly trade small workloads (like LLM inferences, scraping tasks, and data embedding queries). Traditional blockchains cannot price these micro-transactions due to volatile gas spikes. 

**Arc Lepton Agent** solves this by providing a programmatic gateway built directly on the stablecoin-native Arc L1 network, powered by Circle's developer infrastructure.

## ⚡ Core Features
* **Automated Decision Vector:** The agent reads incoming compute signals, evaluates the micro-budget threshold, and programmatically signs executions without manual browser-extension approvals.
* **Deterministic Accounting:** Leverages predictable, dollar-denominated gas configurations to ensure small payments aren't swallowed by volatile fees.
* **Circle Integration:** Built utilizing `@circle-fin/developer-controlled-wallets` to enable enterprise-grade cryptographic transaction isolation.

## 🛠️ Tech Stack & Architecture
* **Language/Runtime:** Node.js (ES Modules)
* **Infrastructure Layer:** Circle Developer-Controlled Wallets API
* **Settlement Engine:** Arc L1 Network (USDC-native protocol layer)

## 📂 Codebase Breakdown
* `agent.js`: The autonomous reasoning layer evaluating memory tasks and triggering approvals.
* `routing-engine.js`: The cryptographic settlement pipeline handling the Circle SDK configurations.
* `package.json`: Manifest managing isolated dependencies.
