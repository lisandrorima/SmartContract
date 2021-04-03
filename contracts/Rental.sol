pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract Rental{
    event StorageSet(string _message);
    uint256 public apartmentCount=0;
    mapping (uint => Apartment) public Apartments;
    
    Apartment public SingleApt;



    address owner;
    
    modifier onlyOwner(){
        require(msg.sender ==owner);
        _;
    }
    
    
    struct Apartment {
        uint _id;
        string _direccion;
        string _metros;
        address _propietario; 
    }

    constructor() public{
        owner=msg.sender;
    }
        
    function addAppartment (string memory _direccion,
    string memory _metros, 
    address  _propietario) public{
        incrementCount() ;
        Apartments[apartmentCount] =Apartment(apartmentCount,_direccion,_metros,_propietario);
        emit StorageSet("Data stored successfully!");
    }    
    
    function getApt (uint id)public  returns (Apartment memory){
       return SingleApt = Apartment(id, Apartments[id]._direccion, Apartments[id]._metros, Apartments[id]._propietario);

    /* uint[] memory mediaAssetIds = new uint[](mediaDatabase[_user].length);

    uint numberOfMediaAssets = 0;

    for(uint i = 1; i <= mediaDatabase[_user].length;  i++) {
        mediaAssetIds[numberOfMediaAssets] = mediaDatabase[_user][i].id;
        numberOfMediaAssets++;
    }
    return mediaAssetIds;    */
    
    }
        

    
    function editAppartment(uint id, string memory direccion, string memory metros) public{
        validatePropertyOwner(id);
        Apartments[id]._direccion = direccion;
         Apartments[id]._metros=metros;
         emit StorageSet("Data stored successfully!");
    }
    
    
    function validatePropertyOwner (uint id) internal view{
           require(msg.sender==Apartments[id]._propietario);
    }

    
    function incrementCount() internal{
        apartmentCount+=1;
    }
    
    function decreseCount() internal{
        apartmentCount-=1;
    }
}