import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import Storage from "./contracts/Storage.json";
import Rental from "./contracts/Rental.json";

const options = {
  web3: {
    block: false,
    //customProvider: new Web3("ws://localhost:7545" ),
    
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken,Storage,Rental],
  events: {
    SimpleStorage: ["StorageSet"],
    Rental: ["StorageSet"],
  },
};

export default options;
