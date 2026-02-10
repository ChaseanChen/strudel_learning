// 设定极慢的速度，模拟午后慵懒且忧郁的呼吸感
setcps(0.25);

// 旋律部分：A 旋律小调 (A Melodic Minor)
// [a3 ~ e4 ~] 表示第一拍 A3，第二拍空，第三拍高音 E4，第四拍空
const melody = note("[a3 ~ e4 ~] [d4 ~ c4 ~] [f#3 ~ g#3 ~] [a3 ~ ~ ~]")
  .s("piano")
  .velocity(0.45) // 轻柔的按键
  .room(0.8)
  .size(0.9) // 极大的空间感，让音符有消失在空气中的感觉
  .delay(0.5)
  .delayfb(0.2); // 淡淡的回声

// 底层和弦：使用低八度的根音和三音，增加厚重感
const chords = note(
  "[<a1 c2 e2> ~ ~ ~] [<d2 f2 a2> ~ ~ ~] [<e2 g#2 b2> ~ ~ ~] [<a1 c2 e2> ~ ~ ~]",
)
  .s("piano")
  .gain(0.7)
  .velocity(0.3)
  .lpf(800); // 关键：低通滤波，把钢琴声变闷，像从旧收音机传出，增加忧虑氛围

stack(melody, chords).bank("gm"); // 加载通用 MIDI 库音色
