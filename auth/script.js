function _0x47fc() {
  const _0x4c2d22 = [
    "32asEHLF",
    "catch",
    "2714680FyKbBY",
    "writeText",
    "innerText",
    "Copied!",
    "auth-h2",
    "getItem",
    "auth-key-text",
    "...",
    "Something\x20went\x20wrong\x20on\x20our\x20end",
    "285393mIbVuN",
    "auth-key-text-copy",
    "success",
    "https://bbf-backend.onrender.com/api/quiz/user/add/",
    "getElementById",
    "Copy",
    "log",
    "Fetch\x20error:",
    "trim",
    "accessKey",
    "328520pfBveb",
    "Please\x20enter\x20your\x20username",
    "style",
    "4117692yfIHIw",
    "cors",
    "Already\x20have\x20an\x20auth\x20key?",
    "none",
    "POST",
    "user",
    "textContent",
    "json",
    "value",
    "loader",
    "display",
    "Hold\x20on...",
    "username",
    "block",
    "toLowerCase",
    "copy-btn",
    "click",
    "Creating\x20an\x20account\x20for\x20you",
    "flex",
    "loader2",
    "addEventListener",
    "clipboard",
    "authInputUsername",
    "authInput",
    "3784207WCFXkz",
    "Something\x20went\x20wrong",
    "then",
    "6731608JXfLKC",
    "slice",
    "error",
    "copy-container",
    "enter-btn",
    "accessTokens",
    "stringify",
    "setItem",
    "674210GCcrbu",
    "Checking\x20your\x20account,\x20",
  ];
  _0x47fc = function () {
    return _0x4c2d22;
  };
  return _0x47fc();
}
const _0x3ee0e6 = _0x38e3;
(function (_0x507e4e, _0x4426f4) {
  const _0x1a8664 = _0x38e3,
    _0x214fb8 = _0x507e4e();
  while (!![]) {
    try {
      const _0x121151 =
        parseInt(_0x1a8664(0xd7)) / 0x1 +
        parseInt(_0x1a8664(0xfd)) / 0x2 +
        (parseInt(_0x1a8664(0xcd)) / 0x3) * (parseInt(_0x1a8664(0xff)) / 0x4) +
        -parseInt(_0x1a8664(0x101)) / 0x5 +
        -parseInt(_0x1a8664(0xda)) / 0x6 +
        -parseInt(_0x1a8664(0xf2)) / 0x7 +
        parseInt(_0x1a8664(0xf5)) / 0x8;
      if (_0x121151 === _0x4426f4) break;
      else _0x214fb8["push"](_0x214fb8["shift"]());
    } catch (_0x416925) {
      _0x214fb8["push"](_0x214fb8["shift"]());
    }
  }
})(_0x47fc, 0x79a81);
let userName = "" || localStorage[_0x3ee0e6(0xc9)](_0x3ee0e6(0xe6));
const enterBtn = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xf9)),
  loader = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xe3)),
  loader2 = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xed)),
  authInput = document["getElementById"](_0x3ee0e6(0xf1)),
  authUsername = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xf0)),
  authHeader = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xc8)),
  authKeyText = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xca)),
  authDiv = document["getElementById"]("authPage");
let authKey = "";
const authKeyCopy = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xce)),
  authCopyContainer = document["getElementById"](_0x3ee0e6(0xf8)),
  copyBtn = document[_0x3ee0e6(0xd1)](_0x3ee0e6(0xe9));
