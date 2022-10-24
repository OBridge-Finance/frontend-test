window.addEventListener("load", async function () {
  let routerABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_wNativeToken",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fromChainID",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "toChainID",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "form",
          type: "uint256",
        },
      ],
      name: "LogRouterSwapInEVM",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "_minter",
          type: "address",
        },
      ],
      name: "addMinter",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burnOBToken",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "chainID",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "tokenList",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "newRouter",
          type: "address",
        },
      ],
      name: "changeRouter",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "mintOBToken",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "_minter",
          type: "address",
        },
      ],
      name: "removeMinter",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "toChainID",
          type: "uint256",
        },
      ],
      name: "swapInERC20Token",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "toChainID",
          type: "uint256",
        },
      ],
      name: "swapInNativeToken",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "toChainID",
          type: "uint256",
        },
      ],
      name: "swapInOBToken",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "uID",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "swapOut",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "wNativeToken",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];
  let tokenABI = [
    {
      type: "constructor",
      stateMutability: "nonpayable",
      inputs: [
        { type: "string", name: "_name", internalType: "string" },
        { type: "string", name: "_symbol", internalType: "string" },
        { type: "uint8", name: "_decimal", internalType: "uint8" },
      ],
    },
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          type: "address",
          name: "owner",
          internalType: "address",
          indexed: true,
        },
        {
          type: "address",
          name: "spender",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "value",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          type: "address",
          name: "previousOwner",
          internalType: "address",
          indexed: true,
        },
        {
          type: "address",
          name: "newOwner",
          internalType: "address",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          type: "address",
          name: "from",
          internalType: "address",
          indexed: true,
        },
        { type: "address", name: "to", internalType: "address", indexed: true },
        {
          type: "uint256",
          name: "value",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "allowance",
      inputs: [
        { type: "address", name: "owner", internalType: "address" },
        { type: "address", name: "spender", internalType: "address" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "approve",
      inputs: [
        { type: "address", name: "spender", internalType: "address" },
        { type: "uint256", name: "amount", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "balanceOf",
      inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
      name: "decimals",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "decreaseAllowance",
      inputs: [
        { type: "address", name: "spender", internalType: "address" },
        { type: "uint256", name: "subtractedValue", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "increaseAllowance",
      inputs: [
        { type: "address", name: "spender", internalType: "address" },
        { type: "uint256", name: "addedValue", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "string", name: "", internalType: "string" }],
      name: "name",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "address" }],
      name: "owner",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "renounceOwnership",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "string", name: "", internalType: "string" }],
      name: "symbol",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "totalSupply",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "transfer",
      inputs: [
        { type: "address", name: "to", internalType: "address" },
        { type: "uint256", name: "amount", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "transferFrom",
      inputs: [
        { type: "address", name: "from", internalType: "address" },
        { type: "address", name: "to", internalType: "address" },
        { type: "uint256", name: "amount", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "transferOwnership",
      inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
    },
  ];

  const cInfo = {
    97: {
      name: "TEST BSC NETWORK",
      scanUrl: "https://testnet.bscscan.com/tx/",
      router: "0x66b2FAFc8c5FC3A85d845804d156e9DEd21f321D",
      token: {
        BNB: {
          orgToken: "native",
          obToken: "0x0324FA1B46d74AaF2D6822FCBF0731189d873d53",
          decimals: 18,
        },
        DND: {
          orgToken: "0xCc41276324EBCA19d1CC414a6a59936e877d524B",
          obToken: "0x9F37F9686b4e378b700A906684F20f50f58e4F81",
          decimals: 18,
        },
        TT1: {
          orgToken: "0xF4A946265e7d2352F3276E72323B01FB4d29Ed5A",
          obToken: "0xE7C78EA3F022FC6b693002bc2D3B4da1B7c18d81",
          decimals: 18,
        },
        TT2: {
          orgToken: "0x71aAe0395d38B7626172c14876e03fBA024a9f52",
          obToken: "0xDCfbE0d7fA3Ff06f441195D6a4c760781d974882",
          decimals: 9,
        },
      },
    },
    7364: {
      name: "TEST DYNO CHAIN",
      scanUrl: "https://testnet.dynoscan.io/tx/",
      router: "0xDc3D17217906b93aBf1be6BA6fa05bD1d9215451",
      token: {
        DND: {
          orgToken: "native",
          obToken: "0xCd2bC521988bE2045B41fBE16203B5093d3aB151",
          decimals: 18,
        },
        BNB: {
          orgToken: "0xb6481168d40cb653526ce5598104d8942e23B90F",
          obToken: "0xC131de33Fa6cf9eF8659A1D3201B8Ce2389769a7",
          decimals: 18,
        },
        TT1: {
          orgToken: "0xCe7ddcE3E1d6800d02499E2decFe8B1C44313109",
          obToken: "0xCc41276324EBCA19d1CC414a6a59936e877d524B",
          decimals: 18,
        },
        TT2: {
          orgToken: "0x9781b88136e24CE5a2160EF53E1E8D22F45BE230",
          obToken: "0xE7C78EA3F022FC6b693002bc2D3B4da1B7c18d81",
          decimals: 9,
        },
      },
    },
  };

  let connected = null;
  let chainID = null;
  let accounts = null;

  const init = async () => {
    showLoader();

    chainID = await window.ethereum.request({ method: "eth_chainId" });
    accounts = await window.ethereum.request({ method: "eth_accounts" });

    if (accounts.length > 0) {
      connected = true;

      window.web3 = new Web3(window.ethereum);

      document.getElementById("btn_connect").innerHTML = "Connected";
      document.getElementById("btn_connect").classList.add("connected");
    } else {
      connected = false;
    }

    for (let key in cInfo) {
      if (key * 1 == chainID * 1) {
        $("#f_chain").append(
          "<option value='" + key + "'>" + cInfo[key]["name"] + "</option>"
        );
      } else {
        $("#t_chain").append(
          "<option value='" + key + "'>" + cInfo[key]["name"] + "</option>"
        );
      }
    }

    $("#f_token").empty();
    $("#f_token").append("<option selected value='none'>Choose</option>");
    for (let key in cInfo[chainID * 1]["token"]) {
      $("#f_token").append(
        "<option type='" +
          (cInfo[chainID * 1]["token"][key]["orgToken"] == "native" ? 0 : 1) +
          "' value='" +
          key +
          "'>" +
          key +
          "</option>"
      );
      $("#f_token").append(
        "<option type='2' value='" + key + "'>OB_" + key + "</option>"
      );
    }

    hideLoader();
  };

  const initTToken = async () => {
    $("#t_token").empty();

    let tchainID = $("#t_chain").val();
    let fToken = $("#f_token").val();
    let fTokenType = $("#f_token").find(":selected").attr("type");

    if (fToken == "none") return;
    if (fTokenType == 0) $("#btn_approve").hide();
    else $("#btn_approve").show();

    $("#t_token").append(
      "<option selected value='" +
        cInfo[tchainID]["token"][fToken]["orgToken"] +
        "'>" +
        fToken +
        "</option>"
    );
  };

  const connect = async () => {
    if (
      window.ethereum &&
      window.ethereum.isMetaMask &&
      window.ethereum.isConnected()
    ) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  };

  const swap = async () => {
    if (connected) {
      let f_chain = $("#f_chain").val();
      let t_chain = $("#t_chain").val();
      let f_token = $("#f_token").val();
      let f_token_type = $("#f_token").find(":selected").attr("type");
      let t_addr = $("#t_addr").val();
      let amount = $("#f_amount").val();

      if (f_token == "none" || t_addr.length == 0) {
        toastr("Please set info correctly");
        return;
      }

      if (amount > 0) {
        let routerContract = new window.web3.eth.Contract(
          routerABI,
          cInfo[f_chain]["router"]
        );

        f_decimal = cInfo[f_chain]["token"][f_token]["decimals"];
        f_obtoken = cInfo[f_chain]["token"][f_token]["obToken"];
        f_orgtoken = cInfo[f_chain]["token"][f_token]["orgToken"];

        showLoader();
        switch (f_token_type * 1) {
          case 0:
            routerContract.methods
              .swapInNativeToken(f_obtoken, t_addr, t_chain)
              .send(
                {
                  from: accounts[0],
                  value: BigNumber(amount * 10 ** f_decimal),
                },
                function (res) {
                  if (res != null) hideLoader();
                }
              )
              .then(async function (res) {
                if (res.status === true) {
                  register(f_chain, res.transactionHash);
                } else {
                  hideLoader();
                  toastr("Action failed");
                }
              });
            break;
          case 1:
            let org_token_contract = new window.web3.eth.Contract(
              tokenABI,
              f_orgtoken
            );

            await org_token_contract.methods
              .allowance(accounts[0], cInfo[f_chain]["router"])
              .call()
              .then(function (a_amount) {
                if (a_amount > amount * 10 ** f_decimal) {
                  routerContract.methods
                    .swapInERC20Token(
                      f_obtoken,
                      t_addr,
                      "" + amount * 10 ** f_decimal,
                      t_chain
                    )
                    .send({ from: accounts[0] }, function (res) {
                      if (res != null) hideLoader();
                    })
                    .then(async function (res) {
                      if (res.status === true) {
                        register(f_chain, res.transactionHash);
                      } else {
                        hideLoader();
                        toastr("Action failed");
                      }
                    });
                } else {
                  hideLoader();
                  toastr("Approve token first");
                }
              });
            break;
          case 2:
            let ob_token_contract = new window.web3.eth.Contract(
              tokenABI,
              f_obtoken
            );

            await ob_token_contract.methods
              .allowance(accounts[0], cInfo[f_chain]["router"])
              .call()
              .then(function (a_amount) {
                if (a_amount > amount * 10 ** f_decimal) {
                  routerContract.methods
                    .swapInOBToken(
                      f_obtoken,
                      t_addr,
                      "" + amount * 10 ** f_decimal,
                      t_chain
                    )
                    .send({ from: accounts[0] }, function (res) {
                      if (res != null) hideLoader();
                    })
                    .then(async function (res) {
                      if (res.status === true) {
                        register(f_chain, res.transactionHash);
                      } else {
                        hideLoader();
                        toastr("Action failed");
                      }
                    });
                } else {
                  hideLoader();
                  toastr("Approve token first");
                }
              });
            break;
        }
      } else {
        toastr("Please input correct value");
      }
    } else {
      toastr("Please connect MetaMask");
    }
  };

  const approve = async () => {
    if (connected) {
      showLoader();

      let f_chain = $("#f_chain").val();
      let f_token = $("#f_token").val();
      let f_token_type = $("#f_token").find(":selected").attr("type");

      if (f_token == "none" || t_addr.length == 0) {
        toastr("Please set info correctly");
        return;
      }

      f_decimal = cInfo[f_chain]["token"][f_token]["decimals"];
      f_obtoken = cInfo[f_chain]["token"][f_token]["obToken"];
      f_orgtoken = cInfo[f_chain]["token"][f_token]["orgToken"];
      switch (f_token_type * 1) {
        case 1:
          let org_token_contract = new window.web3.eth.Contract(
            tokenABI,
            f_orgtoken
          );
          org_token_contract.methods
            .approve(
              cInfo[f_chain]["router"],
              "10000000000000000000000000000000000000000"
            )
            .send({ from: accounts[0] }, function (res) {
              if (res != null) hideLoader();
            })
            .then(async function (res) {
              console.log(res);
              hideLoader();
            });
          break;
        case 2:
          let ob_token_contract = new window.web3.eth.Contract(
            tokenABI,
            f_obtoken
          );

          ob_token_contract.methods
            .approve(
              cInfo[f_chain]["router"],
              "10000000000000000000000000000000000000000"
            )
            .send({ from: accounts[0] }, function (res) {
              if (res != null) hideLoader();
            })
            .then(async function (res) {
              console.log(res);
              hideLoader();
            });
          break;
      }
    } else {
      toastr("Please connect MetaMask");
    }
  };

  const register = async (f_cid, t_cid, tx_hash) => {
    $.ajax({
      url: "****/" + f_cid + "/" + tx_hash,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      type: "POST",
      success: function (res) {
        if (res.status == "success") {
          alert(res.msg + " " + cInfo[t_cid]["scanUrl"] + res.hash);
        }
        hideLoader();
      },
      error: function () {
        console.log("error");
        toastr("failed");
        hideLoader();
      },
    });
  };

  const toastr = (msg) => {
    let alert_lsit = document.querySelector(".alert_list");
    let alert = document.createElement("div");

    alert.innerHTML = msg;
    alert_lsit.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 2500);
  };

  const showLoader = () => {
    document.querySelector(".loader").classList.add("active");
  };

  const hideLoader = () => {
    document.querySelector(".loader").classList.remove("active");
  };

  window.ethereum.on("accountsChanged", (accounts) => {
    init();
  });

  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });

  $("#btn_connect").click(connect);
  $("#f_token").change(initTToken);
  $("#btn_swap").click(swap);
  $("#btn_approve").click(approve);

  init();
});
