import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../../firebase";
import firebase from "firebase";

function ChatInput({ chatRef, channelName, roomId }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!roomId) {
      return false;
    }

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Karo Ghulyan",
      userImage:
        "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/134958883_3556065604506023_4493450053541188547_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DHUkyLx8OToAX9wtkcX&_nc_ht=scontent.fevn1-4.fna&oh=c5568df9822ce3f1be5cc8dbbc2c4c82&oe=607026A3",
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message${channelName}`}
        ></input>
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relavtive;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none;
  }
`;
