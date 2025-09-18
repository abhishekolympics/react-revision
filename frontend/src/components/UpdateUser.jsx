// import useStore from "../store";

// export default function UpdateUser() {
//     const username = useStore(state => state.username);
//     const setUsername = useStore(state => state.setUsername);

//     return (
//         <>
//             <h1>{username}</h1>
//             <input onChange={(e) => setUsername(e.target.value)}></input>
//         </>
//     )
// }


// frontend/src/components/UpdateUser.jsx
import React, { useState } from "react";
import useStore from "../store";

export default function UpdateUser() {
  // select only the primitives we need
  const username = useStore((s) => s.username);
  const setUsername = useStore((s) => s.setUsername);

  const [input, setInput] = useState("");

  return (
    <div>
      <h3>Update username</h3>

      <div>
        <strong>Current username:</strong> {username}
      </div>

      <div style={{ marginTop: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type new username"
        />{" "}
        <button
          onClick={() => {
            setUsername(input || "guest");
            setInput("");
          }}
        >
          Set username
        </button>
      </div>

      <p style={{ marginTop: 6, color: "#555" }}>
        Changing the username will update global state. Observe which components re-render. The <strong>Without shallow</strong> component will re-render unnecessarily; the <strong>With shallow</strong> one should not.
      </p>
    </div>
  );
}
