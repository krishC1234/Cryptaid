import { Box, Container, Heading, Input, Text, Button} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router";
import { useOrgData } from "../hooks/useOrgData";
import { useMintNft } from "../hooks/useMintNft";
import { useMoralis } from "react-moralis";
import { Moralis } from 'moralis'

export const MintNft = () => {

    const { state } = useLocation();
    const { org_id } = state;
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const navigate = useNavigate();
    const mint = useMintNft();
    
    const org_data = useOrgData(org_id);

    const { enableWeb3, isWeb3Enabled, web3 } = useMoralis();

    const selectHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }

    const handleMint = async (e) => {
        e.preventDefault();
        
        await mint(org_data.ethAddress, 'name', 'desc', selectedFile, 1);
    }

    return (
        <Container>
            <Button onClick={() => navigate(-1)}><ArrowLeftIcon/>Organization Page</Button>
            <Heading>Minting for {org_data.title}</Heading>
            <Input placeholder="Name"/>
            <Input placeholder="Description"/>
            <Text>{selectedFile?.name}</Text>
            <input type={'file'} name={'file'} onChange={selectHandler}/>
            <Button onClick={handleMint}>Mint Nft</Button>
        </Container>
    );
};