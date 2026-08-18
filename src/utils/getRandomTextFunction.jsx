import { successMessages } from "../data/successMessagesArray.jsx";

export function getRanomMessage() {
  return successMessages[Math.floor(Math.random() * successMessages.length)];
}