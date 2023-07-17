export function algFunc(strP) {
  //
  if (!strP) return;

  if (rgExp.test(strP)) {
    //
    strP = strP.trim();

    strP = clrSpc(strP);
    //
  }

  strP.split(space).forEach((element) => {
    //
    wrdSmblFnd(element);
  });

  crtSmblsAr();
  gtRs();
}

// --------------------
function gtRs() {
  //
  const rs = arRes.find((el) => el.cntr == 1);

  resInp.value = rs.smbl;

  resDescr.innerText = JSON.stringify(arRes, null, 30);

  wrpDescr.classList.remove("displayNone");

  arRes.length = 0;

  strRes = "";

  return rs;
}

function crtSmblsAr() {
  //
  let strCopy = strRes;

  let crntSmbl, arSmbls, obj, mRgExp;

  while (strCopy.length > 0) {
    crntSmbl = strCopy[0];

    if (!inrRgxp.test(crntSmbl)) {
      //
      mRgExp = new RegExp(`${crntSmbl}`, "g");
    } else {
      //
      mRgExp = new RegExp("\\" + `${crntSmbl}`, "g");
    }

    arSmbls = strCopy.match(mRgExp);

    obj = { smbl: crntSmbl, cntr: arSmbls.length };

    arRes.push(obj);

    strCopy = strCopy.replaceAll(crntSmbl, "");
    //
  }

  console.log(arRes);
}

function wrdSmblFnd(elementP) {
  //
  tmpArSmbls = elementP.split("");

  let indx, smbl;

  for (let i = 0; i < tmpArSmbls.length; i++) {
    //
    smbl = tmpArSmbls[i];

    tmpArSmbls[i] = "";

    indx = tmpArSmbls.indexOf(smbl);

    // console.log(indx, tmpArSmbls[i], tmpArSmbls);

    if (indx < 0) {
      //
      strRes += smbl;

      //   console.log(strRes, "|--:--|", smbl, elementP);

      return;
    }
    //
  }
}

function clrSpc(strP) {
  //
  return strP.replaceAll(rgExp, space);
  //
}

const space = " ";

const rgExp = /\s{2,}/g;

const inrRgxp = /\W/,
  arRes = [];

let tmpArSmbls,
  strRes = "";

const resInp = document.getElementById("res");

const resDescr = document.getElementById("descrRes");

const wrpDescr = document.querySelector(".displayNone");
