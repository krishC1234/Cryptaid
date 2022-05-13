import { Box, Button, Center, Divider, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const OrgPage = () => {
    const params = useParams();
    const org_id = params.id;

    const imgUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F029%2F514%2FScreen_Shot_2019-04-30_at_2.58.37_PM.png&f=1&nofb=1";

    const org_data = {
        id: 1,
        owner: "1345",
        deadline: "5/31/22",
        title: "Save the turties",
        description: "I was going for the title but got hit by the tidal wave.",
        location: "Santa Barabra, CA",
        links: ["isnta", "snap", "facebook"],
        progress: [100, 50, 20],
        milestone: ["pick up trash in ocean", "save turties injured by human trash"],
        imgUrl: imgUrl,
        donated: 10,
        goal: 100,
    }

    return (
        <Box mx={"10rem"}>
            <Heading>{org_data.title}</Heading>
            <Button>Donate Now</Button>
            <Text>Deadline: {org_data.deadline}</Text>
            <Image position={"relative"} width={"100%"} objectFit={"cover"} height={"50%"} src={org_data.imgUrl} rounded={"md"} alt='Org Image here'/>
            <Center height={5} >
                <Divider orientation="horizontal"/>
            </Center>
            <Text>I was going for the title but got hit by the tidal wave.
            I was going for the title but got hit by the tidal wave.
            I was going for the title but got hit by the tidal wave.
            I was going for the title but got hit by the tidal wave.
            </Text>

        </Box>
    );
};