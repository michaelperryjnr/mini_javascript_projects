function _0x51ff(_0x1d56ae, _0x55ea4a) {
  const _0x276f61 = _0x276f();
  return (
    (_0x51ff = function (_0x51ff42, _0x17acf8) {
      _0x51ff42 = _0x51ff42 - 0x11e;
      let _0x5deaaa = _0x276f61[_0x51ff42];
      return _0x5deaaa;
    }),
    _0x51ff(_0x1d56ae, _0x55ea4a)
  );
}
const _0x26bbb5 = _0x51ff;
(function (_0x3540a4, _0x5935c6) {
  const _0x106ff9 = _0x51ff,
    _0x1f3943 = _0x3540a4();
  while (!![]) {
    try {
      const _0x43ef7f =
        (-parseInt(_0x106ff9(0x12f)) / 0x1) *
          (parseInt(_0x106ff9(0x138)) / 0x2) +
        -parseInt(_0x106ff9(0x12e)) / 0x3 +
        -parseInt(_0x106ff9(0x141)) / 0x4 +
        (parseInt(_0x106ff9(0x14d)) / 0x5) *
          (-parseInt(_0x106ff9(0x150)) / 0x6) +
        -parseInt(_0x106ff9(0x13d)) / 0x7 +
        parseInt(_0x106ff9(0x135)) / 0x8 +
        (parseInt(_0x106ff9(0x127)) / 0x9) * (parseInt(_0x106ff9(0x11e)) / 0xa);
      if (_0x43ef7f === _0x5935c6) break;
      else _0x1f3943["push"](_0x1f3943["shift"]());
    } catch (_0xdff58) {
      _0x1f3943["push"](_0x1f3943["shift"]());
    }
  }
})(_0x276f, 0x4c2a0);
let userName = "" || localStorage[_0x26bbb5(0x145)](_0x26bbb5(0x136));
const enterBtn = document[_0x26bbb5(0x142)](_0x26bbb5(0x143)),
  loader = document[_0x26bbb5(0x142)](_0x26bbb5(0x144)),
  loader2 = document["getElementById"](_0x26bbb5(0x15a)),
  authInput = document[_0x26bbb5(0x142)]("authInput"),
  authUsername = document[_0x26bbb5(0x142)](_0x26bbb5(0x155)),
  authHeader = document[_0x26bbb5(0x142)](_0x26bbb5(0x14a)),
  authKeyText = document[_0x26bbb5(0x142)]("auth-key-text"),
  authDiv = document[_0x26bbb5(0x142)](_0x26bbb5(0x13e));
let authKey = "";
const authKeyCopy = document[_0x26bbb5(0x142)]("auth-key-text-copy"),
  authCopyContainer = document[_0x26bbb5(0x142)]("copy-container"),
  copyBtn = document[_0x26bbb5(0x142)](_0x26bbb5(0x128));
async function giveAuthKey() {
  const _0x1566f2 = _0x26bbb5;
  try {
    (userName = authUsername["value"][_0x1566f2(0x12a)]()),
      localStorage[_0x1566f2(0x158)](_0x1566f2(0x136), userName);
    let _0x1a0b48 = userName[_0x1566f2(0x149)]();
    (authKeyText[_0x1566f2(0x12c)] = _0x1566f2(0x157) + _0x1a0b48),
      (authHeader["innerText"] = ""),
      (authUsername[_0x1566f2(0x132)]["display"] = _0x1566f2(0x140)),
      (enterBtn[_0x1566f2(0x132)][_0x1566f2(0x123)] = _0x1566f2(0x140)),
      (loader[_0x1566f2(0x132)][_0x1566f2(0x123)] = _0x1566f2(0x148));
    const _0x4a971a = await fetch(_0x1566f2(0x122) + _0x1a0b48, {
        method: _0x1566f2(0x126),
        headers: { "Content-Type": _0x1566f2(0x15b) },
        mode: _0x1566f2(0x14e),
      }),
      _0x1da4d7 = await _0x4a971a["json"]();
    _0x1da4d7[_0x1566f2(0x152)]
      ? await handleExistingUser(_0x1da4d7)
      : await handleNewUser();
  } catch (_0xc78150) {
    console[_0x1566f2(0x159)]("Fetch\x20error:", _0xc78150),
      (authHeader[_0x1566f2(0x12c)] = _0xc78150[_0x1566f2(0x13f)]),
      (authKeyText[_0x1566f2(0x12c)] = _0x1566f2(0x129)),
      (authHeader[_0x1566f2(0x132)][_0x1566f2(0x123)] = _0x1566f2(0x148)),
      (authUsername[_0x1566f2(0x132)]["display"] = _0x1566f2(0x148)),
      (enterBtn[_0x1566f2(0x132)]["display"] = _0x1566f2(0x148)),
      (loader[_0x1566f2(0x132)][_0x1566f2(0x123)] = _0x1566f2(0x140));
  }
}
async function handleExistingUser(_0x3cf612) {
  const _0x33ab5d = _0x26bbb5;
  (authKeyText[_0x33ab5d(0x12c)] = "Auth\x20Key\x20Created!"),
    (authHeader[_0x33ab5d(0x12c)] = _0x33ab5d(0x125)),
    localStorage["setItem"](
      _0x33ab5d(0x133),
      JSON["stringify"]({ username: userName, authKey: "" })
    ),
    (authKey = _0x3cf612?.["accessKey"]?.[_0x33ab5d(0x12b)]);
  let _0x1d6e5e = authKey[_0x33ab5d(0x146)](0x0, 0xc) + _0x33ab5d(0x13b);
  await new Promise((_0x1dc939) => setTimeout(_0x1dc939, 0x3e8)),
    localStorage[_0x33ab5d(0x158)]("authUser", userName),
    (loader[_0x33ab5d(0x132)][_0x33ab5d(0x123)] = _0x33ab5d(0x140)),
    (authHeader["style"][_0x33ab5d(0x123)] = "none"),
    (authKeyText[_0x33ab5d(0x132)][_0x33ab5d(0x123)] = _0x33ab5d(0x140)),
    (authCopyContainer["style"][_0x33ab5d(0x123)] = _0x33ab5d(0x13a)),
    (authKeyCopy["innerText"] = _0x1d6e5e);
}
async function handleNewUser() {
  const _0x1a6c72 = _0x26bbb5;
  (authKeyText[_0x1a6c72(0x12c)] = _0x1a6c72(0x130)),
    (authHeader[_0x1a6c72(0x12c)] = _0x1a6c72(0x13c)),
    (loader[_0x1a6c72(0x132)][_0x1a6c72(0x123)] = _0x1a6c72(0x148)),
    await createUser();
  return;
}
enterBtn[_0x26bbb5(0x14b)](_0x26bbb5(0x11f), () => {
  const _0x5a130b = _0x26bbb5;
  if (authUsername["value"]["trim"]() === "") {
    alert(_0x5a130b(0x120));
    return;
  }
  giveAuthKey();
}),
  copyBtn[_0x26bbb5(0x14b)](_0x26bbb5(0x11f), () => {
    const _0x1b7748 = _0x26bbb5;
    navigator["clipboard"]
      ["writeText"](authKey)
      [_0x1b7748(0x14c)](() => {
        const _0x5bd274 = _0x1b7748;
        (copyBtn[_0x5bd274(0x12c)] = _0x5bd274(0x124)),
          setTimeout(() => {
            const _0x20a4dd = _0x5bd274;
            copyBtn[_0x20a4dd(0x14f)] = _0x20a4dd(0x151);
          }, 0x7d0);
      })
      [_0x1b7748(0x137)]((_0x9b7f6d) => {
        const _0x56fd46 = _0x1b7748;
        throw new Error(_0x56fd46(0x15c));
      });
  });