async function giveAuthKey() {
  const _0x217083 = _0x3ee0e6;
  try {
    (userName = authUsername["value"]["trim"]()),
      localStorage["setItem"](_0x217083(0xe6), userName);
    let _0x4008f3 = userName[_0x217083(0xe8)]();
    (authKeyText[_0x217083(0xc6)] = _0x217083(0xfe) + _0x4008f3),
      (authHeader[_0x217083(0xc6)] = ""),
      (authUsername[_0x217083(0xd9)][_0x217083(0xe4)] = _0x217083(0xdd)),
      (enterBtn["style"]["display"] = "none"),
      (loader[_0x217083(0xd9)][_0x217083(0xe4)] = "block");
    const _0x328a80 = await fetch(
        "https://bbf-backend.onrender.com/api/quiz/user/validate/" + _0x4008f3,
        {
          method: _0x217083(0xde),
          headers: { "Content-Type": "application/json" },
          mode: _0x217083(0xdb),
        }
      ),
      _0x339bb7 = await _0x328a80[_0x217083(0xe1)]();
    _0x339bb7["isValid"]
      ? await handleExistingUser(_0x339bb7)
      : await handleNewUser();
  } catch (_0x3c1451) {
    console[_0x217083(0xf7)](_0x217083(0xd4), _0x3c1451),
      (authHeader[_0x217083(0xc6)] = _0x3c1451["message"]),
      (authKeyText[_0x217083(0xc6)] = _0x217083(0xdc)),
      (authHeader[_0x217083(0xd9)][_0x217083(0xe4)] = _0x217083(0xe7)),
      (authUsername["style"]["display"] = _0x217083(0xe7)),
      (enterBtn[_0x217083(0xd9)][_0x217083(0xe4)] = "block"),
      (loader["style"][_0x217083(0xe4)] = "none");
  }
}
async function handleExistingUser(_0x24929f) {
  const _0x41486e = _0x3ee0e6;
  (authKeyText["innerText"] = "Auth\x20Key\x20Created!"),
    (authHeader[_0x41486e(0xc6)] = _0x41486e(0xe5)),
    localStorage[_0x41486e(0xfc)](
      _0x41486e(0xfa),
      JSON[_0x41486e(0xfb)]({ username: userName, authKey: "" })
    ),
    (authKey = _0x24929f?.[_0x41486e(0xd6)]?.[_0x41486e(0xd6)]);
  let _0x5c2835 = authKey[_0x41486e(0xf6)](0x0, 0xc) + _0x41486e(0xcb);
  await new Promise((_0x1631e7) => setTimeout(_0x1631e7, 0x3e8)),
    localStorage["setItem"]("authUser", userName),
    (loader["style"][_0x41486e(0xe4)] = _0x41486e(0xdd)),
    (authHeader[_0x41486e(0xd9)][_0x41486e(0xe4)] = "none"),
    (authKeyText[_0x41486e(0xd9)][_0x41486e(0xe4)] = "none"),
    (authCopyContainer[_0x41486e(0xd9)][_0x41486e(0xe4)] = _0x41486e(0xec)),
    (authKeyCopy[_0x41486e(0xc6)] = _0x5c2835);
}
async function handleNewUser() {
  const _0x1e7507 = _0x3ee0e6;
  (authKeyText[_0x1e7507(0xc6)] = _0x1e7507(0xeb)),
    (authHeader[_0x1e7507(0xc6)] = "Please\x20wait..."),
    (loader[_0x1e7507(0xd9)][_0x1e7507(0xe4)] = _0x1e7507(0xe7)),
    await createUser();
  return;
}
enterBtn[_0x3ee0e6(0xee)](_0x3ee0e6(0xea), () => {
  const _0x4ca749 = _0x3ee0e6;
  if (authUsername["value"][_0x4ca749(0xd5)]() === "") {
    alert(_0x4ca749(0xd8));
    return;
  }
  giveAuthKey();
}),
  copyBtn[_0x3ee0e6(0xee)]("click", () => {
    const _0x3e7293 = _0x3ee0e6;
    navigator[_0x3e7293(0xef)]
      [_0x3e7293(0x102)](authKey)
      [_0x3e7293(0xf4)](() => {
        const _0x42900d = _0x3e7293;
        (copyBtn[_0x42900d(0xc6)] = _0x42900d(0xc7)),
          setTimeout(() => {
            const _0x1d4cbc = _0x42900d;
            copyBtn[_0x1d4cbc(0xe0)] = _0x1d4cbc(0xd2);
          }, 0x7d0);
      })
      [_0x3e7293(0x100)]((_0x4b0f7e) => {
        throw new Error("Failed\x20to\x20copy");
      });
  });
function _0x38e3(_0x4b0a7b, _0x2fdbc5) {
  const _0x47fc36 = _0x47fc();
  return (
    (_0x38e3 = function (_0x38e35f, _0x4a4ed7) {
      _0x38e35f = _0x38e35f - 0xc6;
      let _0x161c62 = _0x47fc36[_0x38e35f];
      return _0x161c62;
    }),
    _0x38e3(_0x4b0a7b, _0x2fdbc5)
  );
}
async function createUser() {
  const _0x5ddc61 = _0x3ee0e6;
  try {
    (userName = authUsername[_0x5ddc61(0xe2)][_0x5ddc61(0xd5)]()),
      localStorage[_0x5ddc61(0xfc)](_0x5ddc61(0xe6), userName);
    let _0x28b942 = JSON[_0x5ddc61(0xfb)]({
      username: userName[_0x5ddc61(0xe8)](),
      role: _0x5ddc61(0xdf),
    });
    const _0x559db9 = await fetch(_0x5ddc61(0xd0), {
      method: _0x5ddc61(0xde),
      headers: { "Content-Type": "application/json" },
      body: _0x28b942,
      mode: _0x5ddc61(0xdb),
    });
    if (!_0x559db9["ok"]) {
      console[_0x5ddc61(0xd3)](_0x559db9);
      throw new Error(_0x5ddc61(0xf3));
    }
    const _0x1f92bc = await _0x559db9[_0x5ddc61(0xe1)]();
    if (_0x1f92bc[_0x5ddc61(0xcf)]) giveAuthKey();
    else throw new Error(_0x5ddc61(0xcc));
  } catch (_0x3d29e1) {
    console[_0x5ddc61(0xd3)](_0x3d29e1);
    throw new Error(_0x5ddc61(0xf3));
  }
}
