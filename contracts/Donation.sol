// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Donation {
    struct Donation{
        address donor;
        uint amount;
        uint timestamp;
    }

    Donation[] public donations;
    address public owner;
    address public scholarshipContract;

    event DonationReceived(address donor, uint amount, uint timestamp);

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor(address _scholarshipContract) {
        owner = msg.sender;
        scholarshipContract = _scholarshipContract;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than 0");

        // Create a new donation
        Donation memory newDonation = Donation({
            donor: msg.sender,
            amount: msg.value,
            timestamp: block.timestamp
        });

        // Add the donation to the donations array
        donations.push(newDonation);

        // Emit the event
        emit DonationReceived(msg.sender, msg.value, block.timestamp);
    }

    function distributeFunds() public payable onlyOwner {
        require(address(this).balance > 0, "No funds to distribute");
        payable(scholarshipContract).transfer(address(this).balance);
    }
}
