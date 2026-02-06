// 极度不和谐小二度
// note("[c3, db3]")

// 纯八度 Octave
// note("[c3, c4]")

// 纯五度 Perfect 5th
// note("[c3 g3]")

// 大三度 Major 3rd
// note("[c3 e3]")

// c大调和弦
// s("piano").note("[c3, e3, g3]").room(0.5)

// 设定一个缓慢、有呼吸感的节奏
setcps(0.29);

stack(
  // 1. 底层：深沉且温暖的基座 (Bass)
  // 使用长音，让低音像远处的钟声一样铺开
  note("<a1 f1 c1 g0>")
    .s("piano")
    .gain(0.6)
    .room(0.8) // 增加空间感
    .lpf(1000), // 稍微削弱高频，让低音不突兀

  // 2. 中层：流动的琶音 (The Flowing Heart)
  // 我们使用小调和弦 (Am, Fmaj7, C, G)
  note("<[a2,e3,a3,c4] [f2,c3,f3,a3] [c2,g3,c4,e4] [g2,d3,g3,b3]>")
    .s("piano")
    .struct("1(3,8)") // 这里的 1(3,8) 创造了一种优雅的“三拍子”律动感
    .velocity(0.4)
    .room(0.7)
    .slow(2), // 让和弦变换得慢一些

  // 3. 高层：清澈的断续旋律 (The Echo)
  // 旋律要极简，要有大量的停顿 (~)，就像欲言又止的叹息
  note("~ c5 ~ b4 ~ [a4,e5] ~ ~ | ~ e5 ~ g5 ~ d5 ~ ~")
    .s("piano")
    .velocity(perlin.range(0.3, 0.6)) // 模拟指尖轻重的细微变化
    .room(1)
    .delay(0.6)
    .delayfb(0.4) // 增加回声延迟，制造空灵感
    .pan(0.3), // 让旋律偏向左声道一点点，和背景拉开空间
);
