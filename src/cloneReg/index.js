const reg = /yideng/g;

function cloneReg(target) {
  const regFlag = /\w*$/g;
  const result = new target.constructor(target.source,regFlag.exec(target));
  result.lastIndex = 0;
  return result;
}

const reg2 = cloneReg(reg);

console.log(reg2);