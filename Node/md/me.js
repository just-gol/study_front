function tiemo() {
  console.log("贴膜");
}

function niejiao() {
  console.log("捏脚");
}

export function add(a, b) {
  return a + b;
}

//暴露模块
// module.exports = tiemo;

// 暴露多个
// export default {
//   tiemo, niejiao
// }

// module.exports = text;

// export { niejiao, tiemo };
// import text from './text.json' with { type: 'json' };

// export { text };