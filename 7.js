setcps(0.29);

stack(
  note("<[a2,e3,a3,c4] [f2,c3,f3,a3] [c2,g3,c4,e4] [g2,d3,g3,b3]>")
    .s("piano")
    .struct("1(3,8)")
    .velocity(0.35) // 降低触键力度，听起来更温柔
    .gain(3) // 显著降低这一层的增益，让它退到后面去
    .room(0.6)
    .hpf(200) // 切掉和弦的低频，防止和低音层打架
    .slow(2.8)
    ._scope(),

  note("~ c5 ~ b4 ~ [a4,e5] ~ ~ | ~ e5 ~ g5 ~ d5 ~ ~")
    .s("piano")
    .velocity(perlin.range(0.3, 0.5))
    .room(0.8) // 旋律可以保持较高的空间感
    .delay(0.6)
    .delayfb(0.3) // 稍微降低一点反馈(fb)，防止回声堆积
    .hpf(500)
    .gain(5) // 让旋律听起来更清脆、空灵
    .pan(0.3)
    ._scope(),
);
