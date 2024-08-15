const _0x50013c = _0xe59e;
function _0x1afd() {
  const _0x7d5d92 = [
    "auth-key-text-copy",
    "value",
    "Copied!",
    "loader2",
    "auth-h2",
    "6MjiTmX",
    "toLowerCase",
    "cors",
    "getItem",
    "username",
    "Already\x20have\x20an\x20auth\x20key?",
    "innerText",
    "Something\x20went\x20wrong",
    "user",
    "337308zzmyIP",
    "flex",
    "authInput",
    "message",
    "style",
    "trim",
    "614026rFkXDO",
    "none",
    "Creating\x20an\x20account\x20for\x20you",
    "Failed\x20to\x20copy",
    "Username\x20cannot\x20contain\x20\x27bbflabs\x27",
    "block",
    "application/json",
    "addEventListener",
    "getElementById",
    "Hold\x20on...",
    "Something\x20went\x20wrong\x20on\x20our\x20end",
    "407505sNWPkZ",
    "Username\x20must\x20be\x20at\x20least\x204\x20characters\x20long",
    "accessTokens",
    "authUser",
    "length",
    "display",
    "2539557uUVsWQ",
    "accessKey",
    "Auth\x20Key\x20Created!",
    "18258VjIshD",
    "1213296RaaqYa",
    "success",
    "https://bbf-backend.onrender.com/api/quiz/user/add/",
    "auth-key-text",
    "authPage",
    "671632nZiSmj",
    "615gwLZCQ",
    "POST",
    "then",
    "includes",
    "click",
    "json",
    "Please\x20wait...",
    "Copy",
    "copy-btn",
    "copy-container",
    "slice",
    "writeText",
    "stringify",
  ];
  _0x1afd = function () {
    return _0x7d5d92;
  };
  return _0x1afd();
}
(function (_0x509994, _0xf2eff7) {
  const _0x542964 = _0xe59e,
    _0x190e0c = _0x509994();
  while (!![]) {
    try {
      const _0xcb2239 =
        -parseInt(_0x542964(0x1ae)) / 0x1 +
        parseInt(_0x542964(0x178)) / 0x2 +
        (-parseInt(_0x542964(0x1a5)) / 0x3) *
          (parseInt(_0x542964(0x192)) / 0x4) +
        (parseInt(_0x542964(0x193)) / 0x5) *
          (parseInt(_0x542964(0x18c)) / 0x6) +
        parseInt(_0x542964(0x183)) / 0x7 +
        -parseInt(_0x542964(0x18d)) / 0x8 +
        parseInt(_0x542964(0x189)) / 0x9;
      if (_0xcb2239 === _0xf2eff7) break;
      else _0x190e0c["push"](_0x190e0c["shift"]());
    } catch (_0x11a588) {
      _0x190e0c["push"](_0x190e0c["shift"]());
    }
  }
})(_0x1afd, 0x30128);
let userName = "" || localStorage[_0x50013c(0x1a8)](_0x50013c(0x1a9));
const enterBtn = document[_0x50013c(0x180)]("enter-btn"),
  loader = document["getElementById"]("loader"),
  loader2 = document[_0x50013c(0x180)](_0x50013c(0x1a3)),
  authInput = document[_0x50013c(0x180)](_0x50013c(0x1b0)),
  authUsername = document[_0x50013c(0x180)]("authInputUsername"),
  authHeader = document[_0x50013c(0x180)](_0x50013c(0x1a4)),
  authKeyText = document[_0x50013c(0x180)](_0x50013c(0x190)),
  authDiv = document[_0x50013c(0x180)](_0x50013c(0x191));
function _0xe59e(_0x440f54, _0x24aa2b) {
  const _0x1afd8b = _0x1afd();
  return (
    (_0xe59e = function (_0xe59e98, _0x2aa8f4) {
      _0xe59e98 = _0xe59e98 - 0x177;
      let _0x3289c6 = _0x1afd8b[_0xe59e98];
      return _0x3289c6;
    }),
    _0xe59e(_0x440f54, _0x24aa2b)
  );
}
let authKey = "";
const authKeyCopy = document[_0x50013c(0x180)](_0x50013c(0x1a0)),
  authCopyContainer = document[_0x50013c(0x180)](_0x50013c(0x19c)),
  copyBtn = document[_0x50013c(0x180)](_0x50013c(0x19b));
