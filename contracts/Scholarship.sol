
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol";

contract Scholarship {
    struct Application {
        string details;
        bool isApproved;
    }

    mapping(address => Application) public applications;
    GnosisSafe public gnosisSafe;

    constructor(address payable  _gnosisSafe)  {
        gnosisSafe = GnosisSafe(_gnosisSafe);
    }

    function submitApplication(string memory _details) public {
        Application storage application = applications[msg.sender];
        application.details = _details;
        application.isApproved = false;
    }

    function approveApplication(address _applicant) public {
        require(msg.sender == address(gnosisSafe), "Only the Gnosis Safe can call this function.");
        Application storage application = applications[_applicant];
        application.isApproved = true;
    }

    function distributeFunds(
    address _recipient,
    uint _amount,
    bytes memory _data,
    Enum.Operation _operation,
    uint _safeTxGas,
    uint _baseGas,
    uint _gasPrice,
    address _gasToken,
    address payable  _refundReceiver,
    bytes memory _signatures
    ) public {
    require(applications[_recipient].isApproved, "Application not approved");
    require(address(this).balance >= _amount, "Not enough funds");

    gnosisSafe.execTransaction(
        _recipient,
        _amount,
        _data,
        _operation,
        _safeTxGas,
        _baseGas,
        _gasPrice,
        _gasToken,
        _refundReceiver,
        _signatures
    );
}

}
