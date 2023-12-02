import React, { useEffect, useState } from "react"
import MediaRoute from "./router/mediaRoute";
import MessageRoute from "./router/messageRoute";
import "./components/messages/message.css"

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>{isMobile ? <MediaRoute /> : <MessageRoute />}</div>
  )
}

export default App
