// 极慢的速度，且带有不稳定的律动
setcps(0.18);

// 旋律：强调 B(2级) 和 G#(升7级) 的悬浮感
// 利用 [音符*3] 这种不平衡的长度来打破“轻快”的规整感
const melody = note("[a3*2 ~ ~ b3*1] [c4*3 ~ b3*1] [~ d4*1 c4*2 g#3*1] [a3*4]")
  .s("piano")
  .velocity(nudge(0.1).range(0.3, 0.5)) // 随机微调力度，模拟手指犹豫的触感
  .room(0.9)
  .size(0.9)
  .lpf(1000) // 进一步压低音色，像是在厚重的云层下
  .detune(5); // 极细微的走音，增加不安感

// 和弦：使用“挂留音”和“大七度”，制造纠结的内心冲突
// a2 c3 b3 中，c 和 b 靠得很近，会产生一种压抑的共鸣
const chords = note("<[a2 c3 b3] [f2 a2 e3] [e2 g#2 d3] [a2 c3 e3]>")
  .s("piano")
  .gain(0.6)
  .velocity(0.2)
  .attack(0.2) // 减缓琴音出现的速度，消除清脆感
  .decay(4);

stack(melody, chords).bank("gm");
