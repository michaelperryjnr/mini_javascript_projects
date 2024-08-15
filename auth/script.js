const _0x471d52 = _0x59e3;
(function (_0x3c7a5a, _0x4e8ece) {
  const _0x17a9ff = _0x59e3,
    _0x1449be = _0x3c7a5a();
  while (!![]) {
    try {
      const _0x2bfb57 =
        (-parseInt(_0x17a9ff(0x97)) / 0x1) * (parseInt(_0x17a9ff(0xa4)) / 0x2) +
        (parseInt(_0x17a9ff(0xc5)) / 0x3) * (-parseInt(_0x17a9ff(0xcb)) / 0x4) +
        (parseInt(_0x17a9ff(0xaf)) / 0x5) * (parseInt(_0x17a9ff(0x98)) / 0x6) +
        (-parseInt(_0x17a9ff(0xb1)) / 0x7) *
          (-parseInt(_0x17a9ff(0xb8)) / 0x8) +
        -parseInt(_0x17a9ff(0xbf)) / 0x9 +
        parseInt(_0x17a9ff(0xc7)) / 0xa +
        parseInt(_0x17a9ff(0xbd)) / 0xb;
      if (_0x2bfb57 === _0x4e8ece) break;
      else _0x1449be["push"](_0x1449be["shift"]());
    } catch (_0x414eb6) {
      _0x1449be["push"](_0x1449be["shift"]());
    }
  }
})(_0x458f, 0x1c81e);
let userName = "" || localStorage["getItem"](_0x471d52(0xd4));
function _0x458f() {
  const _0x5dfb10 = [
    "slice",
    "1683528TXmWLp",
    "textContent",
    "482256hoZbdq",
    "Username\x20cannot\x20contain\x20\x27bbflabs\x27",
    "message",
    "Fetch\x20error:",
    "block",
    "cors",
    "111JVWtSD",
    "POST",
    "223380OYgpHa",
    "display",
    "stringify",
    "setItem",
    "22508lzLjXk",
    "Something\x20went\x20wrong\x20on\x20our\x20end",
    "application/json",
    "...",
    "auth-key-text-copy",
    "style",
    "trim",
    "value",
    "catch",
    "username",
    "user",
    "Checking\x20your\x20account,\x20",
    "Copied!",
    "clipboard",
    "128753IIsSyY",
    "24246OGPrCD",
    "writeText",
    "Failed\x20to\x20copy",
    "https://bbf-backend.onrender.com/api/quiz/user/validate/",
    "authPage",
    "none",
    "Hold\x20on...",
    "Copy",
    "Already\x20have\x20an\x20auth\x20key?",
    "loader",
    "https://bbf-backend.onrender.com/api/quiz/user/add/",
    "click",
    "2hUMfJU",
    "Something\x20went\x20wrong",
    "enter-btn",
    "getElementById",
    "copy-container",
    "loader2",
    "json",
    "accessKey",
    "then",
    "authInput",
    "innerText",
    "135uOLsZp",
    "addEventListener",
    "16079JIghOb",
    "log",
    "toLowerCase",
    "copy-btn",
    "Please\x20enter\x20your\x20username",
    "error",
    "Auth\x20Key\x20Created!",
    "776fgmSDm",
    "includes",
    "accessTokens",
    "bbflabs",
  ];
  _0x458f = function () {
    return _0x5dfb10;
  };
  return _0x458f();
}
function _0x59e3(_0x3e43b9, _0x12885d) {
  const _0x458f53 = _0x458f();
  return (
    (_0x59e3 = function (_0x59e3a0, _0x5f43a2) {
      _0x59e3a0 = _0x59e3a0 - 0x95;
      let _0x29f5f3 = _0x458f53[_0x59e3a0];
      return _0x29f5f3;
    }),
    _0x59e3(_0x3e43b9, _0x12885d)
  );
}
const enterBtn = document[_0x471d52(0xa7)](_0x471d52(0xa6)),
  loader = document[_0x471d52(0xa7)](_0x471d52(0xa1)),
  loader2 = document[_0x471d52(0xa7)](_0x471d52(0xa9)),
  authInput = document[_0x471d52(0xa7)](_0x471d52(0xad)),
  authUsername = document[_0x471d52(0xa7)]("authInputUsername"),
  authHeader = document[_0x471d52(0xa7)]("auth-h2"),
  authKeyText = document[_0x471d52(0xa7)]("auth-key-text"),
  authDiv = document[_0x471d52(0xa7)](_0x471d52(0x9c));
let authKey = "";
const authKeyCopy = document[_0x471d52(0xa7)](_0x471d52(0xcf)),
  authCopyContainer = document[_0x471d52(0xa7)](_0x471d52(0xa8)),
  copyBtn = document[_0x471d52(0xa7)](_0x471d52(0xb4));
