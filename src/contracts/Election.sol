contract Election {
    struct Candidate {
        uint id; 
        string name;
        uint voteCount;
    }

    mapping(address => bool) public voters;

    mapping(uint => Candidate) public candidates;
    
    uint public candidatesCount;

    function Election () public{
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote (uint _candidateId) public {
        // update candidate vote Count
        voters[msg.sender] = true;

        candidates[_candidateId].voteCount ++;
    }
}