function _0x276f() {
  const _0x5b7e2a = [
    "stringify",
    "https://bbf-backend.onrender.com/api/quiz/user/validate/",
    "display",
    "Copied!",
    "Hold\x20on...",
    "POST",
    "117VcaROj",
    "copy-btn",
    "Already\x20have\x20an\x20auth\x20key?",
    "trim",
    "accessKey",
    "innerText",
    "user",
    "147771KHQgua",
    "1kJfTeE",
    "Creating\x20an\x20account\x20for\x20you",
    "value",
    "style",
    "accessTokens",
    "success",
    "1900536JhjRlS",
    "username",
    "catch",
    "701818IZYfuI",
    "json",
    "flex",
    "...",
    "Please\x20wait...",
    "3725106fWVHzI",
    "authPage",
    "message",
    "none",
    "685792LuHrkz",
    "getElementById",
    "enter-btn",
    "loader",
    "getItem",
    "slice",
    "log",
    "block",
    "toLowerCase",
    "auth-h2",
    "addEventListener",
    "then",
    "2510ogomdF",
    "cors",
    "textContent",
    "3864MHKKwp",
    "Copy",
    "isValid",
    "Something\x20went\x20wrong",
    "https://bbf-backend.onrender.com/api/quiz/user/add/",
    "authInputUsername",
    "Something\x20went\x20wrong\x20on\x20our\x20end",
    "Checking\x20your\x20account,\x20",
    "setItem",
    "error",
    "loader2",
    "application/json",
    "Failed\x20to\x20copy",
    "1154970bkHXGP",
    "click",
    "Please\x20enter\x20your\x20username",
  ];
  _0x276f = function () {
    return _0x5b7e2a;
  };
  return _0x276f();
}
async function createUser() {
  const _0x53bd3d = _0x26bbb5;
  try {
    (userName = authUsername[_0x53bd3d(0x131)]["trim"]()),
      localStorage["setItem"](_0x53bd3d(0x136), userName);
    let _0x3987c6 = JSON[_0x53bd3d(0x121)]({
      username: userName[_0x53bd3d(0x149)](),
      role: _0x53bd3d(0x12d),
    });
    const _0x3d6170 = await fetch(_0x53bd3d(0x154), {
      method: _0x53bd3d(0x126),
      headers: { "Content-Type": "application/json" },
      body: _0x3987c6,
      mode: _0x53bd3d(0x14e),
    });
    if (!_0x3d6170["ok"]) {
      console["log"](_0x3d6170);
      throw new Error(_0x53bd3d(0x153));
    }
    const _0x5c2628 = await _0x3d6170[_0x53bd3d(0x139)]();
    if (_0x5c2628[_0x53bd3d(0x134)]) giveAuthKey();
    else throw new Error(_0x53bd3d(0x156));
  } catch (_0x403591) {
    console[_0x53bd3d(0x147)](_0x403591);
    throw new Error(_0x53bd3d(0x153));
  }
}
