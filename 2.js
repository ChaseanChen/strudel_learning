// 设定一个缓慢、有呼吸感的节奏
setcps(0.28);

stack(
  // 使用长音，让低音像远处的钟声一样铺开
  note("<a1 f1 c1 g0>")
    ._scope()
    .s("piano")
    .gain(range(0.35, 0.45, rand))
    .room(0.8) // 增加空间感
    .lpf(1000) // 稍微削弱高频，让低音不突兀
    .slow(4),

  // 使用小调和弦 (Am, Fmaj7, C, G)
  note("<[a2,e3,a3,c4] [f2, c3, f3, a3] [c2,g3,c4,e4] [g2,d3,g3,b3]>")
    ._scope()
    .s("piano")
    .struct("1(3,8)") // 这里的 1(3,8) 创造了一种优雅的“三拍子”律动感
    .velocity(0.4)
    .room(0.7)
    .gain(sine.range(0.3, 0.5).slow(4)) // 声音大小设置为0.3-0.5之间随机变化
    .slow(3), // 让和弦变换得慢一些
  // 让旋律的速度在 0.8倍 到 1.5倍 之间像波浪一样起伏
  // .fast(sine.range(0.8, 1.5).slow(8)),

  note("~ c5 ~ b4 ~ [a4, e5] ~ ~ | ~ e5 ~ g5 ~ d5 ~ ~")
    ._scope()
    .s("piano")
    .velocity(perlin.range(0.3, 0.6)) // 模拟指尖轻重的细微变化
    .room(0.95)
    .delay(0.6)
    .delayfb(0.4) // 增加回声延迟，制造空灵感
    .pan(0.3)
    .fast(0.93)
    .gain(0.7), // 让旋律偏向左声道一点点，和背景拉开空间
);
