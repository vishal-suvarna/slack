import InfoIcon from "@mui/icons-material/Info";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../../features/appSlice";

function Chat() {
  const roomId = useSelector(selectRoomId);
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#room name</strong>
            </h4>
            <StarBorderIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoIcon />
              Details
            </p>
          </HeaderRight>
        </Header>

        <CharMessages></CharMessages>
        <ChatInput
        // channelName
        />
      </>
    </ChatContainer>
  );
}

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const CharMessages = styled.div``;
