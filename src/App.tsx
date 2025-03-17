import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <view>
      <view className="App">
        <view
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* <text className="Title">Test</text> */}
          <view className="Button" bindtap={handleClick}>
            <text className="ButtonTitle">{count} Button</text>
          </view>
        </view>
      </view>
    </view>
  );
}