async function giveAuthKey() {
  const _0x18c227 = _0x50013c;
  try {
    (userName = authUsername[_0x18c227(0x1a1)][_0x18c227(0x177)]()),
      localStorage["setItem"](_0x18c227(0x1a9), userName);
    let _0x5f361d = userName[_0x18c227(0x1a6)]();
    (authKeyText[_0x18c227(0x1ab)] =
      "Checking\x20your\x20account,\x20" + _0x5f361d),
      (authHeader[_0x18c227(0x1ab)] = ""),
      (authUsername[_0x18c227(0x1b2)][_0x18c227(0x188)] = _0x18c227(0x179)),
      (enterBtn[_0x18c227(0x1b2)]["display"] = _0x18c227(0x179)),
      (loader[_0x18c227(0x1b2)][_0x18c227(0x188)] = "block");
    const _0xf57b0d = await fetch(
        "https://bbf-backend.onrender.com/api/quiz/user/validate/" + _0x5f361d,
        {
          method: _0x18c227(0x194),
          headers: { "Content-Type": _0x18c227(0x17e) },
          mode: "cors",
        }
      ),
      _0x4fa0cc = await _0xf57b0d[_0x18c227(0x198)]();
    _0x4fa0cc["isValid"]
      ? await handleExistingUser(_0x4fa0cc)
      : await handleNewUser();
  } catch (_0x5801ca) {
    console["error"]("Fetch\x20error:", _0x5801ca),
      (authHeader[_0x18c227(0x1ab)] = _0x5801ca[_0x18c227(0x1b1)]),
      (authKeyText[_0x18c227(0x1ab)] = _0x18c227(0x1aa)),
      (authHeader[_0x18c227(0x1b2)][_0x18c227(0x188)] = _0x18c227(0x17d)),
      (authUsername["style"][_0x18c227(0x188)] = "block"),
      (enterBtn["style"][_0x18c227(0x188)] = _0x18c227(0x17d)),
      (loader[_0x18c227(0x1b2)][_0x18c227(0x188)] = _0x18c227(0x179));
  }
}
async function handleExistingUser(_0x2bf2f4) {
  const _0x9e6bfd = _0x50013c;
  (authKeyText["innerText"] = _0x9e6bfd(0x18b)),
    (authHeader[_0x9e6bfd(0x1ab)] = _0x9e6bfd(0x181)),
    localStorage["setItem"](
      _0x9e6bfd(0x185),
      JSON[_0x9e6bfd(0x19f)]({ username: userName, authKey: "" })
    ),
    (authKey = _0x2bf2f4?.[_0x9e6bfd(0x18a)]?.[_0x9e6bfd(0x18a)]);
  let _0x151f73 = authKey[_0x9e6bfd(0x19d)](0x0, 0xc) + "...";
  await new Promise((_0x547035) => setTimeout(_0x547035, 0x3e8)),
    localStorage["setItem"](_0x9e6bfd(0x186), userName),
    (loader["style"][_0x9e6bfd(0x188)] = _0x9e6bfd(0x179)),
    (authHeader[_0x9e6bfd(0x1b2)][_0x9e6bfd(0x188)] = _0x9e6bfd(0x179)),
    (authKeyText[_0x9e6bfd(0x1b2)]["display"] = _0x9e6bfd(0x179)),
    (authCopyContainer[_0x9e6bfd(0x1b2)][_0x9e6bfd(0x188)] = _0x9e6bfd(0x1af)),
    (authKeyCopy[_0x9e6bfd(0x1ab)] = _0x151f73);
}
async function handleNewUser() {
  const _0x4fbbf5 = _0x50013c;
  (authKeyText[_0x4fbbf5(0x1ab)] = _0x4fbbf5(0x17a)),
    (authHeader["innerText"] = _0x4fbbf5(0x199)),
    (loader[_0x4fbbf5(0x1b2)][_0x4fbbf5(0x188)] = "block"),
    await createUser();
  return;
}
enterBtn[_0x50013c(0x17f)]("click", () => {
  const _0x4feba9 = _0x50013c;
  if (authUsername[_0x4feba9(0x1a1)]["trim"]() === "") {
    alert("Please\x20enter\x20your\x20username");
    return;
  }
  if (
    authUsername[_0x4feba9(0x1a1)]
      [_0x4feba9(0x177)]()
      ["toLowerCase"]()
      [_0x4feba9(0x196)]("bbflabs"["toLowerCase"]())
  ) {
    (authHeader[_0x4feba9(0x1ab)] = _0x4feba9(0x17c)),
      (authUsername[_0x4feba9(0x1a1)] = "");
    return;
  }
  if (
    authUsername[_0x4feba9(0x1a1)][_0x4feba9(0x177)]()[_0x4feba9(0x187)] < 0x4
  ) {
    (authHeader[_0x4feba9(0x1ab)] = _0x4feba9(0x184)),
      (authUsername[_0x4feba9(0x1a1)] = "");
    return;
  }
  giveAuthKey();
}),
  copyBtn[_0x50013c(0x17f)](_0x50013c(0x197), () => {
    const _0x56a033 = _0x50013c;
    navigator["clipboard"]
      [_0x56a033(0x19e)](authKey)
      [_0x56a033(0x195)](() => {
        const _0x280c72 = _0x56a033;
        (copyBtn[_0x280c72(0x1ab)] = _0x280c72(0x1a2)),
          setTimeout(() => {
            const _0x45dd20 = _0x280c72;
            copyBtn["textContent"] = _0x45dd20(0x19a);
          }, 0x7d0);
      })
      ["catch"]((_0x19e3aa) => {
        const _0x471db0 = _0x56a033;
        throw new Error(_0x471db0(0x17b));
      });
  });
async function createUser() {
  const _0xde7dd0 = _0x50013c;
  try {
    (userName = authUsername["value"][_0xde7dd0(0x177)]()),
      localStorage["setItem"](_0xde7dd0(0x1a9), userName);
    let _0xa02635 = JSON["stringify"]({
      username: userName["toLowerCase"](),
      role: _0xde7dd0(0x1ad),
    });
    const _0x138323 = await fetch(_0xde7dd0(0x18f), {
      method: "POST",
      headers: { "Content-Type": _0xde7dd0(0x17e) },
      body: _0xa02635,
      mode: _0xde7dd0(0x1a7),
    });
    if (!_0x138323["ok"]) {
      console["log"](_0x138323);
      throw new Error(_0xde7dd0(0x1ac));
    }
    const _0x4d0dd6 = await _0x138323[_0xde7dd0(0x198)]();
    if (_0x4d0dd6[_0xde7dd0(0x18e)]) giveAuthKey();
    else throw new Error(_0xde7dd0(0x182));
  } catch (_0x3986e) {
    console["log"](_0x3986e);
    throw new Error(_0xde7dd0(0x1ac));
  }
}