async function giveAuthKey() {
  const _0x12fb59 = _0x471d52;
  try {
    (userName = authUsername[_0x12fb59(0xd2)][_0x12fb59(0xd1)]()),
      localStorage["setItem"](_0x12fb59(0xd4), userName);
    let _0x32ab7c = userName[_0x12fb59(0xb3)]();
    (authKeyText[_0x12fb59(0xae)] = _0x12fb59(0xd6) + _0x32ab7c),
      (authHeader[_0x12fb59(0xae)] = ""),
      (authUsername[_0x12fb59(0xd0)]["display"] = "none"),
      (enterBtn[_0x12fb59(0xd0)][_0x12fb59(0xc8)] = _0x12fb59(0x9d)),
      (loader[_0x12fb59(0xd0)]["display"] = _0x12fb59(0xc3));
    const _0x21ab83 = await fetch(_0x12fb59(0x9b) + _0x32ab7c, {
        method: _0x12fb59(0xc6),
        headers: { "Content-Type": _0x12fb59(0xcd) },
        mode: "cors",
      }),
      _0x2e3cfb = await _0x21ab83["json"]();
    _0x2e3cfb["isValid"]
      ? await handleExistingUser(_0x2e3cfb)
      : await handleNewUser();
  } catch (_0x4cef2c) {
    console[_0x12fb59(0xb6)](_0x12fb59(0xc2), _0x4cef2c),
      (authHeader[_0x12fb59(0xae)] = _0x4cef2c[_0x12fb59(0xc1)]),
      (authKeyText["innerText"] = _0x12fb59(0xa0)),
      (authHeader[_0x12fb59(0xd0)][_0x12fb59(0xc8)] = _0x12fb59(0xc3)),
      (authUsername[_0x12fb59(0xd0)][_0x12fb59(0xc8)] = _0x12fb59(0xc3)),
      (enterBtn[_0x12fb59(0xd0)]["display"] = "block"),
      (loader[_0x12fb59(0xd0)]["display"] = _0x12fb59(0x9d));
  }
}
async function handleExistingUser(_0x1af0de) {
  const _0x498775 = _0x471d52;
  (authKeyText["innerText"] = _0x498775(0xb7)),
    (authHeader["innerText"] = _0x498775(0x9e)),
    localStorage[_0x498775(0xca)](
      _0x498775(0xba),
      JSON["stringify"]({ username: userName, authKey: "" })
    ),
    (authKey = _0x1af0de?.["accessKey"]?.[_0x498775(0xab)]);
  let _0x2f48ac = authKey[_0x498775(0xbc)](0x0, 0xc) + _0x498775(0xce);
  await new Promise((_0x3eafd2) => setTimeout(_0x3eafd2, 0x3e8)),
    localStorage[_0x498775(0xca)]("authUser", userName),
    (loader[_0x498775(0xd0)][_0x498775(0xc8)] = _0x498775(0x9d)),
    (authHeader[_0x498775(0xd0)][_0x498775(0xc8)] = "none"),
    (authKeyText["style"][_0x498775(0xc8)] = _0x498775(0x9d)),
    (authCopyContainer[_0x498775(0xd0)][_0x498775(0xc8)] = "flex"),
    (authKeyCopy[_0x498775(0xae)] = _0x2f48ac);
}
async function handleNewUser() {
  const _0x57801c = _0x471d52;
  (authKeyText["innerText"] = "Creating\x20an\x20account\x20for\x20you"),
    (authHeader[_0x57801c(0xae)] = "Please\x20wait..."),
    (loader[_0x57801c(0xd0)][_0x57801c(0xc8)] = "block"),
    await createUser();
  return;
}
enterBtn[_0x471d52(0xb0)](_0x471d52(0xa3), () => {
  const _0x6870c8 = _0x471d52;
  if (authUsername["value"][_0x6870c8(0xd1)]() === "") {
    alert(_0x6870c8(0xb5));
    return;
  }
  if (
    authUsername[_0x6870c8(0xd2)]
      [_0x6870c8(0xd1)]()
      ["toLowerCase"]()
      [_0x6870c8(0xb9)](_0x6870c8(0xbb)[_0x6870c8(0xb3)]())
  ) {
    (authHeader[_0x6870c8(0xae)] = _0x6870c8(0xc0)),
      (authUsername[_0x6870c8(0xd2)] = "");
    return;
  }
  giveAuthKey();
}),
  copyBtn[_0x471d52(0xb0)]("click", () => {
    const _0x531b84 = _0x471d52;
    navigator[_0x531b84(0x96)]
      [_0x531b84(0x99)](authKey)
      [_0x531b84(0xac)](() => {
        const _0x374381 = _0x531b84;
        (copyBtn[_0x374381(0xae)] = _0x374381(0x95)),
          setTimeout(() => {
            const _0x5a5500 = _0x374381;
            copyBtn[_0x5a5500(0xbe)] = _0x5a5500(0x9f);
          }, 0x7d0);
      })
      [_0x531b84(0xd3)]((_0x2f2e7b) => {
        const _0x27943d = _0x531b84;
        throw new Error(_0x27943d(0x9a));
      });
  });
async function createUser() {
  const _0xc3393f = _0x471d52;
  try {
    (userName = authUsername[_0xc3393f(0xd2)]["trim"]()),
      localStorage[_0xc3393f(0xca)](_0xc3393f(0xd4), userName);
    let _0x38a65c = JSON[_0xc3393f(0xc9)]({
      username: userName["toLowerCase"](),
      role: _0xc3393f(0xd5),
    });
    const _0x1e7e92 = await fetch(_0xc3393f(0xa2), {
      method: _0xc3393f(0xc6),
      headers: { "Content-Type": _0xc3393f(0xcd) },
      body: _0x38a65c,
      mode: _0xc3393f(0xc4),
    });
    if (!_0x1e7e92["ok"]) {
      console["log"](_0x1e7e92);
      throw new Error("Something\x20went\x20wrong");
    }
    const _0x580fc2 = await _0x1e7e92[_0xc3393f(0xaa)]();
    if (_0x580fc2["success"]) giveAuthKey();
    else throw new Error(_0xc3393f(0xcc));
  } catch (_0x58f996) {
    console[_0xc3393f(0xb2)](_0x58f996);
    throw new Error(_0xc3393f(0xa5));
  }
}
