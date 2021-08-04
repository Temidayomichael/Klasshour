import { Flex,Box,Tabs, TabList, TabPanels, Tab, TabPanel  } from '@chakra-ui/react';
import { useState, useCallback } from 'react'
import Board from '../board';
import Lobby from './Lobby';
import Room from './Room';
import Whiteboard from './whitebord';
import dynamic from 'next/dynamic'
import Chat from './chat';

//   const DynamicComponentWithNoSSR = dynamic(
//   () => import('./whitebord'),
//     { ssr: false }
// )
  
const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const data = await fetch('api/video/token', {
        method: 'POST',
        body: JSON.stringify({
          identity: username,
          room: roomName
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
      setToken(data.token);
    },
    [roomName, username]
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <Flex>
        <Box w="30vw" >
          <Tabs variant="enclosed">
  <TabList>
    <Tab>Video</Tab>
    <Tab>Chat</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
         <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    </TabPanel>
    <TabPanel>
      <Chat />
    </TabPanel>
  </TabPanels>
</Tabs>
       
        </Box>
        <Box w="70vw" overflowX="hidden" bg="gray.400">
          {/* <DynamicComponentWithNoSSR /> */}
          <Whiteboard />
        </Box>
    </Flex>
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat;
